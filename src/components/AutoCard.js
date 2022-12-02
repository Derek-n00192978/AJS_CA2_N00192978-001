import { Link } from 'react-router-dom';


const AutoCard = (props) => {
    let name = <p><b>Name:</b> {props.auto_parts.name}</p>
    let location = <p><b>Location:</b>{props.auto_parts.location}</p>
    let phone = <p><b>Phone:</b>{props.auto_parts.phone}</p>
    let image = <p></p>
    

    if(props.authenticated){
        name = <p><b>Name:</b><Link to={`/auto_parts/${props.auto_parts._id}`}>{props.auto_parts.name}</Link></p>
        image = <p><b>Image:</b>{props.auto_parts.image}</p>
        
    }
    return (
        <div>
            {name}
            <p><b>Name:</b>{props.auto_parts.name}</p>
            {location}
            {phone}
            {image} 
                
            <hr />
        </div>
    )
};
export default AutoCard;