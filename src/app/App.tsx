import React from "react";
import "../css/App.css";
import "../css/navbar.css";
import "../css/eduTain.css";
import "../css/motionDrawing.css";
import "../css/motionCharacter.css";
import "../css/graphytoon.css";
import "../css/grapCard.css";
import "../css/review.css";
import "../css/footer.css";
import "../css/grapChat.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { NavbarHome } from "./components/header";
import { EduTain } from "./screens/HomePage/eduTain";
import { MotionDrawing } from "./screens/HomePage/motionDrawing";
import { MotionCharacter } from "./screens/HomePage/motionCharacter";
import { Graphytoon } from "./screens/HomePage/graphytoon";
import { GrapCard } from "./screens/HomePage/grapCard";
import { Review } from "./screens/HomePage/userReview";
import { Footer } from "./components/footer";
import { GrapChat } from "./screens/HomePage/grapChat";

function App() {
  return (
    <div>
      <Router>
        <NavbarHome />
        <EduTain />
        <MotionDrawing />
        <GrapCard />
        <MotionCharacter />
        <Graphytoon />
        <Review />
        <Footer />
        <GrapChat />
      </Router>
    </div>
  );
}

export default App;
