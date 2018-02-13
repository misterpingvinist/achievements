import * as React from "react";

export class Login extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <form>
          <label>Name:</label>
          <input type="text" name="name" />
          <label>Password:</label>
          <input id="password" type="password" name="password" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
