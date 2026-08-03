// declare variable
let user_input_change_username;

// event listener , arrow function
document.getElementById('update-username-btn').addEventListener('click', () => {
    user_input_change_username = prompt('Enter Your User Name');
    if (user_input_change_username != "" && user_input_change_username !=null) {
        document.getElementById('my-name-id').innerHTML = user_input_change_username;
    }
})


// Update All Places the Name

let us_in_profile_name;

document.getElementById('update-profile-btn').addEventListener('click', () => {
    us_in_profile_name = prompt('Enter Name');

    if(us_in_profile_name != '' && us_in_profile_name != null) {
        const nameElements = document.querySelectorAll('#my-name-id');

        nameElements.forEach((element) => {
            element.textContent = us_in_profile_name;
        })
    }
})