import React, { useState } from 'react';
import './Version.css';

function Version(props) {
  const { versionData } = props;

  const [isDropdown, setDropdownClass] = useState(false);

  const handleDropdown = () => {
    setDropdownClass(!isDropdown);
  };

  return (
    <div className={`${isDropdown ? 'logo-version active' : 'logo-version'}`} onClick={handleDropdown}>
      <span className="version-check"></span>
      <span>v1.0</span>
      <svg id="versionArrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
        <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" fill="currentColor"></path>
      </svg>
      <div className="logo-version-dropdown">
        <span>{versionData}</span>
      </div>
    </div>
  );
}

export default Version;
