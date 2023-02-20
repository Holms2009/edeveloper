import classNames from 'classnames';
import { useState } from 'react';

import styles from './App.module.css';

import { SidePanel } from './components/widgets/SidePanel/SidePanel';
import { Skills } from './features';

function App() {
  let [tab, setTab] = useState<TTabs>('skills');

  return (
    <div className={styles.app}>
      <SidePanel />
      <div className={styles.content}>
        <div className={classNames(styles.tab, 'widget', { [styles.tab_closed]: tab !== 'skills' })}>
          <div className={styles.titleWrapper} onClick={() => setTab('skills')}>
            <h2 className={styles.tabTitle}>Навыки</h2>
          </div>
          <div className={styles.tabContent}>
            <Skills />
          </div>
        </div>
        <div className={classNames(styles.tab, 'widget', { [styles.tab_closed]: tab !== 'projects' })}>
          <div className={styles.titleWrapper} onClick={() => setTab('projects')}>
            <h2 className={styles.tabTitle}>Проекты</h2>
          </div>
        </div>
        <div className={classNames(styles.tab, 'widget', { [styles.tab_closed]: tab !== 'contacts' })}>
          <div className={styles.titleWrapper} onClick={() => setTab('contacts')}>
            <h2 className={styles.tabTitle}>Контакты</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
