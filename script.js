fetch('https://reqres.in/api/users?page=2', {
    method: 'GET'
})
.then(function(response) {
    if (response.status !== 200) {
        throw response.status;
    }
    return response.json();
})
.then(function(data) {
    console.log(data);
    let ul = document.createElement('ul');
    let fragment = document.createDocumentFragment();

    data.data.forEach(element => {
        let li = document.createElement('li');
        li.textContent = element.first_name;
        fragment.appendChild(li)
    });

    ul.appendChild(fragment);
    document.getElementById('api').appendChild(ul);
})
.catch(function(error) {
    if (error == 404) {
        let p = document.createElement('p');
        p.textContent = 'Page Not Found!';
        document.getElementById('api').appendChild(p)
    } else {
        let p = document.createElement('p');
        p.textContent = 'Server Error!';
        document.getElementById('api').appendChild(p)
    }
})