import EarningCard from "../components/EarningCard";
import ContainerView from "../components/ContainerView";
import Customers from "../components/Customers";
import ProductCardForm from "../components/ProductCardForm";
import DashboardContainer from "../components/DashboardContainer";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <EarningCard />
      <ContainerView />
      <Customers />
      <ProductCardForm />
      <div className={styles.search}>
        <img className={styles.search1Icon} alt="" src="/search-1.svg" />
        <div className={styles.search1}> <input type="text" className={styles.srch} placeholder="Search" /></div>
      </div>
      <DashboardContainer />
      <div className={styles.helloShahrukh}>Hello Shahrukh 👋🏼,</div>
    </div>
  );
};

export default Dashboard;
