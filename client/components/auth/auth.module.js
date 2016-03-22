'use strict';

angular.module('gladaryApp.auth', [
  'gladaryApp.constants',
  'gladaryApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
