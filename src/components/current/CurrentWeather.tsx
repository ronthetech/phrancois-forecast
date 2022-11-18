import styles from "./CurrentWeather.module.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className={styles.weather}>
      <div className={styles.top}>
        <div>
          <p className={styles.city}>{data.city}</p>
          <p className={styles.weather_description}>
            {data.weather[0].description.toUpperCase()}
          </p>
        </div>
        <img
          alt="weather"
          className={styles.weather_icon}
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className={styles.bottom}>
        <div className={styles.weather_row}>
          <p className={styles.temperature}>
            <span className={styles.temp_now}>NOW</span>{" "}
            {Math.round(data.main.temp)}°F
          </p>
          <p className={styles.temperature} id="temp-high">
            <span className={styles.temp_high}>HIGH</span>{" "}
            {Math.round(data.main.temp_max)}°F
          </p>
          <p className={styles.temperature} id="temp-low">
            <span className={styles.temp_low}>LOW</span>{" "}
            {Math.round(data.main.temp_min)}°F
          </p>
        </div>
        <div className={styles.details}>
          <div className={styles.parameter_row}>
            <span className={styles.details_label}>Details</span>
          </div>
          <div className={styles.parameter_row}>
            <span className={styles.parameter_label}>Feels like: </span>
            <span className={styles.parameter_value}>
              {Math.round(data.main.feels_like)}°F
            </span>
          </div>
          <div className={styles.parameter_row}>
            <span className={styles.parameter_label}>Wind: </span>
            <span className={styles.parameter_value}>
              {data.wind.speed} mph
            </span>
          </div>
          <div className={styles.parameter_row}>
            <span className={styles.parameter_label}>Humidity: </span>
            <span className={styles.parameter_value}>
              {data.main.humidity}%
            </span>
          </div>
          {/* <div className={styles.parameter-row">
            <span className={styles.parameter-label">Pressure: </span>
            <span className={styles.parameter-value">{data.main.pressure} hPa</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
