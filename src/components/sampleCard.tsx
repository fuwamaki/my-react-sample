import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

export default function SampleCard() {
  const labels = ["国語", "算数", "理科", "社会"];
  return (
    <Box sx={{ maxWidth: 300 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5">Chart.js Bar</Typography>
          <Bar
            options={{
              indexAxis: "y" as const,
              responsive: true,
              aspectRatio: 1.25,
              plugins: {
                title: {
                  display: true,
                  text: "好きな科目は？",
                },
                datalabels: {
                  anchor: "start" as const,
                  align: "end" as const,
                  offset: 182,
                },
              },
            }}
            data={{
              labels,
              datasets: [
                {
                  label: "科目",
                  data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                  backgroundColor: "lightBlue",
                },
              ],
            }}
          />
        </CardContent>
      </Card>
    </Box>
  );
}
