import { motion } from 'framer-motion';

import styles from './Skills.module.css';

import { getSkillsList } from './config/skills';
import { RatedSkill } from '../../shared/ui';

function Skills() {
  return (
    <motion.div
      className={styles.skills}
      initial={{ opacity: 0, y: '-20px' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Основные</h3>
        <div className={styles.skillsList}>
          {getSkillsList('primary').map((skill, index) =>
            <div className={styles.skillWrapper} key={index}>
              <RatedSkill {...skill} animationDelay={0.5} />
            </div>
          )}
        </div>
      </div>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Вспомогательные</h3>
        <div className={styles.skillsList}>
          {getSkillsList('secondary').map((skill, index) =>
            <div className={styles.skillWrapper} key={index}>
              <RatedSkill {...skill} animationDelay={0.5} />
            </div>
          )}
        </div>
      </div>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Прочее</h3>
        <div className={styles.skillsList}>
          {getSkillsList('other').map((skill, index) =>
            <div className={styles.skillWrapper} key={index}>
              <RatedSkill {...skill} animationDelay={0.5} />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export { Skills };