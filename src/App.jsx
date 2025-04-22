import { useState, useEffect } from 'react'
import image from './assets/pexels-photo-730564.jpeg'
import Box from './components/Box.jsx'
import './App.css'
import useCurrencyExchange from './hooks/Currency.js'

function App() {
  const [amount,setAmount] = useState(1)
  const [to,setTo] = useState('eur')
  const [from,setFrom] =useState('usd')
  const [converted,setConverted] = useState(0)

  const currencyInfo = useCurrencyExchange(from)

  const optionInfo = Object.keys(currencyInfo)
  const convert = () => {
    console.log('hello',optionInfo,currencyInfo)
    setConverted(amount*currencyInfo[to])
  }
  useEffect(()=>{
    convert()},
  [amount]
)
  

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-cover"
    style={{backgroundImage:`url(${image})`}}
    >
    <div className="w-[30rem] h-[15rem] flex items-center flex-col">
    <form onSubmit={(e)=>{
      e.preventDefault()
      convert()}
    }>
      <div className="">
      <Box
      label='From'
      amount={amount}
      onCurrencyOption={optionInfo}
      onAmountChange={(amount)=>setAmount(amount)}
      onCurrencyChange={(currency)=> setFrom(currency)}
      selectCurrency={from}
      />
      </div>
      <div className="bg-blue-300">
      <Box
      label='To'
      amount={converted}
      onCurrencyOption={optionInfo}
      onAmountChange={(amount)=>setAmount(amount)}
      onCurrencyChange={(currency)=> setTo(currency)}
      selectCurrency={to}
      
      />
      </div>
      <div className="">
      <button type='submit'>
        Submit
      </button>
      </div>
    </form>
    </div>

    </div>
  )
}

export default App

