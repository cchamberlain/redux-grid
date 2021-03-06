'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('../config.js');

exports.default = function (name) {
  switch (name) {
    case 'server':
      return 'source-map';
  }
  if (process.env.NODE_ENV === 'hot') return '#eval';
};