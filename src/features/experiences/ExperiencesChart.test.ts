import { experiencesToSeries } from "./ExperiencesChart";

describe("experiencesToSeries", () => {
  it("should return series data for the given tags and experiences data", () => {
    // Note the years are in tags like "2020", and "2019".
    const experiences = [
      {
        title: "Front end developer at Example Corp",
        body: "During my time at Example Corp, I did Y using Z.",
        tags: ["JavaScript", "TypeScript", "HighCharts", "2020"],
      },
      {
        title: "Back end developer at Acme Pty Ltd.",
        body: "During my time at Acme Pty Ltd., I did Y using Z.",
        tags: [
          "Node.js",
          "PostgreSQL",
          "JavaScript",
          "Express",
          "2020",
          "2019",
        ],
      },
      {
        title: "Fullstack developer at Example Solutions Corp.",
        body: "During my time at Example Solutions Corp, I did Y using Z.",
        tags: ["Python", "PostgreSQL", "pylint", "React", "2019"],
      },
    ];

    // We are only after these two tags in our output.
    const tags = ["JavaScript", "TypeScript"];
    const expectedSeries = [
      {
        name: "JavaScript",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
        type: "line",
      },
      {
        name: "TypeScript",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        type: "line",
      },
    ];
    const startYear = 2010;
    const currentYear = 2020;

    const result = experiencesToSeries({
      experiences,
      tags,
      startYear,
      currentYear,
    });
    expect(result).toEqual(expectedSeries);

    const result2000 = experiencesToSeries({
      experiences,
      tags,
      startYear: 2000,
      currentYear,
    });
    const expectedSeries2000 = [
      {
        name: "JavaScript",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
        type: "line",
      },
      {
        name: "TypeScript",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        type: "line",
      },
    ];

    expect(result2000).toEqual(expectedSeries2000);
  });
});
