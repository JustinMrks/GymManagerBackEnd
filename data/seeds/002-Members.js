exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('members')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('memberships').insert([
        {
          first_name: 'Justin',
          last_name: 'Marks',
          payment_info: '2055-8347-1209-8832',
          membership_id: 2,
        },
        // {
        //   first_name: 'Employee',
        //   last_name: 0,
        //   payment_info: 'Normal',
        //   membership_id: 50,
        // },
        // {
        //   first_name: 'Employee',
        //   last_name: 0,
        //   payment_info: 'Normal',
        //   membership_id: 50,
        // },
        // {
        //   first_name: 'Employee',
        //   last_name: 0,
        //   payment_info: 'Normal',
        //   membership_id: 50,
        // },
      ]);
    });
};
