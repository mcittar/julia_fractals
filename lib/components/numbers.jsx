import React from 'react';

class Numbers extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      options: this.props.options
    };
  }

  render(){
    let roundedReal = Math.round((this.props.options[0] * 1000)) / 1000;
    let roundedImaginary = Math.round((this.props.options[1] * 1000)) / 1000;
    let operator = roundedImaginary < 0 ? '-' : '+';

    return (
      <section className='number-section'>
        <span className='font'>C = { roundedReal } { operator } { Math.abs(roundedImaginary) }i</span>

      </section>
    );
  }
}

export default Numbers;


// <div>
//   <div className='shifter'>
//     <span className='font'>Real Constant: </span><span className='font'>{ roundedReal }</span>
//   </div>
// </div>
// <div>
//   <div className='shifter'>
//     <span className='font'>Imaginary Constant: </span><span className='font'>{ roundedImaginary }</span>
//   </div>
