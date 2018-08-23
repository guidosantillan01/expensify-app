import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startAddExpense } from '../actions/expenses' 

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    // props.dispatch(addExpense(expense))
    this.props.startAddExpense(expense)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm 
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    )
  }
}

// Improve testability
const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage)

        //ABOUT PASSING DATA FROM THE CHILD TO THE PARENT:
        // Props go from the parent to the child. If you need to reverse that flow, you'd want to pass a function from the parent to the child. The child can then call that function with arguments to pass data up to the parent.
    
        // Props only go one way — from parent to child. Here we're passing a function down as a prop to ExpenseForm from AddExpensePage. And due to the magic of closures in JavaScript, we can access the props object in AddExpensePage even though the function is being invoked in ExpenseForm.
    