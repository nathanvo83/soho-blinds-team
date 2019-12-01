import React from "react";
import "./Maintenance.css";

const Maintenance = () => {
  return (
    <div class="m-outer">
      <div class="m-middle">
        <div class="m-inner">
          <h1 className="m-h1">We&rsquo;ll be back soon!</h1>
          <div>
            <p>
              Sorry for the inconvenience but we&rsquo;re performing some
              maintenance at the moment. If you need to you can always{" "}
              <a className="m-a" href="mailto:peter@sohoblinds.co.nz">
                contact us
              </a>
              , otherwise we&rsquo;ll be back online shortly!
            </p>
            <p>&mdash; The Team</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
