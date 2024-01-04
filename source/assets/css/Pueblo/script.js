document.addEventListener('DOMContentLoaded', (event) => {
    // Function to show a section and hide others
    function showSection(sectionId) {
        // Hide all sections
        document.querySelectorAll('.content-section').forEach(function (section) {
            section.style.display = 'none';
        });

        // Show the section that has the matching ID
        var activeSection = document.getElementById(sectionId);
        if (activeSection) {
            activeSection.style.display = 'block';
        }
    }

    // Attach click event to sidebar links
    document.querySelectorAll('.navigation a').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor link behavior
            var sectionId = this.getAttribute('href').slice(1); // Get the href attribute and remove the '#'
            showSection(sectionId);
        });
    });

    // Show the first section by default
    showSection('welcome');
});
