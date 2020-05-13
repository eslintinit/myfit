const { objectType } = require('nexus')

const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.email()
    t.model.imgurl()
    t.model.gym()
  },
})

module.exports = {
  User,
}
