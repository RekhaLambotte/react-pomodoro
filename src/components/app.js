import React from "react";
import BreakInterval from './BreakInterval';
import SessionLength from "./SessionLength";
import Timer from "./Timer";


class App extends React.Component {
    constructor(){
        super();

        this.state = {
            breakLength: 5,
            sessionLength: 25,
            timerMinute: 25
        }

        this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
        this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
        this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
        this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
    }

    onIncreaseBreakLength(){
        this.setState( (prevState) => {
            return {
                breakLength: prevState.breakLength + 1
            }
        })

    }

    onDecreaseBreakLength(){
        this.setState( (prevState) => {
            return {
                breakLength: prevState.breakLength - 1
            }
        })

    }

    onIncreaseSessionLength(){
        this.setState( (prevState) => {
            return {
                sessionLength: prevState.sessionLength + 1
            }
        })

    }
    onDecreaseSessionLength(){
        this.setState( (prevState) => {
            return {
                sessionLength: prevState.sessionLength - 1
            }
        })

    }

    render (){
        return ( 
            <div>
                <h2> Pomodoro Clock</h2>
                <BreakInterval 
                    breakInterval={this.state.breakLength}
                    increaseBreak = {this.onIncreaseBreakLength}
                    decreaseBreak = {this.onDecreaseBreakLength}
                    />
                <SessionLength sessionLength={this.state.sessionLength}/>
                <Timer 
                    timerMinute={this.state.timerMinute}

                    />
            </div>
            )
    }
    
}

export default App