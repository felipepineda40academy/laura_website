var Form = document.getElementById("forms");
var mailTo = document.getElementById("hide");

Form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault();

    var form = new FormData(this);
    console.log(form.get('name'));
    mailTo.setAttribute('href', 'mailto:vm072416@gmail.com?subject=${form.get('name')}${form.get('email')}&body=${form.get('message')}')
    mailTo.click()
}









