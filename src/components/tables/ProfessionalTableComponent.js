import React, { useState, useEffect } from 'react'
import { Modal, Form } from 'react-bootstrap'
import { ButtonComponent, AnchorComponent } from '../elements'

export default function ProfessionalTableComponent({ thead, tbody, total }) {
  const [professionalsData, setProfessionalsData] = useState([])
  const [professional, setProfessional] = useState(null)
  const [filteredData, setFilteredData] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [editModal, setEditModal] = useState(false)
  const [searchStatus, setSearchStatus] = useState('')
  const [searchUf, setSearchUf] = useState('')
  const [effectiveSearch, setEffectiveSearch] = useState({
    query: '',
    status: '',
    uf: '',
  })
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  useEffect(() => {
    const professionals = tbody.filter((item) => item.type !== 'Usuário')
    setProfessionalsData(professionals)
  }, [tbody])

  useEffect(() => {
    const { query, status, uf } = effectiveSearch
    const lowercasedQuery = query.toLowerCase()
    const lowercasedStatus = status.toLowerCase()
    const lowercasedUf = uf.toLowerCase()
    const filtered = professionalsData.filter(
      (item) =>
        (item.name.toLowerCase().includes(lowercasedQuery) ||
          item.document.toLowerCase().includes(lowercasedQuery)) &&
        item.status.toLowerCase().includes(lowercasedStatus) &&
        item.uf.toLowerCase().includes(lowercasedUf),
    )
    setFilteredData(filtered)
    setCurrentPage(1)
  }, [effectiveSearch, professionalsData])

  let currentData

  if (total === 5) {
    currentData = [...filteredData].reverse().slice(0, 5)
  } else {
    currentData = [...filteredData]
    currentData.sort((a, b) => (a.name > b.name ? 1 : -1))
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    currentData = currentData.slice(indexOfFirstItem, indexOfLastItem)
  }

  const totalPages =
    total === 5 ? 1 : Math.ceil(filteredData.length / itemsPerPage)

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const openEditModal = (item) => {
    setProfessional(item)
    setEditModal(true)
  }

  const closeEditModal = () => {
    setEditModal(false)
    setProfessional(null)
  }

  const handleSearch = () => {
    setEffectiveSearch({
      query: searchQuery,
      status: searchStatus,
      uf: searchUf,
    })
  }

  const handleClear = () => {
    setSearchQuery('')
    setSearchStatus('')
    setSearchUf('')
    setEffectiveSearch({ query: '', status: '', uf: '' })
  }

  return (
    <div className="mc-table-responsive">
      {total > 5 && (
        <div className="mc-inputs" style={{ display: 'flex', gap: 10 }}>
          <input
            className="mc-message-chat-footer2"
            type="text"
            placeholder="Buscar por nome ou documento"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              marginBottom: '20px',
              padding: '10px',
              width: '30%',
              border: '1px solid black',
            }}
          />
          <input
            className="mc-message-chat-footer2"
            type="text"
            placeholder="Buscar por status"
            value={searchStatus}
            onChange={(e) => setSearchStatus(e.target.value)}
            style={{
              marginBottom: '20px',
              padding: '10px',
              width: '10%',
              border: '1px solid black',
            }}
          />
          <select
            className="mc-message-chat-footer2"
            value={searchUf}
            onChange={(e) => setSearchUf(e.target.value)}
            style={{
              marginBottom: '20px',
              padding: '10px',
              width: '10%',
              border: '1px solid black',
            }}
          >
            <option value="">Selecione UF</option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
            <option value="DF">Distrito Federal</option>
          </select>
          <button
            onClick={handleSearch}
            className="btn2"
            style={{
              width: 100,
              height: 30,
              marginTop: 8,
              padding: '10px',
              border: '1px solid black',
            }}
          >
            Buscar
          </button>
          <button
            onClick={handleClear}
            className="btn2"
            style={{
              width: 100,
              height: 30,
              marginTop: 8,
              padding: '10px',
              border: '1px solid black',
            }}
          >
            Limpar
          </button>
        </div>
      )}
      <table className="mc-table">
        <thead className="mc-table-head primary">
          <tr>
            {thead.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody className="mc-table-body even">
          {currentData.map((item, index) => (
            <tr key={item.id || index}>
              <td title={item.name}>
                <div className="mc-table-profile">
                  <img src={item.src} alt={item.alt} />
                  <p>{item.name}</p>
                </div>
              </td>
              <td title={item.type}>
                <div className="mc-table-icon role">
                  {item.type === 'Admin' && (
                    <i className="material-icons yellow">settings</i>
                  )}
                  {item.type === 'Desenvolvedor' && (
                    <i className="material-icons purple">engineering</i>
                  )}
                  {item.type === 'professional' && (
                    <i className="material-icons green">verified</i>
                  )}
                  <span>{item.type}</span>
                </div>
              </td>
              <td title={item.document}>{item.document}</td>
              <td title={item.mail}>{item.mail}</td>
              <td title={item.clients}>{item.clients}</td>
              <td title={item.uf}>{item.uf}</td>
              <td title={item.phone}>{item.phone}</td>
              <td title={item.status}>
                {item.status === 'ativo' && (
                  <p className="mc-table-badge green">Ativo</p>
                )}
                {item.status === 'pendente' && (
                  <p className="mc-table-badge purple">Pendente</p>
                )}
                {item.status === 'bloqueado' && (
                  <p className="mc-table-badge red">Bloqueado</p>
                )}
                {item.status === 'inativo' && (
                  <p className="mc-table-badge red">Inativo</p>
                )}
              </td>
              <td title={item.createdAt}>{item.createdAt}</td>
              <td>
                <div className="mc-table-action">
                  <AnchorComponent
                    to="/professional-view"
                    title="View"
                    className="material-icons view"
                  >
                    visibility
                  </AnchorComponent>
                  <AnchorComponent
                    to="/professional-edit"
                    title="Edit"
                    className="material-icons edit"
                  >
                    edit
                  </AnchorComponent>
                  <ButtonComponent
                    title="Block"
                    className="material-icons block"
                    onClick={() => openEditModal(item)}
                  >
                    block
                  </ButtonComponent>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={editModal} onHide={closeEditModal}>
        <div className="mc-user-modal">
          <img src={professional?.src} alt={professional?.alt} />
          <h4>{professional?.name}</h4>
          <p>{professional?.email}</p>
          <Form.Group className="form-group inline">
            <Form.Label>Status</Form.Label>
            <Form.Select>
              <option value="approved">Ativo</option>
              <option value="pending">Inativo</option>
              <option value="blocked">Bloqueado</option>
            </Form.Select>
          </Form.Group>
          <Modal.Footer>
            <ButtonComponent
              type="button"
              className="btn btn-secondary"
              onClick={closeEditModal}
            >
              Fechar
            </ButtonComponent>
            <ButtonComponent
              type="button"
              className="btn btn-success"
              onClick={closeEditModal}
            >
              Salvar
            </ButtonComponent>
          </Modal.Footer>
        </div>
      </Modal>

      {total > 5 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'end',
            gap: 20,
            padding: '20px 0px',
            alignItems: 'center',
          }}
        >
          <button
            className={currentPage === 1 ? 'btn2Disabled' : 'btn2'}
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            {'<'}
          </button>
          <button
            className={currentPage === totalPages ? 'btn2Disabled' : 'btn2'}
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            {'>'}
          </button>
          <span>{currentPage}</span>
          <span>de</span>
          <span>{totalPages}</span>
        </div>
      )}
    </div>
  )
}
