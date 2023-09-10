import { Fragment } from "react"
import { Outlet,Link } from "react-router-dom"
const Navigation = () =>{
return(
<Fragment>
    <div>
        <Link to="/shop">        
        <div>
            Shop
        </div>
        </Link>
        
     <Link to="sign-up">
        <div>
            Sign Up
        </div>
        </Link>
    </div>
    <Outlet/>
</Fragment>
)
}

export default Navigation