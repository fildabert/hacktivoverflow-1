require("dotenv").config()
const User = require("../models/user")
const bcrypt = require("bcrypt")
const secret = process.env.SECRET
const jwt = require("jsonwebtoken")

class UserController {
    static register (req, res, next) {
        var newUser = new User ({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            watchedTags: []
        })
        return newUser.save()
         .then(created =>{
            const token = jwt.sign({_id: created._id, email: created.email, username: created.username, watchedTags: created.watchedTags}, secret, {expiresIn: "6h"})
            res.status(200).json({"access_token": token, _id: created._id, "username": created.username, "email": created.email, "watchedTags": created.watchedTags})
         })
         .catch(next)
    }
    static login (req, res, next) {
        User.findOne({username: req.body.username})
        .then(userFound =>{
            if(userFound){
                res.locals.userData = userFound
                return bcrypt.compare(req.body.password, userFound.password)
            }else{
                throw ({
                    code: 400,
                    message: "Invalid Username/Password"
                })
            }
        })
        .then(valid =>{
            console.log(res.locals.userData)
            if(valid){
                // console.log(res.locals.userData)
                const token = jwt.sign({_id: res.locals.userData._id, email: res.locals.userData.email, username: res.locals.userData.username, watchedTags: res.locals.userData.watchedTags}, secret, {expiresIn: "6h"})
                res.status(200).json({"access_token": token, _id: res.locals.userData._id, "username": res.locals.userData.username, "email": res.locals.userData.email, watchedTags: res.locals.userData.watchedTags})
            }else{
                throw ({
                    code: 400,
                    message: "Invalid Username/Password"
                })
            }
        })
        .catch(next)
    }
    static addWatchedTag(req, res, next) {
        User.findOne({_id: req.headers.decoded._id})
        .then(user =>{
            var index = user.watchedTags.indexOf(req.body.tag)
            if(index === -1) {
                user.watchedTags.push(req.body.tag)
                console.log(user, "WATCHEDTAGS")
                return user.save()
            } else {
                throw({
                    code: 400,
                    message: `You are already watching ${req.body.tag}`
                })
            }
        })
        .then(user =>{
            res.status(200).json(user)
        })
        .catch(next)
    }

    static getWatchedTags(req, res, next) {
        User.findOne({_id: req.headers.decoded._id})
        .then(user =>{
            res.status(200).json(user)
        })
        .catch(next)
    }

    static editWatchedTags(req, res, next) {
        User.findOne({_id: req.headers.decoded._id})
        .then(user =>{
            user.watchedTags = req.body.tags
            console.log(user, "EDITTTT")
            return user.save()
        })
        .then(user =>{
            res.status(200).json(user)
        })
        .catch(next)
    }
}

module.exports = UserController