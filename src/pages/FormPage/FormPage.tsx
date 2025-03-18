import {
  Box,
  Button,
  Container,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { useState } from "react";

export const FormPage = () => {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        {/* Таймер */}
        <Typography variant="h6" color="error">
          Оставшееся время: 00:30
        </Typography>

        {/* Вопрос */}
        <Paper elevation={3} sx={{ padding: 4, mt: 3, width: "100%" }}>
          <Typography variant="h5" gutterBottom>
            Вопрос 1: Какой цвет небо?
          </Typography>

          {/* Варианты ответов */}
          <RadioGroup
            value={selectedAnswer}
            onChange={(e) => setSelectedAnswer(e.target.value)}
          >
            <FormControlLabel value="red" control={<Radio />} label="Красный" />
            <FormControlLabel
              value="yellow"
              control={<Radio />}
              label="Жёлтый"
            />
            <FormControlLabel value="blue" control={<Radio />} label="Синий" />
            <FormControlLabel
              value="green"
              control={<Radio />}
              label="Зелёный"
            />
          </RadioGroup>
        </Paper>

        {/* Кнопка "Следующий вопрос" */}
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          fullWidth
          disabled={!selectedAnswer} // Отключено, пока не выбран ответ
        >
          Следующий вопрос
        </Button>
      </Box>
    </Container>
  );
};
