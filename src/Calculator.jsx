
import React, { useState } from 'react';
import CalculatorRow from './CalculatorRow';

const Calculator = () => {
  const [rows, setRows] = useState([
    { id: 1, sign: '+', value: 0, enabled: true },
  ]);

  const addRow = () => {
    const newRow = { id: Date.now(), sign: '+', value: 0, enabled: true };
    setRows((prevRows) => [...prevRows, newRow]);
  };

  const removeRow = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  const updateRow = (id, newValue) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, value: newValue } : row
      )
    );
  };

  const toggleRow = (id, newEnabled) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, enabled: newEnabled } : row
      )
    );
  };

  const calculateTotal = () => {
    const enabledRows = rows.filter((row) => row.enabled);
    const total = enabledRows.reduce((acc, row) => {
      return row.sign === '+' ? acc + Number(row.value) : acc - Number(row.value);
    }, 0);
    return total;
  };

  return (
    <div className="calculator">
      {rows.map((row) => (
        <CalculatorRow
          key={row.id}
          id={row.id}
          sign={row.sign}
          value={row.value}
          enabled={row.enabled}
          onRemove={() => removeRow(row.id)}
          onToggle={(newEnabled) => toggleRow(row.id, newEnabled)}
          onChange={(newValue) => updateRow(row.id, newValue)}
        />
      ))}
      <button onClick={addRow}>Add Row</button>
      <div className="result">Total: {calculateTotal()}</div>
    </div>
  );
};

export default Calculator;
