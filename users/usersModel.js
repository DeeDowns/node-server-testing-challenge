const db = require('../data/db-connection')

module.exports = {
    add, 
    getAll,
    findById,
    remove
}

async function add(user) {
    return db('users')
    .insert(user, 'id')
    .then(([id]) => {
      return findById(id)
    });
}

function getAll() {
    return db('users');
}

  function findById(id) {
    return db('users')
    .where({id})
    .first();
  
}

function remove(id) {
    return db('users')
    .where({id})
    .del()
}