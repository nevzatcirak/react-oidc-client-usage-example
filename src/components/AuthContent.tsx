import JsonTreeViewer from "./JsonTreeViewer";
import React from "react";

export interface IAuthContentProps {
  user: any;
}

export default function AuthContent(props: IAuthContentProps) {
  const shouldExpandNode = (
    keyPath: Array<string | number>,
    data: [any] | {},
    level: number
  ) => {
    return true;
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <JsonTreeViewer
          data={props.user}
          title="User Profile"
          shouldExpandNode={shouldExpandNode}
        />
      </div>
    </div>
  );
}
