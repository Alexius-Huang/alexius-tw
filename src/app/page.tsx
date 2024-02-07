import styles from './page.module.scss';

export default function Home() {
    return (
        <main className={styles.main}>
            <h1 style={{ color: styles.primaryColor }}>Hello</h1>
        </main>
    );
}
