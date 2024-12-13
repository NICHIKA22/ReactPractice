'use client'

import Link from "next/link";
import { useState } from "react";

import styles from "../page.module.css";
import { ChildComponent } from "@/components/ChildComponent";

export default function Simple() {
  
  const initialState = 0;
  const [count, setCount] = useState<number>(initialState);
  const [testValue, setTestValue] = useState<string>('');
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Simple Page</h1>
        <Link href="./simple/simple2" className={styles.primary}>
          simple2へ
        </Link>
        <Link href="/" className={styles.primary}>
          Homeに戻る
        </Link>
        <p>Count {count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
        <label htmlFor="testInput">Test Value:</label>
          <input
            type="text"
            id="testInput"
            value={testValue}
            onChange={(e) => setTestValue(e.target.value)}
          />
        <ChildComponent testValue={testValue} testNumber={count} />
      </main>
    </div>
  );
}