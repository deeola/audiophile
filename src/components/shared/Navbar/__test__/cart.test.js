import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Carts from "../Carts";

afterEach(cleanup);

it("renders component", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Carts ci></Carts>, div);
});

it("displays numbers of cart items to be 1", () => {
  const { getByTestId } = render(<Carts ci={1} cartlength={1}></Carts>);
  expect(getByTestId("cartlength")).toHaveTextContent(1);
});

it("displays numbers of cart items to be 2", () => {
  const { getByTestId } = render(<Carts ci={1} cartlength={2}></Carts>);
  expect(getByTestId("cartlength")).toHaveTextContent(2);
});

it("displays numbers of cart items to be 1000", () => {
  const { getByTestId } = render(<Carts ci={1} cartlength={1000}></Carts>);
  expect(getByTestId("cartlength")).toHaveTextContent(1000);
});
