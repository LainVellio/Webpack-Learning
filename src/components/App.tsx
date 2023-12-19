import jpgImg from "@/assets/example.jpg";
import pngImg from "@/assets/example.png";
import SvgImg from "@/assets/example.svg";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import s from "./App.module.scss";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div data-testid="App">
      <h3 data-testid="platform">Platform={__PLATFORM__}</h3>
      <Link to={"/about"}>About</Link>
      <br />
      <Link to={"/shop"}>Shop</Link>
      <br />
      <div className={s.value}>{count}</div>
      <button
        className={s.buttonPlus}
        type="button"
        onClick={() => setCount((prev) => prev + 1)}
      >
        <span>+</span>
      </button>
      <button
        className={s.buttonMinus}
        type="button"
        onClick={() => setCount((prev) => prev - 1)}
      >
        <span>-</span>
      </button>

      <button
        className={s.buttonMinus}
        type="button"
        onClick={() => {
          throw new Error("Test error");
        }}
      >
        <span>Test Error</span>
      </button>

      <div>
        <img width={100} src={jpgImg} alt="jpg" />
        <img width={100} src={pngImg} alt="png" />
        <SvgImg style={{ color: "red" }} width={100} />
      </div>

      <Outlet />
    </div>
  );
};
