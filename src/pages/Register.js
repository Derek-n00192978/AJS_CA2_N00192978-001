import RegisterForm from "../components/RegisterForm";
const Register = (props) => {
    
    return (
        <>
        <h1>This is the Register page</h1>
        <h4>Register form below -- only use if you have not done so before.</h4>
        {(!props.authenticated) ? (
            <RegisterForm onAuthenticated={props.onAuthenticated}/>
        ): (
            <p>You are registered to use this web application -- Login and Enjoy.</p>
        )}
        </>
    )
};
export default Register;


