import React from 'react';


function ZoomButtons(props){
	return (
		<div>
			<button onClick={props.handleZoomChange} type="button" key="zoomin" id="zoomin" className="btn btn-secondary">Zoom in</button>
			<button onClick={props.handleZoomChange} type="button" key="zoomout" id="zoomout" className="btn btn-secondary">Zoom out</button>
			{props.currentZoom === props.minZoom ? <p>Min zoom reached</p> : 
					props.currentZoom === props.maxZoom ? <p>Max zoom reached</p> : ''}
		</div>
	)
}	


export default ZoomButtons;
