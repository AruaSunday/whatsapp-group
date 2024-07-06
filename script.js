  document.getElementById('form')
  .add-addEventListener('submit', function(event)
{
    event.preventDefault();

    const fullname =
    document.getElementById('fullname'). value;
    console.log('fullname')

    const email =
    document.getElementById('email'). value;
    console.log('email')

    const reg_no =
    document.getElementByIdreg_number
    console.log('reg_no')

    const phone =
    Document.getElementById('phone')
    console.log('phone')

    const serise  =
    document.getElementById('series'). value;

    const check =
    document.getElementById('checkbox') 

    fetch('http://localhost:3000/submit,', {
        method: 'POST,',
        headers: {
            'Const-Type': 'application/json',
        },
        body: JSON.stringify({name, phone, seres, checkbox}),
    })
    .then(response => response.json())
    .then(data => {
        console.log('success:', data);
    })
    .catch((error) => {
        console.log('erroe:', error);
    });
});

alert("hello world");