// 로또 번호 생성 함수
function generateLottoNumbers() {
    const numbers = [];
    while (numbers.length < 6) {
        let randomNumber = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers;
}

// 번호 생성 버튼 클릭 이벤트 핸들러
document.getElementById('generate-btn').addEventListener('click', function() {
    const lottoNumbers = generateLottoNumbers();
    const numberElements = document.querySelectorAll('.number');

    numberElements.forEach((element, index) => {
        element.textContent = lottoNumbers[index];
        // SweetAlert2를 사용하여 번호를 팝업으로 보여줌
        Swal.fire({
            title: '청소당번!',
            icon: 'success',
            timer: 1500,
            timerProgressBar: true,
            showConfirmButton: false
        });
    });
});