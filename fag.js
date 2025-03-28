
// Embedded JavaScript - No need for external file
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const toggle = question.querySelector('.faq-toggle');
            
            // Toggle answer visibility
            answer.classList.toggle('show');
            
            // Change toggle symbol
            toggle.textContent = answer.classList.contains('show') ? '−' : '+';
        });
    });
});
