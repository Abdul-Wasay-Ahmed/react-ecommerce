import { Route,Routes } from "react-router";
import About from "./components/about/about";
import Home from "./components/categories/categoreis-container/categoriesContainer";
const App = () =>{

  return (
      <Routes>
         <Route path="/about" element={<About/>} />
         <Route path="/" element={<Home/>} />
      </Routes>

  )

}

export default App;
































      {/* {categories.map((category)=>(
<CategoryItems key={category.id} category={category}/>
      ))} 
       */}