import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faClock, faHeart, faHome } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import Section01 from "./Section01";
import "./Sustainability.css";
import img_p01 from '../../assets/images/sustainability/pollution.jpg';
import img_p02 from '../../assets/images/sustainability/sea-tex.jpg';
import img_p03 from '../../assets/images/sustainability/flx-yarn.jpg';
import img_p04 from '../../assets/images/sustainability/fabric.png';

const BuyingGuide = () => {
  return (
    <React.Fragment>
      <Header showQuote={false} showSale={false} showSlogan={false}></Header>
      <div className="sustain-container">
        {renderTitle()}
        {renderDetails()}
      </div>
      <Section01></Section01>
    </React.Fragment>
  );
};

const renderDetails = () => (
  <div className="sustain-details">
    <p>
      Sustainable roller blinds are the future of interior design.<br/>
      But why?<br/>
      Our interiors have always reflected the world around us. So with a growing awareness of climate change, and sustainability and recycling playing a prominent part of our modern lives, interior design must therefore reflect this too. Now, what specific ways does sustainable design help the environment? And save our oceans?<br/>
      Let’s find out!<br/>
    </p>
    <div className="sustain-details-title">Ocean Plastic Crisis</div>
    <p>
      The need for sustainable design has never been more important.
      There is a conservative estimate that there are 5.25 trillion pieces of plastic currently floating in the world’s oceans.
      Such a colossal amount of waste is having a serious detrimental effect on the environment and marine ecosystems around the world.<br/>
      But what can be done?<br/>
      And how does this relate to the design industry?<br/>
    </p>
    <div style={{ textAlign: 'center' }}>
      <img className="sustain-details-image" src={img_p01} alt="" />
    </div>

    <div className="sustain-details-title">Greenscreen Sea-Tex Recycled Plastic Blind Fabric</div>
    <p>
      Introducing the new award winning eco-thread called Greenscreen Sea-Tex.
      This unique fabric series offers a practical solution to reducing ocean plastic pollution.
      Developed by Hunter Douglas, Greenscreen Sea-Tex is in fact made from recycled ocean plastic. Carefully re-purposed for sustainable roller blinds fabric.<br/>
    </p>
    <div style={{ textAlign: 'center' }}>
      <img className="sustain-details-image" src={img_p02} alt="" />
    </div>

    <div className="sustain-details-title">Greenscreen Sea-Tex Recycled Plastic Blind Fabric</div>
    <p>
      FLX Yarn is formed by heating and spinning dozens of strands of plastic waste. Which is then intricately combined to make up the base of the Sea-Tex fabric.
      This unique fabric series offers a practical solution to reducing ocean plastic pollution.
      Developed by Hunter Douglas, Greenscreen Sea-Tex is in fact made from recycled ocean plastic. Carefully re-purposed for sustainable roller blinds fabric.
    </p>
    <div style={{ textAlign: 'center' }}>
      <img className="sustain-details-image" src={img_p03} alt="" />
    </div>
    <p>
      It sounds impressive, and is great for the environment, but is it practical to home application? Very much so.<br/>
      <ul>
        <li>Firstly it is a strong and versatile fabric. Making it ideal for a practical domestic setting.</li>
        <li>Secondly, it has a 2-3% openness factor that means it has efficient heat retention.</li>
        <li>Thirdly, it has excellent flame retardant properties which means it is extremely safe. Most importantly though, is also PVC and halogen free.</li>
      </ul>
      Now, how does Greenscreen Sea-Tex look in application?
    </p>

    <div className="sustain-details-title">Understated Recycled Style</div>
    <p>
      Greenscreen Sea-Tex is available for standard roller blinds with differing the fabric translucencies.<br/>

      In terms of colour and tone, they present a muted style that suits most interior design schemes.<br/>

      Colours include:<br/>
      <ul>
        <li>Graphite</li>
        <li>Haze</li>
        <li>Sand</li>
        <li>Pearl</li>
        <li>White</li>
      </ul>
      See these colour samples below for reference.
      There are also custom options available on request.
    </p>
    <div style={{ textAlign: 'center' }}>
      <img className="sustain-details-image" src={img_p04} alt="" />
    </div>
    <p>
      In terms of future design, we believe sustainability will be a key concern going forward. With initiatives like Greenscreen Sea-Tex becoming more prominent, this will not only change the way in which we look at our home but the outside world too.<br/>
      If you would like to know more about sustainable design or investing in Greenscreen Sea-Tex for your home why not contact us.<br/>
      Thank you for reading.
    </p>

  </div>
);

const renderTitle = () => (
  <div>
    <div className="sustain-title">
      Sustainable Roller Blinds
    </div>
    <div className="sustain-subtitle">
      Why they are the Future of Interior Design (and how they are Saving our Oceans)
    </div>
  </div>
);

export default BuyingGuide;
