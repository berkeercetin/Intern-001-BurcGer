import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Intern-001-BurcGer',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    pushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert']
    }
  }
}

export default config
