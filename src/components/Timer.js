import React from 'react';

class Timer extends React.Component {
    constructor(){
        super();

        this.state = {
            isSession: true,
            timerSecond: 0,
            intervalId: 0,
            show: false
        }

        this.playTimer = this.playTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);
    }

    playTimer(){
        let intervalId = setInterval(this.decreaseTimer, 1000)
        this.setState({intervalId: intervalId})
    }

    decreaseTimer(){
        switch(this.state.timerSecond){
            case 0:
                if (this.props.timerMinute === 0){
                    if (this.state.isSession){
                        this.setState({isSession: false});
                        this.props.toggleInterval(this.state.isSession);
                    }else{
                        this.setState({isSession: true});
                        this.props.toggleInterval(this.state.isSession);
                    }
                }else{
                    this.props.updateTimerMinute()
                    this.setState({ timerSecond: 59})
                }
                break;
            default:
                this.setState((prevState)=>{
                    return { timerSecond: prevState.timerSecond - 1}
                })
                break;
        }
    }

    stopTimer(){
        clearInterval(this.state.intervalId);
       
    }

    resetTimer(){
        this.stopTimer();
        this.props.resetTimer();
        this.setState({ 
            timerSecond: 0,
            isSession: true
        })
    }


    render () {
        return (
            <section class= "break d-flex flex-column flex-row align-items-center justify-content-center p-3 ">
                <section class="d-flex flex-column ">
                    <h2 class="d-flex justify-content-center titleSession"> { this.state.isSession === true ? "Session" : "Break"} </h2>
                    <div class="d-flex justify-content-center timeSession"> 
                        <span> {this.props.timerMinute} </span>
                        <span> : </span>
                        <span> {this.state.timerSecond === 0 
                        ? "00" : this.state.timerSecond < 10 
                        ? "0" + this.state.timerSecond : this.state.timerSecond} </span>
                    </div>
                </section>
                <section class= "d-flex justify-content-evenly">
                    <button class= " btn btn-black ms-10 " onClick={this.playTimer}> Play </button>
                    <button class= " btn btn-black ms-10" onClick={this.stopTimer}> Stop </button>
                    <button class= " btn btn-black ms-10" onClick={this.resetTimer}> Refresh </button>
                </section>

            </section>
        );
    }

}

export default Timer;