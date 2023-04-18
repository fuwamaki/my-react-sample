import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";
import CommentIcon from "@mui/icons-material/Comment";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

export default function QuestionCard() {
  return (
    <Box sx={{ maxWidth: 300 }}>
      <Card variant="outlined">
        <CardContent sx={{ mb: -2 }}>
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

          <Grid container direction="row" justifyContent="space-between" sx={{ mt: 1 }}>
            <Grid item>
              <Typography paragraph color="text.secondary" variant="caption">
                あと16時間
              </Typography>
            </Grid>
            <Grid item>
              <Stack direction="row" spacing={0.4}>
                <Typography paragraph color="text.secondary" variant="caption">
                  55票
                </Typography>
                <Stack direction="row" spacing={0.4}>
                  <SvgIcon component={CommentIcon} color="action" sx={{ fontSize: 18, mt: 0.2 }} />
                  <Typography paragraph color="text.secondary" variant="caption">
                    24
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
