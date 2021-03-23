import React from "react";
import "./CustomerFeedback.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as ROUTES from "../../constants/routes";
import { Responsive, Grid, Button } from "semantic-ui-react";

const renderMobile = () => (
  <div className="CustomerFeedback-m">
    <div className="CustomerFeedback-container-m">
      <Grid columns="1" style={{ margin: 0 }}>
        <Grid.Row>
          <Grid.Column>
            <div className="CustomerFeedback-header">
              Sit back, relax. Let us do it all.
            </div>
            <div className="CustomerFeedback-title">All expertly measured.</div>
            <div className="CustomerFeedback-details">
              We do the measuring and advise you on the perfect solution for
              your window.
            </div>
            <div className="CustomerFeedback-title">
              All tailor-made for you.
            </div>
            <div className="CustomerFeedback-details">
              All our products are made to order for an exact fit.
            </div>
            <div className="CustomerFeedback-title">
              All fitted to perfection.
            </div>
            <div className="CustomerFeedback-details">
              We do the fitting, and all our products are fully guaranteed.
            </div>

            <br />
            <br />
            <a href={ROUTES.CONTACTUS} rel="noopener noreferrer">
              <Button className="CustomerFeedback-button">
                REQUEST AN APPOINTMENT
              </Button>
            </a>
            <br />
            <br />
          </Grid.Column>
          <Grid.Column>
            <div className="CustomerFeedback-box">
              <div className="CustomerFeedback-header">Happy Customers</div>
              <div className="CustomerFeedback-name">Li Quan</div>
              <div className="CustomerFeedback-stars">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              </div>
              <div className="CustomerFeedback-desc">
                Great product and service! Love the final work which perfectly
                matches the style of my brand new house! The team has done a
                beautifully neat and tidy work! Highly recommended!
              </div>
              <br />
              <div className="CustomerFeedback-name">Nicolas C., Auckland</div>
              <div className="CustomerFeedback-stars">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              </div>
              <div className="CustomerFeedback-desc">
                Excellent service, great product, best price! We are so happy to
                have chosen Soho Blinds and the curtain products that the
                company offered. I have already recommended Soho Blinds to
                friends and family and will continue to do so.
              </div>
              <br />
              <div className="CustomerFeedback-name">Christine Keown</div>
              <div className="CustomerFeedback-stars">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              </div>
              <div className="CustomerFeedback-desc">
                The price was really good. Communication was excellent. Product
                was correct to order and works fine. The person we dealt with
                was very pleasant to work with.
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
);

const renderTablet = () => (
  <div className="CustomerFeedback-t">
    <div className="CustomerFeedback-container-t">
      <Grid columns="2">
        <Grid.Row>
          <Grid.Column>
            <div className="CustomerFeedback-header">
              Sit back, relax. Let us do it all.
            </div>
            <div className="CustomerFeedback-title">All expertly measured.</div>
            <div className="CustomerFeedback-details">
              We do the measuring and advise you on the perfect solution for
              your window.
            </div>
            <div className="CustomerFeedback-title">
              All tailor-made for you.
            </div>
            <div className="CustomerFeedback-details">
              All our products are made to order for an exact fit.
            </div>
            <div className="CustomerFeedback-title">
              All fitted to perfection.
            </div>
            <div className="CustomerFeedback-details">
              We do the fitting, and all our products are fully guaranteed.
            </div>

            <br />
            <br />
            <a href={ROUTES.CONTACTUS} rel="noopener noreferrer">
              <Button className="CustomerFeedback-button">
                REQUEST AN APPOINTMENT
              </Button>
            </a>
          </Grid.Column>
          <Grid.Column>
            <div className="CustomerFeedback-box">
              <div className="CustomerFeedback-header">Happy Customers</div>
              <div className="CustomerFeedback-name">Li Quan</div>
              <div className="CustomerFeedback-stars">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              </div>
              <div className="CustomerFeedback-desc">
                Great product and service! Love the final work which perfectly
                matches the style of my brand new house! The team has done a
                beautifully neat and tidy work! Highly recommended!
              </div>
              <br />
              <div className="CustomerFeedback-name">Nicolas C., Auckland</div>
              <div className="CustomerFeedback-stars">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              </div>
              <div className="CustomerFeedback-desc">
                Excellent service, great product, best price! We are so happy to
                have chosen Soho Blinds and the curtain products that the
                company offered. I have already recommended Soho Blinds to
                friends and family and will continue to do so.
              </div>
              <br />
              <div className="CustomerFeedback-name">Christine Keown</div>
              <div className="CustomerFeedback-stars">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              </div>
              <div className="CustomerFeedback-desc">
                The price was really good. Communication was excellent. Product
                was correct to order and works fine. The person we dealt with
                was very pleasant to work with.
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  </div>
);

const renderDesktop = () => (
  <div className="CustomerFeedback">
    <div className="CustomerFeedback-container">
      <Grid columns="2">
        <Grid.Row>
          <Grid.Column>
            <div className="CustomerFeedback-header">
              Sit back, relax. Let us do it all.
            </div>
            <div className="CustomerFeedback-title">All expertly measured.</div>
            <div className="CustomerFeedback-details">
              We do the measuring and advise you on the perfect solution for
              your window.
            </div>
            <div className="CustomerFeedback-title">
              All tailor-made for you.
            </div>
            <div className="CustomerFeedback-details">
              All our products are made to order for an exact fit.
            </div>
            <div className="CustomerFeedback-title">
              All fitted to perfection.
            </div>
            <div className="CustomerFeedback-details">
              We do the fitting, and all our products are fully guaranteed.
            </div>

            <br />
            <br />
            <a href={ROUTES.CONTACTUS} rel="noopener noreferrer">
              <Button className="CustomerFeedback-button">
                REQUEST AN APPOINTMENT
              </Button>
            </a>
          </Grid.Column>
          <Grid.Column>
            <div className="CustomerFeedback-box">
              <div className="CustomerFeedback-header">Happy Customers</div>

              <div className="CustomerFeedback-name">Li Quan</div>
              <div className="CustomerFeedback-stars">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              </div>
              <div className="CustomerFeedback-desc">
                Great product and service! Love the final work which perfectly
                matches the style of my brand new house! The team has done a
                beautifully neat and tidy work! Highly recommended!
              </div>
              <br />
              <div className="CustomerFeedback-name">Nicolas C., Auckland</div>
              <div className="CustomerFeedback-stars">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              </div>
              <div className="CustomerFeedback-desc">
                Excellent service, great product, best price! We are so happy to
                have chosen Soho Blinds and the curtain products that the
                company offered. I have already recommended Soho Blinds to
                friends and family and will continue to do so.
              </div>
              <br />
              <div className="CustomerFeedback-name">Christine Keown</div>
              <div className="CustomerFeedback-stars">
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              </div>
              <div className="CustomerFeedback-desc">
                The price was really good. Communication was excellent. Product
                was correct to order and works fine. The person we dealt with
                was very pleasant to work with.
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
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

const CustomerFeedback = () => {
  return <div>{renderContent()}</div>;
};

export default CustomerFeedback;
