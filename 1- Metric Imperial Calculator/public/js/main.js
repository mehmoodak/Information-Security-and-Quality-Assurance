document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#convertForm').addEventListener('submit', (e) => {
    const input = document.querySelector('#convertForm input').value;

    fetch(`/api/convert?input=${input}`)
      .then(response => response.json())
      .then((data) => {
        document.querySelector('#result').textContent = data.success ? JSON.stringify(data.data) : data.data.msg;
      });

    e.preventDefault();
  });
});
