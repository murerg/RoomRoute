 //object constructor
        function route(route, image, next){
            
            this.route = route;
            this.image=image;
            this.next=next;
            
           
           
            
        }
       
       //USING PROTOTYPE TO ALLOW METHOD TO INHERIT
       
        
        //objects 
        
        var BuildAtoRoomA = new route("Turn left, go down etc", "<img src='/img/uwsimag2.jpg'>", "<a href='#'>Next</a>");
        var BuildAtoRoomB = new route("Turn left, go up then down etc", "<img src='/img/uwssky.jpeg'>", "<a href='#'>Next</a>");
        var BuildAtoRoomC = new route("Turn right and go down, then go through doors", "<img src='/img/uwsimag3.jpg'>", "<a href='#'>Next</a>");
       
       //THIS IS THE METHOD WHICH GOES INTO THE OBJECT CONSTRUCTOR//
      function compare(){
          //select box 1 - grabs string value
            var imhere = $("#mylocation option:selected").text();
            //select box 2 - grabs string value
            var goingto = $("#mydestination option:selected").text();  
           
           if(imhere == "Main Enterance" && goingto == "Gardener Building"){
              
               document.getElementById("routeDirection").innerHTML="Ello kippa";
           }
           
           if(imhere == "Building A" && goingto == "Room B"){
               document.write(BuildAtoRoomB.route + BuildAtoRoomB.image + BuildAtoRoomB.next);
           }
           
           if(imhere == "Building A" && goingto == "Room C"){
               document.write(BuildAtoRoomC.route + BuildAtoRoomC.image + BuildAtoRoomC.next);
           }
           
       }
       
       //THIS IS THE FUNCTION WHICH CHECKS THEM ALL, AND I CAN JUST COMPARE THEM INSIDE THE FUNCTION WHEN ITS RUN USING ONCLICK, SO IT COMPARES THEM ALL AND FINDS THE ONE YOU ARE USING//
       
    function go(){
        
        BuildAtoRoomA.comparing();
          BuildAtoRoomB.comparing();
        BuildAtoRoomC.comparing();
    }
       
        