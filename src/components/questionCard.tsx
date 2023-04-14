import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function QuestionCard() {
  return (
    <Box sx={{ maxWidth: 300 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography variant="body2" sx={{ mb: 2 }}>
              仕事は出社と在宅、どちらの方が集中できる？
            </Typography>
            <Button variant="outlined" fullWidth>
              出社
            </Button>
            <Button variant="outlined" fullWidth sx={{ mt: 1 }}>
              在宅
            </Button>
            <Button variant="outlined" fullWidth sx={{ mt: 1 }}>
              変わらない
            </Button>
            <Button variant="outlined" fullWidth sx={{ mt: 1 }}>
              比べた経験がない
            </Button>
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
}
