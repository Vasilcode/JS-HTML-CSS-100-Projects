// Import the THREE.js library
import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
// To allow for the camera to move around the scene
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';
// To allow for importing the .gltf file
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let object;
let controls;

let objectToRender = 'Truck';

const loader = new GLTFLoader();

// Loading the file
loader.load(
	`Models/${objectToRender}/scene.gltf`,
	function (gltf) {
		// If the file is loaded, add it to the scene
		object = gltf.scene;
		object.scale.set(10, 10, 10); // Optional: adjust scale
		scene.add(object);
	},
	function (xhr) {
		// While it is loading, log the progress
		console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
	},
	function (error) {
		console.error('An error happened:', error);
	}
);

// Instantiate a new renderer and set its size
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// Set tone mapping and exposure for brightness
renderer.toneMapping = THREE.ReinhardToneMapping; // Adjust tone mapping for realistic lighting
renderer.toneMappingExposure = 2.5; // Increase exposure to brighten scene

// Add the renderer to the DOM
document.getElementById('container3D').appendChild(renderer.domElement);

camera.position.z = 25; // Set camera distance for Truck

// Add a much stronger directional light
const topLight = new THREE.DirectionalLight(0xffffff, 5); // Much stronger light
topLight.position.set(200, 300, 400); // Position from above
topLight.castShadow = true;
scene.add(topLight);

// Add a powerful PointLight from the front
const pointLightFront = new THREE.PointLight(0xffffff, 4); // Higher intensity
pointLightFront.position.set(0, 200, 300); // Place it in front of the model
scene.add(pointLightFront);

// Add another PointLight from behind for more balance
const pointLightBack = new THREE.PointLight(0xffffff, 2);
pointLightBack.position.set(0, -200, -200); // Positioned behind the model
scene.add(pointLightBack);

// Add HemisphereLight for soft global illumination
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 3); // Higher intensity
hemiLight.position.set(0, 200, 0); // Position at the top of the scene
scene.add(hemiLight);

// Add ambient light and increase its intensity
const ambientLight = new THREE.AmbientLight(0xffffff, 3); // Further increase ambient light intensity
scene.add(ambientLight);

// Add SpotLight from above to highlight the truck
const spotLight = new THREE.SpotLight(0xffffff, 5); // Strong spot light
spotLight.position.set(0, 500, 500); // Position above the model
spotLight.castShadow = true;
scene.add(spotLight);

// Add OrbitControls for camera movement
controls = new OrbitControls(camera, renderer.domElement);

// Render the scene
function animate() {
	requestAnimationFrame(animate);

	// Rotate the object (optional animation)
	if (object) {
		object.rotation.y += 0.01;
	}

	renderer.render(scene, camera);
}

// Handle window resizing
window.addEventListener('resize', function () {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start the 3D rendering
animate();
