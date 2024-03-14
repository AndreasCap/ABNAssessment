/* eslint-disable no-unused-vars */
'use strict';

function TreeData (data, select) {
    var main = document.querySelector(select);
    var treecanvas = document.createElement('div');
        treecanvas.className = 'tree';

    var treeCode = buildTree(data, Object.keys(data)[0]);
    treecanvas.innerHTML = treeCode;
    main.appendChild(treecanvas);
}

function buildTree (obj, node) {
    var treeString = "<li><a href='#'>" + obj[node].value + "</a>";
    var sons = [];
    for (var i in obj) {
        if (obj[i].parent == node)
          sons.push(i);
    }
    if (sons.length > 0) {
        treeString += "<ul>";
        for (var j in sons) {
          treeString += buildTree(obj, sons[j]);
        }
        treeString += "</ul>";
    }
    return treeString;
}
