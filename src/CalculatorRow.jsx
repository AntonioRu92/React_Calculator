
import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const CalculatorRow = ({ id, sign, value, enabled, onRemove, onToggle, onChange, onToggleSign }) => {
  return (
    <div className={`row ${enabled ? '' : 'disabled'}`}>
      <div className="row-controls">
        <label>
          <input type="checkbox" checked={enabled} onChange={() => onToggle(!enabled)} />
          {sign}
        </label>
      </div>
      <div className="number-controls">
        <input type="number" value={value} onChange={(e) => onChange(e.target.value)} />
        <button onClick={() => onChange(Number(value) + 1)} className="increment">
          <FaPlus />
        </button>
        <button onClick={() => onChange(Number(value) - 1)} className="decrement">
          <FaMinus />
        </button>
      </div>
      <button onClick={() => onRemove(id)} className="remove-row">
        Remove
      </button>
    </div>
  );
};

export default CalculatorRow;
