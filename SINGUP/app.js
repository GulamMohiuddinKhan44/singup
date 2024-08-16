import { initializeApp } from "firebase/app";
import { getAnalytics ,createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/analytics";


 const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', () => {
    const signupButton = document.getElementById('sbtn');
    if (signupButton) {
        signupButton.addEventListener('click'), (event) => {
            event.preventDefault();

            let username = document.getElementById('username').value;
            let email = document.getElementById('email').value;
            let password = document.getElementById('password').value;
            console.log(username, email, password);

            createUserWithEmailAndPassword(auth, email, password)
                .then((data) => {
                    const user = data.user;
                    console.log(user.email);
                    alert({
                        icon: 'success',
                        title: 'Signup Successful',
                        text: 'You have successfully signed up!',
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    alert({
                        icon: 'error',
                        title: 'Error',
                        text: errorMessage,
                    });
                });
        });
    }}

    const signinButton = document.getElementById('lbtn');
    if (signinButton) {
        signinButton.addEventListener('click', (event) => {
            event.preventDefault();

            let email = document.getElementById('signin-email').value;
            let password = document.getElementById('signin-password').value;

            signInWithEmailAndPassword(auth, email, password)
                .then((data) => {
                    const user = data.user;
                    console.log('User signed in: ', user.email);
                    Swal.fire({
                        icon: 'success',
                        title: 'Sign In Successful',
                        text: 'You have successfully signed in!',
                    });
                    document.getElementById('signinForm').reset();
                    document.body.style.backgroundColor = "#DFF2BF"; // Change background color on signin
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: errorMessage,
                    });
                });
        });
    }
});