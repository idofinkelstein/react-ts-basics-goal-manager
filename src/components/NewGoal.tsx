import { FormEvent, useRef } from "react";

type NewGoalProps = {
  onAddGoal: (summary: string, goal: string) => void;
};
export default function NewGoal(props: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;
    event.currentTarget.reset();
    props.onAddGoal(enteredSummary, enteredGoal);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input type="text" id="summary" ref={summary} />
      </p>
      <p>
        <button type="submit">Add New Goal</button>
        <button type="reset">Reset</button>

      </p>
    </form>
  );
}
