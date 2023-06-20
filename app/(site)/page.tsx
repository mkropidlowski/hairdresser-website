import Hero from "../components/hero/page";
import Layout from "../components/layout/page";
import Navbar from "../components/navbar/page";
import styles from "./page.module.scss";

export default function Home() {
    return (
        <main className={styles.main}>
            <Navbar />
            <Layout>
                <Hero />
            </Layout>
        </main>
    );
}
