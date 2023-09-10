import { useState } from "react"

const SignUp = () =>{
const defaultFormField = {
    name:'',
    phone:'',
    email:'',
    password:'',
}
const [formField,setFormFields] = useState(defaultFormField)
const {name , phone , password , email} = formField
const handleSubmit = (event) =>{
    event.preventDefault()
    console.log(formField)
}
const handleChange = (event) =>{
const {name , value} = event.target
setFormFields({...formField, [name]:value})

}



return (
<div>

    <h1>SIGN-Up Page</h1>

    <form onSubmit={handleSubmit}>
    <label>Name</label>
<input  
type="text"
name="name"
value={name}
onChange={handleChange}
required
/>
<label>Email</label>
<input  
type="text"
name="email"
value={email}
onChange={handleChange}
required
/>

<label>Phone</label>
<input  
type="text"
name="phone"
value={phone}
onChange={handleChange}
required
/>

<label>Password</label>
<input  
type="text"
name="password"
value={password}
onChange={handleChange}
required
/>

<button type="submit">Submit</button>

</form>

{/* <label>Phone</label>
<input  type="text"  onChange={phoneHandler}/>


<label>Email</label>
<input  type="text"  onChange={(event)=>{
    setEmail(event.target.value)
    console.log("Email is =>",email)
}}/> */}



</div>
)
}
export default SignUp







// const nameHandler = (event) =>{
//     const nameValue = event.target.value
//     setName(nameValue)

//     console.log("name is =>",name)
// }

// const phoneHandler = (event) =>{
//     const nameValue = event.target.value
//     setPhone(nameValue)

//     console.log("phone is =>" , phone)
// }