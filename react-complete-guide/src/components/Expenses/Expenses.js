import ExpenseItem from './ExpenseItem.js';
import Card from '../UI/Card';
import './Expenses.css';
import React from 'react';

const Expenses = (props) => {

    return (

    <Card className="expenses">
        <ExpenseItem
          title={props.cart[0].title}
          amount={props.cart[0].amount}
          date={props.cart[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.cart[1].title}
          amount={props.cart[1].amount}
          date={props.cart[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.cart[2].title}
          amount={props.cart[2].amount}
          date={props.cart[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.cart[3].title}
          amount={props.cart[3].amount}
          date={props.cart[3].date}
        ></ExpenseItem>
        </Card>

    );

}

export default Expenses;