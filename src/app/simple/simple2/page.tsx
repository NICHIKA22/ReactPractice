import Link from "next/link";

import styles from "../../page.module.css";

export default function Simple() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Simple Page2</h1>
        <Link href="../" className={styles.primary}>
          Homeに戻る
        </Link>
      </main>
    </div>
  );
}