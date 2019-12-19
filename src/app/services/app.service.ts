import {Injectable} from '@angular/core';

// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  // private http: HttpClient
  constructor() {
  }

  loadedScriptsPage = false;
  isFoundCss: boolean;
  private toBeLoadedCss: string[];

  DynamicAssets = {
    for_upload_css: [
      '../assets/css/normalize.min.css',
    ]
  };

  loadScriptPage(dynamicScripts) {
    let isFound = false;
    const scripts = document.getElementsByTagName('script');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < scripts.length; ++i) {
      if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes('loader')) {
        isFound = true;
      }
    }
    if (!isFound) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < dynamicScripts.length; i++) {
        const node = document.createElement('script');
        node.src = dynamicScripts[i];
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementById('scripts_page').appendChild(node);
      }
    }
  }

  loadSome() {
    this.toBeLoadedCss = this.DynamicAssets.for_upload_css;
    this.isFoundCss = false;
    const css = document.getElementsByTagName('link');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < css.length; ++i) {
      // eslint-disable-next-line no-console
      if (css[i].getAttribute('href') != null && css[i].getAttribute('href').includes('loader')
      ) {
        this.isFoundCss = true;
      }
    }

    if (!this.isFoundCss) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.toBeLoadedCss.length; i++) {
        const node = document.createElement('link');
        node.href = this.toBeLoadedCss[i];
        node.rel = 'stylesheet';
        node.type = 'text/css';
        document.getElementById('scripts_page').appendChild(node);
      }
    }
    this.loadedScriptsPage = true;
  }
}
