import React from "react";


const TransactionsList = ({ transactions }) => {
  return (
    <>
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>شماره سفارش</th>
              <th>وضعیت</th>
              <th>مبلغ</th>
              <th>آیدی</th>
              <th>تاریخ ایجاد</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.order_id}</td>
                <td>{transaction.status}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.trans_id}</td>
                <td>{transaction.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TransactionsList;
