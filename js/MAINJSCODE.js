   //object constructor
 function Route(route, image, routename, id, satimg, img2, img3, img4, id2, id3, id4) {
     this.route = route;
     this.image = image;
     this.routename = routename;
     this.id = id;
     this.satimg = satimg;
     this.img2 = img2;
     this.img3 = img3;
     this.img4 = img4;
     this.id2 = id2;
     this.id3 = id3;
     this.id4 = id4;
 }
 //USING PROTOTYPE TO ALLOW METHOD TO INHERIT
 Route.prototype.comparing = compare;
 //objects 
 //FIRST ROUTE BELOW
 var MainEtoGardnerBuilding = new Route("Go left of the main entrance and go down road", "url('MainEtoGard/onrouteMainEtoGardner2.jpg')", "MainEtoGard", "1", "url('MainEtoGard/SatelliteRoute1.jpg')", "url('MainEtoGard/onrouteMainEtoGarder.jpg')", "url('MainEtoGard/OnRouteMainEtoGarderner3.jpg')", "url('MainEtoGard/OnRouteMainEtogardner4.jpg')", "2", "3", "4");
 var MainEmidroute = new Route("Follow path under trees, take a left round corner");
 var Mainhalfwayroute = new Route("Follow path around to the right");
 var endofroute = new Route("You have reached your destination");

 function numSwitch() {
     
     
     var nameCheck = document.getElementById("currentLocation").innerHTML;
     
   
     
     if(nameCheck == "MainEtoGard"){
     
     
     document.getElementById("btn1").onclick = function () {
         document.getElementById("routeDirection").innerHTML = MainEtoGardnerBuilding.route;
         document.getElementById("routeBG").style.backgroundImage = MainEtoGardnerBuilding.image;
         document.getElementById("routeNumberIndicator").innerHTML = MainEtoGardnerBuilding.id;
         document.getElementById("staticMapBg").style.backgroundImage = MainEtoGardnerBuilding.satimg;
     };
     document.getElementById("btn2").onclick = function () {
         document.getElementById("routeDirection").innerHTML = MainEmidroute.route;
         document.getElementById("routeBG").style.backgroundImage = MainEtoGardnerBuilding.img2;
         document.getElementById("routeNumberIndicator").innerHTML = MainEtoGardnerBuilding.id2;
         document.getElementById("staticMapBg").style.backgroundImage = MainEtoGardnerBuilding.satimg;
     };
     document.getElementById("btn3").onclick = function () {
         document.getElementById("routeDirection").innerHTML = Mainhalfwayroute.route;
         document.getElementById("routeBG").style.backgroundImage = MainEtoGardnerBuilding.img3;
         document.getElementById("routeNumberIndicator").innerHTML = MainEtoGardnerBuilding.id3;
         document.getElementById("staticMapBg").style.backgroundImage = MainEtoGardnerBuilding.satimg;
     };
     document.getElementById("btn4").onclick = function () {
         document.getElementById("routeDirection").innerHTML = endofroute.route;
         document.getElementById("routeBG").style.backgroundImage = MainEtoGardnerBuilding.img4;
         document.getElementById("routeNumberIndicator").innerHTML = MainEtoGardnerBuilding.id4;
         document.getElementById("staticMapBg").style.backgroundImage = MainEtoGardnerBuilding.satimg;
         
     }
     };
 }
 //THIS IS THE METHOD WHICH GOES INTO THE OBJECT CONSTRUCTOR//
 function compare() {
     //select box 1 - grabs string value
     var imhere = $("#mylocation option:selected").text();
     //select box 2 - grabs string value
     var goingto = $("#mydestination option:selected").text();
     if (imhere == "Main Enterance" && goingto == "Gardener Building") {
         document.getElementById("routeDirection").innerHTML = MainEtoGardnerBuilding.route;
         document.getElementById("routeBG").style.backgroundImage = MainEtoGardnerBuilding.image;
         document.getElementById("routeNumberIndicator").innerHTML = MainEtoGardnerBuilding.id;
         document.getElementById("staticMapBg").style.backgroundImage = MainEtoGardnerBuilding.satimg;
         document.getElementById("currentLocation").innerHTML = MainEtoGardnerBuilding.routename;
     }
     if (imhere == "Building A" && goingto == "Room B") {
         document.write(BuildAtoRoomB.route + BuildAtoRoomB.image + BuildAtoRoomB.next);
     }
     if (imhere == "Building A" && goingto == "Room C") {
         document.write(BuildAtoRoomC.route + BuildAtoRoomC.image + BuildAtoRoomC.next);
     }
 }
 //THIS IS THE FUNCTION WHICH CHECKS THEM ALL, AND I CAN JUST COMPARE THEM INSIDE THE FUNCTION WHEN ITS RUN USING ONCLICK, SO IT COMPARES THEM ALL AND FINDS THE ONE YOU ARE USING//
 function go() {
     MainEtoGardnerBuilding.comparing();
 }

 function imagechange() {
     var imhere = $("#mylocation option:selected").text();
     //select box 2 - grabs string value
     var goingto = $("#mydestination option:selected").text();
     if (imhere == "Main Enterance") {
         document.getElementById("locationBG").style.backgroundImage = "url('ImageChanger/mainEntrance.jpg')";
     }
     if (goingto == "Gardener Building") {
         document.getElementById("destinationBG").style.backgroundImage = "url('ImageChanger/gardenerBuilding.jpg')";
     }
 }