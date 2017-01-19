angular.module('anguweathar', ['ngRoute'])
.config(($routeProvider) => {
    $routeProvider.when('/', {
        controller: 'RootCtrl',
        teplateUrl: '/partials/root.html'
    })
})

.controller('RootCtrl', function() {
    console.log('I am root RootCtrl')
})