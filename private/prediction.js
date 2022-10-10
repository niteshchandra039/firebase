// JavaScript

import * as tf from '@tensorflow/tfjs';

// const model = tf.loadLayersModel('file://home/astrolab/firebase/models/tfjs_Iband/model.json');

const model = await tf.loadLayersModel("http://localhost:5500/models/tfjs_Iband/model.json");

const example = [0.5, 1.4, 5, 5, 5, 5];  // for example

// example.dtype = 'float64';

const prediction = model.predict(tf.tensor2d([example], [1, 6]));

console.log(example, prediction);