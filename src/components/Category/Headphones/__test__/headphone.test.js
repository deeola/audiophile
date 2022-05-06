import { render } from "@testing-library/react";
import reactDom from "react-dom";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import Headphones from "../Headphones";

it("renders product div correctly", () => {
  const section = document.createElement("section");

  reactDom.render(
    <BrowserRouter>
      <Headphones />
    </BrowserRouter>,
    section
  );
});

it("renders 3 html content", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Headphones />
    </BrowserRouter>
  );

  expect(getByTestId("headphone").childElementCount).toBe(3);
});

//snapshot
it("matches headshot snapshot", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Headphones />
      </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
