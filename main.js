var prediction1="";


Webcam.set({
    width:350,
    height:300
});
Webcam.attach("camera");
   function snap() {
       Webcam.snap(function(data_uri){
           document.getElementById("result").innerHTML="<img id='img1'src='"+data_uri+"'>";
       });
   }
   classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/YM6yZrgU6/model.json",modelloaded);
   function modelloaded(){
       console.log("model has been loaded");
   }
   function check(){
    img=document.getElementById("img1");
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("emotion_name").innerHTML=results[0].label;
        
        prediction1=results[0].label;
        
        
        if(results[0].label=="victory"){
            document.getElementById("emotion_name").innerHTML="&#9996;";
        }
        if(results[0].label=="best"){
         document.getElementById("emotion_name").innerHTML="&#128077;";
     }
     if(results[0].label=="amazing"){
         document.getElementById("emotion_name").innerHTML="&#128076;";
     }}}
