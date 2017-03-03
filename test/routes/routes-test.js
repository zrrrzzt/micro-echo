'use strict'

const test = require('ava')
const listen = require('test-listen')
const axios = require('axios')
const micro = require('micro')
const srv = require('../../index')

const getUrl = fn => {
  const srv = micro(fn)
  return listen(srv)
}

test('it returns README as frontpage', async t => {
  const url = await getUrl(srv)
  const result = await axios.get(url)
  t.true(result.data.includes('MIT'), 'frontpage ok')
})

test('it returns json from GET', async t => {
  const url = await getUrl(srv)
  const result = await axios.get(`${url}?description=cool`)
  t.deepEqual(result.data.description, 'cool', 'json ok')
})

test('it returns json from POST', async t => {
  const url = await getUrl(srv)
  const result = await axios.post(`${url}`, {description: 'cool'})
  t.deepEqual(result.data.description, 'cool', 'json ok')
})
