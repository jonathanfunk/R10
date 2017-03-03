export const timeHelper = (timestamp) => {
  let d = new Date(timestamp * 1000);
  let hh = d.getHours();
  let h = hh;
  let min = ('0' + d.getMinutes()).slice(-2);
  let ampm = 'AM';

  if (hh > 12) {
    h = hh - 12;
    ampm = 'PM';
  } else if (hh === 12) {
    h = 12;
    ampm = 'PM';
  } else if (hh == 0) {
    h = 12;
  }
  return h + ':' + min + ' ' + ampm;
}