(this.webpackJsonpmapboxplayground=this.webpackJsonpmapboxplayground||[]).push([[0],{10:function(t,e,a){t.exports=a(18)},15:function(t,e,a){},16:function(t,e,a){},18:function(t,e,a){"use strict";a.r(e);var o=a(0),n=a.n(o),s=a(3),m=a.n(s),r=(a(15),a(4)),i=a(5),l=a(8),c=a(6),u=a(9),h=(a(16),a(7));var d=function(t){return n.a.createElement("div",{className:"styleBar"},Object.entries(t.styles).map((function(e){var a=Object(h.a)(e,2),o=a[0],s=a[1];return n.a.createElement("div",{className:"custom-control custom-radio"},n.a.createElement("input",{className:"custom-control-input",key:"".concat(o),type:"radio",id:o,name:o,value:s,checked:s===t.currentStyle,onChange:t.handleStylechange}),n.a.createElement("label",{className:"custom-control-label",key:"".concat(s),htmlFor:o},o))})))};var p=function(t){return n.a.createElement("div",{className:"zoomButtons"}," ",n.a.createElement("div",{className:"btn-group"},n.a.createElement("button",{onClick:t.handleZoomChange,type:"button",key:"zoomin",id:"zoomin",className:"btn btn-secondary"},"Zoom in"),n.a.createElement("button",{onClick:t.handleZoomChange,type:"button",key:"zoomout",id:"zoomout",className:"btn btn-secondary"},"Zoom out")),t.zoomError?n.a.createElement("p",{className:"alert alert-primary"},t.zoomError):"")},y=a(1),g=a.n(y);g.a.accessToken="pk.eyJ1IjoiamFrZXNpbmciLCJhIjoiY2s4NG9sbGxxMDA3aDNmbXc1bWcyaW4yaiJ9.gvoKtstAfK6qvIwNFVdwXg";var v=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(l.a)(this,Object(c.a)(e).call(this,t))).handleZoomChange=function(t){a.checkForZoomError(t.target.id),"zoomin"===t.target.id?a.state.map.zoomIn({duration:1e3,animate:!0},(function(){a.setState({zoom:a.state.map.getZoom()})})):a.state.map.zoomOut({duration:1e3,animate:!0},(function(){a.setState({zoom:a.state.map.getZoom()})}))},a.handleStylechange=function(t){var e=a.state.zoom,o="jakesing/ck7uu3usi2hym1imt1ml0h71r"===t.target.value?3:e;a.state.map.setStyle("mapbox://styles/".concat(t.target.value)),a.state.map.setZoom(o),a.setState({style:t.target.value,zoom:o})},a.state={lng:-96.9767,lat:39.3452,zoom:11,style:"jakesing/ck7uu3usi2hym1imt1ml0h71r",minZoom:3,maxZoom:15.5,map:{},zoomError:null},a}return Object(u.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=new g.a.Map({container:this.mapContainer,style:"mapbox://styles/".concat(this.state.style),center:[this.state.lng,this.state.lat],zoom:this.state.zoom,minZoom:this.state.minZoom,maxZoom:this.state.maxZoom});e.on("move",(function(){t.setState({lng:e.getCenter().lng.toFixed(4),lat:e.getCenter().lat.toFixed(4),zoom:e.getZoom().toFixed(1)})})),e.setStyle("mapbox://styles/".concat(this.state.style)),this.setState({map:e})}},{key:"checkForZoomError",value:function(t){this.state.zoom==this.state.minZoom&&"zoomout"===t?this.setState({zoomError:"Min zoom reached"}):this.state.zoom==this.state.maxZoom&&"zoomin"===t?this.setState({zoomError:"Max zoom reached"}):this.setState({zoomError:null})}},{key:"render",value:function(){var t=this;return n.a.createElement("div",{className:"container"},n.a.createElement("h1",null,"County Level 2016 Election Map"),n.a.createElement("div",{className:"lead"},"Longitude: ",this.state.lng," | Latitude: ",this.state.lat," | Zoom: ",this.state.zoom),n.a.createElement("div",{className:"map_labels"},n.a.createElement("div",{ref:function(e){return t.mapContainer=e},className:"mapContainer"}),n.a.createElement(d,{styles:{ElectionData:"jakesing/ck7uu3usi2hym1imt1ml0h71r",Streets:"mapbox/streets-v11",Light:"mapbox/light-v10",Outdoors:"mapbox/outdoors-v11",Dark:"mapbox/dark-v10",Satellite:"mapbox/satellite-v9"},currentStyle:this.state.style,handleStylechange:this.handleStylechange})),n.a.createElement(p,{handleZoomChange:this.handleZoomChange,zoomError:this.state.zoomError}))}}]),e}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(17);m.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.c6f9ebac.chunk.js.map