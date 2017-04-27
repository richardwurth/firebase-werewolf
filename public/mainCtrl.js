angular.module('app').controller('mainCtrl', function($scope, $firebaseObject, $firebaseArray, $firebaseAuth){
  var ref = firebase.database().ref().child('profiles');
  var secondRef = firebase.database().ref();
  var firebaseObj = $firebaseObject(secondRef);
  console.log(firebaseObj);
  let testLine = "Lerium ipsum";
  firebaseObj.thing = testLine;

  // var arr = $firebaseArray(ref);
  // $scope.profiles = $firebaseArray(ref);
  firebaseArr = $firebaseArray(ref);
  console.log(firebaseArr);


  // var query = profilesRef.orderByChild("timestamp").limitToLast(25);
  // $scope.filteredProfiles = $firebaseArray(query);
  // $scope.data.firstName = 'Richard';
  // $scope.data.lastName = 'Wurth';
  // console.log($scope.data);
  // $scope.testResult = "";

    // $scope.data.playersList.$save();
  //   $scope.testResult = prompt("What is the test value?");
    // $scope.data.players = profiles;
    // $scope.profiles.$remove(profiles);
    // $scope.profiles.$remove($scope.profiles[0]);
    // $scope.profiles.$add(profiles);
    // $scope.data.$save($scope.data.players);
    // console.log($scope.profiles[0][0].firstName);
  //   $scope.removalTest = function() {
  //     $scope.profiles.$remove($scope.profiles[0]);
  //     // $scope.profiles.$add(profiles[0]);
  //     // firebaseArr.profiles = $scope.profiles[0];
  //     console.log($scope.profiles);
  //     console.log(profiles);
  //   };
  //   $scope.firebaseTest = function() {
  //     $scope.profiles.$remove($scope.profiles[0]);
  //     $scope.profiles.$add(profiles);
  //     // firebaseArr.profiles = $scope.profiles[0];
  //     console.log($scope.profiles);
  //     console.log(profiles);
  //   };
  //   $scope.refreshTest = function() {
  //     console.log("Success!");
  //     setInterval(function(){
  //       $scope.profiles.$remove($scope.profiles[0]);
  //       $scope.profiles.$add(profiles);
  //       firebaseArr.profiles = $scope.profiles[0];
  //       // $scope.firebaseTest();
  //       // console.log(firebaseArr.profiles);
  //       // return firebaseArr.profiles = $scope.profiles[0];
  //       console.log(profiles);
  //       console.log($scope.profiles);
  //     }, 5000);
  // };
  let monitorCheck = false;
  firebaseObj.timer = monitorCheck;

  firebaseObj.daytime = false;
  // firebaseObj.$save();

  var unwatch = firebaseObj.$watch(function(){
    if (firebaseObj.daytime === false) {
      $('body').css('background-image','url("https://dl.dropbox.com/s/12i9f4kxm9uz71c/day_layered.jpg")');
      $scope.timeOfDay = "Night";
    } else if (firebaseObj.daytime === true) {
      $('body').css('background-image','url("https://dl.dropbox.com/s/5hqbjkhskrz6c47/night_layered.jpg")');
      $scope.timeOfDay = "Day";
    }
    // $scope.profileTracker[0] = firebaseArr.profiles;

    console.log(firebaseArr.profiles);
    console.log($scope.profileTracker);
    // firebaseObj.$save();
  });



  $scope.listen = function() {
     firebaseObj.timer = !firebaseObj.timer;
     firebaseObj.$save();
    // console.log("Success!");
    // setInterval(function(){
    //   // $scope.profiles.$remove($scope.profiles[0]);
    //   // $scope.profiles.$add(profiles);
    //   firebaseArr.profiles = $scope.profiles[0];
    //   // $scope.firebaseTest();
    //   // console.log(firebaseArr.profiles);
    //   // return firebaseArr.profiles = $scope.profiles[0];
    //   console.log(profiles);
    //   console.log($scope.profiles);
    // }, 5000);
};

//   const firebaseTest = function() {
//   console.log($scope.profiles);
//   firebaseArr.profiles = $scope.profiles[0];
// };

  // $scope.profile = $firebaseObject(ref.child('profiles').child('Object'));
  // let firstInitialPrompt = prompt("What is the initial of your first name?");
  // syncObject.$bindTo($scope, 'data');
  // $scope.firstInitial = firstInitialPrompt;
  // $scope.firstOne = "";
  // $scope.lastOne = "";
  // $scope.fullNameOne = "";


  // $scope.profiles = ["profile.html"];
  let profiles = [];
  $scope.profileTracker = [];
  // firebaseArr.profiles = [];

  // firebaseArr.profiles = [];
  // firebaseArr.profiles = firebaseArr.profiles;


  // $scope.refreshTest = function(){
  // };

  $scope.addProfile = function() {
    // firebase.database().ref('/').set({
    //   fullNameOne: 'Richard Wurth',
    // role: 'Hunter',
    let fullNameOne = prompt('What is the Full Name of the player to add?');
    let role = prompt('What is the role of this player?');
    let splitNameOne = fullNameOne.split(" ");
    let lastOne = splitNameOne[1].charAt(0).toUpperCase()+".";
    let firstOne = splitNameOne[0].charAt(0).toUpperCase()+".";
    // newPerson: {
    // let fullNameOne = prompt('What is the Full Name of the player to add?');
    // let role = prompt('What is the role of this player?')
    // let splitNameOne = fullNameOne.split(" ");
    let newPerson = {
      fullNameOne: fullNameOne,
      firstName: fullNameOne,
      // firebaseArr.profiles[index].firstName = fullNameOne;
      lastOne: lastOne,
      firstOne: firstOne,
      custom: true,
      showDead: false,
      role: role
      // killSwitch: function() {
      //   this.kill = !this.kill;
      //   console.log(kill);
      // }

      // $scope.toggle = function () {
      //   $scope.data.active = !$scope.data.active;
      // toggleCustom: function() {
      //   console.log(this.custom);
      //   this.custom = !this.custom;
      // },


      // firebaseArr.profiles[index].lastOne = splitNameOne[1].charAt(0).toUpperCase()+".";
      // firebaseArr.profiles[index].firstOne = splitNameOne[0].charAt(0).toUpperCase()+".";

    };
    // });
    // firebaseArr.profiles.push(newPerson);
    profiles.push(newPerson);
    $scope.profileTracker = profiles;
    firebaseArr.profiles = profiles;
    console.log($scope.profileTracker);
    console.log(firebaseArr.profiles);
    firebaseArr.$remove(profiles);
    firebaseArr.$add(profiles);
    // $scope.data.showMe = firebaseArr.profiles;
    // console.log($scope.data);
    // $scope.data.save();
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
    // }
    //   let passwordCheck = prompt("Please enter the Master Password");
    //   if (passwordCheck === masterPassword) {
    // } else {
    //   alert("Incorrect password was entered.");
    // }
  };

  $scope.deleteOne = function(){
    let passwordCheck = prompt("Please enter the Master Password");
    if (passwordCheck === masterPassword) {
      $('#profile-one').hide();
    } else {
      alert("Incorrect password was entered.");
    }
  };

  // $scope.killOne = function(){
  //   let passwordCheck = prompt("Please enter the Master Password");
  //   if (passwordCheck === masterPassword) {
  //   $('#profile-one-content').hide();
  //   $('#rip-one').css("display","flex");
  //   $('#rip-one-name').show();
  // } else {
  //   alert("Incorrect password was entered.");
  // }
  // };
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


  $scope.profileFrame = "http://img06.deviantart.net/b2bc/i/2015/202/b/7/638_surf_frame_by_tigers_stock-d926rr4.png";
  // Below is the daytime and night time changing function
  // let daytime = false;
  // var nextTime = "Day";
  $scope.timeOfDay = "Day";

  $scope.backgroundChange = function(){
    firebaseObj.daytime = !firebaseObj.daytime;
    firebaseObj.$save();
};


  // $scope.backgroundChange = function(){
  //   let passwordCheck = prompt("Please enter the Master Password");
  //   if (passwordCheck === masterPassword) {
  //     if (daytime === false) {
  //       $('body').css('background-image','url("https://dl.dropbox.com/s/12i9f4kxm9uz71c/day_layered.jpg")');
  //       daytime = true;
  //       $scope.timeOfDay = "Night";
  //       // nextTime = "Night"
  //     } else {
  //       $('body').css('background-image','url("https://dl.dropbox.com/s/5hqbjkhskrz6c47/night_layered.jpg")');
  //       daytime = false;
  //       $scope.timeOfDay = "Day";
  //       // nextTime = "Day";
  //     }
  //   } else {
  //     alert("Incorrect password was entered.");
  //   }
  // };
  // Above is the daytime and night time changing function

});
