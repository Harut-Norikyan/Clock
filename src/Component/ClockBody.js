import React from "react";

const ClockBody = (props) => {

    let seconds = props.data ? props.data : 0;
    let minutes = props.data ? props.data : 0;
    let hourse = props.data ? props.data : 0;
    if(seconds !== 0){
        seconds = +seconds.slice(5,7);
        minutes = +minutes.slice(2,4);
        hourse = +hourse.slice(0,1);
    }

    return (
        <div className="container">
            <div className="point">
                <div className="rotatedBySec" style={{transform :`rotate(${seconds * 6}deg)`}}>
                    <div className="firstSecond" />
                    <div className="lastSecond" />
                </div>
                <div className="rotatedByMin" style={{transform :`rotate(${minutes * 6}deg)`}}>
                    <div className="firstMin" />
                    <div className="lastMin" />
                </div>
                <div className="rotatedByHour"
                 style={{transform :`rotate(${hourse * 30}deg)`}}
                 >
                    <div className="firstHour" />
                    <div className="lastHour" />
                </div>
            </div>
            <div className="pointItem"/>
        </div>
    )

}

export default ClockBody;