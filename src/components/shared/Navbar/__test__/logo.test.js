import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LogoComponent from "../LogoComponent";
import logo from '../../../../assets/shared/desktop/logo.svg';

afterEach(cleanup)

it('renders component', () => {
    const div = document.createElement('img');
    ReactDOM.render(<LogoComponent></LogoComponent>, div);
})

// it('uses correct src', async () => {
//     const { getByAltText } =  await render(<LogoComponent img={logo}  alt='logo' />);
//     const image = getByAltText('logo');
//     console.log(image)
//     expect(image.src).toContain('../../../assets/shared/desktop/logo.svg');
// });