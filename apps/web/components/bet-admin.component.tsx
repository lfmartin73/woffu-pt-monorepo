import * as React from "react";
import { useEffect, useState } from "react";
import { BetList } from "./bet-list.component";
import { BetService } from "@woffu/data/services/bet.service";
import Bet from "@woffu/data/model/bet.model";
import BetsDTO from "@woffu/data/dto/bets.dto";
import { Loading, Error } from "@woffu/ui";
import { BetEditModal } from "./bet-edit-modal.component";
import { BetViewModal } from "./bet-view-modal.component";
import { BetDeleteModal } from "./bet-delete-modal.component";

export const BetAdmin = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [bets, setBets] = useState<Bet[]>([]);
  const [bet, setBet] = useState<Bet | undefined>(undefined);

  const betService = new BetService();

  useEffect(() => {
    betService.getAll().then((betsDTO: BetsDTO) => {
      setLoading(false);
      setError("");

      if (betsDTO.error) {
        setError(betsDTO.error);
        return;
      }

      if (!betsDTO.bets) {
        setBets([]);
        setError("No bets found.");
        return;
      }

      setBets(betsDTO.bets);
    });
  }, []);

  const MODE = {
    LIST: "",
    VIEW: "view",
    EDIT: "edit",
    DELETE: "delete",
  };
  const [mode, setMode] = useState(MODE.LIST);

  //Iniciar view
  const handleView = (bet: Bet) => {
    setMode(MODE.VIEW);
    setBet(bet);
    setError("");
  };

  //Iniciar add
  const handleAdd = () => {
    setMode(MODE.EDIT);
    setBet(new Bet());
    setError("");
  };

  //Iniciar edit
  const handleEdit = (bet: Bet) => {
    setMode(MODE.EDIT);
    setBet(bet);
    setError("");
  };

  //Terminar add o edit
  const handleSave = (betUpdated: Bet) => {
    //Actulizar lista al regresar de guardar
    if (bet && !bet.id) {
      //insert
      if (betUpdated) {
        bets.push(betUpdated);
      }
    } else {
      //update
      const index = bets.findIndex((p) => bet && p.id == bet.id);
      bets[index] = betUpdated;
    }

    handleCloseModal();
  };

  //Iniciar delete
  const handleConfirmDelete = (bet: Bet) => {
    setMode(MODE.DELETE);
    setBet(bet);
  };

  //Terminar delete
  const handleDelete = (bet: Bet) => {
    if (bet && bet.id) {
      setBets(bets.filter((item) => item.id !== bet.id));
    }
    handleCloseModal;
  };

  //Cerrar cualquier modal
  const handleCloseModal = () => {
    setMode(MODE.LIST);
    setBet(undefined);
    setError("");
  };

  return (
    <>
      <div id="bet-admin">
        <h2>
          Bets <span className="lead">{bet && !bet.id ? "new" : mode}</span>
        </h2>

        {loading && <Loading loading={loading} />}

        {error && <Error text={error} />}

        {!loading && (
          <BetList
            list={bets}
            selected={bet}
            onAdd={handleAdd}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleConfirmDelete}
          />
        )}

        {mode == MODE.VIEW && bet && (
          <BetViewModal bet={bet} onClose={handleCloseModal} />
        )}

        {mode == MODE.EDIT && bet && (
          <BetEditModal
            bet={bet}
            onSave={handleSave}
            onClose={handleCloseModal}
          />
        )}

        {mode == MODE.DELETE && bet && (
          <BetDeleteModal
            bet={bet}
            onClose={handleCloseModal}
            onDelete={handleDelete}
          />
        )}
      </div>
    </>
  );
};
