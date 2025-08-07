// ===== CALCULADORA FUNCIONAL =====
// Variables globales para manejar el estado de la calculadora
let displayValue = '0';           // Valor mostrado en pantalla
let firstOperand = null;          // Primer número de la operación
let waitingForOperand = false;    // Flag para saber si esperamos un nuevo número
let operator = null;              // Operador actual (+, -, *, /, etc.)

// ===== FUNCIÓN PRINCIPAL: ACTUALIZAR DISPLAY =====
function updateDisplay() {
  const display = document.querySelector('.display');
  display.textContent = displayValue;

  // Ajustar tamaño de fuente si el número es muy largo
  if (displayValue.length > 10) {
    display.style.fontSize = 'clamp(1rem, 3vw, 2rem)';
  } else {
    display.style.fontSize = 'clamp(1.5rem, 5vw, 3rem)';
  }
}

// ===== FUNCIÓN: INGRESAR DÍGITO =====
function inputDigit(digit) {
  if (waitingForOperand) {
    // Si esperamos operando, reemplazamos el display
    displayValue = String(digit);
    waitingForOperand = false;
  } else {
    // Si no esperamos operando, agregamos el dígito
    displayValue = displayValue === '0' ? String(digit) : displayValue + digit;
  }
}

// ===== FUNCIÓN: INGRESAR PUNTO DECIMAL =====
function inputDecimal() {
  if (waitingForOperand) {
    // Si esperamos operando, empezamos con "0."
    displayValue = '0.';
    waitingForOperand = false;
  } else if (displayValue.indexOf('.') === -1) {
    // Solo agregamos punto si no hay uno ya
    displayValue += '.';
  }
}

// ===== FUNCIÓN: LIMPIAR TODO (AC) =====
function clearAll() {
  displayValue = '0';
  firstOperand = null;
  waitingForOperand = false;
  operator = null;
}

// ===== FUNCIÓN: LIMPIAR ENTRADA ACTUAL (C) =====
function clearEntry() {
  displayValue = '0';
}

// ===== FUNCIÓN: CALCULAR PORCENTAJE =====
function calculatePercentage() {
  const value = parseFloat(displayValue);
  if (!isNaN(value)) {
    displayValue = String(value / 100);
  }
}

// ===== FUNCIÓN: REALIZAR CÁLCULO =====
function calculate(firstOperand, secondOperand, operator) {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case 'x':
    case '*':
      return firstOperand * secondOperand;
    case '/':
      // Prevenir división por cero
      if (secondOperand === 0) {
        return 'Error';
      }
      return firstOperand / secondOperand;
    default:
      return secondOperand;
  }
}

// ===== FUNCIÓN: MANEJAR OPERADOR =====
function handleOperator(nextOperator) {
  const inputValue = parseFloat(displayValue);

  // Si hay un error, no continuar
  if (displayValue === 'Error') {
    return;
  }

  if (firstOperand === null && !isNaN(inputValue)) {
    // Primera operación: guardar el primer operando
    firstOperand = inputValue;
  } else if (operator) {
    // Operación en cadena: calcular resultado anterior
    const currentValue = firstOperand || 0;
    const result = calculate(currentValue, inputValue, operator);

    // Formatear resultado para evitar decimales largos
    if (result === 'Error') {
      displayValue = 'Error';
      firstOperand = null;
      operator = null;
      waitingForOperand = true;
      return;
    } else {
      displayValue = String(parseFloat(result.toFixed(10)));
      firstOperand = parseFloat(displayValue);
    }
  }

  waitingForOperand = true;
  operator = nextOperator;
}

// ===== FUNCIÓN: MANEJAR IGUAL =====
function handleEquals() {
  const inputValue = parseFloat(displayValue);

  if (firstOperand !== null && operator && !waitingForOperand) {
    const result = calculate(firstOperand, inputValue, operator);

    if (result === 'Error') {
      displayValue = 'Error';
    } else {
      displayValue = String(parseFloat(result.toFixed(10)));
    }

    firstOperand = null;
    operator = null;
    waitingForOperand = true;
  }
}

// ===== FUNCIÓN: MANEJAR TECLADO =====
function handleKeyboard(event) {
  const key = event.key;

  // Números
  if (key >= '0' && key <= '9') {
    inputDigit(parseInt(key));
    updateDisplay();
  }

  // Operadores
  else if (key === '+' || key === '-' || key === '*' || key === '/') {
    const operatorMap = { '*': 'x', '/': '/' };
    handleOperator(operatorMap[key] || key);
    updateDisplay();
  }

  // Igual
  else if (key === 'Enter' || key === '=') {
    handleEquals();
    updateDisplay();
  }

  // Punto decimal
  else if (key === '.') {
    inputDecimal();
    updateDisplay();
  }

  // Limpiar
  else if (key === 'Escape') {
    clearAll();
    updateDisplay();
  }

  // Backspace (borrar último dígito)
  else if (key === 'Backspace') {
    if (displayValue !== '0' && displayValue !== 'Error') {
      displayValue = displayValue.slice(0, -1) || '0';
      updateDisplay();
    }
  }
}

// ===== FUNCIÓN: INICIALIZAR CALCULADORA =====
function initCalculator() {
  // Actualizar display inicial
  updateDisplay();

  // Event listeners para botones
  document.addEventListener('click', (event) => {
    const target = event.target;

    // Verificar si es un botón de la calculadora
    if (!target.matches('button')) return;

    // Botones numéricos (0-9)
    if (target.classList.contains('btn') && !isNaN(target.textContent)) {
      inputDigit(parseInt(target.textContent));
      updateDisplay();
    }

    // Botón 0 especial
    else if (target.classList.contains('btn0')) {
      inputDigit(0);
      updateDisplay();
    }

    // Punto decimal
    else if (target.textContent === '.') {
      inputDecimal();
      updateDisplay();
    }

    // Operadores
    else if (target.classList.contains('operador')) {
      if (target.textContent === '=') {
        handleEquals();
      } else {
        handleOperator(target.textContent);
      }
      updateDisplay();
    }

    // Limpiar todo (AC)
    else if (target.classList.contains('clearall')) {
      clearAll();
      updateDisplay();
    }

    // Limpiar entrada (C)
    else if (target.classList.contains('clear')) {
      clearEntry();
      updateDisplay();
    }

    // Porcentaje
    else if (target.classList.contains('porcentaje')) {
      calculatePercentage();
      updateDisplay();
    }
  });

  // Event listener para teclado
  document.addEventListener('keydown', handleKeyboard);

  // Prevenir comportamiento por defecto en algunos casos
  document.addEventListener('keydown', (event) => {
    // Prevenir scroll con las flechas
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
      event.preventDefault();
    }
  });
}

// ===== INICIALIZAR CUANDO EL DOM ESTÉ LISTO =====
document.addEventListener('DOMContentLoaded', initCalculator);

// ===== EXPORTAR FUNCIONES PARA TESTING (OPCIONAL) =====
// Si necesitas testear las funciones individualmente
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    calculate,
    inputDigit,
    inputDecimal,
    clearAll,
    clearEntry,
    calculatePercentage,
    handleOperator,
    handleEquals
  };
}
