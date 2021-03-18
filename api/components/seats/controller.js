
const { nanoid } = require('nanoid')

const TABLE = 'seats'

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
        const seats = {
            film_id: body.film_id,
            seats: body.seats,
            price: body.price,
        }

        if (body.id){
            seats.id = body.id
        } else {
            seats.id = nanoid()
        }

        return store.upsert(TABLE, seats)
    }

    function remove(id) {
        return store.remove(TABLE, id)
    }

    return {
        list,
        get, 
        upsert,
        remove
    }
}