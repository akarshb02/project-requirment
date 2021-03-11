import React from 'react';

const UserPage = () => {
 return (
  <div>

      <ul>
         {['Alex','John','fedrik','middali'].map((user)=> {
           return <li>{user}</li>
        })}
      </ul>
 </div>

)
}
export default UserPage;
