import React from 'react';
import './App.css';
import StyleBar from './components/stylebar'
import ZoomButtons from './components/zoombuttons'
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiamFrZXNpbmciLCJhIjoiY2s3dGNzeWdwMHlkeDNmbHV5M3htZHhsdCJ9.wHSNBWGNxPkJ8bhoX4XTmQ'; 



class App extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 3,
      style: 'streets-v11',
      minZoom: 2,
      maxZoom: 9
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

    map.setStyle(`mapbox://styles/mapbox/${this.state.style}`)
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
      Streets: 'streets-v11',
      Outdoors: 'outdoors-v11',
      Light: 'light-v10',
      Dark: 'dark-v10',
      Satellite: 'satellite-v9',
      SatStreets: 'satellite-streets-v11',
      NavPreviewDay: 'navigation-preview-day-v4',
      NavPreviewNight: 'navigation-preview-night-v4',
      NavGuidanceDay: 'navigation-guidance-day-v4',
      NavGuidanceNight: 'navigation-guidance-night-v4',
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
