import React from "react";

import Hero from "../components/Hero";
import OurStory from "../components/OurStory";
import MissionAndValues from "../components/MissionAndValues";
import MeetTheTeam from "../components/MeetTheTeam";
import WhatSetsUsApart from "../components/WhatSetsUsApart";
import Testimonials from "../components/Testimonials";
import ContactCTA from "../components/ContactCTA";

const AboutUs = () => {
  return (
    <div className="">
      <Hero />
      <OurStory />
      <MissionAndValues />
      <MeetTheTeam />
      <WhatSetsUsApart />
      <Testimonials />
      <ContactCTA />
      </div>
  );
};

export default AboutUs;
