const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).send('hello from the GET /posts endpoint')
})

router.get('/:id', (req, res) => {
	res.status(200).send('hello from the GET /posts/:id endpoint')
})

router.get('/:id/comments', (req, res) => {
	res.status(200).send('hello from the GET /posts/:id/comments endpoint')
})

router.post('/', (req,res) => {
	res.status(200).send('hello from the POST /posts endpoint')
})

router.post('/:id/comments', (req,res) => {
	res.status(200).send('hello from the POST posts/:id/comments endpoint')
})

router.put('/:id', (req,res) => {
	res.status(200).send('hello from the POST posts/:id/comments endpoint')
})

router.delete('/:id', (req,res) => {
	res.status(200).send('hello from the POST posts/:id/comments endpoint')
})

module.exports = router