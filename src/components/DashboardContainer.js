import styles from "./DashboardContainer.module.css";

const DashboardContainer = () => {

  return (
    <div className={styles.sideMenu}>
      <div className={styles.sideMenuChild} />
      <div className={styles.listMenu}>
        
        <div className={styles.dashboard}><button><img className={styles.icon24OutlineKeySqua} alt="" src="/icon--24--outline--keysquare.svg" />&nbsp;&nbsp;Dashboard</button> </div>
      </div>
      <div className={styles.listMenu1}>
        
        <div className={styles.product}><button><img className={styles.dSquare1Icon} alt="" src="/3dsquare-1.svg" />&nbsp;&nbsp;&nbsp;Product<img className={styles.chevronRight2Icon}  alt="" src="/chevronright-2.svg" /></button> </div>
        
      </div>
      <div className={styles.listMenu2}>
        
        <div className={styles.product}><button><img className={styles.dSquare1Icon} alt="" src="/usersquare-1.svg" />&nbsp;&nbsp;&nbsp;Customers<img className={styles.chevronRight2Icon} alt="" src="/chevronright-2.svg" /></button> </div>
        
      </div>
      <div className={styles.listMenu3}>
        
        <div className={styles.product}><button><img className={styles.dSquare1Icon} alt="" src="/walletmoney-2.svg" />&nbsp;&nbsp;&nbsp;Income<img className={styles.chevronRight2Icon} alt="" src="/chevronright-2.svg" /></button> </div>
        
      </div>
      <div className={styles.listMenu4}>
        
        <div className={styles.product}><button><img className={styles.dSquare1Icon} alt="" src="/discountshape-1.svg" />&nbsp;&nbsp;&nbsp;Promote<img className={styles.chevronRight2Icon} alt="" src="/chevronright-2.svg" /></button> </div>
        
      </div>
      <div className={styles.listMenu5}>
        
        <div className={styles.product}><button><img className={styles.dSquare1Icon} alt="" src="/messagequestion-1.svg" />&nbsp;&nbsp;&nbsp;Help<img className={styles.chevronRight2Icon} alt="" src="/chevronright-2.svg" /></button> </div>
        
      </div>
      <img className={styles.sideMenuItem} alt="" src="/ellipse-8@2x.png" />
      <div className={styles.evanoParent}>
        <div className={styles.evano}>Evano</div>
        <div className={styles.projectManager}>Project Manager</div>
      </div>
      <img
        className={styles.chevronDown2Icon}
        alt=""
        src="/chevrondown-2.svg"
      />
      <div className={styles.setting1Parent}>
        <img className={styles.setting1Icon} alt="" src="/setting-1.svg" />
        <div className={styles.getProNow}>Dashboard</div>
      </div>
    </div>
  );
};

export default DashboardContainer;
