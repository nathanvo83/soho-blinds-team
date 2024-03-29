import React from "react";
import "./OurProject.css";
import ProjectCard from "./ProjectCard";
import { Responsive, Grid } from "semantic-ui-react";
import projects from "../../data/projects";
// import Our01 from "./Our01";

const OurProject = () => {
  const renderMobile = () => (
    <div className="our-products">
      <div className="our-products-container-m">
        <div className="our-products-title">Our Projects</div>
        <div className="our-products-sub-title">
          See how our customers are transforming their homes with
          made-to-measure blinds, shutters and curtains.
        </div>
        <div className="gallery-image">
          <Grid columns="1" style={{ margin: 0 }}>
            <Grid.Row>
              {
                projects.map((project) => (
                  <Grid.Column key={project.id}>
                    <ProjectCard {...project} />
                  </Grid.Column>
                ))
              }
            </Grid.Row>
          </Grid>
        </div>
      </div>
    </div>
  );

  const renderTablet = () => (
    <div className="our-products">
      <div className="our-products-container-t">
        <div className="our-products-title">Our Projects</div>
        <div className="our-products-sub-title">
          See how our customers are transforming their homes with
          made-to-measure blinds, shutters and curtains.
        </div>
        <div className="gallery-image">
          <Grid columns="2" style={{ margin: 0 }}>
            <Grid.Row>
              {
                projects.map((project) => (
                  <Grid.Column key={project.id}>
                    <ProjectCard {...project} />
                  </Grid.Column>
                ))
              }
            </Grid.Row>
          </Grid>
        </div>
      </div>
    </div>
  );

  const renderDesktop = () => (
    <div className="our-products">
      <div className="our-products-container">
        <div className="our-products-title">Our Projects</div>
        <div className="our-products-sub-title">
          See how our customers are transforming their homes with
          made-to-measure blinds, shutters and curtains.
        </div>

        <div className="gallery-image">
          <Grid columns="3">
            <Grid.Row>
              {
                projects.map((project) => (
                  <Grid.Column key={project.id}>
                    <ProjectCard {...project} />
                  </Grid.Column>
                ))
              }
            </Grid.Row>
          </Grid>
        </div>
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

  return (
    <div>
      {/* <div className="products-title">OUR PROJECTS</div>
      <div className="products-sub-title">
        See how our customers are transforming their homes with made-to-measure
        blinds, shutters and curtains.
      </div> */}
      {renderContent()}
      {/* <Responsive minWidth={Responsive.onlyComputer.minWidth}>
        {renderDesktop()}
      </Responsive> */}
    </div>
  );
};

export default OurProject;
