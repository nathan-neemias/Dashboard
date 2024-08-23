import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { FloatCardComponent } from '../../components/cards'
import ProfessionalTableComponent from '../../components/tables/ProfessionalTableComponent'
import PageLayout from '../../layouts/PageLayout'
import specifics from '../../assets/data/specifics.json'

export default function ProfessionalListPage() {
  const [status] = useState({
    actives: specifics.filter(
      (value) => value.status === 'ativo' && value.type === 'professional',
    ),
    pending: specifics.filter(
      (value) => value.status === 'pendente' && value.type === 'professional',
    ),
    blocked: specifics.filter(
      (value) => value.status === 'bloqueado' && value.type === 'professional',
    ),
    inactive: specifics.filter(
      (value) => value.status === 'inativo' && value.type === 'professional',
    ),
  })
  let others = specifics.filter(
    (value) => value.type !== 'professional' && value.type !== 'Usuário',
  ).length
  const actives = status.actives.length
  const pending = status.pending.length
  const blocked = status.blocked.length
  const inactive = status.inactive.length
  const total = actives + pending + blocked + inactive + others

  const [professionals] = useState([
    {
      title: 'Total de Profissionais',
      digit: total,
      icon: 'pending',
      variant: 'lg blue',
    },
    {
      title: 'Profissionais Ativos',
      digit: actives,
      icon: 'check_circle',
      variant: 'lg green',
    },
    {
      title: 'Profissionais Pendentes',
      digit: pending,
      icon: 'pending',
      variant: 'lg purple',
    },
    {
      title: 'Profissionais Inativos / Bloqueados',
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
              <h3 className="mc-breadcrumb-title">Profissionais</h3>
              <ul className="mc-breadcrumb-list">
                <li className="mc-breadcrumb-item">
                  <Link to="/home" className="mc-breadcrumb-link">
                    Inicio
                  </Link>
                </li>
                <li className="mc-breadcrumb-item">Lista de profissionais</li>
              </ul>
            </div>
          </div>
        </Col>

        {professionals.map((float, index) => (
          <Col xl={3} key={index}>
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
              <h4 className="mc-card-title">Lista de profissionais</h4>
            </div>
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
              tbody={specifics}
              total={specifics.length}
            />
          </div>
        </Col>
      </Row>
    </PageLayout>
  )
}
