import React from 'react';


function StyleBar(props){
	return (
		<div>
			{Object.entries(props.styles).map(([key, value]) => {
				return(
					<div>
						<input key={`${key}_input`} type="radio" id={key} name={key} value={value} checked={value === props.currentStyle} onChange={props.handleStylechange}/>
						<label key={`${key}_label`} htmlFor={key}>{key}</label>
					</div>
				)
  			})}

		</div>
	)
}	


export default StyleBar;
