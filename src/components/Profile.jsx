import React from 'react';

const Profile = props => {
    const {username, error,hasEnoughLength,isLoading,perfs,language,completionRate, online,profile} = props;
    return(
        <div>
            {username &&
             <div className="profile">
                 <div className="profile__username">
                        <h1> {username}</h1>
                </div>
                <div className="profile__data">
                        {online ? <h3> Status: Online</h3>: <h3>Status: Offline</h3>}
                        {(profile?.firstName && profile?.lastName) && <h3> Full Name: {profile?.firstName} {profile?.lastName}</h3>}
                        <h3> Completion rate: {completionRate}%</h3>
                        <h3> Language: {language}</h3>
                </div>
                <div className="profile__ratings">
                    <h5>Blitz: {perfs.blitz?.rating}</h5>
                    <h5>Bullet:{perfs.bullet?.rating}</h5>
                    <h5>Rapid:{perfs.rapid?.rating}</h5>
                    <h5>Puzzle:{perfs.puzzle?.rating}</h5>
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