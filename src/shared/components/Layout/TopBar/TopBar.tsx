import { Grid, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import { MODULE_NAME } from 'modules/auth/strings'
import { useAuth, useTranslation } from 'shared/hooks'
import { useMenu } from 'shared/hooks/use-menu'
import { AppBar, LogoutButton, EarthIcon } from './TopBar.style'
import config from 'config'

interface TopBarProps {
  setLanguage: (lng: string) => void
}
const TopBar = ({ setLanguage }: TopBarProps) => {
  const { logout, isAuthenticated } = useAuth()
  const { menuProps, handleClick } = useMenu()
  const { t } = useTranslation(MODULE_NAME)

  return (
    <AppBar position="absolute">
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Typography variant="h6">App Title</Typography>
        </Grid>
        <Grid item>
          {isAuthenticated && (
            <LogoutButton variant="contained" onClick={logout}>
              {t('logout')}
            </LogoutButton>
          )}
          <IconButton onClick={handleClick}>
            <EarthIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Menu {...menuProps}>
        {config.languages.map(language => (
          <MenuItem key={language} onClick={() => setLanguage(language)}>
            {t(`languages.${language}`)}
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  )
}

export default TopBar
