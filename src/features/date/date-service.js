/**
 * @description getToday returns today as an object that
 * can be tuned to return different values
 * @return the current date with different properties and
 * methods for customization
 */
const getToday = () => {
  const today = new Date();

  const dateParser = {
    numericDate: today.getDate(),
    gmt: function() {
      return today.toGMTString();
    },
  };
  return dateParser;
};

module.exports = {
  getToday,
};
