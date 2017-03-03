[![Build Status](https://travis-ci.org/zrrrzzt/micro-echo.svg?branch=master)](https://travis-ci.org/zrrrzzt/micro-echo)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/zrrrzzt/micro-echo.svg)](https://greenkeeper.io/)

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
$ now https://github.com/zrrrzzt/micro-echo
```

## License

[MIT](LICENSE)

![alt text](https://robots.kebabstudios.party/micro-echo.png "Robohash image of micro-echo")
