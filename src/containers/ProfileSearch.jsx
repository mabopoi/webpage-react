import React from 'react';
import Profile from '../components/Profile';

const ProfileSearch = () => {
    const API = "https://lichess.org/api/user/";
    const [username, setUsername] = React.useState('');
    const [data, setData] = React.useState({});
    const handleChange = event => {
        setUsername(event.target.value);
    }
    const handleSubmit = event => {
        event.preventDefault();
        if(username !== ''){
            fetch(`${API}${username}`).then(response => response.json()).then(data => setData(data))
            .catch(err => console.log(err));
        }
    }   
    return (
       <div className="profileSearch__container">
           <h3 className="profileSearch___title">
                Write the username you want to search
            </h3>
            <form className="profileSearch__container--form" onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} className="profileSearch__bar"/>
                <button type="submit"  className="profileSearch__button">
                    Search
                </button>
            </form>
           <Profile username= {data.username} />
       </div>  
    )
}

export default ProfileSearch;