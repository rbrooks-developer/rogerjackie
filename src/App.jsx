import './App.css'

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--color-primary)',
      color: 'var(--color-light)',
      fontFamily: 'var(--font-sans)',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <h1 style={{ fontSize: 'clamp(5rem, 15vw, 9rem)', fontWeight: 800, lineHeight: 1, color: 'var(--color-accent)', marginBottom: '1rem' }}>404</h1>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', color: 'var(--color-muted)', maxWidth: '420px' }}>
        This page is no longer available.
      </p>
    </div>
  )
}
