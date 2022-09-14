import React, { Fragment } from "react";

const img = "/img/promise1.png"
const img1 = "/img/promise23.png"
const img2 = "/img/asyncFun.png"
const img3 = "/img/async3.png"
const img4 = "/img/then.png"
const img5 ="/img/await.png"
const img6 = "/img/catch.png"
const img7 = "/img/react.png"
const Text = () => {
  return (
    <Fragment>
      <div>
        <header className="bg-neutral-800 px-6 py-6">
          <h1 className="text-neutral-200 p-12 text-center text-2xl font-mono">
            Você sabe realmente como funciona essa linguagem?
          </h1>
          <div className="text-center font-mono text-neutral-400">
            <h2>
              Primeiramente devemos saber que e uma das principais linguagens do
              mercado Web indo de mostrar itens estáticos ate mesmo atualizados
              dinamicamente com um clique,sendo o terceiro nível da camada da
              programação WEB.
            </h2>
            <div className="flex justify-center p-4">
              <img
                className="content-end"
                src="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript/cake.png"
              ></img>
            </div>
            <h2>
              É uma linguagem multiparadigma (programação funcional e
              imperativa), versátil, com tipagem dinâmica (não é necessário
              definir os tipos das variáveis ao declará-las), sintaxe acessível,
              e recursos avançados como orientação a objetos e APIs para
              trabalhar com textos, matrizes, datas e expressões regulares.
              Atualmente, segue as especificações ECMAScript, que visam garantir
              o suporte e o funcionamento da linguagem entre os diferentes
              navegadores.
            </h2>
            <h1 className="text-neutral-200 p-5 text-center text-2xl font-mono ">
              O seu destaque atual no mercado FRAMEWORKS
            </h1>
            <h2>
              O seu grande atrativo no decorrer dos anos que vem enchendo olhos
              de futuros profissionais,sao os frameworks.Mas afinal o que e um
              framework?Em uma busca rápida na web, é possível encontrar
              diversas definições para Framework,mas o ponto comum entre todas é
              a reusabilidade,ou seja basicamente um framework pode ser um
              conjunto de bibliotecas feitas para facilitar o desenvolvimento
              dos desenvolvedores.Um exemplo e esse proprio site,desenvolvido a
              partir do React uma dos principais frameworks do mercado
              juntamente com TailWind um framework de estilizacao e
              responsividade de CSS.
            </h2>
          <div className="p-10 ">
            <div className="w-50 h-20 flex justify-center ">
              <img href="https://pt-br.reactjs.org/docs/getting-started.html" src="https://www.upinside.com.br/uploads/courses/2020/11/laravel-developer-1604669669.png" />
              <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1567347485657/HzTBo-04f.png" />
              <img src="https://blog.fellyph.com.br/wp-content/uploads/2016/06/react-js.png" />
              <div>
                </div>
               </div>
               <h2 className="p-6">Exemplos de Bibliotecas Utilizadas</h2>
            </div>
            <h1 className="text-neutral-200 p-3 text-center text-2xl font-mono">
              Programação Assíncronas
            </h1>
            <h2>
              Antes de entrar em Async Functions,devemos entender o que são
              promises.As Promises são classes que são utilizadas pela maioria
              das bibliotecas de requisições HTTP atualmente como Axios, jQuery,
              API Fetch, entre ounpmnpm stras.A Promise é facilmente identificada por
              códigos que utilizam o .then para callback de sucesso e .catch
              para erros. Vamos ver como criar uma situação de uma Promise:
            </h2>
            <div className="flex justify-center p-10">
            <div class=" max-w-sm rounded overflow-hidden shadow-lg">
              <img
                class="w-full "
                src="https://www.freecodecamp.org/portuguese/news/content/images/2022/06/Ekran-Resmi-2020-06-06-12.21.27.png"
                alt="Sunset in the mountains"
              />
              <div class="px-2 py-3">
                <div class="font-bold text-xl mb-2">
                  O resolve é chamado quando temos uma resposta de sucesso
                  ativando o .then, e o reject é chamado quando temos um erro
                  disparando o .catch.
                </div>
                <p class="text-gray-500 text-base">
                  No exemplo acima estou criando uma função que recebe dois
                  parâmetros, o retorno dessa função é uma nova Promise que
                  sempre recebe como parâmetro uma função com dois parâmetros,
                  resolve e reject
                </p>
                </div>
              </div>
            </div>
            <h1 className="text-neutral-200 p-2 text-center text-2xl font-mono">
              Encadeamento e Promises Simultâneas
            </h1>
            <h2>
              Em alguns casos teremos uma Promise que retorna outra Promise e
              para acessar o resultado dessa segunda iremos precisar encadear as
              chamadas:
              
              é um exemplo no qual retornamos a chamada da segunda Promise
              dentro do .then da primeira, e encadeamos outro .then logo abaixo
              para tratar o resultado da segunda.
            </h2>
            <div className="flex justify-center">
            <img className="scale-50 hover:scale-75" src={img}/>                    
            </div>
            <h2 className="p-3">
              Em alguns casos você necessita aguardar o resultado de múltiplas
              Promises porém nenhuma depende da outra para executar, nesse caso
              você pode utilizar o método Promise.all para aguardar por todas
              elas:
            </h2>
            <h2 className=" text-neutral-100 text-2xl">
            <div className="flex justify-center">

              <img className="scale-50 hover:scale-75" src={img1}/>
              </div>
            </h2>
            <h2>Passamos um vetor de Promises ao método e apenas um .thenrecuperando o valor de cada Promise separadamente utilizando desestruturação de array, nesse caso temos o valor dos dados do usuário e telefones separados.</h2>
            <h1 className="text-neutral-200 text-center text-2xl font-mono p-6">Async Function</h1>
            <h2>
            O async/await é uma nova forma de tratar Promises dentro do nosso código, evitando a criação de cascatas de .then.Porém ainda é utilizado as Promises de uma maneira mais dinâmica.
            </h2>
            <h2>É utilizado o prefixo ASYNC antes de definir uma função para indicar que estamos tratando de um código assíncrono, e com o prefixo adicionado, o await é utilizado antes das Promises indicando um ponto a ser aguardado pelo código.Exemplo a seguir comparando com  :</h2>
            <h2>
              <div className="flex justify-center">
              <img className="scale-50 hover:scale-75" src ={img2}/>
              </div>
          Uma das principais vantagens é que toda função que for definida com async automaticamente se torna uma Promise,assim há possibilidade de anexar funções assíncronas uma às outras dessa forma.
          </h2>
          <div className="flex justify-center">
            <img className="scale-50 hover:scale-75" src={img3}/>
          </div>
          <h1 className="text-neutral-200 p-4 text-center text-2xl font-mono"> Novo .then</h1>
          <h2>Não é preciso mais declarar .then ou .catch e assim algumas Promise não executar antes de utilizarmos seu resultado pois o await faz todo papel de aguardar com que a requisição retorne seu resultado</h2>
          <div className="flex justify-center">
          <img className="scale-50 hover:scale-75" src={img4}/>
          </div>
          <div>
          <h1 className="text-neutral-200 text-center text-2xl font-mono">Novo await</h1>
          <h2> Cada vez que definimos um await estamos indicando para o nosso código aguardar a Promise seguinte executar e retornar um resultado para seguir adiante, dessa forma evitamos que as próximas linhas executem sem as variáveis necessárias.</h2>   
          </div>
          <div className="flex justify-center">
          
          </div>
              <div className="flex justify-center">
              <img className="scale-50 hover:scale-75" src={img5}/>
              </div>           
         
          <div>
          <h1 className="text-neutral-200 text-center text-2xl font-mono p-6" >Novo .catch</h1>
          <h2>Não sendo muito diferente,é utilizado try/catch para assegurar que possiveis erros do codigo e de respostas das Promises não deixem algum rastro.Com um diferencial que é possivel utilizar um unico catch para varias Promises,assim facilitando encontrar possiveis erros podendo indentificar facilmente e solucionar de uma vez só.</h2>   
          </div>
                <div className="flex justify-center">
                  <img className="scale-50 hover:scale-75"src={img6}/>
                </div>
          
          <h1 className="text-neutral-200 p-4 text-center text-2xl font-mono">E onde utilizar?</h1>
                <h2>Para o mais comum dos casos em alta hoje,React tem como sua vez a componentização e através de suas bibliotecas facilita a sua manipulação como exemplo o codigo adicionando async aos métodos de suas classes:</h2>
                <div className="flex justify-center">
                      <img className="scale-50 hover:scale-75" src={img7}/>
                </div>
          </div>    
        </header>
       
      </div>
    </Fragment>
  );
};

export default Text;
