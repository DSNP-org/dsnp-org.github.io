/* eslint-disable */
/**
 * Trust All Scripts
 *
 * This is a dirty little script for iterating over script tags
 * of your Ghost posts and adding them to the document head.
 *
 * This works for any script that then injects content into the page
 * via ids/classnames etc.
 *
 */
var trustAllScripts = function () {
    var scriptNodes = typeof document !== `undefined` ? document.querySelectorAll('.load-external-scripts script'): null;

    for (var i = 0; i < scriptNodes.length; i += 1) {
        var node = scriptNodes[i];
        var s = typeof document !== `undefined` ? document.createElement('script') : null;
        s.type = node.type || 'text/javascript';

        if (node.attributes.src) {
            s.src = node.attributes.src.value;
        } else {
            s.innerHTML = node.innerHTML;
        }

        typeof document !== `undefined` ? document.getElementsByTagName('head')[0].appendChild(s) : null;
    }
};

exports.onRouteUpdate = function () {
    trustAllScripts();
};
