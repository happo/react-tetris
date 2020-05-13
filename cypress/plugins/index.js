const happoTask = require('happo-cypress/task'); // eslint-disable-line

module.exports = (on) => {
  on('task', happoTask);
};
