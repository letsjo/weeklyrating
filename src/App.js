import { Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import Review from "./page/Review";
import { useState } from "react";

function App() {
  const [weeks,setWeeks] = useState([
    { day: "월", rate: Math.floor(Math.random()*5) },
    { day: "화", rate: Math.floor(Math.random()*5) },
    { day: "수", rate: Math.floor(Math.random()*5) },
    { day: "목", rate: Math.floor(Math.random()*5) },
    { day: "금", rate: Math.floor(Math.random()*5) },
    { day: "토", rate: Math.floor(Math.random()*5) },
    { day: "일", rate: Math.floor(Math.random()*5) }
  ]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Main weeks={weeks} setWeeks={setWeeks}/>} />
        <Route path="/review/:day" element={<Review weeks={weeks} setWeeks={setWeeks}/>} />
      </Routes>
    </div>
  );
}

export default App;
