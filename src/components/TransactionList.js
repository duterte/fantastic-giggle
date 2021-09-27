import { useContext } from 'react';
import { Context } from '../context/GlobalState';

export const sign = (amount) => (amount > 0 ? '+' : '-');
export const dynamicClass = (amount) => (amount > 0 ? 'plus' : 'minus');

const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(Context);
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(({ id, text, amount }) => (
          <li key={id} className={dynamicClass(amount)}>
            {text}{' '}
            <span>
              {sign(amount)}${Math.abs(amount)}
            </span>
            <button
              className="delete-btn"
              onClick={() => deleteTransaction(id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
