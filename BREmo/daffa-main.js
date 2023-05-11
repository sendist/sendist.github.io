const mainPocketLink = document.querySelector(".main-pocket-link");
const dompetALink = document.querySelector(".dompet-A-link");
const dompetBLink = document.querySelector(".dompet-B-link");
const dompetCLink = document.querySelector(".dompet-C-link");
const dompetDLink = document.querySelector(".dompet-D-link");

// Fungsi untuk memperbarui nilai balance pada modal "add-balance"
function updateBalance(balance, pocket) {
    const balanceModal = document.querySelector(".keterangan .balance");
    const dompet = document.querySelector(".keterangan .dompet")
    balanceModal.textContent = balance;
    dompet.textContent = pocket;
}

// Event listener untuk setiap hyperlink
if(mainPocketLink){
    mainPocketLink.addEventListener("click", function() {
        updateBalance("Rp 159.537.000", "Main Pocket");
    });
}

if (dompetALink) {
  dompetALink.addEventListener("click", function() {
      updateBalance("Rp 10.000.000", "Dompet A");
  });
}

if (dompetBLink) {
  dompetBLink.addEventListener("click", function() {
      updateBalance("Rp 15.000.000", "Dompet B");
  });
}

if (dompetCLink) {
  dompetCLink.addEventListener("click", function() {
      updateBalance("Rp 25.000.000", "Dompet C");
  });
}

if (dompetDLink) {
  dompetDLink.addEventListener("click", function() {
      updateBalance("Rp 1.000.000", "Dompet D");
  });
}

function goToBudgeting() {
    window.location.href = "daffa-budgeting.html"; // Ganti dengan URL halaman budgeting yang diinginkan
}