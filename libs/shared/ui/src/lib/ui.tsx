import styles from './ui.module.scss';
import { StartupList } from '@react-monorepo/startup';

/* eslint-disable-next-line */
export interface UiProps {}

export function Ui(props: UiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui!</h1>
      <StartupList />
    </div>
  );
}

export default Ui;
