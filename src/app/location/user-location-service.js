/* globals localStorage*/

module.exports = 'wfm-mobile.location';
var config = require('../config');

angular.module('wfm-mobile.location', ['wfm.core.mediator']).service('UserLocationService', ['mediator', 'gps', UserLocationService]);

/**
 * This service is responsible for subscribing to location updates from the raincatcher-gps module.
 *
 * These updates are then propigated to the raincatcher-user module to update the users current locaion.
 *
 * @param mediator
 * @constructor
 */
function UserLocationService(mediator) {
  var self = this;

  /**
   *
   * Getting the logged in user profile. This will be used to get the current user ID.
   *
   * @returns {null}
   */
  function retrieveProfileData() {
    var json = localStorage.getItem('fh.wfm.profileData');
    return json ? JSON.parse(json) : null;
  }

  //Subscribing to the `done` state for the `wfm:gps:location:update` topic.
  //This will update the users current location.
  mediator.subscribe('done:wfm:gps:location:update', function(location) {
    var coordinates = location.coords;

    var localUserData = retrieveProfileData();
    //The user may not be logged in yet.
    if (localUserData) {
      //Having a new location, we can publish the `wfm:user:location:update` topic for the raincatcher-user module.
      //The raincatcher-user module will propagate the updated location to the cloud.
      mediator.publish('wfm:user:location:update', localUserData.id, {
        latitude: coordinates.latitude,
        longitude: coordinates.longitude
      });
    }
  });

  self.interval = setInterval(function() {
    mediator.publish('wfm:gps:location:update');
  }, config.locationPollingInterval);

  //When the user logs out of the app, the polling process can stop.
  mediator.subscribe('wfm:user:logout', function() {
    clearInterval(self.interval);
  });
}