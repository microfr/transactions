const { getTransactions } = require("./transactions.query");
const { getAsset } = require('./asset.query')
module.exports = {
  Query: {
    transactions: getTransactions,
    asset: getAsset
  }
};
