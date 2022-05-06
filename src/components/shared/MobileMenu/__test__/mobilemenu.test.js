import React from "react";
import MobileMenu from "../MobileMenu";
import renderer from "react-test-renderer";
import { render, cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

afterEach(cleanup)

it("renders div correctly", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <MobileMenu />
    </BrowserRouter>,
    div
  );
});

it("renders 3 items", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <MobileMenu data-testid="menu" primary="primary" />
    </BrowserRouter>
  );

  expect(getByTestId("menu").childElementCount).toBe(3);
});


//snapshot

it('matches snapshot', () => {
    const tree = renderer.create(
        <BrowserRouter>
      <MobileMenu data-testid="menu" primary="primary" />
    </BrowserRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot()
})