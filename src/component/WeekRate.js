import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"

const WeekRate = ({ weeks }) => {
  const navigate = useNavigate();
  const goReviewPage = (week) => {
    navigate(`/review/${week}`);
  };
  return (
    <div>
      {weeks.map((week, index) => {
        return (
          <WeekWarp>
            <p>{week.day}</p>
            {Array.from({ length: 5 }, (item, index) => {
              return week.rate <= index ? <Circle key={index}/> : <CircleFill key={index}/>;
            })}
            <Arrow key={index} onClick={() => goReviewPage(week.day)}/>
          </WeekWarp>
        );
      })}
    </div>
  );
};

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

const Arrow = styled.div`
  appearance: none;
  background-color: transparent;
  border-color: transparent purple;
  width: 0px;
  height: 0px;
  border-top-width: 1rem;
  border-top-style: solid;
  border-bottom-width: 1rem;
  border-bottom-style: solid;
  border-left-width: 1.6rem;
  border-left-style: solid;
  color: rgb(255, 255, 255);
  cursor: pointer;
`;

export default WeekRate;
