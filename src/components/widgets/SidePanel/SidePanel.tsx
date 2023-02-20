import classNames from 'classnames';

import styles from './SidePanel.module.css';

import { getDeveloperInfo } from './lib/developerInfo';
import { getMenuItems } from './lib/menuItems';
import photo from '../../../assets/img/photo_2023-01-21_23-02-21.jpg';
import { Logo, TitledField } from '../../../shared/ui';

type Props = {
  onItemClick: (tab: TTabs) => void;
}

function SidePanel({ onItemClick }: Props) {
  return (
    <div className={classNames(styles.sidePanel, 'widget')}>
      <Logo />
      <div className={styles.photoWrapper}>
        <img className={styles.photo} src={photo} alt="Фото разработчика" />
      </div>
      <div className={styles.info}>
        {
          getDeveloperInfo().map((field, index) => (
            <TitledField {...field} key={index} />
          ))
        }
      </div>
      <nav className={styles.menuList}>
        {
          getMenuItems().map((item, index) => (
            <div
              className={styles.menuItem}
              onClick={() => onItemClick(item.tab)}
              key={index}
            >
              <span className={styles.itemTitle}>{item.title}</span>
            </div>
          ))
        }
      </nav>
    </div>
  )
}

export { SidePanel };