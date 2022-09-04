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
        let queue = [source];
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

    return { board, makeGraph } 
})();

export default gameBoard;