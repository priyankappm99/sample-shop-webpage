import React from "react";
import { Card, Box, Typography } from "@mui/material";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { DowncardStyles, DownchartContainerStyles, DowntypographyStyles, NoData } from "../../content/DashBoard/style";

const BusinessSegmentGraph: React.FC = () => {
  // Dummy JSON data for the chart
  const dummyData = [
    { machine_running_date: "Sheet metal", runtime: 5 },
    { machine_running_date: "Shop Floor", runtime: 40 },
    { machine_running_date: "Sheet metal", runtime: 40 },
    { machine_running_date: "Sheet metal", runtime: 8 },
    { machine_running_date: "Shop Floor", runtime: 15 },
    { machine_running_date: "Sheet metal", runtime: 55 },
    { machine_running_date: "Shop Floor", runtime: 35 },
    { machine_running_date: "Sheet metal", runtime: 100 },
  ];

  const uniqueDates = dummyData.map((item) => item.machine_running_date);
  const runtimeData = dummyData.map((item) => item.runtime);

  const options: Highcharts.Options = {
    chart: {
      type: "column",
      height: 300,
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: uniqueDates,
    },
    yAxis: {
      title: {
        text: "Runtime",
      },
      min: 0, // Set minimum value of the y-axis
      max: 100, // Set maximum value of the y-axis
      tickInterval: 20, // Set the interval between ticks
      gridLineWidth: 1, // Set the width of the grid lines
      gridLineDashStyle: "Dash", // Set the style of the grid lines to dashed
      lineWidth: 0.2, // Set the width of the y-axis line
      minorGridLineDashStyle:"Dash"
    },
    series: [
      {
        type: "column",
        name: "Runtime",
        data: runtimeData,
        color: "#0673c3",
      },
    ],
    plotOptions: {
      column: {
        groupPadding: 0.1,
        borderRadius: 4,
        pointWidth: 30, // Adjust the thickness of the bars
      },
      series: {
        dataLabels: {
          enabled: true,
        },
        states: {
          hover: {
            brightness: 0,
          },
          inactive: {
            opacity: 1,
          },
        },
      },
    },
  };
  const showChart = dummyData.length > 0;

  return (
    <Card elevation={0} sx={DowncardStyles}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          p: 1,
        }}
      >
        <Typography component={"div"} sx={DowntypographyStyles}>
          Business Segment
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#0673c3",
              padding: "6px",
              borderRadius: "4px",
            }}
          ></div>
          <div style={{ marginLeft: "8px" }}>Department</div>
        </div>
      </Box>

      <Box sx={DownchartContainerStyles}>
        {showChart ? (
          <HighchartsReact highcharts={Highcharts} options={options} />
        ) : (
          <Typography sx={NoData}>No data Available..</Typography>
        )}
      </Box>
    </Card>
  );
};

export default BusinessSegmentGraph;
