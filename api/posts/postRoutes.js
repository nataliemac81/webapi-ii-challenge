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
		err: err,
		message: "The posts information could not be retrieved."
	})
  })
})

router.get('/:id', (req, res) => {
	const { id } = req.params
	
	db.findById(id)
	.then(post => {
		if(post) {
			res.status(200).json(post)
		} else {
			res.status(404).json({
				message: "The post with the specified ID does not exist."
			})
		}
	})
	.catch(err => {
		res.status(500).json({
			err: err,
			message: "The post information could not be retrieved."
		})
	})
})


router.get('/:id/comments', (req, res) => {
	const { id } = req.params
	const postId = id
	
	db.findPostComments(postId)
	.then(comments => {
		if(postId) {
			res.status(200).json(comments)
		} else {
			res.status(404).json({
				message: "The post with the specified ID does not exist."
			})
		}
	})
	.catch(err => {
		res.status(500).json({
			err: err,
			message: "The comments information could not be retrieved."
		})
	})
})

router.post('/', (req,res) => {
	const newPost = req.body
	const title = newPost.title
	const contents = newPost.contents
	if (!title || !contents) {
		res.status(400).json({
			message: "Please provide title and contents for the post."
		})
	}
	db.insert(newPost)
		.then(post => {
			res.status(201).json(post)
		})
		.catch(err => {
			res.status(500).json({
				err: err,
				message: 'There was an error while saving the user to the database'
			})
		})
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