import React from "react";

const skillText = [
    {
      title: "이제 막 알을 깨고 나왔어요!🐣",
      desc: "2024.06 ~ 자바(JAVA)활용 데이터 플랫폼 구축 풀스택 개발자 과정을 배우고 있는 병아리 개발자 입니다!",
    },
    {
      title: "모르는 게 생기면 일단 검색하는 게 특기에요!🔎 속도와 정확도는 필수!",
      desc: (
        <>
          <p>
            어렸을 때부터 호기심과 궁금증이 많아서 이것저것 찾아보는 것을 좋아했습니다.<br/>
            중ㆍ고등학교 때는 이런 특기를 잘 살려서 좋은 경험들을 할 수 있었습니다!
            <br />
            지금까지도 모르는 게 있으면 일단 검색하는 게 습관이 되었습니다!
            <br/>
            <img src="/prize.JPG" alt="상훈" />
         </p>
          
        </>
      ),
    }, 
    {
      title: "무엇이든 배울 준비가 되어있어요!📚",
      desc: "아무리 어려운 일도 열심히 배우면 해결할 수 있다고 생각합니다!",
    },
];



const Skill = () => {
    return (
        <section id="Introduction">
            <div className="skill__inner">
                <h2 className="skill__title">
                Introduction<em></em>
                </h2>
                <div className="skill__desc">
                    {skillText.map((skill, key) => (
                        <div key={key}>
                            <span>{key + 1}.</span>
                            <h3>{skill.title}</h3>
                            <p>{skill.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;