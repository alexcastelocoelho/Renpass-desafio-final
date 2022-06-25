const moment = require('moment');

function AgeTest(date) {
  const now = moment();
  const birthday = moment(date, 'DD/MM/YYYY').format('YYYY/MM/DD');
  const difference = now.diff(birthday, 'years', false);

  return difference;
}

module.exports = AgeTest;
