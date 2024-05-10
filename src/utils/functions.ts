export const openWhatsApp = () => {
  window.open(
    `https://api.whatsapp.com/send?phone=51941605353&text=Hola%20Cl%C3%ADnica%20Automotriz%2C%20deseo%20contratar%20uno%20de%20sus%20servicios.`,
    '_blank'
  );
};
export const openLink = (url:string) => {
  window.open(
    `${url}`,
    '_blank'
  );
};