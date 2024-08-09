import styles from './Timer.module.scss';

const Timer = ({ time }) => {
    const formatTime = time => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        const formatNumber = num => {
            return num < 10 ? '0' + num : num;
        }

        const formattedHours = formatNumber(hours);
        const formattedMinutes = formatNumber(minutes);
        const formattedSeconds = formatNumber(seconds);
        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
      };
   
     return (
       <div className={styles["time-style"]}>
          {formatTime(time)}
       </div>
     );
};

export default Timer;