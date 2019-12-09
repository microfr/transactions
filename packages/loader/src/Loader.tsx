import React from "react";
import PropTypes from "prop-types";
import Loader from '@microfr/loader'

interface Props {
  token?: string;
  [key: string]: any
}

const _TransactionsLoader: React.FunctionComponent<Props> = ({ token, ...props }) => {
  return (
    <Loader uri="http://localhost:8082" namespace="Transactions" {...props}/>
  );
};

_TransactionsLoader.displayName = "TransactionsLoader";

_TransactionsLoader.propTypes = {
  token: PropTypes.string
};

export default React.memo(_TransactionsLoader);
