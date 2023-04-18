import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { Typography, useTheme } from "@mui/material";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function AnswerCard() {
  const theme = useTheme();
  const labels = ["出社", "在宅", "変わらない", "比べた経験がない"];
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: theme.palette.primary.light,
      },
    ],
  };
  const options = {
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
          display: false,
        },
      },
      y: {
        ticks: {
          color: theme.palette.text.primary,
          mirror: true, // 横棒の内側にラベルを表示
          z: 1, // ラベルを横棒の手前に表示
        },
      },
    },
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
