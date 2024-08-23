import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import PageLayout from '../../layouts/PageLayout'
import specifics from '../../assets/data/specifics.json'

export default function UserEditPage() {
  const UserData = specifics.find((item) => item.type === 'Usuário')
  const [value, setValue] = useState(UserData)
  return (
    <PageLayout>
      <div className="mc-card mb-4">
        <div className="mc-breadcrumb">
          <h3 className="mc-breadcrumb-title">Edição do cliente</h3>
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
                <input
                  style={{
                    width: 450,
                    backgroundColor: '#FFF',
                    height: 30,
                    borderRadius: 8,
                    padding: 10,
                    border: '1px solid black',
                    color: 'black',
                  }}
                  onChange={(e) => setValue({ ...value, name: e.target.value })}
                  value={value.name}
                />
              </li>
              <li className="mc-edit-card">
                <i style={{ width: 40 }} className="material-icons">
                  phone
                </i>
                <text style={{ width: 100 }}>Telefone</text>
                <input
                  style={{
                    width: 450,
                    backgroundColor: '#FFF',
                    height: 30,
                    borderRadius: 8,
                    padding: 10,
                    border: '1px solid black',
                    color: 'black',
                  }}
                  onChange={(e) =>
                    setValue({ ...value, phone: e.target.value })
                  }
                  value={value.phone}
                />
              </li>
              <li className="mc-edit-card">
                <i style={{ width: 40 }} className="material-icons">
                  mail
                </i>
                <text style={{ width: 100 }}>E-Mail</text>
                <input
                  style={{
                    width: 450,
                    backgroundColor: '#FFF',
                    height: 30,
                    borderRadius: 8,
                    padding: 10,
                    border: '1px solid black',
                    color: 'black',
                  }}
                  onChange={(e) => setValue({ ...value, mail: e.target.value })}
                  value={value.mail}
                />
              </li>
              <li className="mc-edit-card">
                <i style={{ width: 40 }} className="material-icons">
                  home
                </i>
                <text style={{ width: 100 }}>Residencia</text>
                <input
                  style={{
                    width: 450,
                    backgroundColor: '#FFF',
                    height: 30,
                    borderRadius: 8,
                    padding: 10,
                    border: '1px solid black',
                    color: 'black',
                  }}
                  onChange={(e) => setValue({ ...value, home: e.target.value })}
                  value={value.home}
                />
              </li>
              <li className="mc-edit-card">
                <i style={{ width: 40 }} className="material-icons">
                  summarize
                </i>
                <text style={{ width: 100 }}>Áreas</text>
                {value.solicitations.map((area) => (
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
                  <input
                    style={{
                      width: 450,
                      backgroundColor: '#FFF',
                      height: 30,
                      borderRadius: 8,
                      padding: 10,
                      border: '1px solid black',
                      color: 'black',
                    }}
                    onChange={(e) =>
                      setValue({ ...value, pix: e.target.value })
                    }
                    value={value.pix}
                  />
                </div>
              </li>
              <li className="mc-edit-card">
                <i style={{ width: 40 }} className="material-icons">
                  person_add
                </i>
                <text style={{ width: 100 }}>Cód. Indicação</text>
                <input
                  style={{
                    width: 450,
                    backgroundColor: '#FFF',
                    height: 30,
                    borderRadius: 8,
                    padding: 10,
                    border: '1px solid black',
                    color: 'black',
                  }}
                  onChange={(e) => setValue({ ...value, code: e.target.value })}
                  value={value.code}
                />
              </li>
              <li className="mc-edit-card">
                <i style={{ width: 40 }} className="material-icons">
                  summarize
                </i>
                <text style={{ width: 100 }}>Indicações</text>
                <text className="mc-product-view-meta">
                  {value.indications.length}
                </text>
              </li>
              <li className="mc-edit-card">
                <i style={{ width: 40 }} className="material-icons">
                  verified
                </i>
                <text style={{ width: 100 }}>Criado em</text>
                <text className="mc-product-view-meta">{value.createdAt}</text>
              </li>
              <li className="mc-edit-card">
                <i style={{ width: 40 }} className="material-icons">
                  savings
                </i>
                <text style={{ width: 100 }}>Total</text>
                <text className="mc-product-view-meta">{value.total}</text>
              </li>
              <li className="mc-edit-card">
                <i style={{ width: 40 }} className="material-icons">
                  payments
                </i>
                <text style={{ width: 100 }}>Disponivel</text>
                <text className="mc-product-view-meta">{value.disponible}</text>
              </li>
              <li className="mc-edit-card">
                <i style={{ width: 40 }} className="material-icons">
                  money
                </i>
                <text style={{ width: 100 }}>Sacado</text>
                <text className="mc-product-view-meta">
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
