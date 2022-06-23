exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('memberships')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('memberships').insert([
        {
          type: 'Normal',
          monthly_rate: 50,
        },
        {
          type: 'Employee',
          monthly_rate: 0,
        },
        {
          type: 'Student',
          monthly_rate: 40,
        },
        {
          type: 'Family',
          monthly_rate: 80,
        },
      ]);
    });
};
