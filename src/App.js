import React, {useEffect,useState} from "react";
import Header from "./component/Header";
import CategoryList from "./component/categoryList";
import axios from "axios";
import Expens from "./component/Expens";
import SingleList from "./component/SingleList";

function App() {
  const [categories,setCategories]=useState([])
  const [expenses,setExpenses]=useState([])

  useEffect(()=>{
    axios.get("http://localhost:3004/categories")
    .then((res)=>{
      setCategories(res.data)
    })
    .catch((err)=>{})
    axios.get("http://localhost:3004/expenses")
    .then((res)=>{
      setExpenses(res.data)
    })
    .catch((err)=>{})

  },[])

  if(categories === null || expenses === null) return null
  return (
    <div >
      <Header/>
      <CategoryList categories={categories}/>
      <Expens expenses={expenses}/>
      <SingleList expenses={expenses}/>
    </div>
  );
}

export default App;
