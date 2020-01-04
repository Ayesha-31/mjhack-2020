const daysContainer = document.querySelector('#days');
const hoursContainer = document.querySelector('#hours');
const minutesContainer = document.querySelector('#minutes');
const secondsContainer = document.querySelector('#seconds');

const eventDate = new Date('Jan 19, 2020 07:00:00').getTime();

const timer = () => {
  const currentDate = new Date().getTime();
  const difference = eventDate - currentDate;

  if (difference > 0) {
    const daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hoursDifference = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutesDifference = Math.floor(
      (difference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const secondsDifference = Math.floor((difference % (1000 * 60)) / 1000);

    daysContainer.textContent = daysDifference;
    hoursContainer.textContent = hoursDifference;
    minutesContainer.textContent = minutesDifference;
    secondsContainer.textContent = secondsDifference;
  }
};

timer();
const inteval = setInterval(timer, 1000);
