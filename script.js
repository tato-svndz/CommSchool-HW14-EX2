const table = document.querySelector('table');
const rows = table.querySelectorAll('tr');

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const cells = row.querySelectorAll('td');
      for (let j = 0; j < cells.length; j++) {
        const cell = cells[j];
        if (i === j) {
          cell.style.backgroundColor = 'red';
        }
      }
    }