import React, {useEffect} from "react";
import about from "../assets/img/about.jpg";


const introText = {
  title: "Full Stack developer",
  desc: ["JIN YOUNG SIN", "Full-Stack", "PORTFOLIO"],
};


const Intro = () => {

    //별 추가 ~
    useEffect(() => {
        const stars = document.querySelectorAll('.star');
        stars.forEach(star => {
          const x = Math.random() * 100;  // 0에서 100 사이의 랜덤 값 (vh)
          const y = Math.random() * 100;  // 0에서 100 사이의 랜덤 값 (vh)
          star.style.top = `${y}vh`;
          star.style.left = `${x}vw`;
    
          // 애니메이션 지연 시간과 지속 시간을 무작위로 설정
          const delay = Math.random() * 6; // 최대 6초 지연
          const duration = Math.random() * 2 + 3; // 2초에서 6초 사이의 지속 시간
    
          star.style.animationDelay = `${delay}s`;
          star.style.animationDuration = `${duration}s`;
        });
      }, []);


  return (
      <section id="intro">
          <div className="intro__inner">
          <div className="stars">
          {[...Array(200)].map((_, i) => (
            <div key={i} className="star"></div>
            ))}
            </div>
              <h1 className="intro__title">{introText.title}</h1>
              <div className="intro__text">
              <div className="stars">
          {[...Array(200)].map((_, i) => (
            <div key={i} className="star"></div>
            ))}
            </div>
                  <div className="text">
                      <div>{introText.desc[0]}</div>
                      <div>{introText.desc[1]}</div>
                      <div>{introText.desc[2]}</div>
                  </div>
                  <div className="img">
                      <img src={about} alt="어바웃" />
                  </div>
              </div>
              <div className="intro__lines bottom" aria-hidden="true">
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
              </div>
          </div>
      </section>
  );
};

export default Intro;
