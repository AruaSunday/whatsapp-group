Document.getElementById('form').add-addEventListener('submit', function(event)
{
    event.preventDefault();

    const name =
    document.getElementById('name'). value;
    const phone =
    document.getElementById('phone'). value;
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