var car,car2,car3,car4,line,line2,line3,wall,speed,weight;

function setup() {
  createCanvas(1700,700);
  speed=random(55, 90);
  weight=random(700,1500);
  car = createSprite(50, 100, 50, 50);
  car2 = createSprite(50, 300, 50, 50);
  car3 = createSprite(50, 500, 50, 50);
  car4 = createSprite(50, 650, 50, 50);
  car.shapeColor = color(255)
  car2.shapeColor = color(255)
  car3.shapeColor = color(255)
  car4.shapeColor = color(255)
  line = createSprite(0,150,9000,5)
  line2 = createSprite(0,350,9000,5)
  line3 = createSprite(0,550,9000,5)
  wall = createSprite(1590,350,50,1000);
  wall.shapeColor = "skyblue"
  //wall.debug = true;
  car.velocityX = speed;
  car2.velocityX = speed;
  car3.velocityX = speed;
  car4.velocityX = speed;

  


//var line1 = createSprite(0,175,50000,5)
//var line2 = createSprite(0,350,50000,5)
//var line3 = createSprite(0,525,50000,5)

}


function draw() {
  background(255,155,15);
  
  text ("red = bad safety",850,50)
  text ("yellow = average safety",850,30)
  text ("green = good safety",850,70)

  if(wall.x-car.x < (car.width + wall.width)/2)
  {
    car.velocityX = 0;
    

    var deformation = 0.5 * weight * speed * speed/22500;
if (deformation>180)
{
  car.shapeColor = color(255,0,0)
 
  }
 
 //wall.shapeColor = "white";
}

   if(deformation<180 && deformation>100)
    {
    car.shapeColor = color(230,230,0);
   
    //wall.shapeColor = "white";
    }

    if (deformation<100)
    {
     car.shapeColor = color(0,255,0)
     
     // wall.shapeColor = "white";
    }
  


    if(wall.x-car2.x < (car2.width + wall.width)/2)
    {
      car2.velocityX = 0;
      
      var deformation = 0.5 * weight * speed * speed/22500;
  if (deformation<180)
  {
    car2.shapeColor = color(255,0,0)
   
    }
   
   //wall.shapeColor = "white";
  }
  
     if(deformation>180 && deformation<100)
      {
      
      car2.shapeColor = color(230,230,0)
      
      //wall.shapeColor = "white";
      }
  
      if (deformation<100)
      {
       car2.shapeColor = color(0,255,0)
      
       // wall.shapeColor = "white";
      }
    


      if(wall.x-car3.x < (car3.width + wall.width)/2)
      {
        car3.velocityX = 0;
        
    
        var deformation = 0.5 * weight * speed * speed/22500;
    if (deformation>180)
    {
      car3.shapeColor = color(255,0,0)
     
      }
     
     //wall.shapeColor = "white";
    }
    
       if(deformation<180 && deformation>100)
        {
        
        car3.shapeColor = color(230,230,0)
        
        //wall.shapeColor = "white";
        }
    
        if (deformation<100)
        {
         car3.shapeColor = color(0,255,0)
         
         // wall.shapeColor = "white";
        }




        if(wall.x-car4.x < (car4.width + wall.width)/2)
        {
          car4.velocityX = 0;
          
      
          var deformation = 0.5 * weight * speed * speed/22500;
      if (deformation<180)
      {
        car4.shapeColor = color(255,0,0)
        
        }
       
       //wall.shapeColor = "white";
      }
      
         if(deformation>180 && deformation<100)
          {
          
          car4.shapeColor = color(230,230,0)
         
          //wall.shapeColor = "white";
          }
      
          if (deformation>100)
          {
           car4.shapeColor = color(0,255,0)
          
           // wall.shapeColor = "white";
          }
        
      






          if(wall.x-car.x < (car.width + wall.width)/2)
          {
            car.velocityX = 0;
            
        
            var deformation = 0.5 * weight * speed * speed/22500;
        if (deformation>180)
        {
          car.shapeColor = color(255,0,0)
         
          }
         
         //wall.shapeColor = "white";
        }
        
           if(deformation<180 && deformation>100)
            {
            car.shapeColor = color(230,230,0);
           
            //wall.shapeColor = "white";
            }
        
            if (deformation<100)
            {
             car.shapeColor = color(0,255,0)
             
             // wall.shapeColor = "white";
            }
          
        
        
            if(wall.x-car2.x < (car2.width + wall.width)/2)
            {
              car2.velocityX = 0;
              
              var deformation = 0.5 * weight * speed * speed/22500;
          if (deformation<180)
          {
            car2.shapeColor = color(255,0,0)
           
            }
           
           //wall.shapeColor = "white";
          }
          
             if(deformation<180 && deformation>100)
              {
              
              car2.shapeColor = color(230,230,0)
              
              //wall.shapeColor = "white";
              }
          
              if (deformation>100)
              {
               car2.shapeColor = color(0,255,0)
              
               // wall.shapeColor = "white";
              }
            
        
        
              if(wall.x-car3.x < (car3.width + wall.width)/2)
              {
                car3.velocityX = 0;
                
            
                var deformation = 0.5 * weight * speed * speed/22500;
            if (deformation>180)
            {
              car3.shapeColor = color(255,0,0)
             
              }
             
             //wall.shapeColor = "white";
            }
            
               if(deformation<180 && deformation>100)
                {
                
                car3.shapeColor = color(230,230,0)
                
                //wall.shapeColor = "white";
                }
            
                if (deformation<100)
                {
                 car3.shapeColor = color(0,255,0)
                 
                 // wall.shapeColor = "white";
                }
        
        
        
        
                if(wall.x-car4.x < (car4.width + wall.width)/2)
                {
                  car4.velocityX = 0;
                  
              
                  var deformation = 0.5 * weight * speed * speed/22500;
              if (deformation<180)
              {
                car4.shapeColor = color(255,0,0)
                
                }
               
               //wall.shapeColor = "white";
              }
              
                 if(deformation<180 && deformation>100)
                  {
                  
                  car4.shapeColor = color(230,230,0)
                 
                  //wall.shapeColor = "white";
                  }
              
                  if (deformation<100)
                  {
                   car4.shapeColor = color(0,255,0)
                  
                   // wall.shapeColor = "white";
                  }
                
              





                  

 drawSprites();
}

