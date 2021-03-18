const express = require('express')
const secure = require('./secure')

const response = require('../../../network/response')
const Controller = require('./index')

const router = express.Router()

router.get('/', list)
router.get('/:id', get)
router.post('/', upsert)
router.put('/', upsert)
router.post('/payment', secure('pay'), cart)


function list (req, res, next) {
    Controller.list()
        .then((lista) => {
            response.success(req, res, lista, 200)
        })
        .catch(next)
}

function get (req, res, next) {
    Controller.get(req.params.id)
        .then((cart) => {
            response.success(req, res, cart, 200)
        })
        .catch(next)
}

function upsert (req, res, next) {
    Controller.upsert(req.body)
        .then((cart) => {
            response.success(req, res, cart, 201)
        })
        .catch(next)
}

function cart (req, res, next) {
    Controller.cart(req.body)
        .then((cart) => {
            response.success(req, res, cart, 201)
        })
        .catch(next)
}

module.exports = router