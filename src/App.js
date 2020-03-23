import React from 'react';
import './App.css';
import StyleBar from './components/stylebar'
import ZoomButtons from './components/zoombuttons'
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiamFrZXNpbmciLCJhIjoiY2s4NG9sbGxxMDA3aDNmbXc1bWcyaW4yaiJ9.gvoKtstAfK6qvIwNFVdwXg';

//secret key: sk.eyJ1IjoiamFrZXNpbmciLCJhIjoiY2s4NG96NWhhMDBjOTNwbW9seW5tazMwaCJ9.rT0PuYeb3XsYH3MialLNeQ 



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -122.3642,
      lat: 47.6100,
      zoom: 11,
      style: 'mapbox/streets-v11',
      minZoom: 10.0,
      maxZoom: 15.5,
      map: {},
      zoomError: null
    };
  }
  
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: `mapbox://styles/${this.state.style}`,
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
      minZoom: this.state.minZoom,
      maxZoom: this.state.maxZoom
    });

    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(1)
      })
    })

    map.setStyle(`mapbox://styles/${this.state.style}`);
    this.setState({map: map});
  }

  checkForZoomError(event) {
    if(this.state.zoom==this.state.minZoom && event==='zoomout'){
      this.setState({
        zoomError: 'Min zoom reached'
      })
    } else if (this.state.zoom==this.state.maxZoom && event==='zoomin'){
      this.setState({
        zoomError: 'Max zoom reached'
      })
    } else {
      this.setState({
        zoomError: null
      })
    }
  }

  handleZoomChange = (event) => {
    this.checkForZoomError(event.target.id)

    if(event.target.id==='zoomin'){
      this.state.map.zoomIn({duration:1000, animate: true}, () => {
        this.setState({
          zoom: this.state.map.getZoom()
        })
      });
    } else {
      this.state.map.zoomOut({duration:1000, animate: true}, () => {
        this.setState({
          zoom: this.state.map.getZoom()
        })
      });
    }

  }

  handleStylechange = (event) => {
    this.setState({
        style: event.target.value
      })

    this.state.map.setStyle(`mapbox://styles/${event.target.value}`)
  }

  render(){
    const styleOptions = {
      Streets: 'mapbox/streets-v11',
      Outdoors: 'mapbox/outdoors-v11',
      Light: 'mapbox/light-v10',
      Dark: 'mapbox/dark-v10',
      Satellite: 'mapbox/satellite-v9',
      JakeCustom: 'jakesing/ck7uu3usi2hym1imt1ml0h71r'
    }

    return(
      <div className="container">
        <h1>County Level 2016 Election Map</h1>
        <div className="lead">Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
        <div className="map_labels">
          <div ref={el => this.mapContainer = el} className="mapContainer"/>
          <StyleBar styles={styleOptions} currentStyle = {this.state.style} handleStylechange={this.handleStylechange}/>
        </div>
        <ZoomButtons handleZoomChange={this.handleZoomChange} zoomError={this.state.zoomError}/>
      </div>
    )
  }
}

export default App;
