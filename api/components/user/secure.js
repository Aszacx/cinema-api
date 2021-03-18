const auth = require('../../../auth')

module.exports = function checkAuth(action) {
    function middleware(req, res, next) {
        switch(action) {
            case 'update':
                const owner = req.body.id
                auth.check.own(req, owner)
                next()
                break
            case 'pay':
                auth.check.logged(req)
                next()
                break
            default:
                next()
        }
    }

    return middleware
}