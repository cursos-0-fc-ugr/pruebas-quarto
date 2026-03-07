const json = {
  "title": "Números complejos",
  "description": "Cuestionario de autoevaluación",
  "showNavigationButtons": true,
  "completedHtml": "Has acertado <b>{correctAnswers}</b> de un total de <b>{questionCount}</b> preguntas.",
  "pages": [
    {
      "name": "page1",
      "title": "Parte real e imaginaria",
      "elements": [
        {
          "type": "text",
          "name": "question1",
          "title": "La parte real de $(1+i)^2$ es",
          "correctAnswer": 0,
          "feedback": "desarrollando, $$(1+i)^2 = 1 + 2i + i^2 = 1 + 2i - 1 = 2i$$",
          "inputType": "number"
        },
        {
          "type": "text",
          "name": "question2",
          "title": "La parte imaginaria de \\((1+i)^2\\) es",
          "correctAnswer": 2,
          "inputType": "number"
        }
      ]
    },
    {
      "name": "page2",
      "title": "Módulo",
      "elements": [
        {
          "type": "radiogroup",
          "name": "question3",
          "title": "El módulo de \\(5+i\\) vale",
          "correctAnswer": "Item 2",
          "choices": [
            {
              "value": "Item 1",
              "text": "\\(6\\)"
            },
            {
              "value": "Item 2",
              "text": "\\(\\sqrt{26}\\)"
            },
            {
              "value": "Item 3",
              "text": "\\(\\sqrt{6}\\)"
            },
            {
              "value": "Item 4",
              "text": "\\(\\sqrt{24}\\)"
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "question4",
          "title": "El módulo de \\(i^3\\) vale",
          "correctAnswer": "Item 1",
          "choices": [
            {
              "value": "Item 1",
              "text": "\\(1\\)"
            },
            {
              "value": "Item 2",
              "text": "\\(-1\\)"
            },
            {
              "value": "Item 3",
              "text": "\\(i\\)"
            },
            {
              "value": "Item 4",
              "text": "\\(-i\\)"
            }
          ]
        }
      ]
    }
  ],
  "headerView": "advanced"
};
