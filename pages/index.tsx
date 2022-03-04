import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import { InferGetStaticPropsType } from 'next';
import { Case,QuestionType } from '../shared/types';
import { motion } from 'framer-motion';
import { sampleQuestionData } from '../utils/sample-data';
import { useRouter } from 'next/router';

import { list, listItem, listItemHover, title,filled} from '../utils/animations';


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
      <motion.div className="main" id="screenRoot">
       {
        questionNow!=null?(
        <motion.ul className="questions-container" key={questionNow.id} initial="hidden" animate="visible" exit="hidden" variants={list}>
        <motion.header  initial="hidden" animate="visible" exit="hidden" variants={title}>
          <h3>{questionNow.name}</h3>
        </motion.header>
        {questionNow.cases.map((x,index)=>
            <motion.li className="question"
              key={x.caseId}
              initial="hidden" animate="visible"
              variants={listItem((index*0.5) + 1.5)}
              exit="hidden"
            >
                 <motion.div className="option">
                      <label>
                      {x.active?(
                        <motion.span className="circle" initial="hidden" animate="visible" variants={filled}>
                        </motion.span>
                      ):""}

                        <span>{x.caseName}</span>
                      </label>
                 </motion.div>
            </motion.li>
          )

        }
        </motion.ul>
      ):""
      }
      </motion.div>
    </motion.div>


  );
};




export default Homepage;
