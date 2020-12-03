import reducer, {
  initialState,
  add,
  addTags,
  selectExperiences,
  selectFilteredExperiences,
  selectTags,
  selectFilteredTags,
  toggleFilterTag,
  Experience,
} from "./experiencesSlice";

describe("experiences slice", () => {
  describe("reducer, actions and selectors", () => {
    it("should return the initial state on first run", () => {
      const result = reducer(undefined, { type: "" });
      expect(result).toEqual(initialState);
    });

    it("should add an experience", () => {
      const experience = {
        title: "Front end developer",
        subtitle: "Example Corp",
        image: "",
        body: "During my time at Example Corp, I did Y using Z.",
        tags: ["JavaScript", "TypeScript"],
      } as Experience;
      const nextState = reducer(initialState, add([experience]));
      expect(selectExperiences({ experiences: nextState })).toEqual([
        experience,
      ]);
    });
    it("should add tags", () => {
      const tags = ["JavaScript", "TypeScript"];
      const nextState = reducer(initialState, addTags(tags));
      expect(selectTags({ experiences: nextState })).toEqual(tags);
    });

    it("should filter out an experience", () => {
      const experiences = [
        {
          title: "Front end developer",
          subtitle: "Example Corp",
          image: "",
          body: "During my time at Example Corp, I did Y using Z.",
          tags: ["JavaScript", "TypeScript"],
        },
        {
          title: "Some title 2",
          subtitle: "ABadExample Corp",
          image: "",
          body: "some body",
          tags: ["TypeScript"],
        },
      ];
      const tags = ["JavaScript", "TypeScript"];
      let nextState = reducer(initialState, add(experiences));
      nextState = reducer(nextState, addTags(tags));
      nextState = reducer(nextState, toggleFilterTag("JavaScript"));
      expect(selectFilteredTags({ experiences: nextState })).toEqual([
        "JavaScript",
      ]);
      const jsExperience = [experiences[0]];
      expect(selectFilteredExperiences({ experiences: nextState })).toEqual(
        jsExperience
      );

      nextState = reducer(nextState, toggleFilterTag("JavaScript"));
      expect(selectFilteredTags({ experiences: nextState })).toEqual([]);
      expect(selectFilteredExperiences({ experiences: nextState })).toEqual(
        experiences
      );
    });
  });
});
