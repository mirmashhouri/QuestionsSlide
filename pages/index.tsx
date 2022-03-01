import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import { InferGetStaticPropsType } from 'next';
import { Case,QuestionType } from '../shared/types';
import { motion } from 'framer-motion';
import { sampleQuestionData } from '../utils/sample-data';
import { useRouter } from 'next/router';

import {
  Question,
  QuestionsContainer,
  ScreenContainer,
  Option,
  Circle
} from '@styles/questions';
import { list, listItem, listItemHover, title,filled } from '../utils/animations';


const Homepage: NextPage = () => {

  const router = useRouter();
  const { locale,locales } = router;
const questions: Array<QuestionType> =  sampleQuestionData[locale];

  const [questionNow, setQuestionNow] = useState(questions[0]);

  useEffect(() => {
      let questionIndex=0;
    const interval = setInterval(() => {
      if(questionIndex<questions.length-1){
        questionIndex++;
      }
      else{questionIndex=0;}
        setQuestionNow(null);
        setQuestionNow(questions[questionIndex]);

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




export default Homepage;
