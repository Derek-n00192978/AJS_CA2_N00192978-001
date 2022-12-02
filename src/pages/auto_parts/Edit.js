import { useParams } from "react-router-dom";
const Edit = () => {
let { id } = useParams();

    return <h1>Hi from auto_parts Edit id is {id}</h1>
};

export default Edit;