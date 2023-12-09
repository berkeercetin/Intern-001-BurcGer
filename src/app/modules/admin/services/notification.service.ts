// notification.service.ts
import { Injectable } from '@angular/core'
import { ToastController } from '@ionic/angular'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private userMessage: string = ''
  constructor (private readonly toastController: ToastController) {}

  setUserMessage (message: string) {
    this.userMessage = message
  }

  async sendNotification () {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (this.userMessage) {
      const toast = await this.toastController.create({
        message: this.userMessage,
        duration: 2000
      })
      toast.present()
    }
  }
}
