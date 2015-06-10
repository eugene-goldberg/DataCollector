'use strict';

// FileUploadController controller
angular.module('collector').controller('FileUploadController',
    ['$scope', '$http', '$stateParams', '$location', 'FileUploader',
        function($scope, $http, $stateParams, $location, FileUploader) {

            $scope.uploadUrl = '';

            var url = 'http://dctool-lnx.cloudapp.net:3001/api/files';

            var uploader = $scope.uploader = new FileUploader({

            });
        }
    ]);
