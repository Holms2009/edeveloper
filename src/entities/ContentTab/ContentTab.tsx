import classNames from 'classnames';
import { Dispatch, ReactNode, SetStateAction } from 'react';

import styles from './ContentTab.module.css';

type Props = {
  name: TTabs;
  title: string;
  isActive: boolean;
  onClick: Dispatch<SetStateAction<TTabs>>;
  children: ReactNode;
}

function ContentTab({ name, title, isActive, children, onClick }: Props) {
  return (
    <div className={classNames(styles.tab, 'widget', { [styles.tab_closed]: !isActive, [styles.tab_opened]: isActive })}>
      <div className={styles.titleWrapper} onClick={() => onClick(name)}>
        <h2 className={styles.tabTitle}>{title}</h2>
      </div>
      <div className={styles.tabContent}>
        {children}
      </div>
    </div>
  )
}

export { ContentTab };