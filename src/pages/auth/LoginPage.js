import React, { useState } from 'react'
import { AnchorComponent } from '../../components/elements'
import IconFieldComponent from '../../components/fields/IconFieldComponent'
import LogoComponent from '../../components/LogoComponent'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  console.log('🚀  email:', email)
  const [pass, setPass] = useState('')
  console.log('🚀  pass:', pass)

  const admin = {
    email: 'admin@admin.com',
    password: '123456',
  }

  return (
    <div className="mc-auth">
      <img
        src="images/pattern.webp"
        alt="pattern"
        className="mc-auth-pattern"
      />
      <div className="mc-auth-group">
        <LogoComponent
          src="images/BecaLogo2.png"
          alt="logo"
          href="/"
          className="mc-auth-logo"
          name={undefined}
        />
        <h4 className="mc-auth-title">Login</h4>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '35px',
            marginBottom: '20px',
            borderRadius: '8px',
            backgroundColor: '#03032e8c',
            border: '1px solid white',
            gap: 10,
          }}
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <IconFieldComponent
            icon="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          <IconFieldComponent
            icon="lock"
            type="password"
            onChange={(e) => setPass(e.target.value)}
            placeholder="senha"
            passwordVisible={true}
          />
          <AnchorComponent
            className="mc-auth-btn h-sm"
            type="submit"
            to={
              email === admin.email && pass === admin.password ? '/home' : '/'
            }
          >
            Entrar
          </AnchorComponent>
        </form>
      </div>
    </div>
  )
}
