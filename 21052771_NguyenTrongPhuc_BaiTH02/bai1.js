const form = document.querySelector('form');
const heSoA = document.querySelector('#he-so-a');
const heSoB = document.querySelector('#he-so-b');
const ketQua = document.querySelector('#ket-qua');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const a = Number(heSoA.value);
    const b = Number(heSoB.value);

    if (a === 0) {
        if (b === 0) {
            ketQua.innerHTML = 'Phương trình vô số nghiệm.';
        } else {
            ketQua.innerHTML = 'Phương trình vô nghiệm.';
        }
    } else {
        const x = -b / a;
        ketQua.innerHTML = `Nghiệm của phương trình là: x = ${x}`;
    }
});
