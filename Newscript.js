(function () {
    
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyAk2pZQSt6afOBv9FKbEAXN4_PvOTqojZw"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    //Get Elements
    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignup = document.getElementById("btnSignup");

    //Add Login Event
    btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        const password = txtPassword.value;

        const auth = firebase.auth();

        //sign in with firebase auth
        auth.signInWithEmailAndPassword(email, password).then(user =>{
            alert("Login Successful :)");
        }).catch(err => {
            alert(err.message);
        });
		
		firebase.auth().onAuthStateChanged(user => {
					if(user) {
								window.location = 'profilepage.html'; //After successful login, user will be redirected to home.html
							}
		});
		
        
    });
	
	


    //Add Signup Event
    btnSignup.addEventListener('click', e => {

        //get email and password
        const email = txtEmail.value;
        const password = txtPassword.value;

        const auth = firebase.auth();

        //sign in with firebase auth
        const promise = auth.createUserWithEmailAndPassword(email, password).then(user => {
            alert("Signup Successful :)")
        }).catch(err => {
            alert(err.message);
        });
		
		firebase.auth().onAuthStateChanged(user => {
					if(user) {
								window.location = 'edit.html'; //After successful login, user will be redirected to home.html
							}
		});

    });


}());



