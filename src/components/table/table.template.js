const CODES = {
  A: 65,
  Z: 90
};

function toCell() {
  return `<div class="cell" contenditable></div>`;
}

function createCol(col) {
  return `<div class="column">${col}</div>`;
}

function createRow(i, content) {
  return `
    <div class="row">
      <div class="row-info ${i ?? 'null'}">${i ?? ''}</div>
      <div class="row-data">${content}</div>
    </div>
  `;
}

function toColumn(_, i) {
  return String.fromCharCode(CODES.A + i);
}

// Pure functions
export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];
  const cols = new Array(colsCount)
      .fill('')
      .map(toColumn)
      .map(createCol).join('');

  console.log(null, cols);

  rows.push(createRow(null, cols));

  for (let i=0; i < rowsCount; i++) {
    const index = i + 1;
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell)
        .join('');
    rows.push(createRow(index, cells));
  }

  return rows.join('');
}
