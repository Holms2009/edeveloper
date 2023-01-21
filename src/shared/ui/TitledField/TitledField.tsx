import styles from './TitledField.module.css';

type Props = {
  title: string;
  text: string;
}

function TitledField({ title, text }: Props) {
  return (
    <div className={styles.titledField}>
      <span className={styles.title}>{title}</span>
      <span className={styles.text}>{text}</span>
    </div>
  )
}

export { TitledField };