let chkAuth = true;
const phoneInput = document.getElementById("phone");
document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll("input:not(#pwChk)");

    inputs.forEach((input) => {
        input.setAttribute("th:field", "*{input.id}");
    });
});

phoneInput.addEventListener("input", () => {
    chkAuth = false;
});
function checkPassword() {
    if ($("#pw").val() === $("#pwChk").val()) {
        $("#pwCheckMsg").text('');
    } else {
        $("#pwCheckMsg").text('비밀번호가 일치하지 않습니다.');
        $("#pwChk").val('');
        $("#pwChk").focus();
    }
}

function update() {

    if (chkAuth === false) {
        swal('인증 번호 확인', '인증 번호 확인을 진행해주세요.', 'error');
        return;
    }
    let emailDomain = $("#emailDomain").val().trim();
    let emailRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailDomain)) {
        swal('이메일 형식 확인', '올바른 이메일 형식이 아닙니다.', 'success');
        $("#emailDomain").focus();
        return;
    }
    const updateBtn = document.querySelector("#updateBtn");
    updateBtn.disabled = true;
    swal('회원정보 수정이 완료되었습니다', '', 'success').then(function () {
        $("#updateForm").submit();
    });
}

function setEmailDomain(domain) {

    if (domain == "") {
        $("#emailDomain").val("");
        $("#emailDomain").prop('disabled', false);
    } else {
        $("#emailDomain").val(domain);
        $("#emailDomain").prop('disabled', true);
    }

    $("#email1").val($("#emailDomain").val());
}

function execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function (data) {
            let roadAddr = data.roadAddress;
            let extraRoadAddr = '';
            if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                extraRoadAddr += data.bname;
            }
            if (data.buildingName !== '' && data.apartment === 'Y') {
                extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
            }
            if (extraRoadAddr !== '') {
                extraRoadAddr = ' (' + extraRoadAddr + ')';
            }

            document.getElementById('postcode').value = data.zonecode;
            document.getElementById("roadAddress").value = roadAddr;
            document.getElementById("jibunAddress").value = data.jibunAddress;

        }
    }).open();
}

function toggleImage() {
    if ($("#pw").prop('type') === 'password') {
        $("#pw").prop('type', 'text');
        $("#pwChk").prop('type', 'text');
        $("#showPw").attr('src', '/img/안보이기.png');
        $("#showPw").attr('alt', '안보이기');
    } else {
        $("#pw").prop('type', 'password');
        $("#pwChk").prop('type', 'password');
        $("#showPw").attr('src', '/img/보이기.png');
        $("#showPw").attr('alt', '보이기');
    }
}


let timer;

function sendPhone() {
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        const phone = phoneInput.value;
        const regex = /^010[0-9]{8}$/;
        if (!phone || !regex.test(phone)) {
            swal('입력 오류', '전화번호의 형식이 올바르지 않습니다.', 'error');
            return;
        }
    }
    if ($("#phone").val()) {
        let query = {
            phone: $("#phone").val().replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
            type: "join"
        };
        console.log($("#phone").val());
        $.ajax({
            type: "post",
            url: "/sendMsg",
            data: query,
            success: function (data) {
                if (data === "false") {
                    swal('중복된 전화번호', '이미 가입된 번호입니다.', 'error');
                    $("#phone").val('');
                    $("#phone").focus();
                } else {
                    swal("인증번호 발송 완료", "입력하신 전화번호로 인증번호를 발송했습니다. \n인증번호를 입력해주세요.", "success");
                    $("#phone").prop('disabled', true);
                    $("#authNumberInput").show();
                    $("#phoneBtn").val("재전송");
                    $("#authNumber").focus();

                    let count = 180; // 3분
                    timer = setInterval(function () {
                        count--;
                        if (count <= 0) {
                            clearInterval(timer);
                            swal("인증 시간 초과", "시간이 초과되었습니다. 재전송해주세요.", "error");
                            $("#phone").prop('disabled', false);
                            $("#authNumberInput").hide();
                            $("#phoneBtn").val("인증번호 발송");
                        } else {
                            let minutes = Math.floor(count / 60);
                            let seconds = count % 60;
                            $("#timer").text(minutes + "분 " + seconds + "초");
                        }
                    }, 1000);
                }


                $("#phone2").val($("#phone").val().replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
            },
            error: function (request, status, error) {
                console.log("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
        })
    }
}

function AuthCode() {

    if ($("#authNumber").val()) {
        let query = {
            code: $("#authNumber").val()

        };

        $.ajax({
            type: "post",
            url: "/Auth",
            data: query,
            success: function (data) {
                if (data === "false") {
                    swal('입력 오류', '인증번호가 일치하지 않습니다.', 'error');
                    $("#authNumber").val('');
                } else {
                    swal('인증 성공', '인증이 완료되었습니다.', 'success');
                    chkAuth = true;
                    clearInterval(timer);
                    $("#timer").text("");
                    $("#authNumber").prop('disabled', true);
                    $("#phoneBtn").hide();
                    $("#authBtn").hide();
                    $("#email").focus();
                }
            }
        });
    }
}



