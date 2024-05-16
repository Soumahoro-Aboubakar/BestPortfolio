import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/globe.png",
      title: "Web Design",
      desc:
        "Explore the fusionary elegance of CSS, JavaScript, and HTML, redefining web development with power and creativity. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Framework Used",
      desc:
        "Explore the fusionary elegance of React.js and SASS, redefining web development with power and creativity.",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThm--WaKDR8ELk6lcs_zT43F_c43EAabstcAW9rYIZhrLQ2khv8GPjFxReFS-862J4P1A&usqp=CAU",
    },
    {
      id: "3",
      icon: "./assets/mobile.png",
      title: "Mobile dev",
      desc:
        "Discover the seamless innovation of React Native, powered by Expo, redefining mobile development with versatility and ingenuity.",
      img:
        "data:image/png;base64,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",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
