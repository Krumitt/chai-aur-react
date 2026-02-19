import { useRef } from 'react';
export default function Buttons({ setTime }) {
    let IntervalId = useRef(null);
    return (
        <div className='flex flex-col gap-4'>
            <button className='cursor-pointer hover:bg-amber-700 transition-all duration-200 rounded-3xl p-4 bg-amber-400 text-3xl font-extrabold' onClick={() => {
                IntervalId.current = setInterval(() => {
                    setTime(prev => prev + 1)
                }, 100)
            }}>Start</button>
            <button className='cursor-pointer hover:bg-amber-700 transition-all duration-200 rounded-3xl p-4 bg-amber-400 text-3xl font-extrabold' onClick={() => {
                clearInterval(IntervalId.current);
            }}>Stop</button>
            <button className='cursor-pointer hover:bg-amber-700 transition-all duration-200 rounded-3xl p-4 bg-amber-400 text-3xl font-extrabold' onClick={() => {
                clearInterval(IntervalId.current);
                setTime(0);
            }}>Reset</button>
        </div>
    );
}