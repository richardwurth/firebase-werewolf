angular.module('app').controller('mainCtrl', function($scope, $firebaseObject, $firebaseArray, $firebaseAuth){
  var ref = firebase.database().ref().child('profiles');
  var secondRef = firebase.database().ref();
  var firebaseObj = $firebaseObject(secondRef);
  let testLine = "Lerium ipsum";
  firebaseObj.thing = testLine;
  var firebaseArr = $firebaseArray(ref);
  firebaseArr.profiles = firebaseArr;

  $scope.login = function(){
    let temp = prompt("What's the password?");
    if (temp === firebaseObj.password) {
      $(".hidden").css('display','inline');
    }
  };

  $scope.showingChat = false;
  $scope.showChat = function() {
    $('#chatBump').css('animation-name','animate_bump');
    $scope.showingChat = !$scope.showingChat;
  };

  let monitorCheck = false;
  firebaseObj.timer = monitorCheck;

  firebaseObj.daytime = false;

  let currentProfiles = function(profilesTemp) {
    temp = [];
    for (var i = 0; i < profilesTemp.length; i++) {
      temp = profilesTemp[i];
    };
    return temp;
  };
  let profiles = [];
  $scope.profileTracker = currentProfiles(firebaseArr.profiles);
  $scope.testButton = function(){

  };
  $scope.profileTracker = profiles;


  $scope.addProfile = function() {
    let fullNameOne = prompt('What is the Full Name of the player to add?');
    let role = prompt('What is the role of this player?');
    let splitNameOne = fullNameOne.split(" ");
    let lastOne = splitNameOne[1].charAt(0).toUpperCase()+".";
    let firstOne = splitNameOne[0].charAt(0).toUpperCase()+".";
    let newPerson = {
      fullNameOne: fullNameOne,
      firstName: fullNameOne,
      lastOne: lastOne,
      firstOne: firstOne,
      custom: true,
      showDead: false,
      role: role
    };
    profiles.push(newPerson);
    firebaseArr[0] = profiles;
    $scope.profileTracker = profiles;
    firebaseArr.$add(profiles);
  };

  let masterPassword = "";

  $scope.passwordSet = function(){
    masterPassword = prompt("Please enter what you would like the password to be set to.");
    $('#password-set').hide();
  };

  $scope.addOne = function(index){
    let fullNameOne = prompt('What is the Full Name of the player to add?');
    $('#create').hide();
    $('#delete').hide();
    $('#kill').show();
  };

  $scope.deleteOne = function(){
    let passwordCheck = prompt("Please enter the Master Password");
    if (passwordCheck === masterPassword) {
      $('#profile-one').hide();
    } else {
      alert("Incorrect password was entered.");
    }
  };

  $scope.reviveOne = function(){
    let passwordCheck = prompt("Please enter the Master Password");
    if (passwordCheck === masterPassword) {
      let response = prompt(`You are about to revive this person; type YES to confirm this action.`).toUpperCase();
      if (response === "YES") {
        $('#profile-one-content').show();
        $('#rip-one').css("display","none");
      } else {
        alert("You have responded with something other than YES; no changes will take affect.");
      }
    } else {
      alert("Incorrect password was entered.");
    }
  };



  var unwatch = firebaseObj.$watch(function(){
    if (firebaseObj.daytime === false) {
      $('body').css('background-image','url("https://dl.dropbox.com/s/12i9f4kxm9uz71c/day_layered.jpg")');
      $scope.timeOfDay = "Night";
    } else if (firebaseObj.daytime === true) {
      $('body').css('background-image','url("https://dl.dropbox.com/s/5hqbjkhskrz6c47/night_layered.jpg")');
      $scope.timeOfDay = "Day";
    }


  });
  let wasClicked = false;

var arrWatch = firebaseArr.$watch(function(){
  $scope.profileTracker = currentProfiles(firebaseArr.profiles);
  profiles = currentProfiles(firebaseArr.profiles);
});



  $scope.listen = function() {
    firebaseObj.timer = !firebaseObj.timer;
    firebaseObj.$save();
  };


  $scope.profileFrame = "http://img06.deviantart.net/b2bc/i/2015/202/b/7/638_surf_frame_by_tigers_stock-d926rr4.png";
  $scope.timeOfDay = "Day";

  $scope.backgroundChange = function(){
    firebaseObj.daytime = !firebaseObj.daytime;
    firebaseObj.$save();
  };

});
