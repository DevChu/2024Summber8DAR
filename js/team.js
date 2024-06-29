const teamMark = ['fa8','tzi','t9t','t6t','0ot','mu3'],
    teamCode = ['qmmfa8','xsjtzi','3ejt9t','h3gt6t','p700ot','e9smu3'],
    missionCode = ['rolling','stick-circle','hohoho','dancemen','teamwork','stop!'];
function parseTeamCode() {
    return teamMark.indexOf(new URLSearchParams(location.search).get('q'));
}
function getTeamCode() {
    const index = parseTeamCode();
    if (index > -1) {
        return teamCode[index];
    }
    return '???';
}
function getTeamNumber() {
    return parseTeamCode() + 1;
}

function getMissionNumber() {
    const locationHref = location.href;
    let result = locationHref.substring(locationHref.lastIndexOf('/') + 1).replace('mission', '');
    result = result.substring(0, result.indexOf('.html'));
    return parseInt(result);
}

function confirmSecret() {
    const secret = document.getElementById('secretInput').value.toLowerCase();
    const messageElement = document.getElementById('message');
    const popupMessageElement = document.getElementById('popupMessage');
    const final = secret.indexOf('#') == 0;
    const missionNumber = getMissionNumber();
    let secret0 = final ? secret.substring(1) : secret;
    if (secret0 === missionCode[missionNumber - 1]) {
        document.getElementById('close-button').style.display = 'none';
        const nextMissionNumber = missionNumber == 6 ? 1 : missionNumber + 1;
        const nextURL = `https://devchu.github.io/2024Summber8DAR/mission${final ? '-f' : nextMissionNumber}.html`;
        messageElement.textContent = '';
        let countdown = 5;
        popupMessageElement.textContent = `輸入正確，正在創意之路上往前邁進... ${countdown}`;
        openPopup();

        const countdownInterval = setInterval(() => {
            countdown--;
            popupMessageElement.textContent = `輸入正確，正在創意之路上往前邁進... ${countdown}`;
            if (countdown === 0) {
                clearInterval(countdownInterval);
                window.location.href = nextURL;
            }
        }, 1000);
    } else {
        messageElement.textContent = '密語錯誤，請重新輸入';
        messageElement.style.color = 'red';
    }
}
function openCamera() {
    document.getElementById('popup').style.display = 'flex';
    document.getElementById('close-button').style.display = 'block';
    const arIframe = document.getElementById('ar');
    arIframe.src = `https://devchu.github.io/2024Summber8DAR/8dAR-mission${getMissionNumber()}.html`;
    arIframe.style.display = 'block';
}

function openPopup() {
    document.getElementById('popup').style.display = 'flex';
    document.getElementById('ar').style.display = 'none';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}