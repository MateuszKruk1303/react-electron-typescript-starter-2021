import { paths } from 'config'
import { Redirect } from 'react-router'
import { AuthForm, FormPage } from '../components'
import { useAuth } from 'shared/hooks'
import { useTranslation } from 'react-i18next'
import { MODULE_NAME } from '../strings'

const Register = () => {
  const { isAuthenticated } = useAuth()
  const { t } = useTranslation(MODULE_NAME)
  if (isAuthenticated) return <Redirect to={paths.home} />
  return (
    <FormPage
      title={t('register.title')}
      route={paths.login}
      linkText={t('register.alreadyHave')}
    >
      <AuthForm path={paths.register} submitText={t('register.title')} />
    </FormPage>
  )
}

export default Register
