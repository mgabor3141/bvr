import styles from "./BpBox.module.css";

export const BpBox = ({ bp }: { bp: string }) => (
  <div className={styles.bpbox}>
    <input className={styles.bpoutput} value={bp} readOnly />

    <span>
      <button>
        <img id="clippy" src="clippy.svg" width="16" alt="Copy to clipboard" />
        {/*<img id="tick" src="assets/tick.svg" width="16" alt="Done" />*/}
      </button>
    </span>
  </div>
);
