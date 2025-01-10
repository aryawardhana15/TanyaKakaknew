document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function () {
        // Hapus aktif pada semua tab
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        // Hapus aktif pada semua konten
        document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));

        // Tambahkan aktif pada tab yang diklik
        this.classList.add('active');
        // Tampilkan konten sesuai data-tab
        const tabContent = document.getElementById(this.getAttribute('data-tab'));
        tabContent.classList.add('active');
    });
});

const steps = document.querySelectorAll('.step');
const prevButton = document.getElementById('prevStep');
const nextButton = document.getElementById('nextStep');
let currentStep = 0;

function updateSteps() {
    steps.forEach((step, index) => {
        if (index === currentStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });

    // Atur status tombol navigasi
    prevButton.disabled = currentStep === 0;
    nextButton.disabled = currentStep === steps.length - 1;
}

prevButton.addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--;
        updateSteps();
    }
});

nextButton.addEventListener('click', () => {
    if (currentStep < steps.length - 1) {
        currentStep++;
        updateSteps();
    }
});

// Inisialisasi
updateSteps();
