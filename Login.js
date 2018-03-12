function validate()
{
    var object = {
        "person1": { "name": "jay", "password": "123" },
        "person2": { "name": "kavi", "password": "123" },
        "person3": { "name":"manju", "password": "123"}
    };
    var name = document.forms[0].name.value;
    var password=document.forms[0].password.value;
    if(name==object.person1.name && password==object.person1.password)
    {
        document.getElementById("label1").style.display = 'none';
        document.getElementById("b1").style.display = 'none';
        window.location = "Success.html";
        user.reset();
    }
    else if(name==object.person3.name&&password==object.person2.password)
    {
        document.getElementById("label1").style.display = 'none';
        document.getElementById("b1").style.display = 'none';
        window.location = "Success.html";
        user.reset();
    }
    else if (name == object.person2.name && password == object.person3.password) {
        document.getElementById("label1").style.display = 'none';
        document.getElementById("b1").style.display = 'none';
        window.location = "Success.html";
        user.reset();
    }
    else
    {
        document.getElementById("label1").style.display = 'block';
    }
}