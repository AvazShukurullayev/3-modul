import React from "react";
import Card from "./Card.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    title: "NextJS",
                    desc: "Full-Stack",
                    src: "https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F70e1537d-4afc-4cfe-8915-58a814e623da-kilw5u.png&w=1920&q=75"
                },
                {
                    id: 2,
                    title: "ReactJS",
                    desc: "Front-End",
                    src: "https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fa8573b7c-95b2-4459-8414-8eacde874b0a-kilwdl.png&w=1920&q=75"
                },
                {
                    id: 3,
                    title: "JavaScript",
                    desc: "Front-End",
                    src: "https://sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F35ca3db9-fb43-4f12-bd48-8b08a503db09-kilwwj.png&w=1920&q=75"
                }
            ]
        }
    }

    render() {
        const {data} = this.state
        return (<div className={"app"}>
            <div className="container">
                <div className="row">
                    {data.map(({id, title, desc, src}) => (<Card
                        title={title}
                        desc={desc}
                        src={src}
                        key={id}
                    />))}
                </div>
            </div>
        </div>)
    }
}

export default App
