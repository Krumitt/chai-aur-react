import { useState, useRef } from 'react';

function passwordGen(numAllowed, charAllowed, length) {
  let pass = "";
  let inventoryStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if (numAllowed) inventoryStr += "0123456789";
  if (charAllowed) inventoryStr += '!@#$%^&*-_+=[]{}~`';
  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * inventoryStr.length);
    pass += inventoryStr.charAt(index);
  }
  return pass
}


function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPass] = useState(() => passwordGen(numAllowed, charAllowed, length));
  const passwordRef = useRef(null);


  return (
    <>
      <div className='bg-gray-800 flex flex-col items-center my-8 align-middle text-white w-full max-w-md mx-auto p-9 rounded-3xl '>
        <h1 className='text-3xl font-bold mb-b'>Password Generator</h1>
        <div className='flex min-w-full '>
          <input readOnly type="text" value={password} ref={passwordRef} className='bg-white grow text-amber-800 font-bold p-3 mr-2' onChange={(e) => {
            setPass(e.target.value)
          }} />
          <button className='text-white bg-blue-300 cursor-pointer p-4 font-semibold' onClick={() => {
            navigator.clipboard.writeText(password);
            passwordRef.current?.select();

          }}>Copy</button>
        </div>
        <div>
          <input min={6} max={30} type="range" value={length} onChange={(e) => {
            setLength(Number(e.target.value));
            setPass(passwordGen(numAllowed, charAllowed, length));
          }} />
          <span>Length({length})</span>
          <input type="checkbox" id="numbers" onChange={() => {
            setNumAllowed(prev => {
              setPass(passwordGen(!prev, charAllowed, length));
              return !prev;
            })
          }} />
          <label htmlFor="numbers">Numbers</label>
          <input type="checkbox" id="characters" onChange={() => {
            setCharAllowed(prev => {
              setPass(passwordGen(numAllowed, !prev, length));
              return !prev;
            });

          }} />
          <label htmlFor="characters" >Chracters</label>
        </div>
      </div >
    </>
  )
}

export default App
