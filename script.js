const menuButton = document.getElementById('menuButton');
const navLinks = document.getElementById('navLinks');

menuButton.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const storyDialog = document.getElementById('storyDialog');
const dialogTitle = document.getElementById('dialogTitle');
const dialogBody = document.getElementById('dialogBody');

document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', () => {
    dialogTitle.textContent = button.dataset.title;
    dialogBody.textContent = button.dataset.body;
    storyDialog.showModal();
  });
});

document.getElementById('closeDialog').addEventListener('click', () => {
  storyDialog.close();
});

storyDialog.addEventListener('click', event => {
  if (event.target === storyDialog) storyDialog.close();
});

document.getElementById('contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  document.getElementById('formNote').textContent =
    `Thanks, ${name}! This demo form works on the page, but it does not send email to a server.`;
  event.target.reset();
});
