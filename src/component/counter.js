import React from 'react';
import { connect } from 'react-redux'
import { decrement, increment, reset } from '../redux/actions/actionCreator'

const CounterView = (props) => {
    const incre = 7;
    const decre = 6
    const rese = 0
    const { increment, decrement, reset, counter } = props
    return (
        <>
            <div>
                <button onClick={e => increment(incre)}>Increment</button>
                <button onClick={e => decrement(decre)}>Decrement</button>
                <button onClick={e => reset(rese)}>Reset</button>
                <h1>{counter}</h1>
            </div>
        </>
    );
}

const mapStateToProps = state => ({
    counter: state.counter.count
});


const mapDispatchToProps = dispatch => ({
    increment: (num) => dispatch(increment(num)),
    decrement: (num) => decrement(dispatch, num),
    reset: (num) => dispatch(reset(num))
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterView);