document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const formSuccess = document.getElementById('formSuccess');
    
    // Error messages
    const errorMessages = {
        name: 'Please enter your name',
        email: 'Please enter a valid email address',
        subject: 'Please select a subject',
        message: 'Please enter your message'
    };
    
    // Validation functions
    function validateName() {
        const nameValue = nameInput.value.trim();
        const nameError = document.getElementById('nameError');
        
        if (nameValue === '') {
            nameError.textContent = errorMessages.name;
            nameInput.classList.add('invalid');
            return false;
        } else {
            nameError.textContent = '';
            nameInput.classList.remove('invalid');
            return true;
        }
    }
    
    function validateEmail() {
        const emailValue = emailInput.value.trim();
        const emailError = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (emailValue === '') {
            emailError.textContent = errorMessages.email;
            emailInput.classList.add('invalid');
            return false;
        } else if (!emailRegex.test(emailValue)) {
            emailError.textContent = 'Please enter a valid email address';
            emailInput.classList.add('invalid');
            return false;
        } else {
            emailError.textContent = '';
            emailInput.classList.remove('invalid');
            return true;
        }
    }
    
    function validateSubject() {
        const subjectValue = subjectInput.value;
        const subjectError = document.getElementById('subjectError');
        
        if (subjectValue === '') {
            subjectError.textContent = errorMessages.subject;
            subjectInput.classList.add('invalid');
            return false;
        } else {
            subjectError.textContent = '';
            subjectInput.classList.remove('invalid');
            return true;
        }
    }
    
    function validateMessage() {
        const messageValue = messageInput.value.trim();
        const messageError = document.getElementById('messageError');
        
        if (messageValue === '') {
            messageError.textContent = errorMessages.message;
            messageInput.classList.add('invalid');
            return false;
        } else {
            messageError.textContent = '';
            messageInput.classList.remove('invalid');
            return true;
        }
    }
    
    // Event listeners for real-time validation
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    subjectInput.addEventListener('change', validateSubject);
    messageInput.addEventListener('blur', validateMessage);
    
    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isSubjectValid = validateSubject();
        const isMessageValid = validateMessage();
        
        if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
            // Simulate form submission (in a real app, you would use AJAX)
            setTimeout(function() {
                contactForm.reset();
                formSuccess.style.display = 'block';
                
                // Hide success message after 5 seconds
                setTimeout(function() {
                    formSuccess.style.display = 'none';
                }, 5000);
            }, 1000);
        }
    });
});