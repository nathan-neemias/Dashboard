import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import PageLayout from '../../layouts/PageLayout'
import specifics from '../../assets/data/specifics.json'
import { AnchorComponent } from '../../components/elements'

export default function ProfessionalEditPage() {
  const professionalData = specifics.find(
    (item) => item.type === 'professional',
  )
  const [value, setValue] = useState(professionalData)

  // useEffect(() => {
  //     if (specifics.tbody[0]) {
  //         const specificsData = specifics.tbody[0];
  //         const updatedValue = {
  //             name: specificsData.name,
  //             src: specificsData.src,
  //             srcPerfil: specificsData.srcPerfil,
  //             phone: specificsData.phone,
  //             mail: specificsData.mail,
  //             document: specificsData.document,
  //             home: specificsData.home,
  //             store: specificsData.store,
  //             areas: specificsData.areas,
  //             pix: specificsData.pix,
  //             type: specificsData.type,
  //             verified: specificsData.verified,
  //             createdAt: specificsData.createdAt,
  //             status: specificsData.status,
  //             type: specificsData.type,
  //             clients: specificsData.clients,
  //             paidOut: specificsData.paidOut,
  //             lastPayment: specificsData.lastPayment,
  //             nextPayment: specificsData.nextPayment,
  //             value: specificsData.value,
  //         };
  //         setValue(updatedValue);
  //     }
  // }, [specifics.tbody]);

  return (
    <PageLayout>
      <div className="mc-card mb-4">
        <div className="mc-breadcrumb">
          <h3 className="mc-breadcrumb-title">Edição do profissional</h3>
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
      <div className="mc-card-edit p-lg-4">
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
                    borderWidth: 1,
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
                    borderWidth: 1,
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
                    borderWidth: 1,
                    border: '1px solid black',
                    color: 'black',
                  }}
                  onChange={(e) => setValue({ ...value, home: e.target.value })}
                  value={value.home}
                />
              </li>
              <li className="mc-edit-card">
                <i style={{ width: 40 }} className="material-icons">
                  store
                </i>
                <text style={{ width: 100 }}>Trabalho</text>
                <input
                  style={{
                    width: 450,
                    backgroundColor: '#FFF',
                    height: 30,
                    borderRadius: 8,
                    padding: 10,
                    borderWidth: 1,
                    border: '1px solid black',
                    color: 'black',
                  }}
                  onChange={(e) =>
                    setValue({ ...value, store: e.target.value })
                  }
                  value={value.store}
                />
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
                <input
                  style={{
                    width: 450,
                    backgroundColor: '#FFF',
                    height: 30,
                    borderRadius: 8,
                    padding: 10,
                    borderWidth: 1,
                    border: '1px solid black',
                    color: 'black',
                  }}
                  onChange={(e) => setValue({ ...value, pix: e.target.value })}
                  value={value.pix}
                />
              </li>
              <li className="mc-edit-card">
                <i style={{ width: 40 }} className="material-icons">
                  verified
                </i>
                <text style={{ width: 100 }}>Verificado</text>
                <input
                  style={{
                    width: 450,
                    backgroundColor: '#FFF',
                    height: 30,
                    borderRadius: 8,
                    padding: 10,
                    borderWidth: 1,
                    border: '1px solid black',
                    color: 'black',
                  }}
                  onChange={(e) =>
                    setValue({ ...value, verified: e.target.value })
                  }
                  value={value.verified}
                />
              </li>
            </ul>
            <div
              style={{
                position: 'absolute',
                marginLeft: '25.8%',
                marginTop: 30,
              }}
            >
              <AnchorComponent
                className="mc-btns"
                to="/professional-view"
                type="button"
                style={{ width: 100, height: 40, padding: 10 }}
              >
                Salvar
              </AnchorComponent>
            </div>
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
          {/* <Col xl={12}>
                        <h6 className="mc-divide-title mt-5 mb-4">review do profissional</h6>
                        <div className="mc-review-analytics-group">
                            <div className="mc-review-analytics-graph-group">
                                <ul className="mc-review-analytics-list">
                                    {ratings.map((rating, index) => (
                                        <li key={ index } className="mc-review-analytics-item">
                                            <span className="mc-review-analytics-count">{ rating.count }</span>
                                            <div className="mc-review-analytics-graph"><span style={{ width: rating.graph }}></span></div>
                                            <span className="mc-review-analytics-user">({ rating.user })</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mc-review-analytics-detail-group">
                                <h3 className="mc-review-analytics-total">Total de avaliações (38)</h3>
                                <h4 className="mc-review-analytics-score">4.9</h4>
                                <div className="mc-review-analytics-star">
                                    <i className="material-icons active">star</i>
                                    <i className="material-icons active">star</i>
                                    <i className="material-icons active">star</i>
                                    <i className="material-icons active">star</i>
                                    <i className="material-icons active">star_half</i>
                                </div>
                                <p className="mc-review-analytics-text">Média de avaliações</p>
                            </div>
                        </div>
                    </Col>
                    <Col xl={12}>
                        <h6 className="mc-divide-title mt-5 mb-4">customer_reviews</h6>
                        <ul className="mc-review-list">
                            {reviews?.map((item, index) => (
                                <li key={ index } className="mc-review-item">
                                    <div className="mc-review-group">
                                        <div className="mc-review-data">
                                            <div className="mc-review-head">
                                                <div className="mc-review-user">
                                                    <div className="mc-round-avatar sm">
                                                        <img src={item.src} alt="avatar" />
                                                    </div>
                                                    <div className="mc-duel-text sm">
                                                        <h3 className="mc-duel-text-title">{item.name}</h3>
                                                        <p className="mc-duel-text-descrip">{item.date}</p>
                                                    </div>
                                                    { item.admin && <span className="mc-review-admin">{ item.admin }</span> }
                                                </div>
                                                <div className="mc-review-reply">
                                                    <AnchorComponent 
                                                        to={ item.button.path } 
                                                        icon={ item.button.icon } 
                                                        text={ item.button.text } 
                                                        className="mc-btn primary" 
                                                    />
                                                </div>
                                            </div>
                                            <div className="mc-review-star">
                                                {item.star.map((item, index) => (
                                                    <i key={ index } className="material-icons">{ item }</i>
                                                ))}
                                            </div>
                                            <p className="mc-review-describe">{ item.text }</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Col>
                    <Col xl={12}>
                        <h6 className="mc-divide-title mt-3 mb-4">{t('review_reply_form')}</h6>
                        <LabelTextareaComponent placeholder={t('write_here')} fieldSize="w-100 h-text-xl" />
                        <ButtonComponent className="mc-btn mc-review-form-btn primary">{t('drop_your_replies')}</ButtonComponent>
                    </Col> */}
        </Row>
      </div>
    </PageLayout>
  )
}
