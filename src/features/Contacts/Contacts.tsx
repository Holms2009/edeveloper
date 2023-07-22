import { useMemo } from 'react';
import { useMediaQuery } from '../../shared/lib/utils';
import { TitledField } from '../../shared/ui';
import styles from './Contacts.module.css';

function Contacts() {
  let isMobile = useMediaQuery('(max-width:600px)');
  let textSize = useMemo<TTextSize>(() => isMobile ? 'small' : 'medium', [isMobile]);

  return (
    <div className={styles.contacts}>
      <div className={styles.fields}>
        <TitledField
          title="ФИО"
          text="Банифатов Евгений Александрович"
          size={textSize}
        />
        <TitledField
          title="Адрес"
          text="Владимирская обл., г.Ковров"
          size={textSize}
        />
        <TitledField
          title="Телефон"
          text="+7(920)922-70-05"
          type="link"
          href="tel:89209227005"
          size={textSize}
        />
        <TitledField
          title="Email"
          text="holms200990@gmail.com"
          type="link"
          href="mailto:holms200990@gmail.com"
          size={textSize}
        />
        <TitledField
          title="Telegram"
          text="@Holms2009"
          type="link"
          href="https://t.me/Holms2009"
          openInNewWindow
          size={textSize}
        />
      </div>
    </div>
  )
}

export { Contacts };