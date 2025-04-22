import React from 'react'

function Box({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  onCurrencyOption=[],
  selectCurrency='usd',

}) {
  return (

    <div className="bg-pink-200 p-3 rounded-lg text-sm flex">

      <div 
      className="w-1/2">

        <label htmlFor="amountInput" className='text-black/40 mb-2 inline-block'>
          {label}
        </label>


        <input className="bg-blue-500/95 outline-none w-full  py-1.5" 
              type='number'
              value={amount}
              placeholder='Amount'
              onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
        />


        {/* right side part */}

      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className='text-black/40 mb-2 w-full'>
        Currency type
        </p>

        <select name="" id=""
        className='ounded-lg px-1 py-1 bg-black cursor-pointer outline-none'
        value={selectCurrency}
        onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
        >

          {
            onCurrencyOption.map((currency)=> (<option key={currency} 
            value={currency}>{currency}</option>))
          }

        </select>

      </div>
    </div>
 
  )
}

export default Box