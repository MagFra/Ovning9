let inputBish = 3;
let inputBosh = 4;
let inputEnd = 100;



console.log(BishBosh(inputBish, inputBosh, inputEnd))



function BishBosh(bish, bosh, end) {
    let result = [];
    let temp;
    for (let i = 1; i <= +end; i++) {

        temp = '';


        if ((i % +bish) === 0) {
            temp += 'Bish'
        }


        if ((i % +bish) === 0 && (i % +bosh) === 0) {
            temp += '-'
        }


        if ((i % +bosh) === 0) {
            temp += 'Bosh'
        }


        if (temp == '') {
            temp = i
        }
        result.push(temp)
    }
    return result;
}