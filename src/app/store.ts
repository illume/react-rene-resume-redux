import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import experiencesReducer, {
  add,
  addTags,
  toggleFilterTag,
  Experience,
} from "../features/experiences/experiencesSlice";

export const store = configureStore({
  reducer: {
    experiences: experiencesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

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
] as Experience[];

store.dispatch(add(experiences));
store.dispatch(addTags(["JavaScript", "TypeScript"]));
store.dispatch(toggleFilterTag("JavaScript"));
