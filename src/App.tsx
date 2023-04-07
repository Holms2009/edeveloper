import { useState } from 'react';

import styles from './App.module.css';

import { ContentTab } from './entities';
import { Contacts, Skills } from './features';
import { SidePanel } from './widgets';

function App() {
  let [tab, setTab] = useState<TTabs>('skills');

  return (
    <div className={styles.app}>
      <SidePanel />
      <div className={styles.content}>
        <ContentTab name="skills" title="Навыки" isActive={tab === 'skills'} onClick={setTab}>
          <Skills />
        </ContentTab>
        <ContentTab name="projects" title="Проекты" isActive={tab === 'projects'} onClick={setTab}>
        </ContentTab>
        <ContentTab name="contacts" title="Контакты" isActive={tab === 'contacts'} onClick={setTab}>
          <Contacts />
        </ContentTab>
      </div>
    </div>
  )
}

export default App;
