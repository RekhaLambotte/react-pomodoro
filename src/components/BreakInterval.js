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
        <section class="break d-flex flex-row align-items-center p-3">
            <button class= "btn btn-info mx-auto border" onClick={decreaseCounter}> Down </button>
            <p class="d-flex align-items-center border"> {props.breakInterval}</p>
            <button class= "btn btn-info mx-auto" onClick={increaseCounter}> Up </button>
        </section>  
    );
}

export default BreakInterval;