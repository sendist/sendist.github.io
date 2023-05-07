function showAddBalance() {
    document.querySelector(".overlay-add-balance").style.display = "block";
    document.getElementById("dompet-budgeting").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    document.querySelector("#dompet-budgeting .card").style.backgroundColor = "rgb(129, 129, 129)";
    document.querySelector("#dompet-budgeting .card-goals").style.backgroundColor = "rgb(120, 123, 122)";
    document.querySelector("#dompet-budgeting .card h1").style.color = "rgb(95,93,93)";
    document.querySelector("#dompet-budgeting .card-goals h4").style.color = "rgb(44,56,121)";
    
}