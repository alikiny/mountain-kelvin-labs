import React from 'react';

const Button = (props) => {
    return (
        <div className="lab-btn col-md-5 " onClick={()=>props.buttonFunction()}>
            <img src={props.image} alt="logo" width='40px' className="mt-3 mb-3"/>
            <p> {props.text} </p>
        </div>
    );
};

export default Button;