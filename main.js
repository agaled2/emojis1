var emojis = ml5.imageClassifier("https:teachablemachine.withgoogle.com/models/9ljsTENv4/.json")
Webcam.set({
    width :350,
    height:300,
    image_format:"png",
    png_quality:100
})
Webcam.attach("#camara")
function tomarFoto(){
    Webcam.snap(function(direccion){
document.getElementById("captura").innerHTML = '<img id="foto" src="'+direccion+'">'
    })
}