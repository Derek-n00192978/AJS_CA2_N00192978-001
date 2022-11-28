import { Link } from 'react-router-dom';
const AutoCard = (props) => {
    return (
        <div>
        <p><b>Name:</b><Link to={`/auto_parts/${props.auto_parts._id}`}>{props.auto_parts.name}</Link></p>
        <p><b>Location:</b>{props.auto_parts.location}</p>
        <p><b>Phone:</b>{props.auto_parts.phone}</p>
        <p><b>Web_address:</b>{props.auto_parts.web_address}</p>
        <p><b>Image:</b>{props.auto_parts.image}</p>
        <hr />
    </div>
    )
};
export default AutoCard;