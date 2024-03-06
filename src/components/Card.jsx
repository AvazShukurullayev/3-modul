// eslint-disable-next-line react/prop-types
import React from "react";
import {Button} from "@mui/material";

// eslint-disable-next-line react/prop-types
class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    onIncrease = () => {
        this.setState(prevState => ({counter: prevState.counter + 1}))
    }

    onDecrease = () => {
        this.setState(prevState => ({counter: prevState.counter - 1}))
    }

    render() {
        // eslint-disable-next-line react/prop-types
        const {title, desc, src} = this.props
        const {counter} = this.state
        return (<div className="col-4 my-5">
            <div className="card">
                <div className="card-header">
                    <h4 className={"m-0"}>{title}</h4>
                    <p className={"m-0"}>{desc}</p>
                </div>
                <div className="card-body">
                    <img src={src} className={"img-fluid rounded-1"} alt={title}/>
                </div>
                <div className="card-footer d-flex justify-content-center">
                    <div className="btn-group">
                        <Button onClick={this.onIncrease}>-</Button>
                        <Button disabled={true}>{counter}</Button>
                        <Button onClick={this.onDecrease}>+</Button>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default Card