import { Route,Routes } from "react-router";
import Navigation from "./routers/navigation/navigation.component";
import Home from "./components/categories/categoreis-container/categoriesContainer";

import SignUp from "./routers/sign-up/sign-up";
import About from "./components/about/about";
const App = () =>{

  return (
<Routes>
  
  <Route path="/" element={<Navigation/>}  >
    <Route  index  element={<Home/>}/>
    <Route  path="sign-up"  element={<SignUp/>}/>
    </Route>

</Routes>      

  )

}

export default App;
































      {/* {categories.map((category)=>(
<CategoryItems key={category.id} category={category}/>
      ))} 
       */}