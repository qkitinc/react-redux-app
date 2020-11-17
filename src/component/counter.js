import React from 'react';
import { connect } from 'react-redux'
import { decrement, increment, reset } from '../redux/actions/actionCreator'

const CounterView = (props) => {
    // console.log(props);
    const { increment, decrement, reset, counter } = props
    return (
        <>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
                <h1>{counter}</h1>
            </div>
        </>
    );
}

const mapStateToProps = state => ({
    counter: state.counter.count
});

const mapDispatchToProps = {
    increment,
    decrement,
    reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterView);