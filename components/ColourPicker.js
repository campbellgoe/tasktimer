import { Component } from 'react';
import { GithubPicker } from 'react-color';
const enhanceWithClickOutside = require('react-click-outside');
class ColourPicker extends Component {
  componentDidCatch(error, info) {
    ReactGA.event({
      category: "Error",
      action: "ColourPicker - "+info,
      value: Date.now()
    })
  }
  handleClickOutside() {
    this.props.handleClickOutside();
  }
  render(){
    return (
      <div className="colour-picker-container">
        <GithubPicker
          className="colour-picker"
          triangle="top-right"
          colors={[
            '#FFFFFF', '#EB9694',
            '#FAD0C3', '#FEF3BD', '#C1E1C5',
            '#BEDADC', '#C4DEF6', '#D4C4FB'
          ]}
          onChangeComplete={ ({rgb})=>{
            this.props.changeTaskColour(rgb.r, rgb.g, rgb.b);
          }}
        />
        <style jsx>{`
          .colour-picker-container {
            z-index: 100;
            position: absolute;
            right: -43px;
            bottom: -43px;
          }
        `}</style>
      </div>
    );
  }
}
export default enhanceWithClickOutside(ColourPicker);
