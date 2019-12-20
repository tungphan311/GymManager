import Highcharts from "highcharts";

export const OPTIONS = {
  chart: {
    zoomType: "xy"
  },
  credits: {
    enabled: false
  },
  title: {
    text: "Thống kê hội viên mới và doanh thu của phòng tập"
  },
  xAxis: [
    {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      crosshair: true
    }
  ],
  yAxis: [
    {
      // Primary yAxis
      labels: {
        format: "{value} người",
        style: {
          color: Highcharts.getOptions().colors[1]
        }
      },
      title: {
        text: "Hội viên mới",
        style: {
          color: Highcharts.getOptions().colors[1]
        }
      }
    },
    {
      // Secondary yAxis
      title: {
        text: "Số lượng gói tập được đăng ký",
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      labels: {
        format: "{value} gói",
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      opposite: true
    }
  ],
  tooltip: {
    shared: true
  },
  legend: {
    layout: "horizontal",
    align: "center"
  },
  series: [
    {
      name: "Hội viên mới",
      type: "column",
      yAxis: 1,
      data: [49, 71, 106, 129, 144, 176, 135, 148, 216, 194, 95, 54],
      tooltip: {
        valueSuffix: " người"
      }
    },
    {
      name: "Gói tập đăng ký",
      type: "column",
      yAxis: 1,
      data: [40, 70, 100, 120, 140, 170, 130, 140, 210, 190, 90, 50],
      tooltip: {
        valueSuffix: " gói"
      }
    },
    {
      name: "Doanh thu",
      type: "spline",
      data: [70, 69, 95, 145, 182, 215, 252, 265, 233, 183, 139, 96],
      tooltip: {
        valueSuffix: "M"
      }
    }
  ]
};
