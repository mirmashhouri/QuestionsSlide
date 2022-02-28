export type Case =   {
    caseId:number;
    caseName:string;
    active:bool;
  }
export type QuestionType = {
  id: number;
  name: string;
   cases:Case[];
};
