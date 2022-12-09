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
            <div class="form-group">
                <label for="fName">First Name</label>
                <input type="text" name="fName" value={form.fName} onChange={handleForm} />
                <small id="firstHelp" class="form-text text-muted">We'll never share your First Name with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="lName">Last Name</label>
                <input type="text" name="lName" value={form.lName} onChange={handleForm} />
                <small id="lastHelp" class="form-text text-muted">We'll never share your Last Name with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="Password">Password</label>
                <input type="text" name="password" value={form.password} onChange={handleForm} />
                <small id="passHelp" class="form-text text-muted">We'll never share your Password with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="Phone">Phone</label>
                <input type="text" name="phone" value={form.phone} onChange={handleForm} />
                <small id="phoneHelp" class="form-text text-muted">We'll never share your Phone details with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="Email">Email</label>
                <input type="text" name="email" value={form.email} onChange={handleForm} />
                <small id="emailHelp" class="form-text text-muted">We'll never share your Email with anyone else.</small>
            </div>
            <button onClick={submitForm}>Submit</button>
            <p style={styles}>{errorMessage}</p>
           
            </form>    
        </>
    );
};

export default RegisterForm;