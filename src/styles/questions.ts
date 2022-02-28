import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ScreenContainer = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;

  padding-bottom: 5rem;


  header {
    align-self:center;
    text-align:center;
    width:100%;
    margin: 2rem 0;
    padding:0 1rem;

    font-family: 'Work Sans', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;

    color: #818181;

    @media (max-width: 700px) {
      align-self: center;
      margin-left: 0;
    }
  }

  a {
    justify-content: center;
    text-decoration: none;
  }
`;

export const QuestionsContainer = styled(motion.ul)`
width: 350px;
border:1px solid #6231EC;
border-radius:30px;
font-family: 'Work Sans', sans-serif;
font-weight: normal;
font-size: 1rem;
line-height: 1.9rem;
margin-top: 10rem;
padding:10px;

div.options {
  display: flex;
  margin-top: 3.6rem;
}

@media (max-width: 1070px) {
  margin-bottom: 10em;
}

@media (max-width: 425px) {
  padding: 0 5em;
}
@media (max-width: 375px) {
  padding: 0 6em;
}
@media (max-width: 320px) {
  padding: 0 8em;
}
`;

export const Question = styled(motion.li)`
  position: relative;
  padding: 0 1rem;

  list-style: none;

  div{
        padding:10px 0;
  }
  h3 {
    margin-top: 3rem;
    font-family: 'Work Sans', sans-serif;
    font-size: 1.8rem;
    font-weight: bold;
    color: #424347;
  }
`;
export const Option = styled(motion.div)`
margin: 14px 0;
padding: 0 15px;
border-radius: 100px;
-webkit-box-shadow: 0 0 8px 0 rgb(0 0 0 / 20%);
box-shadow: 0 0 8px 0 rgb(0 0 0 / 20%);

input[type=radio] {
    position: absolute;
    left: -10000px;
  }
 label {
    display: block;
    position: relative;
    padding: 0 15px 0 35px;
    margin: 0 5px ;
    cursor: pointer;
}
label:after,label:before {
    position: absolute;
    content: "";
    border-radius: 50%;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    transform: translateY(-50%);
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    transition: all .3s ease;
    -webkit-transition-property: border-color,-webkit-transform;
    transition-property: border-color,-webkit-transform;
    -moz-transition-property: transform,border-color,-moz-transform;
    transition-property: transform,border-color;
  transition-property: transform,border-color,-webkit-transform,-moz-transform;
}
label:before {
    left: 0;
    width: 20px;
    height: 20px;
    border: 3px solid #6231EC;
}
span{
  font-size:1.3rem;
  color:#6231EC;
}
`;
export const Circle = styled(motion.span)`
  position: absolute;
  left: 0px;
    :after {
      position: absolute;
      content: "";
      border-radius: 50%;
      top: 50%;
      width:18px;
      height:18px;
      background: #6231EC;
      left: 4px;
      top:1px;
    }
`;
