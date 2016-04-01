"use strict";

var User = require('../User');
var Q = require('q');

/**
 * Gets a returnable user to the logged in user
 */
exports.getPrivateUser = function(id, callback) {
  var def = Q.defer();
  User
    .findById(id)
    .select({
      email: 1,
      profile: 1
    })
    .exec(function(err, user) {
      if (err) {
        return def.reject(err);
      }
      def.resolve(user)
    });
  return def.promise;
};

/**
 *  Gets a returnable public user data
 */
exports.getPublicUser = function(id, callback) {
  var def = Q.defer();
  User
    .findById(id)
    .select({
      email: 1,
      profile: 1
    })
    .exec(function(err, user) {
      if (err) {
        return def.reject(err);
      }
      def.resolve(user)
    });
  return def.promise;
};
