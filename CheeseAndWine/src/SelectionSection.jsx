import { pauwa, souka, daaru, gaaru, blackdog } from './util/wine';

export default function SelectionSection({ setWine }) {

    return (
        <>
            <button className='bg-amber-700 mx-3 p-3 rounded-3xl cursor-pointer hover:bg-amber-400' onClick={() => {
                setWine(pauwa);;
            }}>pauwa</button>
            <button className='bg-amber-700 mx-3 p-3 rounded-3xl cursor-pointer hover:bg-amber-400' onClick={() => {
                setWine(souka);;
            }}>souka</button>
            <button className='bg-amber-700 mx-3 p-3 rounded-3xl cursor-pointer hover:bg-amber-400' onClick={() => {
                setWine(daaru);;
            }}>daaru</button>
            <button className='bg-amber-700 mx-3 p-3 rounded-3xl cursor-pointer hover:bg-amber-400' onClick={() => {
                setWine(gaaru);;
            }}>gaaru</button>
            <button className='bg-amber-700 mx-3 p-3 rounded-3xl cursor-pointer hover:bg-amber-400' onClick={() => {
                setWine(blackdog);;
            }}>blackdog</button>

        </>
    );
}