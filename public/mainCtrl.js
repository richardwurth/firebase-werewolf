angular.module('app').controller('mainCtrl', function($scope, $firebaseObject, $firebaseArray, $firebaseAuth){

  var ref = firebase.database().ref().child('profiles');
  var chatRef = firebase.database().ref().child('chats');
  // var werewolfChatRef = firebase.database().ref().child('werewolfChat')
  var announcementsRef = firebase.database().ref().child('announcements');
  var secondRef = firebase.database().ref();
  var oneChatRef = firebase.database().ref().child('role_one_chat');
  var twoChatRef = firebase.database().ref().child('role_two_chat');
  var threeChatRef = firebase.database().ref().child('role_three_chat');
  var fourChatRef = firebase.database().ref().child('role_four_chat');
  var fiveChatRef = firebase.database().ref().child('role_five_chat');
  var sixChatRef = firebase.database().ref().child('role_six_chat');
  var sevenChatRef = firebase.database().ref().child('role_seven_chat');
  var eightChatRef = firebase.database().ref().child('role_eight_chat');
  var nineChatRef = firebase.database().ref().child('role_nine_chat');
  var tenChatRef = firebase.database().ref().child('role_ten_chat');
  var elevenChatRef = firebase.database().ref().child('role_eleven_chat');
  var twelveChatRef = firebase.database().ref().child('role_twelve_chat');


  var firebaseObj = $firebaseObject(secondRef);
  var firebaseArr = $firebaseArray(ref);
  var firebaseChats = $firebaseArray(chatRef);
  // var firebaseWerewolfChats = $firebaseArray(werewolfChatRef);
  var firebaseRoleOneChat = $firebaseArray(oneChatRef);
  var firebaseRoleTwoChat = $firebaseArray(twoChatRef);
  var firebaseRoleThreeChat = $firebaseArray(threeChatRef);
  var firebaseRoleFourChat = $firebaseArray(fourChatRef);
  var firebaseRoleFiveChat = $firebaseArray(fiveChatRef);
  var firebaseRoleSixChat = $firebaseArray(sixChatRef);
  var firebaseRoleSevenChat = $firebaseArray(sevenChatRef);
  var firebaseRoleEightChat = $firebaseArray(eightChatRef);
  var firebaseRoleNineChat = $firebaseArray(nineChatRef);
  var firebaseRoleTenChat = $firebaseArray(tenChatRef);
  var firebaseRoleElevenChat = $firebaseArray(elevenChatRef);
  var firebaseRoleTwelveChat = $firebaseArray(twelveChatRef);

  var firebaseAnnouncements = $firebaseArray(announcementsRef);


  firebaseArr.profiles = firebaseArr;

  $scope.login = function(){
    let temp = prompt("What's the password?");
    if (temp === firebaseObj.password) {
      $(".hidden").css('display','inline');
    }
  };

  let username = "";
  $scope.noUsername = true;
  $scope.settingUsername = false;
  $scope.setUsername = function(){
    if ($scope.settingUsername === true){
      $scope.settingUsername = false;
    } else {
      $scope.settingUsername = true;
    }
  };

  // $scope.usernameSet = function(){
  //   username = document.getElementById("usernameInput").value;
  //   $scope.noUsername = false;
  //   $scope.settingUsername = false;
  // };

  let menuOpen = false;

  $scope.menuBackground = function(){
    if(menuOpen === false){
      $('#ham-menu').css("z-index","100");
      menuOpen = true;
    } else {
      $('#ham-menu').css("z-index","10");
      menuOpen = false;
    }
  };

  $scope.chatLog = $firebaseArray(chatRef);
  // $scope.werewolfchatLog = $firebaseArray(werewolfChatRef);
  $scope.onechatLog = $firebaseArray(oneChatRef);
  $scope.twochatLog = $firebaseArray(twoChatRef);
  $scope.threechatLog = $firebaseArray(threeChatRef);
  $scope.fourchatLog = $firebaseArray(fourChatRef);
  $scope.fivechatLog = $firebaseArray(fiveChatRef);
  $scope.sixchatLog = $firebaseArray(sixChatRef);
  $scope.sevenchatLog = $firebaseArray(sevenChatRef);
  $scope.eightchatLog = $firebaseArray(eightChatRef);
  $scope.ninechatLog = $firebaseArray(nineChatRef);
  $scope.tenchatLog = $firebaseArray(tenChatRef);
  $scope.elevenchatLog = $firebaseArray(elevenChatRef);
  $scope.twelvechatLog = $firebaseArray(twelveChatRef);


  $scope.announcementsLogs = $firebaseArray(announcementsRef);

  // let werewolfPassword = "TEST";

  // $scope.isWerewolf = false;
  $scope.publicNotice = false;
  $scope.showKillButton = false;
  $scope.addPlayerButton = false;
  $scope.timeChangeButton = false;

  $scope.roleOne = false;
  firebaseObj.roleOneNewMessage = false;
  firebaseObj.roleOneName = "";

  $scope.roleTwo = false;
  firebaseObj.roleTwoNewMessage = false;
  firebaseObj.roleTwoName = "";

  $scope.roleThree = false;
  firebaseObj.roleThreeNewMessage = false;
  firebaseObj.roleThreeName = "";

  $scope.roleFour = false;
  firebaseObj.roleFourNewMessage = false;
  firebaseObj.roleFourName = "";

  $scope.roleFive = false;
  firebaseObj.roleFiveNewMessage = false;
  firebaseObj.roleFiveName = "";

  $scope.roleSix = false;
  firebaseObj.roleSixNewMessage = false;
  firebaseObj.roleSixName = "";

  $scope.roleSeven = false;
  firebaseObj.roleSevenNewMessage = false;
  firebaseObj.roleSevenName = "";

  $scope.roleEight = false;
  firebaseObj.roleEightNewMessage = false;
  firebaseObj.roleEightName = "";

  $scope.roleNine = false;
  firebaseObj.roleNineNewMessage = false;
  firebaseObj.roleNineName = "";

  $scope.roleTen = false;
  firebaseObj.roleTenNewMessage = false;
  firebaseObj.roleTenName = "";

  $scope.roleEleven = false;
  firebaseObj.roleElevenNewMessage = false;
  firebaseObj.roleElevenName = "";

  $scope.roleTwelve = false;
  firebaseObj.roleTwelveNewMessage = false;
  firebaseObj.roleTwelveName = "";

  firebaseObj.villageNewMessage = false;

  $scope.getRole = function(){
    let declaration = prompt("Please enter the password for your role.");
    if (declaration == firebaseObj.roleOnePassword){
      $scope.roleOne = true;
    } else if (declaration == firebaseObj.roleTwoPassword){
      $scope.roleTwo = true;
    } else if (declaration == firebaseObj.roleThreePassword){
      $scope.roleThree = true;
    } else if (declaration == firebaseObj.roleFourPassword){
      $scope.roleFour = true;
    } else if (declaration == firebaseObj.roleFivePassword){
      $scope.roleFive = true;
    } else if (declaration == firebaseObj.roleSixPassword){
      $scope.roleSix = true;
    } else if (declaration == firebaseObj.roleSevenPassword){
      $scope.roleSeven = true;
    } else if (declaration == firebaseObj.roleEightPassword){
      $scope.roleEight = true;
    } else if (declaration == firebaseObj.roleNinePassword){
      $scope.roleNine = true;
    } else if (declaration == firebaseObj.roleTenPassword){
      $scope.roleTen = true;
    } else if (declaration == firebaseObj.roleElevenPassword){
      $scope.roleEleven = true;
    } else if (declaration == firebaseObj.roleTwelvePassword){
      $scope.roleTwelve = true;
    } else {
      alert("That password does not match any roles.");
    }
  };

  let adminPassword = "TEST123";
  let isAdmin = false;
  $scope.nonAdmin = true;

  $scope.showChats = function(){
    $scope.roleOne = true;
    $scope.roleTwo = true;
    $scope.roleThree = true;
    $scope.roleFour = true;
    $scope.roleFive = true;
    $scope.roleSix = true;
    $scope.roleSeven = true;
    $scope.roleEight = true;
    $scope.roleNine = true;
    $scope.roleTen = true;
    $scope.roleEleven = true;
    $scope.roleTwelve = true;

    if(!firebaseObj.roleOneName){
      $scope.roleOneName = "";
    } else {
      $scope.roleOneName = firebaseObj.roleOneName;
    }
    if(!firebaseObj.roleTwoName){
      $scope.roleTwoName = "";
    } else {
      $scope.roleTwoName = firebaseObj.roleTwoName;
    }
    if(!firebaseObj.roleThreeName){
      $scope.roleThreeName = "";
    } else {
      $scope.roleThreeName = firebaseObj.roleThreeName;
    }
    if(!firebaseObj.roleFourName){
      $scope.roleFourName = "";
    } else {
      $scope.roleFourName = firebaseObj.roleFourName;
    }
    if(!firebaseObj.roleFiveName){
      $scope.roleFiveName = "";
    } else {
      $scope.roleFiveName = firebaseObj.roleFiveName;
    }
    if(!firebaseObj.roleSixName){
      $scope.roleSixName = "";
    } else {
      $scope.roleSixName = firebaseObj.roleSixName;
    }
    if(!firebaseObj.roleSevenName){
      $scope.roleSevenName = "";
    } else {
      $scope.roleSevenName = firebaseObj.roleSevenName;
    }
    if(!firebaseObj.roleEightName){
      $scope.roleEightName = "";
    } else {
      $scope.roleEightName = firebaseObj.roleEightName;
    }
    if(!firebaseObj.roleNineName){
      $scope.roleNineName = "";
    } else {
      $scope.roleNineName = firebaseObj.roleNineName;
    }
    if(!firebaseObj.roleTenName){
      $scope.roleTenName = "";
    } else {
      $scope.roleTenName = firebaseObj.roleTenName;
    }
    if(!firebaseObj.roleElevenName){
      $scope.roleElevenName = "";
    } else {
      $scope.roleElevenName = firebaseObj.roleElevenName;
    }
    if(!firebaseObj.roleTwelveName){
      $scope.roleTwelveName = "";
    } else {
      $scope.roleTwelveName = firebaseObj.roleTwelveName;
    }
    // $scope.roleOneName = firebaseObj.roleOneName;
    // $scope.roleTwoName = firebaseObj.roleTwoName;
    // $scope.roleThreeName = firebaseObj.roleThreeName;
    // $scope.roleFourName = firebaseObj.roleFourName;
    // $scope.roleFiveName = firebaseObj.roleFiveName;
    // $scope.roleSixName = firebaseObj.roleSixName;
  };

  $scope.generalTest = function(){
    let verify = prompt("Please enter the Admin Password").toUpperCase();
    if (verify == adminPassword) {
      isAdmin = true;
      $scope.showAllChats = true;
      // $scope.isWerewolf = true;
      $scope.publicNotice = true;
      $scope.addPlayerButton = true;
      $scope.timeChangeButton = true;
      $scope.nonAdmin = false;
      $scope.showChats();
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
    firebaseObj.villageNewMessage = true;
    firebaseObj.$save();
    $scope.chatLog.$add(temp);
    console.log($scope.chatLog);
    document.getElementById("userInput").value = "";
  };
  $scope.oneSend = function(){
    var input = document.getElementById("oneUserInput").value;
    var temp = {
      username : username,
      message : input
    };
    firebaseObj.roleOneNewMessage = true;
    firebaseObj.$save();
    $scope.onechatLog.$add(temp);
    document.getElementById("oneUserInput").value = "";
  };
  $scope.twoSend = function(){
    var input = document.getElementById("twoUserInput").value;
    var temp = {
      username : username,
      message : input
    };
    firebaseObj.roleTwoNewMessage = true;
    firebaseObj.$save();
    $scope.twochatLog.$add(temp);
    document.getElementById("twoUserInput").value = "";
  };
  $scope.threeSend = function(){
    var input = document.getElementById("threeUserInput").value;
    var temp = {
      username : username,
      message : input
    };
    firebaseObj.roleThreeNewMessage = true;
    firebaseObj.$save();
    $scope.threechatLog.$add(temp);
    document.getElementById("threeUserInput").value = "";
  };
  $scope.fourSend = function(){
    var input = document.getElementById("fourUserInput").value;
    var temp = {
      username : username,
      message : input
    };
    firebaseObj.roleFourNewMessage = true;
    firebaseObj.$save();
    $scope.fourchatLog.$add(temp);
    document.getElementById("fourUserInput").value = "";
  };
  $scope.fiveSend = function(){
    var input = document.getElementById("fiveUserInput").value;
    var temp = {
      username : username,
      message : input
    };
    firebaseObj.roleFiveNewMessage = true;
    firebaseObj.$save();
    $scope.fivechatLog.$add(temp);
    document.getElementById("fiveUserInput").value = "";
  };
  $scope.sixSend = function(){
    var input = document.getElementById("sixUserInput").value;
    var temp = {
      username : username,
      message : input
    };
    firebaseObj.roleSixNewMessage = true;
    firebaseObj.$save();
    $scope.sixchatLog.$add(temp);
    document.getElementById("sixUserInput").value = "";
  };
  $scope.sevenSend = function(){
    var input = document.getElementById("sevenUserInput").value;
    var temp = {
      username : username,
      message : input
    };
    firebaseObj.roleSevenNewMessage = true;
    firebaseObj.$save();
    $scope.sevenchatLog.$add(temp);
    document.getElementById("sevenUserInput").value = "";
  };
  $scope.eightSend = function(){
    var input = document.getElementById("eightUserInput").value;
    var temp = {
      username : username,
      message : input
    };
    firebaseObj.roleEightNewMessage = true;
    firebaseObj.$save();
    $scope.eightchatLog.$add(temp);
    document.getElementById("eightUserInput").value = "";
  };
  $scope.nineSend = function(){
    var input = document.getElementById("nineUserInput").value;
    var temp = {
      username : username,
      message : input
    };
    firebaseObj.roleNineNewMessage = true;
    firebaseObj.$save();
    $scope.ninechatLog.$add(temp);
    document.getElementById("nineUserInput").value = "";
  };
  $scope.tenSend = function(){
    var input = document.getElementById("tenUserInput").value;
    var temp = {
      username : username,
      message : input
    };
    firebaseObj.roleTenNewMessage = true;
    firebaseObj.$save();
    $scope.tenchatLog.$add(temp);
    document.getElementById("tenUserInput").value = "";
  };
  $scope.elevenSend = function(){
    var input = document.getElementById("elevenUserInput").value;
    var temp = {
      username : username,
      message : input
    };
    firebaseObj.roleElevenNewMessage = true;
    firebaseObj.$save();
    $scope.elevenchatLog.$add(temp);
    document.getElementById("elevenUserInput").value = "";
  };
  $scope.twelveSend = function(){
    var input = document.getElementById("twelveUserInput").value;
    var temp = {
      username : username,
      message : input
    };
    firebaseObj.roleTwelveNewMessage = true;
    firebaseObj.$save();
    $scope.twelvechatLog.$add(temp);
    document.getElementById("twelveUserInput").value = "";
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
      $('#chatBump').css('background-color','rgba(140, 140, 140, 0.6)');
      showingChat = true;
    } else {
      $('#chatBump').css('left','0px');
      $('#arrow-direction').css('transform','rotate(' + 0 + 'deg)');
      showingChat = false;
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
      $('#two-chatBump').css('background-color','rgba(140, 140, 140, 0.6)');
      showingRoleTwoChat = true;
      console.log(showingRoleTwoChat);
    } else {
      $('#two-chatBump').css('right','0px');
      $('#two-arrow-direction').css('transform','rotate(' + 180 + 'deg)');
      $('#two-chatWindow').css('width','0px');
      $('#two-form').hide();
      showingRoleTwoChat = false;
      console.log(showingRoleTwoChat);
    }
  };
  let showingRoleThreeChat = false;
  $scope.showRoleThreeChat = function() {
    if (showingRoleThreeChat === false){
      $('#three-chatBump').css('right','235px');
      $('#three-arrow-direction').css('transform','rotate(' + 0 + 'deg)');
      $('#three-chatWindow').css('width','230px');
      $('#three-form').show();
      $('#three-chatBump').css('background-color','rgba(140, 140, 140, 0.6)');
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
      $('#four-chatBump').css('background-color','rgba(140, 140, 140, 0.6)');
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
      $('#five-chatBump').css('background-color','rgba(140, 140, 140, 0.6)');
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
      $('#six-chatBump').css('background-color','rgba(140, 140, 140, 0.6)');
      showingRoleSixChat = true;
    } else {
      $('#six-chatBump').css('right','0px');
      $('#six-arrow-direction').css('transform','rotate(' + 180 + 'deg)');
      $('#six-chatWindow').css('width','0px');
      $('#six-form').hide();
      showingRoleSixChat = false;
    }
  };
  let showingRoleSevenChat = false;
  $scope.showRoleSevenChat = function() {
    if (showingRoleSevenChat === false){
      $('#seven-chatBump').css('right','235px');
      $('#seven-arrow-direction').css('transform','rotate(' + 0 + 'deg)');
      $('#seven-chatWindow').css('width','230px');
      $('#seven-form').show();
      $('#seven-chatBump').css('background-color','rgba(140, 140, 140, 0.6)');
      showingRoleSevenChat = true;
    } else {
      $('#seven-chatBump').css('right','0px');
      $('#seven-arrow-direction').css('transform','rotate(' + 180 + 'deg)');
      $('#seven-chatWindow').css('width','0px');
      $('#seven-form').hide();
      showingRoleSevenChat = false;
    }
  };
  let showingRoleEightChat = false;
  $scope.showRoleEightChat = function() {
    if (showingRoleEightChat === false){
      $('#eight-chatBump').css('right','235px');
      $('#eight-arrow-direction').css('transform','rotate(' + 0 + 'deg)');
      $('#eight-chatWindow').css('width','230px');
      $('#eight-form').show();
      $('#eight-chatBump').css('background-color','rgba(140, 140, 140, 0.6)');
      showingRoleEightChat = true;
    } else {
      $('#eight-chatBump').css('right','0px');
      $('#eight-arrow-direction').css('transform','rotate(' + 180 + 'deg)');
      $('#eight-chatWindow').css('width','0px');
      $('#eight-form').hide();
      showingRoleEightChat = false;
    }
  };
  let showingRoleNineChat = false;
  $scope.showRoleNineChat = function() {
    if (showingRoleNineChat === false){
      $('#nine-chatBump').css('right','235px');
      $('#nine-arrow-direction').css('transform','rotate(' + 0 + 'deg)');
      $('#nine-chatWindow').css('width','230px');
      $('#nine-form').show();
      $('#nine-chatBump').css('background-color','rgba(140, 140, 140, 0.6)');
      showingRoleNineChat = true;
    } else {
      $('#nine-chatBump').css('right','0px');
      $('#nine-arrow-direction').css('transform','rotate(' + 180 + 'deg)');
      $('#nine-chatWindow').css('width','0px');
      $('#nine-form').hide();
      showingRoleNineChat = false;
    }
  };
  let showingRoleTenChat = false;
  $scope.showRoleTenChat = function() {
    if (showingRoleTenChat === false){
      $('#ten-chatBump').css('right','235px');
      $('#ten-arrow-direction').css('transform','rotate(' + 0 + 'deg)');
      $('#ten-chatWindow').css('width','230px');
      $('#ten-form').show();
      $('#ten-chatBump').css('background-color','rgba(140, 140, 140, 0.6)');
      showingRoleTenChat = true;
    } else {
      $('#ten-chatBump').css('right','0px');
      $('#ten-arrow-direction').css('transform','rotate(' + 180 + 'deg)');
      $('#ten-chatWindow').css('width','0px');
      $('#ten-form').hide();
      showingRoleTenChat = false;
    }
  };
  let showingRoleElevenChat = false;
  $scope.showRoleElevenChat = function() {
    if (showingRoleElevenChat === false){
      $('#eleven-chatBump').css('right','235px');
      $('#eleven-arrow-direction').css('transform','rotate(' + 0 + 'deg)');
      $('#eleven-chatWindow').css('width','230px');
      $('#eleven-form').show();
      $('#eleven-chatBump').css('background-color','rgba(140, 140, 140, 0.6)');
      showingRoleElevenChat = true;
    } else {
      $('#eleven-chatBump').css('right','0px');
      $('#eleven-arrow-direction').css('transform','rotate(' + 180 + 'deg)');
      $('#eleven-chatWindow').css('width','0px');
      $('#eleven-form').hide();
      showingRoleElevenChat = false;
    }
  };
  let showingRoleTwelveChat = false;
  $scope.showRoleTwelveChat = function() {
    if (showingRoleTwelveChat === false){
      $('#twelve-chatBump').css('right','235px');
      $('#twelve-arrow-direction').css('transform','rotate(' + 0 + 'deg)');
      $('#twelve-chatWindow').css('width','230px');
      $('#twelve-form').show();
      $('#twelve-chatBump').css('background-color','rgba(140, 140, 140, 0.6)');
      showingRoleTwelveChat = true;
    } else {
      $('#twelve-chatBump').css('right','0px');
      $('#twelve-arrow-direction').css('transform','rotate(' + 180 + 'deg)');
      $('#twelve-chatWindow').css('width','0px');
      $('#twelve-form').hide();
      showingRoleTwelveChat = false;
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
  // $scope.roleOneName = firebaseObj.roleOneName;
  // $scope.roleTwoName = firebaseObj.roleTwoName;
  // $scope.roleThreeName = firebaseObj.roleThreeName;
  // $scope.roleFourName = firebaseObj.roleFourName;
  // $scope.roleFiveName = firebaseObj.roleFiveName;
  // $scope.roleSixName = firebaseObj.roleSixName;
  $scope.roleOneName = "";
  $scope.roleTwoName = "";
  $scope.roleThreeName = "";
  $scope.roleFourName = "";
  $scope.roleFiveName = "";
  $scope.roleSixName = "";
  $scope.roleSevenName = "";
  $scope.roleEightName = "";
  $scope.roleNineName = "";
  $scope.roleTenName = "";
  $scope.roleElevenName = "";
  $scope.roleTwelveName = "";


  $scope.addProfileTest = function() {
    let fullNameOne = document.getElementById("lnInput").value + " " + document.getElementById("fnInput").value;
    username = document.getElementById("usernameInput").value;
    let role = "";

    $scope.noUsername = false;
    $scope.settingUsername = false;

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


  $scope.addProfile = function() {
    username = document.getElementById("usernameInput").value;
    let fullNameOne = document.getElementById("fnInput").value + " " + document.getElementById("lnInput").value;
    let role = prompt('What is the role of this player?');
    let password = prompt("Please create a password for access to the chat for this role");
    $scope.noUsername = false;
    $scope.settingUsername = false;
    // firebaseObj.$save();
    if (role === "villager" || role === "VILLAGER" || role === "Villager") {
      alert("OK it's a common folk!");
    } else if ($scope.roleOneName === "") {
      console.log("One");
      $scope.roleOne = true;
      firebaseObj.roleOneName = role;
      $scope.roleOneName = role;
      firebaseObj.roleOnePassword = password;
      firebaseObj.$save();
    } else if ($scope.roleOneName !== "") {
      if ($scope.roleTwoName === "") {
        $scope.roleTwo = true;
        firebaseObj.roleTwoName = role;
        $scope.roleTwoName = role;
        firebaseObj.roleTwoPassword = password;
        firebaseObj.$save();
      } else if ($scope.roleTwoName !== "") {
        if ($scope.roleThreeName === "") {
          $scope.roleThree = true;
          firebaseObj.roleThreeName = role;
          $scope.roleThreeName = role;
          firebaseObj.roleThreePassword = password;
          firebaseObj.$save();
        } else if ($scope.roleThreeName !== "") {
          if ($scope.roleFourName === "") {
            $scope.roleFour = true;
            firebaseObj.roleFourName = role;
            $scope.roleFourName = role;
            firebaseObj.roleFourPassword = password;
            firebaseObj.$save();
          } else if ($scope.roleFourName !== "") {
            if ($scope.roleFiveName === "") {
              $scope.roleFive = true;
              firebaseObj.roleFiveName = role;
              $scope.roleFiveName = role;
              firebaseObj.roleFivePassword = password;
              firebaseObj.$save();
            } else if ($scope.roleFiveName !== "") {
              if($scope.roleSixName === "") {
                $scope.roleSix = true;
                firebaseObj.roleSixName = role;
                $scope.roleSixName = role;
                firebaseObj.roleSixPassword = password;
                firebaseObj.$save();
              } else if ($scope.roleSixName !== "") {
                if ($scope.roleSevenName === "") {
                  $scope.roleSeven = true;
                  firebaseObj.roleSevenName = role;
                  $scope.roleSevenName = role;
                  firebaseObj.roleSevenPassword = password;
                  firebaseObj.$save();
                } else if ($scope.roleSevenName !== "") {
                  if ($scope.roleEightName === "") {
                    $scope.roleEight = true;
                    firebaseObj.roleEightName = role;
                    $scope.roleEightName = role;
                    firebaseObj.roleEightPassword = password;
                    firebaseObj.$save();
                  } else if ($scope.roleEightName !== "") {
                    if ($scope.roleNineName === "") {
                      $scope.roleNine = true;
                      firebaseObj.roleNineName = role;
                      $scope.roleNineName = role;
                      firebaseObj.roleNinePassword = password;
                      firebaseObj.$save();
                    } else if ($scope.roleNineName !== "") {
                      if ($scope.roleTenName === "") {
                        $scope.roleTen = true;
                        firebaseObj.roleTenName = role;
                        $scope.roleTenName = role;
                        firebaseObj.roleTenPassword = password;
                        firebaseObj.$save();
                      } else if ($scope.roleTenName !== "") {
                        if ($scope.roleElevenName === "") {
                          $scope.roleEleven = true;
                          firebaseObj.roleElevenName = role;
                          $scope.roleElevenName = role;
                          firebaseObj.roleElevenPassword = password;
                          firebaseObj.$save();
                        } else if ($scope.roleElevenName !== "") {
                          if ($scope.roleTwelveName === "") {
                            $scope.roleTwelve = true;
                            firebaseObj.roleTwelveName = role;
                            $scope.roleTwelveName = role;
                            firebaseObj.roleTwelvePassword = password;
                            firebaseObj.$save();
                          }
                        }
                      }
                    }
                  }
                }
              }
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

              $scope.deleteCommand = function(){
                console.log(firebaseArr.profiles[0]);
                let temp = prompt("What is the first name of the player to be removed?");
                let length = firebaseArr.profiles.length-1;
                let currentProfiles = firebaseArr.profiles[length];
                for (var i = 0; i < currentProfiles.length; i++) {
                  if(currentProfiles[i].firstName === temp){
                    console.log(currentProfiles[i]);
                  }
                }
            };

              $scope.deleteOne = function(){
                  $('#profile-one').hide();
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


              let testRed = true;

              var unwatch = firebaseObj.$watch(function(){
                if (firebaseObj.daytime === true) {
                  $('body').css('background-image','url("https://dl.dropbox.com/s/12i9f4kxm9uz71c/day_layered.jpg")');
                  $scope.timeOfDay = "Night";
                  if (isAdmin === false){
                    $('#form').show();
                    // $('#werewolf-chatBump').hide();
                    $('#one-form').hide();
                    $('#two-form').hide();
                    $('#three-form').hide();
                    $('#four-form').hide();
                    $('#five-form').hide();
                    $('#six-form').hide();
                    $('#seven-form').hide();
                    $('#eight-form').hide();
                    $('#nine-form').hide();
                    $('#ten-form').hide();
                    $('#eleven-form').hide();
                    $('#twelve-form').hide();
                  }
                } else if (firebaseObj.daytime === false) {
                $('body').css('background-image','url("https://dl.dropbox.com/s/5hqbjkhskrz6c47/night_layered.jpg")');
                $scope.timeOfDay = "Day";

                    $('#form').hide();
                // {
                //   if (isAdmin === false && $scope.roleOne === true){
                    $('#one-form').show();
                //   } else if (isAdmin === false && $scope.roleTwo === true){
                    $('#two-form').show();
                //   } else if (isAdmin === false && $scope.roleThree === true){
                    $('#three-form').show();
                //   } else if (isAdmin === false && $scope.roleFour === true){
                    $('#four-form').show();
                //   } else if (isAdmin === false && $scope.roleFive === true){
                    $('#five-form').show();
                //   } else if (isAdmin === false && $scope.roleSix === true){
                    $('#six-form').show();
                //   } else if (isAdmin === false && $scope.roleSeven === true){
                    $('#seven-form').show();
                //   } else if (isAdmin === false && $scope.roleEight === true){
                    $('#eight-form').show();
                //   } else if (isAdmin === false && $scope.roleNine === true){
                    $('#nine-form').show();
                //   } else if (isAdmin === false && $scope.roleTen === true){
                    $('#ten-form').show();
                //   } else if (isAdmin === false && $scope.roleEleven === true){
                    $('#eleven-form').show();
                //   } else if (isAdmin === false && $scope.roleTwelve === true){
                    $('#twelve-form').show();
                //   }
                }


              });
              let wasClicked = false;
              $scope.newMessageTest = function(){
                firebaseObj.testOne = roleOneNewMessage;
                firebaseObj.$save();
                // roleOneNewMessage = true;
                // $('#one-chatBump').css('background-color','white');
              };

              var arrWatch = firebaseArr.$watch(function(){
                $scope.profileTracker = currentProfiles(firebaseArr.profiles);
                profiles = currentProfiles(firebaseArr.profiles);
              });

              var chatWatch = firebaseChats.$watch(function(){
                if (showingChat === false){
                  $('#chatBump').css('background-color','white');
                } else {
                  $('#chatBump').css('background-color','rgba(140, 140, 140, 0.6)');
                }
              });

              var RoleOneChatWatch = firebaseRoleOneChat.$watch(function(){
                if (showingRoleOneChat === false) {
                  $('#one-chatBump').css('background-color','white');
                } else {
                  $('#one-chatBump').css('background-color','rgba(140, 140, 140, 0.6)');
                }
              });

              var RoleTwoChatWatch = firebaseRoleTwoChat.$watch(function(){
                if (showingRoleTwoChat === false) {
                  $('#two-chatBump').css('background-color','white');
                } else {
                  $('#two-chatBump').css('background-color','rgba(140, 140, 140, 0.6)');
                }
              });

              var RoleThreeChatWatch = firebaseRoleThreeChat.$watch(function(){
                if (showingRoleThreeChat === false) {
                  $('#three-chatBump').css('background-color','white');
                } else {
                  $('#three-chatBump').css('background-color','rgba(140, 140, 140, 0.6)');
                }
              });

              var RoleFourChatWatch = firebaseRoleFourChat.$watch(function(){
                if (showingRoleFourChat === false) {
                  $('#four-chatBump').css('background-color','white');
                } else {
                  $('#four-chatBump').css('background-color','rgba(140, 140, 140, 0.6)');
                }
              });

              var RoleFiveChatWatch = firebaseRoleFiveChat.$watch(function(){
                if (showingRoleFiveChat === false) {
                  $('#five-chatBump').css('background-color','white');
                } else {
                  $('#five-chatBump').css('background-color','rgba(140, 140, 140, 0.6)');
                }
              });

              var RoleSixChatWatch = firebaseRoleSixChat.$watch(function(){
                if (showingRoleSixChat === false) {
                  $('#six-chatBump').css('background-color','white');
                } else {
                  $('#six-chatBump').css('background-color','rgba(140, 140, 140, 0.6)');
                }
              });

              var RoleSevenChatWatch = firebaseRoleSevenChat.$watch(function(){
                if (showingRoleSevenChat === false) {
                  $('#seven-chatBump').css('background-color','white');
                } else {
                  $('#seven-chatBump').css('background-color','rgba(140, 140, 140, 0.6)');
                }
              });

              var RoleEightChatWatch = firebaseRoleEightChat.$watch(function(){
                if (showingRoleEightChat === false) {
                  $('#eight-chatBump').css('background-color','white');
                } else {
                  $('#eight-chatBump').css('background-color','rgba(140, 140, 140, 0.6)');
                }
              });

              var RoleNineChatWatch = firebaseRoleNineChat.$watch(function(){
                if (showingRoleNineChat === false) {
                  $('#nine-chatBump').css('background-color','white');
                } else {
                  $('#nine-chatBump').css('background-color','rgba(140, 140, 140, 0.6)');
                }
              });

              var RoleTenChatWatch = firebaseRoleTenChat.$watch(function(){
                if (showingRoleTenChat === false) {
                  $('#ten-chatBump').css('background-color','white');
                } else {
                  $('#ten-chatBump').css('background-color','rgba(140, 140, 140, 0.6)');
                }
              });

              var RoleElevenChatWatch = firebaseRoleElevenChat.$watch(function(){
                if (showingRoleElevenChat === false) {
                  $('#eleven-chatBump').css('background-color','white');
                } else {
                  $('#eleven-chatBump').css('background-color','rgba(140, 140, 140, 0.6)');
                }
              });

              var RoleTwelveChatWatch = firebaseRoleTwelveChat.$watch(function(){
                if (showingRoleTwelveChat === false) {
                  $('#twelve-chatBump').css('background-color','white');
                } else {
                  $('#twelve-chatBump').css('background-color','rgba(140, 140, 140, 0.6)');
                }
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
