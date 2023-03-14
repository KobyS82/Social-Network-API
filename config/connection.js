const { connect, connection } = require('mongoose');

// Connect to the Mongo DB
// add your MongoDB URI from mLab in place of the empty string provided in the following line
connect('mongodb://127.0.0.1/socialNetworkAPI', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;