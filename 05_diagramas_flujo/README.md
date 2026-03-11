
## ¿Qué es un diagrama de flujo?

Un **diagrama de flujo** es una representación gráfica de un algoritmo.

Se utiliza para **mostrar paso a paso cómo funciona un proceso** utilizando símbolos conectados con flechas que indican el orden de las instrucciones.

Los diagramas de flujo ayudan a:

- entender mejor un algoritmo
- visualizar la lógica de un programa
- identificar entradas, procesos y salidas
- representar decisiones dentro de un proceso

---

## Símbolos más utilizados

Los diagramas de flujo utilizan símbolos estándar para representar diferentes acciones.

| Símbolo | Significado |
|--------|-------------|
| Óvalo | Inicio / Fin |
| Rectángulo | Proceso |
| Paralelogramo | Entrada / Salida |
| Rombo | Decisión |

Cada símbolo representa un tipo de paso dentro del algoritmo.

---

## Ejemplo simple

Observa el siguiente algoritmo representado como pasos:

```text
INICIO

Leer número

resultado ← número * 2

Mostrar resultado

FIN
```

Este algoritmo realiza lo siguiente:

1. inicia el programa  
2. pide un número al usuario  
3. multiplica ese número por 2  
4. muestra el resultado  

---

## Ejercicio guiado: crear un diagrama de flujo

En este ejercicio vas a construir un diagrama de flujo para el siguiente problema.

### Problema

Crear un algoritmo que:

- pida un número
- multiplique ese número por 2
- muestre el resultado

---

## Paso 1. Inicio y fin

Todo diagrama de flujo debe comenzar con **INICIO** y terminar con **FIN**.

```text
INICIO
...
FIN
```

---

## Paso 2. Entrada de datos

El algoritmo necesita **recibir un número**.

Esto se representa con una **entrada de datos**.

```text
Leer número
```

---

## Paso 3. Proceso

Después de recibir el número se realiza una operación.

```text
resultado ← número * 2
```

Esto corresponde a un **proceso**.

---

## Paso 4. Salida de datos

Finalmente el algoritmo debe mostrar el resultado.

```text
Mostrar resultado
```

---

## Orden del algoritmo

Si unimos todos los pasos el algoritmo queda así:

```text
INICIO
↓
Leer número
↓
resultado ← número * 2
↓
Mostrar resultado
↓
FIN
```

---

[[EJERCICIO:diagrama_guiado_1]]

---

## Identificar símbolos

Cada paso de un algoritmo corresponde a un símbolo del diagrama de flujo.

Ejemplo:

| Acción | Tipo |
|------|------|
| INICIO | Inicio |
| Leer número | Entrada |
| resultado ← número * 2 | Proceso |
| Mostrar resultado | Salida |
| FIN | Fin |

---

[[EJERCICIO:diagrama_guiado_2]]

---

## Diagramas con decisiones

Algunos algoritmos necesitan **tomar decisiones**.

Por ejemplo:

- leer un número
- verificar si es mayor que 10
- mostrar un mensaje diferente según el resultado

En pseudocódigo sería:

```text
INICIO

Leer número

Si número > 10 Entonces
    Mostrar "Es mayor que 10"
SiNo
    Mostrar "Es menor o igual que 10"
FinSi

FIN
```

En un diagrama de flujo, esta condición se representa con un **rombo**.

---

## Flujo de la decisión

El flujo sería:

```text
INICIO
↓
Leer número
↓
¿número > 10?
↙           ↘
Sí           No
↓             ↓
Mostrar       Mostrar
"Es mayor"    "Es menor o igual"
↘           ↙
FIN
```

---

[[EJERCICIO:diagrama_guiado_3]]

---

## Reflexión

Si comprendiste esta sección, ahora sabes:

- qué es un diagrama de flujo
- cuáles son los símbolos principales
- cómo representar un algoritmo con diagramas
- cómo identificar entrada, proceso, salida y decisión
