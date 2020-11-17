Durante o curso utilizamos o Babel, um móduto do Node.js para converter nosso código de ES6 para ES5, 
permitindo que nosso código tenha mais compatibilidade com navegadores antigos.

***** INSTRUÇÕES PARA INSTALAR *****

- Abra o CMD e entre na pasta client.
- Execute o comando na pasta client 

"npm init"

 para criar o arquivo package.json, que é o arquivo responsável por armazenar 
informações de todos os módulos utilizados no programa. Preencha os dados pedidos, se quiser, ou pressione 
enter até acabar as perguntas. É possível editar o arquivo diretamente após cria-lo.
- Execute o comando na pasta client 

"npm install babel-cli@6.10.1 --save-dev". O "@6.10.1"

 é a versão, durante o curso o 
professor incentivou que fosse utilizada esta versão. O "--save-dev" serve para que além de instalar, já 
preencher o arquivo package.json com as informações desse módulo. Os módulos do node estarão na pasta node_modules.
- Execute o comando na pasta client 

"npm install babel-preset-es2015@6.9.0 --save-dev"

, este módulo é o responsável
por fazer a compilação do nosso código ES6 para ES5.
- Agora é necessário fazer a ligação entre os dois módulos, na pasta client crie o arquivo ".babelrc" sem 
nome mesmo, somente a extensão, e preencha com: 

    {
        "presets" : ["es2015"]
    }

- Com nossas modificações feitas, é necessário modificar o arquivo package.json para utilizar o módulo que irá
fazer a compilação do ES6 para o ES5. Mude o nome da sua pasta "app" para "app-es6" e crie uma pasta "app" vazia.
- no arquivo package.json edite a parte de script que estará assim:

    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },

para:

    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "babel js/app-es6 -d js/app --source-maps"
    },

e não esqueça da vírgula no fim de "test":..., antes de colocar o "build". 

- O --source-maps serve para que vc utilize na produção o código ES5 mas caso tenha algum problema ele
mostra o erro no ES6.
-Com tudo configurado, abra o CMD e execute o comando na pasta client 

"npm run build"

 Ele já irá fazer 
toda a compilação do ES6 para o ES5.

- Já temos tudo configurado direitinho, porém toda alteração que fizermos precisamos executar o npm run build.
Isso é péssimo quando estamos desenvolvendo. Para isso, podemos usar a função "watch" do babel. Modifique o 
arquivo package.json na parte de scripts para:

    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "babel js/app-es6 -d js/app --source-maps",
        "watch": "babel js/app-es6 -d js/app --source-maps --watch"
    },

Execute o comando 

"npm run watch"

 no CMD, e enquanto estiver executando ele fará a compilação de ES6 para ES5
toda vez que for modificado algo do arquivo ES6.

------------- TRABALHANDO COM MÓDULOS DE IMPORTAÇÃO -------------

Para evitar que utilizemos bibliotecas externas e tenhamos erros por ter classes com os mesmos nomes que as
nossas, e também para evitar que fiquemos importando os arquivos JS pelo HTML na ordem correta, vamos usar
uma biblioteca muito famosa de loader chamada System JS. Para instalar no projeto, vá para a pasta 'client'
e execute o comando 

'npm install systemjs@0.19.31 --save'

(A diferença entre '--save-dev' e '--save' é que 
os módulos que irão para produção devem ser importados como --save, e os que iremos usar apenas para 
desenvolvimento, importamos como --save-dev)

Além disso, para que o transpiller continue funcionando, precisamos importar um plugin que transforma o 
código ES2015 (ES6) para usar o SystemJS. Execute o comando na pasta client 

'npm install babel-plugin-transform-es2015-modules-systemjs@6.9.0 --save-dev'

Agora edite o arquivo de configuração ".babelrc" para:

{
   "presets" : ["es2015"],
   "plugins" : ["transform-es2015-modules-systemjs"]
}

e execute a compilação

'npm run build'.