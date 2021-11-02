import React from "react";
import "./Section01.css";
import { home } from "../../data/home";
import { Responsive, Grid } from "semantic-ui-react";
import GoogleMapReact from 'google-map-react';

const location = {
  center: {
    lat: 59.95,
    lng: 30.33
  },
  zoom: 11
};

const renderMap = () => {
  return (<div className="section01-map">
      <iframe
        src="https://maps.google.com/maps?q=293%20Dominion%20Road%20Mount%20Eden,%20Auckland%201024&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="500"
        id="gmap_canvas"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"></iframe>
    {/* <GoogleMapReact */}
    {/*   bootstrapURLKeys={{ key: 'AIzaSyCIQHL2VS4DNgYy58XG1KNVQHc468PhGqE' }} */}
    {/*   defaultCenter={location.center} */}
    {/*   defaultZoom={location.zoom} */}
    {/* ></GoogleMapReact> */}
  </div>)
}

const renderMobile = () => (
  <div className="section01">
    <div className="section01-container-m">
        {renderMap()}
    </div>
  </div>
);

const renderTablet = () => (
  <div className="section01">
    <div className="section01-container-t">
        {renderMap()}
    </div>
  </div>
);

const renderDesktop = () => (
  <div className="section01">
    <div className="section01-container">
        {renderMap()}
    </div>
  </div>
);

const renderContent = () => (
  <div>
    <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
      {renderMobile()}
    </Responsive>
    <Responsive
      minWidth={Responsive.onlyTablet.minWidth}
      maxWidth={Responsive.onlyTablet.maxWidth}
    >
      {renderTablet()}
    </Responsive>
    <Responsive minWidth={Responsive.onlyComputer.minWidth}>
      {renderDesktop()}
    </Responsive>
  </div>
);

const Section01 = () => {
  return <div>{renderContent()}</div>;
};

export default Section01;
