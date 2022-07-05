import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Review = ({weeks, setWeeks}) => {
  const params = useParams();
  const navigate = useNavigate();
  const [rate, setRate] = useState(0);
  const goMain = (day) => {
    weeks.map((x)=>{
      if(x.day==day){
        x.rate=rate
      }
    })
    
    setWeeks(weeks);
    navigate('/');
  };
  return (
    <MainWarp>
      <h3>
        <span>{params.day}요일</span> 평점 남기기
      </h3>
      <WeekWarp>
        {Array.from({ length: 5 }, (item, index) => {
          return rate <= index ? <Circle key={index} onClick={()=>{setRate(index + 1);}}/> : <CircleFill key={index} onClick={()=>{setRate(index + 1);}}/>;
        })}
      </WeekWarp>
      <button onClick={() => goMain(params.day)}>평점 남기기</button>
    </MainWarp>
  );
};

const MainWarp = styled.div`
  max-width: 350px;
  width: 80vw;
  height: 90vh;
  margin: 5vh auto;
  padding: 5vh 5vw;
  border: 1px solid rgb(221, 221, 221);
  box-sizing: border-box;
  border-radius: 5px;

  h3 {
    text-align: center;
  }

  h3 > span {
    color: rgb(255, 255, 255);
    font-weight: 900;
    background: orange;
    padding: 0.2rem;
    border-radius: 5px;
  }

  button {
    width: 100%;
    background-color: purple;
    border: none;
    border-radius: 5px;
    padding: 1rem;
    color: rgb(255, 255, 255);
  }
`;

const WeekWarp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0px;
  width: 100%;
  p {
    margin: 0px 0.5rem 0px 0px;
    font-weight: bold;
  }
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px;
  background-color: rgb(221, 221, 221);
  /* background-color: rgb(255, 235, 59); */
`;

const CircleFill = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px;
  /* background-color: rgb(221, 221, 221); */
  background-color: rgb(255, 235, 59);
`;

export default Review;
