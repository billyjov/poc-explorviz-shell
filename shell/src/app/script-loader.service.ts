import { Injectable } from '@angular/core';

// REF: https://stackoverflow.com/a/42593976/6432698
interface Scripts {
  name: string;
  src: string;
}
export const ScriptStore: Scripts[] = [
  { name: 'ember-app-list', src: 'assets/all/ember-app.js' },
  { name: 'ember-app-landscapes', src: 'assets/all/landscape.js' },
  { name: 'ember-placeholder-vendor', src: 'assets/all/placeholder.js' },
  { name: 'ember-app-vendor', src: 'assets/ember-app/ember-app-vendor.js' },
  { name: 'landscapes-vendor', src: 'assets/landscapes/landscapes-vendor.js' },
];

@Injectable({
  providedIn: 'root',
})
export class ScriptLoaderService {
  private scripts: any = {};

  constructor() {
    ScriptStore.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src,
      };
    });
  }

  public load(isBottom?: boolean, ...scripts: string[]): Promise<unknown[]> {
    var promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadScript(script, isBottom)));
    return Promise.all(promises);
  }

  public isLoaded(name: string): boolean {
    return this.scripts[name].loaded;
  }

  public replaceScript(oldName: string, newName: string): void {
    const elem = document.getElementById(oldName) as any;
    if (!!elem) {
      console.log('got element: ', elem);
      console.log('got elem src: ', elem?.src);
      elem.src = this.scripts[newName]?.src;
      elem.id = newName;
      // return this.scripts[oldName]
    }
  }

  public loadScript(name: string, isBottom?: boolean): Promise<unknown> {
    return new Promise((resolve, reject) => {
      //resolve if already loaded
      // if (this.scripts[name]?.loaded) {
      //   console.log(`not load ${name} again`)
      //   resolve({ script: name, loaded: true, status: 'Already Loaded' });
      // } else {
      //load script
      let script = document.createElement('script') as any;
      script.type = 'text/javascript';
      script.id = name;
      script.src = this.scripts[name].src;
      if (script.readyState) {
        //IE
        script.onreadystatechange = () => {
          if (
            script.readyState === 'loaded' ||
            script.readyState === 'complete'
          ) {
            script.onreadystatechange = null;
            this.scripts[name].loaded = true;
            resolve({ script: name, loaded: true, status: 'Loaded' });
          }
        };
      } else {
        //Others
        script.onload = () => {
          this.scripts[name].loaded = true;
          resolve({ script: name, loaded: true, status: 'Loaded' });
        };
      }
      script.onerror = (error: any) =>
        resolve({ script: name, loaded: false, status: 'Loaded' });
      if (isBottom) {
        document.body.appendChild(script);
      } else {
        document.getElementsByTagName('head')[0].appendChild(script);
      }
      // }
    });
  }
}
