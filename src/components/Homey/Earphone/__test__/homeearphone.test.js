import reactDom from "react-dom";
import HomeEarphone from "../HomeEarphone";
import { render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";

it("renders div correctly", () => {
  const div = document.createElement("div");

  reactDom.render(
    <BrowserRouter>
      <HomeEarphone />
    </BrowserRouter>,
    div
  );
});

it("has two div elements", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <HomeEarphone />
    </BrowserRouter>
  );
  expect(getByTestId("earphone").childElementCount).toBe(2);
});

//snapshot

it("matches  snapshot", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <HomeEarphone />
      </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
