function authenticate_user(username, password) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET','https://example.com/api/user/authenticate?username=' + username + '&password=' + password, true);
    xhr.responseType = 'json';
    xhr.send();

    let result = false;

    xhr.onload = function () {
        if (xhr.status !== 200) {
            result = xhr.response;
        } else {
            result = true;
        }
    };

    return result;
}

$('form #login').click(function () {
    let username = $('username');
    let password = $('password');

    let res = authenticate_user(username, password);

    if (res == true) {
        document.location.href = '/home';
    } else {
        alert(res.error);
    }
});
