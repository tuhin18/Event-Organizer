document.addEventListener('DOMContentLoaded', function() {
    // Initialize FullCalendar
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: [ 'dayGrid' ],
        initialView: 'dayGridMonth',
        events: [
            { title: 'Event 1', start: '2024-05-01' },
            { title: 'Event 2', start: '2024-05-02' }
        ]
    });
    calendar.render();

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Thank you for contacting us, ' + name + '!');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Social Media Sharing
    const shareButtons = document.querySelectorAll('.share-button');
    shareButtons.forEach(button => {
        button.addEventListener('click', () => {
            const url = window.location.href;
            let shareUrl;
            if (button.classList.contains('facebook')) {
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            } else if (button.classList.contains('twitter')) {
                shareUrl = `https://twitter.com/share?url=${encodeURIComponent(url)}`;
            } else if (button.classList.contains('linkedin')) {
                shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}`;
            }
            window.open(shareUrl, '_blank');
        });
    });

    // RSVP Form Submission
    const rsvpForm = document.getElementById('rsvpForm');
    rsvpForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('rsvpName').value;
        const email = document.getElementById('rsvpEmail').value;

        if (name && email) {
            alert('Thank you for your RSVP, ' + name + '!');
            rsvpForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Feedback Form Submission
    const feedbackForm = document.getElementById('feedbackForm');
    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const feedbackText = document.getElementById('feedbackText').value;

        if (feedbackText) {
            alert('Thank you for your feedback!');
            feedbackForm.reset();
        } else {
            alert('Please provide your feedback.');
        }
    });
});