import { Component } from "solid-js";
import { Modal } from "./ui-core/Modal";
import { AirportArrivals } from "./AirportArrivals";
import { ArrivalProcedure } from "~/types";

interface ProceduresDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onArrivalToggle: (arrival: ArrivalProcedure, isDisplayed: boolean) => void;
}

export const ProceduresDialog: Component<ProceduresDialogProps> = (props) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} title="Airport Procedures">
      <AirportArrivals onArrivalToggle={props.onArrivalToggle} />
    </Modal>
  );
};
