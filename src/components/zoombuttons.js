import React from 'react';


function ZoomButtons(props){
	return (
		<div>
			<button onClick={props.handleZoomChange} type="button" key="zoomin" id="zoomin" className="btn btn-secondary">Zoom in</button>
			<button onClick={props.handleZoomChange} type="button" key="zoomout" id="zoomout" className="btn btn-secondary">Zoom out</button>
		</div>

	)
}	


export default ZoomButtons;
