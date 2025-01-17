// Mendengarkan event submit form login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Mencegah form dari submit otomatis

    // Ambil nilai input login
    var loginEmail = document.getElementById('loginEmail').value;
    var loginPassword = document.getElementById('loginPassword').value;

    // Ambil data pengguna yang disimpan di localStorage
    var storedUser = JSON.parse(localStorage.getItem('user'));

    // Cek apakah data pengguna ada dan apakah email dan password cocok
    if (storedUser) {
        if (loginEmail === storedUser.email && loginPassword === storedUser.password) {
            alert('Login successful!');
            window.location.href = 'index.html';  // Arahkan ke halaman utama
        } else {
            alert('Invalid email or password');
        }
    } else {
        alert('No account found. Please sign up first.');
    }
});
