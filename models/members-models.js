const { where } = require('../data/db-config.js');
const db = require('../data/db-config');

module.exports = {
  find,
};

function find() {
  return db('members as m')
    .join('memberships as ms', 'ms.id', 'm.membership_id')
    .select(
      'm.id',
      'm.first_name',
      'm.last_name',
      'ms.type as membership_type',
      'ms.monthly_rate',
      'm.payment_info'
    );
}
