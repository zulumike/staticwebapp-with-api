import React, {useEffect} from 'react';
import logo from '../logo.svg';

function PrivateHome({user}:any) {

    const [name, setName] = React.useState('');
    const [message, setMessage] = React.useState('');

    useEffect(() => {
        if(user && user?.userDetails){
            setName(user?.userDetails);  
        }
      }, [user]);

    const getDataFromApi = async (e: any) => {
        e.preventDefault();
        const data = await fetch(`/api/hello?name=${name}`);
        const json = await data.json();

        if (json.message) {
            setMessage(json.message);
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Static Web App: React App with Azure Function API
                </p>
                <form id="form1" className="App-form" onSubmit={e => getDataFromApi(e)}>
                    <div>
                        <input
                            type="text"
                            id="name"
                            className="App-input"
                            placeholder="Name"
                            value={name}
                            onChange={e => setName(e.target.value)} />
                        <button type="submit" className="App-button">Submit</button>
                    </div>
                </form>
                <div><h5>Message: {message} </h5></div>
            </header>
        </div>
    );
}
export default PrivateHome;