import { useState, useEffect } from 'react'
import './App.css'
import Transact from './Transact'
import Searchbar from './Searchbar'

function App() {
  const [transaction, setTransaction] = useState([])
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [amount, setAmount] = useState(0)

 useEffect(() => {
  fetch('http://localhost:3000/transactions')
  .then(res => res.json())
  .then(transactions => {
    setTransaction(transactions)})
},[])
function handleSubmit(e) {
  e.preventDefault()

  let transactionsObj = {
    date: date,
    description: description,
    category: category,
    amount: amount
  }
  fetch('http://localhost:3000/transactions', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"    
  },
  body: JSON.stringify(transactionsObj)
})
.then(res => res.json())
.then(transactions => {
  let addTransactions = [...transaction,transactions]
  setTransaction(addTransactions)
})
}
  return (
    <>
      <h1>Bank Of Flatiron</h1>
      <table>
      <thead>
<tr>
<th>Date</th>
<th>Description</th>
<th>Category</th>
<th>Amount</th>
</tr>
</thead>
</table>

       {transaction.map(transact => (
        
<Transact date={transact.date} description={transact.description} category={transact.category} amount={transact.amount} key={transact.id}/>
        ))} 
        <form onSubmit={handleSubmit}>
          <input type='date' placeholder='Date' value={date} onChange={(e)=> setDate(e.target.value)}></input>
          <input type='text' placeholder='Description' value={description} onChange={(e)=> setDescription(e.target.value)}></input>
          <input type='text' placeholder='Category' value={category} onChange={(e)=> setCategory(e.target.value)}></input>
          <input type='text' placeholder='Amount' value={amount} onChange={(e)=> setAmount(e.target.value)}></input>
          <button>Submit</button>
        </form>
        <Searchbar/>
    </> 
  )
}

export default App
