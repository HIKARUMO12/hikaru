import React, { useState } from 'react';

const Testinput = () => {
    const [state, setState] = useState({lol: 0});
    function to(event){
        setState({...state, to: event.target.value})

    }
    return (
        <div>
            {state.to == "вова хуй сосал" ?
            <div className='vova'>хахахахахахах я ТАК И ЗНАЛ</div>
            :
            null
        }
            <div>{state.to}</div>
            <input 
            placeholder="combo: вова хуй сосал"
             value={state.to} onChange={to} onClick={() => {
            setState({...state, lol: state.lol + 1})
            console.log(state.lol);

    }}/>
        </div>
    );
}

export default Testinput;
