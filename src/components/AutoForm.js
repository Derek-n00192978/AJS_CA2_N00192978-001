import { useState } from 'react';
import axios from 'axios';

const AutosForm = () => {
    const [form, setForm] = useState({
        name: "",
        location: "",
        phone: "",
        web_address: "",
        image: ""
        
    });
    const [errorMessage, setErrorMessage] = useState("");
    

    const styles = { color: "red", backgroundColor:"lightblue"}
        
    const handleForm = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        

        // setForm({
        //     [name]: value
        // });

        // setForm((prevState) => {
        //     return {
        //         ...prevState,
        //         [name]: value
        //     }
        // });
        setForm(prevState =>({
            ...prevState,
            [name]: value
        }));
        
    };
    const submitForm = () => {
        console.log("name", form.name);
        console.log("location", form.location);
        console.log("phone", form.phone);
        console.log("web_address", form.web_address);
        console.log("image", form.image);
              

        axios.post('http://localhost:3001/api/auto_parts', {
            name: form.name,
            location: form.location,
            phone: form.phone,
            web_address: form.web_address,
            image: form.image
        })
             .then((response) => {
                console.log(response.data);
                setErrorMessage("");
                
             })
             .catch((err) => {
                console.error(err);
                console.log(err.response.data);
                setErrorMessage(err.response.data.message);
             })
    };
   
    
    
    return (
        <>
            Name: <input type="text" name="name" value={form.name} onChange={handleForm} />
            <br />
            location: <input type="text" name="location" value={form.location} onChange={handleForm} />
            <br />
            Phone: <input type="text" name="phone" value={form.phone} onChange={handleForm} />
            <br />
            Web_address: <input type="text" name="web_address" value={form.web_address} onChange={handleForm} />
            <br />
            Image: <input type="file" name="image" value={form.image} onChange={handleForm} />
            
            
            
            <button onClick={submitForm}>Submit</button>
            <p style={styles}>{errorMessage}</p>
        </>
    );
};

export default AutosForm;