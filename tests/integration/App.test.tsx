import { mount } from "enzyme";
import React from "react";
import { App } from "../../src/App";

describe("App", () => {
  test("should display an H1 with the right text", () => {
    expect.assertions(2);

    const component = mount(<App />);

    const h1 = component.find("h1");
    expect(h1.text()).toEqual("Happy coding 💪");
    expect(h1).toHaveLength(1);
  });
});
