import React from "react";

import PageLayout from "./components/PageLayout/PageLayout";
import Experiences from "./features/experiences/Experiences";
import ExperiencesChart from "./features/experiences/ExperiencesChart";
import ExperiencesFilter from "./features/experiences/ExperiencesFilter";

function App() {
  return (
    <PageLayout>
      <ExperiencesChart />
      <p>testimonials</p>
      <React.Fragment>
        <ExperiencesFilter />
        <Experiences />
      </React.Fragment>
    </PageLayout>
  );
}

export default App;
