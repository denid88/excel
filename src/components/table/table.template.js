const CODES = {
  A: 65,
  Z: 90
};

function toCell() {
  return `<div class="cell" spellcheck="false" contenteditable="true"></div>`;
}

function createCol(col) {
  return `<div class="column">
    ${col}
    <div class="col-resize" data-value="${col}" data-resize="col"></div>
  </div>`;
}

function createRow(i, content) {
  return `
    <div class="row">
      <div class="row-info ${i ?? 'null'}">
        ${i ?? ''}
        ${i !== null ? '<div class="row-resize" data-resize="row"></div>' : ''}
      </div>
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
