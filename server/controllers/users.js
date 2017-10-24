const mongoose = require = require("mongoose")
const User = mongoose.model("User")
const Bid = mongoose.model("Bid")

module.exports = {

    get_all_users: (req, res) => {
        User.find({})
            .then(users => res.json(users))
            .catch(err => {
                console.log("User find ERROR", err)
                res.status(500).json(err)
            })
    },

    login: (req, res) => {
        User.findOne({ name: req.body.name })
            .then(user => {
                if (user) {
                    req.session.user = user
                    res.json(true)
                } else {
                    let new_user = new User(req.body)

                    new_user.save()
                        .then(() => {
                            req.session.user = new_user
                            res.json(true)
                        })
                        .catch(err => {
                            console.log("User save ERROR", err)
                            res.status(500).json(err)
                        })
                }
            })
    },

    am_i_logged_in: (req, res) => {
        if (req.session.user) {
            res.json(req.session.user)
        } else {
            res.status(401).json(false)
        }
    },

    logout: (req, res) => {
        req.session.destroy()
        res.redirect("/")
    },

    add_bid: (req, res) => {
        let new_bid = new Bid(req.body)
        new_bid.save()
            .then(() => {
                console.log("Bid successfully added")
                res.json(true)
            })
            .catch(err => {
                console.log("Bid save ERROR", err)
                res.status(500).json(err)
            })
    },

    get_all_bids: (req, res) => {
        Bid.find({})
            .then(bids => res.json(bids))
            .catch(err => {
                console.log("Bid find ERROR", err)
                res.status(500).json(err)
            })
    },

    get_one_user: (req, res) => {
        User.findOne({ name: req.body.name })
            .then(user => req.session.user = user)
            .catch(err => {
                console.log('User find ERROR', err)
                res.status(500).json(err)
            })
    }
}