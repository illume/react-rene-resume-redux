import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import experiencesReducer from "../features/experiences/experiencesSlice";

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
