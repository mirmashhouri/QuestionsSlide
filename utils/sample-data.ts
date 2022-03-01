import { Case,QuestionType } from '../shared/types';

/** Dummy user data. */
export const sampleQuestionData =
{
   'en':
  [
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
 ,
   'fr':
   [
       {
         "id": 1,
         "name": "Laquelle des affirmations ci-dessous sur l'électricité n'est pas vraie ?",
         "cases":[
           {
             "caseId": 1,
             "caseName": "L'électricité est mesurée en unités appelées watts",
             "active": false
           },
           {
             "caseId": 2,
             "caseName": "L'électricité circule à la vitesse de la lumière",
             "active": false
           },
           {
             "caseId": 3,
             "caseName": "L'électricité est une source d'énergie primaire",
             "active": true
           }
         ]
       }

     ]

}
