import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import {
  EcommerceCardComponent,
  SalesCardComponent,
} from '../../components/cards'
import PageLayout from '../../layouts/PageLayout'
import UsersTableComponent from '../../components/tables/UsersTableComponent'
import ProfessionalTableComponent from '../../components/tables/ProfessionalTableComponent'
import specific from '../../assets/data/specifics.json'

export default function EcommercePage() {
  const totalUsers = specific.filter((user) => user.type === 'Usuário')
  const totalProfessionals = specific.filter(
    (professional) => professional.type === 'professional',
  )
  const activeUsers = specific.filter(
    (user) => user.status === 'ativo' && user.type === 'Usuário',
  )
  const activeProfessionals = specific.filter(
    (professional) =>
      professional.status === 'ativo' && professional.type === 'professional',
  )

  return (
    <PageLayout>
      <Row>
        <Col xl={12}>
          <div className="mc-card">
            <div className="mc-breadcrumb">
              <h3 className="mc-breadcrumb-title">Inicio</h3>
              <ul className="mc-breadcrumb-list">
                <li className="mc-breadcrumb-item">Inicio</li>
                <li className="mc-breadcrumb-item">
                  <Link to="/home" className="mc-breadcrumb-link">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col xs={12} xl={8}>
          <Row xs={1} sm={2}>
            <Col>
              <EcommerceCardComponent
                icon={'account_circle'}
                trend={'trending_up'}
                title={'Total de Usuários'}
                variant={'blue'}
                number={totalUsers.length}
                percent={95}
              />
              <EcommerceCardComponent
                icon={'contact_mail'}
                trend={'trending_up'}
                title={'Total de Profissionais'}
                variant={'green'}
                number={totalProfessionals.length}
                percent={1}
              />
            </Col>
            <Col>
              <EcommerceCardComponent
                icon={'shopping_bag'}
                trend={'trending_up'}
                title={'Total de Serviços'}
                variant={'purple'}
                number={activeUsers.length + activeProfessionals.length}
                percent={1}
              />
              <EcommerceCardComponent
                icon={'hotel_class'}
                trend={'trending_up'}
                title={'Total de Indicações'}
                variant={'yellow'}
                number={0}
                percent={0}
              />
            </Col>
          </Row>
        </Col>
        <Col xs={12} xl={4}>
          <SalesCardComponent />
        </Col>
        <div style={{ padding: '20px 12px', fontWeight: 'bold', fontSize: 20 }}>
          Ultimos 5 Profissionais Cadastrados
        </div>
        <Col xl={12}>
          <ProfessionalTableComponent
            thead={[
              'Nome',
              'Função',
              'Documento',
              'Email',
              'Clientes',
              'UF',
              'Telefone',
              'Status',
              'Criado em',
              'Ação',
            ]}
            tbody={specific}
            total={5}
          />
        </Col>
        <div style={{ padding: '20px 12px', fontWeight: 'bold', fontSize: 20 }}>
          Ultimos 5 Clientes Cadastrados
        </div>
        <Col xl={12}>
          <UsersTableComponent
            thead={[
              'Nome',
              'Função',
              'Documento',
              'Email',
              'Total',
              'Disponivel',
              'Sacado',
              'UF',
              'Telefone',
              'Status',
              'Criado em',
              'Ação',
            ]}
            tbody={specific}
            total={5}
          />
        </Col>
      </Row>
    </PageLayout>
  )
}
