const fetch = require("node-fetch");

exports.getTransactions = async (parent, { id }, { user }) => {
  var query = `query transactions($id: ID!) {
        transactions(id: $id) {
            id
            transactions {
                statementAs
                datetime
                amount
            }
        }
      }`;
  try {
    const data = await fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        query,
        variables: { id: id }
      })
    });
    const { data: result } = await data.json();

    return result.transactions;
  } catch (err) {
    throw new Error(err);
  }
};
