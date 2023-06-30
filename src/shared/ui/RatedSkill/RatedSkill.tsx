import { motion } from 'framer-motion';

import styles from './RatedSkill.module.css';

type Props = {
  title: string;
  rating: number;
  animationDelay?: number; 
}

function RatedSkill({ title, rating, animationDelay = 0 }: Props) {
  return (
    <div className={styles.ratedSkill}>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.ratingWrapper}>
        <motion.div
          className={styles.rating}
          initial={{ width: 0 }}
          animate={{ width: `${rating}%` }}
          transition={{ duration: 1, delay: animationDelay, ease: 'anticipate' }}
        />
      </div>
    </div>
  )
}

export { RatedSkill };