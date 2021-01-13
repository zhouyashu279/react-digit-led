# react-digit-led

> 显示led数字的react组件
## Install

``` bash
 npm install react-digit-led1 --save-dev
```
## Example
 Demo
``` bash
import {Led, DateTime} from 'react-digit-led1'
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
```


<img src="https://github.com/z09876/react-digit-led/blob/master/page.png" width="50%" alt="页面样式">



## Led组件Props

config

| Property  | Type |required|Explain|
| :----- | :----: |:----:|:----:|
| style  | Object |false |led中文本样式|
| shadow  | Boolean |false |显示阴影|
| shadowColor  | String |true |阴影颜色|


## DateTime组件Props

config

| Property  | Type |required|Explain|
| :----- | :----: |:----:|:----:|
| style  | Object |false |DateTime中文本样式|
| formate  | String |false |显示时间格式，默认YYYY-MM-DD HH:mm:ss|


## License
MIT

