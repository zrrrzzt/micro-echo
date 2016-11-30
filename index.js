'use strict'

const { parse } = require('url')
const { json, send } = require('micro')

module.exports = async (request, response) => {
  const data = request.method === 'POST' ? await json(request) : parse(request.url, true).query
  send(response, 200, data)
}
