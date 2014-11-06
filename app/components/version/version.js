'use strict';

angular.module('travelspire.version', [
  'travelspire.version.interpolate-filter',
  'travelspire.version.version-directive'
])

.value('version', '0.1');
