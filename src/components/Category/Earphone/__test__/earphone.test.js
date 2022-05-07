import { render, cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

import EarphoneBody from "../EarphoneBody";



afterEach(cleanup);

it("renders earphone section correctly", () => {
  const section = document.createElement("section");
  ReactDOM.render(
    <BrowserRouter>
      <EarphoneBody />
    </BrowserRouter>,
    section
  );
});

it("contains one element children", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <EarphoneBody />
    </BrowserRouter>
  );

  expect(getByTestId('earphone').childElementCount).toBe(1)
});

// create snapshot

it('matches snapshot', () => {
    const tree  = renderer.create(
        <BrowserRouter>
        <EarphoneBody />
      </BrowserRouter>
    ).toJSON()

    expect(tree).toMatchSnapshot()
})