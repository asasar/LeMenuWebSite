'use strict';

angular.module('leMeNuApp')
    .controller('TranslatorEditCtrl', function($scope, Queue, $filter, $http, $state) {

        $scope.isParent = false;

        Queue.ImWorkingOnIt({}, function(data) {
            if (data.length > 0) {
                $scope.TranslateItem = data[0];
                $scope.isParent = data[0].IsParent;
                if (!$scope.TranslateItem.MenuDetail) {
                    $scope.TranslateItem.MenuDetail = [];
                };
                $scope.getcssFlag = 'flag-icon-' + $scope.TranslateItem.LanguagesTo;
                $scope.selectedImage = $scope.TranslateItem.Menuid.files[0].url;
            }
        });


        $scope.getImage = function() {
            return selectedImage;
        };
        $scope.saveGroup = function(data, id) {
            Queue.SaveMenuAndItems({
                infomenuomenu: $scope.TranslateItem
            }, function success(data) {
                $scope.TranslateItem.MenuDetail = data.MenuDetail;
            }, function err(err) {
                console.log('error', err);
            });
        };

        $scope.removegroup = function(index) {
            $scope.TranslateItem.MenuDetail.splice(index, 1);
            Queue.SaveMenuAndItems({
                infomenuomenu: $scope.TranslateItem
            }, function success(data) {
                $scope.TranslateItem.MenuDetail = data.MenuDetail;
            }, function err(err) {
                console.log('error', err);
            });
        };

        $scope.showImage = function(data) {
            $scope.selectedImage = data.url;
        };

        $scope.addGroud = function() {

            var inserted = {
                NameGroupInMenu: '',
                PositionOrder: $scope.TranslateItem.MenuDetail.length
            };
            $scope.TranslateItem.MenuDetail.push(inserted);

            $scope.inserted = inserted;
        };


        $scope.goEditItem = function(index) {
            $state.go('translator.edit.item', {
                'index': index
            });
        };

        $scope.FinnishedTranslation = function() {
            Queue.FinnishedTranslation({
                infomenuomenu: $scope.TranslateItem
            }, function(data) {
                $state.go('translator.list');
            });
        };
    });