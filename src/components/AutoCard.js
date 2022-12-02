import { Link } from 'react-router-dom';

//import EditIcon from '@mui/icons-material/Edit';

const AutoCard = (props) => {
    let name = <p><b>Name:</b> {props.auto_part.name}</p>
    let location = <p><b>Location:</b>{props.auto_part.location}</p>
  
    
    

    if(props.authenticated){
        name = <p><b>Name:</b><Link to={`/auto_parts/${props.auto_part._id}`}>{props.auto_part.name}</Link></p>
        
        
    }
    return (
        <div>
            {name} 
            {location}
           
              
            <hr />
        </div>
    )
};
export default AutoCard;