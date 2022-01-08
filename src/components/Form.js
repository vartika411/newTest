import React from "react"
import axios from "axios";

function Form() {


    const [inputField, setInputField] = React.useState('')

    var data = JSON.stringify({
        "apikey": "yFszX8rhbUwcmmEH",
        "senderid": "BIGSMS",
        "number": "916378372120",
        "message": "Dear Customer, Your OTP for registration on mTalkz is {OTP}. Kindly verify to confirm your registration. mTalkz Mobility support@mtalkz.com, +91-9868629924",
        "format": "json"
    });

    var config = {
        method: 'post',
        url: 'https://msg.mtalkz.com/V2/http-api-sms.php',
        headers: {
            'Content-Type': 'application/json',
            'Cookie': 'PHPSESSID=d3p9lgfr8j6e5sqjpt987o726s'
        },
        data: data
    };

    function doSomething() {


        // axios(config)
        //     .then(function (response) {
        //         console.log(JSON.stringify(response.data));
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });

        alert(inputField);


    }

    const inputsHandler = (e) => {
        const { value } = e.target;
        setInputField((prevState) => (value));
    }


    return (

        <div>

            <label>Enter a phone number:</label>
            <input type="tel" id="phone"
                name="phone"
                placeholder="123-4567-890"
                maxlength="10"
                onChange={inputsHandler}
                value={inputField.phone} required />
            <button type="button" onClick={doSomething}>Submit</button>

        </div>

    )
}




export default Form
