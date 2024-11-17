function convertDate(timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
  const day = String(date.getDate()).padStart(2, '0');
  console.log(`${year}/${month}/${day}`)
  return `${year}/${month}/${day}`;
}
export default convertDate
