import React from "react";
import axios from "axios";
import ClockBody from "./ClockBody"
class Clock extends React.Component {

    state = {
        hours : 0,
        minutes : 0,
        seconds : 0
    };

    componentDidMount() {
        this.getData();
    };

    getData = () => {
        setTimeout(() => {
            axios.get(`http://localhost:4000`)
                .then(res => {
                    this.setState({
                        hours : res.data.hours,
                        minutes : res.data.minutes,
                        seconds : res.data.seconds,
                    });
                }).useDefaultXhrHeader = false;
            this.getData();
        }, 1000);

    };
    render() {
        return (
            <>
                <ClockBody data={this.state} />
            </>
        );
    };
};
export default Clock;



