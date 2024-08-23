import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import PageLayout from '../../layouts/PageLayout'
import specifics from '../../assets/data/specifics.json'

export default function ProfessionalViewPage() {
  const professionalData = specifics.find(
    (item) => item.type === 'professional',
  )
  const [value] = useState(professionalData)
  return (
    <PageLayout>
      <div className="mc-card mb-4">
        <div className="mc-breadcrumb">
          <h3 className="mc-breadcrumb-title">review do profissional</h3>
          <ul className="mc-breadcrumb-list">
            <li className="mc-breadcrumb-item">
              <Link to="#" className="mc-breadcrumb-link">
                inicio
              </Link>
            </li>
            <li className="mc-breadcrumb-item">
              <Link to="#" className="mc-breadcrumb-link">
                Profissionais
              </Link>
            </li>
            <li className="mc-breadcrumb-item">Perfil</li>
          </ul>
        </div>
      </div>
      <div className="mc-card p-lg-4">
        <Row>
          <Col xl={5}>
            <div className="mc-product-view-gallery">
              <img src="images/product/single/advogado.png" alt="product" />
            </div>
          </Col>
          <Col xl={7}>
            <h6 className="mc-divide-title">Detalhes do profissional</h6>
            <h3 style={{ marginTop: 40, marginBottom: 39, marginLeft: 10 }}>
              {value.name}
            </h3>
            <ul>
              <li className="mc-edit-card">
                <i style={{ width: 40 }} className="material-icons">
                  description
                </i>
                <span style={{ width: 100 }}>Nome</span>
                <text className="mc-product-view-meta">{value.name}</text>
              </li>
              <li className="mc-edit-card">
                <i style={{ width: 40 }} className="material-icons">
                  phone
                </i>
                <text style={{ width: 100 }}>Telefone</text>
                <text className="mc-product-view-meta">{value.phone}</text>
              </li>
              <li className="mc-edit-card">
                <i style={{ width: 40 }} className="material-icons">
                  mail
                </i>
                <text style={{ width: 100 }}>E-Mail</text>
                <text className="mc-product-view-meta">{value.mail}</text>
              </li>
              <li className="mc-edit-card">
                <i style={{ width: 40 }} className="material-icons">
                  home
                </i>
                <text style={{ width: 100 }}>Residencia</text>
                <text className="mc-product-view-meta">{value.home}</text>
              </li>
              <li className="mc-edit-card">
                <i style={{ width: 40 }} className="material-icons">
                  store
                </i>
                <text style={{ width: 100 }}>Trabalho</text>
                <text className="mc-product-view-meta">{value.store}</text>
              </li>
              <li className="mc-edit-card">
                <i style={{ width: 40 }} className="material-icons">
                  summarize
                </i>
                <text style={{ width: 100 }}>Áreas</text>
                {value.areas.map((area) => (
                  <div
                    className="mc-product-view-meta"
                    style={{ alignItems: 'center', padding: 4, marginLeft: -3 }}
                  >
                    {area && (
                      <ul>
                        <li>{area}</li>
                      </ul>
                    )}
                  </div>
                ))}
              </li>
              <li className="mc-edit-card">
                <i style={{ width: 40 }} className="material-icons">
                  pix
                </i>
                <text style={{ width: 100 }}>Chave Pix</text>
                <div style={{ maxWidth: 700 }}>
                  <small
                    style={{ wordWrap: 'break-word' }}
                    className="mc-product-view-meta"
                  >
                    {value.pix}
                  </small>
                </div>
              </li>
              <li className="mc-edit-card">
                <i style={{ width: 40 }} className="material-icons">
                  verified
                </i>
                <text style={{ width: 100 }}>Verificado</text>
                <text className="mc-product-view-meta">{value.verified}</text>
              </li>
            </ul>
          </Col>
          <Col xl={12}>
            <h6 className="mc-divide-title mt-5 mb-4">Descrição</h6>
            <div className="mc-product-view-descrip">
              <p>
                Dr. Roberto é um advogado experiente e versátil, especializado
                em Direito da Família, Trabalhista e Criminal. Com vasta
                experiência, ele oferece representação jurídica de alta
                qualidade em uma variedade de questões legais. No Direito da
                Família, auxilia em divórcios, guarda de filhos e adoções,
                sempre com sensibilidade e dedicação. Em questões trabalhistas,
                defende os direitos de empregadores e empregados, lidando com
                contratos, demissões e assédio. Na esfera criminal, proporciona
                defesa estratégica em casos de acusações criminais, garantindo
                justiça e equidade perante a lei. Sua abordagem centrada no
                cliente e sua paixão pela justiça fazem dele uma escolha
                confiável para aqueles que enfrentam desafios legais em suas
                vidas.
              </p>
            </div>
          </Col>
          <Col xl={12}>
            <h6 className="mc-divide-title mt-5 mb-4">Documentos Enviados</h6>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <img
                width={500}
                height={300}
                src="images/product/single/OAB.webp"
                alt="product"
              />

              <img
                width={300}
                height={300}
                src="images/product/single/advogado.png"
                alt="product"
              />

              <img
                width={300}
                height={300}
                src="images/product/single/advogado.png"
                alt="product"
              />
            </div>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}
