import {Col, Input, Form, FormGroup, Row, Button, Alert} from "reactstrap"
import { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom"

import './styles.css'
import {ReactComponent as InOff} from "../../../../assets/images/contactComp.svg"

const Contact = (props) => {
    let [searchParams, setSearchParams] = useSearchParams();
    let success = searchParams.get('success')

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [UR, setUR] = useState()
    const [city, setCity] = useState()
    const [message, setMessage] = useState()

    const URs = [
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

    useEffect(() => {
        if(success) {
            alert('email enviado com sucesso!')
            window.location.href = '/'
        }
    },[success])

    return(
        <div className="contact wd-cont">
            <div className="component">
                <Form className="card" method="post" action="https://www.bonuz.it/hubs-bonuz/mailer/index.php">
                    <h3>Entre em contato</h3>
                    <p>Estamos prontos para te atender da melhor forma possível.</p>
                    <FormGroup>
                        <Input
                            name="name"
                            placeholder="Nome"
                            value={name}
                            type='text'
                            onChange={e => setName(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input 
                            type="text" 
                            name="email" 
                            placeholder="E-mail" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input 
                            type="text" 
                            name="phone" 
                            placeholder="Telefone" 
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        />
                    </FormGroup>
                    <Row>
                        <Col xs="4">
                            <FormGroup>
                                <Input 
                                    type="select" 
                                    name="UR" 
                                    placeholder="Estado" 
                                    onChange={e => setUR(e.target.value)}
                                >
                                    <option value="">UR</option>
                                    {URs.map(option => {
                                        return <option key={option} value={option}>{option}</option>
                                    })}
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col xs="8">
                            <FormGroup>
                                <Input 
                                    type="city" 
                                    value={city} 
                                    placeholder="Cidade" 
                                    name="city"
                                    onChange={e => setCity(e.target.value)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Input
                            name="message"
                            placeholder="Mensagem"
                            type="textarea"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
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