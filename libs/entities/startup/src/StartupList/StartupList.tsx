import styles from './StartupList.module.scss';

/* eslint-disable-next-line */
export interface StartupListProps {}

export function StartupList(props: StartupListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to StartupList!</h1>
    </div>
  );
}

export default StartupList;
