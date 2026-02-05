# 📝 PokéApp - Catálogo Dinámico con Next.js

Este proyecto es una aplicación web moderna que funciona como una **Pokédex interactiva**. El objetivo principal es permitir la exploración de Pokémon a través de una interfaz fluida, con navegación lateral persistente y carga de datos en tiempo real.

## 🚀 Tecnologías y Herramientas

### 1. API: [PokeAPI](https://pokeapi.co/)
Para alimentar el proyecto con datos reales, se utilizó la **RESTful Pokémon API**:
* **Consumo Dinámico:** Se obtienen datos como nombres, tipos e imágenes de alta calidad (`official-artwork`).
* **Eficiencia:** Se realizan consultas específicas por nombre para optimizar la transferencia de datos.

### 2. Next.js 15 (Framework)
Se implementaron las funciones más recientes del framework para garantizar un rendimiento óptimo:
* **App Router:** Organización de rutas basada en el sistema de archivos dentro de la carpeta `/app`.
* **Rutas Dinámicas (`[name]/page.tsx`):** Uso de parámetros en la URL para generar cientos de páginas de Pokémon utilizando un solo archivo de diseño.
* **Server Components:** La lógica de obtención de datos (`fetch`) se ejecuta en el servidor, mejorando la velocidad de carga inicial.
* **Layouts Persistentes:** Implementación de un diseño de "Sidebar" (barra lateral) que no se recarga al navegar entre diferentes Pokémon, manteniendo el estado de la aplicación.



### 3. Tailwind CSS (Diseño Responsivo)
El diseño se construyó bajo la filosofía de "móvil primero":
* **Breakpoints (`sm`, `lg`):** La interfaz es totalmente responsiva. En dispositivos pequeños, el menú es horizontal y superior; en pantallas grandes, se transforma en un menú lateral fijo.
* **Estética Moderna:** Uso de colores de la paleta `slate` para el modo oscuro, con acentos en colores clásicos de Pokémon (Rojo y Amarillo).
* **Scroll Independiente:** El menú lateral y el área de contenido tienen sus propios sistemas de desplazamiento para mejorar la usabilidad.


