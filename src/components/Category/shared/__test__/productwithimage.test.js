import { render } from "@testing-library/react";
import reactDom from "react-dom";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import ProductWithImage from "../ProductWithImage";

it("renders div correctly", () => {
  const div = document.createElement("div");

  reactDom.render(
    <BrowserRouter>
      <ProductWithImage />
    </BrowserRouter>,
    div
  );
});

it('contains image tag', () => {
    const {getByTestId} = render(
        <BrowserRouter>
        <ProductWithImage data-testid='productimage' />
      </BrowserRouter>
    )

    expect(getByTestId('productimage')).toContainHTML('img')
})

//create snapshot

it("matches snapshot", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <ProductWithImage />
      </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
