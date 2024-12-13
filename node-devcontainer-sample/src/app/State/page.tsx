"use client";

import { useState } from "react";
import Link from "next/link";
import ButtonLoader from "../components/ButtonLoader";

export default function TestPage() {
    const initialState = 0;
    const [count, setCount] = useState<number>(initialState);
    const [isLoading, setIsLoading] = useState(false);

    const startLoading = () => {
        if (!isLoading) {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
            }, 2000); // 5秒後にLoadingを終了
        }
    };

    const stopLoading = () => {
        setIsLoading(false);
    };

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Test Page with ButtonLoader</h1>
            <p>Count: {count}</p>
            <button
                onClick={() => setCount(count + 1)}
                style={{
                    padding: "10px 20px",
                    marginBottom: "20px",
                    fontSize: "16px",
                    cursor: "pointer",
                }}
            >
                Increment
            </button>
            <br />

            {/* ButtonLoader Component */}
            <ButtonLoader
                descriptionBeforeLoad="Not loading yet. Click the button!"
                descriptionLoading="Currently loading, please wait until completing..."
                isLoading={isLoading}
            />
            <br />
            <button
                onClick={startLoading}
                style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer",
                }}
            >
                Start Loading
            </button>
            <button
                onClick={stopLoading}
                style={{
                    marginTop: "20px",
                    marginLeft: "10px",
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer",
                }}
            >
                Stop Loading
            </button>
            <br />

            {/* Link to Home Page */}
            <Link href={"/"}>
                <button
                    style={{
                        marginTop: "20px",
                        padding: "10px 20px",
                        fontSize: "16px",
                        cursor: "pointer",
                    }}
                >
                    Homeに行くよ
                </button>
            </Link>
        </div>
    );
}
