
exports.seed = function(knex) {
  const users = [
    {
      name: 'Bubby'
    },
    {
      name: 'Luffy'
    }
  ]

  return knex('users').insert(users)
};
