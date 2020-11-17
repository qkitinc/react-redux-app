import React from 'react';
import { connect } from 'react-redux'
import { decrement, increment, reset } from '../redux/actions/actionCreator'

const CounterView = (props) => {
    // console.log(props);
    const { increment, decrement, reset, counter } = props
    return (
        <>
            <div>
                <button onClick={e => increment(5)}>Increment</button>
                <button onClick={e => decrement(2)}>Decrement</button>
                <button onClick={e => reset(10)}>Reset</button>
                <h1>{counter}</h1>
            </div>
        </>
    );
}

const mapStateToProps = state => ({
    counter: state.counter.count
});

// const mapDispatchToProps = {
//     increment,
//     decrement,
//     reset,
// };

const mapDispatchToProps = dispatch => ({
    increment: (num) => dispatch(increment(num)),
    decrement: (num) => decrement(dispatch, num),
    reset: (num) => dispatch(reset(num))
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterView);