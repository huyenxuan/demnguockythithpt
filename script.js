// get current time
let current = new Date();
let curYear = current.getFullYear();

// print current year
let year = document.querySelector('.year');
console.log(curYear);
year.innerText = curYear;

// list maxim
var maxim = [
    '“Học, học nữa, học mãi.” -V.I.Lenin-',
    '“Học vấn do người siêng năng đạt được, tài sản do người tinh tế sở hữu, quyền lợi do người dũng cảm nắm giữ, thiên đường do người lương thiện xây dựng.” -Franklin-',
    '“Đi một ngày đàng học một sàng khôn.” -Tục ngữ Việt Nam-',
    '“Đọc sách không bằng suy ngẫm. Học trường không hơn được trường đời”. -Immanuel Kant-',
    '“Đời sống có hạn mà sự học thì vô hạn.” -Trang Tử-',
    '“Đừng xấu hổ khi không biết, chỉ xấu hổ khi không học.” -Khuyết Danh-',
    '“Giáo dục là làm cho con người tìm thấy chính mình.” -Socrates-',
    '“Hiền dữ đâu phải do tính sẵn, phần nhiều do giáo dục mà nên.” -Hồ Chí Minh-',
    '“Học không biết chán, dạy người không biết mỏi.” -Khổng Tử-',
    '“Học kiến thức phải giỏi suy nghĩ, suy nghĩ, lại suy nghĩ. Chính nhờ cách ấy tôi đã trở thành nhà khoa học.” -A.Einstein-',
    '“Học tập là hạt giống của kiến thức, kiến thức là hạt giống của hạnh phúc.” -Ngạn ngữ Gruzia-',
    '“Học thầy, học bạn, vô vạn phong lưu.” -Tục ngữ dân tộc Thái-Việt Nam-',
    '“Hỏi một câu chỉ dốt chốc lát.Nhưng không hỏi sẽ dốt nát cả đời.” -Ngạn ngữ phương Tây-',
    '“Nếu bạn không học, bạn sẽ trở thành ngu dốt.” -Khuyết Danh-',
    '“Con người ai mà chẳng cần học, ai mà chả cần cố gắng để học và trở thành tài.” -Khuyết Danh-',
    '“Học tập giúp mỗi chúng ta rèn luyện bản thân hoàn thiện hơn.”',
    '“Nhà trường chỉ cho chúng ta chiếc chìa khóa tri thức, học trong cuộc sống là công việc cả đời.” -Bill Gates-',
    '“Giáo dục là vũ khí mạnh nhất mà người ta có thể sử dụng để thay đổi cả thế giới.” -N.Mandela-',
    '“Mục tiêu của giáo dục không phải là dạy cách kiếm sống hay cung cấp công cụ để đạt được sự giàu có, mà đó phải là con đường dẫn lối tâm hồn con người vươn đến cái chân và thực hành cái thiện.” -Vijaya Lakshmi Pandit-',
    '“Giáo dục là một điều đáng kính trọng nhưng nên nhớ rằng đôi khi những điều được dạy là những cái không đáng biết.” -Oscar Wilde-',
    '“Đừng để những giây phút chán nản làm ta chùn bước. Mỗi một bước đi là từng bước tiếp thu những tri thức của nhân loại tích lũy thành của riêng bản thân mình.”',
    '“Đừng để những kiến thức hiện có khiến chúng ta ngừng học hỏi. Thế giới vô cùng rộng lớn và học tập chưa bao giờ là đủ.”',
    '“Đừng ngại ngùng khi đặt câu hỏi. Xấu hổ một phút nhưng có kiến thức là cả đời.”'
];
let quote = document.querySelector('.maxim p');
function quoteDisplay() {
    let random = Math.floor(Math.random() * maxim.length);
    quote.innerText = maxim[random];
}
quoteDisplay();
let intervalId = setInterval(() => {
    quoteDisplay();
}, 15000);
quote.addEventListener('click', () => {
    quoteDisplay();

    clearInterval(intervalId);
    intervalId = setInterval(() => {
        quoteDisplay();
    }, 15000);
});

// count down
let status = document.querySelector('.status');
let testDay = document.querySelector('.test-day');
let days = document.querySelector('.days');
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let end = document.getElementById('end');

let countDownDate = new Date('2025/06/26 08:00:00');
let testDate = countDownDate.getDate();
let testMonth = countDownDate.getMonth()+1;
let testYear = countDownDate.getFullYear();
testDay.innerText = '8h:00 ' + testDate + '/' + testMonth + '/' + testYear;

var x = setInterval(() => {
    let curTime = new Date().getTime();
    let distance = countDownDate - curTime;
    // check distance. if distance > 0 then continue.
    //if 0 >= hours >= -1 then print "Kỳ thi đã bắt đầu!". 
    //if hours <= -2 then print "Kỳ thi đã kết thúc!"
    if (distance > 0) {
        var disDays = Math.floor(distance / (1000 * 60 * 60 * 24));
        var disHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var disMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var disSeconds = Math.floor((distance % (1000 * 60)) / 1000);

        days.innerText = disDays;
        hours.innerText = disHours;
        minutes.innerText = disMinutes;
        seconds.innerText = disSeconds;
    }
    else if ((Math.floor(distance / (1000 * 60 * 60 * 24))) <= 0 &&
    (Math.floor(distance / (1000 * 60 * 60 * 24))) >= -1) {
        clearInterval(x);
        document.querySelector('.count-down').classList.add('hidden')
        end.innerText = "Kỳ thi đã bắt đầu!";
    }
    else if ((Math.floor(distance / (1000 * 60 * 60 * 24))) <= -2) {
        clearInterval(x);
        document.querySelector('.count-down').classList.add('hidden')
        end.innerText = "Kỳ thi đã kết thúc!";
    }
}, 1000);

