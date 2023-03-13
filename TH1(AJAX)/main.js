async function getApi(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    var data = await response.json()
    if(response){
        document.getElementById('loading').style.display='none'
    }
    show(data)
}

function show(data){
    let tab =
    `
    <tr>
    <th>Name</th>
    <th>Username</th>
    <th>Email</th>
    </tr>
    `
    for(let employee of data){
        tab +=
        `
        <tr>
        <th>${employee.name}</th>
        <th>${employee.username}</th>
        <th>${employee.email}</th>
        </tr>
        `
    }
    document.getElementById('employees').innerHTML=tab
}

getApi()
