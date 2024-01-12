import styles from './startup.module.scss';

/* eslint-disable-next-line */
export interface StartupProps {}

export function Startup(props: StartupProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Startup!</h1>
    </div>
  );
}

export default Startup;
