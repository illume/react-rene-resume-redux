import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

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
      pointStart: 2010,
    },
  },

  credits: {
    enabled: false,
  },

  series: [
    {
      name: "JavaScript",
      data: [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2],
      type: "line",
    },
    {
      name: "TypeScript",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2],
      type: "line",
    },
    {
      name: "Redux",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2],
      type: "line",
    },
    {
      name: "Webpack",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2],
      type: "line",
    },
    {
      name: "Jest",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2],
      type: "line",
    },
  ],

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

export const PureExperiencesProps = {};

export const PureExperiencesChart = (props: HighchartsReact.Props) => {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} {...props} />
    </div>
  );
};
