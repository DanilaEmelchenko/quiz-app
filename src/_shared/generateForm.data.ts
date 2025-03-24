import { IGenerateForm } from "./interfaces";

export const generateForm = (): IGenerateForm => {
  return {
    timer: {
      enabled: true,
      timerSecond: 60,
    },
    pages: [
      {
        id: 1,
        questionNumber: "Вопрос 1",
        title: "Какой цвет небо?",
        fields: [
          {
            id: "color_sky",
            radioParams: {
              items: [
                {
                  id: "red_color",
                  content: "Красный",
                },
                {
                  id: "yellow_color",
                  content: "Желтый",
                },
                {
                  id: "blue_color",
                  content: "Синий",
                },
                {
                  id: "green_color",
                  content: "Зеленый",
                },
              ],
            },
          },
        ],
      },
      {
        id: 2,
        questionNumber: "Вопрос 2",
        title: "Сколько дней в неделе?",
        fields: [
          {
            id: "days_week",
            inputParams: { placeholder: "Введите число" },
          },
        ],
      },
      {
        id: 3,
        questionNumber: "Вопрос 3",
        title: "Столица России?",
        fields: [
          {
            id: "capital_of_russia",
            checkboxParams: {
              items: [
                { id: "moscow", content: "Москва" },
                { id: "saint_petersburg", content: "Санкт-Петербург" },
                { id: "kazan", content: "Казань" },
                { id: "krasnodar", content: "Краснодар" },
              ],
            },
          },
        ],
      },
      {
        id: 4,
        questionNumber: "Вопрос 4",
        title: "Что вам больше всего запомнилось из последнего путешествия?",
        fields: [
          {
            id: "travel_experience",
            textareaParams: {
              placeholder: "Введите ваш ответ",
            },
          },
        ],
      },
    ],
  };
};
