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

        axios.post('https://ca2-cars-api.vercel.app/api/users/login', {
            fName: form.fName,
            email: form.email,
            password: form.password
        })
             .then((response) => {
                console.log(response.data);
                setErrorMessage("");
                props.onAuthenticated(true, response.data.token)
                
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
           
            <form>
            <div class="form-group">
                <label for="fName">First Name:</label>
                <input type="text" name="fName" value={form.fName} onChange={handleForm} />
                <small id="firstHelp" class="form-text text-muted">We'll never share your First Name with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="Email">Email:</label>
                <input type="text" name="email" value={form.email} onChange={handleForm} />
                <small id="emailHelp" class="form-text text-muted">We'll never share your Email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="Password">Password:</label>
                <input type="text" name="password" value={form.password} onChange={handleForm} />
                <small id="passHelp" class="form-text text-muted">We'll never share your Password with anyone else.</small>
            </div>
          
          
            <button onClick={submitForm}>Submit</button>
            <p style={styles}>{errorMessage}</p>
           
            </form> 
        </>
    );
};

export default LoginForm;