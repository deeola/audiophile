import reactDom from "react-dom";
import { render, cleanup, screen, getByText } from "@testing-library/react";
import renderer from 'react-test-renderer';
import Itemcontrol from "../Itemcontrol";


it('renders the component without problem', () => {
    const div = document.createElement('div')
    reactDom.render(
        <Itemcontrol />, div
    );
})

it('renders ', () => {




})