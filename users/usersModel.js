const db = require('../data/db-connection')

module.exports = {
    add, 
    getAll,
    findById,
    remove
}

async function add(hobbit) {
    return db('hobbits')
    .insert(hobbit, 'id')
    .then(([id]) => {
      return findById(id)
    });
}

function getAll() {
    return db('hobbits');
}

  function findById(id) {
    return db('hobbits')
    .where({id})
    .first();
  
}

function remove(id) {
    return db('hobbits')
    .where({id})
    .del()
}