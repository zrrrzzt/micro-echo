# micro-echo
Echoes back your POST or GET

```sh
$ curl -v http://localhost:3000 -d '{"query": "pythonia"}'
```

```sh
$ curl -v http://localhost:3000?query=pythonia
```

Both returns

```JavaScript
{
  "query": "pythonia"
}
```

## Deploy using [Now](https://zeit.co/now)

```sh
$ now git https://github.com/zrrrzzt/micro-echo
```

## License
[MIT](LICENSE)