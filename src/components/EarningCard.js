import styles from "./EarningCard.module.css";

const EarningCard = () => {
  return (
    <div className={styles.earning}>
      <img className={styles.earningChild} alt="" src="/rectangle-15.svg" />
      <div className={styles.ordersParent}>
        <div className={styles.orders}>Orders</div>
        <div className={styles.k}>$2.4k</div>
        <div className={styles.frameChild} />
        <img className={styles.arrowUp2Icon} alt="" src="/arrowup-13.svg" />
        <img className={styles.regularDocumentIcon} alt="" src="/regular-document@2x.png"/>
        <div className={styles.thisWeek}>
          <b>2%</b>
          <span className={styles.thisWeek1}> this week</span>

        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.earningParent}>
          <div className={styles.earning1}>Earning</div>
          <div className={styles.k1}>$198k</div>
          <img className={styles.frameItem} alt="" src="/group-10.svg" />
          <div className={styles.arrowUp1Parent}>
            <img className={styles.arrowUp1Icon} alt="" src="/arrowup-1.svg" />
            <div className={styles.thisMonth}>
              <b>37.8%</b>
              <span className={styles.thisWeek1}> this month</span>
            </div>
          </div>
        </div>
        <div className={styles.balanceParent}>
          <div className={styles.balance}>Balance</div>
          <div className={styles.k2}>$2.4k</div>
          <img className={styles.frameInner} alt="" src="/group-101.svg" />
          <div className={styles.arrowUp1Group}>
            <img
              className={styles.arrowUp1Icon1}
              alt=""
              src="/arrowup-11.svg"
            />
            <div className={styles.thisMonth2}>
              <b>2%</b>
              <span className={styles.thisWeek1}> this month</span>
            </div>
          </div>
        </div>
        <div className={styles.totalSalesParent}>
          <div className={styles.totalSales}>Total Sales</div>
          <div className={styles.k3}>$89k</div>
          <img className={styles.groupIcon} alt="" src="/group-102.svg" />
          <div className={styles.arrowUp1Container}>
            <img
              className={styles.arrowUp1Icon2}
              alt=""
              src="/arrowup-12.svg"
            />
            <div className={styles.thisWeek2}>
              <b>11%</b>
              <span className={styles.thisWeek1}> this week</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningCard;
