import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'

export const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>Amount: ${amount}</p>
    <p>Created at: {createdAt}</p>
    <button
      onClick={() => {
        dispatch(removeExpense({ id }))
      }}
    >Remove</button>
  </div>
)

export default connect()(ExpenseListItem)