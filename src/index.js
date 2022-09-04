import knight from './knight';

const gameBoard = (() => {
    const vertex = (xpos, ypos) => {
        return { 
            distance: Infinity, 
            previous: undefined, 
            position: [xpos, ypos], 
            adjacencyList: [] 
        };
    };

    const board = [];
    for (let i = 0; i < 8; ++i) {
        for (let j = 0; j < 8; ++j) {
            const node = vertex(i, j);
            board.push(node);
        }
    }

    const makeGraph = (position) => {
        let source;
        for (const node of board) {
            if (node.position[0] === position[0] && node.position[1] === position[1]) {
                source = node;
                break;
            }
        }
        const queue = [source];
        while (queue.length > 0) {
            for (const move in knight) {
                let adjacentNode = knight[move](queue[0]);
                if (adjacentNode !== null) {
                    if (adjacentNode.previous === undefined && adjacentNode !== source) {
                        adjacentNode.previous = queue[0];
                        queue[0].adjacencyList.push(adjacentNode);
                        queue.push(adjacentNode);
                    }
                }
            }
            queue.shift();
        }
        return source;
    };

    const searchGraph = (graph, start, target) => {
        let source;
        for (const node of board) {
            if (node.position[0] === start[0] && node.position[1] === start[1]) source = node;
        }
        source.distance = 0;
        if (source.position[0] === target[0] && source.position[1] === target[1]) return source;
        const queue = [source];
        while (queue.length > 0) {
            for (const neighbor of queue[0].adjacencyList) {
                if (neighbor.distance === Infinity) {
                    neighbor.distance = queue[0].distance + 1;
                    if (neighbor.position[0] === target[0] && neighbor.position[1] === target[1]) return neighbor;
                    queue.push(neighbor);
                }
            }
            queue.shift();
        }
    };

    const printPath = (endNode) => {
        console.log(`You made it in ${endNode.distance} moves! Here's your path:`);
        const LENGTH = endNode.distance + 1;
        const path = [];
        for (let i = 0; i < LENGTH; ++i) {
            path.unshift(`[${endNode.position.join(', ')}]`);
            endNode = endNode.previous;
        }
        for (const step of path) {
            console.log(step);
        }
    };

    const knightMoves = (startpos, endpos) => {
        const graph = makeGraph(startpos);
        const path = searchGraph(graph, startpos, endpos);
        return printPath(path);
    };

    return { board, knightMoves }; 
})();

export default gameBoard;
