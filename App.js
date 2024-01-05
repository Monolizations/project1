
// function for copying
async function copy() {
    var copiedText = document.getElementById('password');
    var alerted = 'Password is copied to clipboard';
    try {
        await navigator.clipboard.writeText(copiedText.value);
        console.log('Password copied to clipboard.');
        //alert the user that the password is copied
        alert(alerted);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}


function generate() {
    let length = 12;
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    document.getElementById('password').value = result;
    return result;
}