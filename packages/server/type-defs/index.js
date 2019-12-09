const {gql} = require('apollo-server')

module.exports = gql`
type TransactionNode {
    datetime: String!,
    statementAs: String!,
    amount: Float!
}

type TransactionConnection {
    id: ID!
    belongsTo: ID!
    transactions: [TransactionNode]
}

type Asset {
    src: String!
}

type Query {
    transactions(id: ID!): TransactionConnection
    asset(namespace: String!): Asset
}
`