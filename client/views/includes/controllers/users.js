var myApp = angular.module('myApp', ['ngRoute', 'ngCookies']);
myApp.controller('UsersController', ['$scope', '$http', '$location', '$routeParams', '$cookies', function($scope, $http, $location, $routeParams, $cookies) {
    console.log("mesa stin controller");
    $scope.addUser = function() {
        console.log("eimai stin addUser");
        var invalid_flag = false
        //check form inputs
        if (!$scope.User) {
            $('input').addClass('is-invalid')
            return
        } else {
            $('input').removeClass('is-invalid')
        }
        if (!$scope.User.first_name) {
            invalid_flag = true
            $('#first_name_in').addClass('is-invalid')
        } else {
            $('#first_name_in').removeClass('is-invalid')
        }
        if (!$scope.User.surname) {
            invalid_flag = true
            $('#surname_in').addClass('is-invalid')
        } else {
            $('#surname_in').removeClass('is-invalid')
        }
        if (!$scope.User.username) {
            invalid_flag = true
            $('#username_in').addClass('is-invalid')
        } else {
            $('#username_in').removeClass('is-invalid')
        }
        if (!$scope.User.email) {
            invalid_flag = true
            $('#email_in').addClass('is-invalid')
        } else {
            $('#email_in').removeClass('is-invalid')
        }
        if ($('#birthDatepicker').val() == "") {
            invalid_flag = true
            $('#birthDatepicker').addClass('is-invalid')
        } else {
            $('#birthDatepicker').removeClass('is-invalid')
        }
        if (!$scope.User.password) {
            invalid_flag = true
            $('#password_in').addClass('is-invalid')
        } else {
            $('#password_in').removeClass('is-invalid')
        }
        if (!$('#agree_in').is(":checked")) {
            invalid_flag = true
            $('#agree_in').addClass('is-invalid')
        } else {
            $('#agree_in').removeClass('is-invalid')
        }
        if (invalid_flag) {
            return
        }
        $http({
            url: 'https://localhost:8765/observatory/api/register',
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                "first_name": $scope.User.first_name,
                "surname": $scope.User.surname,
                "username": $scope.User.username,
                "email": $scope.User.email,
                "birth_date": $('#birthDatepicker').val(), //allakse to backend
                "password": $scope.User.password
            }
        }).then(function(response) {
            $scope.data = response;
            if ($scope.data.status == 200) {
                window.location.href = "/";
            }
        });
    }
    $scope.loginUser = function() {
        console.log("eimai stin loginuser");
        if (!$scope.User || !$scope.User.username || !$scope.User.password) {
            $('#username_field').addClass('is-invalid')
            $('#password_field').addClass('is-invalid')
            return
        }
        //εδώ γράφει η έλενα κώδικα
        $http({
            url: 'https://localhost:8765/observatory/api/login',
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                "username": $scope.User.username,
                "password": $scope.User.password
            }
        }).then(function(response) {
            $scope.data = response;
            console.log(response)
            if ($scope.data.status == 200) {
                $scope.SetCookie('activradartoken', response.data.token)
                window.location.href = "/";
            } else {}
        }, function(error) {
            if (error.status == 403) {
                $('#username_field').addClass('is-invalid')
                $('#password_field').addClass('is-invalid')
            }
            console.log(error)
        });
    }
    $scope.data_view = {}
    $scope.view_profile = function() {
        console.log("eimai stin viewprofile");
        $http({
            method: "GET",
            url: 'https://localhost:8765/observatory/api/users/current_info',
            headers: {
                'X-OBSERVATORY-AUTH': $scope.GetCookie("activradartoken")
            }
        }).then(function(response) {
            console.log("mesa sti then");
            if (response.status == 200) {
                console.log(typeof response.data.user.birth_date);
                $scope.data_view = response.data;
                var date = $scope.data_view.user.birth_date.slice(0, 10);
                $scope.data_view.user.birth_date = date;
                console.log($scope.data_view.user);
            } else {
                console.log("kthnxbye", response.data);
            }
        });
    }
    $scope.change_profile = function() {
        console.log("sthn change");
        var is_date_w = false;
        if ($scope.data_view.user.birth_date.length != 10 || $scope.data_view.user.birth_date.charAt(4) != '-' || $scope.data_view.user.birth_date.charAt(7) != '-') {
            is_date_w = true;
            $('#b_date').addClass('is-invalid');
        } else {
            $('#b_date').removeClass('is-invalid')
        }
        if (is_date_w) {
            return
        }
        if (($scope.data_view.user.pswd1 == null) && ($scope.data_view.user.pswd2 == null)) {
            $http({
                url: 'https://localhost:8765/observatory/api/users/update_profile',
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    'X-OBSERVATORY-AUTH': $scope.GetCookie("activradartoken")
                },
                data: {
                    "first_name": $scope.data_view.user.first_name,
                    "surname": $scope.data_view.user.surname,
                    "username": $scope.data_view.user.username,
                    "email": $scope.data_view.user.email,
                    "birth_date": $scope.data_view.user.birth_date
                }
            }).then(function(response1) {
                console.log("mesa sti then");
                if (response1.status == 200) {
                    console.log(response1.data);
                    window.location.href = "/editprofile";
                } else {
                    console.log("kthnxbye", response1);
                }
            });
        } else {
            var invalid_flag = false;
            if ($scope.data_view.user.pswd1 != $scope.data_view.user.pswd2) {
                invalid_flag = true
                $('#second_pswd').addClass('is-invalid')
            } else {
                $('#second_pswd').removeClass('is-invalid')
            }
            if (invalid_flag) {
                return
            }
            $http({
                url: 'https://localhost:8765/observatory/api/users/update_profile',
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    'X-OBSERVATORY-AUTH': $scope.GetCookie("activradartoken")
                },
                data: {
                    "first_name": $scope.data_view.user.first_name,
                    "surname": $scope.data_view.user.surname,
                    "username": $scope.data_view.user.username,
                    "email": $scope.data_view.user.email,
                    "birth_date": $scope.data_view.user.birth_date,
                    "password": $scope.data_view.user.pswd1
                }
            }).then(function(response1) {
                console.log("mesa sti then");
                if (response1.status == 200) {
                    console.log(response1.data);
                    window.location.href = "/editprofile";
                } else {
                    console.log("kthnxbye", response1);
                }
            });
        }
    }
    $scope.change_profile_cancel = function() {
        window.location.href = "/";
    }
    $scope.check_if_logged = function() {
        $currentToken = $scope.GetCookie("activradartoken");
        if (!$currentToken) {
            //stay here for login
        } else {
            //redirect because already logged in
            //here we could add some verification that the token is valid and not corrupted in the future
            window.location.href = "/"; //send them to homepage when created
        }
    }
    $scope.logoutUser = function() {
        //εδώ γράφει η έλενα κώδικα
        $currentToken = $scope.GetCookie("activradartoken");
        if (!$currentToken) {
            window.location.href = "/"; //εδω θα μπει το homepage καποτε
        } else {
            $http({
                url: 'https://localhost:8765/observatory/api/logout',
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'X-OBSERVATORY-AUTH': $currentToken
                }
            }).then(function(response) {
                console.log(response)
                if (response.status == 200) {
                    $scope.ClearCookie('activradartoken');
                    window.location.href = "/";
                    //window.location.href = "https://google.com"; //εδω θα μπει το homepage καποτε
                } else {}
            }, function(error) {
                console.log(error)
                window.location.href = "/"; //εδω θα μπει το homepage καποτε
            });
        }
    }
    $scope.SetCookie = function(key, value) {
        $cookies.put(key, value);
    };
    $scope.GetCookie = function() {
        return $cookies.get('activradartoken');
    };
    $scope.ClearCookie = function(key) {
        $cookies.remove(key, {
            path: '/'
        });
    };
    logged_navbar = false;
    $scope.navbar_init = function() {
        $currentToken = $scope.GetCookie("activradartoken");
        if (!$currentToken) {
            $scope.logged_navbar = false
        } else {
            $scope.logged_navbar = true
        }
    }
}]);
myApp.config(function($routeProvider) {
    console.log("inside config");
    $routeProvider.when("register", {
        controller: "UsersController",
        templateUrl: "register.html"
    }).otherwise({
        redirectTo: "/"
    });
    console.log("after config");
});