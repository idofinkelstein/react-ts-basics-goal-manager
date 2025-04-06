import { Children, ReactNode } from "react";

type WarningBoxProps = {
  messageType: "warning";
  children: ReactNode;
  sevirity: "low" | "medium" | "high";
};

type MessageBoxProps = {
  messageType: "info";
  children: ReactNode;
};

type InfoBoxProps = WarningBoxProps | MessageBoxProps;

export default function InfoBox(props: InfoBoxProps) {
  if (props.messageType === "info") {
    return (
      <aside className="infobox infobox-hint">
        <p>{props.children}</p>
      </aside>
    );
  }

  return (
    <>
      <aside className={`infobox infobox-warning warning--${props.sevirity}`}>
        <h2>WARNING!</h2>
        <p>{props.children}</p>
      </aside>
    </>
  );
}
