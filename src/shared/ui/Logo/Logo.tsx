import styles from './Logo.module.css';

import { splitDeveloperName } from './config/data';

function Logo() {
  return (
    <div className={styles.logo}>
        <div className={styles.name}>
          {splitDeveloperName.map((letter, index) => (
            <span className={styles.letter} key={index}>{letter}</span>
          ))}
        </div>
        <span className={styles.title}>DEVELOPER</span>
      </div>
  )
}

export { Logo };