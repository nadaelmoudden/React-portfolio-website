import { useState } from "react";
import "./header.css";

export default function Header() {
    const [showModal, setShowModal] = useState(false);
    return (
        <header className="flex">
        <button className="menu icon-menu flex" onClick={() => {
            setShowModal(!showModal);
        }}></button>
        <div />
        <nav>
            <ul className="flex">
            <li>
                <a href="">About</a>
            </li>
            <li>
                <a href="">Articles</a>
            </li>
            <li>
                <a href="">Projects</a>
            </li>
            <li>
                <a href="">Speaking</a>
            </li>
            <li>
                <a href="">Contact</a>
            </li>
            </ul>
        </nav>
        <button className="mode flex">
            <span className="icon-moon-o"></span>
        </button>

        {showModal && (
                    <div className="fixed">
                    <div>
                    <ul className="model">
                        <li>
                            <button className="icon-close" onClick={() => {
                                setShowModal(false)
                            }}  />
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Articles</a>
                        </li>
                        <li>
                            <a href="">Projects</a>
                        </li>
                        <li>
                            <a href="">Speaking</a>
                        </li>
                        <li>
                            <a href="">Uses</a>
                        </li>
                    </ul>
                    </div>
                </div>
        )}
        </header>
    );
}
