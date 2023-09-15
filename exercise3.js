class Question {
  constructor(id, text, answers, questionnaire) {
    this.id = id;
    this.text = text;
    this.answers = answers;
    this.children = [];

    if (questionnaire) {
      questionnaire.addQuestion(this);
    }
  }

  addChild(answer, childQuestion) {
    this.answers.push(answer);
    this.children.push(childQuestion);
  }

  getId() {
    return this.id;
  }

  getText() {
    return this.text;
  }

  getAnswers() {
    return this.answers;
  }
}

class Questionnaire {
  constructor() {
    this.questions = {};
    this.currentQuestion = null;
  }

  setCurrentQuestion(questionId) {
    const question = this.getQuestionById(questionId);
    if (!question) {
      throw new Error("Question not found!");
    }
    this.currentQuestion = question;
    return;
  }

  addQuestion(question) {
    this.questions[question.getId()] = question;
  }

  getQuestionById(questionId) {
    return this.questions[questionId];
  }

  moveToNext(userAnswer) {
    const currentIndex = this.currentQuestion.answers.indexOf(userAnswer)
    if (currentIndex === -1) {
      throw new Error("Invalid answer!")
    }
    this.currentQuestion = this.currentQuestion.children[currentIndex];
  }
}

// Create a questionnaire instance
// const questionnaire = new Questionnaire();

// Create questions and questionnaire
// const rootQuestion = new Question(
//   1,
//   "Do you like animals?",
//   ["Yes", "No"],
//   questionnaire
// );
// const yesChild = new Question(
//   2,
//   "Which type of animal do you prefer?",
//   ["Cats", "Dogs"],
//   questionnaire
// );
// const noChild = new Question(
//   3,
//   "Why not?",
//   ["Allergic", "Not interested"],
//   questionnaire
// );
// rootQuestion.addChild("Yes", yesChild);
// rootQuestion.addChild("No", noChild);

function createQuestion(id, text, answers, parentQuestion, questionnaire) {
  const question = new Question(id, text, answers, questionnaire);
  if (parentQuestion) {
    const parentAnswer = parentQuestion.answers[0];
    parentQuestion.addChild(parentAnswer, question);
  }
  return question;
}

function createQuestionnaireFromData(questionData) {
  const questionnaire = new Questionnaire();

  for (const data of questionData) {
    const { id, text, answers, childOf } = data;
    if (!childOf) {
      // root question
      createQuestion(id, text, answers, null, questionnaire);
    } else {
      const parentQuestion = questionnaire.getQuestionById(childOf);
      if (!parentQuestion) {
        throw new Error(`Parent question with ID ${childOf} not found!`);
      }
      createQuestion(id, text, answers, parentQuestion, questionnaire);
    }
  }

  return questionnaire;
}

// Example question data array
const questionData = [
  {
    id: 1,
    text: "Do you like animals?",
    answers: ["Yes", "No"],
  },
  {
    id: 2,
    text: "Which type of animal do you prefer?",
    answers: ["Cats", "Dogs"],
    childOf: 1,
  },
  {
    id: 3,
    text: "Why not?",
    answers: ["Allergic", "Not interested"],
    childOf: 1, 
  },{
    id: 4,
    text: "What is your favorite type of cat?",
    answers: ["England", "Egypt"],
    childOf: 2, 
  },
];

const questionnaire = createQuestionnaireFromData(questionData);

questionnaire.setCurrentQuestion(1);

// Simulate answering questions
console.log(questionnaire.currentQuestion.getText()); // Display the root question

const userAnswer = "Yes";
questionnaire.moveToNext(userAnswer);


const newUserAnswer = "Cats";
questionnaire.moveToNext(newUserAnswer)

console.log(questionnaire.currentQuestion.getText()); // Display the new question

console.log(questionnaire)

const specificQuestionId = 2;
const specificQuestion = questionnaire.getQuestionById(specificQuestionId);

if (!specificQuestion) {
  throw new Error(`Question with ID ${specificQuestionId} not found!`);
}
questionnaire.setCurrentQuestion(specificQuestionId);
console.log(questionnaire.currentQuestion.getText()); // Display the specific question
