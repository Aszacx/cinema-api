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
        .then((schedule) => {
            response.success(req, res, schedule, 200)
        })
        .catch(next)
}

function upsert (req, res, next) {
    Controller.upsert(req.body)
        .then((schedule) => {
            response.success(req, res, schedule, 201)
        })
        .catch(next)
}

function remove (req, res, next) {
    Controller.get(req.params.id)
        .then((schedule) => {
            response.success(req, res, schedule, 200)
        })
        .catch(next)
}

module.exports = router