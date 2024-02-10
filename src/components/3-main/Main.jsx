import "./main.css";

export default function Main() {
    return (
        <main className="flex">
        <section className="flex left-section">
            <button className="active">All projects</button>
            <button>HTML & CSS</button>
            <button>Javascript</button>
            <button>React</button>
            <button>Laravel</button>
        </section>

        <section className="right-section flex">
            {["aa", "bb", "cc"].map((item) => {
                return (
                    <article key={item} className="card">
                    <img width={278} src="./1.jpg" alt="" />
                    
                    <div style={{ width: "266px" }} className="box">
                        <h1 className="title">Loading page 2</h1>
                        <p className="sub-title">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                        dignissimos.
                        </p>
                        <div className="flex icons">
                                <div className="flex" style={{ gap: "11px" }}>
                                    <div className="icon-link"></div>
                                    <div className="icon-github"></div>
                                </div>
                        <a href="">
                            more
                            <span style={{ alignSelf: "end" }} className="icon-arrow-right"></span>
                        </a>
                        </div>
                    </div>
                    </article>
                )
            })}
        </section>
        </main>
    );
}
