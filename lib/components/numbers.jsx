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

    return (
      <section className='number-section'>
        <div>
          <div className='shifter'>
            <span className='font'>Real Constant: </span><span className='font'>{ roundedReal }</span>
          </div>
        </div>
        <div>
          <div className='shifter'>
            <span className='font'>Imaginary Constant: </span><span className='font'>{ roundedImaginary }</span>
          </div>
        </div>
      </section>
    );
  }
}

export default Numbers;
