import { BrowserRouter } from "react-router-dom";
import MobileMenu from "../../../../components/shared/MobileMenu/MobileMenu";
export default {
    title: "Components/Navbar/MobileNav",
    component: MobileMenu,
   
  };

  const Template = (args) => (
    <BrowserRouter>
      <MobileMenu {...args} />
    </BrowserRouter>
  );
  
  export const Primary = Template.bind({});
  Primary.args = {
    primary: true,
  };