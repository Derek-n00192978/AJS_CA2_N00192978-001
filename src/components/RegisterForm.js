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

        axios.post('http://localhost:3001/api/users/register', {

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
            <b>Register Here:</b>
            <br />
            fName: <input type="text" name="fName" value={form.fName} onChange={handleForm} />
            <br />
            lNname: <input type="text" name="lName" value={form.lName} onChange={handleForm} />
            <br />
            Password: <input type="text" name="password" value={form.password} onChange={handleForm} />
            <br />
            Phone: <input type="text" name="phone" value={form.phone} onChange={handleForm} />
            <br />
            Email: <input type="text" name="email" value={form.email} onChange={handleForm}/>
            <br />
            
            <button onClick={submitForm}>Submit</button>
            <p style={styles}>{errorMessage}</p>
            </form>    
        </>
    );
};

export default RegisterForm;