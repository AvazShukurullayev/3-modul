// eslint-disable-next-line react/prop-types
import React from "react";
import {Button, ButtonGroup} from "@mui/material";

// eslint-disable-next-line react/prop-types
class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            inputValue: ""
        }
    }

    onIncrease = () => {
        this.setState(prevState => ({counter: prevState.counter + 1}))
    }

    onDecrease = () => {
        this.setState(prevState => ({counter: prevState.counter - 1}))
    }
    onChangeHandler = (e) => {
        const inputValue = e.target.value
        this.setState({inputValue})
    }

    render() {
        // eslint-disable-next-line react/prop-types
        const {title, desc, src} = this.props
        const {counter, inputValue} = this.state
        return (<div className="col-4 my-5">
            <div className="card">
                <div className="card-header">
                    <h4 className={"m-0"}>{title}</h4>
                    <p className={"m-0"}>{desc}</p>
                </div>
                <div className="card-body">
                    <img src={src} className={"img-fluid rounded-1"} alt={title}/>
                </div>
                <div className="card-footer mx-auto">
                    <ButtonGroup variant="contained" size="small">
                        <Button variant="contained" color="error" onClick={this.onDecrease}>-</Button>
                        <Button color="secondary" >{counter}</Button>
                        <Button variant="contained" color="success" onClick={this.onIncrease}>+</Button>
                    </ButtonGroup>
                    <div>
                        <input type="text" placeholder="Do something GREAT!!"
                               onChange={(e) => this.onChangeHandler(e, 10)} value={inputValue}/>
                    </div>
                </div>

            </div>
        </div>)
    }
}

export default Card