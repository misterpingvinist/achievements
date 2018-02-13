import * as React from "react";

export class Login extends React.Component<{}, {}> {
  public render() {
    return (
      <div style={{ display: "grid", alignItems: "center" }}>
        <form style={{ margin: 0 }}>
          <label style={{ display: "block" }}>Name:</label>
          <input type="text" name="name" />
          <label style={{ display: "block" }}>Password:</label>
          <input id="password" type="password" name="password" />
          <input style={{ display: "block" }} type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
