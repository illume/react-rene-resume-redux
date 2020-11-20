import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Experience {
  title: string;
  body: string;
  tags: string[];
}

export interface ExperiencesState {
  all: Experience[];
}

export const initialState: ExperiencesState = {
  // experiences: [{title: "asdf", body: "asdf", tags: ['asdf']}],
  all: [],
};

export const experiencesSlice = createSlice({
  name: "experiences",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Experience[]>) => {
      state.all.push(...action.payload);
    },
  },
});

export const { add } = experiencesSlice.actions;
export const selectExperiences = (state: RootState) => state.experiences.all;
export default experiencesSlice.reducer;
