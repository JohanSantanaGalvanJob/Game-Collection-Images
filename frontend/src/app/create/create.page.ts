import { Component, OnInit, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { GameCrudService } from './../services/game-crud.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})

export class CreatePage implements OnInit {

  gameForm: FormGroup;
  isSubmitted: boolean = false;
  capturedPhoto: string = "";

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private photoService: PhotoService,
    private gameCrudService: GameCrudService
  ) {
    this.gameForm = this.formBuilder.group({
      platform: [''],
      title: [''],
      description: [''],
      genre: [''],
      meta_score: [''],
      user_score: [''],
      release_date: ['']
    })
  }

  ionViewWillEnter() {
    this.gameForm.reset();
    this.isSubmitted = false;
    this.capturedPhoto = "";
  }

  ngOnInit() { }

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

  async onSubmit() {
    if (!this.gameForm.valid) {
      return false;
    } else {

      let blob = null;
      if (this.capturedPhoto != "") {
        const response = await fetch(this.capturedPhoto);
        blob = await response.blob();
      }

      console.log()
      this.gameCrudService.createGame(this.gameForm.value, blob)
        .subscribe((response) => {
          this.zone.run(() => {
            this.gameForm.reset();
            this.router.navigate(['/list']);
          })
        });
    }
  }

}
