import { AppBar as BaseAppBar, Button, styled } from '@mui/material'
import { Earth } from 'shared/assets'

export const AppBar = styled(BaseAppBar)(({ theme }) => ({
  padding: theme.spacing(1.5),
}))

export const LogoutButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.error.main,
}))

export const EarthIcon = styled(Earth)(({ theme }) => ({
  color: theme.palette.common.white,
}))
