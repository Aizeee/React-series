import './App.css';
import Searchbox from './components/Searchbox'
import Square from './components/Square'

import {useState} from 'react'
function App() {

  const[search,setSearch]=useState('')
  return (
    <div className="App">
      <Square
        search={search}
        setSearch={setSearch}
      />

      <Searchbox 
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
}

export default App;
