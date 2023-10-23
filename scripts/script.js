const output = document.querySelector('#output');
let inputBish = 3;
let inputBosh = 4;
let inputEnd = 100;


const biscBosh = BishBosh(inputBish, inputBosh, inputEnd)
for (let value of biscBosh) {
    console.log(value);
    output.innerHTML += value + ', ';
}



function BishBosh(bish, bosh, end) {
    const result = [];
    let temp;

    for (let i = 1; i <= +end; i++) {

        temp = '';

        if ((i % +bish) === 0) {
            temp += 'Bish';
        }

        if ((i % +bish) === 0 && (i % +bosh) === 0) {
            temp += '-';
        }

        if ((i % +bosh) === 0) {
            temp += 'Bosh';
        }

        if (temp == '') {
            temp = i.toString(10);
        }

        result.push(temp);
    }
    return result;
}