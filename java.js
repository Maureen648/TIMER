const timerInterval = setInterval(updateCountdown, 1000);
const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 10);    

function updateCountdown() {
  const currentDate = new Date();
  const difference = targetDate - currentDate;
  if (difference <= 0) {
    clearInterval(timerInterval);
    document.getElementById('countdown').innerHTML = 'Countdownover!';
  } else {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    const endDate = targetDate.toDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',})
    document.getElementById('giveaway-message').innerHTML = `Launch Ends on ${endDate} at 11:30am`;
  }
}