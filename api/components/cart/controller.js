
const { nanoid } = require('nanoid')
const auth = require('../auth')

const TABLE = 'payment'

module.exports = function (injectedStore) {
    let store = injectedStore
    if (!store){
        store = require('../../../store/dummy')
    }

    function list() {
        return store.list(TABLE)
    }

    function get(id) {
        return store.get(TABLE, id)
    }

    async function upsert(body) {
        const cart = {
            user_id: body.user_id,
            film_id: body.film_id,
            cinema_id: body.cinema_id,
            seats_buy: body.seats_buy,
            total: body.total
        }

        if (body.id){
            cart.id = body.id
        } else {
            cart.id = nanoid()
        }

        return store.upsert(TABLE, cart)
    }

    return {
        list,
        get, 
        upsert
    }
}