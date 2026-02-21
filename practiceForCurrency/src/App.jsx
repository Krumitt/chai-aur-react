import { useState, useEffect } from 'react'
import GetCurrencies from './utils/GetCurrencies';
import CurrencyDropdown from './components/CurrencyDropdown';
import MoneyInput from './components/MoneyInput';
import GetExchangeRate from './utils/GetExchangeRate';
import SwapButton from './components/SwapButton';
function App() {
  const [currencies, setCurrencies] = useState([]);
  const [to, setTo] = useState(0);
  const [from, setFrom] = useState(0);
  const [curr1, setCurr1] = useState('INR');
  const [curr2, setCurr2] = useState('USD');
  useEffect(() => {
    GetCurrencies(setCurrencies);

  }, [])
  useEffect(() => {
    GetExchangeRate(setTo, curr1, curr2, from);
  }, [curr1, curr2, from])
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-[400px] space-y-6">

        <div className="flex justify-between items-center gap-4">
          <CurrencyDropdown
            selected={curr1}
            setCurr={setCurr1}
            currencies={currencies}
          />
          <MoneyInput
            money={from}
            moneySetter={setFrom}
          />
        </div>

        <div className="flex justify-center">
          <SwapButton
            setTo={setTo}
            setFrom={setFrom}
            to={to}
            from={from}
            curr1={curr1}
            curr2={curr2}
            setCurr1={setCurr1}
            setCurr2={setCurr2}
          />
        </div>

        <div className="flex justify-between items-center gap-4">
          <CurrencyDropdown
            selected={curr2}
            setCurr={setCurr2}
            currencies={currencies}
          />
          <MoneyInput
            money={to}
            readOnly
          />
        </div>

      </div>
    </div>
  );

}

export default App
