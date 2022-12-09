import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
const Home = (props) => {
    return (
        <>
        <h1>Home Page</h1>

        {(!props.authenticated) ? (
            <LoginForm onAuthenticated={props.onAuthenticated}/>
        ): (
            <div>
            <h1>Hi and welcome to the home page of the Ca frontend for the Advanced JavaScript Module.</h1>
            <h3>This here is the front end connected with Mongo through a backend.</h3>
            <h3>The backend was developed for the first Ca earlier in the year.</h3>
            <h4>You are logged in to the web application ---- Enjoy</h4>
            </div>
        )} 
        <hr></hr>
        <hr></hr>
        <h4>Register form below -- only use if you have not done so before.</h4>
        {(!props.authenticated) ? (
            <RegisterForm onAuthenticated={props.onAuthenticated}/>
        ): (
            <p>You are registered to use this web application -- Login and Enjoy.</p>
        )}
        </>
    )
}
export default Home;