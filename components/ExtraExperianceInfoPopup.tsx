import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CSSTransition } from "react-transition-group";

const Modal = (props: {
  data: {
    date: string;
    work: string | null;
  }[];
  isOpen: boolean;
  setIsOpen: any;
}) => {
  return (
    <CSSTransition
      in={props.isOpen}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={() => props.setIsOpen(false)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-heading bg-purple white-font">
            <h3>Title</h3>
            <AiOutlineCloseCircle
              className="pointer"
              style={{ fontSize: "30px" }}
              onClick={() => props.setIsOpen(false)}
            />
          </div>
          <div className="modal-body purple-font">
            {props.data
              .map((item, index) => (
                <div
                  className="modal-body-item"
                  key={`modal-body-item-index:${index}`}
                >
                  <p className="h2-font border-bottom-purple border-fit-content mb-5px">
                    {item.date}
                  </p>
                  <p>
                    {item.work ? (
                      item.work
                        .split("\n")
                        .map((workItem, workIndex) => (
                          <li key={`modal-body-work-item-index:${workIndex}`}>
                            {workItem}
                          </li>
                        ))
                    ) : (
                      <div className="red-font">No work on this day</div>
                    )}
                  </p>
                </div>
              ))
              .reverse()}
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

const ExtraExperianceInfoPopup = (props: {
  isCompleted: boolean;
  extraData: { date: string; work: string | null }[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {props.isCompleted && (
        <>
          <p className="project-card-link" onClick={() => setIsOpen(true)}>
            View Details
          </p>
          <Modal data={props.extraData} isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
      )}
    </div>
  );
};

export default ExtraExperianceInfoPopup;
