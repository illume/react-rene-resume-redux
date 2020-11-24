import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Testimonial {
  name: string;
  quote: string;
}

export interface TestimonialsState {
  all: Testimonial[];
}

export const initialState: TestimonialsState = {
  all: [],
};

export const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {
    addTestimonials: (state, action: PayloadAction<Testimonial[]>) => {
      state.all.push(...action.payload);
    },
  },
});

export const { addTestimonials } = testimonialsSlice.actions;
export const selectTestimonials = (state: {
  testimonials: TestimonialsState;
}) => state.testimonials.all;

export default testimonialsSlice.reducer;
