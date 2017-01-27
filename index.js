'use strict'

const { parse } = require('url')
const { json, send } = require('micro')

module.exports = async (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  const data = request.method === 'POST' ? await json(request) : parse(request.url, true).query
  send(response, 200, data)
}
