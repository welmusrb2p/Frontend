import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import constant from 'src/app/core/utilities/constant';
import { GlobalService } from 'src/app/core/services/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  languages: any = [
    { name: 'ع', code: constant.arabic_Code },
    { name: 'EN', code: constant.english_Code },
  ];

  currentLang: string = this.globalService.getLanguage();

  constructor(
    private router: Router,
    private globalService: GlobalService,
    private translate: TranslateService,
    @Inject(DOCUMENT) private document: Document
  ) 
  {
    this.changeLang(this.currentLang);
  }

  ngOnInit(): void {}


  changeLang(lang: string) {
    this.currentLang = lang;
    const htmlTag = this.document.getElementsByTagName(
      'html'
    )[0] as HTMLHtmlElement;

    htmlTag.lang =
      this.currentLang === constant.arabic_Code
        ? 'styles-ar.css'
        : 'styles-en.css';

    this.translate.setDefaultLang(this.currentLang);

    this.translate.use(this.currentLang);

    this.currentLang = this.currentLang;

    this.globalService.setLanguage(this.currentLang);

  }

}
