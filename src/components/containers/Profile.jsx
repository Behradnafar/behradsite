import React from 'react';
import ProfileImage from '../custom/ProfileImage';
import ProfileName from '../custom/ProfileName';

const Profile = () => {
    return ( 
        <div className='d-flex flex-column profile'>
            <ProfileName/>
            <ProfileImage/>
        </div>
     );
}
 
export default Profile;