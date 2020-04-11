# Universal Storage

[![npm (scoped with tag)](https://img.shields.io/npm/v/@eolme/universal-storage/latest.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/universal-storage)

> Universal Storage Utilities inspired by [@nuxt-community/universal-storage-module](https://github.com/nuxt-community/universal-storage-module)

## Setup

- Add `@eolme/universal-storage` dependency using yarn or npm to your project

```sh
yarn add @eolme/universal-storage
```

OR

```sh
npm install @eolme/universal-storage --save
```

## Usage

### Options

Options are defined as following:

```js
{
  cookie, // set false to disable
  localStorage, // set false to disable
  initialState, // plain object (optional)
  ignoreExceptions
}
```

and default to the following values:

```js
{
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
}
```

### Api

- `storage.getUniversal(key)`

- `storage.setUniversal(key, value)`

- `storage.syncUniversal(key, defaultValue)`

- `storage.removeUniversal(key)`

- `storage.getState(key)`

- `storage.setState(key, value)`

- `storage.removeState(key)`

- `storage.getLocalStorage(key)`

- `storage.setLocalStorage(key, value)`

- `storage.removeLocalStorage(key)`

- `storage.getCookies()`

- `storage.getCookie(key)`

- `storage.setCookie(key, value)`

- `storage.removeCookie(key)`

## Roadmap

- TypeScript support
- Tests

## License

[MIT License](./LICENSE)
