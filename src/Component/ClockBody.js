import React from "react";
import img from "./images/86787501_Clockblank150dpi.jpg"
const ClockBody = (props) => {

    let hours = props.data.hours;
    if (props.data.hours <= 12){
        hours = hours * 30;
    }
    if (props.data.hours > 12){
        hours = (hours % 12) * 30
    }
    let minutes = props.data.minutes * 6;
    let seconds = props.data.seconds * 6;

    return (
        <div>
            <div className="imgBlock"><img className="img" src={img} alt=""/></div>
            <div className="container">
                <div className="point">
                    <div className="rotatedBySec" style={{transform :`rotate(${seconds}deg)`}}>
                        <div className="firstSecond" />
                        <div className="lastSecond" />
                    </div>
                    <div className="rotatedByMin" style={{transform :`rotate(${minutes}deg)`}}>
                        <div className="firstMin" />
                        <div className="lastMin" />
                    </div>
                    <div className="rotatedByHour" style={{transform :`rotate(${hours}deg)`}}>
                        <div className="firstHour" />
                        <div className="lastHour" />
                    </div>
                </div>
                <div className="pointItem"/>
            </div>
        </div>
    )
}

export default ClockBody;
