// import CourseGoal from "./components/CourseGoal.tsx";
import GoalsImg from "./assets/goals.jpg";
import Header from "./components/header.tsx";
import GoalList from "./components/GoalList.tsx";
import { Children, useState, ReactNode } from "react";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoalElement = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, SetGoal] = useState<CourseGoalElement[]>([]);

  function handleDeleteGoal(id: number) {
    return SetGoal((previousGoals) => {
      return previousGoals.filter((goal) => goal.id !== id);
    });
  }
  function handleAddGoal(summary: string, goal: string) {
    return SetGoal((previousGoals) => {
      const newGoal: CourseGoalElement = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...previousGoals, newGoal];
    });
  }

  return (
    <main>
      {/* <CourseGoal title="learn react" children="and ts" /> */}
      <Header image={{ src: GoalsImg, alt: "your goals" }}>
        <h1>Your goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <GoalList onDeleteGoal={handleDeleteGoal} goals={goals}></GoalList>
    </main>
  );
}
