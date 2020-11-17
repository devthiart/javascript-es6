"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, ListaNegociacoesOLD;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            ListaNegociacoesOLD = function () {

                //constructor(contexto, armadilha) {
                function ListaNegociacoesOLD(armadilha) {
                    _classCallCheck(this, ListaNegociacoesOLD);

                    this._negociacoes = [];
                    this._armadilha = armadilha;
                    //this._contexto = contexto;
                }

                _createClass(ListaNegociacoesOLD, [{
                    key: "adiciona",
                    value: function adiciona(negociacao) {
                        this._negociacoes.push(negociacao);
                        //Este método não funciona, pois ele executa a função com o "this(ListaNegociacoes)", 
                        //mas eu preciso q ele execute com o "this(NegociacaoController)".
                        //this._armadilha(this);
                        //Portanto utilizamos a função "Reflect.apply" para que ele aplique o "this" correto.
                        //A função recebe "função que eu quero executar", "o this correto", "os parametros da função em forma de array".
                        //Reflect.apply(this._armadilha, this._contexto, [this]);
                        //******************************************** */
                        //Para evitar tudo isso, passamos a função para o construtor como uma arrow function, pois
                        //a arrow function mantém o "this" original da função.
                        this._armadilha(this);
                    }
                }, {
                    key: "esvazia",
                    value: function esvazia() {
                        this._negociacoes = [];
                        //Este método não funciona, pois ele executa a função com o "this(ListaNegociacoes)", 
                        //mas eu preciso q ele execute com o "this(NegociacaoController)".
                        //this._armadilha(this);
                        //Portanto utilizamos a função "Reflect.apply" para que ele aplique o "this" correto.
                        //A função recebe "função que eu quero executar", "o this correto", "os parametros da função em forma de array".
                        //Reflect.apply(this._armadilha, this._contexto, [this]);
                        //******************************************** */
                        //Para evitar tudo isso, passamos a função para o construtor como uma arrow function, pois
                        //a arrow function mantém o "this" original da função.
                        this._armadilha(this);
                    }
                }, {
                    key: "negociacoes",
                    get: function get() {
                        //Cria um novo array e preenche ele com os dados do nosso array.
                        //Isso evita que seja feita alterações na nossa variável original.
                        return [].concat(this._negociacoes);
                    }
                }]);

                return ListaNegociacoesOLD;
            }();
        }
    };
});
//# sourceMappingURL=ListaNegociacoesOLD.js.map