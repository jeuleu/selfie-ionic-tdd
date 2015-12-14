(function() {
    'use strict';
    
    angular.module('Selfie.Camera.module').
    	controller('CameraController', CameraCtrl);
        
    var injectParams = [];
    CameraCtrl.$inject = injectParams;
    function CameraCtrl() {
        /* jshint validthis: true */			
        var vm = this;

        vm.takePicture = function() {
            vm.imageURI = "This is my selfie URI";
        }
    }
    
})();