function submit() {
    const person = {
        firstName : document.getElementById('firstName'),
        middleName : document.getElementById('middleName'),
        lastName : document.getElementById('lastName'),
        contactNumber : document.getElementById('contactNumber'),
        emailAddress: document.getElementById('emailAddress'),
        userName : document.getElementById('userName'),
        password1 : document.getElementById('password1'),
        password2: document.getElementById('password2')
    }
    var startResult = document.getElementById('startResult').innerHTML
    var resultDiv = document.getElementById('resultDiv')

    // for(number in person){
    //    if (person[number].value === '' || person[number].value === null){
    //        alert(`${person[number].name} cannot be empty`)
    //    }
    //    else if(person[number].value.length < 5){
    //         alert(`${person[number].name} should be atleast 5 characters`)
    //    }
    //    else{
    //        console.log("You're Good to Go!")
    //    }
    // }

    if(person.firstName.value === null || person.middleName.value === null || person.lastName.value === null || person.contactNumber.value === null || person.emailAddress.value === null || person.userName.value=== null || person.password1.value=== null || person.password2.value === null){
        alert('You have a null input')
    }
    else if(person.password1.value != person.password2.value){
        alert('Your password is not matched')
        }
    else if(person.firstName.value.length < 5){
        alert('First Name should have atleast 5 characters')
    }
    else if(person.middleName.value.length< 5){
        alert('Middle Name should have atleast 5 characters')
    }
    else if(person.lastName.value.length < 5){
        alert('Last Name should have atleast 5 characters')
    }
    else if(person.emailAddress.value.length < 5){
        alert('Email Address should have atleast 5 characters')
    }
    else if(person.userName.value.length < 5){
        alert('Username should have atleast 5 characters')
    }
    else if(person.password1.value.length < 5){
        alert('Password should have atleast 5 characters')
    }

    else if(isNaN(person.contactNumber.value) || person.contactNumber.value == ''){
            alert('Contact Number is not a number')
            }
    // else if (person.contactNumber.innerText.length < 11){
    //     alert('Please Enter 11 digits for your contact number')
    //     }
    else {
        resultDiv.style.visibility = 'visible'
        document.getElementById("submitBtn").innerHTML = 'Reset';
         document.getElementById('submitBtn').onclick = function(){  // reset button
            document.getElementById('startResult').innerHTML = startResult;
             resultDiv.style.visibility = 'hidden'
         }
        }
        console.log(person.firstName.value)
    }

    
   
