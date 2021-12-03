import logo from './logo.svg';
import './App.css';

//Import Our Components
import AllPosts from "./pages/AllPosts"
import SinglePost from "./pages/SinglePost"
import Form from "./pages/Form"

//Import Hooks from React
import {useState, useEffect} from "react"

//Import Router 6 Component (Route -> Route, Switch -> Routes)
import {Route, Routes} from "react-router-dom"

///////////
//Style Object
///////////
const h1 = {
  textAlign: "center",
  margin: "10px"
}
function App() {
///////////
// State and Other Variables
///////////

const url = "https://masonite-backend-ll.herokuapp.com/todos/"

//state to hold list of todos
const [posts, setPosts] = useState([])

///////////
//Functions
//////////
//function to get list of todos from API
const getTodos = async () => {
  const response = await fetch(url);
  const data = await response.json();
  setPosts(data)
}

///////////
//useEffects
///////////

useEffect(() => {
  getTodos()
}, [])

  //////////////////////////
  // Returned JSX
  //////////////////////////


  //////////////////////////
  // Returned JSX
  //////////////////////////

  return (
    <div className="App">
      <h1 style={h1}>My Todo List</h1>
      <Routes>
        <Route path="/" element={<AllPosts posts={posts}/>}/>
        <Route path="/post/:id" element={<SinglePost posts={posts}/>}/>
        <Route path="/new" element={<Form/>}/>
        <Route path="/edit" element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
