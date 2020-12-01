import React from 'react';

const Button = (props) => {
    return (
        <div className="lab-btn col-md-5 ">
            <img src={props.image} alt="logo" width='40px' className="mt-3 mb-3"/>
            <p onClick={props.click}> {props.text} </p>
        </div>
    );
};

export default Button;