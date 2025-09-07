import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UseApi from "../hooks/useApi";
import "./inputOverlay.css";

function InputOverlay({ inputActive, setInputActive }) {
    const [inputValue, setInputValue] = useState("");
    const [listData, setListData] = useState([]);
    const navigate = useNavigate();

    const { response } = UseApi("https://yeddi24faktlar.vercel.app/data/api.json");
    const data = response?.data;

    // Input dəyərini dəyişmək
    const inputChange = (value) => {
        setInputValue(value);
    };

    // Data filtrləmək
    useEffect(() => {
        if (!data) return;

        const filtered = Object.values(data)
            .flat()
            .filter((item) =>
                item.title.toLowerCase().includes(inputValue.toLowerCase())
            )
            .slice(0, 5); // maksimum 5 nəticə

        setListData(filtered);
    }, [inputValue, data]);

    // Link kliklənəndə yönləndirmək
    const linkHandler = (list) => {
        setInputActive(false);
        navigate(`${list.category}/${list.id}`);
    };

    // Input Submit olduqda
    const submitHandler = (inputText) => {
        if(!inputText) return;
        setInputActive(false);
        navigate(`search/${inputText}`);
    };

    // Uyğun mətni highlight etmək
    const highlightText = (text, highlight) => {
        if (!highlight) return text;

        const regex = new RegExp(`(${highlight})`, "gi");
        const parts = text.split(regex);

        return parts.map((part, i) =>
            regex.test(part) ? (
                <span key={i} style={{ background: "yellow", color: "red" }}>
                    {part}
                </span>
            ) : (
                <span key={i}>{part}</span>
            )
        );
    };

    return (
        <>
            <div className={`${inputActive ? "input-container" : ""}`}>
                <div className="input">
                    <form
                        className="inputForm"
                        onSubmit={(e) => {
                            e.preventDefault();
                            submitHandler(e.target.elements.username.value);
                        }}>
                        <input
                            name="username"
                            type="text"
                            placeholder="Axtar..."
                            className="search-input"
                            value={inputValue}
                            onChange={(e) => inputChange(e.target.value)}
                        />
                    </form>
                </div>

                <ul className="search-list">
                    {listData?.map((list, index) => (
                        <li
                            className="search-list-group flex-row"
                            key={index}
                            onClick={() => linkHandler(list)}
                            style={{ cursor: "pointer" }}
                        >
                            <span>
                                {highlightText(list.title, inputValue)}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <div
                onClick={() => setInputActive(false)}
                className={`${inputActive ? "input-show" : ""}`}
            ></div>
        </>
    );
}

export default InputOverlay;
