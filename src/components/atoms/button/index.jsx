import React from "react";
import './button.css';
import Button from '@mui/material/Button';

const Buttons = (props) => {
    console.log(props)
    return (
        <div>
            <Button id='button-search' variant="contained">{props.text}</Button>
        </div>
    )

}

export default Buttons;