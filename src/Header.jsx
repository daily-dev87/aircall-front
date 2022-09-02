import React from 'react';

const Header = (props) => {

  const handleChangeTab = (changedTab) => {
    props.onChangeTab(changedTab);
  }
  
  return (
    <header>
      <div className="header_logo">
        <img src="favicon.svg" alt="" width={40} height={40}/>
        <span>Activity</span>
      </div>
      <div className="tab">
        <button className={`tablinks ${props.tab === 'feed' ? 'active' : ''}`} onClick={() => handleChangeTab('feed')}>Feed</button>
        <button className={`tablinks ${props.tab === 'archived' ? 'active' : ''}`} onClick={() => handleChangeTab('archived')}>Archived</button>
      </div>
    </header>
  );
};

export default Header;
