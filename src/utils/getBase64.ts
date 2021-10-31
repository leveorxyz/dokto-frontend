export default function getBase64(file: File) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => reader.result;
  // eslint-disable-next-line no-console
  reader.onerror = (error) => console.error("Error: ", error);
}
