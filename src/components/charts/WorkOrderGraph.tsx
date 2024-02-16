import React from "react";
import { Card, Box, Typography } from "@mui/material";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { DowncardStyles, DownchartContainerStyles, DowntypographyStyles, NoData } from "../../content/DashBoard/style";

const WorkOrderGraph: React.FC = () => {
  // Dummy JSON data for the chart
  const dummyData = [
    { machine_running_date: "PWA", yellow: 10, darkblue: 20, gray: 30, green: 40, skyblue: 50 },
    { machine_running_date: "HW", yellow: 15, darkblue: 25, gray: 35, green: 45, skyblue: 55 },
    { machine_running_date: "ISRO", yellow: 20, darkblue: 30, gray: 40, green: 50, skyblue: 60 },
    { machine_running_date: "VSSC", yellow: 25, darkblue: 35, gray: 45, green: 55, skyblue: 65 },
    { machine_running_date: "ATC", yellow: 30, darkblue: 40, gray: 50, green: 60, skyblue: 70 },
    { machine_running_date: "DRDO", yellow: 35, darkblue: 45, gray: 55, green: 65, skyblue: 75 },
    { machine_running_date: "Boeing", yellow: 40, darkblue: 50, gray: 60, green: 70, skyblue: 80 },
    { machine_running_date: "HAL", yellow: 45, darkblue: 55, gray: 65, green: 75, skyblue: 85 },
    { machine_running_date: "ATC", yellow: 30, darkblue: 40, gray: 50, green: 60, skyblue: 70 },
    { machine_running_date: "DRDO", yellow: 35, darkblue: 45, gray: 55, green: 65, skyblue: 75 },
    { machine_running_date: "Boeing", yellow: 40, darkblue: 50, gray: 60, green: 70, skyblue: 80 },
    { machine_running_date: "HAL", yellow: 45, darkblue: 55, gray: 65, green: 75, skyblue: 85 },
  ];

  const uniqueDates = dummyData.map((item) => item.machine_running_date);
  const yellowData = dummyData.map((item) => item.yellow);
  const darkblueData = dummyData.map((item) => item.darkblue);
  const grayData = dummyData.map((item) => item.gray);
  const greenData = dummyData.map((item) => item.green);
  const skyblueData = dummyData.map((item) => item.skyblue);

  const options: Highcharts.Options = {
    chart: {
      type: "column",
      height: 300, // Set chart height
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: uniqueDates,
      labels: {
        enabled: true, // Show x-axis labels
      },
    },
    yAxis: {
      title: {
        text: "Runtime",
      },
      min: 0, // Set minimum value of the y-axis
      max: 150, // Set maximum value of the y-axis
      tickInterval: 25, // Set the interval between ticks
      gridLineWidth: 1, // Set the width of the grid lines
      gridLineDashStyle: "Dash", // Set the style of the grid lines to dashed
    },
    series: [
      {
        type: "column",
        name: "FAD",
        data: skyblueData,
        color: "#83aad4", // Sky Blue
      },
      {
        type: "column",
        name: "Delta FAD",
        data: greenData,
        color: "#339e33", // Green
      },
      {
        type: "column",
        name: "In Queue",
        data: grayData,
        color: "#808080", // Gray
      },
      {
        type: "column",
        name: "Sheet Metal",
        data: darkblueData,
        color: "#0673c3", // Dark Blue
      },
      {
        type: "column",
        name: "Rework",
        data: yellowData,
        color: "#fecd1a", // Yellow
      },
    ],
    plotOptions: {
      column: {
        stacking: "normal",
        groupPadding: 0, // Remove the gap between columns
        borderRadius: 4,
        pointWidth: 30, // Adjust the thickness of the bars
      },
    },
    legend: {
      enabled: true, // Show legends
      align: "center",
      verticalAlign: "bottom",
      itemStyle: {
        fontWeight: "normal",
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
          project-wise work order
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

export default WorkOrderGraph;
