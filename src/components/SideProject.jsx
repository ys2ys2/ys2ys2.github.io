import React, {useEffect, useRef} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


// import port01 from "../assets/img/port01.jpg";
// import port02 from "../assets/img/port02.jpg";
// import port03 from "../assets/img/port03.jpg";
// import port04 from "../assets/img/port04.jpg";
// import port05 from "../assets/img/port05.jpg";
// import port06 from "../assets/img/port06.jpg";
// import port07 from "../assets/img/port07.jpg";
// import port08 from "../assets/img/port08.jpg";
// import port09 from "../assets/img/port09.jpg";
// import port10 from "../assets/img/port10.jpg";

const portText = [
    {
        num: "01",
        title: "사이드 프로젝트_01",
        desc: "빨리 채우고 싶어요",
        code: "https://ys2ys2.github.io/",
        view: "https://ys2ys2.github.io/",
        name: "포트폴리오 이미지(마우스 hover 효과)",
    },
    {
        num: "02",
        title: "사이드 프로젝트_02",
        desc: "빨리 채우고 싶어요22",
        code: "https://ys2ys2.github.io/",
        view: "https://ys2ys2.github.io/",
        name: "포트폴리오 이미지(마우스 hover 효과)",
    },
    {
        num: "03",
        title: "사이드 프로젝트_03",
        desc: "빨리 채우고 싶어요33",
        code: "https://ys2ys2.github.io/",
        view: "https://ys2ys2.github.io/",
        name: "포트폴리오 이미지(마우스 hover 효과)",
    },
    {
        num: "04",
        title: "사이드 프로젝트_04",
        desc: "빨리 채우고 싶어요44",
        code: "https://ys2ys2.github.io/",
        view: "https://ys2ys2.github.io/",
        name: "포트폴리오 이미지(마우스 hover 효과)",
    },
    {
        num: "05",
        title: "사이드 프로젝트_05",
        desc: "빨리 채우고 싶어요55",
        code: "https://ys2ys2.github.io/",
        view: "https://ys2ys2.github.io/",
        name: "포트폴리오 이미지(마우스 hover 효과)",
    },
    {
        num: "06",
        title: "사이드 프로젝트_06",
        desc: "빨리 채우고 싶어요66",
        code: "https://ys2ys2.github.io/",
        view: "https://ys2ys2.github.io/",
        name: "포트폴리오 이미지(마우스 hover 효과)",
    },
    {
        num: "07",
        title: "사이드 프로젝트_07",
        desc: "빨리 채우고 싶어요77",
        code: "https://ys2ys2.github.io/",
        view: "https://ys2ys2.github.io/",
        name: "포트폴리오 이미지(마우스 hover 효과)",
    },
    {
        num: "08",
        title: "사이드 프로젝트_08",
        desc: "빨리 채우고 싶어요88",
        code: "https://ys2ys2.github.io/",
        view: "https://ys2ys2.github.io/",
        name: "포트폴리오 이미지(마우스 hover 효과)",
    },
    {
        num: "09",
        title: "사이드 프로젝트_09",
        desc: "빨리 채우고 싶어요99",
        code: "https://ys2ys2.github.io/",
        view: "https://ys2ys2.github.io/",
        name: "포트폴리오 이미지(마우스 hover 효과)",
    },
    {
        num: "10",
        title: "사이드 프로젝트_10",
        desc: "빨리 채우고 싶어요10",
        code: "https://ys2ys2.github.io/",
        view: "https://ys2ys2.github.io/",
        name: "포트폴리오 이미지(마우스 hover 효과)",
    },
];


const Port = () => {
    const horizontalRef = useRef(null);
    const sectionsRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const horizontal = horizontalRef.current;
        const sections = sectionsRef.current;

        let totalWidth = sections.reduce((acc, section)=> acc + section.offsetWidth, 0);
    
        let scrollTween = gsap.to(sections, {
            xPercent: -95 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
            trigger: horizontal,
            start: "top 56px",
            end: () => "+=" + (totalWidth - horizontal.offsetWidth),
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            },
        });
    
        return () => {
            scrollTween.kill();
        };
    }, []);

    return (
        <section id="port" ref={horizontalRef}>
            <div className="port__inner">
                <div className="port__title">
                    sideportfolio <em>사이드 프로젝트</em>
                </div>
                <div className="port__wrap">
                    {portText.map((port, key) => (
                        <article
                        className={`port__item p${key + 1}`}
                        key={key}
                        ref={(el)=>(sectionsRef.current[key] =el)
                        }>
                            <span className="num">{port.num}.</span>
                            <a href={port.code} target="_blank" className="img" rel="noreferrer">
                                <img src={port.img} alt={port.name} />
                            </a>
                            <h3 className="title">{port.title}</h3>
                            <p className="desc">{port.desc}</p>
                            <a href={port.view} target="_blank" className="site" rel="noreferrer">사이트 보기</a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Port;