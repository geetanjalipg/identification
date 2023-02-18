synth = window.speechSynthesis;

function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("black");

    canvas.mouseReleased(classifyCanvas);
    

}

function preload() {
    classifier = ml5.imageClassifier("DoodleNet");
}

function draw() {
    strokeWeight(10);
    stroke("white");
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);

    }
}
function classifyCanvas() {
    classifier.classify(canvas, gotresults);
}

function gotresults(error, results) {
    if (error) {
        console.log(error);

    }
    else {
        console.log(results);
        label = results[0].label;
        confidence=results[0].confidence*100;
        document.getElementById("label").innerHTML="Label : "+label;
        document.getElementById("Confidence").innerHTML="Confidence: "+Math.round(confidence)+"%";
        utterThis=new SpeechSynthesisUtterance(label);
        synth.speak(utterThis);
    }
}

function clearcanvas() {
    background("black");

}