import { Stack } from "@mui/material";
import AnswerCard from "components/answerCard";
import QuestionCard from "components/questionCard";
import SampleCard from "components/sampleCard";

export default function TrendPage() {
  return (
    <div>
      <h2>Trend</h2>
      <Stack direction="row" spacing={2}>
        <QuestionCard />
        <AnswerCard />
        <SampleCard />
      </Stack>
    </div>
  );
}
