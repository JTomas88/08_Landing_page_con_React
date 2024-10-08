import React from "react";
import "../../styles/cards.css";

const Cards = ({ tituloFoto, textoFoto, imagen, enlace }) => {
    return (
        <div className="col-md-3 mb-4">
            <div className="card">
                <div className="img-container">
                    <img src={imagen} className="card-img-top imagen" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title tituloTarjeta">{tituloFoto}</h5>
                    <p className="card-text textoTarjeta">{textoFoto}</p>
                </div>
                <div className="card-footer d-flex justify-content-center">
                    <a href={enlace} className="btn btn-primary btn-lg btn-block w-auto">Saber más</a>
                </div>
            </div>
        </div>
    );
};

export default Cards;