import uniqid from "uniqid";

export function deleteElementByPath(trees, path) {
    if (!Array.isArray(path) || path.length === 0) {
        throw new Error('La ruta debe ser un array de índices no vacío.');
    }

    let current = trees[path[0]];
    for (let i = 1; i < path.length - 1; i++) {
        if (!Array.isArray(current.items) || current.items[path[i]] === undefined) {
            throw new Error('Ruta inválida en el árbol.');
        }
        current = current.items[path[i]];
    }

    const lastIndex = path[path.length - 1];
    if (!Array.isArray(current.items) || current.items[lastIndex] === undefined) {
        throw new Error('Índice final inválido.');
    }

    current.items.splice(lastIndex, 1);
}

export function encontrarRutaPorIndice(arbol, idBuscado, ruta = []) {
    for (let i = 0; i < arbol.length; i++) {
        const nodo = arbol[i];

        // Añadir el índice actual a la ruta
        ruta.push(i);

        // Si encontramos el nodo con el id buscado, retornamos la ruta
        if (nodo.id === idBuscado) {
            return ruta;
        }

        // Si el nodo tiene hijos, buscamos recursivamente en ellos
        if (nodo.items && nodo.items.length > 0) {
            const rutaEncontrada = encontrarRutaPorIndice(nodo.items, idBuscado, ruta);
            if (rutaEncontrada) {
                return rutaEncontrada;
            }
        }

        // Si no se encontró el nodo, quitamos el índice de la ruta (retrocedemos)
        ruta.pop();
    }
    return null; // Si no se encuentra el nodo
}

export function assignNewIds(node) {
    node.id = uniqid();
    if (Array.isArray(node.items)) {
        node.items.forEach(assignNewIds);
    }
}

export function duplicateNodesByPath(trees, path, forceWrite = {}) {
    if (!Array.isArray(path) || path.length === 0) {
        throw new Error('La ruta debe ser un array de índices no vacío.');
    }

    let current = trees[path[0]];
    for (let i = 1; i < path.length - 1; i++) {
        if (!Array.isArray(current.items) || current.items[path[i]] === undefined) {
            throw new Error('Ruta inválida en el árbol.');
        }
        current = current.items[path[i]];
    }

    const lastIndex = path[path.length - 1];
    if (!Array.isArray(current.items) || current.items[lastIndex] === undefined) {
        throw new Error('Índice final inválido.');
    }

    const nodeToDuplicate = JSON.parse(JSON.stringify(isNotEmpty(forceWrite) ? forceWrite : current.items[lastIndex]));
    assignNewIds(nodeToDuplicate);
    current.items.splice(lastIndex + 1, 0, nodeToDuplicate);
}

export function getNodeByPath(trees, path) {
    if (!Array.isArray(path) || path.length === 0) {
        throw new Error('La ruta debe ser un array de índices no vacío.');
    }

    let current = trees[path[0]];
    for (let i = 1; i < path.length; i++) {
        if (!Array.isArray(current.items) || current.items[path[i]] === undefined) {
            throw new Error('Ruta inválida en el árbol.');
        }
        current = current.items[path[i]];
    }

    return current;
}

export function updateNodeByPath(trees, path, key, value, allReplace = false) {
    if (!Array.isArray(path) || path.length === 0) {
        throw new Error('La ruta debe ser un array de índices no vacío.');
    }

    let current = trees[path[0]];
    for (let i = 1; i < path.length; i++) {
        if (!Array.isArray(current.items) || current.items[path[i]] === undefined) {
            throw new Error('Ruta inválida en el árbol.');
        }
        current = current.items[path[i]];
    }

    if (key) {
        if (allReplace) {
            current[key] = value;
        } else {
            current[key] = clone({ ...current[key], ...value });
        }
    }
}

export function clone(item) {
    return JSON.parse(JSON.stringify(item))
}

export const getEmptySection = () => ({
    id: uniqid('s'),
    settings: {},
    type: 'section',
    items: [{
        id: uniqid('r'),
        settings: {},
        type: 'row',
        items: []
    }]
})

export const getFormFieldsNodes = (listTree, id) => {
    const path = encontrarRutaPorIndice(listTree, id);
    const trees = [getNodeByPath(listTree, path)];
    let leaves = [];
    const addNode = (node) => {
        if (node?.item?.indexOf("form") !== -1) {
            leaves.push({
                id: node.id,
                item: node.item,
                settings: node.settings,
            });
        }
    };
    function traverse(node) {
        if (!node?.items || node?.items.length === 0) {
            addNode(node);
        } else {
            if (node?.item) {
                addNode(node);
            }
            node?.items?.forEach(traverse);
        }
    }
    trees.forEach(traverse);
    return leaves;
};

const fieldsForm = ['DsInput']

export const getFormFieldValues = (listTree, id) => {
    const trees = id ? [getNodeByPath(listTree, encontrarRutaPorIndice(listTree, id))] : listTree;
    let leaves = {};
    const addNode = (node) => {
        if (fieldsForm.includes(getNameComponentKey(node.item))) {
            leaves[node.id] = node.data ?? ''
        }
    };
    function traverse(node) {
        if (node?.item) {
            addNode(node);
        }
        if (node?.items)
            node?.items?.forEach(traverse);
    }
    trees.forEach(traverse);
    return leaves;
};