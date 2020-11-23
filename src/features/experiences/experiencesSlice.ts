import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Experience {
  title: string;
  body: string;
  tags: string[];
}

export interface ExperiencesState {
  all: Experience[];
  filteredExperiences: Experience[];
  tags: string[];
  filteredTags: string[];
}

export const initialState: ExperiencesState = {
  all: [],
  filteredExperiences: [],
  tags: [],
  filteredTags: [],
};

export const experiencesSlice = createSlice({
  name: "experiences",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Experience[]>) => {
      state.all.push(...action.payload);
    },
    addTags: (state, action: PayloadAction<string[]>) => {
      state.tags.push(...action.payload);
    },
    toggleFilterTag: (state, action: PayloadAction<string>) => {
      const tag = action.payload;
      if (state.filteredTags.includes(tag)) {
        state.filteredTags.splice(state.filteredTags.indexOf(tag), 1);
      } else {
        state.filteredTags.push(tag);
      }
      if (!state.filteredTags.length) {
        state.filteredExperiences = [...state.all];
      } else {
        state.filteredExperiences = state.all.filter((item) =>
          item.tags.some((element) => state.filteredTags.includes(element))
        );
      }
    },
  },
});

export const { add, addTags, toggleFilterTag } = experiencesSlice.actions;
export const selectExperiences = (state: RootState) => state.experiences.all;
export const selectFilteredExperiences = (state: RootState) =>
  state.experiences.filteredExperiences;
export const selectTags = (state: RootState) => state.experiences.tags;
export const selectFilteredTags = (state: RootState) =>
  state.experiences.filteredTags;

export default experiencesSlice.reducer;
