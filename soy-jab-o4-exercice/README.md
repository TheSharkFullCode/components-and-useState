# 👑 Reyes Visigodos — Reserva de reyes con React

Ejercicio práctico de React para trabajar **componentes, props y useState**.

Se muestra una galería de reyes visigodos, cada uno con su precio. Al hacer clic en el precio, el rey queda **reservado**: su precio se suma al total y su carta desaparece de la galería. Cuando no queda ninguno, aparece un mensaje final.

## 🛠️ Tecnologías

- React
- Vite
- CSS

## ✨ Funcionalidades

- Galería de cartas generada con `.map()` a partir de un array de datos.
- Imágenes cargadas automáticamente a partir del nombre de cada rey (sin tildes).
- Al reservar un rey:
  - Su precio se suma al total.
  - Su nombre aparece en el panel de reservados.
  - Su carta desaparece de la galería.
- Mensaje final cuando todos los reyes están reservados.
- Panel del total fijo al hacer scroll, con efecto de cristal.
- Animación del total cada vez que cambia.

## 📚 Lo que he aprendido

- **Estado en el padre:** el componente `App` controla toda la lógica y los hijos solo avisan cuando se hace clic.
- **Pasar funciones por props:** así un hijo puede comunicarse con su padre.
- **Actualización funcional:** `setTotal(prev => prev + precio)` usa siempre el valor más reciente del estado.
- **Spread operator:** `[...prev, nombre]` copia un array y le añade un elemento nuevo.
- **`.filter()` + `.includes()`:** para pintar solo los reyes que no están reservados, sin borrar los datos originales.
- **Renderizado:** cada vez que cambia un estado, React vuelve a ejecutar el componente y actualiza solo lo necesario.
- **Ternario en JSX:** `condición ? A : B` para mostrar las cartas o el mensaje final.
- **Datos fuera del componente:** lo que no cambia se define fuera para no recrearlo en cada render.

## 🚀 Cómo ejecutarlo

```bash
npm install
npm run dev
```

---

Hecho por [TheSharkFullCode](https://github.com/TheSharkFullCode) 🦈