---
title: Destructuring com Javascript
description: 'Aprenda a sintaxe para lidar com objetos e arrays em Javascript'
date: '2022-10-06 18:42:23'
category: JS
background: '#EFD81D'
---

## Destructuring com Javascript

### O que é `destructuring`?

`Destructuring`, ou `destructuring assignment`, é um recurso do Javascript que facilita a extração de dados de `arrays` e `objetos` e foi introduzido na versão ES6.

O `destructuring` é o que chamamos `açúcar sintático`, o que significa que é uma maneira mais fácil de escrever certas expressões, comumente sendo mais curta e clara que outras formas. Mesmo que você não use, você provavelmente verá no código de alguém, por isso é valioso entender.

### Desestruturando `Arrays`

Estruturas de dados, como `arrays` e `objetos` podem ser bastatne úteis para armazenar grandes quantidades de dados. O processo de converter elementos "soltos" em uma variável única de `array` pode ser um pouquinho chato. 😂 Veja o exemplo:

```javascript
  const characters = ['chaves', 'kiko', 'chiquinha'];
```

Se a gente precisar acessar esses personagens individualmente armazenando-os em variáveis, nós poderíamos fazer algo assim:

```javascript
  const characters = ['chaves', 'kiko', 'chiquinha'];
  const character1 = characters[0];
  const character2 = characters[1];
  const character3 = characters[2];
  console.log(character1, character2, character3); // Será mostrado: chaves kiko chiquinha
```

Mas, nós podemos deixar isso mais simples com o `destructuring`.

```javascript
  const characters = ['chaves', 'kiko', 'chiquinha'];
  const [character1, character2, character3] = characters;
  console.log(character1, character2, character3); // Será mostrado: chaves kiko chiquinha
```

### Desestruturando `objetos`

Nós também podemos desestruturar obejtos. Vamos ver um exemplo básico na qual nós podemos capturar propriedades de objetos e armazená-las em constantes.

```javascript
  const destinations = { x: 'RJ', y: 'SP', z: 'BH' };
  const x = destinations.x;
  const y = destinations.y;
  const z = destinations.z;
  console.log(x, y, z); // Será mostrado: RJ SP BH
```

Com o `destructuring` nós podemos acessar os valores de um objeto apenas colocando os nomes das propriedades do objeto na constante. Ficou confuso? Veja o exemplo que vai ajudar bastante.

```javascript
  const destinations = { x: 'RJ', y: 'SP', z: 'BH' };
  const { x, y, z } = destinations;
  console.log(x, y, z); // Será mostrado: RJ SP BH
```

Com isso, nós somos capazes de criar novas variáveis diretamente das propriedades do objeto. No nosso caso, nós pegamos os valores de `destination.x`, `destination.y`, and `destination.z` e as armazenamos nas variáveis `x`, `y`, `z` respectivamente.

## Bônus

### Desestruturando parâmetros de funções

Argumentos de funções é outro lugar onde podemos usar o `destructuring`. Ao invés de aceitarmos um objeto completo como um argumento, podemos usar a desestruturação para capturar propriedades específicas como parâmetros nomeados. Vamos ver o exemplo abaixo:

```javascript
  const personData = {
    name: 'João',
    lastName: 'de Tal',
    age: 35,
    city: 'Sacramento',
    bloodDonator: true,
  }

  const printUserData = ({ name, lastName, age }) => {
    console.log(`O usuário ${name} ${lastName} tem ${age} anos.`);
  };

  printUserData(personData);
  // É mostrado: O usuário João de Tal tem 35 anos.
```

A função `printUserData` usa a desestruturação de objetos para criar três variáveis que são parâmetros: `name`, `lastName` e `age`. Quando a função é invocada com o objeto `personData`, os parâmetros são colocados nos valores correspondentes.

Note que nós não utilizamos todas as propriedades do objeto. Nós apenas criamos variáveis parâmetros para os valores que precisávamos.

### Conclusão

A desestruturação é uma maneira de descompactar valores de `arrays` e `objetos` e atribuí-los a variáveis ou parâmetros. Há coisas ainda mais legais que você pode fazer com a desestruturação: renomear variáveis, atribuir valores padrão, ignorar valores, etc.

Qualquer dúvida, verifique a documentação do MDN! Boa Codificação!