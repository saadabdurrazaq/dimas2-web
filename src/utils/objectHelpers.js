export const defaults = function(object, source) {
    Object.keys(object).forEach(key => {
        if (source.hasOwnProperty(key)) {
            source[key] = object[key];
        }
    });
}