'use strict'

const readFileSync = require('fs').readFileSync
const md = require('markdown-it')()
const { parse } = require('url')
const { json, send } = require('micro')

module.exports = async (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  const data = request.method === 'POST' ? await json(request) : parse(request.url, true).query
  if (Object.keys(data).length > 0) {
    send(response, 200, data)
  } else {
    const readme = readFileSync('./README.md', 'utf-8')
    send(response, 200, md.render(readme))
  }
}
