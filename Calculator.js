import React, { useState } from "react";
import Button from "./Button";
import './App.css';
import './Calculator.css';

// Import your image from the 'src' folder
import Shristyimage from './Shristy.jpg'; // Update the path to match your file location

function KeyPadComponent(props) {
    const [text1, setText] = useState("");
    const [imageVisible, setImageVisible] = useState(false); // For Show Me button

    const ClickHandle = (e) => {
        const buttonValue = e.target.value;

        if (buttonValue === "C") {
            setText("");    
        } else if (buttonValue === "=") {
            setText(eval(text1));  // Display result on screen
            alert(eval(text1));  // Show result in an alert
        } else if (buttonValue === "Show Me") {
            setImageVisible(!imageVisible);  // Toggle image visibility
        } else if (buttonValue === "Square") {
            setText(Math.pow(parseFloat(text1), 2));  // Show the square of the number
        } else {
            setText(text1 + buttonValue);  // Update text field with button click
        }
    };

    return (
        <div className="Calculator">
            <div className="screen-row">
                <input type="text" readOnly value={text1} />
            </div>

            {/* Default Buttons */}
            <div>
                <Button label="(" ClickHandle={ClickHandle} />
                <Button label="CE" ClickHandle={ClickHandle} />
                <Button label=")" ClickHandle={ClickHandle} />
                <Button label="C" ClickHandle={ClickHandle} />
            </div>

            <div>
                <Button label="1" ClickHandle={ClickHandle} />
                <Button label="2" ClickHandle={ClickHandle} />
                <Button label="3" ClickHandle={ClickHandle} />
                <Button label="+" ClickHandle={ClickHandle} />
            </div>

            <div>
                <Button label="4" ClickHandle={ClickHandle} />
                <Button label="5" ClickHandle={ClickHandle} />
                <Button label="6" ClickHandle={ClickHandle} />
                <Button label="-" ClickHandle={ClickHandle} />
            </div>

            <div>
                <Button label="7" ClickHandle={ClickHandle} />
                <Button label="8" ClickHandle={ClickHandle} />
                <Button label="9" ClickHandle={ClickHandle} />
                <Button label="*" ClickHandle={ClickHandle} />
            </div>

            <div>
                <Button label="." ClickHandle={ClickHandle} />
                <Button label="0" ClickHandle={ClickHandle} />
                <Button label="=" ClickHandle={ClickHandle} />
                <Button label="/" ClickHandle={ClickHandle} />
            </div>

            {/* New Buttons: Show Me and Square */}
            <div>
                <Button label="Show Me" ClickHandle={ClickHandle} />
                <Button label="Square" ClickHandle={ClickHandle} className="square-button" />

            </div>

            {/* Display Image if Show Me button is clicked */}
            {imageVisible && (
                <div className="image-container">
                    {/* Use the imported image */}
                    <img src={Shristyimage} alt="Your Picture" className="profile-image" />
                </div>
            )}
        </div>
    );
}

export default KeyPadComponent;