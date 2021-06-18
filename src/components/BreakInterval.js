import React from 'react';



function BreakInterval(props){

    function decreaseCounter(){
        if (props.breakInterval === 1){
          return;
        }
        props.decreaseBreak();
    };
  
    function increaseCounter(){
        if (props.breakInterval === 60){
          return;
        }
        props.increaseBreak();
    };

    return(
        <section class="break d-flex flex-row align-items-center justify-content-center p-3">
            <button class= "btn btn-black mx-auto " onClick={decreaseCounter}> Down </button>
            <p class=" time"> {props.breakInterval}</p>
            <button class= "btn mx-auto btn-black" onClick={increaseCounter}> Up </button>
        </section>  
    );
}

export default BreakInterval;