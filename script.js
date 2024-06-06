document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamic project list
    const projects = [
        {
            title: 'Learning Management System (LMS)',
            technologies: 'Next.js, React, Tailwind CSS, MySQL',
            description: 'Enabling student registration, course enrollment through secure payment gateways, and seamless access to educational resources for learning experiences.'
        },
        {
            title: 'Library Management System - Website',
            technologies: 'PHP, CSS, HTML, MySQL',
            description: 'A web app where admin can issue books with the option to add books, student enrollment, and check available books.'
        },
        {
            title: 'Virtual Suspected Storage Media Creator',
            technologies: 'Python, MongoDB',
            description: 'A software used by forensic tool developers for file carving systems.'
        }
    ];

    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p><strong>Technologies:</strong> ${project.technologies}</p>
            <p>${project.description}</p>
        `;
        projectList.appendChild(projectDiv);
    });

    // Contact form validation
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            alert('All fields are required.');
        } else {
            alert('Message sent successfully!');
            contactForm.reset();
        }
    });

    // Change header background on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    console.log('Portfolio website is loaded');
});
