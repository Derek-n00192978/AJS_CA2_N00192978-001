import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState} from 'react'
import AutoCard from "../../components/AutoCard";




const Show = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ auto_part, setAuto] = useState(null);
    let token = localStorage.getItem('token');
    const deleteCallback = (id) => {
      navigate('/auto_parts');
  }
    useEffect(() => {
    axios.get(`http://localhost:3001/api/auto_parts/${id}`, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
    })
             .then((response) =>{
                console.log(response.data);
                setAuto(response.data);
               
             })
             .catch((err) => {
                console.log(err.response.data.message);
             })        
        console.log("mounted");
    }, [token, id]);
    if(!auto_part) return "loading...";
    
    return (
      <AutoCard auto_part={auto_part} authenticated={props.authenticated} callback={deleteCallback}/>
    )
}
export default Show;