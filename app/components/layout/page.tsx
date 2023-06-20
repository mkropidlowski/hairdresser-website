import style from "./page.module.scss";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return <section className={style.wrapper}>{children}</section>;
};

export default Layout;
