const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

/*

Observe a string abaixo.

```jsx
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
```

A partir dela, execute os passos abaixo:

a) Remova o excesso de espaços no final da string;

b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;

c) Substitua os traços `________` por “sticioso”.
*/

console.log("Quantidade de caracteres antes de remover espaços",minhaString.length)
console.log("Quantidade de caracteres depois de remover espaços",minhaString.trim().length)
console.log(minhaString.replace("________","sticioso"))

