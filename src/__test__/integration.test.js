import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import AudioState from "../context/Audiophile/AudioState";
import reactDom from "react-dom"



afterEach(cleanup)

function MockApp ({datatestid}) {
  return (
    <AudioState>
      <BrowserRouter>
        <App datatestid />
      </BrowserRouter>
    </AudioState>
  );
};

describe("APP", () => {
  it("renders MockApp correctly", () => {
    const divElement = document.createElement("div");
    reactDom.render(<MockApp />, divElement);
  });

  it("Headphone Nav Link should render Headphones pages", async() => {
    render(<MockApp />);
    const headphoneElement = screen.getByTestId("list-Headphones");
    fireEvent.click(headphoneElement);
    const destinationPage = screen.getByTestId("headphones");
    expect(destinationPage).toBeInTheDocument();
  });

  it("Speaker Nav Link should render Speakers pages", () => {
    render(<MockApp />);
    const speakerElement = screen.getByTestId("list-Speakers");
    fireEvent.click(speakerElement);
    const destinationPage = screen.getByTestId("speakers");
    expect(destinationPage).toBeInTheDocument();
  });

  it("Earphones Nav Link should render Earphone pages", () => {
    render(<MockApp />);
    const earphoneElement = screen.getByTestId("list-Earphones");
    fireEvent.click(earphoneElement);
    const destinationPage = screen.getByTestId("earphonepage");
    expect(destinationPage).toBeInTheDocument();
  });

  // SHOP NAVIGATION TESTING

  it("Shop earphone link should render Earphone pages", () => {
    render(<MockApp />);
    const shopearphoneElement = screen.getByTestId("shopearphones");
    fireEvent.click(shopearphoneElement);
    const destinationPage = screen.getByTestId("earphonepage");
    expect(destinationPage).toBeInTheDocument();
  });
  
  it("SHOP Speaker Nav Link should render Speakers pages", () => {
    render(<MockApp />);
    const speakerElement = screen.getByTestId("shopspeakers");
    fireEvent.click(speakerElement);
    const destinationPage = screen.getByTestId("speakers");
    expect(destinationPage).toBeInTheDocument();
  });

  it("Shop Headphone Nav Link should render Headphones pages", async() => {
    render(<MockApp />);
    const headphoneElement = screen.getByTestId("shopheadphone");
    fireEvent.click(headphoneElement);
    const destinationPage = screen.getByTestId("headphones");
    expect(destinationPage).toBeInTheDocument();
  });

});
