"use client";
import { createRoot } from "react-dom/client";
import "./styles.css";
import ComputerFrame from "./computerFrame";
// import { Logo } from "@pmndrs/branding";

function Overlay() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
      className="z-20"
    >
      <a
        href="https://pmnd.rs/"
        style={{ position: "absolute", bottom: 40, left: 90, fontSize: "13px" }}
      >
        pmnd.rs
        <br />
        dev collective
      </a>
      <div
        style={{ position: "absolute", top: 40, left: 40, fontSize: "13px" }}
      >
        ok —
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 40,
          right: 40,
          fontSize: "13px",
        }}
      >
        16/12/2022
      </div>
    </div>
  );
}

const Computer = () => {
  return (
    <div id="computer">
      <ComputerFrame />
      {/* <Overlay /> */}
    </div>
  );
};

export default Computer;