import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import reactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Footer from "../Footer";

const MockFooter = () => {
  return (
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
};

it("renders footer component", () => {
  const footer = document.createElement("footer");

  reactDom.render(<MockFooter />, footer);
});

//get footer role

describe("tests for texts in the footer", () => {
  it("gets the footer role", () => {
    const { getByRole } = render(<MockFooter />);
    expect(getByRole("footer")).toBeInTheDocument();
  });

  it("checks if subheading is in document", () => {
    const { getByTestId } = render(<MockFooter />);
    expect(getByTestId("subheading")).toBeInTheDocument();
  });

  it("checks for copyright year", () => {
    const { getByTestId } = render(<MockFooter />);
    expect(getByTestId("year")).toHaveTextContent(/2022/i);
  });
});


//creates snapshot

describe('creates snapshot', () => {
    it('all footersnapshot', () => {
        const tree = renderer.create(<MockFooter />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})