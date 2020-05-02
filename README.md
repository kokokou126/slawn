# slawn

[![GitHub](https://img.shields.io/badge/GitHub-kokokou126/slawn-181717?logo=GitHub&style=flat-square)](https://github.com/kokokou126/slawn)
[![Netlify](https://img.shields.io/badge/Netlify-slawn--docs-00c7b7?logo=Netlify&style=flat-square)](https://slawn-docs.netlify.app)
[![Travis CI](https://img.shields.io/badge/Travis%20CI-status-3eaaaf?logo=Travis%20CI&style=flat-square)](https://travis-ci.org/github/kokokou126/slawn)
[![NPM](https://img.shields.io/badge/NPM-slawn-cb3837?logo=NPM&style=flat-square)](https://npmjs.com/package/slawn)  
[![Release](https://flat.badgen.net/github/release/kokokou126/slawn)](https://github.com/kokokou126/slawn/releases)
[![LICENSE](https://flat.badgen.net/github/license/kokokou126/slawn)](https://github.com/kokokou126/slawn/blob/master/LICENSE)
[![NPM Version](https://flat.badgen.net/npm/v/slawn)](https://npmjs.com/package/slawn)
[![Travis CI Status](https://travis-ci.org/kokokou126/slawn.svg?branch=master&status=failed)](https://travis-ci.org/github/kokokou126/slawn)
[![Netlify Status](https://api.netlify.com/api/v1/badges/c64e8253-dcf2-4f89-92dc-90f03a9e740a/deploy-status)](https://app.netlify.com/sites/slawn-docs/deploys)

A programming language made with JavaScript

## Platforms

- Browser
- Node.js

## Try

### With browser

#### CDN

##### jsDelivr

```
https://cdn.jsdelivr.net/npm/slawn/dist/slawn.js
```

##### UNPKG

```
https://unpkg.com/slawn/dist/slawn.js
```

##### Minified version

```
https://cdn.jsdelivr.net/npm/slawn/dist/slawn.min.js
```

```
https://unpkg.com/slawn/dist/slawn.min.js
```

#### Use like this

```html
<script type="module">
  import Slawn from 'https://cdn.jsdelivr.net/npm/slawn/dist/slawn.js'
  const Slawn = new Slawn()
  // your code...
</script>
```

### With Node.js

#### Interactive mode

```bash
bin/islawn
```

#### ES6 import

```js
import Slawn from 'slawn'
const Slawn = new Slawn()
// your code...
```

## API documents
[slawn-docs.netlify.app](https://slawn-docs.netlify.app)

### Generating API documents

```bash
npm run doc
```

Will be generated to "docs/"

## Development

Run the test

```
npm test
```

## LICENSE

MIT
