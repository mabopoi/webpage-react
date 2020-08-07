import React from 'react';

const Profile = props => {
    const {username, error,hasEnoughLength,isLoading} = props;
    return(
        <div>
            {username &&
             <div className="profile">
                 <div className="profile__username">
                        <h1> {username}</h1>
                </div>
                <div className="profile__data">
                        <h3> Full Name</h3>
                        <h3> Biography</h3>
                        <h3> Language</h3>
                </div>
                <div className="profile__ratings">
                    <h5>Blitz</h5>
                    <h5>Bullet</h5>
                    <h5>Chess960</h5>
                    <h5>Puzzle</h5>
                </div>
            </div>}
            {error && 
                <h1>This username might not exist</h1>
            }
            {!hasEnoughLength && 
                <h1>The username must contain at least 2 characters</h1>
            }
            { isLoading &&
                <h1>Loading...</h1>
            }
        </div>
    )
}

export default Profile;