const Post = require("../models/post")
var potd = []

var CronJob = require('cron').CronJob;
new CronJob('0 */1 * * * *', function() {
  PostController.getPostOfTheDay()
}, null, true);

class PostController {
    static create (req, res, next) {
        var newPost = new Post({
            title: req.body.title,
            description: req.body.description,
            author: req.body.userId,
            upvotes: [req.body.userId],
            downvotes: [],
            tags: req.body.tags
        })
        return newPost.save()
        .then(created =>{
            res.status(201).json(created)
        })
        .catch(next)
    }

    static findAll (req, res, next) {
        Post.find({}).populate("author")
        .then(posts =>{
            res.status(201).json(posts)
        })
        .catch(next)
    }

    static findTag (req, res, next) {
        Post.find({tags: {$in: [req.params.tag]}}).sort({"createdAt": 'desc'})
        .then(posts =>{
            res.status(200).json(posts)
        })
        .catch(next)
    }


    static findMyPosts (req, res, next) {
        return Post.find({author: req.query.userid}).populate("author")
        .then(posts =>{
            res.status(201).json(posts)
        })
        .catch(next)
    }

    static upvote (req, res, next) {
        Post.findOne({_id: req.body.postId})
        .then(post =>{
            post.upvotes.push(req.body.userId)
            var found = post.downvotes.indexOf(req.body.userId)
            if(found !== -1) {
                post.downvotes.splice(found, 1)
            }
            return post.save()
        })
        .then(upvoted =>{
            res.status(201).json(upvoted)
        })
        .catch(next)
    }

    static downvote (req, res, next) {
        Post.findOne({_id: req.body.postId})
        .then(post =>{
            post.downvotes.push(req.body.userId)
            var found = post.upvotes.indexOf(req.body.userId)
            if(found !== -1) {
                post.upvotes.splice(found, 1)
            }
            return post.save()
        })
        .then(downvoted =>{
            res.status(201).json(downvoted)
        })
        .catch(next)
    }

    static unvote (req, res, next) {
        Post.findOne({_id: req.body.postId})
        .then(post =>{
            post.upvotes = req.body.upvotes
            post.downvotes = req.body.downvotes
            return post.save()
        })
        .then(unvoted =>{
            res.status(201).json(unvoted)
        })
        .catch(next)
        
    }

    static delete (req, res, next) {
        Post.deleteOne({_id: req.query.postid})
        .then(deleted =>{
            res.status(200).json(deleted)
        })
        .catch(next)
    }

    static update (req, res, next) {
        Post.findOne({_id: req.query.postid})
        .then(post =>{
            post.title = req.body.title,
            post.description = req.body.description
        })
        .catch(next)
    }

    static getPostOfTheDay () {
        var temp = []
        Post.find()
        .then(posts =>{
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0')
            var yyyy = today.getFullYear();

            today = mm + '/' + dd + '/' + yyyy;
            posts.forEach(post =>{
                var date = new Date(post.createdAt)
                var postDate = String(date.getDate()).padStart(2, '0');
                var postMonth = String(date.getMonth() + 1).padStart(2, '0')
                var postYear = date.getFullYear();

                date = postMonth + '/' + postDate + '/' + postYear;
                if(today === date) {
                    temp.push(post)
                }
            })
            potd = temp.sort(function(a, b) {
                var a2 = a.upvotes.length - a.downvotes.length
                var b2 = b.upvotes.length - b.downvotes.length
                return b2 - a2
            })
            potd.splice(5, potd.length-5)
            console.log(potd)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    static update (req, res, next) {
        Post.findOne({_id: req.query.postid})
        .then(post =>{
            post.title = req.body.title
            post.description = req.body.description
            return post.save()
        })
        .then(post =>{
            console.log(post)
            res.status(200).json(post)
        })
        .catch(next)

    }


    static fetchPOTD(req, res, next) {
        res.status(200).json(potd)
    }
}

module.exports = PostController