import React from "react";

import PageLayout from "./components/PageLayout/PageLayout";
import Experiences from "./features/experiences/Experiences";
import ExperiencesChart from "./features/experiences/ExperiencesChart";
import ExperiencesFilter from "./features/experiences/ExperiencesFilter";
import ExperiencesIntro from "./features/experiences/ExperiencesIntro";
import Testimonials from "./features/testimonials/Testimonials";

function App() {
  return (
    <PageLayout>
      <ExperiencesIntro />
      <Testimonials />
      <ExperiencesChart />
      <p>Word cloud</p>
      <React.Fragment>
        <ExperiencesFilter />
        <Experiences />
      </React.Fragment>
    </PageLayout>
  );
}

export default App;
