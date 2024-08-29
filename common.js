// ფუნქცია გვერდების ჩვენებისთვის
function showSection(sectionId) {
    document.querySelectorAll('.page-section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// კაბინეტის ღილაკზე დაჭერის დამუშავება
function handleCabinetButtonClick() {
    if (checkAuthorizationStatus()) {
        showSection('cabinet');
    } else {
        openLoginForm();
    }
}

// ავტორიზაციის ფორმის გახსნა
function openLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
}

// ავტორიზაციის ფორმის დახურვა
function closeLoginForm() {
    document.getElementById('loginForm').style.display = 'none';
}

// მომხმარებლის ავტორიზაციის სტატუსის შემოწმება
function checkAuthorizationStatus() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

// შესვლის ფორმის დამუშავება
document.addEventListener('DOMContentLoaded', function() {
    showSection('home'); // საწყისი გვერდი არის მთავარი გვერდი

    // ავტორიზაციის ფორმის შიგთავსის წარდგენა
    document.getElementById('loginFormContent').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        if (email === 'user@example.com' && password === 'password123') {
            localStorage.setItem('isLoggedIn', 'true');
            closeLoginForm();
            showSection('cabinet'); // გადადის კაბინეტის გვერდზე ავტორიზაციის შემდეგ
        } else {
            alert('არასწორი ელ.ფოსტა ან პაროლი!');
        }
    });

    // პაროლის აღდგენის ფორმის წარდგენა
    document.getElementById('passwordResetForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const email = document.getElementById('reset-email').value;
        alert(`თქვენი პაროლი გაგზავნილია ელ.ფოსტაზე: ${email}`);
        showSection('home'); // გადადის მთავარ გვერდზე
    });
});

// რეგისტრაციის ან პაროლის აღდგენის ღილაკზე დაჭერისას ფორმის დახურვა
document.querySelectorAll('.modal-content p a').forEach(function(link) {
    link.addEventListener('click', function() {
        closeLoginForm();
    });
});
