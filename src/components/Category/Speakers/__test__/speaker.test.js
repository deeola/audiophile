import { render, cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import SpeakerBody from "../SpeakerBody";

afterEach(cleanup);

it("renders speaker section correctly", () => {
  const section = document.createElement("section");
  ReactDOM.render(
    <BrowserRouter>
      <SpeakerBody />
    </BrowserRouter>,
    section
  );
});

it("contains two element children", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <SpeakerBody />
    </BrowserRouter>
  );

  expect(getByTestId('speaker').childElementCount).toBe(2)
});

// create snapshot

it('matches snapshot', () => {
    const tree  = renderer.create(
        <BrowserRouter>
        <SpeakerBody />
      </BrowserRouter>
    ).toJSON()

    expect(tree).toMatchSnapshot()
})