exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('memberstofamlies')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('memberships').insert([
        {
          member_id: 1,
          family_id: 0,
        },
        // {
        //   member_id: 1,
        //   family_id: 0,
        // },
        // {
        //   member_id: 1,
        //   family_id: 0,
        // },
        // {
        //   member_id: 1,
        //   family_id: 0,
        // },
      ]);
    });
};
