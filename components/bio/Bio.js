import styles from './bio.module.scss'

export function Bio({ className }) {
  return (
    <div className={styles.bio}>
      <div className={styles.profile}>
        <img
          src="/static/images/avatar.png"
          alt="Profile Image"
          className="rounded-full "
          style={{
            width: '268px',
          }}
        />
        <div className={styles.hi}>
          <h2 className={styles.black}>Hi.</h2>
          <h2 className={styles.white}>Hi.</h2>
        </div>
      </div>
      <div className={styles.description}>
        <p>I'm Nguyen Tri </p>
        <p className={styles.typing}>
          I'm a <span className="font-bold">developer 👨🏻‍💻</span>
        </p>
      </div>
    </div>
  )
}
