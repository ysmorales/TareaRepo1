
export const getClassRow = function (node) {
    const colsNum =
        node.type === "row" && node.settings
            ? `grid-cols-${node.settings?.rowNumCols ?? "12"}`
            : "";

    return [colsNum];
};

const calcRem = (value) => `${value / 4}rem`;

export const getCustomStyleRow = function (node) {

    if (!node?.settings) {
        return {}
    }
    return {
        marginLeft: calcRem(node.settings?.margin?.left),
        marginRight: calcRem(node.settings?.margin?.right),
        marginTop: calcRem(node.settings?.margin?.top),
        marginBottom: calcRem(node.settings?.margin?.bottom),

        paddingLeft: calcRem(node.settings?.padding?.left),
        paddingRight: calcRem(node.settings?.padding?.right),
        paddingTop: calcRem(node.settings?.padding?.top),
        paddingBottom: calcRem(node.settings?.padding?.bottom),

        backgroundColor: node.settings?.backgroundColor,
    };
};