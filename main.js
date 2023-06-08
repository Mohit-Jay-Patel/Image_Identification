Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
var camera= document.getElementById("camera");

Webcam.attach("#camera");

function takesnapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>";
    });
}
console.log("ml5 version:",ml5.version);
 var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ulP8TICxe/model.json",modelloaded);

 function modelloaded(){
    console.log("model has loaded");
 }
 function check(){
    var img = document.getElementById("captured_image");
    classifier.classify(img,gotResult);
 }
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    
    document.getElementById("result_object_name").innerHTML=results[0].label;
    document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
   }
}