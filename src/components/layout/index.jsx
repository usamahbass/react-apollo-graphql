import React from "react";

export const Layout = props => {
  return (
    <div>
      <div>
        <main className="container pr_3 pl_3 mt_4">{props.children}</main>
      </div>
    </div>
  );
};
