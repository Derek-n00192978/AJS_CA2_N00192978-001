import { useState } from 'react';
import axios from 'axios';

const LoginForm = (props) => {
    const [form, setForm] = useState({
        fName: "",
        email: "",
        password: ""
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
        console.log("Email", form.email);
        console.log("Password", form.password);

        axios.post('http://localhost:3001/api/users/login', {
            fName: form.fName,
            email: form.email,
            password: form.password
        })
             .then((response) => {
                console.log(response.data);
                setErrorMessage("");
                props.onAuthenicated(true, response.data.token)
                
             })
             .catch((err) => {
                console.error(err);
                console.log(err.response.data);
                setErrorMessage(err.response.data.message);
             })
    };   
    
    return (
        <>
            <b>Login Here:</b>
            <br />
            fName: <input type="text" name="fName" value={form.fName} onChange={handleForm}/>
            <br />
            Email: <input type="text" name="email" value={form.email} onChange={handleForm}/>
            <br />
            Password: <input type="text" name="password" value={form.password} onChange={handleForm} />
            <br />
            <button onClick={submitForm}>Submit</button>
            <p style={styles}>{errorMessage}</p>
        </>
    );
};

export default LoginForm;