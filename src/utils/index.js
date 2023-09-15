import moment from 'moment'

function formatTanggal(tanggal) {
  return moment(tanggal).format('MMMM Do, YYYY');
}

function displayFallbackImage(htmlElement, defaultImg) {
  htmlElement.setAttribute("src", defaultImg)
}

export {
  formatTanggal,
  displayFallbackImage
}