import { parse as parseCookie, serialize as serializeCookie } from 'cookie';
import isNil from 'lodash-es/isNil';
import isArrayLikeObject from 'lodash-es/isArrayLikeObject';
import isPlainObject from 'lodash-es/isPlainObject';
import defaultsDeep from 'lodash-es/defaultsDeep';
import stringify from 'fast-stringify';
import secure from 'secure-json-parse';
import date from 'json-date-parser';

// Inspired by https://github.com/nuxt-community/universal-storage-module

export default class Storage {
  constructor(options = {}) {
    this.options = defaultsDeep({
      cookie: {
        prefix: '',
        options: {
          path: '/'
        }
      },
      localStorage: {
        prefix: ''
      },
      ignoreExceptions: false
    }, options);

    this._initState(options.initialState);
  }

  // ------------------------------------
  // Universal
  // ------------------------------------

  setUniversal(key, value) {
    // Local state
    this.setState(key, value);

    // Cookies
    this.setCookie(key, value);

    // Local Storage
    this.setLocalStorage(key, value);

    return value;
  }

  getUniversal(key) {
    // Local state
    let value = this.getState(key);

    // Cookies
    if (isNil(value)) {
      value = this.getCookie(key);
    }

    // Local Storage
    if (isNil(value)) {
      value = this.getLocalStorage(key);
    }

    return value;
  }

  syncUniversal(key, defaultValue) {
    let value = this.getUniversal(key);

    if (isNil(value) && !isNil(defaultValue)) {
      value = defaultValue;
    }

    if (!isNil(value)) {
      this.setUniversal(key, value);
    }

    return value;
  }

  removeUniversal(key) {
    this.removeState(key);
    this.removeLocalStorage(key);
    this.removeCookie(key);
  }

  // ------------------------------------
  // Local state
  // ------------------------------------

  _initState(initData) {
    this._state = {};

    // Synchronise initial values
    for (let key in initData) {
      this.syncUniversal(key, initData[key]);
    }
  }

  setState(key, value) {
    return this._state[key] = value;
  }

  getState(key) {
    return this._state[key];
  }

  removeState(key) {
    this.setState(key, null);
  }

  // ------------------------------------
  // Local storage
  // ------------------------------------

  setLocalStorage(key, value) {
    if (typeof localStorage === 'undefined' || !this.options.localStorage) {
      return;
    }

    const _key = this.options.localStorage.prefix + key;

    try {
      if (isObjectOrArray(value)) {
        localStorage.setItem(_key, stringify(value));
      } else {
        localStorage.setItem(_key, value);
      }
    } catch (e) {
      if (!this.options.ignoreExceptions) {
        throw e;
      }
    }

    return value;
  }

  getLocalStorage(key) {
    if (typeof localStorage === 'undefined' || !this.options.localStorage) {
      return;
    }

    const _key = this.options.localStorage.prefix + key;

    const value = localStorage.getItem(_key);

    return decodeValue(value);
  }

  removeLocalStorage(key) {
    if (typeof localStorage === 'undefined' || !this.options.localStorage) {
      return;
    }
    const _key = this.options.localStorage.prefix + key;
    localStorage.removeItem(_key);
  }

  // ------------------------------------
  // Cookies
  // ------------------------------------

  getCookies() {
    return parseCookie(document.cookie || '') || {};
  }

  setCookie(key, value, options = {}) {
    if (!this.options.cookie) {
      return;
    }

    const _key = this.options.cookie.prefix + key;
    const _options = Object.assign({}, this.options.cookie.options, options);
    const _value = encodeValue(value);

    const serializedCookie = serializeCookie(_key, _value, _options);

    document.cookie = serializedCookie;

    return value;
  }

  getCookie(key) {
    if (!this.options.cookie) {
      return;
    }

    const _key = this.options.cookie.prefix + key;

    const cookies = this.getCookies();

    const value = cookies[_key] ? decodeURIComponent(cookies[_key]) : null;

    return decodeValue(value);
  }

  removeCookie(key, options) {
    this.setCookie(key, null, Object.assign({ maxAge: -1 }, options));
  }
}

// ------------------------------------
// Utils
// ------------------------------------

function isObjectOrArray(val) {
  return isArrayLikeObject(val) || isPlainObject(val);
}

function nullish() {
  return null;
}

function encodeValue(val) {
  if (isNil(val)) {
    return nullish();
  }
  if (typeof val === 'string') {
    return val;
  }
  if (isObjectOrArray()) {
    return stringify(val, null, 0, nullish);
  }
  return '' + val;
}

function decodeValue(val) {
  // If value is somehow undefined, return as is (erroneous code)
  if (isNil(val)) {
    return val;
  }

  // If value is an object, return object
  if (isPlainObject(val)) {
    return val;
  }

  // Finally try to parse it as json, or fallback to original value
  try {
    return secure.parse(val, date, { protoAction: 'remove', constructorAction: 'remove' });
  } catch (error) {
    return val;
  }
}
