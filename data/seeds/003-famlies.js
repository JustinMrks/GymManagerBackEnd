exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('famlies')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('memberships').insert([
        {
          family_head: 1,
        },
        {
          family_head: 2,
        },
        {
          family_head: 3,
        },
        {
          family_head: 4,
        },
      ]);
    });
};
