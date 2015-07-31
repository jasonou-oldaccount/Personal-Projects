'use strict';

app.controller('postViewCtrl', ['$scope', '$routeParams', 'post', 'Auth', function($scope, $routeParams, post, Auth) {
    $scope.post = post.get($routeParams.postId);
    $scope.comments = post.comments($routeParams.postId);
    
    $scope.user = Auth.user;
    $scope.signedIn = Auth.signedIn;
    
    $scope.addComment = function() {
        if(!$scope.commentText || $scope.commentText === '') {
            return;
        }
        
        var comment = {
            text: $scope.commentText,
            creator: $scope.user.profile.username,
            creatorUID: $scope.user.uid
        };
        
        $scope.comments.$add(comment);
        
        $scope.commentText = '';
    };
    
    $scope.deleteComment = function(comment) {
        $scope.comments.$remove(comment);
    };
}]);