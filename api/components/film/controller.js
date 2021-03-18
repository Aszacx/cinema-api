
const { nanoid } = require('nanoid')

const TABLE = 'film'

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
        const film = {
            title: body.title,
            director: body.director,
            runtime: body.runtime
        }

        if (body.id){
            film.id = body.id
        } else {
            film.id = nanoid()
        }

        return store.upsert(TABLE, film)
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