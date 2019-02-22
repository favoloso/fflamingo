const settings = require('../../jest.settings');
const pkg = require('./package.json');

module.exports = {
  ...settings.shared(pkg)
};
