import "../../categories/categories.scss"
import CategoryItems from "../categories-item/categoriesItem"
import { Outlet } from "react-router"
const Home = () =>{ 

    const categories = [
        {
          "id":1,
          "title":"Denim",
           "imageURL":"https://www.cougar.com.pk/cdn/shop/products/JM2267-BLU_4.jpg?v=1668166872"
        },
        {
          "id":2,
          "title":"Shirt",
          "imageURL":"https://rog.com.pk/wp/wp-content/uploads/2020/12/Brushed-Cotton-Shirt-White-9957-scaled.jpg"
        },
        {
          "id":3,
          "title":"Pants",
           "imageURL":"https://www.hallensteins.com/content/products/ab-tactical-baggy-cargo-pant-green-front-10003249.jpg?width=2058"
        },
        
        {
          "id":4,
          "title":"Hats",
          "imageURL":"https://www.outbacktrading.com/cdn/shop/collections/70fe9e156e036c9111db4ea0b0e3fd63.jpg?v=1657556535"
        },
        
        {
          "id":5,
          "title":"Wallets",
          "imageURL":"https://images.unsplash.com/photo-1614330315526-166f2d71e544?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdhbGxldHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
        },
        
        ]
        


    return (

<div className="categories-container">
    
    {categories.map((category)=>(
     
     <CategoryItems key={category.id} category={category}/>
     
    
    ))}
    
    
    
    
        </div>
    

    )

}

export default Home 