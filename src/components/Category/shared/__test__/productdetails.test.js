import { render} from "@testing-library/react";
import reactDom from "react-dom";
import renderer from "react-test-renderer";
import ProductDetails from "../ProductDetails";


it("renders div correctly", () => {
  const div = document.createElement("div");

  reactDom.render(
    <ProductDetails />,

    div
  );
});

it("renders texts correctly", () => {
  const { getByTestId } = render(<ProductDetails subtitle={'SUBTITLE'} title={'TITLE'} np='NEW PRODUCT' />);

  expect(getByTestId("np")).toHaveTextContent("NEW PRODUCT");
  expect(getByTestId("title")).toHaveTextContent("TITLE");
  expect(getByTestId("subtitle")).toHaveTextContent("SUBTITLE");
});


//create snapshot

it('matches snapshot', () => {
const tree = renderer.create(
    <ProductDetails />
).toJSON();

expect(tree).toMatchSnapshot();
})