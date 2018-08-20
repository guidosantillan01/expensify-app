import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'

export const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>Amount: {numeral(amount / 100).format('$0,0.00')}</p>
    <p>Created at: {moment(createdAt).format('MMMM Do, YYYY')}</p>
    <button
      onClick={() => {
        dispatch(removeExpense({ id }))
      }}
    >Remove</button>
  </div> 
)

export default connect()(ExpenseListItem)