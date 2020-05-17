const { objectType } = require('nexus')

const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.email()
    t.model.imgurl()
    t.model.gym()
    t.model.resetToken()
    t.model.resetTokenExpiry()
    t.model.favorites()
  },
})

module.exports = {
  User,
}
