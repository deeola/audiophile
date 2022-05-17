import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Links from "../Links";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import { Colors } from "../../../../Themes";

afterEach(cleanup);

const theme = {
  colors: Colors,
};



it("renders navbar correctly", () => {
  const div = document.createElement("a");
  ReactDOM.render(
    <BrowserRouter>
      <Links></Links>
    </BrowserRouter>,
    div
  );
});

// it("renders Home Link correctly", () => {
//   const { getByTestId } = render(
//     <BrowserRouter>
//       <Links to={"/"} label={"Home"}></Links>
//     </BrowserRouter>
//   );

//   expect(getByTestId("list")).toHaveTextContent("Home");
// });

// it("renders Headphone  Link correctly", () => {
//   const { getByTestId } = render(
//     <BrowserRouter>
//       <Links to={"/Headphones"} label={"Headphones"}></Links>
//     </BrowserRouter>
//   );
//   expect(getByTestId("list")).toHaveTextContent("Headphones");
// });

// it("renders Speakers Link correctly", () => {
//   const { getByTestId } = render(
//     <BrowserRouter>
//       <Links to={"/Speakers"} label={"Speakers"}></Links>
//     </BrowserRouter>
//   );
//   expect(getByTestId("list")).toHaveTextContent("Speakers");
// });

// it("renders Earphones Link correctly", () => {
//   const { getByTestId } = render(
//     <ThemeProvider theme={theme}>
//       <BrowserRouter>
//         <Links to={"/Earphones"} label={"Earphones"}></Links>
//       </BrowserRouter>
//     </ThemeProvider>
//   );
//   expect(getByTestId("list")).toHaveTextContent("Earphones");
// });

it("matches snapshot", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Links to={"/"} label={"Home"}></Links>
      </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
