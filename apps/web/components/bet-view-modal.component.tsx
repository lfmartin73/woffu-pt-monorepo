import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Bet from "@woffu/data/model/bet.model";
import moment from "moment";

interface Props {
  bet: Bet;
  onClose: () => void;
}

export const BetViewModal = ({ bet, onClose }: Props) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  return (
    <>
      <Modal
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={() => handleClose()}
      >
        <Modal.Header closeButton>
          <Modal.Title>Bet view</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            {bet.id !== null && (
              <div className="row mb-3">
                <label className="col-sm-3 col-form-label">ID</label>
                <div className="col-sm-3">
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={bet.id}
                    readOnly
                    disabled
                  />
                </div>
              </div>
            )}

            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" htmlFor="horse">
                Horse
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  defaultValue={bet.horse}
                  readOnly
                  disabled
                />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" htmlFor="jockey">
                Jockey
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  defaultValue={bet.jockey}
                  readOnly
                  disabled
                />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" htmlFor="gambler">
                Gambler
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className={"form-control"}
                  defaultValue={bet.gambler}
                  readOnly
                  disabled
                />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" htmlFor="betAmount">
                Amount
              </label>
              <div className="col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  defaultValue={bet.betAmount}
                  readOnly
                  disabled
                />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" htmlFor="raceDate">
                Date
              </label>
              <div className="col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  defaultValue={moment(new Date(bet.raceDate)).format(
                    "DD/MM/YYYY"
                  )}
                  readOnly
                  disabled
                />
              </div>
            </div>
            
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};
