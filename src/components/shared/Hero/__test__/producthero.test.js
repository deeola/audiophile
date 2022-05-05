import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import ProductHero from "../ProductHero";

afterEach(cleanup);

it("renders product hero header correctly", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ProductHero></ProductHero>, div);
});

it("renders correct title of product hero of speaker", () => {
  const { getByTestId } = render(<ProductHero title={"speaker"}></ProductHero>);
  expect(getByTestId("title")).toHaveTextContent("speaker");
});

it("renders correct title of product hero of headphone", () => {
  const { getByTestId } = render(
    <ProductHero title={"headphone"}></ProductHero>
  );
  expect(getByTestId("title")).toHaveTextContent("headphone");
});

it("renders correct title of product hero of earphone", () => {
  render(<ProductHero title={"earphone"} />);
  const MyElemeng = screen.getByTestId("title");
  expect(MyElemeng).toHaveTextContent("earphone");
});

//Snapshots

it("matches product hero snapshot", () => {
  const tree = renderer
    .create(<ProductHero title={"Speaker"}></ProductHero>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
