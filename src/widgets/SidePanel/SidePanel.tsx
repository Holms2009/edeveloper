import classNames from 'classnames';

import styles from './SidePanel.module.css';
import photo from '../../assets/img/photo_2023-01-21_23-02-21.jpg';

import { getDeveloperInfo } from './lib/developerInfo';
import { Logo, TitledField } from '../../shared/ui';

function SidePanel() {
  return (
    <div className={classNames(styles.sidePanel, 'widget')}>
      <div className={styles.top}>
        <Logo />
        <div className={styles.photoWrapper}>
          <img className={styles.photo} src={photo} alt="Фото разработчика" />
        </div>
      </div>
      <div className={styles.info}>
        {
          getDeveloperInfo().map((field, index) => (
            <TitledField {...field} key={index} />
          ))
        }
      </div>
    </div>
  )
}

export { SidePanel };