// 자동으로 년도 바꾸는 법

const newYear = document.querySelector('.date');
console.log(newYear);
// new: 생성자 함수
let date = new Date();
let date_year = date.getFullYear();
console.log(date_year);

newYear.innerText = date_year;
// newYear.innerHtml = `<span>${date_year}</span>`;


// const footer = document.querySelector('footer');
// footer.innerHTML = 
// `
//   <div class="box" style="color:red">
//     <p>Hello Site!!</p>
//   </div>
// `;