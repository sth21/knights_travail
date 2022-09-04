import gameBoard from './index';

const knight = (() => {
    const findNode = (position) => {
        for (const node of gameBoard.board) {
            if (node.position[0] === position[0] && node.position[1] === position[1]) return node;
        }
    };

    const moveOne = (node) => {
        if (node.position[0] === 0 || node.position[1] > 5) return null;
        return findNode([node.position[0] - 1, node.position[1] + 2]);
    };

    const moveTwo = (node) => {
        if (node.position[0] === 7 || node.position[1] > 5) return null;
        return findNode([node.position[0] + 1, node.position[1] + 2]);
    };

    const moveThree = (node) => {
        if (node.position[0] > 5 || node.position[1] === 7) return null;
        return findNode([node.position[0] + 2, node.position[1] + 1]);
    };

    const moveFour = (node) => {
        if (node.position[0] > 5 || node.position[1] === 0) return null;
        return findNode([node.position[0] + 2, node.position[1] - 1]);
    };

    const moveFive = (node) => {
        if (node.position[0] === 7 || node.position[1] < 2) return null;
        return findNode([node.position[0] + 1, node.position[1] - 2]);
    };

    const moveSix = (node) => {
        if (node.position[0] === 0 || node.position[1] < 2) return null;
        return findNode([node.position[0] - 1, node.position[1] - 2]);
    };

    const moveSeven = (node) => {
        if (node.position[0] < 2 || node.position[1] === 0) return null;
        return findNode([node.position[0] - 2, node.position[1] - 1]);
    };

    const moveEight = (node) => {
        if (node.position[0] < 2 || node.position[1] === 7) return null;
        return findNode([node.position[0] - 2, node.position[1] + 1]);
    };

    return { moveOne, moveTwo, moveThree, moveFour, moveFive, moveSix, moveSeven, moveEight };
})();

export default knight;
