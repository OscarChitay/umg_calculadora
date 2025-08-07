# 🧮 Calculadora UMG - Calculator

Una calculadora web moderna y funcional desarrollada con HTML, CSS y JavaScript vanilla. Cuenta con un diseño responsive, efectos glassmorphism y soporte completo para teclado.

![Calculadora UMG](https://img.shields.io/badge/Version-1.0-blue) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🌟 Características

### ✨ **Funcionalidades**
- ✅ Operaciones básicas: suma, resta, multiplicación, división
- ✅ Operaciones decimales
- ✅ Función de porcentaje
- ✅ Limpieza total (AC) y parcial (C)
- ✅ Operaciones en cadena (ej: 5 + 3 * 2)
- ✅ Manejo de errores (división por cero)
- ✅ Soporte completo para teclado

### 🎨 **Diseño**
- 🪟 Efectos glassmorphism modernos
- 📱 Diseño completamente responsive
- 🎯 Patrones matemáticos en el fondo
- ⚡ Animaciones suaves y transiciones
- 🌈 Esquema de colores elegante
- 🖱️ Efectos hover interactivos

### ⌨️ **Soporte de Teclado**
- **Números (0-9)**: Entrada de dígitos
- **Operadores (+, -, *, /)**: Operaciones matemáticas
- **Enter/=**: Ejecutar cálculo
- **Escape**: Limpiar todo (AC)
- **Backspace**: Borrar último dígito
- **.**: Punto decimal

## 🚀 Demo en Vivo

[🔗 Ver Demo](https://oscarchitay.github.io/umg_calculadora)

## 📁 Estructura del Proyecto

```
umg_calculadora/
├── 📄 index.html              # Estructura HTML principal
├── 📁 assets/
│   ├── 📁 styles/
│   │   └── 📄 styles.css      # Estilos CSS con glassmorphism
│   ├── 📁 js/
│   │   └── 📄 script.js       # Lógica de la calculadora
│   └── 📁 icons/
│       └── 📄 github.svg      # Ícono de GitHub
├── 📄 README.md               # Documentación del proyecto
└── 📄 LICENSE                 # Licencia del proyecto
```

## 🛠️ Instalación y Uso

### **Opción 1: Clonar el repositorio**
```bash
# Clonar el proyecto
git clone https://github.com/OscarChitay/umg_calculadora.git

# Navegar al directorio
cd umg_calculadora

# Abrir en el navegador
open index.html
```

### **Opción 2: Descarga directa**
1. Descarga el proyecto como ZIP
2. Extrae los archivos
3. Abre `index.html` en tu navegador

### **Opción 3: Servidor local**
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (npx)
npx serve

# Con Live Server (VS Code)
# Instala la extensión Live Server y haz clic derecho → "Open with Live Server"
```

## 💻 Tecnologías Utilizadas

| Tecnología | Propósito | Versión |
|------------|-----------|---------|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) | Estructura y semántica | HTML5 |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | Estilos y efectos glassmorphism | CSS3 |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | Lógica y funcionalidad | ES6+ |

## 🧪 Funciones Principales

### **1. Operaciones Básicas**
```javascript
// Suma, resta, multiplicación, división
calculate(5, 3, '+')  // Resultado: 8
calculate(10, 2, '/')  // Resultado: 5
```

### **2. Manejo de Estados**
```javascript
let displayValue = '0';           // Valor en pantalla
let firstOperand = null;          // Primer número
let waitingForOperand = false;    // Estado de espera
let operator = null;              // Operador actual
```

### **3. Soporte para Teclado**
```javascript
// Detecta teclas y ejecuta funciones correspondientes
document.addEventListener('keydown', handleKeyboard);
```

## 🎯 Ejemplos de Uso

### **Operación Simple**
```
Usuario: 7 + 3 =
Resultado: 10
```

### **Operación en Cadena**
```
Usuario: 5 + 3 * 2 =
Proceso: 5 + 3 = 8, luego 8 * 2 = 16
Resultado: 16
```

### **Operación con Decimales**
```
Usuario: 7.5 / 2.5 =
Resultado: 3
```

### **Función Porcentaje**
```
Usuario: 50 %
Resultado: 0.5 (50/100)
```

## 📱 Responsividad

La calculadora se adapta a diferentes tamaños de pantalla:

- **Desktop (≥1024px)**: Diseño completo con todas las características
- **Tablet (768px - 1023px)**: Ajustes de tamaño y espaciado
- **Mobile (≤767px)**: Optimización para pantallas táctiles

```css
/* Ejemplo de media query */
@media (max-width: 480px) {
  .calculadora {
    max-width: 100%;
    padding: 12px;
    margin: 0 5px;
  }
}
```

## 🛡️ Manejo de Errores

La calculadora maneja varios casos de error:

- **División por cero**: Muestra "Error"
- **Números muy largos**: Ajusta el tamaño de fuente
- **Operaciones inválidas**: Prevención de estados inconsistentes

## 🎨 Características de Diseño

### **Glassmorphism**
```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.2);
```

### **Patrones Matemáticos**
- Símbolos matemáticos de fondo
- Operadores (+, ×, ÷, −)
- Números y constantes (π, √, ∞)

### **Animaciones**
- Transiciones suaves en botones
- Efectos hover interactivos
- Transformaciones 3D sutiles

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Sigue estos pasos:

1. **Fork** el proyecto
2. **Crea** una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. **Commit** tus cambios (`git commit -m 'Agregar nueva característica'`)
4. **Push** a la rama (`git push origin feature/nueva-caracteristica`)
5. **Abre** un Pull Request

### **Tipos de contribuciones**
- 🐛 Reportar bugs
- ✨ Sugerir nuevas características
- 📝 Mejorar documentación
- 🎨 Mejorar el diseño
- ⚡ Optimizar rendimiento

## 📋 Roadmap

### **v1.1 (Próxima versión)**
- [ ] Historial de operaciones
- [ ] Temas de colores adicionales
- [ ] Operaciones científicas básicas
- [ ] Modo de calculadora científica

### **v1.2 (Futuro)**
- [ ] Soporte para múltiples idiomas
- [ ] PWA (Progressive Web App)
- [ ] Exportar resultados
- [ ] Calculadora de unidades

## 🐛 Reportar Problemas

Si encuentras algún bug o tienes sugerencias:

1. Ve a [Issues](https://github.com/OscarChitay/umg_calculadora/issues)
2. Revisa si el problema ya existe
3. Si no existe, crea un nuevo issue con:
   - Descripción clara del problema
   - Pasos para reproducirlo
   - Capturas de pantalla (si aplica)
   - Información del navegador

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Oscar C.**
- 🎓 Universidad Mariano Gálvez
- 🐙 GitHub: [@OscarChitay](https://github.com/OscarChitay)
- 📧 Email: [tu-email@ejemplo.com](mailto:tu-email@ejemplo.com)

## 🙏 Agradecimientos

- Universidad Mariano Gálvez por la formación académica
- Comunidad de desarrolladores por la inspiración
- Recursos de diseño glassmorphism

## 📊 Estadísticas del Proyecto

![GitHub stars](https://img.shields.io/github/stars/OscarChitay/umg_calculadora?style=social)
![GitHub forks](https://img.shields.io/github/forks/OscarChitay/umg_calculadora?style=social)
![GitHub issues](https://img.shields.io/github/issues/OscarChitay/umg_calculadora)
![GitHub license](https://img.shields.io/github/license/OscarChitay/umg_calculadora)

---

⭐ **¡Si te gustó el proyecto, no olvides darle una estrella!** ⭐
