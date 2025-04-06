import { ReactNode } from "react";

type CourseGoalProps = {
  id: number;
  title: string;
  children: ReactNode;
  onDelete: (id: number) => void;
};

export default function CourseGoal(courseGoalProps: CourseGoalProps) {
  return (
    <article>
      <div>
        <h1>{courseGoalProps.title}</h1>
        <p>{courseGoalProps.children}</p>
      </div>
      <button onClick={() => courseGoalProps.onDelete(courseGoalProps.id)}>
        Delete
      </button>
    </article>
  );
}

// type CourseGoalProps = PropsWithChildren<{ title: string }>;

// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h1>{title}</h1>
//         <p>{children}</p>
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

// export default CourseGoal;
