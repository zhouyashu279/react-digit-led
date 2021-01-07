import React from 'react'
import Led from './Led.js'
import './style.css'

class DateTime extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            datetime: new Date(),
        }
        this.timer = null;
    }

    componentDidMount() {
        let _this = this;
        function clock() {
            _this.setState({ datetime: new Date() })
            _this.timer = setTimeout(function () {
                clock();
            }, 1000)
        }

        clock();
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        const { datetime } = this.state;
        const { formate = 'YYYY-MM-DD HH:mm:ss', style } = this.props;
        const month = (datetime.getMonth() + 1).toString().padStart(2, '0');
        const datetimStr = datetime.toString();   //  "Thu Jan 07 2021 15:39:24 GMT+0800 (中国标准时间)"
        const year = datetimStr.substr(11, 4),
            day = datetimStr.substr(8, 2).padStart(2, '0'),
            hour = datetimStr.substr(16, 2).padStart(2, '0'),
            minute = datetimStr.substr(19, 2).padStart(2, '0'),
            second = datetimStr.substr(22, 2).padStart(2, '0');
        let result = '';

        result = formate.replace(/YYYY|yyyy/, year).replace(/MM/, month).replace(/DD|dd/, day)
            .replace(/HH|hh/, hour).replace(/mm/, minute).replace(/ss|SS/, second);

        return <Led shadow={false} style={style}>{result}</Led >
    }
}

export default DateTime;