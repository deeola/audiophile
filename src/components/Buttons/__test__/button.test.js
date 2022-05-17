import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button, SecondaryButton, TetiaryButton } from "../Button";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders primary button with correct text", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Button label={"SEE PRODUCT"} datatestid='primarybutton' />
    </BrowserRouter>
  );
  expect(getByTestId("primarybutton")).toHaveTextContent("SEE PRODUCT");
});

it("renders secondary button with correct text", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <SecondaryButton datatestid={'secondarybutton'} label={"SEE PRODUCT"} />
    </BrowserRouter>
  );
  expect(getByTestId("secondarybutton")).toHaveTextContent("SEE PRODUCT");
});

it("renders tetiary button with correct text", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <TetiaryButton datatestid={'tetiarybutton'} label={"SEE PRODUCT"} />
      </BrowserRouter>
    );
    expect(getByTestId("tetiarybutton")).toHaveTextContent("SEE PRODUCT");
    expect(getByTestId("tetiarybutton")).toContainHTML('span');
  });

// Snapshots

it("Primary Button matches snapshot", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Button label={"SEE PRODUCT"} />
      </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it("Secondary Button matches snapshot", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <SecondaryButton label={"SEE PRODUCT"} />
      </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
