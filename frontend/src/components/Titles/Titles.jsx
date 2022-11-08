import styles from "../../styles/Titles/Titles.module.scss";

const Title = ({children}) => {
  return (
    <div className={styles.titles}>
        <h2>{children}</h2>
    </div>
  )
}

export  {Title}