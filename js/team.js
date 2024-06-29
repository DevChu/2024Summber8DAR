const teamMark = ['fa8','tzi','t9t','t6t','0ot','mu3'],
    teamCode = ['qmmfa8','xsjtzi','3ejt9t','h3gt6t','p700ot','e9smu3'];
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