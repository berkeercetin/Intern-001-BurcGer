import { Component, OnInit, inject } from '@angular/core'
import { Firestore, collection, collectionData, query, getDocs } from '@angular/fire/firestore'
import { LoadingController } from '@ionic/angular'
import { Observable } from 'rxjs'
import { UserService } from 'src/app/modules/main/services/user.service'
@Component({
  selector: 'app-send-notification',
  templateUrl: './send-notification.page.html',
  styleUrls: ['./send-notification.page.scss']
})
export class SendNotificationPage implements OnInit {
  private readonly firestore: Firestore = inject(Firestore)
  users: any[] = []
  loading = false
  user$?: Observable<[]>

  constructor (private readonly userService: UserService,
    private readonly loadingController: LoadingController) { }

  ngOnInit () {
  }

  ionViewWillEnter () {
    const userCollection = collection(this.firestore, 'user')
    this.user$ = collectionData(userCollection) as Observable<[]>
    const userQuery = query(userCollection) as any
    getDocs(userQuery)
      .then(
        res => {
          console.log(res.docs.map(doc => doc.data()))
          this.users = res.docs.map(doc => doc.data())
        }
      )
      .catch((err: any) => {
        console.error(err)
      })
      .finally(
      // eslint-disable-next-line @typescript-eslint/promise-function-async, @typescript-eslint/no-misused-promises
        () => { this.loading = true; this.loadingController.dismiss() })
  }
}
