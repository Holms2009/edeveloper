import { ProjectCard } from '../../entities';
import styles from './Projects.module.css';
import { projects } from './config/projects';

function Projects() {
  return (
    <div className={styles.projects}>
      {projects.map((project, index) => (
        <ProjectCard data={project} key={index} />
      ))}
    </div>
  )
}

export { Projects };