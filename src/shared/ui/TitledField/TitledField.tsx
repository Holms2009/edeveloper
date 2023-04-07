import classNames from 'classnames';
import styles from './TitledField.module.css';

type Props = {
  title: string;
  text: string;
  size?: TTextSize;
  type?: 'text' | 'link';
  href?: string;
  openInNewWindow?: boolean;
}

function TitledField({ title, text, size = 'small', type = 'text', href = '', openInNewWindow }: Props) {
  return (
    <div className={styles.titledField}>
      <span className={classNames(
        styles.title,
        { [styles.title_medium]: size === 'medium', [styles.title_large]: size === 'large' })}
      >
        {title}
      </span>
      {type === 'text' ?
        <span className={classNames(
          styles.text,
          { [styles.text_medium]: size === 'medium', [styles.text_large]: size === 'large' })}
        >
          {text}
        </span> :
        <a className={classNames(
          styles.text,
          styles.link,
          { [styles.text_medium]: size === 'medium', [styles.text_large]: size === 'large' })}
          href={href}
          target={openInNewWindow ? '_blank' : '_self'}
          rel="noreferrer noopener"
        >
          {text}
        </a>
      }
    </div>
  )
}

export { TitledField };