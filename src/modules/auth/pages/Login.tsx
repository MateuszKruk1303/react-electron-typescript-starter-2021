import { paths } from 'config'
import { Redirect } from 'react-router'
import { AuthForm, FormPage } from '../components'
import { useAuth } from 'shared/hooks'
import { MODULE_NAME } from '../strings'
import { useTranslation } from 'shared/hooks'

const Login = () => {
  const { isAuthenticated } = useAuth()
  const { t } = useTranslation(MODULE_NAME)

  if (isAuthenticated) return <Redirect to={paths.home} />
  return (
    <FormPage
      title={t('login.title')}
      route={paths.register}
      linkText={t('login.createAccount')}
    >
      <AuthForm path={paths.login} submitText={t('login.title')} />
    </FormPage>
  )
}

export default Login
