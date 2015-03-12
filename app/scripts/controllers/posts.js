'use strict';

app.controller('PostsCtrl', function ($scope, $location, Auth, Post) {
    $scope.posts = Post.all;
    $scope.user = Auth.user;
    
    $scope.deletePost = function(post) {
        Post.delete(post)
    };
});