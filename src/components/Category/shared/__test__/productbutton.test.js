import { render } from "@testing-library/react";
import reactDom from "react-dom";
import renderer from "react-test-renderer";

import { BrowserRouter } from "react-router-dom";
import ProductButton from "../ProductButton";

it("renders product button div correctly", () => {
  const div = document.createElement("div");
  reactDom.render(
    <BrowserRouter>
      <ProductButton />
    </BrowserRouter>,
    div
  );
});

it("renders 2 components", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <ProductButton />
    </BrowserRouter>
  );

  expect(getByTestId("productbutton").childElementCount).toBe(2);
});


// snapshot test

it('matches snapshot', () => {
    const tree = renderer.create(
        <BrowserRouter>
        <ProductButton />
      </BrowserRouter>
        
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
    })


