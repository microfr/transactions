import React, { useState } from "react";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import "./styles.local.scss";

const CREDIT_QUERY = gql`
  query($id: ID!) {
    transactions(id: $id) {
      id
      transactions {
        datetime
        statementAs
        amount
      }
    }
  }
`;

const _Transactions: React.FunctionComponent = () => {
  const [transactions, setTransactions] = useState<null | []>(null);

  const { loading } = useQuery(CREDIT_QUERY, {
    variables: {
      id: "1"
    },
    onCompleted: ({ transactions: t }) => setTransactions(t.transactions)
  });

  if (loading) return <div>loading</div>;

  return (
    <div className="tr">
      <h2>Transactions</h2>
      {transactions &&
        transactions.map((trans: any) => (
          <div className="tr__item">
            {new Date(parseInt(trans.datetime)).toLocaleDateString()} |{" "}
            {trans.statementAs} |{" "}
            {trans.amount.toLocaleString("en-US", {
              style: "currency",
              currency: "USD"
            })}
          </div>
        ))}
    </div>
  );
};

_Transactions.displayName = "Transactions";

export default React.memo(_Transactions);
