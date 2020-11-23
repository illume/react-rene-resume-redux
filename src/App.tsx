import React from "react";

import PageLayout from "./components/PageLayout/PageLayout";
import Experiences from "./features/experiences/Experiences";
import ExperiencesChart from "./features/experiences/ExperiencesChart";

function App() {
  return (
    <PageLayout>
      <ExperiencesChart />
      <p>b</p>
      <Experiences />
    </PageLayout>
  );
}

export default App;
