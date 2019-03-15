[![Build Status](https://travis-ci.org/zrrrzzt/micro-echo.svg?branch=master)](https://travis-ci.org/zrrrzzt/micro-echo)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# micro-echo

Echoes back your POST or GET

```bash
$ curl -v https://echo.mikrotjeneste.win -d '{"query": "pythonia"}'
```

```bash
$ curl -v https://echo.mikrotjeneste.win?query=pythonia
```

Both returns

```JavaScript
{
  "query": "pythonia"
}
```

## Deploy using [Now](https://zeit.co/now)

```bash
$ npm run deploy
```

## License

[MIT](LICENSE)
