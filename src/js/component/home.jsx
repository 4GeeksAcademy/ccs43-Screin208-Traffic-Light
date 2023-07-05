import React, { useState } from "react";

//include images into your bundle

//create your first component
const TrafficLight = () => {
	const [selected, setSelect] = useState('');
	const [selected2, setSelect2] = useState(selected);
	console.log(setSelect2)
	
  
	return (
	  <div id="containerDiv" className="container">
		<div id="pole"></div>
		<div id="lights">
		  <div
			className={`circleGreen ${selected === 'green' ? 'selected' : ''}`}
		  >
			<button type="button" onClick={() => setSelect('green')}></button>
		  </div>
		  <div
			className={`circleYellow ${selected === 'yellow' ? 'selected' : ''}`}
		  >
			<button type="button" onClick={() => setSelect('yellow')}></button>
		  </div>
		  <div className={`circleRed ${selected === 'red' ? 'selected' : ''}`}>
			<button type="button" onClick={() => setSelect('red')}></button>
		  </div>
		</div>
	  </div>
	);
  };
  

export default TrafficLight;