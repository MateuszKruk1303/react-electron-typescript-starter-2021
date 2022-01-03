import { useSnackbar as baseUseSnackbar, OptionsObject } from 'notistack'
import { useTranslation } from 'react-i18next'

export const useErrorSnackbar = () => {
  const { t } = useTranslation()
  const { enqueueSnackbar } = baseUseSnackbar()

  const options: OptionsObject = {
    variant: 'error',
    autoHideDuration: 3000,
  }

  const defaultMessage = t('error.somethingWentWrong')
  const showSnackbar = (message?: string) =>
    enqueueSnackbar(message || defaultMessage, options)

  return [showSnackbar]
}
