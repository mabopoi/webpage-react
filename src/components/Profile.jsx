import React from 'react';

const Profile = props => {
    const {username} = props;
    return(
        <div>
            {username ? <div className="profile">
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
              </div>  
            : null}
        </div>
    )
}

export default Profile;