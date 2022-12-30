import React from "react";
import "./team.css";
// import headshotAarsh from "../../src/images/headshotAarsh.jpg";

function Team() {
  return (
    // <div className="text-dark bg-white" style="border: 100px; padding: 15px;">
    <div className="text-dark bg-white" style={{ padding: "20px" }}>
      <h2 className="h2 text-center">The Team</h2>
      <div className="row text-center">
        <div className="col-12 col-md-4">
          <h5 className="h5">Aarsh Shah</h5>
          <h6 className="h6">Host</h6>
          <img
            className="img-thumbnail"
            src={"./assets/headshotAarsh.jpg"}
            alt="Aarsh Headshot"
            width="200px"
            height="auto"
          />
          <p className="team-info text-justify">
            Originally from Regina, SK, Aarsh has always found himself
            passionate in the realm of helping others and bringing upon the
            conversations of gratitude and privilege. He then leverges this
            perspepective to fundraise for the homeless or highlight and bring
            awarness to the struggles that people face. Founding this podcast
            has fulfilled a desire within him to showcase to the world how
            perspepective is they key to a content and happy life.
          </p>
        </div>
        <div className="col-12 col-md-4">
          <h5 className="h5">Declan Sander</h5>
          <h6 className="h6">Co-Host</h6>
          <img
            className="img-thumbnail"
            // src={headshotDeclan}
            alt="Declan Headshot"
            width="200px"
            height="auto"
          />
          <p className="team-info text-justify">
            Declan is from Lethbridge, Alberta, and is currently studying at the
            University of Calgary as a Richard and Lois Haskayne Legacy Scholar.
            Declan is a member of the Big Brothers Big Sisters National Youth
            Mentoring Advisory Council, where he works with a team of youth to
            ensure mentorship is delivered in the most productive way possible
            throughout Canada. Aside from his community work, Declan loves
            sports and games, particularly volleyball, badminton, and chess.{" "}
          </p>
        </div>
        <div className="col-12 col-md-4">
          <h5 className="h5">Jared Myers</h5>
          <h6 className="h6">Media Team</h6>
          <img
            className="img-thumbnail"
            src="assets/jared_pic.PNG"
            alt="Jared Headshot"
            width="200px"
            height="auto"
          ></img>
          <p className="team-info text-justify">
            Jared is from Weyburn, Saskatchewan, and is currently studying at
            the University of Calgary. Jared is passionate about social media,
            influencer marketing, and creating quality content that he can use
            to bring awareness to the issues we all face today. Being a part of
            this podcast was Jared’s opportunity to showcase his knowledge, and
            fulfill his goal of helping others in the most memorable way
            possible. During his spare time, Jared enjoys playing guitar,
            hanging with friends, and racing competitive motocross.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
