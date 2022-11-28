import RegisterForm from "../components/RegisterForm";
const Register = (props) => {
    
    return (
        <>
        <h1>This is the Register page</h1>
        {(!props.authenticated) ? (
            <RegisterForm onAuthenticated={props.onAuthenticated}/>
        ): (
            <p>you are now Registered</p>
        )}
        </>
    )
};
export default Register;