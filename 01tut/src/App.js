import Header from './Header';
import SearchBox from './SearchBox';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import apiRequest from './apiRequest';
import {useEffect, useState} from 'react';




function App() {
  const API_URL = 'http://localhost:3500/items';

  const [items, setItems] = useState([]);
  // items is name of list
  // item is name of (for now) name of key in object
  // iteem is name of class. to be pulled from css file
  // itm is name of (for each) object in the list
        // setItem
        // localStorage.setItems and setItems in this case is totally different.
        // one is to add to local storage, the other is the usestate func from above
  const[newItem, setNewItem] = useState('')
  const[search,setSearch] = useState('')
  const[fetchError, setFetchError] = useState(null)
  const[isLoading, setIsLoading] = useState(true)
//////////////////////////////  redo this portion for practice    /////////////////////////////////////////////////////////////

  useEffect(()=>{
    console.log('useEffect ran')
    const fetchItems = async() =>{
      try{
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive expected data');
        const itemList = await response.json();
        setItems(itemList);
        setFetchError(null);
        console.log("no error")
      } catch(err){
        setFetchError(err.message)
        console.log("error")
      } finally{
        setIsLoading(false);
      }
    } 

    setTimeout(()=>{
      fetchItems();
    }, 2000)
  },[])
    
  ////////////////////////////////start practice/////////////////////////////////////////////////
  /////////////////////////////////end practice//////////////////////////////////////////////  



  const addItem= async (item)=>{
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    /* const myNewItem={id,checked:false, item}; */
    let myNewItem={
      id: id,
      checked: false,
      item: item
    }
    const listItems = [...items, myNewItem];
    setItems(listItems);

    const postOptions={
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }
    const result = await apiRequest(API_URL, postOptions) 
    if (result) setFetchError(result)
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  const handleCheck = async (id) => {
    const listItems = items.map((i)=> i.id === id ? {...i, checked:!i.checked}:i); // means: for each i in items, if i.id === idThatWasPastIn, return this if true : return this if false
    setItems(listItems);
    
    const myItem = items.filter((item)=> item.id===id)
    const updateOptions = {
      method:'PATCH',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({checked: myItem[0].checked})
    }
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, updateOptions) 
    
    if (result) setFetchError(result)
  }

  //handleDelete (practise a few times on this and handleCheck)
  const handleDelete = async (id) =>{
    const listItems = items.filter((item)=> item.id !== id);
    setItems(listItems);

    const deleteOptions = { 
      method: "DELETE"
    }
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, deleteOptions) 
    if (result) setFetchError(result)
  }

  //handleSubmit
  const handleSubmit = (e)=>{
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem(''); /// to reset the input form to nothing
  }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  return (
    <div className="App">
      <Header banana="Grocerrry"/>
      
      <AddItem 
        newItem={newItem} 
        setNewItem={setNewItem}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        handleSubmit={handleSubmit}
      />
      <SearchBox 
        search={search}
        setSearch={setSearch}
      />
      <main>
        {isLoading && <p> Loading... </p>}
        {fetchError && <p style={{color:"red"}}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content 
          items={items.filter(item=> (   (item.item).toLowerCase()  ) .includes(   search.toLowerCase()   )   )}
          setItems={setItems}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        /> }
      </main>
      <Footer
        itemsLength={items.length}
        items={items}
      />
    </div>
  );
}

export default App;

