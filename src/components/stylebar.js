import React from 'react';


function StyleBar(props){
	return (
		<div className="styleBar">
			{Object.entries(props.styles).map(([key, value]) => {
				return(
					<div className="custom-control custom-radio">
						<input className="custom-control-input" key={`${key}`} type="radio" id={key} name={key} value={value} checked={value === props.currentStyle} onChange={props.handleStylechange}/>
						<label className="custom-control-label" key={`${value}`} htmlFor={key}>{key}</label>
					</div>
				)
  			})}
		</div>
	)
}	


export default StyleBar;

