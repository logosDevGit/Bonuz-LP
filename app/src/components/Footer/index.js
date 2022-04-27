import { ReactComponent as LogoWhite} from "../../assets/images/logoWhite.svg"
import "./styles.css"
import {FaInstagram, FaFacebookF, FaLinkedinIn} from "react-icons/fa"

const Footer = () => {

    return(
        <footer>
            <LogoWhite/>
            <div className="icons">
                <a><FaInstagram/></a>
                <a className="mx-3"><FaFacebookF/></a>
                <a><FaLinkedinIn/></a>
            </div>
            <div>
                <p>© Copyright 2021 Bonuz IT - All Rights Reserved</p>
                <p style={{color: "var(--bonuz-red)"}}>Termos de Serviços | Política de Privacidade</p>
                <p>contato@bonuz.it | +55 11 986820121</p>
                <p>Rua Estados Unidos 1140, São Paulo, São Paulo 01427-001, BR Bonuz do Brasil Assessoria Empresarial Ltda. •</p>
                <p>CNPJ 36.454.710/0001-39</p>
            </div>
        </footer>
    )
}

export default Footer;