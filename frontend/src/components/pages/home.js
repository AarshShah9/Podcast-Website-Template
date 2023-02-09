import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className="text-dark bg-white container">
      <div className="row text-dark bg-white p-2 justify-content-center">
        <div className="col-12 col-md-6">
          <h2 className="h2 text-center my-4" id="bio-title">
            Suffering in Paradise
          </h2>
          <p className="text-justify text-center">
            Suffering in Paradise is a podcast that aims to provide a unique
            perspective of the social dynamics of growing up in a westernized
            paradise by leveraging guests’ experiences, knowledge, and wisdom.
          </p>
          <h4 className="h4 text-center">Mission and Vision</h4>
          <p className="text-justify text-center">
            The vision is to provide an opportunity for our audience to enrich
            their understanding of the world they live in by connecting with
            modern-day leaders and changemakers that utilize perspective as a
            driver in their daily lives.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
