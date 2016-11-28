// Pong script in Babylon.js
// By: Nicholas Papageorge
// Date Started: 10/14/16

// Global Vars
var ballDirX, ballDirZ, ballMoveSpeed;
    ballDirX = 1;
    ballDirZ = 1;
    ballMoveSpeed = 0.1;

var playerScore = null;
var moveDistance = 0.2;

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
    var gameCam = new BABYLON.ArcRotateCamera("mainCam", 3, 3.15, 1, new BABYLON.Vector3(0, 10, -13), gameScene);
    gameCam.setTarget(new BABYLON.Vector3.Zero);
    gameCam.attachControl(canvas);

    // Create main light and fill light
    var mainLight = new BABYLON.PointLight("mainLight", new BABYLON.Vector3(0, 5, 5), gameScene);
    mainLight.intensity = 0.5;
    var fillLight = new BABYLON.SpotLight("fillLight", new BABYLON.Vector3(0, 1, -5), new BABYLON.Vector3(0, 0, 1), 6, 3, gameScene);
    fillLight.intensity = 0.3;
    fillLight.diffuse = new BABYLON.Color3(0.5, 0.5, 0.1);

    // Initalize shadow generator
    var shadowGenerator = new BABYLON.ShadowGenerator(1024, mainLight);
    shadowGenerator.setDarkness(0.3);

    // Create level geometry
    var groundField = new BABYLON.Mesh.CreateGround("groundField", 10, 20, 6, gameScene);
    groundField.position.z = 4.5;
    groundField.receiveShadows = true;

    var endField = new BABYLON.Mesh.CreateGround("endField", 9.25, 1, 1, gameScene);
    endField.position.z = -6;
    var endFieldMat = new BABYLON.StandardMaterial("endFieldMat", gameScene);
    endFieldMat.diffuseColor = new BABYLON.Color3(1.0, 0, 0);
    endField.material = endFieldMat;
    endField.receiveShadows = true;

    // Create level walls
    var wall1 = BABYLON.Mesh.CreateBox("wall1", 1, gameScene);
    var wall1Mat = new BABYLON.StandardMaterial("wall1Mat", gameScene);
    wall1Mat.diffuseColor = new BABYLON.Color3(0, 0, 1.0);
    wall1.material = wall1Mat;
    wall1.scaling.x = 0.75;
    wall1.scaling.y = 1;
    wall1.scaling.z = 21;
    wall1.position = new BABYLON.Vector3(5, 0.5, 4);

    var wall2 = BABYLON.Mesh.CreateBox("wall2", 1, gameScene);
    var wall2Mat = new BABYLON.StandardMaterial("wall2Mat", gameScene);
    wall2Mat.diffuseColor = new BABYLON.Color3(0, 0, 1.0);
    wall2.material = wall2Mat;
    wall2.scaling.x = 0.75;
    wall2.scaling.y = 1;
    wall2.scaling.z = 21;
    wall2.position = new BABYLON.Vector3(-5, 0.5, 4);

    var wall3 = BABYLON.Mesh.CreateBox("wall3", 1, gameScene);
    var wall3Mat = new BABYLON.StandardMaterial("wall3Mat", gameScene);
    wall3Mat.diffuseColor = new BABYLON.Color3(0, 0, 1.0);
    wall3.material = wall3Mat;
    wall3.scaling.x = 10.75;
    wall3.scaling.y = 1;
    wall3.scaling.z = 0.75;
    wall3.position = new BABYLON.Vector3(0, 0.5, 14.85);

    // Create ball
    var ballObject = BABYLON.Mesh.CreateSphere("ballObj", 32, 1, gameScene);
    var ballObjMat = new BABYLON.StandardMaterial("ballMat", gameScene);
    ballObjMat.diffuseColor = new BABYLON.Color3(0.1, 1, 0);
    ballObject.material = ballObjMat;
    ballObject.scaling.x = 0.75;
    ballObject.scaling.y = 0.75;
    ballObject.scaling.z = 0.75;
    ballObject.position = new BABYLON.Vector3(0, 0.35, 0);

    shadowGenerator.getShadowMap().renderList.push(ballObject);

    // Player paddle
    var playerPaddle = BABYLON.Mesh.CreateBox("paddle", 1, gameScene);
    var playerPaddleMat = new BABYLON.StandardMaterial("playerMat", gameScene);
    playerPaddleMat.diffuseColor = new BABYLON.Color3(1.0, 0.7, 0.5);
    playerPaddle.material = playerPaddleMat;
    playerPaddle.scaling.x = 1.5;
    playerPaddle.scaling.y = 0.35;
    playerPaddle.scaling.z = 0.5;
    playerPaddle.position = new BABYLON.Vector3(0, 0.45, -5);

    shadowGenerator.getShadowMap().renderList.push(playerPaddle);

    // Score
    var playerScoreDynamicTexture = new BABYLON.DynamicTexture("DynamicTexture", 512, gameScene, false);

    var playerScoreTextMat = new BABYLON.StandardMaterial("playerScoreTextMat", gameScene);
    playerScoreTextMat.diffuseTexture = playerScoreDynamicTexture;
    playerScoreTextMat.diffuseTexture.hasAlpha = true;
    playerScoreTextMat.emissiveColor = new BABYLON.Color3(1, 1, 1);

    var playerScoreText = BABYLON.Mesh.CreatePlane("playerScoreText", 1, gameScene);
    playerScoreText.material = playerScoreTextMat;
    playerScoreText.billboardMode = BABYLON.AbstractMesh.BILLBOARDMODE_ALL;
    playerScoreText.scaling.x = 3;
    playerScoreText.scaling.y = 2;
    playerScoreText.position = new BABYLON.Vector3(-7, 4, 2);

    playerScoreDynamicTexture.drawText("Score: " + playerScore, 0, 100, "100px ubuntu", "#FFFFFF");

    function updatePlayerScore () {
        playerScoreDynamicTexture.clear();
        playerScoreDynamicTexture.drawText("Score: " + playerScore, 0, 100, "100px ubuntu", "#FFFFFF");
    }
    

    function ballMovement () {
        // Ball movement scripting here

        // Ball collision detection
        if (ballObject.position.x > 4.25) {
            ballDirX = -ballDirX;
        }
        
        if (ballObject.position.x < -4.25) {
            ballDirX = -ballDirX;
        }

        if (ballObject.position.z > 14) {
            ballDirZ = -ballDirZ;
        }

        // Update ball position
        ballObject.position.x += ballDirX * ballMoveSpeed;
        ballObject.position.z += ballDirZ * ballMoveSpeed;

        // Check for collision with paddle

        // Check if ball is aligned with paddle on X-axis
        if (ballObject.position.x <= playerPaddle.position.x + playerPaddle.scaling.x 
        && ballObject.position.x >= playerPaddle.position.x) {
            // Check if ball is aligned with paddle on Z-axis
            if (ballObject.position.z <= playerPaddle.position.z + playerPaddle.scaling.z
            && ballObject.position.z >= playerPaddle.position.z - playerPaddle.scaling.z) {
                // Check if ball is traveling towards player
                if (ballDirZ < 0) {
                    // Switch direction of ball travel
                    ballDirZ = -ballDirZ;
                    // Impact ball angle when hitting it
                    ballDirZ -= moveDistance * 0.7;
                    // Add to Score
                    playerScore += 1;
                    // Call function to update score
                    updatePlayerScore();
                }
            }
        }

    }


    engine.runRenderLoop(function() {

        // Check for player input before rendering

        if (keys.left == 1 && playerPaddle.position.x > -3.5) {
            playerPaddle.position.x -= moveDistance;
        }
        else if (keys.right == 1 && playerPaddle.position.x < 3.5) {
            playerPaddle.position.x += moveDistance;
        }
        else {
            playerPaddle.position.x -= 0;
        }

        ballMovement();

        console.log(playerScore);

        gameScene.render();
    });

}
