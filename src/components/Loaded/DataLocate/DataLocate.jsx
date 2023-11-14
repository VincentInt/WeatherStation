import style from './DataLocate.module.scss';
import { useEffect, useState } from 'react';

const DataLocate = ({ city, date, setDate }) => {
  const formatNumber = (num) => num.toString().padStart(2, '0');
  useEffect(() => {
    const updateDate = setInterval(() => {
      setDate(new Date());
    }, 6000);
    () => clearInterval(updateDate);
  }, []);
  return (
    <section className={style.containerData}>
      <div className={style.todayData}>
        <p>Time: {`${formatNumber(date.getHours())}:${formatNumber(date.getMinutes())}`}</p>
        <p>
          Date:{' '}
          {`${formatNumber(date.getDate())}.${formatNumber(
            date.getMonth() + 1,
          )}.${date.getFullYear()}`}
        </p>
      </div>
      <div>
        <h2>City: {city}</h2>
      </div>
    </section>
  );
};
export default DataLocate;
