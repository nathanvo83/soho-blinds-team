import React from "react";
import "./OurProduct.css";

import { Responsive, Grid } from "semantic-ui-react";
// import Our01 from "./Our01";

const OurProduct = () => {
  const renderMobile = () => (
    <div class="gallery-image">
      <Grid columns="1" style={{ margin: 0 }}>
        <Grid.Row>
          <Grid.Column>
            <a
              href="https://www.houzz.co.nz/hznb/projects/35-eyton-kay-road-pj-vj~6213604"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="img-box-m">
                <img
                  src="https://st.hzcdn.com/simgs/7951bf480ed5a921_8-0774/contemporary.jpg"
                  alt=""
                />

                <div class="transparent-box">
                  <div class="caption">
                    <p>Hobsonvile, Auckland.</p>
                    <p class="opacity-low">35 Eyton Kay Road.</p>
                  </div>
                </div>
              </div>
            </a>
          </Grid.Column>
          <Grid.Column>
            <a
              href="https://www.houzz.co.nz/hznb/projects/53a-white-swan-road-mount-roskill-pj-vj~6119554"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="img-box-m">
                <img
                  src="https://st.hzcdn.com/simgs/3a21d70b0e79a47e_8-0274/contemporary.jpg"
                  alt=""
                />
                <div class="transparent-box">
                  <div class="caption">
                    <p>Mount Roskill, Auckland.</p>
                    <p class="opacity-low">53A White Swan Road.</p>
                  </div>
                </div>
              </div>
            </a>
          </Grid.Column>
          <Grid.Column>
            <a
              href="https://www.houzz.co.nz/hznb/projects/galway-street-pj-vj~6117224"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="img-box-m">
                <img
                  src="https://st.hzcdn.com/simgs/3a912e0d0e768d9d_8-7809/contemporary.jpg"
                  alt=""
                />
                <div class="transparent-box">
                  <div class="caption">
                    <p>Onehunga, Auckland.</p>
                    <p class="opacity-low">Galway Street.</p>
                  </div>
                </div>
              </div>
            </a>
          </Grid.Column>

          <Grid.Column>
            <a
              href="https://www.houzz.co.nz/hznb/projects/lighter-quay-pj-vj~6117208"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="img-box-m">
                <img
                  src="https://st.hzcdn.com/simgs/0301b0d30e7683d0_8-5300/contemporary.jpg"
                  alt=""
                />
                <div class="transparent-box">
                  <div class="caption">
                    <p>Auckland CBD.</p>
                    <p class="opacity-low">Lighter Quay.</p>
                  </div>
                </div>
              </div>
            </a>
          </Grid.Column>
          <Grid.Column>
            <a
              href="https://www.houzz.co.nz/hznb/projects/kristy-harrison-horomia-road-pj-vj~6117212"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="img-box-m">
                <img
                  src="https://st.hzcdn.com/simgs/4601f6860e7686d4_8-6071/home-design.jpg"
                  alt=""
                />
                <div class="transparent-box">
                  <div class="caption">
                    <p>Rosehill, Papakura.</p>
                    <p class="opacity-low">Kristy Harrison Horimia Road.</p>
                  </div>
                </div>
              </div>
            </a>
          </Grid.Column>

          {/* <Grid.Column>
            <a
              href="https://www.houzz.co.nz/professionals/shutters-blinds-and-curtains/soho-blinds-pfvwnz-pf~943228419"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="img-box">
                <img src="https://picsum.photos/750/250?image=494" alt="" />
                <div class="transparent-box">
                  <div class="caption">
                    <p>More</p>
                    <p class="opacity-low">...</p>
                  </div>
                </div>
              </div>
            </a>
          </Grid.Column> */}
        </Grid.Row>
      </Grid>
    </div>
  );

  const renderTablet = () => (
    <div class="gallery-image">
      <Grid columns="2" style={{ margin: 0 }}>
        <Grid.Row>
          <Grid.Column>
            <a
              href="https://www.houzz.co.nz/hznb/projects/35-eyton-kay-road-pj-vj~6213604"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="img-box">
                <img
                  src="https://st.hzcdn.com/simgs/7951bf480ed5a921_8-0774/contemporary.jpg"
                  alt=""
                />

                <div class="transparent-box">
                  <div class="caption">
                    <p>Hobsonvile, Auckland</p>
                    <p class="opacity-low">35 Eyton Kay Road.</p>
                  </div>
                </div>
              </div>
            </a>
          </Grid.Column>
          <Grid.Column>
            <a
              href="https://www.houzz.co.nz/hznb/projects/53a-white-swan-road-mount-roskill-pj-vj~6119554"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="img-box">
                <img
                  src="https://st.hzcdn.com/simgs/3a21d70b0e79a47e_8-0274/contemporary.jpg"
                  alt=""
                />
                <div class="transparent-box">
                  <div class="caption">
                    <p>Mount Roskill, Auckland</p>
                    <p class="opacity-low">53A White Swan Road.</p>
                  </div>
                </div>
              </div>
            </a>
          </Grid.Column>
          <Grid.Column>
            <a
              href="https://www.houzz.co.nz/hznb/projects/galway-street-pj-vj~6117224"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="img-box">
                <img
                  src="https://st.hzcdn.com/simgs/3a912e0d0e768d9d_8-7809/contemporary.jpg"
                  alt=""
                />
                <div class="transparent-box">
                  <div class="caption">
                    <p>Onehunga, Auckland</p>
                    <p class="opacity-low">Galway Street.</p>
                  </div>
                </div>
              </div>
            </a>
          </Grid.Column>

          <Grid.Column>
            <a
              href="https://www.houzz.co.nz/hznb/projects/lighter-quay-pj-vj~6117208"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="img-box">
                <img
                  src="https://st.hzcdn.com/simgs/0301b0d30e7683d0_8-5300/contemporary.jpg"
                  alt=""
                />
                <div class="transparent-box">
                  <div class="caption">
                    <p>Auckland CBD.</p>
                    <p class="opacity-low">Lighter Quay.</p>
                  </div>
                </div>
              </div>
            </a>
          </Grid.Column>
          <Grid.Column>
            <a
              href="https://www.houzz.co.nz/hznb/projects/kristy-harrison-horomia-road-pj-vj~6117212"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="img-box">
                <img
                  src="https://st.hzcdn.com/simgs/4601f6860e7686d4_8-6071/home-design.jpg"
                  alt=""
                />
                <div class="transparent-box">
                  <div class="caption">
                    <p>Rosehill, Papakura.</p>
                    <p class="opacity-low">Kristy Harrison Horimia Road.</p>
                  </div>
                </div>
              </div>
            </a>
          </Grid.Column>

          {/* <Grid.Column>
            <a
              href="https://www.houzz.co.nz/professionals/shutters-blinds-and-curtains/soho-blinds-pfvwnz-pf~943228419"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="img-box">
                <img src="https://picsum.photos/750/250?image=494" alt="" />
                <div class="transparent-box">
                  <div class="caption">
                    <p>More</p>
                    <p class="opacity-low">...</p>
                  </div>
                </div>
              </div>
            </a>
          </Grid.Column> */}
        </Grid.Row>
      </Grid>
    </div>
  );

  const renderDesktop = () => (
    <div class="gallery-image">
      <Grid columns="3" style={{ margin: 0 }}>
        <Grid.Row>
          <Grid.Column>
            <a
              href="https://www.houzz.co.nz/hznb/projects/35-eyton-kay-road-pj-vj~6213604"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="img-box">
                <img
                  src="https://st.hzcdn.com/simgs/7951bf480ed5a921_8-0774/contemporary.jpg"
                  alt=""
                />

                <div class="transparent-box">
                  <div class="caption">
                    <p>Hobsonvile, Auckland</p>
                    <p class="opacity-low">35 Eyton Kay Road.</p>
                  </div>
                </div>
              </div>
            </a>
          </Grid.Column>
          <Grid.Column>
            <a
              href="https://www.houzz.co.nz/hznb/projects/53a-white-swan-road-mount-roskill-pj-vj~6119554"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="img-box">
                <img
                  src="https://st.hzcdn.com/simgs/3a21d70b0e79a47e_8-0274/contemporary.jpg"
                  alt=""
                />
                <div class="transparent-box">
                  <div class="caption">
                    <p>Mount Roskill, Auckland</p>
                    <p class="opacity-low">53A White Swan Road.</p>
                  </div>
                </div>
              </div>
            </a>
          </Grid.Column>
          <Grid.Column>
            <a
              href="https://www.houzz.co.nz/hznb/projects/galway-street-pj-vj~6117224"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="img-box">
                <img
                  src="https://st.hzcdn.com/simgs/3a912e0d0e768d9d_8-7809/contemporary.jpg"
                  alt=""
                />
                <div class="transparent-box">
                  <div class="caption">
                    <p>Onehunga, Auckland</p>
                    <p class="opacity-low">Galway Street.</p>
                  </div>
                </div>
              </div>
            </a>
          </Grid.Column>
          <Grid.Column>
            <a
              href="https://www.houzz.co.nz/hznb/projects/lighter-quay-pj-vj~6117208"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="img-box">
                <img
                  src="https://st.hzcdn.com/simgs/0301b0d30e7683d0_8-5300/contemporary.jpg"
                  alt=""
                />
                <div class="transparent-box">
                  <div class="caption">
                    <p>Auckland CBD.</p>
                    <p class="opacity-low">Lighter Quay.</p>
                  </div>
                </div>
              </div>
            </a>
          </Grid.Column>
          <Grid.Column>
            <a
              href="https://www.houzz.co.nz/hznb/projects/kristy-harrison-horomia-road-pj-vj~6117212"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="img-box">
                <img
                  src="https://st.hzcdn.com/simgs/4601f6860e7686d4_8-6071/home-design.jpg"
                  alt=""
                />
                <div class="transparent-box">
                  <div class="caption">
                    <p>Rosehill, Papakura.</p>
                    <p class="opacity-low">Kristy Harrison Horimia Road.</p>
                  </div>
                </div>
              </div>
            </a>
          </Grid.Column>

          {/* <Grid.Column>
            <a
              href="https://www.houzz.co.nz/professionals/shutters-blinds-and-curtains/soho-blinds-pfvwnz-pf~943228419"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="img-box">
                <img src="https://picsum.photos/750/250?image=494" alt="" />
                <div class="transparent-box">
                  <div class="caption">
                    <p>More</p>
                    <p class="opacity-low">...</p>
                  </div>
                </div>
              </div>
            </a>
          </Grid.Column> */}
        </Grid.Row>
      </Grid>
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
      <div className="heading">OUR PROJECTS</div>
      {renderContent()}
      {/* <Responsive minWidth={Responsive.onlyComputer.minWidth}>
        {renderDesktop()}
      </Responsive> */}
    </div>
  );
};

export default OurProduct;
