import { parse } from 'date-fns';

/**
 * Converts a date string in DD-MM-YYYY format to a JavaScript Date object.
 * @param {string} dateString - The date string to parse (e.g., "01-11-2025").
 * @returns {Date} The parsed Date object.
 */
export const parseDateString = (dateString) => {
  return parse(dateString, 'dd-MM-yyyy', new Date());
};

/**
 * Formats a Date object to DD-MM-YYYY string.
 * @param {Date} date - The date to format.
 * @returns {string} The formatted date string.
 */
// You can add format function if needed, but for now we mainly need parsing for the keys.
