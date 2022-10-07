import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { OkButton, CancelButton, Loading } from "@woffu/ui";
import BetDTO from "@woffu/data/dto/bet.dto";
import Bet from "@woffu/data/model/bet.model";
import { BetService } from "@woffu/data/services/bet.service";
import moment from "moment";

interface Props {
  bet: Bet;
  onSave: (bet: Bet) => void;
  onClose: () => void;
}

export const BetEditModal = ({ bet, onSave, onClose }: Props) => {
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  const betService = new BetService();

  const onSubmit = (data: any) => {
    //Validar datos y guardar
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      betService.save(data).then((betDTO: BetDTO) => {
        setLoading(false);
        setError("");

        if (betDTO.error) {
          setError(betDTO.error);
          return;
        }

        setShow(false);
        onSave(new Bet(betDTO.bet));
      });
    }
  };

  const handleSave = () => {};

  return (
    <>
      <Modal
        show={show}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={() => handleClose()}
      >
        <Modal.Header closeButton>
          <Modal.Title>Bet <small className="text-muted">{bet.id ? 'edit' : 'new'}</small></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loading && <Loading loading={loading} />}

          <form onSubmit={handleSubmit(onSubmit)}>
            {bet.id !== null && (
              <div className="row mb-3">
                <label className="col-sm-3 col-form-label">ID</label>
                <div className="col-sm-3">
                  <input
                    type="text"
                    className="form-control-plaintext"
                    defaultValue={bet.id}
                    readOnly
                    {...register("id")}
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
                  className={`form-control ${errors.horse ? "is-invalid" : ""}`}
                  defaultValue={bet.horse}
                  {...register("horse", { required: true, maxLength: 25 })}
                />
                {errors.horse && (
                  <span className="text-danger px-2">
                    {errors.horse.type == "required" && <small>Required</small>}
                    {errors.horse.type == "maxLength" && (
                      <small>25 chars max</small>
                    )}
                  </span>
                )}
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" htmlFor="jockey">
                Jockey
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className={`form-control ${
                    errors.jockey ? "is-invalid" : ""
                  }`}
                  defaultValue={bet.jockey}
                  {...register("jockey", { required: true, maxLength: 50 })}
                />
                {errors.jockey && (
                  <span className="text-danger px-2">
                    {errors.jockey.type == "required" && (
                      <small>Required</small>
                    )}
                    {errors.jockey.type == "maxLength" && (
                      <small>50 chars max</small>
                    )}
                  </span>
                )}
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" htmlFor="gambler">
                Gambler
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className={`form-control ${
                    errors.gambler ? "is-invalid" : ""
                  }`}
                  defaultValue={bet.gambler}
                  {...register("gambler", { required: true, maxLength: 50 })}
                />
                {errors.gambler && (
                  <span className="text-danger px-2">
                    {errors.gambler.type == "required" && (
                      <small>Required</small>
                    )}
                    {errors.gambler.type == "maxLength" && (
                      <small>50 chars max</small>
                    )}
                  </span>
                )}
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" htmlFor="betAmount">
                Amount
              </label>
              <div className="col-sm-4">
                <input
                  type="number"
                  className={`form-control ${
                    errors.betAmount ? "is-invalid" : ""
                  }`}
                  defaultValue={bet.betAmount}
                  {...register("betAmount", {
                    required: true,
                    min: 1,
                    max: 999999999,
                  })}
                />
                {errors.betAmount && (
                  <span className="text-danger px-2">
                    {errors.betAmount.type == "required" && (
                      <small>Required</small>
                    )}
                    {(errors.betAmount.type == "min" ||
                      errors.betAmount.type == "max") && (
                      <small>Number [1-999999999]</small>
                    )}
                  </span>
                )}
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-3 col-form-label" htmlFor="raceDate">
                Date
              </label>
              <div className="col-sm-4">
                <input
                  type="text"
                  className="form-control-plaintext"
                  defaultValue={moment(new Date(bet.raceDate)).format(
                    "DD/MM/YYYY"
                  )}
                  readOnly
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-sm-9 offset-sm-3">
                <span className="me-2">
                  <OkButton onClick={() => handleSave()}>
                    <span>Save</span>
                  </OkButton>
                </span>
                <CancelButton onClick={() => handleClose()}>
                  <span>Cancel</span>
                </CancelButton>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};
