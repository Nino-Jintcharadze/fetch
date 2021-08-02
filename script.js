fetch('https://reqres.in/api/users?page=2', {
    method: 'GET'
})
.then(function(response) {
    if (response.status !== 200) {
        throw 'error';
    }
    return response.json();
})
.then(function(data) {
    console.log(data);
    let ul = document.createElement('ul');

    data.data.forEach(element => {
        let li = document.createElement('li');
        li.textContent = element.first_name;

        ul.appendChild(li);
        
    });
    document.getElementById('api').appendChild(ul);
})
.catch(function(error) {
    console.log(error)
})