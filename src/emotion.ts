import * as utils from './utils';

export enum GroupType {ImageLink, Plain, Image};
export class EmotionMenuItem {
  public itemAddress: Array<string>;
  public itemDescription: Array<string>;
}
export class EmotionMenu {
  public groupType: GroupType;
  public groupTitle: string;
  public groupEmotions: Array<EmotionMenuItem>;
}
export class CssStyles {
  public mainView: string;
  public stageView: string;
  public menuView: string;
}

export class EmotionPlugin {
  // Specify an unique name to separate the app and others;
  public divPrefix: string;
  // App Instance
  public appInstance: HTMLElement;
  public menuInstance: HTMLElement;
  public stageInstance: HTMLElement;
  // App UI Data
  public EmotionMenu: Array<EmotionMenu>;
  // App Style
  public EmotionStyles: CssStyles;
  constructor(name: string, data: Array<EmotionMenu>, css: CssStyles) {
    this.divPrefix = name;
    this.appInstance = document.createElement('div');
    this.appInstance.id = `${this.divPrefix}0000`;
    this.EmotionMenu = data;
    this.EmotionStyles = css;
    this.addStyles(css);
    this.addMenus();
    this.addStage();
    this.loadMenu(data);
  }
  private addStyles(css:CssStyles) {
    const styleInstance = document.createElement('style');
    styleInstance.innerHTML = utils.join(css);
    this.appInstance.appendChild(styleInstance);
  }
  private addMenus() {
    const menu = document.createElement('div');
    menu.id = `${this.divPrefix}menu`;
    this.appInstance.appendChild(menu);
    this.menuInstance = menu;
  }
  private addStage() {
    const stage = document.createElement('div');
    stage.id = `${this.divPrefix}stage`;
    this.appInstance.appendChild(stage);
    this.stageInstance = stage;
  }
  private loadMenu(item: Array<EmotionMenu>) {
    const ulContainer = document.createElement('ul');
    item.forEach((mi, index) => {
      const listItem = document.createElement('li');
      const clickItem = document.createElement('a');
      listItem.className = `${this.divPrefix}00001`;
      clickItem.title = mi.groupTitle;
      clickItem.dataset.loadtype = `${mi.groupType}`;
      clickItem.addEventListener('click', (e: Event) => this.expandMenu(mi.groupType));
      clickItem.href = `#`;
      clickItem.innerHTML = `<span class="t">${mi.groupTitle}</span>`;
      console.log(clickItem);
      listItem.appendChild(clickItem);
      ulContainer.appendChild(listItem);
    });
    this.menuInstance.appendChild(ulContainer);
  }
  private expandMenu(gptype: GroupType) {
    switch (gptype) {
      case GroupType.Plain:
        console.log('plain');
        break;
      case GroupType.ImageLink:
        console.log('imageLink');
        break;
      default:
        console.log('default');
    }
  }
}
