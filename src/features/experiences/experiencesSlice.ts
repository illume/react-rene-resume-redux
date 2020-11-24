import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  intro: string;
}

export const initialState: ExperiencesState = {
  all: [],
  filteredExperiences: [],
  tags: [],
  filteredTags: [],
  intro: "",
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
    addIntro: (state, action: PayloadAction<string>) => {
      state.intro = action.payload;
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

export const {
  add,
  addTags,
  toggleFilterTag,
  addIntro,
} = experiencesSlice.actions;
export const selectExperiences = (state: { experiences: ExperiencesState }) =>
  state.experiences.all;
export const selectExperiencesIntro = (state: {
  experiences: ExperiencesState;
}) => state.experiences.intro;
export const selectFilteredExperiences = (state: {
  experiences: ExperiencesState;
}) => state.experiences.filteredExperiences;
export const selectTags = (state: { experiences: ExperiencesState }) =>
  state.experiences.tags;
export const selectFilteredTags = (state: { experiences: ExperiencesState }) =>
  state.experiences.filteredTags;

export default experiencesSlice.reducer;
