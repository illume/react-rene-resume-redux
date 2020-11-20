import reducer, {
  initialState,
  add,
  selectExperiences,
  Experience,
} from "./experiencesSlice";
import { RootState } from "../../app/store";

describe("experiences slice", () => {
  describe("reducer, actions and selectors", () => {
    it("should return the initial state on first run", () => {
      const result = reducer(undefined, { type: "" });
      expect(result).toEqual(initialState);
    });

    it("should add an experience", () => {
      const experience = {
        title: "Front end developer at Example Corp",
        body: "During my time at Example Corp, I did Y using Z.",
        tags: ["JavaScript", "TypeScript"],
      } as Experience;
      const nextState = reducer(initialState, add([experience]));
      const rootState = { experiences: nextState } as RootState;
      expect(selectExperiences(rootState)).toEqual([experience]);
    });
  });
});
