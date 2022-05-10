import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup, screen, getByText } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import HeroText from "../HeroText";
import { BrowserRouter } from "react-router-dom";
import reactDom from "react-dom";

const MockHeroText = () => {
  return (
    <BrowserRouter>
      <HeroText />
    </BrowserRouter>
  );
};
it("renders heroText correctly", () => {
  const header = document.createElement("header");
  reactDom.render(<MockHeroText />, header);
});

describe("checks tests", () => {
  it("renders heading text correctly", () => {
    const { getByTestId } = render(<MockHeroText />);
    expect(getByTestId("heroheader")).toHaveTextContent(
      'XX99 MARK II HEADPHONES'
    );
  });

  // checks for subheading text

  it("renders subheading text correctly", () => {
    const { getByTestId } = render(<MockHeroText />);
    expect(getByTestId("subheader")).toHaveTextContent(
      'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.'
    );
  });


});


// create snapshot

it('creates snapshot for hero text section', () => {
    const tree = renderer.create(<MockHeroText />).toJSON()
    expect(tree).toMatchSnapshot();
})
