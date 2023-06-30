import { TitledField } from '../../shared/ui';
import styles from './ProjectCard.module.css';

type TProjectCardProps = {
  data: TProject;
}

function ProjectCard({ data }: TProjectCardProps) {
  return (
    <a className={styles.projectCard} href={data.link} target="_blank" rel="noreferrer noopener">
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={data.img} />
      </div>
      <div className={styles.main}>
        <h2 className={styles.title}>{data.name}</h2>
        <p className={styles.description}>{data.description}</p>
        <TitledField title="Стэк" text={data.stack.join(', ')} />
      </div>
    </a>
  )
}

export { ProjectCard };