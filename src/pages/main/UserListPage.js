import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { FloatCardComponent } from '../../components/cards'
import UsersTableComponent from '../../components/tables/UsersTableComponent'
import PageLayout from '../../layouts/PageLayout'
import specific from '../../assets/data/specifics.json'

export default function UserListPage() {
  const [status] = useState({
    actives: specific.filter(
      (value) => value.status === 'ativo' && value.type === 'Usuário',
    ),
    blocked: specific.filter(
      (value) => value.status === 'bloqueado' && value.type === 'Usuário',
    ),
    inactive: specific.filter(
      (value) => value.status === 'inativo' && value.type === 'Usuário',
    ),
  })
  const actives = status.actives.length
  const blocked = status.blocked.length
  const inactive = status.inactive.length
  const total = actives + blocked + inactive

  const [usuarios] = useState([
    {
      title: 'Total de Clientes',
      digit: total,
      icon: 'pending',
      variant: 'lg blue',
    },
    {
      title: 'Clientes Ativos',
      digit: actives,
      icon: 'check_circle',
      variant: 'lg green',
    },
    {
      title: 'Clientes Inativos / Bloqueados',
      digit: blocked + inactive,
      icon: 'remove_circle',
      variant: 'lg red',
    },
  ])

  return (
    <PageLayout>
      <Row>
        <Col xl={12}>
          <div className="mc-card">
            <div className="mc-breadcrumb">
              <h3 className="mc-breadcrumb-title">Clientes</h3>
              <ul className="mc-breadcrumb-list">
                <li className="mc-breadcrumb-item">
                  <Link to="#" className="mc-breadcrumb-link">
                    Inicio
                  </Link>
                </li>
                <li className="mc-breadcrumb-item">Lista de clientes</li>
              </ul>
            </div>
          </div>
        </Col>
        {usuarios.map((float, index) => (
          <Col xl={4} key={index}>
            <FloatCardComponent
              variant={float.variant}
              digit={float.digit}
              title={float.title}
              icon={float.icon}
            />
          </Col>
        ))}
        <Col xl={12}>
          <div className="mc-card">
            <div className="mc-card-header">
              <h4 className="mc-card-title">Usuários</h4>
            </div>
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
              total={specific.length}
            />
          </div>
        </Col>
      </Row>
    </PageLayout>
  )
}
