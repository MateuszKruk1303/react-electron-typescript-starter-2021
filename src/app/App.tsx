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

const App = () => {
  console.log(process.env.REACT_APP_API_URL)

  return (
    <SnackbarProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CssBaseline />
            <Suspense fallback={<PageLoader />}>
              <HashRouter>
                <Layout routes={routes} />
              </HashRouter>
            </Suspense>
          </LocalizationProvider>
        </ThemeProvider>
      </Provider>
    </SnackbarProvider>
  )
}

export default App
