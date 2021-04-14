const mongoose = require("mongoose")
require("../models/user")
const User = mongoose.model("user")

function get_all_user(req, res) {
}

function get_one_user(req, res) {
}

function new_user(req, res) {
}

function update_user(req, res) {
}

function delete_user(req, res) {
}

module.exports = {
    get_all_user: get_all_user(),
    get_one_user: get_one_user(),
    new_user: new_user(),
    update_user: update_user(),
    delete_user: delete_user()
}