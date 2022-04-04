import { useEffect, useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('did mount');
    }, []);

    useEffect(() => {
        console.log('did mount + update');
    }, []);

    useEffect(() => {
        console.log('did mount + update count');
    }, [count]);

    useEffect(() => {
        return() => {
            console.log('unmount');
        }
    }, [])

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count + 1)}>Плюс</button>
        </div>
    );
}

/* import React from "react";

export class Counter extends React.Component{
    state = {
        count: 0,
        name: 'Marina',
        countt: 0
    }
    handleClick = () => {
        this.setState({count: this.state.count + 1})
    }

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Плюс</button>
            </div>
        );
    }
} */