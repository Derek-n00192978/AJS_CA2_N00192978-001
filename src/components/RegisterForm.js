import { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
    const [form, setForm] = useState({
        fName: "",
        lName: "",
        password: "",
        phone: "",
        email: ""
        
    });
    const [errorMessage, setErrorMessage] = useState("");
    

    const styles = { color: "red", backgroundColor:"lightblue"}
        
    const handleForm = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        

        setForm(prevState =>({
            ...prevState,
            [name]: value
        }));
        
    };
    const submitForm = () => {
        console.log("fName", form.fName);
        console.log("lName", form.lName);
        console.log("password", form.password);
        console.log("phone", form.phone);
        console.log("email", form.email);       

        axios.post('https://ca2-cars-api.vercel.app/api/users/register', {

            fName: form.fName,
            lName: form.lName,
            password: form.password,
            phone: form.phone,
            email: form.email
            
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
        <form>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title><b>Register Here:</b></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">fName: <input type="text" name="fName" value={form.fName} onChange={handleForm} /></Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">lNname: <input type="text" name="lName" value={form.lName} onChange={handleForm} /></Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Password: <input type="text" name="password" value={form.password} onChange={handleForm} /></Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Phone: <input type="text" name="phone" value={form.phone} onChange={handleForm} /></Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Email: <input type="text" name="email" value={form.email} onChange={handleForm}/></Card.Subtitle>
                </Card.Body>
            </Card>
            <button onClick={submitForm}>Submit</button>
            <p style={styles}>{errorMessage}</p>
           
            </form>    
        </>
    );
};

export default RegisterForm;