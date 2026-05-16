import styles from './CardStatus.module.css'
function CardStatus({counter , title,icon}){
return(
    <>
                <div className={`${styles.cardStatus} d-flex align-items-center `}>
          <div className= {`${styles.icon} w-100 d-flex align-items-center justify-content-center`} >
                  <i className={icon} style={{color: "var(--main-color);"}}></i>
                </div>
                <div className={`${styles.info} w-100 d-flex flex-column align-items-center gap-2`}>
                  <span className= {`${styles.counter}`} >{counter}</span>
                  <span className={`${styles.title}`}>{title}</span>
                </div>
            </div>
    </>
)

}
export default CardStatus