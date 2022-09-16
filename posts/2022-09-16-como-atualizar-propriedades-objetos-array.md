---
date: 2022-09-16 12:57:23
title: Como atualizar as propriedades de um objeto em um array usando javascript
description: Um pouco sobre manipulação de objetos em arrays
category: JS
background: '#EFD81D'
---

# Por que isso é importante?

Muitas vezes, nós desenvolvedores, somos postos à prova quando há a necessidade de se atualizar uma propriedade de um objeto em um array.
Pode parecer algo simples, mas para quem é júnior, ou mesmo iniciante na linguagem javascript, pode perder um tempinho.
Por isso, vou trazer aqui, um pequeno manual, mostrando como é possível fazer isso, de maneira simples! ✌🏾

Vamos lá então?

Para atualizar o objeto dentro de um array, vamos utilizar o método [map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map). Este método itera sobre os elementos de um array e garante que o arrat original não será alterado.

Não sabe como usar o método? Clique no link e veja como o mesmo funciona.

Também iremos usar o [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax), que em tradução, significa "**operador que espalha**". Para quem não tem tanta familiaridade com ele, vou esplicar de maneira bem simples.

Bora pra cima?

- **Objetivo**: Atualizar a propriedade `name` de valor `Chaves`, para o valor `Kiko`

```javascript
// index.js

const character = {
  id: 1,
  name: 'Chaves',
  address: 'Vila - Número 8',
};

const newCharacter = {
  ...character,
  name: 'Kiko',
};
```

O que foi feito acima?

- Declaramos uma nova variável que vai armazenar o novo personagem (`newCharacter`);
- Usamos o *`spread`* e é como se ele nos dissesse isso:
  > "Vou retornar todas as propriedades do objeto `character`,
  > mas vou atualizar a propriedade que você me passou, que no caso é a `name`"


## Atualizando propriedades de vários objetos no array

A lógica que vamos usar, será a seguinte: em cada interação, vamos verificar se o objeto atual é o que desejamos atualizar. Se sim, modificaremos o objeto e retornaremos o resultado, caso contrário o array original será retornado.

Dá para testar no seu browser ou num editor de código de sua preferência. Sinta-se à vontade para testar onde for melhor para você.

- **Objetivo**: Atualizar o nome do personagem de `id` igual a `1` para `Dona Florinda`

```javascript
// index.js

const characters = [
  { id: 1, name: 'Chaves' },
  { id: 1, name: 'Seu Madruga' },
  { id: 3, name: 'Chiquinha' },
  { id: 4, name: 'Kiko' },
];

const newCharacters = characters.map((character) => {
  if (character.id === 1) {
    return { ...character, name: 'Dona Florinda' };
  }
  return character;
});

console.log(newCharacters);
/*
  [
    {
      id: 1,
      name: "Dona Florinda"
    },
    {
      id: 1,
      name: "Dona Florinda"
    },
    {
      id: 3,
      name: "Chiquinha"
    },
    {
      id: 4,
      name: "Kiko"
    }
]
*/
```

> Isso é bastante útil quando desejamos atualizar propriedades de múltiplos objetos,
> caso satisfaçam determinada condição.

## Atualizando uma propriedade de um único objeto no array

Para isso, vamos utilizar um laço [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of). Neste caso, o array original será **modificado** 👈🏾 e vamos atualizar só a primeira ocorrência, utilizando o `break`.

```javascript
// index.js

const characters = [
  { id: 1, name: 'Chaves' },
  { id: 1, name: 'Seu Madruga' },
  { id: 3, name: 'Chiquinha' },
  { id: 4, name: 'Kiko' },
];

for (const character of characters) {
  if (character.id === 1) {
    character.name = 'Dona Florinda';
    break;
  }
}

console.log(characters);
/*
  [
    {
      id: 1,
      name: "Dona Florinda"
    },
    {
      id: 1,
      name: "Seu Madruga"
    },
    {
      id: 3,
      name: "Chiquinha"
    },
    {
      id: 4,
      name: "Kiko"
    }
]
*/
```

Então, mesmo que tenhamos dois objetos com `id` iguais, apenas a primeira ocorrência será atualizada.

É isso, espero que tenham gostado. Qualquer dúvida ou sugestão, comentem abaixo!

Um abração! ✌🏾