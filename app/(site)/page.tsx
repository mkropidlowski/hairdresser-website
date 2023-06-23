import Hero from "../components/hero/page";
import Layout from "../components/layout/page";
import Navbar from "../components/navbar/page";
import Sections from "../components/sections/page";
import { SectionsContent } from "../config/sections/data";
import styles from "./page.module.scss";

export default function Home() {
    return (
        <main className={styles.main}>
            <Navbar />
            <Layout>
                <Hero />
            </Layout>
            {SectionsContent.map(({ ...props }) => (
                <Sections key={props.id} {...props} />
            ))}
        </main>
    );
}
