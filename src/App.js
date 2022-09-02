import { useState } from 'react'
import Header from './Header.jsx';
import Activities from './Activities.jsx';

function App() {
  const [tab, setTab] = useState('feed');

  const handleChangeTab = (changedTab) => {
    setTab(changedTab);
  }

  return (
    <div className='container'>
      <Header tab={tab} onChangeTab={handleChangeTab}/>
      <Activities tab={tab} onChangeTab={handleChangeTab}/>
    </div>
  );
}

export default App;
