import React, { useState, useEffect } from 'react'
import { setQuery } from '../../constants/utils';

import "./option.css";




const Options = (props) => {

  const [option, setState] = useState([]);
  useEffect(() => {

    let request = { "type": "Search", "value": "appointment" }

    fetch('https://4pjz1fqnp5.execute-api.ap-south-1.amazonaws.com/POC/SecurraAssistAutoCompleteFAQFulfilment', {
      method: 'POST',
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json',
        'Applicatiom-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
      .then(response => response.json())
      .then((data) => {
        setState(data.responseMessage)
        setQuery(data.responseMessage)
      })
  }, [])
  console.log("option", option)


  const handleClick = (item) => {
    props.actionProvider.handleJavasscriptQuiz(item)
  }
  console.log('props', props)
  return (
    <div className="learning-options-container">
      {option.map((item) => (
        <button
          className="learning-option-button"
          key={option.index}
          onClick={(option) => handleClick(item)}
        >
          {item.key}
        </button>
      ))}
    </div>
  );
};

export default Options;