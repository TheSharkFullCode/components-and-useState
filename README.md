# 👑 Reyes Visigodos

**Tarjetas generadas automáticamente desde un array con React**

⚛️ React · ⚡ Vite · 🟨 JavaScript · 🎨 CSS


---

## 📌 El reto

Partimos de un array con 6 reyes (nombre, color y precio) y una carpeta con sus imágenes. Las imágenes **no estaban en el array**: solo existía su archivo.

La solución fácil era escribir cada tarjeta y cada imagen a mano. Pero **¿y si fueran 100 reyes?**

> [!IMPORTANT]
> El objetivo: escribir el componente **una sola vez** y que todo se genere solo a partir de los datos.

---

## 🧠 Cómo lo resolví

### 1️⃣ Del nombre del rey al nombre de su imagen

El archivo de cada imagen se puede **deducir** del nombre del rey: `"Ataúlfo"` → `rey_ataulfo.png`.

```js
const crearNombreImagen = (nombre) => {
  const sinTildes = nombre
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  return `rey_${sinTildes}.png`;
};
```

> [!WARNING]
> `ú` y `u` son letras distintas para el ordenador. Sin quitar las tildes, la imagen de Ataúlfo nunca se encontraría. El nombre con tilde se mantiene en los datos para mostrarse bien escrito en pantalla.

### 2️⃣ `.map()` + spread: un array nuevo con la imagen incluida

`.map()` recorre el array y devuelve **uno nuevo del mismo tamaño**, sin modificar el original. El operador spread (`...`) copia todas las propiedades de cada rey y le añade `imagen`:

```js
const reyesConImagen = reyes.map((rey) => {
  const ruta = new URL(
    `./assets/reyes/${crearNombreImagen(rey.nombre)}`,
    import.meta.url
  ).href;

  return { ...rey, imagen: ruta };
});
```

El resultado, rey por rey:

```diff
- { nombre: "Ataúlfo", color: "peru", precio: 81 }
+ { nombre: "Ataúlfo", color: "peru", precio: 81, imagen: ".../rey_ataulfo.png" }
```

> [!NOTE]
> `new URL(..., import.meta.url)` le pide a **Vite** la ruta real de cada imagen dentro de `src`.

### 3️⃣ `.map()` en el JSX: un componente, todas las tarjetas

El mismo `.map()`, pero esta vez convierte cada rey en una tarjeta:

```jsx
<div className="contenedor-reyes">
  {reyesConImagen.map((rey) => (
    <MyComponents
      key={rey.nombre}
      nombre={rey.nombre}
      color={rey.color}
      precio={rey.precio}
      imgs={rey.imagen}
    />
  ))}
</div>
```

> [!TIP]
> `key` es un identificador único que React necesita para saber qué elemento es cada uno dentro de una lista.

### 4️⃣ El color de cada rey, del array al CSS

Una variable CSS creada desde React permite que cada tarjeta tenga su propio color en el degradado y en la etiqueta del precio:

```jsx
<article className="tarjeta" style={{ "--color-rey": color }}>
```

```css
.tarjeta__precio {
  background: var(--color-rey);
}
```

---

## 🎨 Diseño

- 🧱 **Grid** de 3 columnas que pasa a 1 en móvil con una media query.
- 🌈 **Degradado radial** con `color-mix` a partir del color de cada rey.
- ✨ **Efecto hover**: la tarjeta se eleva y el retrato hace zoom.
- 🔤 Tipografías **Cinzel** (títulos) e **Inter** (texto).

---

## 💡 Lo que me llevo

| Concepto | Para qué sirve |
|---|---|
| `.map()` | Transformar cada elemento de un array en otro: un objeto o un componente |
| Spread `...` | Copiar un objeto y añadirle propiedades nuevas sin tocar el original |
| Props | Pasar datos a un componente para reutilizarlo |
| `key` | Identificar cada elemento de una lista en React |
| Generar datos | Si algo se puede deducir de los datos, no se escribe a mano |

---

## 🚀 Cómo ejecutarlo

```bash
git clone https://github.com/TheSharkFullCode/components-and-useState.git
cd components-and-useState/soy-jab-o4-exercice
npm install
npm run dev
```

---

Hecho con ☕ por **[Oscar](https://github.com/TheSharkFullCode)** · aprendiendo React paso a paso
