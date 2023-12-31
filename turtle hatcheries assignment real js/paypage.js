document.addEventListener("DOMContentLoaded", () => {
    const paymentForm = document.getElementById("payment-form");
    const payButton = document.getElementById("payButton");
    const payAmount = document.getElementById("payAmount");


  const summaryDate = localStorage.getItem("Sdate");
  const summaryTime = localStorage.getItem("sTime");
  const summaryDuration = localStorage.getItem("sDuration");
  const summaryTickets = localStorage.getItem("stickets");
  const summaryTotal = localStorage.getItem("summaryTotal");

  

   
    const summaryTable = document.querySelector(".stable");
    summaryTable.innerHTML = `
        <h2>Summary</h2>
        <table>
            <tr>
                <td>Date</td>
                <td>${summaryDate || "-"}</td>
            </tr>
            <tr>
                <td>Time</td>
                <td>${summaryTime || "-"}</td>
            </tr>
            <tr>
                <td>Duration</td>
                <td>${summaryDuration || "-"}</td>
            </tr>
            <tr>
                <td>Tickets</td>
                <td>${summaryTickets || "-"}</td>
            </tr>
            <tr>
                <td>Total Payable</td>
                <td>${summaryTotal || "-"}</td>
            </tr>
        </table>
    `;

    // Display the total amount to pay on the Pay button
    const totalPayable = summaryTotal ? parseFloat(summaryTotal.slice(1)) : 0;
    payAmount.textContent = `$${totalPayable.toFixed(2)}`;

    paymentForm.addEventListener("input", () => {
        const isFormValid = paymentForm.checkValidity();
        payButton.disabled = !isFormValid;
    });

    paymentForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Redirect to Confirmation page
        window.location.href = "confirmation.html";
    });
});
