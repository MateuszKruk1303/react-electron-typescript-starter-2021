import { Suspense } from 'react'
import { HashRouter } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { Provider } from 'react-redux'
import { SnackbarProvider } from 'notistack'
import { theme } from 'config'
import { PageLoader, Layout } from 'shared/components'
import { routes, store } from './App.setup'
import { useTrasnlationConfig } from 'shared/hooks'

const App = () => {
  const { handleSetLanguage, isInitialized } = useTrasnlationConfig()

  return (
    <SnackbarProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CssBaseline />
            <Suspense fallback={<PageLoader />}>
              <HashRouter>
                {isInitialized && (
                  <Layout
                    routes={routes}
                    handleSetLanguage={handleSetLanguage}
                  />
                )}
              </HashRouter>
            </Suspense>
          </LocalizationProvider>
        </ThemeProvider>
      </Provider>
    </SnackbarProvider>
  )
}

export default App
