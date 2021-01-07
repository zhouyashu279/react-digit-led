import React from 'react'
import Led from './components/Led.js'
import DateTime from './components/DateTime.js'

class App extends React.Component {
  render() {
    const style = {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'red'
    },
      shodowStyle = {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#33f'
      },
      decorationStyle = {
        backgroundColor: '#fee',
        fontSize: 20
      };
    return (
      <div>
        <p>常规:</p>
        <Led>123abcdefg</Led>
        <p>设置字体中粗红色:</p>
        <Led style={style}>123abcdefg</Led>
        <p>加阴影</p>
        <Led shadow={true} shadowColor='#ccf' style={shodowStyle}>123.456 abcdefg</Led>
        <p>当前时间YYYY-MM-DD HH:mm:ss:</p>
        <DateTime formate='YYYY-MM-DD HH:mm:ss' style={decorationStyle}></DateTime>
        <p>YYYY年MM月DD日 HH时mm分ss秒:</p>
        <DateTime formate='YYYY年MM月DD日 HH时mm分ss秒' style={decorationStyle}></DateTime>
        <p>YYYY/MM/DD HH时mm分:</p>
        <DateTime formate='YYYY/MM/DD HH时mm分' style={decorationStyle}></DateTime>
      </div>
    )
  }
}

export default App