// Todo: Functional component
import React from "react";

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

class Input extends React.Component {
    render() {
        const styleInput = {
            width: 350
        }
        return (
            <input
                style={styleInput}
                type="text"
                className="form-control"
                id="inp"
                name="inp"
                placeholder="Input something..."
            />
        )
    }
}

function App() {
    return (
        <>
            <Navbar/>
            <Button/>
            <Fields/>
            <div>
                <Input/>
            </div>
        </>
    )
}

export default App
