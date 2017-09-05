// Pinball in Babylon.JS Script
// By: Nicholas Papageorge
// Started: 1/20/17

// Global Vars

document.addEventListener("DOMContentLoaded", function() {
    if (BABYLON.Engine.isSupported()) {
        scene();
    }
}, false);

function scene() {

    var keys = {left:0, right:0};
    window.addEventListener("keydown", handleKeyDown, false);
    window.addEventListener("keyup", handleKeyUp, false);

    function handleKeyDown(evt) {
        if (evt.keyCode == 65) {
            keys.left = 1;
        }
        else if (evt.keyCode == 83) {
            keys.right = 1;
        }
    }

    function handleKeyUp(evt) {
        if (evt.keyCode == 65) {
            keys.left = 0;
        }
        else if (evt.keyCode == 83) {
            keys.right = 0;
        }
    }

    var canvas = document.getElementById("renderCanvas");
    var engine = new BABYLON.Engine(canvas, true);
    var gameScene = new BABYLON.Scene(engine);

    // Initalize game camera
    var gameCam = new BABYLON.ArcRotateCamera("mainCam", 3,  3.15, 1, new BABYLON.Vector3(0, 2.5, -3.25), gameScene);
    gameCam.setTarget(new BABYLON.Vector3.Zero);
    gameCam.attachControl(canvas);

    // Create main light
    var mainLight = new BABYLON.PointLight("mainLight", new BABYLON.Vector3(1, 2, 1), gameScene);

    // Create playing field
    var groundField = BABYLON.Mesh.CreateGround("groundField", 2, 4.5, 1, gameScene);
    groundField.position = new BABYLON.Vector3(0, 0, 1);
    groundField.rotation.x = -0.4;

    // Render scene
    engine.runRenderLoop(function() {
        gameScene.render();
    });

}

