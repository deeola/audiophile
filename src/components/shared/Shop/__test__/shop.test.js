import Shop from "../Shop";


import React from "react";

import renderer from "react-test-renderer";
import { render, cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

it("renders div correctly", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Shop />
    </BrowserRouter>,
    div
  );
});

it("renders 3 items", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Shop data-testid="shop"  />
    </BrowserRouter>
  );

  expect(getByTestId("shop").childElementCount).toBe(3);
});


//snapshot

it('matches snapshot', () => {
    const tree = renderer.create(
        <BrowserRouter>
      <Shop data-testid="shop" primary="primary" />
    </BrowserRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot()
})