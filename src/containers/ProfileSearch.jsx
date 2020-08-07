import React from 'react';
import Profile from '../components/Profile';

const ProfileSearch = () => {
    const API = "https://lichess.org/api/user/";
    const [username, setUsername] = React.useState('');
    const [data, setData] = React.useState({});
    const [error, setError] = React.useState(false);
    const [hasEnoughLength, setHasEnoughLength] = React.useState(true);
    const [isLoading, setIsLoading] = React.useState(false);

    const handleChange = event => {
        setUsername(event.target.value);
    }
    const handleSubmit = event => {
        event.preventDefault();
        setData({});                      //initializing all the states to its original 
        setError(false);
        setHasEnoughLength(true);
        setIsLoading(true);
        if(username.length > 1){
            fetch(`${API}${username}`)
            .then(response => response.json())
            .then(data => {setData(data),setIsLoading(false)})
            .catch(err =>{
                console.log(err),
                setError(true),
                setIsLoading(false)})  
        }else{
            setHasEnoughLength(false);
            setIsLoading(false)    
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
           <Profile username= {data.username} 
                    error={error} 
                    hasEnoughLength={hasEnoughLength}
                    isLoading={isLoading}/>
       </div>  
    )
}

export default ProfileSearch;