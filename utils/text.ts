

const toLower = (text: string) => {
    const tt = text.toLocaleLowerCase();
    return tt.charAt(0).toUpperCase() + tt.slice(1);
};

export const sanatizeText = (text: string): string => {
    try {
        return isNotEmpty(text) ? text?.split(" ").map(toLower).join(" ") || '' : ''
    } catch (error) {
        console.log(error, 'sanatizeText')
    }
    return text
};

export const sanatizeRun = (run: string): string => {
    let tt = `00${run.replace(/[\.]/g, '')}`.slice(-11).toUpperCase()
    if (tt.startsWith('00')) {
        tt = tt.substring(2, tt.length)
    }
    if (tt.startsWith('0')) {
        tt = tt.substring(1, tt.length)
    }
    return tt
}
