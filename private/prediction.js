// JavaScript

// import * as tf from '@tensorflow/tfjs';
const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');

const model = tf.loadLayersModel('file://home/astrolab/firebase/models/tfjs_Iband/model.json');

const example = [0.5, 1.4, 5, 5, 5, 5];  // for example

const prediction = model.predict(tf.tensor2d([example], [1, 6]));

console.log(example, prediction);