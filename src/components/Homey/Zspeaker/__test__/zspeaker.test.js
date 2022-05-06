import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import Zspeaker from "../Zspeaker";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";

it("renders the div correctly", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Zspeaker />
    </BrowserRouter>,
    div
  );
});

it("contains an image", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Zspeaker />
    </BrowserRouter>
  );

  expect(getByTestId("descriptionimage")).toContainHTML("img");
});

// create snapshot

it("matches snapshot", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Zspeaker />
      </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
