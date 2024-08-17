<h1>Criptografia</h1>


_Aplicação pra criptografia e descriptografa palavras texto, frases usando typescript _  

 ### Dependências:
- npm init -y  
- npm install express  
- npm install @types/express --save-dev  
- npm install typescript ts-node @types/node --save-dev  
- npx tsc --init  

### /encrypt
Passe os código keyHex e ivHex para pode criptografa mensagem, o retorno é a mensagem criptografada


```http
POST /encrypt
Content-Type: application/json

{
  "texto": "texto de exemplo",
  "keyHex": "e5390c5e1f1102d691a8553593d5a5f50a189e32d251c3e2d540ba5e62ffc9ad",
  "ivHex": "a5927e3636534538a195a69e92aabe9c"
} 
return: d07bbd79419c9317d6ddb499742eb89e71fb09731b08c70f7348b3d8aa1cbd139d9a941e6dc1873a5b204c83c1a3682a


```




### /decrypt
Passe os código keyHex e ivHex para pode criptografa mensagem, o retorno é a mensagem descriptografada
```http
POST /decrypt
Content-Type: application/json

{
  "texto_criptografado": "d07bbd79419c9317d6ddb499742eb89e71fb09731b08c70f7348b3d8aa1cbd139d9a941e6dc1873a5b204c83c1a3682a",
  "keyHex": "e5390c5e1f1102d691a8553593d5a5f50a189e32d251c3e2d540ba5e62ffc9ad",
  "ivHex": "a5927e3636534538a195a69e92aabe9c"
} 
return: texto de exemplo


```

Para usar esse código é necessario compilar para node js usando ```npx tsc``` , si for para testes também é possivel usar instalando as dependência de desenvolvimento:
- npm i -D ts-node-dev
- npm i -D ts-node 




