import { Case,QuestionType } from '../shared/types';

/** Dummy user data. */
export const sampleQuestionData: QuestionType[] =   [
    {
      "id": 1,
      "name": "Which of the below statements about electricity is not true?",
      "cases":[
        {
          "caseId": 1,
          "caseName": "Electricity Is measured In units called watts",
          "active": false
        },
        {
          "caseId": 2,
          "caseName": "Electricity flows at the speed of light",
          "active": false
        },
        {
          "caseId": 3,
          "caseName": "Electricity is a primary energy source",
          "active": true
        }
      ]
    }

  ]