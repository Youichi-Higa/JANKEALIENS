import styles from "../styles/Home.module.css";

export const MetamaskConnectButton = (props) => {
  const { isAccount, onclick } = props;
  return (
    <div>
      {isAccount ? (
        <button className={styles.button}>ユーザー名</button>
      ) : (
        <button className={styles.button} onClick={onclick}>
          Wallet
        </button>
      )}
    </div>
  );
};
