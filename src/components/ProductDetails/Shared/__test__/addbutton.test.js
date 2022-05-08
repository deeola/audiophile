import reactDom from "react-dom";
import { render, cleanup } from "@testing-library/react";
import AddButton from "../AddButton";
import renderer from 'react-test-renderer';


it('renders the component without problem', () => {
    const button = document.createElement('button')
    reactDom.render(
        <AddButton />, button
    )
})

it('renders text correctly', () => {
    const {getByRole} = render(
        <AddButton />
    )
    expect(getByRole('button')).toBeInTheDocument()
})