const ticketForm = document.getElementById("ticketForm");
const ticketList = document.getElementById("ticketList");
const deleteTicketsBtn = document.getElementById("deleteTickets");



const tickets = [];


ticketForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const antall = document.getElementById("antall").value;
    const surname = document.getElementById("surname").value.trim();
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const ticketType = document.getElementById("ticketType").value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{8}$/;

    if (isNaN(antall) || antall <=0 || antall >10) {
        alert("Vennligst skriv antall billetter (min. 1 max 10)");
        return false;
    }

    if (name === "" || surname === "") {
        alert("Vennligst skriv for- og etternavnet ditt");
        return false;
    }
    if (!emailPattern.test(email)) {
        alert("Vennligst skriv korrekt epostadresse");
        return false;
    }
    if (!phonePattern.test(phone)) {
        alert("Vennligst skriv korrekt telefonnummer (8 sifre)");
        return false;
    }

    const ticket = {
        name: name,
        surname: surname,
        antall: antall,
        email: email,
        phone: phone,
        ticketType: ticketType
    };

    tickets.push(ticket);

    displayTickets();

    ticketForm.reset();
});

deleteTicketsBtn.addEventListener("click", function() {
    tickets.length = 0;
    displayTickets();
});

function displayTickets() {
    ticketList.innerHTML = "";

    tickets.forEach(function(ticket) {
        const li = document.createElement("li");
        li.textContent = `${ticket.ticketType} - ${ticket.antall} - ${ticket.name} - ${ticket.surname} - ${ticket.phone} - ${ticket.email}`;
        ticketList.appendChild(li);
    });
}
