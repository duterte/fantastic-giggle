import { useContext } from 'react';
import { Context } from '../context/GlobalState';
import { total } from './Balance';

const IncomeExpenses = () => {
  const { transactions } = useContext(Context);

  const income = transactions.filter(({ amount }) => amount > -1);
  const expense = transactions.filter(({ amount }) => amount <= -1);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${total(income)}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${Math.abs(total(expense))}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
