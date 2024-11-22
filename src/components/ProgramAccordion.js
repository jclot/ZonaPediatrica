import React, { useContext } from "react";
import { Accordion } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import AccordionContext from "react-bootstrap/AccordionContext";


const ACTIVE_COLOR = "#1ab9ff";
const INACTIVE_COLOR = "#223668";

const CustomToggle = ({ children, eventKey }) => {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(eventKey);
  const isActive = activeEventKey === eventKey;

  return (
    <h6
      onClick={decoratedOnClick}
      style={{
        backgroundColor: isActive ? ACTIVE_COLOR : INACTIVE_COLOR,
        color: "white",
        padding: "10px 15px",
        cursor: "pointer",
        borderRadius: "5px",
        margin: "5px 0",
      }}
    >
      {children}
    </h6>
  );
};


const ProgramAccordion = () => {
  return (
    <Accordion defaultActiveKey="1st">
      <div className="flat-accordion">
        <div className="flat-toggle">
          <Accordion.Item eventKey="1st">
            <CustomToggle eventKey="1st">
              Designing Better Links For Websites?
            </CustomToggle>
            <Accordion.Collapse eventKey="1st">
              <div className="toggle-content">
                <p>
                  Sed ut perspiciatis unde omnis natus error voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaque quae
                  abile invents veritatis et quasi architecto beatae vitae dicta
                </p>
              </div>
            </Accordion.Collapse>
          </Accordion.Item>
        </div>
        <div className="flat-toggle">
          <Accordion.Item eventKey="2nd">
            <CustomToggle eventKey="2nd">
              Useful VS Code Extensions For Front-End?
            </CustomToggle>
            <Accordion.Collapse eventKey="2nd">
              <div className="toggle-content">
                <p>
                  Sed ut perspiciatis unde omnis natus error voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaque quae
                  abile invents veritatis et quasi architecto beatae vitae dicta
                </p>
              </div>
            </Accordion.Collapse>
          </Accordion.Item>
        </div>
        <div className="flat-toggle">
          <Accordion.Item eventKey="3rd">
            <CustomToggle eventKey="3rd">
              Free Christmas Icon Sets And Vector Elements?
            </CustomToggle>
            <Accordion.Collapse eventKey="3rd">
              <div className="toggle-content">
                <p>
                  Sed ut perspiciatis unde omnis natus error voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaque quae
                  abile invents veritatis et quasi architecto beatae vitae dicta
                </p>
              </div>
            </Accordion.Collapse>
          </Accordion.Item>
        </div>
        <div className="flat-toggle">
          <Accordion.Item eventKey="4th">
            <CustomToggle eventKey="4th">
              Better Links Websites Emails Guideline?
            </CustomToggle>
            <Accordion.Collapse eventKey="4th">
              <div className="toggle-content">
                <p>
                  Sed ut perspiciatis unde omnis natus error voluptatem
                  accusantium doloremque laudantium totam rem aperiam eaque quae
                  abile invents veritatis et quasi architecto beatae vitae dicta
                </p>
              </div>
            </Accordion.Collapse>
          </Accordion.Item>
        </div>
      </div>
    </Accordion>
  );
};
export default ProgramAccordion;
