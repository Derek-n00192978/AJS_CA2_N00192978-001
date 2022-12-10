import LoginForm from "../components/LoginForm";
const Login = (props) => {
    
    return (
        <>
            <h1>This is the login page</h1>
            {(!props.authenticated) ? (
                <LoginForm onAuthenticated={props.onAuthenticated}/>
            ): (
                <p>you are logged in</p>
            )}
        </>
    )
};
export default Login;