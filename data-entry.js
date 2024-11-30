// data-entry.js
document.addEventListener('DOMContentLoaded', () => {
  const dataEntryForm = document.getElementById('data-entry-form');
  const dataSection = document.getElementById('data-section');
  const submitDataButton = document.getElementById('submit-data');

  // Komite doğrulama
  dataEntryForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const committeeName = document.getElementById('committee-name').value;
    const committeePassword = document.getElementById('committee-password').value;

    // Belirli komite şifresi ile doğrulama (örneğin: "Torbalı Anadolu Lisesi" ve "12345678")
    if (committeeName === "Torbalı Anadolu Lisesi" && committeePassword === "12345678") {
      dataSection.classList.remove('hidden');
      alert("Veri girişine hoş geldiniz!");
    } else {
      alert("Komite adı veya şifre hatalı!");
    }
  });

  // Veri kaydetme
  submitDataButton.addEventListener('click', async () => {
    const schoolName = document.getElementById('school-name').value;
    const schoolId = document.getElementById('school-id').value;
    const wasteType = document.getElementById('waste-type').value;
    const wasteAmount = document.getElementById('waste-amount').value;

    if (schoolName && schoolId && wasteType && wasteAmount) {
      const db = firebase.database();
      const newDataRef = db.ref('waste_data/').push();

      await newDataRef.set({
        schoolName,
        schoolId,
        wasteType,
        wasteAmount,
        timestamp: Date.now(),
      });

      alert("Veri başarıyla kaydedildi!");
    } else {
      alert("Tüm alanları doldurduğunuzdan emin olun.");
    }
  });
});
