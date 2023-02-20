import styles from './RatedSkill.module.css';

type Props = {
  title: string;
  rating: number;
}

function RatedSkill({ title, rating }: Props) {
  return (
    <div className={styles.ratedSkill}>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.ratingWrapper}>
        <div className={styles.rating} style={{width: `${rating}%`}}></div>
      </div>
    </div>
  )
}

export { RatedSkill };