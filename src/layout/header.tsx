import logo from "~/logo.png";
import css from "./header.module.css";

export default () => {
  return (
    <>
      <div class="header w-full">
        <img class="logo" src={logo}></img>
      </div>
    </>
  );
};
