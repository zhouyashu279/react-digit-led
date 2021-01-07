import React from 'react'
import './style.css'

class Led extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { shadow = false, shadowColor = '', style = {}, children = '' } = this.props;
    let textStyle = style;
    let shadowStyle = { ...style, color: shadowColor || '#888' };
    if (!children || typeof children !== 'string') {
      return <p className="z-digit-wrap">{children}</p>;
    }
    return (
      <p className="z-digit-wrap">
        {
          shadow &&
          <span className="digit-shadow" style={shadowStyle}>{children.replace(/\d|\./g, '0')}</span>
        }
        <span className="digit-text" style={textStyle}>{children}</span>
      </p>
    )
  }
}

export default Led