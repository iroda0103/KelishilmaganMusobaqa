//canvas
import createGlobe from "https://cdn.skypack.dev/cobe";

let phi = 0;
let canvas = document.getElementById("cobe");
let canvas2= document.getElementById("cobe2");
let canvas3= document.getElementById("cobe3");

const globe = createGlobe(canvas, {
    devicePixelRatio: 2,
    width: 1000,
    height: 1000,
    phi: 0,
    theta: 0,
    dark: 1,
    diffuse: 1.2,
    scale: 1,
    mapSamples: 16000,
    mapBrightness: 6,
    baseColor: [1, 1, 1],
    markerColor: [1, 0.5, 1],
    glowColor: [1, 1, 1],
    offset: [0, 0],
    markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 }
    ],
    onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
    }
});
const globe2 = createGlobe(canvas2, {
    devicePixelRatio: 2,
    width: 500,
    height: 500,
    phi: 0,
    theta: 0,
    dark: 1,
    diffuse: 1.2,
    scale: 1,
    mapSamples: 16000,
    mapBrightness: 6,
    baseColor: [1, 1, 1],
    markerColor: [1, 0.5, 1],
    glowColor: [1, 1, 1],
    offset: [0, 0],
    markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 }
    ],
    onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
    }
});
const globe3 = createGlobe(canvas3, {
    devicePixelRatio: 2,
    width: 700,
    height: 700,
    phi: 0,
    theta: 0,
    dark: 1,
    diffuse: 1.2,
    scale: 1,
    mapSamples: 16000,
    mapBrightness: 6,
    baseColor: [1, 1, 1],
    markerColor: [1, 0.5, 1],
    glowColor: [1, 1, 1],
    offset: [0, 0],
    markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 }
    ],
    onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
    }
});