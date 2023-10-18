import styles from "./ContainerView.module.css";

const ContainerView = () => {
  return (
    <div className={styles.overview}>
      <img className={styles.overviewChild} alt="" src="/rectangle-16.svg" />
      <div className={styles.quarterlyParent}>
        <div className={styles.quarterly}>Quarterly</div>
        <img
          className={styles.chevronDown1Icon}
          alt=""
          src="/chevrondown-1.svg"
        />
      </div>
      <div className={styles.overview1}>Overview</div>
      <div className={styles.monthlyEarning}>Monthly Earning</div>
      <div className={styles.jan}>Jan</div>
      <div className={styles.feb}>Feb</div>
      <div className={styles.mar}>Mar</div>
      <div className={styles.apr}>Apr</div>
      <div className={styles.may}>May</div>
      <div className={styles.jun}>Jun</div>
      <div className={styles.jul}>Jul</div>
      <b className={styles.aug}>Aug</b>
      <div className={styles.sep}>Sep</div>
      <div className={styles.oct}>Oct</div>
      <div className={styles.nov}>Nov</div>
      <div className={styles.dec}>Dec</div>
      <div className={styles.overviewItem} />
      <div className={styles.overviewInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.overviewChild1} />
      <div className={styles.overviewChild2} />
      <div className={styles.overviewChild3} />
      <div className={styles.overviewChild4} />
      <div className={styles.overviewChild5} />
      <div className={styles.overviewChild6} />
      <div className={styles.overviewChild7} />
      <div className={styles.overviewChild8} />
      <div className={styles.overviewChild9} />
    </div>
  );
};

export default ContainerView;
