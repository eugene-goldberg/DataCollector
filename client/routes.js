angular.module("collector").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider){

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('collector', {
                url: '/collector',
                templateUrl: 'client/collector/views/collector.ng.html',
                controller: 'CollectorCtrl'
            })
            .state('parties', {
                url: '/parties',
                templateUrl: 'client/parties/views/parties-list.ng.html',
                controller: 'PartiesListCtrl'
            })
            .state('partyDetails', {
                url: '/parties/:partyId',
                templateUrl: 'client/parties/views/party-details.ng.html',
                controller: 'PartyDetailsCtrl'
            }
        );

        $urlRouterProvider.otherwise("/collector");
    }]);
