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
  return (
    <Box sx={{ maxWidth: 300 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="body2" sx={{ mb: 2 }}>
            仕事は出社と在宅、どちらの方が集中できる？
          </Typography>
          <Bar
            options={{
              indexAxis: "y" as const, // 横棒グラフにする
              responsive: true,
              aspectRatio: 1.25,
              layout: {
                padding: -24, // 左側の余白をなくす
              },
              plugins: {
                legend: {
                  display: false, // 凡例を非表示
                },
                title: {
                  display: false, // グラフタイトルを非表示
                },
                tooltip: {
                  enabled: false, // マウスオーバー時のツールチップを非表示
                },
              },
              scales: {
                x: {
                  grid: {
                    display: false, // 横軸のグリッド（縦線たち）を非表示
                  },
                  ticks: {
                    display: false, // 横軸のラベルを非表示
                  },
                  border: {
                    display: false, // 横軸の線を非表示
                  },
                },
                y: {
                  grid: {
                    display: false, // 縦軸のグリッド（横線たち）を非表示
                  },
                  border: {
                    display: false, // 縦軸の線を非表示
                  },
                  ticks: {
                    color: theme.palette.text.primary,
                    mirror: true, // 横棒の内側にラベルを表示
                    z: 1, // ラベルを横棒の手前に表示
                    padding: 8, // ラベルと横棒の間隔
                  },
                },
              },
            }}
            data={{
              labels,
              datasets: [
                {
                  label: "Dataset 1",
                  data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                  backgroundColor: theme.palette.primary.light,
                  barPercentage: 1, // 棒グラフの幅を100%にする
                  //   borderRadius: Number.MAX_VALUE, // 棒グラフの角を丸くする
                  borderRadius: 8, // 棒グラフの角を丸くする
                  borderSkipped: false, // 棒グラフの左端側も角を丸くする
                  barThickness: 30, // 棒グラフの太さを16pxにする
                },
              ],
            }}
          />
        </CardContent>
      </Card>
    </Box>
  );
}
