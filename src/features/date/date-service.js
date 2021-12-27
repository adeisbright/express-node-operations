const { BadRequestError } = require("../../common");
/**
 *
 * @param {String} val Date String in the form YYYY:MM:DD
 * @returns {Boolean} true or false depending if the date string is valid or meets the input format
 */
const isValidDate = (val) => {
    let pattern = /^(\d){4}(\-)(0[1-9]{2}|(1[0-1]))(\-)[1-9]{2}$/;
    if (val.match(pattern)) return true;
    return false;
};

const getDateToN = (n) => {
    const today = new Date().getTime();
    const future = new Date(n).getTime();

    const gap = future - today;

    const days = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hours = (gap % 1000) * 60 * 60;
    const minutes = (gap % 1000) * 60;
    const seconds = gap % 1000;

    return `${days}`;
};

module.exports = {
    getDateToN,
};
