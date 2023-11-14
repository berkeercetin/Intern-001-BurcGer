import { Component, OnInit, inject } from '@angular/core'
import { Firestore, collection, collectionData, query, getDocs } from '@angular/fire/firestore'
import { LoadingController } from '@ionic/angular'
import { Observable } from 'rxjs'
import { UserModel } from 'src/app/modules/main/models/usermodel'

@Component({
  selector: 'app-users-and-features',
  templateUrl: './users-and-features.page.html',
  styleUrls: ['./users-and-features.page.scss']
})
export class UsersAndFeaturesPage implements OnInit {
  private readonly firestore: Firestore = inject(Firestore)
  users: any[] = []
  loading = false
  user$?: Observable<[]>
  searchText = ''
  user!: UserModel

  constructor (private readonly loadingController: LoadingController) {}

  ionViewWillEnter () {
    this.loadingController.create(
      {
        message: 'Yükleniyor...',
        spinner: 'crescent',
        animated: true
      }
    ).then(res => {
      res.present()
    })
    const userFeaturesCollection = collection(this.firestore, 'user')
    this.user$ = collectionData(userFeaturesCollection) as Observable<[]>
    const featuresQuery = query(userFeaturesCollection) as any

    getDocs(featuresQuery)
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

  // creator () {
  //   console.log(this.user?.contentCreator)
  //   // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  //   this.user.contentCreator = !this.user.contentCreator
  // }

  ngOnInit () {
  }
}
