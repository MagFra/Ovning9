const form = document.querySelector('#inputForm');
const formBtn = document.querySelector('#formBtn');
const output = document.querySelector('#output');


let inputBish;
let inputBosh;
let inputEnd;



form.addEventListener('submit', (e) => {
    e.preventDefault();

    start();

    e.target.reset();
})


function start() {

    inputBish = document.querySelector('#bish').value;
    inputBosh = document.querySelector('#bosh').value;
    inputEnd = document.querySelector('#max').value;

    output.innerHTML = `Bish: ${inputBish}, Bosh: ${inputBosh}, Max: ${inputEnd}<br>`;
    output.innerHTML += `Tänker...<br>`;

    const biscBosh = BishBosh(inputBish, inputBosh, inputEnd)
    setTimeout(() => {
        for (let value of biscBosh) {
            console.log(value);
            print(value);
        }
    }, 4750)
}

function print(value) {
    setTimeout(() => {
        output.innerHTML += value + ', ';
    }, 250)
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