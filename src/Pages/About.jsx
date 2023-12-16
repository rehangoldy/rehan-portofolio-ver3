import { useEffect, useState } from "react";
import "../assets/Styles/general.css";

import Rehan from "../assets/Images/rehan.jfif";
import  Navbar  from "../Components/Navbar";

function About() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timerId);
  }, [isLoading]);

  if (isLoading) {
    return (
      <div
        className="spinner align-item-center justify-content-center d-flex container"
        style={{ marginTop: "400px" }}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
  return (
    <>
    <Navbar/>
      <img
        src={Rehan}
        alt=""
        className="rehan-img rounded"
        style={{ width: "100px" }}
      />
      <h1>ini adalah aboutme</h1>
    </>
  );
}

export default About;
