import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/marcosadriano05.png" alt="Marcos Adriano" />
      <div>
        <strong>Marcos Adriano</strong>
        <p>Level 1</p>
      </div>
    </div>
  );
}