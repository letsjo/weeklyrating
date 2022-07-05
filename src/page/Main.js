import React from "react";
import styled from "styled-components";
import WeekRate from "../component/WeekRate";
import { useEffect, useState } from "react";

const Main = ({ weeks, setWeeks }) => {
  const [avg, setAvg] = useState("0.0");

  const rateReset = () => {
    weeks.map((week) => {
        week.rate = 0;
      });
      setAvg("0.0");
      setWeeks(weeks);
  };

  useEffect(() => {
    let sum = 0;
    weeks.map((week, index) => {
      sum += week.rate;
    });
    setAvg((sum / 7).toFixed(1));
  }, [avg]);

  return (
    <MainWarp>
      <h3>내 일주일은?</h3>
      <WeekRate weeks={weeks} />
      <BottomWarp>
        <div>평균 평점</div>
        <div>{avg}</div>
        <Button onClick={rateReset}>
          <p>Reset</p>
        </Button>
      </BottomWarp>
    </MainWarp>
  );
};

const MainWarp = styled.div`
  max-width: 350px;
  width: 80vw;
  height: 90vh;
  margin: 5vh auto;
  padding: 5vh 0px;
  border: 1px solid rgb(221, 221, 221);
  box-sizing: border-box;
  border-radius: 5px;
  h3 {
    text-align: center;
  }
`;

const BottomWarp = styled.div`
  width: 8rem;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: blue;
  padding: 9px;
  font-size: 25px;
  font-weight: bold;
`;

const Button = styled.div`
  width: inherit;
  height: fit-content;
  background-color: dodgerblue;
  border-radius: 6px;
  text-align: center;
  margin: 10px 0px 0px;
  cursor: pointer;
  p {
    color: white;
    font-size: 18px;
  }
`;

export default Main;
