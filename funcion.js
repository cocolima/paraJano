
function average(array) {
    let number = 0;
    let media = 0;
    for (let k = 0; k < array.length; k++) {
        number += array[k];
        media = number / array.length;
    }
    return media
}
export { average };