import React, { useState, useEffect } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import { InferGetStaticPropsType } from 'next';
import { Case,QuestionType } from '../shared/types';
// import db from '../db.json';
import { motion } from 'framer-motion';
import { sampleQuestionData } from '../utils/sample-data'

import {
  Question,
  QuestionsContainer,
  ScreenContainer,
  Option,
  Circle
} from '@styles/questions';
import { list, listItem, listItemHover, title,filled } from 'src/animations';


const Homepage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  questions,
}) => {

  const [questionNow, setQuestionNow] = useState(questions[0]);
  let i=0;
  useEffect(() => {
    const interval = setInterval(() => {
      if(i<questions.length-1){
        i++;
      }
      else{i=0;}
        setQuestionNow(null);
        setQuestionNow(questions[i]);

    }, 8000);
    return () => clearInterval(interval);
  }, [questionNow]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>question demo</title>
      </Head>
      <ScreenContainer id="screenRoot">
       {
        questionNow!=null?(
        <QuestionsContainer key={questionNow.id} initial="hidden" animate="visible" exit="hidden" variants={list}>
        <motion.header initial="hidden" animate="visible" exit="hidden" variants={title}>
          <h3>{questionNow.name}</h3>
        </motion.header>
        {questionNow.cases.map(x=>
            <Question
              key={x.caseId}
              variants={listItem}
              exit="hidden"
            >
                 <Option>

                      <label>
                      {x.active?(
                        <Circle initial="hidden" animate="visible" variants={filled}>
                        </Circle>
                      ):""}

                        <span>{x.caseName}</span>
                      </label>
                 </Option>
            </Question>)

        }
        </QuestionsContainer>
      ):""
      }
      </ScreenContainer>
    </motion.div>


  );
};

export const getStaticProps = async () => {

  // const response = await fetch('http://localhost:3005/questions');
  // const questions: Array<QuestionType> = await response.json();
  // return {
  //   props: {
  //     questions,
  //   },
  // };

const questions: Array<QuestionType> =  sampleQuestionData
 return { props: { questions } }
};


export default Homepage;
//initial="hidden" animate="visible" exit="hidden" variants={list}
