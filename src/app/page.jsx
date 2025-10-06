import ClientPage from "./_components/ClientPage";
import ItemCardClient from "./_components/item/ItemCardClient";
import styles from "./page.module.css";

export default function Home() {
  return (
    
    <div className={styles.page}>
      <ClientPage />
      {/* <ItemCardClient /> */}
    </div>

  );
}
