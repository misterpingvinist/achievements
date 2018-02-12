// src/components/__tests__/counter_spec.tsx

import { configure, HTMLAttributes, shallow, ShallowWrapper } from "enzyme";
import * as ReactSixteenAdapter from "enzyme-adapter-react-16";
import * as React from "react";
import sinon from "sinon";
import { Hello } from "../components/Hello";
const ada = new ReactSixteenAdapter();
configure({ adapter: ada });
it("renders", () => {
  const wrapper = shallow(<Hello compiler="TypeScript" framework="React" />);
  expect(wrapper.contains(<h1>Hello from TypeScript and React!</h1>)).toEqual(
    true
  );
});
