import {ReactComponent as InOff} from "../../../../assets/images/contactComp.svg"
import './styles.css'
import {Col, Input, Form, FormGroup, Row, Button} from "reactstrap"

const Contact = () => {

const UR = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
    'DF',
];

    return(
        <div className="contact wd-cont">
            <div className="component">
                <Form className="card">
                    <h3>Entre em contato</h3>
                    <p>Estamos prontos para te atender da melhor forma possível.</p>
                    <FormGroup>
                        <Input type="text" name="name" placeholder="Nome"/>
                    </FormGroup>
                    <FormGroup>
                        <Input type="text" name="email" placeholder="E-mail"/>
                    </FormGroup>
                    <FormGroup>
                        <Input type="text" name="phone" placeholder="Telefone"/>
                    </FormGroup>
                    <Row>
                        <Col xs="4">
                            <FormGroup>
                                <Input type="select" name="UR" placeholder="Estado">
                                    <option value="">UR</option>
                                    {UR.map(option => {
                                        return <option key={option} value={option}>{option}</option>
                                    })}
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col xs="8">
                            <FormGroup>
                                <Input type="city" placeholder="Cidade"/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Input
                        name="message"
                        placeholder="Mensagem"
                        type="textarea"
                        />
                    </FormGroup>
                    <Button className="btn-yellow">Enviar</Button>
                </Form>
                <div className="in-off"><InOff/></div>
            </div>
        </div>
    )
}

export default Contact