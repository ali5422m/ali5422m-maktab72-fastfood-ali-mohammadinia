const numberFormat = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const handleError = (err) => {
  if (err.response) {
    console.log("Error Response", err.response.data);
    if (err.response.status === 422) {
      const errors = [];
      Object.keys(err.response.data.message).map((key) => {
        err.response.data.message[key].map((e) => {
          errors.push(e);
        });
      });

      return errors.join();
    }
    return err.response.data.message;
  } else if (err.request) {
    console.log("Error Request", err.request);
    return err.request;
  } else {
    return err.message;
  }
  console.log("Error", err.message);
  // return "خطای سرور، دوباره تلاش کنید";
};


const salePercent = ({price,sale_price}) => {
  return Math.round((((price - sale_price) / price) * 100))
}


function toFarsiNumber(n) {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return n.toString().replace(/\d/g, (x) => farsiDigits[x]);
}



export { handleError, numberFormat , salePercent , toFarsiNumber};
