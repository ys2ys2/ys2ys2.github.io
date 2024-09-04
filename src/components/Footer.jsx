import React from "react";

const footerText = [
    // {
    //     title: "youtube",
    //     desc: "유튜브 이동하기 ( 기능 X )",
    //     link: "/",
    // },
    {
        title: "github",
        desc: "github에 오시면 더 많은 소스를 볼 수 있습니다.",
        link: "https://github.com/ys2ys2",
    },
    {
        title: "blog",
        desc: "블로그 이동하기 ( 기능 X )",
        link: "/",
    },
    {
        title: "instagram",
        desc: "제 instagram 입니다.",
        link: "https://www.instagram.com/_ys_2/",
    },
    // {
    //     title: "react",
    //     desc: "리액트로 만든 사이트를 같이 만들어 봅니다.",
    //     link: "https://github.com/webstoryboy/port2023-react",
    // },
    // {
    //     title: "vue",
    //     desc: "뷰로 만든 사이트를 같이 만들어 봅니다.",
    //     link: "https://github.com/webstoryboy/port2023-vue",
    // },
    // {
    //     title: "next",
    //     desc: "넥스트로 만든 사이트를 같이 만들어 봅니다.",
    //     link: "https://github.com/webstoryboy/port2023-next",
    // },
];




const Footer = () => {
    return (
        <footer id="footer" role="contentinfo">
            <div className="footer__inner">
                <div className="footer__text">
                    <span>ys2_ys2</span>
                    <span>© SNS</span>
                </div>
                <div className="footer__info">
                    <div className="left">
                        <div className="title">
                            <a href="/">무슨 내용을 넣을까</a>
                        </div>
                        <p>내용</p>
                    </div>
                    <div className="right">
    <h3>social</h3>
    <ul>
        {footerText.map((footer, key) => (
            <li key={key}>
                <a href={footer.link}>{footer.title}</a>
                <em>{footer.desc}</em>
            </li>
        ))}
    </ul>
</div>
                </div>
                <div className="footer__right">
                    © 2024 FORTPOLIO<br />
                    이 사이트는 리액트를 이용하여 제작하였습니다.
                </div>
            </div>
        </footer>
    );
};

export default Footer;