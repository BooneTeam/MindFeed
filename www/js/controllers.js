angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Tiles, $ionicPopover) {
  var ctrl = this;
  console.log('asdffg')
  ctrl.tiles = Tiles.all();
  $scope.tiles = Tiles.all();

  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('my-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });
  
  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });
})

.controller('ChatsCtrl', function($scope, Chats) {
  console.log('mainchatgs')
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  console.log('chat ');
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
  .controller('CategoryCtrl', function($scope,$stateParams) {
    var ctrl = this;
    console.log('wtf')
    ctrl.category = $stateParams.category

    ctrl.tiles = ['cleanup-infographic.png',
    'dogs-infographic.png',
    'fox-sports-infographic.png',
    'infographic.jpg',
    'smoking-infographic.jpg',
    'super-bowl-infographic.jpg']
    // ctrl.tiles = IGService.get(category.id)
}).controller('TileCtrl',function($scope,$stateParams){
  var ctrl = this;

  ctrl.tile= 'cleanup-infographic.png'

  ctrl.tiles = ['cleanup-infographic.png',
    'dogs-infographic.png',
    'fox-sports-infographic.png',
    'infographic.jpg',
    'smoking-infographic.jpg',
    'super-bowl-infographic.jpg']
});
