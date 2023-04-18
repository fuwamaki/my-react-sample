import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { Typography, useTheme } from "@mui/material";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  indexAxis: "y" as const,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "red",
        showLabelBackdrop: true,
      },
    },
    y: {
      ticks: {
        color: "red",
      },
    },
  },
  //   scales: {
  //     x: {
  //
  //     },
  //   },
};

const labels = ["出社", "在宅", "変わらない", "比べた経験がない"];

export default function AnswerCard() {
  const theme = useTheme();
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: theme.palette.primary.main,
      },
    ],
  };
  return (
    <Box sx={{ maxWidth: 300 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="body2" sx={{ mb: 2 }}>
            仕事は出社と在宅、どちらの方が集中できる？
          </Typography>
          <Bar options={options} data={data} />
        </CardContent>
      </Card>
    </Box>
  );
}
