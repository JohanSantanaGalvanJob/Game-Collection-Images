import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { GameCrudService } from './../services/game-crud.service';
import { PhotoService } from '../services/photo.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})

export class UpdatePage implements OnInit {

  updateGameFg: FormGroup;
  id: any;
  isSubmitted: boolean = false;
  capturedPhoto: string;
  filename: string;

  constructor(
    private gameCrudService: GameCrudService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ionViewWillEnter() {
    this.isSubmitted = false;
    // this.capturedPhoto = "";
  }

  ngOnInit() {
    this.fetchGame(this.id);
    this.updateGameFg = this.formBuilder.group({
      platform: [''],
      title: [''],
      description: [''],
      genre: [''],
      meta_score: [''],
      user_score: [''],
      release_date: ['']
    })
  }



  takePhoto() {
    // DECOMMENT:
    this.photoService.takePhoto().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  pickImage() {
    // DECOMMENT:
    this.photoService.pickImage().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  discardImage() {
    // DECOMMENT:
    this.capturedPhoto = null;
  }

  fetchGame(id) {
    this.gameCrudService.getGame(id).subscribe((data) => {
      this.updateGameFg.setValue({
        platform: data['platform'],
        title: data['title'],
        description: data['description'],
        genre: data['genre'],
        meta_score: data['meta_score'],
        user_score: data['user_score'],
        release_date: data['release_date'],
      });
      this.filename = data['filename'];
    });
    console.log(this.filename)
  }

  async onSubmit() {
    if (!this.updateGameFg.valid) {
      return false;
    } else {

      let blob = null;
      if (this.capturedPhoto != "") {
        const response = await fetch(this.capturedPhoto);
        console.log("sosssssssssssss")
        blob = await response.blob();
      }
      if (this.capturedPhoto != "") {
      this.gameCrudService.updateGame(this.id, this.updateGameFg.value, blob)
        .subscribe(() => {
          this.updateGameFg.reset();
          this.router.navigate(['/list']);
        })
      }
      else{
        this.gameCrudService.updateGameNoFile(this.id, this.updateGameFg.value)
        .subscribe(() => {
          this.updateGameFg.reset();
          this.router.navigate(['/list']);
        })
      }
    }
  }

}
