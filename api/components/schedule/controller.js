
const auth = require('../auth')

const TABLE = 'schedule'

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
        const schedule = {
            cinema_id: body.cinema_id,
            film_id: body.film_id,
            schedule: body.schedule
        }

        return store.upsert(TABLE, schedule)
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