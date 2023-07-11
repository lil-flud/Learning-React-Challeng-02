import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const mySkills = [
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
  },
  {
    skill: "Git and Github",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
  {
    skill: "Python",
    level: "intermediate",
    color: "goldenrod",
  },
  {
    skill: "Java",
    level: "beginner",
    color: "orangered",
  },
];
//
function App() {
  return (
    <div className="card">
      {/* <Avatar /> */}
      <Avatar photoName="/photos/Blap-1.jpg" />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img className="avatar" src={props.photoName} alt={props.photoName} />;
}

function Intro() {
  return (
    <div>
      <h1>Logan Floyd</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portugese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {/* <ul className="skill-list"> */}
      {mySkills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

// function SkillList() {
//   return (
//     <div className="skill-list">
//       {/* <ul className="skill-list"> */}
//       {mySkills.map((skill) => (
//         <Skill skillObj={skill} />
//       ))}
//     </div>
//   );
// }

function Skill({ skill, color, level }) {
  const skillStyle = { backgroundColor: color };

  return (
    <div>
      <span style={skillStyle} className="skill">
        {skill} {level === "beginner" && "😒"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "🦾"}
      </span>
    </div>
  );
}

// function Skill({ skillObj }) {
//   console.log(skillObj);
//   const skillStyle = { backgroundColor: skillObj.color };

//   return (
//     <div>
//       <span style={skillStyle} className="skill">
//         {skillObj.skill}{" "}
//         {skillObj.level === "beginner"
//           ? "😒"
//           : skillObj.level === "intermediate"
//           ? "👍"
//           : "🦾"}
//       </span>
//     </div>
//   );
// }

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
