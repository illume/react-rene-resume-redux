import React from "react";
import Highcharts from "highcharts";
import { useSelector } from "react-redux";
import HighchartsReact from "highcharts-react-official";
import { selectExperiences, selectTags, Experience } from "./experiencesSlice";

export interface Experiences {
  experiences: Experience[];
  tags: string[];
  startYear: number;
  currentYear: number;
}

interface Dictionary<T> {
  [Key: string]: T;
}

export interface Series {
  name: string;
  data: number[];
  type: string;
}

export function experiencesToSeries({
  experiences,
  tags,
  startYear,
  currentYear,
}: Experiences) {
  if (tags === undefined) {
    tags = [];
  }
  const tagYear: Dictionary<Dictionary<number>> = {};
  const seriesData = tags.map((tag) => ({
    name: tag,
    data: [],
    type: "line",
  })) as Series[];

  // Go through each year from the startYear to the currentYear
  // Count the tags in each of the experiences.

  for (let year = startYear; year < currentYear + 1; year++) {
    experiences.forEach((experience) => {
      if (experience.tags && experience.tags.includes(year.toString())) {
        tags.forEach((tag) => {
          if (!(tag in tagYear)) {
            tagYear[tag] = {};
          }
          if (!(year.toString() in tagYear[tag])) {
            tagYear[tag][year.toString()] = 0;
          }
          if (experience.tags.includes(tag)) {
            tagYear[tag][year.toString()]++;
          }
        });
      }
    });

    seriesData.forEach((series) => {
      let count =
        series.name in tagYear && year.toString() in tagYear[series.name]
          ? tagYear[series.name][year.toString()]
          : 0;
      series.data.push(count);
    });
  }

  return seriesData;
}

const options: Highcharts.Options = {
  title: {
    text: "Experiences with different technology",
  },

  subtitle: {
    text: "",
  },

  yAxis: {
    title: {
      text: "Number of Experiences",
    },
  },

  xAxis: {
    accessibility: {
      rangeDescription: "Range: 2010 to 2020",
    },
  },

  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
      pointStart: 2000,
    },
  },

  credits: {
    enabled: false,
  },

  series: [],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom",
          },
        },
      },
    ],
  },
};

export interface PureExperiencesChartProps {
  experiences: Experience[];
  tags: string[];
}

export const PureExperiencesChart = ({
  experiences,
  tags,
}: PureExperiencesChartProps) => {
  const opts = {
    ...options,
    series: experiences
      ? experiencesToSeries({
          experiences,
          tags,
          startYear: 2000,
          currentYear: 2020,
        })
      : [],
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={opts}
      containerProps={{ style: { height: "100%" } }}
    />
  );
};

export default function ExperiencesChart() {
  return (
    <PureExperiencesChart
      experiences={useSelector(selectExperiences)}
      tags={useSelector(selectTags)}
    />
  );
}
