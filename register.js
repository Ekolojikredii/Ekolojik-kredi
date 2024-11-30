// register.js
document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('register-form');

  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const school = document.getElementById('school').value;
    const city = document.getElementById('city').value;
    const district = document.getElementById('district').value;
    const schoolId = document.getElementById('school-id').value;

    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      const db = firebase.database();
      await db.ref('users/' + user.uid).set({
        name,
        surname,
        email,
        school,
        city,
        district,
        schoolId
      });

      alert("Kayıt başarılı!");
      window.location.href = "index.html";
    } catch (error) {
      console.error(error.message);
      alert("Bir hata oluştu: " + error.message);
    }
  });
});
