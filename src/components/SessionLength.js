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
        <section class= "session" >
            <button class= "btn" onClick = {decreaseSession} > Down </button>
            <p> {props.sessionLength}</p>
            <button class= "btn" onClick = {increaseSession} > Up </button>
        </section>
    );
}

export default SessionLength;