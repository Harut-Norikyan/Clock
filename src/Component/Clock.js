import React from "react";
import axios from "axios";
import ClockBody from "./ClockBody"
class Clock extends React.Component {

    state = {
        data: '',
    };

    componentDidMount() {
        this.getData();
    };

    getData = () => {
        let { data } = this.state
        setTimeout(() => {
            axios.get(`http://localhost:4000`)
                .then(res => {
                    data = res.data;
                    data = data.slice(11, 19);
                    this.setState({
                        data,
                    });
                }).useDefaultXhrHeader = false;
            this.getData();
        }, 1000);
    };
    render() {
        return (
            <>
                <ClockBody data={this.state.data} />
            </>
        )
    };
};
export default Clock;



