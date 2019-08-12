const express = require('express')

const router = express.Router()

const db = require('../../data/db')

router.get('/', (req, res) => {
  db.find()
  .then(posts => {
	res.status(200).json(posts)
  })
  .catch(err => {
	res.status(500).json({
		err: err
	})
  })
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