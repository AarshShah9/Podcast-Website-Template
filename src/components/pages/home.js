import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div class="text-dark bg-white">
      <div class="row text-dark bg-white p-2 justify-content-center">
        <div class="col-12 col-md-8">
          <h2 class="h2 text-center my-4" id="bio-title">
            Suffering in Paradise
          </h2>
          <p class="text-justify">
            Suffering in Paradise is a podcast that aims to provide a unique
            perspective of the social dynamics of growing up in a westernized
            paradise by leveraging guests’ experiences, knowledge, and wisdom.
          </p>
          <h4 class="h4 text-center">Mission and Vision</h4>
          <p class="text-justify">
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
