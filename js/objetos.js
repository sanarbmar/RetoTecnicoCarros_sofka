class carro {
    constructor(id,nombreJugador, carril, DistanciaRecorrida, tall) {
        this._id = id;
        this._nombreJugador = nombreJugador;
        this._carril = carril;
        this._DistanciaRecorrida = DistanciaRecorrida;
    }
    set fullName (value){
        this._nombreJugador = value;
    }
    correr();
    rollDice();
}