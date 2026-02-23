import { useState } from 'react';
function Home() {
    const [data, setData] = useState(JSON.parse(localStorage.getItem('userData')) || null);

    return (
        <div>

            {data && Object.entries(data).map(ele => {
                return (
                    <div key={ele[0]}>
                        <p>{ele[0]} : {ele[1]}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Home
