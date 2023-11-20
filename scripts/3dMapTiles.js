const viewer = new Cesium.Viewer('cesiumContainer1', {
    imageryProvider: false,
    baseLayerPicker: false,
    requestRenderMode: true,
  });

  const tileset = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
    url: "https://tile.googleapis.com/v1/3dtiles/root.json?key=AIzaSyDALZWc2Ldx5r10EJz_Ady-QbGtGWgZ8mU",
    showCreditsOnScreen: false,
  }));

  viewer.scene.globe.show = false;

// Columbia University coordinates in radians
var longitudeRad = Cesium.Math.toRadians(-73.9587);
var latitudeRad = Cesium.Math.toRadians(40.8088);
var height = 100; // Height above the ground in meters

// Convert the coordinates to Cartesian3 and create the transform
var center = Cesium.Cartesian3.fromRadians(longitudeRad, latitudeRad, height);
var transform = Cesium.Transforms.eastNorthUpToFixedFrame(center);

// Set the camera to look at the transform with a specific heading, pitch, and range
viewer.scene.camera.lookAtTransform(transform, new Cesium.HeadingPitchRange(0, -Math.PI / 4, 500));

// Orbit around the point
var orbitRate = 0.002; // Adjust the orbit rate as needed
viewer.clock.onTick.addEventListener(function(clock) {
    viewer.scene.camera.rotateRight(orbitRate);
});
