import React from 'react';


function ZoomButtons(props){
	return (
		<div className="zoomButtons"> {/*adding flex styling to put error below buttons*/}
			<div className="btn-group">
				<button onClick={props.handleZoomChange} type="button" key="zoomin" id="zoomin" className="btn btn-secondary">Zoom in</button>
				<button onClick={props.handleZoomChange} type="button" key="zoomout" id="zoomout" className="btn btn-secondary">Zoom out</button>
			</div>
			{props.zoomError ? <p className="alert alert-primary">{props.zoomError}</p> : ''}
		</div>
	)
}	


export default ZoomButtons;
