import React,{useEffect,useState} from "react";
import axios from 'axios';
import {useParms} from "react-router-dom";
function Book_UpDateForm(props) {
    const [state,setState] = useState({
        booktitle:"",
        author:"",
        formate:"",
        Topic:"",
        PubYear: 1990,
    });
    let url="http://localhost:3000/"
    let params = useParams();

    const handleChange = (e) =>{
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value,
        });
    };
    useEffect(() =>{
        axios.get('http://localhost:3000/getbook/'+params.id)
        .then(res =>{
            console.log("update fun"+res.data)
            setState(res.data)
        })//
        .catch(err=>{
            console.log("error has occured")
      })
      
    },[]);
  
    return(
         <div style={{marginTop:10}}>
            <h3>Update Book Id:{props.match.parms.id}</h3>
            <form onSubmit={OnSubmit} method="Post">
            <div className="form-group">
                <label>Book Title: </label>
                <input className="form-control"
                type="text" name="booktitle"
                value={state.booktitle}
                onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label>Book Authors: </label>
                <input className="form-control"
                name="author" value={state.author}
                onChange={handleChange}/>
            
            </div>
            </form>
         </div>
        )
     const OnSubmit=(e) => {
           e.preventDefault();
           const bookdata={
            booktitle:state.booktitle,

            PubYear:state.PubYear,
            author:state.author,

            Topic:state.Topic,
            formate:state.formate
         }
         axios.put(url+'updatebook/'+params.id, bookdata)
         .then(res => console.log(res.data));
        }

}
export default Book_UpDateForm;