import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Description from "../Description";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

it("renders description box correctly", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Description />
    </BrowserRouter>,
    div
  );
});

it("have a title and subtitle", () => {

    const {getByTestId} = render(<BrowserRouter>
        <Description title={'zspeaker'} subtitle='this is a subtitle' />
      </BrowserRouter>)
      expect(getByTestId('desctitle')).toHaveTextContent('zspeaker')
      expect(getByTestId('descsubtitle')).toHaveTextContent('this is a subtitle')
})

//create  snapshot

it('matches snapshot', () => {
    const tree = renderer.create(
        <BrowserRouter>
        <Description title={'zspeaker'} subtitle='this is a subtitle' />
      </BrowserRouter>
    ).toJSON()

    expect(tree).toMatchSnapshot()
})
