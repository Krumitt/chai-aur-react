import { useState } from 'react'
import SelectionSection from './SelectionSection';
import { pauwa, souka, blackdog } from './util/wine';
function App() {
  const [wine, setWine] = useState('');

  const cheese = (() => {
    switch (wine) {
      case pauwa:
        return 'moza';
      case souka:
        return 'dosa';
      case blackdog:
        return 'souza';
      default:
        return wine ? 'kukurAli' : '';
    }
  });




  return (
    <>
      <h1 className='text-center font-bold'>You pick cheese we pick wine!</h1>
      <SelectionSection setWine={setWine} />
      {cheese && wine && <p>For {wine}, {cheese()} cheese would go the best</p>}
    </>
  )
}

export default App
