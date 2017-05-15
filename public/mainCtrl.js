angular.module('app').controller('mainCtrl', function($scope, $firebaseObject, $firebaseArray, $firebaseAuth){

  var ref = firebase.database().ref().child('profiles');
  var chatRef = firebase.database().ref().child('chats');
  var werewolfChatRef = firebase.database().ref().child('werewolfChat')
  var announcementsRef = firebase.database().ref().child('announcements')
  var secondRef = firebase.database().ref();
  var oneChatRef = firebase.database().ref().child('role_one_chat');
  var twoChatRef = firebase.database().ref().child('role_two_chat');


  var firebaseObj = $firebaseObject(secondRef);
  var firebaseArr = $firebaseArray(ref);
  var firebaseChats = $firebaseArray(chatRef);
  var firebaseWerewolfChats = $firebaseArray(werewolfChatRef);
  var firebaseRoleOneChat = $firebaseArray(oneChatRef);
  var firebaseRoleTwoChat = $firebaseArray(twoChatRef);
  var firebaseAnnouncements = $firebaseArray(announcementsRef);

  firebaseArr.profiles = firebaseArr;

  $scope.login = function(){
    let temp = prompt("What's the password?");
    if (temp === firebaseObj.password) {
      $(".hidden").css('display','inline');
    }
  };

  let username = prompt("What is your first name?");

  $scope.chatLog = $firebaseArray(chatRef);
  $scope.werewolfchatLog = $firebaseArray(werewolfChatRef);
  $scope.onechatLog = $firebaseArray(oneChatRef);
  $scope.twochatLog = $firebaseArray(twoChatRef);
  $scope.announcementsLogs = $firebaseArray(announcementsRef);

  let werewolfPassword = "TEST";

  $scope.isWerewolf = false;
  $scope.publicNotice = false;
  $scope.showKillButton = false;
  $scope.addPlayerButton = false;
  $scope.timeChangeButton = false;

  $scope.roleOne = false;
  let roleOneNewMessage = false;

  $scope.roleTwo = false;
  let roleTwoNewMessage = false;

  $scope.roleThree = false;
  let roleThreeNewMessage = false;

  $scope.roleFour = false;
  let roleFourNewMessage = false;

  $scope.roleFive = false;
  let roleFiveNewMessage = false;

  $scope.roleSix = false;
  let roleSixNewMessage = false;



  $scope.getRole = function(){
    let declaration = prompt("What is the role that you have been given?").toUpperCase();
    if (declaration == "WEREWOLF"){
      let verify = prompt("Please enter the password provided to you by the Game Master.").toUpperCase();
      if (verify == werewolfPassword) {
        $scope.isWerewolf = true;
        console.log($scope.isWerewolf);
      } else {
        alert("Nice try.");
      }
    } else {
      console.log("This is incorrect");
      console.log(declaration);
      console.log($scope.isWerewolf);
    }
  };

  let adminPassword = "TEST123";

  $scope.generalTest = function(){
      let verify = prompt("Please enter the Admin Password").toUpperCase();
      if (verify == adminPassword) {
        $scope.isWerewolf = true;
        $scope.publicNotice = true;
        $scope.showKillButton = true;
        $scope.addPlayerButton = true;
        $scope.timeChangeButton = true;
      } else {
        alert("Nice try.");
      }
  };

  $scope.othername = function(){
      var input = document.getElementById("userInput").value;
      var temp = {
        username : username,
        message : input
      };
      $scope.chatLog.$add(temp);
      console.log($scope.chatLog);
      document.getElementById("userInput").value = "";
  };
  $scope.werewolfSend = function(){
    var input = document.getElementById("werewolfUserInput").value;
    var temp = {
      username : username,
      message : input
    };
    $scope.werewolfchatLog.$add(temp);
    document.getElementById("werewolfUserInput").value = "";
  };
  $scope.oneSend = function(){
    var input = document.getElementById("oneUserInput").value;
    var temp = {
      username : username,
      message : input
    };
    $scope.onechatLog.$add(temp);
    document.getElementById("oneUserInput").value = "";
  };
  $scope.twoSend = function(){
    var input = document.getElementById("twoUserInput").value;
    var temp = {
      username : username,
      message : input
    };
    $scope.twochatLog.$add(temp);
    document.getElementById("twoUserInput").value = "";
  };
  $scope.threeSend = function(){
    var input = document.getElementById("threeUserInput").value;
    var temp = {
      username : username,
      message : input
    };
    $scope.threechatLog.$add(temp);
    document.getElementById("threeUserInput").value = "";
  };
  $scope.fourSend = function(){
    var input = document.getElementById("fourUserInput").value;
    var temp = {
      username : username,
      message : input
    };
    $scope.fourchatLog.$add(temp);
    document.getElementById("fourUserInput").value = "";
  };
  $scope.fiveSend = function(){
    var input = document.getElementById("fiveUserInput").value;
    var temp = {
      username : username,
      message : input
    };
    $scope.fivechatLog.$add(temp);
    document.getElementById("fiveUserInput").value = "";
  };
  $scope.sixSend = function(){
    var input = document.getElementById("sixUserInput").value;
    var temp = {
      username : username,
      message : input
    };
    $scope.sixchatLog.$add(temp);
    document.getElementById("sixUserInput").value = "";
  };

  $scope.announcementsSend = function(){
    var input = document.getElementById("announcementsInput").value;
    var temp = {
      message : input
    };
    $scope.announcementsLogs.$add(temp);
    document.getElementById("announcementsInput").value = "";
  };

  let showingChat = false;
  $scope.showChat = function() {
    if (showingChat === false){
      $('#chatBump').css('left','235px');
      $('#arrow-direction').css('transform','rotate(' + 180 + 'deg)');
      showingChat = true;
    } else {
      $('#chatBump').css('left','0px');
      $('#arrow-direction').css('transform','rotate(' + 0 + 'deg)');
      showingChat = false;
    }
  };

  let showingWerewolfChat = false;
  $scope.showWerewolfChat = function() {
    if (showingWerewolfChat === false){
      $('#werewolf-chatBump').css('right','235px');
      $('#werewolf-arrow-direction').css('transform','rotate(' + 0 + 'deg)');
      $('#werewolf-chatWindow').css('width','230px');
      $('#werewolf-form').show();
      showingWerewolfChat = true;
    } else {
      $('#werewolf-chatBump').css('right','0px');
      $('#werewolf-arrow-direction').css('transform','rotate(' + 180 + 'deg)');
      $('#werewolf-chatWindow').css('width','0px');
      $('#werewolf-form').hide();
      showingWerewolfChat = false;
    }
  };

  let showingRoleOneChat = false;
  $scope.showRoleOneChat = function() {
    if (showingRoleOneChat === false){
      $('#one-chatBump').css('right','235px');
      $('#one-arrow-direction').css('transform','rotate(' + 0 + 'deg)');
      $('#one-chatWindow').css('width','230px');
      $('#one-form').show();
      $('#one-chatBump').css('background-color','rgba(140, 140, 140, 0.6)');
      showingRoleOneChat = true;
    } else {
      $('#one-chatBump').css('right','0px');
      $('#one-arrow-direction').css('transform','rotate(' + 180 + 'deg)');
      $('#one-chatWindow').css('width','0px');
      $('#one-form').hide();
      showingRoleOneChat = false;
    }
  };
  let showingRoleTwoChat = false;
  $scope.showRoleTwoChat = function() {
    if (showingRoleTwoChat === false){
      $('#two-chatBump').css('right','235px');
      $('#two-arrow-direction').css('transform','rotate(' + 0 + 'deg)');
      $('#two-chatWindow').css('width','230px');
      $('#two-form').show();
      showingRoleTwoChat = true;
    } else {
      $('#two-chatBump').css('right','0px');
      $('#two-arrow-direction').css('transform','rotate(' + 180 + 'deg)');
      $('#two-chatWindow').css('width','0px');
      $('#two-form').hide();
      showingRoleTwoChat = false;
    }
  };
  let showingRoleThreeChat = false;
  $scope.showRoleThreeChat = function() {
    if (showingRoleThreeChat === false){
      $('#three-chatBump').css('right','235px');
      $('#three-arrow-direction').css('transform','rotate(' + 0 + 'deg)');
      $('#three-chatWindow').css('width','230px');
      $('#three-form').show();
      showingRoleThreeChat = true;
    } else {
      $('#three-chatBump').css('right','0px');
      $('#three-arrow-direction').css('transform','rotate(' + 180 + 'deg)');
      $('#three-chatWindow').css('width','0px');
      $('#three-form').hide();
      showingRoleThreeChat = false;
    }
  };
  let showingRoleFourChat = false;
  $scope.showRoleFourChat = function() {
    if (showingRoleFourChat === false){
      $('#four-chatBump').css('right','235px');
      $('#four-arrow-direction').css('transform','rotate(' + 0 + 'deg)');
      $('#four-chatWindow').css('width','230px');
      $('#four-form').show();
      showingRoleFourChat = true;
    } else {
      $('#four-chatBump').css('right','0px');
      $('#four-arrow-direction').css('transform','rotate(' + 180 + 'deg)');
      $('#four-chatWindow').css('width','0px');
      $('#four-form').hide();
      showingRoleFourChat = false;
    }
  };
  let showingRoleFiveChat = false;
  $scope.showRoleFiveChat = function() {
    if (showingRoleFiveChat === false){
      $('#five-chatBump').css('right','235px');
      $('#five-arrow-direction').css('transform','rotate(' + 0 + 'deg)');
      $('#five-chatWindow').css('width','230px');
      $('#five-form').show();
      showingRoleFiveChat = true;
    } else {
      $('#five-chatBump').css('right','0px');
      $('#five-arrow-direction').css('transform','rotate(' + 180 + 'deg)');
      $('#five-chatWindow').css('width','0px');
      $('#five-form').hide();
      showingRoleFiveChat = false;
    }
  };
  let showingRoleSixChat = false;
  $scope.showRoleSixChat = function() {
    if (showingRoleSixChat === false){
      $('#six-chatBump').css('right','235px');
      $('#six-arrow-direction').css('transform','rotate(' + 0 + 'deg)');
      $('#six-chatWindow').css('width','230px');
      $('#six-form').show();
      showingRoleSixChat = true;
    } else {
      $('#six-chatBump').css('right','0px');
      $('#six-arrow-direction').css('transform','rotate(' + 180 + 'deg)');
      $('#six-chatWindow').css('width','0px');
      $('#six-form').hide();
      showingRoleSixChat = false;
    }
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


  $scope.profileTracker = profiles;
  $scope.roleOneName = "";
  $scope.roleTwoName = "";
  $scope.roleThreeName = "";
  $scope.roleFourName = "";
  $scope.roleFiveName = "";
  $scope.roleSixName = "";


  $scope.addProfile = function() {
    let fullNameOne = prompt('What is the Full Name of the player to add?');
    let role = prompt('What is the role of this player?');
    if (role === "villager" || role === "VILLAGER" || role === "Villager") {
      alert("OK it's a common folk!");
    } else if ($scope.roleOneName === "") {
        $scope.roleOne = true;
        $scope.roleOneName = role;
      } else if ($scope.roleOneName !== "") {
        if ($scope.roleTwoName === "") {
          $scope.roleTwo = true;
          $scope.roleTwoName = role;
        } else if ($scope.roleTwoName !== "") {
          if ($scope.roleThreeName === "") {
            $scope.roleThree = true;
            $scope.roleThreeName = role;
          } else if ($scope.roleThreeName !== "") {
            if ($scope.roleFourName === "") {
              $scope.roleFour = true;
              $scope.roleFourName = role;
            } else if ($scope.roleFiveName !== "") {
              if ($scope.roleFiveName === "") {
                $scope.roleSix = true;
                $scope.roleSixName = role;
              } else if ($scope.roleSixName !== "") {
                  alert("No more room for additional roles!");
              }
            }
          }
        }
      }

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
      $('#form').show();
      $('#werewolf-chatBump').hide();
      $scope.timeOfDay = "Night";
    } else if (firebaseObj.daytime === true) {
      $('body').css('background-image','url("https://dl.dropbox.com/s/5hqbjkhskrz6c47/night_layered.jpg")');
      $('#werewolf-chatBump').show();
      $('#form').hide();
      $scope.timeOfDay = "Day";
    }
    // $scope.chatLog = firebaseObj.thing;

  });
  let wasClicked = false;
  $scope.newMessageTest = function(){
    roleOneNewMessage = true;
    $('#one-chatBump').css('background-color','white');
  };

var arrWatch = firebaseArr.$watch(function(){
  $scope.profileTracker = currentProfiles(firebaseArr.profiles);
  profiles = currentProfiles(firebaseArr.profiles);
});



  // $scope.listen = function() {
  //   firebaseObj.timer = !firebaseObj.timer;
  //   firebaseObj.$save();
  // };


  $scope.profileFrame = "http://img06.deviantart.net/b2bc/i/2015/202/b/7/638_surf_frame_by_tigers_stock-d926rr4.png";
  $scope.timeOfDay = "Day";

  $scope.backgroundChange = function(){
    firebaseObj.daytime = !firebaseObj.daytime;
    firebaseObj.$save();
  };

});
