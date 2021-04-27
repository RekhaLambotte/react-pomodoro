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
        this.onToggleInterval = this.onToggleInterval.bind(this);
        this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
        this.onResetTimer = this.onResetTimer.bind(this);
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
                sessionLength: prevState.sessionLength + 1,
                timerMinute : prevState.sessionLength + 1
            }
        })

    }
    onDecreaseSessionLength(){
        this.setState( (prevState) => {
            return {
                sessionLength: prevState.sessionLength - 1,
                timerMinute : prevState.sessionLength - 1
            }
        })

    }

    onUpdateTimerMinute(){
        this.state((prevState)=>{
            return {
                timerMinute: prevState.timerMinute -1
            }
        })
    }

    onToggleInterval(isSession){
        if(isSession){
            this.state({timerMinute: this.state.sessionLength})
        }else{
            this.state({timerMinute: this.state.breakLength})
        }
    }

    onResetTimer(){
        this.setState({
            timerMinute: this.state.sessionLength
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
                <SessionLength 
                    sessionLength={this.state.sessionLength}
                    increaseSession = {this.onIncreaseSessionLength}
                    decreaseSession = {this.onDecreaseSessionLength}
                    />
                <Timer 
                    timerMinute={this.state.timerMinute}
                    breakLength = {this.state.breakLength}
                    updateTimerMinute = {this.onUpdateTimerMinute}
                    toggleInterval = {this.onToggleInterval}
                    resetTimer = {this.onResetTimer}
                    />
            </div>
            )
    }
    
}

export default App