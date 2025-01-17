// Mendengarkan event submit form sign-up
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();  // Mencegah form dari submit otomatis

    // Ambil nilai input
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Validasi input
    if (name === '') {
        alert('Name is required!');
        return;  // Menghentikan eksekusi lebih lanjut
    }
    if (email === '') {
        alert('Email is required!');
        return;  // Menghentikan eksekusi lebih lanjut
    }
    if (!validateEmail(email)) {
        alert('Please enter a valid email!');
        return;  // Menghentikan eksekusi lebih lanjut
    }
    if (password === '') {
        alert('Password is required!');
        return;  // Menghentikan eksekusi lebih lanjut
    }

    // Simpan data ke localStorage
    localStorage.setItem('user', JSON.stringify({ name: name, email: email, password: password }));

    // Tampilkan pop-up sign-up berhasil
    console.log('Form submitted');  // Pastikan form sudah disubmit
    alert('Sign up successful! You will be redirected to the home page.');

    // Redirect ke index.html setelah 2 detik
    setTimeout(function() {
        window.location.href = 'index.html';
    }, 2000);
});

// Fungsi untuk memvalidasi email
function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}
