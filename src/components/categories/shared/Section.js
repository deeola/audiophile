import React from "react";
import firstImagedesktop from "../../../assets/category-headphones/desktop/markone.jpg";
import secondImagedesktop from "../../../assets/category-headphones/desktop/marktwo.jpg";
import thirdImagedesktop from "../../../assets/category-headphones/desktop/markthree.jpg";
import {Link} from 'react-router-dom'

function Section(props) {
  return (
    <div >
      <section className="HeadphoneSection">
        <div className="HeadImageOne">
          <img src={secondImagedesktop} alt='secondimage'></img>
        </div>
        <div className="SectionText sectionOne">
          <p className="newProductSec">NEW PRODUCT</p>
          <h2 className="SectionMainTitle">XX99 Mark II Headphones</h2>
          <p className="sectionPara">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <Link to='/xx99-mark-two' className='sectionButton'>SEE PRODUCT</Link>
        </div>
      </section>
      <section className="HeadphoneSection">
        <div className="SectionText sectionTwo">
          <h2 className="SectionMainTitle">XX99 Mark I Headphones</h2>
          <p className="sectionPara ">
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
          </p>
          <Link to='/xx99-mark-one' className='sectionButton'>SEE PRODUCT</Link>
        </div>
        <div className="HeadImageOne">
          <img src={firstImagedesktop} alt='firstimage'></img>
        </div>
      </section>
      <section className="HeadphoneSection">
        <div className="HeadImageOne">
          <img src={thirdImagedesktop} alt='thirdimage'></img>
        </div>
        <div className="SectionText sectionOne">
          <h2 className="SectionMainTitle secTopic">XX59 Headphones</h2>
          <p className="sectionPara">
            Enjoy your audio almost anywhere and customize it to your specific
            tastes with the XX59 headphones. The stylish yet durable versatile
            wireless headset is a brilliant companion at home or on the move.
          </p>
          <Link to='/xx59' className='sectionButton'>SEE PRODUCT</Link>
        </div>
      </section>
    </div>
  );
}

export default Section;
