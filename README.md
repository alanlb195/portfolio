## ⚠️ Importante: Enlaces internos con ScrollSmoother

Este proyecto usa **GSAP ScrollSmoother** para manejar el desplazamiento suave (`smooth scroll`) en todo el layout principal (`MainLayoutScrollAnimation`).

### 🚫 Problema con `href="#section"`

Los enlaces que usan el comportamiento nativo del navegador con `href="#id"` **rompen el ScrollSmoother** y pueden causar:
- saltos bruscos en el scroll,
- pérdida del efecto de suavizado,
- desincronización entre `ScrollTrigger` y las animaciones GSAP.

Esto ocurre porque el navegador intenta hacer scroll nativo **al mismo tiempo** que GSAP controla el desplazamiento del contenido dentro de su wrapper.

---

### ✅ Solución: usar `data-scroll`

Para mantener la compatibilidad con el sistema de smooth scroll global, **todos los enlaces internos deben usar `data-scroll`** en lugar de `href`.

#### Ejemplo correcto:
```astro
<a data-scroll="#contact">Contact</a>
```
#### Ejemplo incorrecto:
```astro
<a href="#contact">Contact</a> <!-- ❌ rompe el ScrollSmoother -->
```
El sistema global (MainLayoutScrollAnimation o ScrollManager) intercepta todos los elementos con data-scroll y se encarga de:
- prevenir el comportamiento nativo del navegador,
- calcular la posición correcta considerando el alto del navbar,
- ejecutar el desplazamiento suave usando smoother.scrollTo().

#### 🧠 Nota adicional

Si se están renderizando elementos dinámicos (por ejemplo, enlaces generados desde Markdown o contenido CMS),
estos deben reemplazar los href="#..." por data-scroll="#..." manualmente o mediante un componente wrapper.

De lo contrario, el comportamiento del scroll puede romper el layout o congelar las animaciones.