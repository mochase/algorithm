const nodes = [{id: 'a' }, {id: 'b'}, {id: 'c'}, {id: 'd'}, {id: 'e'}, {id: 'f'}, {id:'g'}, {id: 'h'}, {id: 'i'}]
const edges = [{
    source: 'a',
    target: 'c'
}, {
    source: 'a',
    target: 'd'
}, {
    source: 'a',
    target: 'f'
}, {
    source: 'c',
    target: 'b'
}, {
    source: 'd',
    target: 'c'
}, {
    source: 'f',
    target: 'g'
}, {
    source: 'g',
    target: 'e'
}, {
    source: 'h',
    target: 'i'
}]

// 深度优先遍历
function DFS(node) {
    let output = []
    const walker = (node) => {
        output.push(node)
        let nexts = []
        edges.forEach(e => {
            if (e.source === node.id) {
                const n = nodes.find(v => v.id === e.target)
                if (!n.isVisit) {
                    n.isVisit = true
                    nexts.push(n)
                }
            }
            if (e.target === node.id) {
                const n = nodes.find(v => v.id === e.source)
                if (!n.isVisit) {
                    n.isVisit = true
                    nexts.push(n)
                }
            }
        })
        nexts.forEach(n => {
           walker(n) 
        })
    }
    node.isVisit = true
    walker(node)
    // 遍历其余孤立点
    const fn = () => {
        const noVisits = nodes.filter(v => !v.isVisit)
        if (noVisits.length) {
            noVisits[0].isVisit = true
            walker(noVisits[0])
            fn()
        }
    }
    fn()
    return output.map(v => v.id)
}

console.log(DFS(nodes[0]))
// reset Set
nodes.forEach(n => n.isVisit = false)

// 广度优先遍历
function BFS(node) {
    let output = []
    const walker = (nodeArr) => {
        output = output.concat(nodeArr)
        let nexts = []
        nodeArr.forEach(n => {
            edges.forEach(e => {
                if (e.source === n.id) {
                    const n = nodes.find(node => node.id === e.target)
                    if (!n.isVisit) {
                        n.isVisit = true
                        nexts.push(n)
                    }
                }
                if (e.target === n.id) {
                    const n = nodes.find(node => node.id === e.source)
                    if (!n.isVisit) {
                        n.isVisit = true
                        nexts.push(n)
                    }
                }
            })
        })
        if (nexts.length) {
            walker(nexts)
        }
    }
    node.isVisit = true
    walker([node])
    // 遍历其余孤立点
    const fn = () => {
        const noVisits = nodes.filter(v => !v.isVisit)
        if (noVisits.length) {
            noVisits[0].isVisit = true
            walker([noVisits[0]])
            fn()
        }
    }
    fn()
    return output.map(v => v.id)
}

console.log(BFS(nodes[0]))
debugger