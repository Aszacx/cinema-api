
const { nanoid } = require('nanoid')

const TABLE = 'cinema'

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
        const cinema = {
            name: body.name,
            city: body.city,
        }

        if (body.id){
            cinema.id = body.id
        } else {
            cinema.id = nanoid()
        }

        return store.upsert(TABLE, cinema)
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