document.addEventListener("DOMContentLoaded", () => {
    const mainSections = document.querySelectorAll('.main-section > div');

    mainSections.forEach(section => {
        section.style.display = 'none';
    });

    mainSections[0].style.display = 'block';

    const menuLinks = document.querySelectorAll('.side-section li a');

    menuLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();

            mainSections.forEach(section => {
                section.style.display = 'none';
            });

            const targetSection = document.querySelector(link.getAttribute('href'));
            targetSection.style.display = 'block';
        });
    });

    const showButton = document.getElementById("show");
    showButton.addEventListener("click", () => {
        fetch('http://localhost:8080/Website')
            .then(response => response.json())
            .then(data => {
                displayDataInTable(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    function displayDataInTable(data) {
        const dataTableBody = document.getElementById("data");
        // Clear existing data
        dataTableBody.innerHTML = "";

        // Assuming data is an array of objects with properties: id, name, email, website, java, Backend, React, message
        data.forEach(entry => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${entry.id}</td>
                <td>${entry.name}</td>
                <td>${entry.email}</td>
                <td>${entry.website}</td>
                <td>${entry.java}</td>
                <td>${entry.Backend}</td>
                <td>${entry.React}</td>
                <td>${entry.message}</td>
            `;
            dataTableBody.appendChild(row);
        });
    }
});
