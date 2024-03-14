export function TreeData(data, select, onClickHandler) {
  const main = document.getElementById(select)
  const treecanvas = document.createElement('div')
  treecanvas.className = 'tree'

  const treeCode = buildTree(data, Object.keys(data)[0], onClickHandler)
  treecanvas.innerHTML = treeCode
  main.appendChild(treecanvas)
}

function buildTree(obj, node, onClickHandler) {
  let treeString = `<li><a href='#' class="node-link ChartContainer__node ${'node' + obj[node].name}">${obj[node].name}</a>`

  const sons = []
  for (const i in obj) {
    if (obj[i].parent == node) sons.push(i)
  }
  if (sons.length > 0) {
    treeString += '<ul>'
    for (const i in sons) {
      treeString += buildTree(obj, sons[i], onClickHandler)
    }
    treeString += '</ul>'
  }
  treeString += '</li>'

  return treeString
}
