import React from "react"
import axios from "axios";

function Email() {


    const [inputField, setInputField] = React.useState('')

   
    function doSomething() {


        
    alert(inputField)

    }

    const inputsHandler = (e) => {
        const { value } = e.target;
        setInputField((prevState) => (value));
    }


    return (

        <div>

            <label>Enter your email id:</label>
            <input type="email" id="email"
                name="email"
                placeholder="abc@gmail.com"
                onChange={inputsHandler}
                value={inputField.email} required />
            <button type="button" onClick={doSomething}>Submit</button>

        </div>

    )
}




export default Email