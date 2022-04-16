import axios from "axios";
import { useState } from "react";
import "./Forms.css";

export const Forms = ()=>{

const [formData,setFormData] = useState({
    country:"",
    city:"",
    population:""
})




const handleChange = (e)=> {
    const {id,value} = e.target;
       setFormData({
           ...formData,
           [id]:value
         })
   }




const handleSubmit = (e) => {
e.preventDefault();
axios.post("http://localhost:3002/countries",formData)
alert("Country added Successfully");
setFormData({
    country:"",
    city:"",
    population:""
})

}



    return(
        <div className="form">
        <h2>Form to Add Country</h2>
        <form onSubmit={handleSubmit}>
            <input id="country" type="text" placeholder="enter country"  onChange={handleChange} />
            <br/>
            <br/>
            <input id="city" type="text" placeholder="enter city"  onChange={handleChange}/>
            <br/>
            <br/>
            <input id="population" type="number" placeholder="enter population"  onChange={handleChange}/>
            <br/>
            <br/>
            <input type="submit" value="Add Country"/>
        </form>
        </div>
    )
}