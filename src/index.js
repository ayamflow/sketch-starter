'use strict';

var Sketch = require('Sketch');
var dat = require('dat');

Sketch.create({
    setup: function() {

        this.createGUI();
    },

    createGUI: function() {
        this.gui = new dat.GUI();
    },

    draw: function() {

    }
});