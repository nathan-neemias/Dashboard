import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import PageLayout from '../../layouts/PageLayout'
import { AnchorComponent } from '../../components/elements'

export default function CreateUsers() {
  const [value, setValue] = useState({
    type: '',
    solicitations: [],
    indications: [],
    home: '',
    code: '',
    src: '',
    name: '',
    document: 0,
    pix: '',
    mail: '',
    total: '',
    disponible: '',
    widrouwMoney: '',
    payout: '',
    phone: '',
    uf: '',
    status: '',
    createdAt: new Date(),
    areas: [],
    store: '',
    verified: '',
    documents: [],
    description: '',
  })

  const fileInputRef = useRef(null)

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setValue({ ...value, src: reader.result })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDocumentsChange = (e) => {
    const files = Array.from(e.target.files)
    const newDocuments = files.map((file) => {
      return URL.createObjectURL(file)
    })
    setValue({ ...value, documents: newDocuments })
  }

  const handleChooseAnotherImage = () => {
    setValue({ ...value, src: '' })
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <PageLayout>
      <div className="mc-card mb-4">
        <div className="mc-breadcrumb">
          <h3 className="mc-breadcrumb-title">Edição do profissional</h3>
          <ul className="mc-breadcrumb-list">
            <li className="mc-breadcrumb-item">
              <Link to="#" className="mc-breadcrumb-link">
                Inicio
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
            <div
              className="mc-product-view-gallery"
              style={{ width: 600, height: 700, overflow: 'hidden' }}
            >
              {value.src ? (
                <>
                  <img
                    src={value.src}
                    alt="product"
                    style={{ maxWidth: '100%', maxHeight: 600 }}
                  />
                  <button
                    style={{
                      width: '100%',
                      height: 40,
                      marginTop: 10,
                      borderRadius: 8,
                      backgroundColor: 'blue',
                      color: 'white',
                      cursor: 'pointer',
                      border: 'none',
                    }}
                    onClick={handleChooseAnotherImage}
                  >
                    Escolher outra imagem
                  </button>
                </>
              ) : (
                <div
                  style={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    border: '2px dashed blue',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                  }}
                >
                  <input
                    ref={fileInputRef}
                    id="file-input"
                    type="file"
                    accept="image/*"
                    style={{
                      opacity: 0,
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      cursor: 'pointer',
                    }}
                    onChange={handleProfilePictureChange}
                  />
                  <button
                    style={{
                      width: 100,
                      height: 100,
                      border: '2px dashed blue',
                      borderRadius: 20,
                      background: 'none',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: 50,
                      color: 'blue',
                    }}
                    onClick={handleChooseAnotherImage}
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </Col>
          <Col xl={7}>
            <h6 className="mc-divide-title">Detalhes do profissional</h6>
            <h3 style={{ marginTop: 40, marginBottom: 39, marginLeft: 10 }}>
              {value?.name}
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
                <span style={{ width: 100 }}>Telefone</span>
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
                <span style={{ width: 100 }}>E-Mail</span>
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
                <span style={{ width: 100 }}>Residência</span>
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
                  store
                </i>
                <span style={{ width: 100 }}>Trabalho</span>
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
                    setValue({ ...value, store: e.target.value })
                  }
                  value={value.store}
                />
              </li>
              <li className="mc-edit-card">
                <i style={{ width: 40 }} className="material-icons">
                  summarize
                </i>
                <span style={{ width: 100 }}>Áreas</span>
                {value?.areas?.map((area, index) => (
                  <div
                    key={index}
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
                <span style={{ width: 100 }}>Chave Pix</span>
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
                  onChange={(e) => setValue({ ...value, pix: e.target.value })}
                  value={value.pix}
                />
              </li>
              <li className="mc-edit-card">
                <i style={{ width: 40 }} className="material-icons">
                  verified
                </i>
                <span style={{ width: 100 }}>Verificado</span>
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
              <textarea
                style={{
                  width: '100%',
                  height: '150px',
                  backgroundColor: '#FFF',
                  borderRadius: 8,
                  padding: 10,
                  border: '1px solid black',
                  color: 'black',
                }}
                onChange={(e) =>
                  setValue({ ...value, description: e.target.value })
                }
                value={value.description}
              />
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
              {value.documents.map((doc, index) => (
                <img
                  key={index}
                  width={300}
                  height={300}
                  src={doc}
                  alt="document"
                />
              ))}
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleDocumentsChange}
              />
            </div>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}
