import React from 'react';

function SessionLength(props) {

    function increaseSession(){
        if (props.sessionLength === 60){
            return;
        }
        props.increaseSession()
    }

    function decreaseSession(){
        if (props.sessionLength === 1){
            return;
        }
        props.decreaseSession()
    }

    return(
        <section class="break d-flex flex-row align-items-center justify-content-center p-3">
            <button class= "btn btn-black mx-auto " onClick={decreaseSession}> Down </button>
            <p class=" time"> {props.sessionLength}</p>
            <button class= "btn mx-auto btn-black" onClick={increaseSession}> Up </button>
        </section>  
    );
}

export default SessionLength;