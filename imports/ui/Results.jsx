import React, {Component} from "react";

class Results extends Component {
    constructor(props) {
        super(props);

    }

    copy() {
        /* Get the text field */
        var copyText = document.getElementById("oldParameters");

        /* Select the text field */
        copyText.select();

        /* Copy the text inside the text field */
        document.execCommand("copy");

        /* Alert */
        alert("Los parámetros fueron copiados al portapapeles");
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="card">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card-header">
                                <h4 className="card-title">Resultados</h4>
                                <p className="card-category">Ingrese los resultados del modelo de Xpress! Pegue los
                                    resultados de Xpress y luego diríjase al tablero de control.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <textarea className="results" ref="results" onChange={() => {
                                this.props.handleChange(this.refs.results.value)
                            }}>
                        </textarea>
                            <hr/>
                            <div className="row">
                                <div className="col-md-8">
                                    <p className="card-category text-results">Resultados del mes anterior</p>
                                </div>
                                <div className="col-md-4">
                                    <button className="btn btn-info btn-fill pull-right btn-copy"
                                            onClick={this.copy.bind(this)}>Copiar texto <i
                                        className="fa fa-clipboard"></i></button>
                                </div>
                            </div>
                            <textarea className="results gray-text" id="oldParameters" readOnly
                                      defaultValue="Proyecto1,1,1,0,Proyecto2,7,7,0,Proyecto3,1,30,1,Proyecto4,1,30,1#TC 196 ARBLB03321 BRANCH LG,0,TC 344 ARBLN01621 BRANCH LG,0,TC 539 ARCNN21 BRANCH LG,0,TC 1524 ARBLN23220 BRANCH,0,TC 2825 PQRCVSLOQW CONTROL ALAMBRICO,0,TC 345 PQRCVSLOQW CONTROL ALAMBRICO SENCILLO,0,TC 4223 PQWRCDFO CONTROL INALAMBRICO LG,0,TC 540 PQWRCQ0FDB CONTROL INALAMBRICO,0,TC 3765 MXJ-YA4119M-Y-Joint Unidad Interior para capacidades entre 336KBtu - 461KBtu,0,TC 2890 MXJ-YA2512M-Y-Joint (Accesorios Cobre ConexiÃ³n Samsung),2,TC 3766 MXJ-YA2812M-Y-Joint Unidad Interior para capacidades entre 136KBtu - 154KBtu,0,TC 3836 MXJ-YA4422M -Y-Joint Unidad Interior para capacidades mayores a 461Kbtu,0,TC 1120 MXJ-TA3819M Y-JOINT,2,TC 747 ARNU07GBHA2  FANCOIL DUCTO,0,TC 2677 ARNU12GBHA4,0,TC 2135 ARNU07GB1G2,0,TC 2633 ARNU09GL1G4,0,TC 907 ARNU42GTMC2,0,TC 339 PT-UMC1 TMAGF33132503 PANEL FRONTAL LG,0,TC 2740 PT-UQC.ENCXLEU TAPA (PANEL) CASETTE LG,0,TC 4220 EBR 77384109 TARJETA LG,1,TC 2840 EBR 34163501 TARJETA,12,TC 1747 EBR 39319514 TARJETA PCB,0,TC 4244 EBR 72059603 TARJETA LG,0,TC 3641 EBR 39187715 TARJETA LG,0,TC 3216 EBR 57726702 TARJETA LG,0,TC 3213 EBR 57726703 TARJETA LG,0,TC 3215 EBR 79266813 TARJETA LG,0,TC 3219 EBR 57705302 TARJETA LG,0,TC 3214 EBR 57726701 TARJETA LG,0#0,67,1,83,2,83,3,83,4,83,5,83,6,83,7,83,8,83,9,84,10,84,11,84,12,84,13,84,14,84,15,84,16,84,17,84,18,84,19,84,20,84,21,84,22,84,23,84,24,84,25,84,26,84,27,84,28,84,29,84,30,84">
                        </textarea>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Results;