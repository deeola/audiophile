import ReactDOM from "react-dom";

import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import SecondSpeaker from "../ZSspeaker";

it("renders correctly in dom", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <SecondSpeaker />
    </BrowserRouter>,
    div
  );
});

it("display text correctly", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <SecondSpeaker />
    </BrowserRouter>
  );

  expect(getByTestId("title")).toHaveTextContent("ZX7 SPEAKER");
});

//matches snapshot
it("matches snapshot", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <SecondSpeaker />
      </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
