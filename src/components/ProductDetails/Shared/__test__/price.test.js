import reactDom from "react-dom";
import { render } from "@testing-library/react";
import Price from "../Price";

it("renders the component without problem", () => {
  const div = document.createElement("div");
  reactDom.render(<Price />, div);
});



it("renders text correctly", () => {
  const { getByTestId } = render(<Price price={"1200"} />);
  expect(getByTestId ("price")).toHaveTextContent("1200");
});

