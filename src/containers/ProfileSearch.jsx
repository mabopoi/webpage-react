import React from 'react';
import Profile from '../components/Profile';
import '../assets/styles/components/ProfileSearch.scss';

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
        <section className='profileSearch'>
            <div className="profileSearch__container">
                <h3 className="profileSearch___title">
                    Write the username you want to search
                </h3>
                <form className="profileSearch__containerForm" onSubmit={handleSubmit}>
                    <input type="text" onChange={handleChange} className="profileSearch__bar"/>
                    <button type="submit"  className="profileSearch__button">
                        Search
                    </button>
                </form>
            </div>
            <div className='profileSearch__profile'>
                <Profile error={error} 
                        hasEnoughLength={hasEnoughLength}
                        isLoading={isLoading}
                        {...data}
                />
            </div>
       </section> 
    )
}

export default ProfileSearch;