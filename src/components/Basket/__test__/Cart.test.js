// import React from 'react'
// import Cart from "../Cart";
// import { render, cleanup, fireEvent, screen } from "@testing-library/react";
// import renderer from "react-test-renderer";
// import reactDom from "react-dom";
// import { BrowserRouter } from "react-router-dom";
// import AudioState from "../../../context/Audiophile/AudioState";
// import { CartItemsContainer } from "../shared/cartsharedstyling";
// import App from "../../../App";
// import audioContext from '../../../context/Audiophile/audioContext';



// const Mockdata = [
//   {
//     id: 1,
//     slug: "yx1-earphones",
//     name: "YX1 Wireless Earphones",
//     cartname: "YX1",
//     image: {
//       mobile: "/product-yx1-earphones/mobile/image-product.jpg",
//       tablet: "/product-yx1-earphones/tablet/image-product.jpg",
//       desktop: "/product-yx1-earphones/desktop/image-product.jpg",
//     },
//     category: "earphones",
//     new: true,
//     price: 599,
//     description:
//       "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
//     features:
//       "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.\n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
//     includes: [
//       {
//         quantity: 2,
//         item: "Earphone unit",
//       },
//       {
//         quantity: 6,
//         item: "Multi-size earplugs",
//       },
//       {
//         quantity: 1,
//         item: "User manual",
//       },
//       {
//         quantity: 1,
//         item: "USB-C charging cable",
//       },
//       {
//         quantity: 1,
//         item: "Travel pouch",
//       },
//     ],
//     gallery: {
//       first: {
//         mobile: "/product-yx1-earphones/mobile/image-gallery-1.jpg",
//         tablet: "/product-yx1-earphones/tablet/image-gallery-1.jpg",
//         desktop: "/product-yx1-earphones/desktop/image-gallery-1.jpg",
//       },
//       second: {
//         mobile: "/product-yx1-earphones/mobile/image-gallery-2.jpg",
//         tablet: "/product-yx1-earphones/tablet/image-gallery-2.jpg",
//         desktop: "/product-yx1-earphones/desktop/image-gallery-2.jpg",
//       },
//       third: {
//         mobile: "/product-yx1-earphones/mobile/image-gallery-3.jpg",
//         tablet: "/product-yx1-earphones/tablet/image-gallery-3.jpg",
//         desktop: "/product-yx1-earphones/desktop/image-gallery-3.jpg",
//       },
//     },
//     others: [
//       {
//         slug: "xx99-mark-one-headphones",
//         name: "XX99 Mark I",
//         image: {
//           mobile: "/shared/mobile/image-xx99-mark-one-headphones.jpg",
//           tablet: "/shared/tablet/image-xx99-mark-one-headphones.jpg",
//           desktop: "/shared/desktop/image-xx99-mark-one-headphones.jpg",
//         },
//       },
//       {
//         slug: "xx59-headphones",
//         name: "XX59",
//         image: {
//           mobile: "/shared/mobile/image-xx59-headphones.jpg",
//           tablet: "/shared/tablet/image-xx59-headphones.jpg",
//           desktop: "/shared/desktop/image-xx59-headphones.jpg",
//         },
//       },
//       {
//         slug: "zx9-speaker",
//         name: "ZX9 Speaker",
//         image: {
//           mobile: "/shared/mobile/image-zx9-speaker.jpg",
//           tablet: "/shared/tablet/image-zx9-speaker.jpg",
//           desktop: "/shared/desktop/image-zx9-speaker.jpg",
//         },
//       },
//     ],
//   },
// ];

// const MockAuthContext = () => ( React.createContext(Mockdata) )

// jest.mock("../../../context/Audiophile/audioContext", () => ({
//   __esModule: true,
//   default: React.createContext()
// }));

// const MockCart = ({ ...args }) => {
//   return (
//     <AudioState>
//       <BrowserRouter>
//         <Cart {...args} />
//       </BrowserRouter>
//     </AudioState>
//   );
// };

// function MockApp() {
//   return (
//     <AudioState>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </AudioState>
//   );
// }

// describe("Cart", () => {
//   it("renders cart correctly", () => {
//     const div = document.createElement("div");
//     reactDom.render(<MockCart />, div);
//   });

//   // Add Item to cart

//   it("increases the number of cartItems when the plus button is clicked", async () => {

//     const data = ['hello']
//     render(
//       <audioContext.Provider value={Mockdata} >
//         <BrowserRouter>
//           <Cart />
//         </BrowserRouter>
//       </audioContext.Provider>
//     );
//     const PositiveElement = screen.getByText('+');
//   });
// });
