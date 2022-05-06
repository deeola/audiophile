import { render, cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import SingleMenu from "../SingleMenu";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders single menu correctly", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <SingleMenu />
    </BrowserRouter>,
    div
  );
});

it("renders shop test correctly and have contain an a tag", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <SingleMenu alt="alt" label="Shop" />
    </BrowserRouter>
  );
  expect(getByTestId("textlabel")).toHaveTextContent("Shop");
  expect(getByTestId("singlemenu")).toContainHTML("a");
  expect(getByTestId("alt")).toHaveAttribute("alt");
});

it("matches snapshot", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <SingleMenu></SingleMenu>
      </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
