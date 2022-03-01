export type Case =   {
    caseId:number;
    caseName:string;
    active:boolean;
  }
export type QuestionType = {
  id: number;
  name: string;
   cases:Case[];
};
