const path = require("path")
const user = require('./../controllers/users.js')


module.exports = app => {

    app.post("/login", user.login)

    app.get("/logout", user.logout)

    app.get("/am_i_logged_in", user.am_i_logged_in)

    app.get("/get_all_users", user.get_all_users)

    app.post("/add_bid", user.add_bid)

    app.get("/get_all_bids", user.get_all_bids)

    app.get("/get_one_user", user.get_one_user)


    app.get("*", (req, res) => res.sendFile(path.resolve("./client/dist/index.html")))

}