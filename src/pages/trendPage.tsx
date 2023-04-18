import { Stack } from "@mui/material";
import QuestionCard from "components/questionCard";

export default function TrendPage() {
  return (
    <div>
      <h2>Trend</h2>
      <Stack direction="row" spacing={2}>
        <QuestionCard />
        <QuestionCard />
      </Stack>
    </div>
  );
}
