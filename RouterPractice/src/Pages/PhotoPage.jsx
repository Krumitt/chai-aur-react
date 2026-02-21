import { useState, useEffect, useRef } from 'react';
import getRandomImageUrl from '../utils/getRandomImageUrl';
export default function PhotoPage() {
    const [id, setId] = useState(-9999);
    const [url, setUrl] = useState('');
    const inputRef = useRef(null);
    useEffect(() => {
        if (id == -9999) return;
        if (id < 1 || id > 30) {
            alert("Enter an ID between 1 and 30");

            return;
        }
        (async () => {
            let urlfetch = await getRandomImageUrl(id);
            setUrl(urlfetch);
        })();

    }, [id])
    return (
        <>
            <input type='number' min='1' max='30' ref={inputRef} />
            <button className='cursor-pointer' onClick={() => {
                setId(Number(inputRef.current.value));
            }}>Get image</button>
            <img src={`${url.trim() === '' ? 'https://i.pinimg.com/736x/a3/74/11/a374117840d4f2bf9d7949721dd64061.jpg' : url}`} alt='random ass image' />
        </>
    )
}


