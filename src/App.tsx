import classNames from 'classnames';
import { useState } from 'react';

import styles from './App.module.css';

import { SidePanel } from './components/widgets/SidePanel/SidePanel';

function App() {
  let [tab, setTab] = useState<TTabs>('skills');

  return (
    <div className={styles.app}>
      <SidePanel onItemClick={setTab} />
      <div className={classNames(styles.content, 'widget')}>

      </div>
    </div>
  )
}

export default App;
