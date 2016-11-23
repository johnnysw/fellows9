/**
 * Created by apple on 16/11/23.
 */

var worker = new Worker('task.js');

worker.onmessage = function(e) {
    alert (e.data );

}

worker.postMessage('haha');


