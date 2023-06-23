import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { id: 'e1', title: "Bike Insurance", price: 1200, date: new Date(2022, 3, 28) },
    { id: 'e2', title: "Car Insurance", price: 3200, date: new Date(2023, 7, 5) },
    { id: 'e3', title: "New TV", price: 550, date: new Date(2023, 12, 9) }
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem 
        title={expenses[0].title} 
        price={expenses[0].price} 
        date={expenses[0].date}>
      </ExpenseItem>
      <ExpenseItem 
        title={expenses[1].title}   
        price={expenses[1].price} 
        date={expenses[1].date}>
      </ExpenseItem>
      <ExpenseItem 
        title={expenses[2].title} 
        price={expenses[2].price} 
        date={expenses[2].date}>
      </ExpenseItem>
    </div>
  );
}

export default App;
