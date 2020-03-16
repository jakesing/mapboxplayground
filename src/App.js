import React from 'react';
import './App.css';
import StyleBar from './components/stylebar'
import ZoomButtons from './components/zoombuttons'
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiamFrZXNpbmciLCJhIjoiY2s3dGNzeWdwMHlkeDNmbHV5M3htZHhsdCJ9.wHSNBWGNxPkJ8bhoX4XTmQ'; 



class App extends React.Component {
  mapRef = React.createRef();
  map;


  constructor(props) {
    super(props);
    this.state = {
      lng: -122.4783,
      lat: 37.8617,
      zoom: 8,
      style: 'streets-v11',
      minZoom: 2,
      maxZoom: 12
    };
  }

  renderMapCorrectly() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: `mapbox://styles/mapbox/${this.state.style}`,
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
      minZoom: this.state.minZoom,
      maxZoom: this.state.maxZoom
    })

    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      })
    })

    map.setStyle(`mapbox://styles/${this.state.style}`);
  }

  componentDidMount() {
    this.renderMapCorrectly();
  }

  handleZoomChange = (event) => {
    const changeZoom = () => {
      let change = event.target.id === 'zoomin' ? 1 : -1;
      this.setState(state => ({
        zoom: Math.round(state.zoom + parseInt(change))
      }), () => {
        this.renderMapCorrectly();
      })
    }

    if(this.state.zoom === this.state.minZoom && event.target.id==='zoomout'){
      console.log(`Cannot Zoom out further`)
    } else if (this.state.zoom === this.state.maxZoom && event.target.id==='zoomin'){
      console.log(`Cannot Zoom in further`)
    } else {
      changeZoom();
    }
  }

  handleStylechange = (event) => {
    this.setState({
      style: event.target.value
    }, () => {
      this.renderMapCorrectly();
    })
  }

  render(){
    const styleOptions = {
      Streets: 'mapbox/streets-v11',
      Outdoors: 'mapbox/outdoors-v11',
      Light: 'mapbox/light-v10',
      Dark: 'mapbox/dark-v10',
      Satellite: 'mapbox/satellite-v9',
      SatStreets: 'mapbox/satellite-streets-v11',
      NavPreviewDay: 'mapbox/navigation-preview-day-v4',
      NavPreviewNight: 'mapbox/navigation-preview-night-v4',
      NavGuidanceDay: 'mapbox/navigation-guidance-day-v4',
      NavGuidanceNight: 'mapbox/navigation-guidance-night-v4',
      Jake: 'jakesing/ck7ute9na2h4k1in8xny4dtge/draft'
    }

    return(
      <div>
        <div className="barContainer">
          <div className="sidebarStyle">Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
          <StyleBar styles={styleOptions} className="styleBar" currentStyle = {this.state.style} handleStylechange={this.handleStylechange}/>
          <ZoomButtons handleZoomChange={this.handleZoomChange} currentZoom={this.state.zoom} maxZoom={this.state.maxZoom} minZoom={this.state.minZoom}/>
        </div>
        <div ref={el => this.mapContainer = el} className="mapContainer"/>
      </div>
    )
  }
}

export default App;
