
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Layout search={search} setSearch={setSearch}/>}>
        




        <Route index element={<Home/>}/>
        <Route path="post"/>
          <Route index element={<NewPost/>}/>
          <Route element= {<PostPage/>} />
        <Route path="about" element={<About/>}/>
        <Route path="*" element={<Missing/>}/>





      </Route>
    </Routes>
  );
}

export default App;
