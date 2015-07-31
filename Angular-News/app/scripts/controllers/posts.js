'use strict';

app.controller('postsCtrl', ['$scope', '$location', 'post', 'Auth', function($scope, $location, post, Auth) {
    
    $scope.posts = post.all;
    $scope.user = Auth.user;
    $scope.post = { url: "https://", title: '' };
    
    /* $scope.submitPost = function () {
        post.create($scope.post).then(function(ref) {
            $scope.posts[ref.name] = $scope.post;
            $location.path('/posts/' + ref.name());
        });
    }; */
    
    $scope.deletePost = function(thispost) {
        post.delete(thispost);
    };
    
}]);