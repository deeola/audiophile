import React from "react";
import ReactDOM from "react-dom";
import { cleanup} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LogoComponent from "../LogoComponent";

afterEach(cleanup)

it('renders component', () => {
    const div = document.createElement('img');
    ReactDOM.render(<LogoComponent></LogoComponent>, div);
})

