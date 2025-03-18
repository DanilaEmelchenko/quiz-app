import { Box, Button, Container, Paper, Typography } from "@mui/material";
import { Link } from "react-router";
import { Path } from "../../routers";

export const StartPage = () => {
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Paper elevation={3} sx={{ padding: 4, textAlign: "center" }}>
          <Typography variant="h4" gutterBottom>
            Добро пожаловать в тестирование!
          </Typography>
          <Typography variant="body1" paragraph>
            Выберите правильные ответы на вопросы. Удачи!
          </Typography>
          <Link to={`${Path.Form}/1`}>
            <Button variant="contained" color="primary" size="large">
              Начать тест
            </Button>
          </Link>
        </Paper>
      </Box>
    </Container>
  );
};
