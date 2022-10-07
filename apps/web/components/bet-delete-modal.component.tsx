import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { ModalBody, ModalFooter } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import {
  Loading,
  OutlineDangerButton,
  OutlineSecondaryButton,
  Error,
} from "@woffu/ui";
import BetDTO from "@woffu/data/dto/bet.dto";
import Bet from "@woffu/data/model/bet.model";
import { BetService } from "@woffu/data/services/bet.service";

interface Props {
  bet: Bet;
  onClose: () => void;
  onDelete: (bet: Bet) => void;
}

export const BetDeleteModal = ({ bet, onClose, onDelete }: Props) => {
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  const betService = new BetService();

  const handleDelete = () => {
    setLoading(true);
    setError("");

    //LLamar servicio delete
    if (bet && bet.id) {
      betService.delete(bet).then((betDTO: BetDTO) => {
        setLoading(false);

        if (betDTO.error) {
          setError(betDTO.error);
          return;
        }
      });
    }

    handleClose();
    //Llamar metodo de padre para actualizar lista
    onDelete(bet);
  };

  return (
    <>
      <Modal
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose}
      >
        <Loading loading={loading}></Loading>
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="mt-2">
              <FontAwesomeIcon
                icon={["fas", "circle-question"]}
                color={"red"}
                size={"2x"}
                className="me-2"
              />
              Do you really want to delete this Bet?
            </h5>
          </Modal.Title>
        </Modal.Header>
        <ModalFooter>
          <div className="text-center">
            <span className="me-2">
              <OutlineDangerButton onClick={() => handleDelete()}>
                <span>Yes</span>
              </OutlineDangerButton>
            </span>
            <OutlineSecondaryButton onClick={handleClose}>
              <span>No</span>
            </OutlineSecondaryButton>
          </div>

          {error && <Error text={error}></Error>}
        </ModalFooter>
      </Modal>
    </>
  );
};
