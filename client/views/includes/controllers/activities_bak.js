var myApp = angular.module('myApp', ['ngRoute', 'ngCookies']);
myApp.controller('ActivitiesController', ['$scope', '$http', '$location', '$routeParams', '$cookies', function($scope, $http, $location, $routeParams, $cookies) {
    selectedActivity = 1;
    //Monday
    $scope.plushtmlmonday = function() {
        if ($scope.counterMon < 3) {
            $scope.counterMon++;
            if ($scope.showmon1 == false) {
                $scope.showmon1 = true;
            } else if ($scope.showmon2 == false) {
                $scope.showmon2 = true;
            } else {
                $scope.showmon3 = true;
            }
        }
        return;
    }
    $scope.minus_first_htmlmonday = function() {
        $scope.counterMon--;
        $scope.showmon1 = false;
        return;
    }
    $scope.minus_second_htmlmonday = function() {
        $scope.counterMon--;
        $scope.showmon2 = false;
        return;
    }
    $scope.minus_third_htmlmonday = function() {
        $scope.counterMon--;
        $scope.showmon3 = false;
        return;
    }
    //Tuesday
    $scope.plushtmltuesday = function() {
        if ($scope.counterTus < 3) {
            $scope.counterTus++;
            if ($scope.showtus1 == false) {
                $scope.showtus1 = true;
            } else if ($scope.showtus2 == false) {
                $scope.showtus2 = true;
            } else {
                $scope.showtus3 = true;
            }
        }
        return;
    }
    $scope.minus_first_htmltuesday = function() {
        $scope.counterTus--;
        $scope.showtus1 = false;
        return;
    }
    $scope.minus_second_htmltuesday = function() {
        $scope.counterTus--;
        $scope.showtus2 = false;
        return;
    }
    $scope.minus_third_htmltuesday = function() {
        $scope.counterTus--;
        $scope.showtus3 = false;
        return;
    }
    //Wednesday
    $scope.plushtmlwednesday = function() {
        if ($scope.counterWed < 3) {
            $scope.counterWed++;
            if ($scope.showwed1 == false) {
                $scope.showwed1 = true;
            } else if ($scope.showwed2 == false) {
                $scope.showwed2 = true;
            } else {
                $scope.showwed3 = true;
            }
        }
        return;
    }
    $scope.minus_first_htmlwednesday = function() {
        $scope.counterWed--;
        $scope.showwed1 = false;
        return;
    }
    $scope.minus_second_htmlwednesday = function() {
        $scope.counterWed--;
        $scope.showwed2 = false;
        return;
    }
    $scope.minus_third_htmlwednesday = function() {
        $scope.counterWed--;
        $scope.showwed3 = false;
        return;
    }
    //Thursday
    $scope.plushtmlthursday = function() {
        if ($scope.counterThu < 3) {
            $scope.counterThu++;
            if ($scope.showthu1 == false) {
                $scope.showthu1 = true;
            } else if ($scope.showthu2 == false) {
                $scope.showthu2 = true;
            } else {
                $scope.showthu3 = true;
            }
        }
        return;
    }
    $scope.minus_first_htmlthursday = function() {
        $scope.counterThu--;
        $scope.showthu1 = false;
        return;
    }
    $scope.minus_second_htmlthursday = function() {
        $scope.counterThu--;
        $scope.showthu2 = false;
        return;
    }
    $scope.minus_third_htmlthursday = function() {
        $scope.counterThu--;
        $scope.showthu3 = false;
        return;
    }
    //Friday
    $scope.plushtmlfriday = function() {
        if ($scope.counterFri < 3) {
            $scope.counterFri++;
            if ($scope.showfri1 == false) {
                $scope.showfri1 = true;
            } else if ($scope.showfri2 == false) {
                $scope.showfri2 = true;
            } else {
                $scope.showfri3 = true;
            }
        }
        return;
    }
    $scope.minus_first_htmlfriday = function() {
        $scope.counterFri--;
        $scope.showfri1 = false;
        return;
    }
    $scope.minus_second_htmlfriday = function() {
        $scope.counterFri--;
        $scope.showfri2 = false;
        return;
    }
    $scope.minus_third_htmlfriday = function() {
        $scope.counterFri--;
        $scope.showfri3 = false;
        return;
    }
    //Saturday
    $scope.plushtmlsaturday = function() {
        if ($scope.counterSat < 3) {
            $scope.counterSat++;
            if ($scope.showsat1 == false) {
                $scope.showsat1 = true;
            } else if ($scope.showsat2 == false) {
                $scope.showsat2 = true;
            } else {
                $scope.showsat3 = true;
            }
        }
        return;
    }
    $scope.minus_first_htmlsaturday = function() {
        $scope.counterSat--;
        $scope.showsat1 = false;
        return;
    }
    $scope.minus_second_htmlsaturday = function() {
        $scope.counterSat--;
        $scope.showsat2 = false;
        return;
    }
    $scope.minus_third_htmlsaturday = function() {
        $scope.counterSat--;
        $scope.showsat3 = false;
        return;
    }
    //Sunday
    $scope.plushtmlsunday = function() {
        if ($scope.counterSun < 3) {
            $scope.counterSun++;
            if ($scope.showsun1 == false) {
                $scope.showsun1 = true;
            } else if ($scope.showsun2 == false) {
                $scope.showsun2 = true;
            } else {
                $scope.showsun3 = true;
            }
        }
        return;
    }
    $scope.minus_first_htmlsunday = function() {
        $scope.counterSun--;
        $scope.showsun1 = false;
        return;
    }
    $scope.minus_second_htmlsunday = function() {
        $scope.counterSun--;
        $scope.showsun2 = false;
        return;
    }
    $scope.minus_third_htmlsunday = function() {
        $scope.counterSun--;
        $scope.showsun3 = false;
        return;
    }
    $scope.activity_category = {
        op1: "Ομαδικά αθλήματα",
        op2: "Ατομικά αθλήματα",
        op3: "Πολεμικές τέχνες",
        op4: "Χοροί",
        op5: "Αθλήματα νερού",
        op6: "Δραστηριότητα εσωτερικού χώρου",
        op7: "Δραστηριότητα εξωτερικού χώρου",
        op8: "Χειμερινά Αθλήματα"
    };
    console.log($scope.activity_category);
    $scope.get_activities = function() {
        console.log("mesa stin get_activities");
        $http({
            method: "GET",
            url: "https://localhost:8765/observatory/api/products/names"
        }).then(function(response) {
            if (response.status == 200) {
                $scope.activities = response.data;
                console.log($scope.activities);
            } else {
                console.log("ERROR:", response.status);
            }
        });
    }
    $scope.get_recent_acts = function() {
        $scope.recent_acts = {};
        $http({
            method: "GET",
            url: "https://localhost:8765/observatory/api/products/recent"
        }).then(function(response) {
            if (response.status == 200) {
                $scope.recent_acts = response.data;
            } else {
                console.log("ERROR:", response.status);
            }
        });
    }
    $scope.tyxaio = function() {
        alert($scope.checked);
    }
    //Για μία και μοναδική δραστηριότητα!!
    $scope.post_activity = function() {
        //error checking for form
        //then
        $http({
            url: 'https://localhost:8765/observatory/api/products/',
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'X-OBSERVATORY-AUTH': $scope.GetCookie()
            },
            data: {
                "name": $scope.Activity.name,
                "tags": $('#category .btn').attr('title').split(','),
                "category": $('#category .btn').attr('title'),
                "description": $scope.Activity.description
            }
        }).then(function(response) {
            $scope.data = response;
            console.log(response)
            if ($scope.data.status == 200) {
                alert('Επιτυχής εισαγωγή δραστηριότητας')
                window.location.href = "/";
            } else {}
        }, function(error) {
            if (error.status == 403) {
                alert("Πρέπει να είστε συνδεδεμένος για να καταχωρήσετε δραστηριότητα!")
            } else {
                // statement
            }
        });
    }
    $scope.post_sportscenter = function() {
        invalid_flag = false
        if (!$scope.Sportscenter) {
            $('.dropdown').addClass('is-invalid')
            $('input').addClass('is-invalid')
            invalid_flag = true;
            return
        } else {
            $('select').removeClass('is-invalid')
        }
        if (!$scope.Sportscenter.name) {
            $('#spor_name').addClass('is-invalid')
            invalid_flag = true;
        } else {
            $('#spor_name').removeClass('is-invalid')
        }
        if (!$scope.Sportscenter.address) {
            $('#spor_address').addClass('is-invalid')
            invalid_flag = true;
        } else {
            $('#spor_address').removeClass('is-invalid')
        }
        if (!$scope.Sportscenter.webpage) {
            $('#spor_webpage').addClass('is-invalid')
            invalid_flag = true;
        } else {
            $('#spor_webpage').removeClass('is-invalid')
        }
        if ($('#category_spor .btn').attr('title') == "Nothing selected") {
            $('.dropdown').addClass('is-invalid')
            invalid_flag = true;
        } else {
            $('.dropdown').removeClass('is-invalid')
        }
        if (invalid_flag) {
            return true
        }
        var shop_tags = $('#category_spor .btn').attr('title').split(',');
        //calculate lng, lat using GEOCODING NOMINATIM
        var done_geocoding = function(response) {
            if (!(response.data).length) {
                alert("Μη έγκυρη διεύθυνση παρακαλώ προσπαθήστε ξανά!")
                return
            }
            console.log('DONE GEOCODING')
            console.log(response.data[0].lon)
            $http({
                url: 'https://localhost:8765/observatory/api/shops',
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'X-OBSERVATORY-AUTH': $scope.GetCookie()
                },
                data: {
                    "name": $scope.Sportscenter.name,
                    "address": $scope.Sportscenter.address,
                    "lng": response.data[0].lon, //αυτά πρέπει να παράγονται από το openstreetmapsapi api
                    "lat": response.data[0].lat, //αυτά πρέπει να παράγονται από το openstreetmapsapi api
                    "tags": shop_tags,
                    "extraData": {
                        "webpage": $scope.Sportscenter.webpage
                    }
                }
            }).then(function(response) {
                $scope.data = response;
                console.log(response)
                if ($scope.data.status == 200) {
                    alert('Επιτυχής εισαγωγή αθλητικού κέντρου')
                    window.location.href = "/";
                } else {}
            }, function(error) {
                if (error.status == 403) {
                    alert("Πρέπει να είστε συνδεδεμένος για να καταχωρήσετε κάποιο κατάστημα!")
                } else {
                    // statement
                }
            });
        }
        $http({
            url: 'https://nominatim.openstreetmap.org/search/' + $scope.Sportscenter.address,
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                'format': 'json',
                'limit': 1
            }
        }, ).then(done_geocoding, function(error) {
            console.log('No geocoding for specified address')
        })
    }
    $scope.GetCookie = function() {
        return $cookies.get('activradartoken');
    };
    $scope.get_sportcenters = function() {
        console.log("mesa stin get_sportcenters");
        $http({
            method: "GET",
            url: "https://localhost:8765/observatory/api/shops/names"
        }).then(function(response) {
            if (response.status == 200) {
                $scope.sportscenters = response.data;
                console.log($scope.sportscenters);
            } else {
                console.log("ERROR:", response.status);
            }
        });
    }
    $scope.put_activities = function() {
        console.log("mesa stin activities");
        var invalid_flag = false
        if (!$scope.input) {
            $('select').addClass('is-invalid')
            invalid_flag = true;
        } else {
            $('select').removeClass('is-invalid')
        }
        if (!$scope.selectedActivity && $scope.checked == false) {
            $('#activity_select').addClass('is-invalid')
            invalid_flag = true;
        } else {
            $('#activity_select').removeClass('is-invalid')
        }
        if ($scope.checked) {
            if (!$scope.Activity.name) {
                $('#activity_name_in').addClass('is-invalid')
                invalid_flag = true;
            } else {
                $('#activity_name_in').removeClass('is-invalid')
            }
            if (!$scope.Activity.description) {
                $('#description').addClass('is-invalid')
                invalid_flag = true;
            } else {
                $('#description').removeClass('is-invalid')
            }
        }
        if (!$scope.selectedCenter && $scope.checked2 == false) {
            $('#sportscenter_select').addClass('is-invalid')
            invalid_flag = true;
        } else {
            $('#sportscenter_select').removeClass('is-invalid')
        }
        if ($scope.checked2) {
            if (!$scope.Sportscenter.name) {
                $('#sportscenter_name_in').addClass('is-invalid')
                invalid_flag = true;
            } else {
                $('#sportscenter_name_in').removeClass('is-invalid')
            }
            if (!$scope.Sportscenter.address) {
                $('#sportscenter_address_in').addClass('is-invalid')
                invalid_flag = true;
            } else {
                $('#sportscenter_address_in').removeClass('is-invalid')
            }
            if (!$scope.Sportscenter.webpage) {
                $('#sportscenter_webpage_in').addClass('is-invalid')
                invalid_flag = true;
            } else {
                $('#sportscenter_webpage_in').removeClass('is-invalid')
            }
        }
        if (!$scope.input || !$scope.input.price) {
            $('#input_price').addClass('is-invalid')
            invalid_flag = true;
        } else {
            $('#input_price').removeClass('is-invalid')
        }
        if ($('#dateFrompicker').val() == "") {
            invalid_flag = true
            $('#dateFrompicker').addClass('is-invalid')
        } else {
            $('#dateFrompicker').removeClass('is-invalid')
        }
        if ($('#dateTopicker').val() == "") {
            invalid_flag = true
            $('#dateTopicker').addClass('is-invalid')
        } else {
            $('#dateTopicker').removeClass('is-invalid')
        }
        if (invalid_flag) {
            return
        }
        var programme = {};
        var day = [
            []
        ];
        var finalday = [
            []
        ];
        var test = false;
        var temp; //leipei elegxos swsths symplhrwshs apo to xristi
        //Monday
        var check_day = function(day_name, inp_day, show1, start1, end1, show2, start2, end2, show3, start3, end3) {
            if (inp_day != null && inp_day != "") {
                temp = inp_day[0].split(":");
                finalday[0][0] = parseInt(temp[0]) * 100 + parseInt(temp[1]);
                temp = inp_day[1].split(":");
                finalday[0][1] = parseInt(temp[0]) * 100 + parseInt(temp[1]);
                test = true;
            }
            if (show1) {
                temp = start1.split(":");
                day[0] = parseInt(temp[0]) * 100 + parseInt(temp[1]);
                temp = end1.split(":");
                day[1] = parseInt(temp[0]) * 100 + parseInt(temp[1]);
                finalday.push(day);
                test = true;
            }
            day = [];
            if (show2) {
                temp = start2.split(":");
                day[0] = parseInt(temp[0]) * 100 + parseInt(temp[1]);
                temp = end2.split(":");
                day[1] = parseInt(temp[0]) * 100 + parseInt(temp[1]);
                finalday.push(day);
                test = true;
            }
            day = [];
            if (show3) {
                temp = start3.split(":");
                day[0] = parseInt(temp[0]) * 100 + parseInt(temp[1]);
                temp = end3.split(":");
                day[1] = parseInt(temp[0]) * 100 + parseInt(temp[1]);
                finalday.push(day);
                test = true;
            }
            if (test) {
                programme[day_name] = finalday;
            }
            test = false;
            finalday = [
                []
            ];
        }
        check_day('mon', $scope.input.monday, $scope.showmon1, $scope.monday1_start, $scope.monday1_end, $scope.showmon2, $scope.monday2_start, $scope.monday2_end, $scope.showmon3, $scope.monday3_start, $scope.monday3_end)
        check_day('tus', $scope.input.tuesday, $scope.showtus1, $scope.tuesday1_start, $scope.tuesday1_end, $scope.showtus2, $scope.tuesday2_start, $scope.tuesday2_end, $scope.showtus3, $scope.tuesday3_start, $scope.tuesday3_end)
        check_day('wed', $scope.input.wednesday, $scope.showwed1, $scope.wednesday1_start, $scope.wednesday1_end, $scope.showwed2, $scope.wednesday2_start, $scope.wednesday2_end, $scope.showwed3, $scope.wednesday3_start, $scope.wednesday3_end)
        check_day('thu', $scope.input.thursday, $scope.showthu1, $scope.thursday1_start, $scope.thursday1_end, $scope.showthu2, $scope.thursday2_start, $scope.thursday2_end, $scope.showthu3, $scope.thursday3_start, $scope.thursday3_end)
        check_day('fri', $scope.input.friday, $scope.showfri1, $scope.friday1_start, $scope.friday1_end, $scope.showfri2, $scope.friday2_start, $scope.friday2_end, $scope.showfri3, $scope.friday3_start, $scope.friday3_end)
        check_day('sat', $scope.input.saturday, $scope.showsat1, $scope.saturday1_start, $scope.saturday1_end, $scope.showsat2, $scope.saturday2_start, $scope.saturday2_end, $scope.showsat3, $scope.saturday3_start, $scope.saturday3_end)
        check_day('sun', $scope.input.sunday, $scope.showsun1, $scope.sunday1_start, $scope.sunday1_end, $scope.showsun2, $scope.sunday2_start, $scope.sunday2_end, $scope.showsun3, $scope.sunday3_start, $scope.sunday3_end)
        console.log(programme);
        
        //check hours
        if ($('#dateTopicker').val() == "") {
            invalid_flag = true
            $('#dateTopicker').addClass('is-invalid')
        } else {
            $('#dateTopicker').removeClass('is-invalid')
        }

        var category_act = $('#category_act .btn').attr('title');
        var activity_id, sportscenter_id;
        if ($scope.checked && $scope.checked2) {
            var activity_tags = $('#category_act .btn').attr('title').split(',');
            $http({
                method: "POST",
                url: "https://localhost:8765/observatory/api/products",
                headers: {
                    'Content-Type': 'application/json',
                    'X-OBSERVATORY-AUTH': $scope.GetCookie()
                },
                data: {
                    "name": $scope.Activity.name,
                    "tags": activity_tags,
                    "category": $('#category_act .btn').attr('title'),
                    "description": $scope.Activity.description
                }
            }).then(function(response_activity) {
                //get geocoding data
                console.log(response_activity.data)
                activity_id = response_activity.data.id;
                var shop_tags = $('#category_spor .btn').attr('title').split(',');
             
             var done_geocoding = function(response){
                if (!(response.data).length) {
                    alert("Μη έγκυρη διεύθυνση παρακαλώ προσπαθήστε ξανά!")
                    return
                }

                $http({
                    url: 'https://localhost:8765/observatory/api/shops',
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'X-OBSERVATORY-AUTH': $scope.GetCookie()
                    },
                    data: {
                        "name": $scope.Sportscenter.name,
                        "address": $scope.Sportscenter.address,
                        "lng": response.data[0].lon, 
                        "lat": response.data[0].lat, 
                        "tags": shop_tags,
                        "extraData": {
                            "webpage": $scope.Sportscenter.webpage
                        }
                    }
                }).then(function(response_sportscenter) {
                    sportscenter_id = response_sportscenter.data.id;
                    console.log(response_sportscenter.data)
                    console.log(programme);
                    $http({
                        url: 'https://localhost:8765/observatory/api/prices/',
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                            'X-OBSERVATORY-AUTH': $scope.GetCookie()
                        },
                        data: {
                            "productId": activity_id,
                            "shopId": sportscenter_id,
                            "price": $scope.input.price,
                            "dateFrom": $('#dateFrompicker').val(),
                            "dateTo": $('#dateTopicker').val(),
                            "extraData": {
                                "rating": $scope.input.rating,
                                "schedule": programme //created before
                            }
                        }
                    }).then(function(response3) {
                        if (response3.status == 200) {
                            alert("Επιτυχής εισαγωγή τιμής")
                            window.location.href = "/";
                        } else {}
                        console.log(response3.data);
                    })
                })

            }
                $http({
                    url: 'https://nominatim.openstreetmap.org/search/' + $scope.Sportscenter.address,
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    params: {
                        'format': 'json',
                        'limit': 1
                    }
                }, ).then(done_geocoding, function(error) {
                    console.log('No geocoding for specified address')
                })
            })
        } else if ($scope.checked) {
            $http({
                method: "POST",
                url: "https://localhost:8765/observatory/api/products",
                headers: {
                    'Content-Type': 'application/json',
                    'X-OBSERVATORY-AUTH': $scope.GetCookie()
                },
                data: {
                    "name": $scope.Activity.name,
                    "tags": activity_tags,
                    "category": $('#category_act .btn').attr('title'),
                    "description": $scope.Activity.description
                }
            }).then(function(response_activity) {
                activity_id = response_activity.data.id;
                sportscenter_id = $scope.sportscenters["sportscenter_names"][$('#sportscenter_select')[0].selectedIndex]["_id"]
                $http({
                    url: 'https://localhost:8765/observatory/api/prices/',
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'X-OBSERVATORY-AUTH': $scope.GetCookie()
                    },
                    data: {
                        "productId": activity_id,
                        "shopId": sportscenter_id,
                        "price": $scope.input.price,
                        "dateFrom": $('#dateFrompicker').val(),
                        "dateTo": $('#dateTopicker').val(),
                        "extraData": {
                            "rating": $scope.input.rating,
                            "schedule": programme //created before
                        }
                    }
                }).then(function(response3) {
                    if (response3.status == 200) {
                        alert("Επιτυχής εισαγωγή τιμής")
                        window.location.href = "/";
                    } else {}
                    console.log(response3.status);
                })
            })
        } else if ($scope.checked2) {
            var shop_tags = $('#category_spor .btn').attr('title').split(',');
            var done_geocoding = function(response) {
                $http({
                    url: 'https://localhost:8765/observatory/api/shops',
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'X-OBSERVATORY-AUTH': $scope.GetCookie()
                    },
                    data: {
                        "name": $scope.Sportscenter.name,
                        "address": $scope.Sportscenter.address,
                        "lng": response.data[0].lon, //αυτά πρέπει να παράγονται από το google maps api
                        "lat": response.data[0].lat, //αυτά πρέπει να παράγονται από το google maps api
                        "tags": shop_tags,
                        "extraData": {
                            "webpage": $scope.Sportscenter.webpage
                        }
                    }
                }).then(function(response_sportscenter) {
                    sportscenter_id = response_sportscenter.data.id;
                    activity_id = $scope.activities["activity_names"][$('#activity_select')[0].selectedIndex]["_id"]
                    console.log(sportscenter_id)
                    $http({
                        url: 'https://localhost:8765/observatory/api/prices/',
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                            'X-OBSERVATORY-AUTH': $scope.GetCookie()
                        },
                        data: {
                            "productId": activity_id,
                            "shopId": sportscenter_id,
                            "price": $scope.input.price,
                            "dateFrom": $('#dateFrompicker').val(),
                            "dateTo": $('#dateTopicker').val(),
                            "extraData": {
                                "rating": $scope.input.rating,
                                "schedule": programme //created before
                            }
                        }
                    }).then(function(response3) {
                        if (response3.status == 200) {
                            alert("Επιτυχής εισαγωγή τιμής")
                            window.location.href = "/";
                        } else {}
                        console.log(response3.status);
                    })
                })
            }
            $http({
                url: 'https://nominatim.openstreetmap.org/search/' + $scope.Sportscenter.address,
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
                params: {
                    'format': 'json',
                    'limit': 1
                }
            }, ).then(done_geocoding, function(error) {
                console.log('No geocoding for specified address')
            })
        } else {
            activity_id = $scope.activities["activity_names"][$('#activity_select')[0].selectedIndex]["_id"]
            sportscenter_id = $scope.sportscenters["sportscenter_names"][$('#sportscenter_select')[0].selectedIndex]["_id"]
            $http({
                url: 'https://localhost:8765/observatory/api/prices/',
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'X-OBSERVATORY-AUTH': $scope.GetCookie()
                },
                data: {
                    "productId": activity_id,
                    "shopId": sportscenter_id,
                    "price": $scope.input.price,
                    "dateFrom": $('#dateFrompicker').val(),
                    "dateTo": $('#dateTopicker').val(),
                    "extraData": {
                        "rating": $scope.input.rating,
                        "schedule": programme //created before
                    }
                }
            }).then(function(response3) {
                if (response3.status == 200) {
                    alert("Επιτυχής εισαγωγή τιμής")
                    window.location.href = "/";
                } else {}
                console.log(response3.status);
            })
        }
    }


	$scope.getActivity = function() {
		console.log("GAMIESAI");
		$http({
			url:'https://localhost:8765/observatory/api/prices?products=5c34cd984f396f2019fda449&shops=5c34aea34f396f1545bc3993&dateFrom=2016-01-01&dateTo=2019-10-10',//'https://localhost:8765/observatory/api/prices?shops='+$routeParams.shop.toString()+'&products='+$routeParams.product.toString(),
			method: "GET"
		}).then(function(response) {
			console.log(response);
			$scope.price = response.data;
			
			console.log($scope.price);
			$http({
				url:'https://localhost:8765/observatory/api/products/'+ response.data.prices[0].productId.toString(),
				method: "GET"

			}).then(function(response2) {
				$scope.activity = response2.data;
				console.log($scope.activity);
				$http({
					url:'https://localhost:8765/observatory/api/shops/'+ response.data.prices[0].shopId.toString(),
					method: "GET"

				}).then(function(response3) {
					$scope.shop = response3.data;
					console.log($scope.shop);
					$http({
						url: 'https://localhost:8765/observatory/api/prices/activitysportscenter?shop=5c34aea34f396f1545bc398e&product=5c34cd984f396f2019fda427',
						method: "GET"
					}).then(function(response4) {
						$scope.extra = response4.data.activitysportscenters[0][0];
						console.log($scope.extra);
					});
				});
			});	
			
		});
		}




	$scope.give_activity_list = function() {

	  $http({
                url: 'https://localhost:8765/observatory/api/prices/',
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'X-OBSERVATORY-AUTH': $scope.GetCookie()
                },
                data: {
                    "productId": '5c34cd984f396f2019fda45f',
                    "shopId": '5c34aea34f396f1545bc399c',
                    "price": 10,
                    "dateFrom": '2017-01-01',
                    "dateTo": '2019-10-12',
                    "extraData": {
                        "rating": 5,
                        "schedule": {mon:[1100,1200], tus:[], wed:[],thu:[],fri:[],sat:[],sun:[]}
                    }}
	}).then(function(response2) {
		console.log(response2.status);
		$http({
			url: 'https://localhost:8765/observatory/api/prices?products=5c34cd984f396f2019fda45f',
			method: "GET"

		}).then(function(response) {
			$scope.sportscenters = response.data.shops;
			console.log($scope.sportscenters);
		});
		});
	
	}

	$scope.give_query = function() {
	console.log("timi",$scope.price_per_day);
	console.log("period",$scope.fromDate, $scope.toDate);
	console.log("address",$scope.address);
	console.log("distance",$scope.distance);
	console.log("sportscenter",$scope.selectedSportscenter);
	console.log("category",$scope.selected_category);
	console.log("sort by",$scope.selected_sort);
	var stringinput = 'https://localhost:8765/observatory/api/prices?';
	/*if($scope.price_per_day!=null) {
		stringinput=stringinput+'price='+$scope.price_per_day.toString();+'&'} */
	if($scope.fromDate!=null&&$scope.toDate!=null) { 
		var dd = $scope.fromDate.getDate();
		var mm =$scope.fromDate.getMonth() + 1; //January is 0!

		var yyyy = $scope.fromDate.getFullYear();
		if (dd < 10) {
  			dd = '0' + dd.toString();
		} 
		if (mm < 10) {
  			mm = '0' + mm.toString();
		} 
		var from = yyyy.toString()+'-'+mm+'-'+dd;

		dd = $scope.toDate.getDate();
		mm =$scope.toDate.getMonth() + 1; //January is 0!

		yyyy = $scope.toDate.getFullYear();
		if (dd < 10) {
  			dd = '0' + dd.toString();
		} 
		if (mm < 10) {
  			mm = '0' + mm.toString();
		} 
		var to = yyyy.toString()+'-'+mm+'-'+dd;
		stringinput=stringinput+'dateFrom='+from+'&dateTo='+to+'&'}
	/*if($scope.address!=null) { 
		stringinput=stringinput+'shopAddress='+$scope.address.toString()+'&'}*/
	if($scope.distance!=null) {		//XRHSTO TIS SYNTETAGMENES!
		stringinput=stringinput+'geoDist='+$scope.distance.toString()+'&geoLng=23.727539&geoLat=37.983810&'}
	if($scope.selectedSportscenter!=null) { //perimene
			var listalength = $scope.selectedSportscenter.length;
			for (var i = 0; i < listalength; i++) {
				stringinput = stringinput+ 'shops=' + $scope.selectedSportscenter[i].toString() + '&';
		}
	
	}
	if($scope.selected_category!=null) { //logika kefalaia
		
			stringinput = stringinput+ 'tags=' + $scope.selected_category.toString() + '&';
		
	

	}
	if($scope.selected_sort!=null) { 
		if($scope.selected_sort=='Τιμή Αύξουσα')	{
			stringinput=stringinput+'sort=price|ASC'; }
		else if($scope.selected_sort=='Τιμή Φθίνουσα')	{
			stringinput=stringinput+'sort=price|DESC';}
		else if($scope.selected_sort=='Απόσταση Αύξουσα')	{
			stringinput=stringinput+'sort=geoDist|ASC'; }
		else {
			stringinput=stringinput+'sort=geoDist|DESC'; }
	}
	if(stringinput.slice(-1)=='&') {stringinput= stringinput.substring(0, stringinput.length - 1); }
	console.log("output",stringinput);

	/*$http({
		url: stringinput,
		method: "GET"
	}).then({function(response) {
		$scope.results = response.data;
	});*/
	}
	
	



 	


	

   
    $scope.check_if_logged = function() {
        $currentToken = $scope.GetCookie("activradartoken");
        if (!$currentToken) {
            return false
        } else {
            return true
        }
    }
    $scope.logoutUser = function() {
        //εδώ γράφει η έλενα κώδικα
        $currentToken = $scope.GetCookie("activradartoken");
        if (!$currentToken) {
            window.location.href = "views/Done.html"; //εδω θα μπει το homepage καποτε
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
                window.location.href = "views/Done.html"; //εδω θα μπει το homepage καποτε
            });
        }
    }
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
myApp.filter('conv_date', [function() {
    return function(n) {
        if (Math.floor(n / 10) == 0) {
            x = "00:0" + n.toString();
        } else if (Math.floor(n / 100) == 0) {
            x = "00:" + n.toString();
        } else if (Math.floor(n / 1000) == 0) {
            x = "0" + n.toString()[0] + ":" + n.toString()[1] + n.toString()[2];
        } else if (n < 2400) {
            x = n.toString()[0] + n.toString()[1] + ":" + n.toString()[2] + n.toString()[3];
        } else {
            alert("time_formation error");
            return -1;
        }
        return x;
    };
}]);