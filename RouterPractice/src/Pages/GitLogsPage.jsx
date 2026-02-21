import { useState, useEffect, useRef } from 'react';
import GetGitData from '../utils/GetGitData';
import ExtractData from '../utils/ExtractData';
function GitLogsPage() {
    const userInputRef = useRef(null);
    const [data, setData] = useState(null);
    const [username, setUsername] = useState('');
    const [extractedData, setExtractedData] = useState({});
    useEffect(() => {
        let result;
        (async () => {
            result = await GetGitData(username);
            setData(result)

        })();
    }, [username])
    useEffect(() => {

        setExtractedData(ExtractData(data));
    }, [data])

    return (
        <div>
            <input ref={userInputRef} type="text" />
            <button onClick={() => {
                setUsername(userInputRef.current.value);
            }}>Get Data</button>
            <div>
                <h1>Username Data:</h1>
                {Object.keys(extractedData).length != 0 && <> <p>Follower count: {extractedData['followers']}</p>
                    <img src={extractedData['avatar_url']} alt="userImage" /></>}

            </div>
        </div>
    )
}

export default GitLogsPage
