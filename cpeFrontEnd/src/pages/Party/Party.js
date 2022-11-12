import React from "react";
import "./Party.css";
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
 
function Party() {
    return (
        <div>
            <Header />
            <div className="festaContainer">
                <div className="festaMain">
                    <h1>A Festa</h1>
                    <div className="eventButtons">
                        <button type="button">Estrutura Física</button>
                        <p></p>
                        <button type="button">2022</button>
                        <p></p>
                        <button type="button">Culinária</button>
                    </div>
 
                </div>
                <div className="imgPolentao">
                <img src="/images/polentao.png" alt="Login icon" width="700" height="500">
                </img>
                </div>
            </div>
        <div className="EstruturasFisicas">
            <div className="estruturasMain">
                <h1>EstruturasFísicas</h1>
            </div>
            <div className="cozinhaBox">
                <img src= "/images/cozinha.png" alt="cozinha icon" width="400" height="300">
                </img>
                <div className="textocozinha">
                    <h2>Cozinha: onde bate o coração da festa</h2>
                    <p>Desde a primeira Festa da Polenta, em 1979, a cozinha vem evoluindo, com aquisições de utensílios e aprimoramento na sua organização e no treino dos voluntários, cada vez mais capacitados para produzir com qualidade e em quantidade. 
 
Num trabalho que começa na quinta-feira que antecede a Festa e só termina na segunda-feira, quando todos os utensílios estão limpos e guardados, a equipe da cozinha produz macarrão, molho, carne de frango frita, e o prato típico.
 
Em 2011, o prato típico passou para bandejas fechadas, mais higiênicas e céleres no preparo e transporte, fator que otimizou o trabalho na cozinha.
</p>             
                </div>
            </div>    
            <div className="tomboBox">
                <img src="/images/tombo.png" alt="tombo icon" width="400" height="300"> 
                </img>
                <div className="texttombo">
                    <h2>O Tombo da Polenta</h2>
                    <p>O 'Tombo da Polenta Gigante', foi um alívio para a cozinha, pois são preparados mais de 1.200 quilos de polenta por vez, abastecendo a cozinha na versão mole e dura para fritar. O tombo da polenta, já foi para o Guinness Book de 2008, e é um ponto atrativo da Festa. Foi criado a partir da ideia do Presidente Tarcísio José Caliman
</p>
                </div>
            </div>
            <div className="paiolBox">
                <img src="/images/paiol.png" alt="paiol icon"width="400" height="300"> 
                </img>
                <div className="textopaiol">
                    <h2>Paiol do Nonno</h2>
                    <p>Desde 2016 a Casa do Vinho está entre as novidades oferecidas ao público da Festa da Polenta.  O espaço oferece uma carta de vinho bem completa, com diversas opções de uvas como cabernet, primitivo, syrat e carmeneres.</p>
                </div>
            </div>
            <div className="historiasBox">
                <img src="/images/casa da nonna.png" alt="casa icon" width="400" height="300"> 
                </img>
                <div className="textohistorias">
                    <h2>Casa da Nonna: Histórias, bordados e quitudes</h2>
                    <p>O Paiol do “Nonno” recria o passado ao reproduzir no ambiente da Festa da Polenta um pouco do dia a dia da vida rural, em especial a rotina dos homens trabalhando na roça e no entorno da casa da família.  Além de utensílios, ferramentas e diversas peças antigas, o espaço oferece delícias da culinária típica, como torresmo, caldo de cana e diversas porções.
 
Ferramentas como machado, “grupião”, foice e cangalha faziam parte da rotina de antigamente e hoje adornam e contam um pouco da história do lugar. Expostas no Paiol do “Nonno”, essas e outras ferramentas encantam pela funcionalidade.
</p>
                </div>
            </div>
        </div>  
        <div className="BoxEvento">
            <div className="Evento">
                <h2>2022</h2>
            </div>
            <img src="/images/2022.png" alt="2022 icon"> 
            </img>
        </div>
        <div className="culinariaBox">
            <h2>Culinária</h2>
            <div className="culinariaDivisoes">
                <div className="alimentoBox">
                    <h3>Polenta</h3>
                    <img src="/images/polenta frita.png" alt="polenta icon" width="300" height="300"> 
                    </img>
                    <h6>A polenta é o principal prato típico da Festa, seja frita, com molho, com ovo, com queijo, com linguiça e outras formas de se apreciar a saborosa iguaria, feita em fogões à lenha com cozimento lento para não queimar e dar paladar</h6>
                </div>
                <div className="alimentoBox">
                    <h3>Macarrão</h3>
                    <img src="/images/macarrao.png" alt="macarrao icon" width="300" height="300"> 
                    </img>
                    <h6>Também se aprecia um bom macarrão, cozido “al dente” e temperado de forma artesanal, nas versões molho de carne e queijo parmesão e ao "fungui".</h6>
                </div>
                <div className="alimentoBox">
                    <h3>Linguiça</h3>
                    <img src="/images/linguiça.png" alt="linguiça icon" width="300" height="300"> 
                    </img>
                    <h6>A linguiça suína é preparada do mesmo modo que nossos "Nonnos" nos ensinaram, bem como o frango frito que é temperado com muito carinho</h6>
                </div>
                <div className="alimentoBox">                 
                    <h3>Capelleti</h3>
                    <img src="/images/capelleti.png" alt="capelleti icon" width="300" height="300"> 
                    </img>
                    <h6>O capeletti, ou agnoline é uma iguaria fina que revigora as forças após uma jornada de boa festa.
Temos diversas outras porções que agregam sabor ao paladar dos visitantes como um bom queijo, molhos, frango e outros quitutes encontrados no paiol do “Nonno” e na casa da “Nonna", tais como o "socol" e pães caseiros.</h6>
                </div>
            </div> 
        </div>
        <Footer/>
        </div>
 
    )
};
 
export default Party;