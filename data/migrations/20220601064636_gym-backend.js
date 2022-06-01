exports.up = function (knex) {
  return knex.schema
    .createTable('Memberships', (tbl) => {
      tbl.increments();
      tbl.string('type', 128).notNullable();
      tbl.integer('monthly_rate').default(0);
    })
    .createTable('Members', (tbl) => {
      tbl.increments();
      tbl.string('first_name', 128).notNullable();
      tbl.string('last_name', 128);
      tbl.string('payment_info').default(0);
      tbl
        .integer('membership_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('memberships')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    })
    .createTable('Families', (tbl) => {
      tbl.increments();
      tbl
        .integer('family_head')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('members')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    })
    .createTable('MembersToFamilies', (tbl) => {
      tbl.increments();
      tbl
        .integer('member_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('members')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      tbl
        .integer('family_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('famlies')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('MembersToFamilies')
    .dropTableIfExists('Families')
    .dropTableIfExists('Members')
    .dropTableIfExists('Memberships');
};
