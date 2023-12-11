import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Intern-001-BurcGer',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    LocalNotifications: {
      smallIcon: 'ic_stat_icon_config_sample',
      iconColor: '#488AFF'
    }
  }
}

export default config
