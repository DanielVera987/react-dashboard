import React from 'react';
import './Avatar.scss';

const Avatar = ({ fullName, pathImg }) => {
  return (
    <div className="Avatar">
      <span className="Avatar-full-name">{ fullName }</span>
      <img src={ pathImg } />
    </div>
  )
};

export default Avatar;
