import { ReactNode } from "react";
import { CourseGoalElement } from "../App";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

export type GoalListProps = {
  goals: CourseGoalElement[];
  onDeleteGoal: (id: number) => void;
};

export default function GoalList(props: GoalListProps) {
  if (props.goals.length === 0) {
    return <InfoBox messageType="info">Start Adding Goals!</InfoBox>;
  }

  let warningBox: ReactNode;
  if (props.goals.length > 4) {
    warningBox = (
      <InfoBox messageType="warning" sevirity="high">
        You Have Too Many Goals
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {props.goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal
              title={goal.title}
              id={goal.id}
              onDelete={props.onDeleteGoal}
            >
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
