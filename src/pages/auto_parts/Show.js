import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState} from 'react'
import AutoDisplay from "../../components/AutoDisplay";

const Show = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ auto_part, setAuto_part] = useState(null);
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
                setAuto_part(response.data);
               
             })
             .catch((err) => {
                console.log(err.response.data.message);
             })        
        console.log("mounted");
    }, [token, id]);
    if(!auto_part) return "loading...";
    
    return (
      <AutoDisplay key={auto_part._id} auto_part={auto_part}  callback={deleteCallback}/>
    );
};
export default Show;