import { useContext } from 'react';
import { Context } from '../context/GlobalState';
import { dynamicClass, sign } from './TransactionList';

export const total = (transactions) =>
  transactions
    .map(({ amount }) => amount)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

const Balance = () => {
  const { transactions } = useContext(Context);

  return (
    <div className={dynamicClass(total)}>
      <h4>Your Balance</h4>
      <h1 id="balance">
        {sign(total(transactions))}${total(transactions)}
      </h1>
    </div>
  );
};

export default Balance;
