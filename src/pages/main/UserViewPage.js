import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import PageLayout from '../../layouts/PageLayout'
import specifics from '../../assets/data/specifics.json'

export default function UserViewPage() {
  const UserData = specifics.find((item) => item.type === 'Usuário')
  const [value] = useState(UserData)
  return (
    <PageLayout>
      <div className="mc-card mb-4">
        <div className="mc-breadcrumb">
          <h3 className="mc-breadcrumb-title">review do cliente</h3>
          <ul className="mc-breadcrumb-list">
            <li className="mc-breadcrumb-item">
              <Link to="/home" className="mc-breadcrumb-link">
                inicio
              </Link>
            </li>
            <li className="mc-breadcrumb-item">
              <Link to="/user-list" className="mc-breadcrumb-link">
                Usuários
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
              <img src="images/product/single/senhora.jpg" alt="product" />
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
                <i
                  style={{ width: 40, marginTop: -15 }}
                  className="material-icons"
                >
                  phone
                </i>
                <text style={{ width: 100, marginTop: -15 }}>Telefone</text>
                <text
                  style={{ marginTop: -15 }}
                  className="mc-product-view-meta"
                >
                  {value.phone}
                </text>
              </li>
              <li className="mc-edit-card">
                <i
                  style={{ width: 40, marginTop: -30 }}
                  className="material-icons"
                >
                  mail
                </i>
                <text style={{ width: 100, marginTop: -30 }}>E-Mail</text>
                <text
                  style={{ marginTop: -30 }}
                  className="mc-product-view-meta"
                >
                  {value.mail}
                </text>
              </li>
              <li className="mc-edit-card">
                <i
                  style={{ width: 40, marginTop: -40 }}
                  className="material-icons"
                >
                  home
                </i>
                <text style={{ width: 100, marginTop: -40 }}>Residencia</text>
                <text
                  style={{ marginTop: -40 }}
                  className="mc-product-view-meta"
                >
                  {value.home}
                </text>
              </li>
              <li className="mc-edit-card">
                <i
                  style={{ width: 40, marginTop: -50 }}
                  className="material-icons"
                >
                  summarize
                </i>
                <text style={{ width: 100, marginTop: -50 }}>Áreas</text>
                {value.solicitations.map((area) => (
                  <div
                    className="mc-product-view-meta"
                    style={{
                      alignItems: 'center',
                      padding: 4,
                      marginLeft: -3,
                      marginTop: -50,
                    }}
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
                <i
                  style={{ width: 40, marginTop: -55 }}
                  className="material-icons"
                >
                  pix
                </i>
                <text style={{ width: 100, marginTop: -55 }}>Chave Pix</text>
                <div style={{ maxWidth: 700, marginTop: -55 }}>
                  <small
                    style={{ wordWrap: 'break-word' }}
                    className="mc-product-view-meta"
                  >
                    {value.pix}
                  </small>
                </div>
              </li>
              <li className="mc-edit-card">
                <i
                  style={{ width: 40, marginTop: -60 }}
                  className="material-icons"
                >
                  person_add
                </i>
                <text style={{ width: 100, marginTop: -60 }}>
                  Cód. Indicação
                </text>
                <text
                  style={{ marginTop: -60 }}
                  className="mc-product-view-meta"
                >
                  {value.code}
                </text>
              </li>
              <li className="mc-edit-card">
                <i
                  style={{ width: 40, marginTop: -60 }}
                  className="material-icons"
                >
                  summarize
                </i>
                <text style={{ width: 100, marginTop: -60 }}>Indicações</text>
                <text
                  style={{ marginTop: -60 }}
                  className="mc-product-view-meta"
                >
                  {value.indications.length}
                </text>
              </li>
              <li className="mc-edit-card">
                <i
                  style={{ width: 40, marginTop: -60 }}
                  className="material-icons"
                >
                  verified
                </i>
                <text style={{ width: 100, marginTop: -60 }}>Criado em</text>
                <text
                  style={{ marginTop: -60 }}
                  className="mc-product-view-meta"
                >
                  {value.createdAt}
                </text>
              </li>
              <li className="mc-edit-card">
                <i
                  style={{ width: 40, marginTop: -60 }}
                  className="material-icons"
                >
                  savings
                </i>
                <text style={{ width: 100, marginTop: -60 }}>Total</text>
                <text
                  style={{ marginTop: -60 }}
                  className="mc-product-view-meta"
                >
                  {value.total}
                </text>
              </li>
              <li className="mc-edit-card">
                <i
                  style={{ width: 40, marginTop: -60 }}
                  className="material-icons"
                >
                  payments
                </i>
                <text style={{ width: 100, marginTop: -60 }}>Disponivel</text>
                <text
                  style={{ marginTop: -60 }}
                  className="mc-product-view-meta"
                >
                  {value.disponible}
                </text>
              </li>
              <li className="mc-edit-card">
                <i
                  style={{ width: 40, marginTop: -60 }}
                  className="material-icons"
                >
                  money
                </i>
                <text style={{ width: 100, marginTop: -60 }}>Sacado</text>
                <text
                  style={{ marginTop: -60 }}
                  className="mc-product-view-meta"
                >
                  {value.widrouwMoney}
                </text>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}
