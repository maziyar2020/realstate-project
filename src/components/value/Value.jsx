import "./value.scss";
// accordion imports
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
// icons
import { MdOutlineArrowDropDown } from "react-icons/md";
// data
import AccordionData from "../../utils/accordion";
import { useState } from "react";

function Value() {
  return (
    <div className="value-wrapper">
      <div className="padding inner-width flexCenter value">
        {/* first section */}
        <div className="value__first">
          <img src="./value.png" alt="" className="value__image" />
        </div>
        {/* second section */}
        <div className="flexColStart value__second">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give to You</span>
          <p className="secondaryText">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim,
            assumenda!
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            voluptatum.
          </p>

          {/* accordion */}
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}>
            {AccordionData.map((acc, index) => {
              const [classname, setClassName] = useState("");
              return (
                <AccordionItem
                  key={index}
                  className={`accordion__item ${classname}`}
                  uuid={index}>
                  {/* accordion header */}
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordion__item-button">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>
                      <div className="flexCenter accordion__item-icon">
                        {acc.icon}
                      </div>
                      <div className="primaryText accordion__item-heading">
                        {acc.heading}
                      </div>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={30} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  {/* accordion content */}
                  <AccordionItemPanel>
                    <p className="secondaryText">{acc.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Value;
