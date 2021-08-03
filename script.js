
// Previous and next

let currentPage = 1;
let totalPage;

function getUser(page) {
    fetch('https://reqres.in/api/users?page=' + page, {
        method: 'GET'
    })
    .then(function(response) {
        if (response.status !== 200) {
            throw response.status;
        }
        return response.json();
    })
    .then(function(data) {
        let fragment = document.createDocumentFragment();

        data.data.forEach(element => {
            let li = document.createElement('li');
            li.textContent = element.first_name;
            fragment.appendChild(li)
        });
        document.getElementById('list').innerHTML = '';
        document.getElementById('list').appendChild(fragment);

        totalPage = data.total_pages;
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
}

    document.getElementById('btn2').addEventListener('click', function() {
        if (currentPage === 1) {
            return
        }
        currentPage -= 1;
        getUser(currentPage);
    })
    document.getElementById('btn').addEventListener('click', function() {
        if (currentPage === totalPage) {
            return
        }
        currentPage += 1;
        getUser(currentPage);
    })

    getUser(currentPage);

// LOAD MORE BUTTON

// let currentPage = 1;

// function getUser(page) {
//     fetch('https://reqres.in/api/users?page=' + page, {
//         method: 'GET'
//     })
//     .then(function(response) {
//         if (response.status !== 200) {
//             throw response.status;
//         }
//         return response.json();
//     })
//     .then(function(data) {
//         let fragment = document.createDocumentFragment();

//         data.data.forEach(element => {
//             let li = document.createElement('li');
//             li.textContent = element.first_name;
//             fragment.appendChild(li)
//         });
//         document.getElementById('list').appendChild(fragment);
//     })
//     .catch(function(error) {
//         if (error == 404) {
//             let p = document.createElement('p');
//             p.textContent = 'Page Not Found!';
//             document.getElementById('api').appendChild(p)
//         } else {
//             let p = document.createElement('p');
//             p.textContent = 'Server Error!';
//             document.getElementById('api').appendChild(p)
//         }
//     })
// }

//     document.getElementById('btn2').addEventListener('click', function() {
//         if (currentPage === 1) {
//             return
//         }
//         currentPage -= 1;
//         getUser(currentPage);
//     })
//     document.getElementById('btn').addEventListener('click', function() {
//         if (currentPage === totalPage) {
//             return
//         }
//         currentPage += 1;
//         getUser(currentPage);
//     })

//     getUser(currentPage);


// FETCH



//     fetch('https://reqres.in/api/users?page=2', {
//         method: 'GET'
//     })
//     .then(function(response) {
//         if (response.status !== 200) {
//             throw response.status;
//         }
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//         let ul = document.createElement('ul');
//         let fragment = document.createDocumentFragment();

//         data.data.forEach(element => {
//             let li = document.createElement('li');
//             li.textContent = element.first_name;
//             fragment.appendChild(li)
//         });

//         ul.appendChild(fragment);
//         document.getElementById('api').appendChild(ul);
//     })
//     .catch(function(error) {
//         if (error == 404) {
//             let p = document.createElement('p');
//             p.textContent = 'Page Not Found!';
//             document.getElementById('api').appendChild(p)
//         } else {
//             let p = document.createElement('p');
//             p.textContent = 'Server Error!';
//             document.getElementById('api').appendChild(p)
//         }
// })