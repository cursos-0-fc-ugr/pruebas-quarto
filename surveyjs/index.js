// const survey = new Survey.Model(json);
// survey.onComplete.add((sender, options) => {
//     console.log(JSON.stringify(sender.data, null, 3));
// });
// survey.render(document.getElementById("surveyElement"));

const survey = new Survey.Model(json);

survey.applyTheme(myTheme);


survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
});
const correctStr = "(correcto)";
let incorrectStr = "(incorrecto)";
// Builds an HTML string to display in a question title
function getTextHtml (text, str, isCorrect) {
    if (text.indexOf(str) < 0)
        return undefined;
    return text.substring(0, text.indexOf(str)) +
        "<span class='" +  (isCorrect ? "correctAnswer" : "incorrectAnswer" ) + "'>" +
            str +
        "</span>";
}
// Adds "Correct" or "Incorrect" to a question title
function changeTitle (q) {
    incorrectStr = "(incorrecto)";
    if ("feedback" in q.jsonObj) {
        incorrectStr += " Pista: " + q.jsonObj.feedback;
    }
    console.log("incStrfeedback: " + incorrectStr);
    if (!q) return;
    const isCorrect = q.isAnswerCorrect();
    if (!q.prevTitle) {
        q.prevTitle = q.title;
    }
    if (isCorrect === undefined) {
        q.title = q.prevTitle;
    }
    q.title =  q.prevTitle + ' ' + (isCorrect ? correctStr : incorrectStr);
    console.log(q.jsonObj.feedback);
}
survey.onValueChanged.add((_, options) => {
    // Change the quesion title when the question value is changed
    changeTitle(options.question);
    MathJax.typesetPromise();
});
survey.onTextMarkdown.add((_, options) => {
    const text = options.text;
    let html = getTextHtml(text, correctStr, true);
    if (!html) {
        html = getTextHtml(text, incorrectStr, false);
    }
    if (!!html) {
        // Set an HTML string with the "Correct" or "Incorrect" suffix for display
        options.html = html;
    }
});
survey.render(document.getElementById("surveyElement"));