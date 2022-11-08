import MainContainer from "../components/Containers/MainContainer";
import Searchbar from "../components/homeComponents/Searchbar";
import { Title } from "../components/Titles/Titles";
import CategoryCard from "../components/Cards/CategoryCard";
import TransactionCard from "../components/Cards/TransactionCard";

import styles from "../styles/homeComponents/Home.module.scss"

const Home = () => {
  return (
    <MainContainer optionClass={styles.container}>
        <div className={styles.main}>
            {/* search bar */}
            <div className={styles.searchbar}>
                <Searchbar/>
            </div>

            {/* categories */}
            <div className={styles.categories}>
                <Title>Categories Last 30 days</Title>
                <div className={styles.content}>
                 {/* ctgs */}
                 <CategoryCard />
                 <CategoryCard /> 
                 <CategoryCard />
                 <CategoryCard />
                </div>
            </div>

            {/* transactions */}
            <div className={styles.transactions}>
             <Title>Latest Transactions</Title>
             <div className={styles.content}>
             <TransactionCard/>
             <TransactionCard/>
             <TransactionCard/>
             <TransactionCard/>

             </div>
            </div>
        </div>
    </MainContainer>
  )
};

export default Home