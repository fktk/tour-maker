'use strict';

const toISOString = (dateClass) => {
  return dateClass.getUTCFullYear() +
    '-' + pad(dateClass.getUTCMonth() + 1) +
    '-' + pad(dateClass.getUTCDate()) +
    'T' + pad(dateClass.getUTCHours()) +
    ':' + pad(dateClass.getUTCMinutes()) +
    ':' + pad(dateClass.getUTCSeconds()) +
    'Z';
}

const pad = (number) => {
  if (number < 10) {
    return '0' + number;
  }
  return number;
}

exports.toISOString = toISOString;
