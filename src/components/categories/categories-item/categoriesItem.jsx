import "../../categories/categories.scss"
const CategoryItems = ({category}) =>{

const {title,imageURL} = category

return(
<div className="category-container">
<div className="background-image" style={{
      backgroundImage:`url(${imageURL})`
    }} />
 <div className="category-body-container">
   <h2>{title}</h2>
   <p>Shop Now</p>
    </div>
 </div>

)

}
export default CategoryItems