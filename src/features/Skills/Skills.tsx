import styles from './Skills.module.css';

import { getSkillsList } from './config/skills';
import { RatedSkill } from '../../shared/ui';

function Skills() {
  return (
    <div className={styles.skills}>
      {getSkillsList().map((skill, index) =>
        <div className={styles.skillWrapper} key={index}>
          <RatedSkill {...skill} />
        </div>
      )}
    </div>
  )
}

export { Skills };