import Header from './Header';
import SearchBox from './SearchBox';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import {useState} from 'react';



function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shopping list')));
  // items is name of list
  // item is name of (for now) name of key in object
  // iteem is name of class. to be pulled from css file
  // itm is name of (for each) object in the list
        //setItems(items)
        // for the case of i, the param can be called anything, so long you rmb what it stand for in the context.
        // this is the same as a arrow function. just that the map has basically opened each object in the list
        // equivilent as FOR EACH LINE. do the following
        // the : yes or no thingy simply determines what gets added into the param
      

        // setItem
        // localStorage.setItems and setItems in this case is totally different.
        // one is to add to local storage, the other is the usestate func from above
  


  const[newItem, setNewItem]=useState('')
  const[search,setSearch]=useState('')

  const setAndSaveItem = (pear)=>{
    setItems(pear);
    localStorage.setItem("shopping list", JSON.stringify(pear));
  }

  const addItem=(item)=>{
    const id = items.length ? items[items.length - 1].id + 1 : 1;

    /* const myNewItem={id,checked:false, item}; */
    let myNewItem={
      id: id,
      checked: false,
      item: item
    }

    const listItems = [...items, myNewItem];
    setAndSaveItem(listItems);
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  const handleCheck = (id) => {
    const listItems = items.map((i)=> i.id === id ? {...i, checked:!i.checked}:i); // means: for each i in items, if i.id === idThatWasPastIn, return this if true : return this if false
    setAndSaveItem(listItems);
  }

  //handleDelete (practise a few times on this and handleCheck)
  const handleDelete = (id) =>{
    const listItems = items.filter((item)=> item.id !== id);
    setAndSaveItem(listItems);
  }

  //handleSubmit
  const handleSubmit = (e)=>{
    e.preventDefault();
    if (!newItem) return;
    //addItem
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
      <Content 
        items={items.filter(item=> (   (item.item).toLowerCase()  ) .includes(   search.toLowerCase()   )   )}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer
        itemsLength={items.length}
        items={items}
      />
    </div>
  );
}

export default App;



// Headers are functions you made called components
// even this app() is a function
// components can have functions in the middle of the return()
//