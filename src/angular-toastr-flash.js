angular.module('angular-toastr-flash', [])


  .constant('flashConfig', {
    routeStateChanges: ['$stateChangeSuccess']
  })


  .factory('flash', ['$rootScope', 'flashConfig', 'toastr', '_',
    function ($rootScope, flashConfig, toastr, _) {
      var toasts = [];
      var callbacks = [];
      var DelayedToast = function(type, message ,title, options) {
        this.type = type;
        this.message = message;
        this.title = title || '';
        this.options = options || {};
        this.open = function() {
          return toastr[type](this.message, this.title, this.options);
        };
      };

      // When the route changes, flash the delayed toasts or execute the callbacks.
      flashConfig.routeStateChanges.forEach(function(eventName) {
        $rootScope.$on(eventName, function () {
          toasts.slice().forEach(function(toast) {
            toast.open();
            _.pull(toasts, toast);
          });
          callbacks.slice().forEach(function(callback) {
            callback.call(null);
            _.pull(callbacks, callback);
          });
        });
      });

      return {
        success: success,
        info: info,
        warning: warning,
        error: error,
        callback: callback,
        clear: function() {
          toasts = [];
          callbacks = [];
        }
      };

      function success(message, title, options) {
        toasts.push(new DelayedToast('success', message, title, options));
      }

      function info(message, title, options) {
        toasts.push(new DelayedToast('info', message, title, options));
      }

      function warning(message, title, options) {
        toasts.push(new DelayedToast('warning', message, title, options));
      }

      function error(message, title, options) {
        toasts.push(new DelayedToast('error', message, title, options));
      }

      function callback(fn) {
        callbacks.push(fn);
      }
    }])

;