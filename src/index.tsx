import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

import {
  add,
  addTags,
  toggleFilterTag,
} from "./features/experiences/experiencesSlice";

import { addTestimonials } from "./features/testimonials/testimonialsSlice";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
// serviceWorker.register();

const fetchData = 1;
if (fetchData) {
  fetch("/data.json")
    .then((response) => response.json())
    .then((data) => {
      store.dispatch(addTags(data.tags));
      store.dispatch(add(data.experiences));
      store.dispatch(addTestimonials(data.testimonials));
      store.dispatch(toggleFilterTag(data.tags[0]));
      store.dispatch(toggleFilterTag(data.tags[0]));
    });
} else {
  const experiences = [
    {
      title: "Front end developer at Example Corp",
      body: "During my time at Example Corp, I did Y using Z.",
      tags: ["JavaScript", "TypeScript", "HighCharts", "2020"],
    },
    {
      title: "Back end developer at Acme Pty Ltd.",
      body: "During my time at Acme Pty Ltd., I did Y using Z.",
      tags: ["Node.js", "PostgreSQL", "Express", "2020", "2019"],
    },
    {
      title: "Fullstack developer at Example Solutions Corp.",
      body: "During my time at Example Solutions Corp, I did Y using Z.",
      tags: ["Python", "PostgreSQL", "pylint", "React", "2019"],
    },
  ];

  store.dispatch(add(experiences));
  store.dispatch(addTags(["JavaScript", "TypeScript"]));
  store.dispatch(toggleFilterTag("JavaScript"));

  const testimonials = [
    {
      name: "Jane",
      quote:
        "A very loremipsum developer. Ut blandit ipsum massa, nec semper turpis accumsan sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris quam sapien, consectetur ac massa a, hendrerit volutpat nisi. Ut placerat felis nulla.",
    },
    {
      name: "Blenadsd Asdfgwe",
      quote:
        "A very loremipsum developer. Ut blandit ipsum massa, nec semper turpis accumsan sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris quam sapien, consectetur ac massa a, hendrerit volutpat nisi. Ut placerat felis nulla.",
    },
    {
      name: "Qweryty Zxcvb",
      quote:
        "A very loremipsum developer. Ut blandit ipsum massa, nec semper turpis accumsan sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris quam sapien, consectetur ac massa a, hendrerit volutpat nisi. Ut placerat felis nulla.",
    },
  ];
  store.dispatch(addTestimonials(testimonials));
}
