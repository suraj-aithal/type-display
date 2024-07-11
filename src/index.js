import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = () => {
    const [data, setData] = useState("");
    const [ans, setAns] = useState("");

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="border-4 p-4 bg-red-300 h-100 text-3xl">
                <h1 className="text-center">Typewriter Effect</h1>
            </div>
            <div className="mt-20 flex items-center">
                <input
                    className="border-4 w-56 p-2"
                    value={data}
                    onChange={(e) => {
                        setData(e.target.value);
                    }}
                    type="text"
                    placeholder="Enter"
                />
                <button
                    className="border-4 p-2 ml-2"
                    onClick={() => {
                        setAns(data);
                        setData("");
                    }}
                >
                    Enter
                </button>
            </div>

            <h1 className="mt-4">You have typed: {ans}</h1>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Header />, rootElement);
