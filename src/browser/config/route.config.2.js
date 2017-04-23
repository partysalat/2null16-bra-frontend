module.exports = ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('/:exposeId', '/:exposeId/all');

  $stateProvider
    .state('inbox', {
      url: '/:exposeId',
      //abstract: true,
      controller: ["filtersData", "exposeId", function (filtersData, exposeId) {
        console.log("abstract controller", filtersData, exposeId)
      }],
      template: '<div><div ui-view="counters"></div><div ui-view="inbox"></div></div>',
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
    .state('inbox.category', {
      url:"/:cat",
      resolve:{
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
        conversations: ['$q', '$stateParams','category', function ($q, $stateParams,category) {
          return $q.when([
            {id: "678", name: "conv1" + category},
            {id: "213", name: "conv2" + category},
            {id: "2233", name: "conv3" + category}
          ])
        }]
      },
      views: {
        "inbox": {
          template: require('./../states/conversations/conversations.template.pug'),
          controller: "conversationsController",
          controllerAs: "$ctrl"
        },
        "counters": {
          controller:  function () {
            console.log("counters");
          },
          controllerAs: "$ctrl",
          template: '<span>Fooo</span>',
          /*resolve: {
            someData: ['$q', function ($q) {
              return $q.when([
                {some: "data"}
              ])
            }]

          }*/
        }
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