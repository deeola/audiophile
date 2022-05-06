import ReactDOM from "react-dom";
import DescriptionText from "../DescriptionText";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

it("renders correctly in dom", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <DescriptionText />
    </BrowserRouter>, div
  );
});

it("display text correctly", () => {
    const {getByTestId}  =render(

        <BrowserRouter>
      <DescriptionText title={'hi'} />
    </BrowserRouter>
    )
  
    expect(getByTestId('title')).toHaveTextContent('hi')
    
  });
  
//create snapshot

it('matches snapshot', () => {
    const tree = renderer.create(
        <BrowserRouter>
        <DescriptionText title={'hi'} />
      </BrowserRouter>
    ).toJSON()

    expect(tree).toMatchSnapshot();
})