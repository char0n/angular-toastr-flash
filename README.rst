angular-toastr-flash
====================

Most of the time you want to flash the message after the route changed. 
angular-toastr-flash adds support for flashing to angular-toastr. 


Installation
------------

::

 $ bower install angular-toastr-flash


Configuration
-------------
::

 .config(['flashConfig', function(flashConfig) {
   flashConfig.routeStateChanges = ['$stateChangeSuccess'];
 }])


Using angular-toastr-flash
--------------------------

Add angular-toastr-flash to your module dependencies: ::

 angular.module('app', ['angular-toastr-flash']);

Module api for toastr: ::
 
 // In all calls only first argument is required. Toasts get displyed after successful route change event.
 flash.info('Info message'); 
 flash.success('Success message', 'Success title');
 flash.warning('Warning message', 'Warning title', {}); // This argument is for angular-toastr-options
 flash.error('Error message', 'Error title');
 
Module api for custom callbacks: ::

 flash.callback(function() {
  // your code goes here.
 });
 
 Clearing flash buffer from delayed toasts and custom callbacks: ::
 
  flash.clear();
 

Author
------

| char0n (Vladimír Gorej, CodeScale s.r.o.)
| email: gorej@codescale.net
| web: http://www.codescale.net


References & Credits
--------------------

- https://github.com/TylerGarlick/angular.flashr
- https://github.com/Foxandxss/angular-toastr
- https://github.com/remind101/angular-flash
