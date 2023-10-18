import styles from "./ProductCardForm.module.css";

const ProductCardForm = () => {
  return (
    <div className={styles.product}>
      <img className={styles.productChild} alt="" src="/rectangle-30.svg" />
      <div className={styles.productSell}>Product Sell</div>
      <div className={styles.inStockParent}>
        <div className={styles.inStock}>32 in stock</div>
        <div className={styles.div}>$ 45.99</div>
        <div className={styles.div1}>20</div>
        <div className={styles.abstract3dParent}>
          <div className={styles.abstract3d}>Abstract 3D</div>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <img
            className={styles.unsplashwh2fhl0vEoIcon}
            alt=""
            src="/unsplashwh2fhl0v-eo@2x.png"
          />
        </div>
      </div>
      <div className={styles.sarphensIllustrationParent}>
        <div className={styles.sarphensIllustration}>Sarphens Illustration</div>
        <div className={styles.inStock1}>32 in stock</div>
        <div className={styles.div2}>$ 45.99</div>
        <div className={styles.div3}>20</div>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <img
          className={styles.unsplashwh2fhl0vEoIcon}
          alt=""
          src="/unsplasha2j-namzag@2x.png"
        />
      </div>
      
      
      <div className={styles.frameParent}>
        <div className={styles.productNameParent}>
          <div className={styles.productName}>Product Name</div>
          <div className={styles.stock}>Stock</div>
          <div className={styles.price}>Price</div>
          <div className={styles.totalSales}>Total Sales</div>
        </div>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.search1Parent}>
        <img className={styles.search1Icon} alt="" src="/search-1.svg" />
        <div className={styles.search}>Search</div>
      </div>
      <div className={styles.last30DaysParent}>
        <div className={styles.search}>Last 30 days</div>
        <img className={styles.search1Icon} alt="" src="/chevrondown-1.svg" />
      </div>
    </div>
  );
};

export default ProductCardForm;
