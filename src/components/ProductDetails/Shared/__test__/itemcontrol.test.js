import reactDom from "react-dom";
import { render, screen } from "@testing-library/react";
import Itemcontrol from "../Itemcontrol";
import renderer from "react-test-renderer";

it("renders the component without problem", () => {
  const div = document.createElement("div");
  reactDom.render(<Itemcontrol />, div);
});
