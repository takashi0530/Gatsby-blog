import React from "react";

import Header from "./Header";
import "minireset.css";
import "fontsource-fira-sans/700-italic.css";
import * as styles from "./Layout.module.css";
import SideSection from "./SideSection";

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle={`Nisshing Blog`} />
      <div className={styles.container}>
        <main className={styles.mainPane}>{children}</main>
        <aside className={styles.sidePane}>
          <SideSection title="Profile">
            <div className={styles.profileText}>
              大阪でWEBサービスを開発しているバックエンドエンジニア。
              PHPやLaravelを使った開発が得意。
            </div>
          </SideSection>
        </aside>
      </div>
      <footer className={styles.footer}>
        © {new Date().getFullYear()},
        {` `}
          Nisshing Blog
      </footer>
    </>
  );
};

export default Layout;
