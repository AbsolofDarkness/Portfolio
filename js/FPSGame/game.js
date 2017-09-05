// Script for FPS Game
// Started Feb 22, 2017
// By Nicholas Papageorge

document.addEventListener("DOMContentLoaded", function() {
    if (BABYLON.Engine.isSupported()) {
        scene();
    }
}, false);

function scene() {

    var canvas = document.getElementById("renderCanvas");
    var engine = new BABYLON.Engine(canvas, true);
    var gameScene = new BABYLON.Scene(engine);

    var playerCam = new BABYLON.FreeCamera("playerCam", new BABYLON.Vector3(1, 1, 0), gameScene);
    // playerCam.cameraRotation += 90;
    
    // Player Object is a cube
    var playerObject = BABYLON.Mesh.CreateBox("playerObject", 1, gameScene);

    playerCam.parent = playerObject;
    playerCam.attachControl(canvas);
    playerCam.position.x = 1;
    playerCam.position.y = 1;
    playerCam.position.z = 0;
    // playerObject.scaling.y = 2;


    engine.runRenderLoop(function() {
        gameScene.render();
    });

}