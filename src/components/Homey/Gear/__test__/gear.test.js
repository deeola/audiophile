import { render, cleanup } from "@testing-library/react";
import reactDom from "react-dom";
import Gear from "../Gear";
import renderer from "react-test-renderer";

it("renders div correctly", () => {
  const div = document.createElement("div");

  reactDom.render(<Gear />, div);
});

it("contains a span element", () => {
  const { getByTestId } = render(<Gear />);
  expect(getByTestId("gear")).toContainHTML("span");
});

it("matches snapshot", () => {
  const tree = renderer.create(<Gear />).toJSON();

  expect(tree).toMatchSnapshot();
});
