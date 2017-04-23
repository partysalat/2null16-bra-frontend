//Require globally to get loaded before route definition, because of ngTemplate fuckup
require('./../states/conversations/conversations.template.pug');
require('./../states/details/details.template.pug');


module.exports = ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $urlRouterProvider.when('/:exposeId', '/:exposeId/all');

  $stateProvider
    .state('inbox', {
      url: '/:exposeId',
      abstract: true,
      controller:["filtersData","exposeId",function(filtersData,exposeId){console.log("abstract controller",filtersData,exposeId)}],
      template: '<ui-view="counters"></ui-view><ui-view></ui-view>',
      resolve: {
        exposeId: ['$stateParams', function ($stateParams) {
          return $stateParams.exposeId;
        }],

        filtersData: ['$q', function ($q) {
          return $q.when([
            {filter: "data"}
          ])
        }]

      }
    })
    .state('counters', {
      controller:["someData",function(someData){console.log(someData)}],
      controllerAs:"$ctrl",
      template: '{{$ctrl.someData}}',
      resolve: {
        someData: ['$q', function ($q) {
          return $q.when([
            {some: "data"}
          ])
        }]

      }
    })
    .state('inbox.category', {
      url: '/:cat',
      template: require('./../states/conversations/conversations.template.pug'),
      controller: "conversationsController",
      controllerAs: "$ctrl",
      resolve: {
        category: ['$stateParams', '$q', '$state', 'exposeId',
          function ($stateParams, $q, $state, exposeId) {
            var regex = /^(all|favorite|trash|spam)$/i;
            if (regex.test($stateParams.cat)) {
              return $stateParams.cat;
            } else {
              $state.go("inbox.category", {exposeId: exposeId, cat: "all"});
              return $q.reject();
            }
          }],
        conversations: ['$q', '$stateParams', function ($q, $stateParams) {
          return $q.when([
            {id: "678", name: "conv1" + $stateParams.cat},
            {id: "213", name: "conv2" + $stateParams.cat},
            {id: "2233", name: "conv3" + $stateParams.cat},
          ])
        }]

      }
    })
    .state('inbox.category.details', {
      url: '/message/:conversationId',
      template: require('./../states/details/details.template.pug'),
      controller: "detailsController",
      controllerAs: "$ctrl",
      resolve: {

        conversation: ['$q', "$stateParams", function ($q, $stateParams) {
          return $q.when([
            "messag1" + $stateParams.cat + " obid: " + $stateParams.exposeId + " convId:" + $stateParams.conversationId,
            "messag2" + $stateParams.cat + " obid: " + $stateParams.exposeId + " convId:" + $stateParams.conversationId,
            "messag3" + $stateParams.cat + " obid: " + $stateParams.exposeId + " convId:" + $stateParams.conversationId,
            "messag4" + $stateParams.cat + " obid: " + $stateParams.exposeId + " convId:" + $stateParams.conversationId,
          ])
        }]
      }
    })


}];