// JavaScript

import * as tf from '@tensorflow/tfjs';

const model = await tf.loadLayersModel('/home/astrolab/ANn-LC/models/model.json');

const example = [0.5, 1.4, 5, 5, 5, 5];  // for example

const prediction = model.predict(tf.tensor2d([example], [1, 6]));

console.log(example, prediction);