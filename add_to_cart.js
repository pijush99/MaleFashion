// Add your cart-specific JavaScript code here
const removeButtons = document.querySelectorAll('.remove-item');

removeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const listItem = button.closest('li');
        listItem.remove();
    });
});

