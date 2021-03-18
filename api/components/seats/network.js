const express = require('express')

const response = require('../../../network/response')
const Controller = require('./index')

const router = express.Router()

router.get('/', list)
router.get('/:id', get)
router.post('/', upsert)
router.put('/', upsert)
router.delete('/', remove)


function list (req, res, next) {
    Controller.list()
        .then((lista) => {
            response.success(req, res, lista, 200)
        })
        .catch(next)
}

function get (req, res, next) {
    Controller.get(req.params.id)
        .then((seats) => {
            response.success(req, res, seats, 200)
        })
        .catch(next)
}

function upsert (req, res, next) {
    console.log("Seats:", req.body)
    Controller.upsert(req.body)
        .then((seats) => {
            response.success(req, res, seats, 201)
        })
        .catch(next)
}

function remove (req, res, next) {
    Controller.get(req.params.id)
        .then((seats) => {
            response.success(req, res, seats, 200)
        })
        .catch(next)
}

module.exports = router