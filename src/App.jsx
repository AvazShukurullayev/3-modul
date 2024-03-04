// Todo: Functional component
const Navbar = () => {
    const styles = {
        backgroundColor: "lime",
        padding: 15,
        color: "red"
    }
    return <h1 style={styles}>Navbar</h1>
}

const Button = () => {
    const isUser = false
    const getText = () => {
        if (isUser) {
            return "Logout1"
        } else {
            return "Login1"
        }
    }
    return (
        <div>
            <button>{isUser ? "Logout" : "Login"}</button>
            <button>{getText()}</button>
        </div>
    )
}

const Fields = () => <input
    className="form-control"
    type="text"
    placeholder="Enter your name..."
    id="name"
    name="name"
/>

function App() {
    return (
        <>
            <Navbar/>
            <Button/>
            <Fields/>
        </>
    )
}

export default App
