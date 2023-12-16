import { useRef, useEffect, useState } from "react";
import "../assets/Styles/introduction.css";
import "../assets/Styles/loaders.css";
import "../assets/Styles/general.css";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import rgaImg from "../assets/Images/rga.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(TextPlugin);

function Introduction() {
  const navigate = useNavigate();
  const textRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timerId);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      tl.to(textRef.current, {
        duration: 1,
        text: "Frontend Developer",
        ease: "power2.out",
      })
        .to(textRef.current, {
          duration: 3,
          text: "Frontend Developer",
          ease: "power2.out",
        })
        .to(textRef.current, {
          duration: 1,
          text: "Web Designer",
          ease: "power2.out",
        })
        .to(textRef.current, {
          duration: 3,
          text: "Web Designer",
          ease: "power2.out",
        });
      return () => tl.kill();
    }
  }, [isLoading]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

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
      <div
        className="text-center"
        style={{ marginTop: "100px" }}
        data-aos="fade-up"
      >
        <img className="img-hero" src={rgaImg} alt="ini gambar" />
        <p className="text-prof-1">
          Hello, my name is Raihan Goldy Azzali, and im a{" "}
          <span className="text-prof" ref={textRef}></span>
        </p>
        <h1 className="mb-3">Let`s get to know me better</h1>
      </div>

      <div
        className="menu-bar d-flex justify-content-center align-items-center"
        data-aos="fade-up"
      >
        <div className="row ">
          <div className="col ">
            <button className="btn btn-lg btn-outline-success rounded" onClick={()=> navigate('/about')}>
              About Me
            </button>
          </div>
          <div className="col ">
            <button className="btn btn-lg btn-outline-success rounded">
              My Experince
            </button>
          </div>
          <div className="col ">
            <button className="btn btn-lg btn-outline-success rounded">
              My Project
            </button>{" "}
          </div>
          <div className="col ">
            <button className="btn btn-lg btn-outline-success rounded">
              My Contact
            </button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduction;
