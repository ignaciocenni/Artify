# Buenas prácticas de codificación **(WIP!)**

## General

- Aprender bien git y herramientas de gestión de proyectos.
- Dividir las tareas en partes pequeñas y manejables.
- Tomarse el tiempo para pensar y planear antes de comenzar a codificar.

## PRs y ramas de características

- Trabajar con ramas de características y PR hacia la rama principal.
- Los PR deben ser pequeños, enfocados en una cosa y con una descripción clara.
- Los commits deben ser pequeños y específicos con mensajes informativos y claros. Ejemplos: `feat(api/players route): add endpoint GET /players/:id`, `refactor(client/dashboard): date logic for product expirations`, `fix(api/users controller): return 404 on inexistent user`, `test(api/math): add missing tests for division by zero`.
- Nombrar las ramas de manera informativa. Ejemplos: `feat/user_creation`, `fix/currency_with_decimal`, `chore/lint_ci`, `refactor/auth_routing`.

## Revisión de código

- Realizar revisiones de código en cada PR.
- La revisión de código ayuda a tener una visión global del proyecto y a mejorar la calidad del código.

## Código

- Usar una buena estructura de carpetas y ser ordenados.
- Reutilizar funciones y componentes lo más posible.
- Seguir las convenciones de sintaxis y estilo.
- Extraer lógica abstracta en funciones de ayuda.

### Nombrando

- Elegir nombres adecuados para conceptos básicos de la lógica del negocio.
- Usar nombres claros y específicos para variables, funciones y constantes. Ejemplo: `players` sería una lista de jugadores, pero si hay una versión filtrada entonces se puede considerar `filteredPlayers`.
- Seguir las convenciones de casing. Ejemplos: `playersStatistics`, `getVideoURL` (variables y funciones, _camelCase_), `MATCH_LENGTH` (constantes), `PlayerDashboard` (clases y componentes de React), `/players/:id/basic_info` (URLs), etc.

### Otros

- Minimizar la cantidad de comentarios en el código.
- Minimizar el uso de string literals.
- Todo en el código, incluyendo clases, variables, constantes y comentarios, debe estar en inglés.

## Pruebas

- Las pruebas hacen nuestras vidas más fáciles.
- Escribir pruebas específicas y correctas para validar la funcionalidad desarrollada.
- Considerar el desarrollo impulsado por pruebas (TDD).

### Integración continua

- Utilizar herramientas de CI para validar constantemente el trabajo realizado.

## Extra

- Incluir un archivo README en cada proyecto que resuma brevemente la información importante.
- Aprender a dividir los problemas y abstraerse de las capas contiguas.
- Entender bien el modelo MVC.
- Consensuar ciertas herramientas en grupo antes de comenzar.
- Manejar la frustración. Codear puede ser frustrante, pero es importante tomarse la calma y buscar maneras de minimizar la frustración.
