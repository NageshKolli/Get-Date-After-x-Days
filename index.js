const addDays = require("date-fns/addDays");
function days(a) {
  return (date = addDays(new Date(2020, 8, 22), a));
}
module.exports = days;
