import LoginForm from "../components/LoginForm";
const Home = (props) => {
    return (
        <>
        <h1>Home Page</h1>

        {(!props.authenticated) ? (
            <LoginForm onAuthenticated={props.onAuthenticated}/>
        ): (
            <p>you are logged in</p>
        )} 
        </>
    )
}
export default Home;