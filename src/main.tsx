import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './tokens/index.css'
import './tokens/colors.css'
import './tokens/typography.css'
import './tokens/spacing.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div style={{ padding: 32, fontFamily: 'var(--sds-typography-body-font-family, system-ui)' }}>
      <h1 style={{ marginBottom: 8 }}>Simple DS</h1>
      <p style={{ color: '#888' }}>Run <code>npm run storybook</code> to browse components.</p>
    </div>
  </StrictMode>,
)
