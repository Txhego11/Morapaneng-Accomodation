const ctx1 = document.getElementById("chart-1").getContext("2d");
const myChart = new Chart(ctx1, {
  type: "polarArea",
  data: {
    labels: ["Town Res", "Ka-Magugu Res", "Ka-Nyamazane Res","Mattafin Res","Whiteriver","Nkodin Res"],
    datasets: [
      {
        label:"Weekly Bookings",
        data: [5, 1, 2, 0, 0, 1],
        backgroundColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(144, 206, 86, 1)",
          "rgba(25, 152, 16, 1)",
          "rgba(125, 100, 132, 1)",
          "rgba(255, 206, 86, 1)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});

const ctx2 = document.getElementById("chart-2").getContext("2d");
const myChart2 = new Chart(ctx2, {
  type: "bar",
  data: {
    labels: ["Town Res", "Ka-Magugu Res", "Ka-Nyamazane Res","Mattafin Res","Whiteriver","Nkodin Res"],
    datasets: [
      {
        label: "Weekly Bookings",
        data: [5, 1, 2, 0, 0 , 1],
        backgroundColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(144, 206, 86, 1)",
          "rgba(25, 152, 16, 1)",
          "rgba(125, 100, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});
const ctx3 = document.getElementById("chart-3").getContext("2d");
const myChart3 = new Chart(ctx3, {
  type: "polarArea",
  data: {
    labels: ["Town Res", "Ka-Magugu Res", "Ka-Nyamazane Res","Mattafin Res","Whiteriver","Nkodin Res"],
    datasets: [
      {
        label: "Monthly Bookings",
        data: [33, 4, 3, 1, 0, 1],
        backgroundColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(144, 206, 86, 1)",
          "rgba(25, 152, 16, 1)",
          "rgba(125, 100, 132, 1)",
          "rgba(255, 206, 86, 1)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});

const ctx4 = document.getElementById("chart-4").getContext("2d");
const myChart4 = new Chart(ctx4, {
  type: "bar",
  data: {
    labels: ["Town Res", "Ka-Magugu Res", "Ka-Nyamazane Res","Mattafin Res","Whiteriver","Nkodin Res"],
    datasets: [
      {
        label: "Monthly Bookings",
        data: [33, 4, 3, 1, 0, 1],
        backgroundColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(144, 206, 86, 1)",
          "rgba(25, 152, 16, 1)",
          "rgba(125, 100, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});

