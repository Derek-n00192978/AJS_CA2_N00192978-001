import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState} from 'react'
import AutoCard from "../../components/AutoCard";


const Show = () => {
    const { id } = useParams();
    const [ auto_part, setAuto] = useState(null);
    let token = localStorage.getItem('token');
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
      <AutoCard auto_part={auto_part} />
    )
}
export default Show;