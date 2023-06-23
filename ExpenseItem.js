import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';


function ExpenseItem (props) {
    //const expenseDate = new Date(2022, 3, 28);
    //const expenseTitle = "Bike Insurance";
    //const expensePrice = 1200;

    

    return ( 
    <div className="expense-item">
       <ExpenseDate date={props.date}/>
        <div>{props.date.toISOString()}</div>
        <div className="expense_item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">Rs.{props.price}</div>
        </div>
    </div>
    );
}

export default ExpenseItem;