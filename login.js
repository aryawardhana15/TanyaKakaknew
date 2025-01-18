// Mendengarkan event submit form login
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();  // Mencegah form dari submit otomatis

    // Ambil nilai input
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Validasi input
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

    // Ambil data user yang tersimpan di localStorage
    var user = JSON.parse(localStorage.getItem('user'));

    // Cek apakah email dan password sesuai
    if (user && user.email === email && user.password === password) {
        // Tampilkan pop-up login berhasil
        alert('Login successful! You will be redirected to the home page.');

        // Redirect ke index.html setelah 2 detik
        setTimeout(function() {
            window.location.href = 'index.html';
        }, 2000);
    } else {
        alert('Invalid email or password!');
    }
});

// Fungsi untuk memvalidasi email
function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}
