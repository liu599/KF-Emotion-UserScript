import * as utils from './utils';

export enum GroupType {ImageLink, Plain, Image}
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
  public txtBtn: string;
  public imageLink: string;
}

export class EmotionPlugin {
  // Specify an unique name to separate the app and others;
  public divPrefix: string;
  // App Instance
  public appInstance: HTMLElement;
  public menuInstance: HTMLElement;
  public stageInstance: HTMLElement;
  public targetInstance: HTMLTextAreaElement;
  // App UI Data
  public EmotionMenu: Array<EmotionMenu>;
  // App Style
  public EmotionStyles: CssStyles;
  constructor(name: string, data: Array<EmotionMenu>, css: CssStyles, targetTextarea: HTMLTextAreaElement) {
    this.targetInstance = targetTextarea;
    this.divPrefix = name;
    this.appInstance = document.createElement('div');
    this.appInstance.id = `${this.divPrefix}0000`;
    this.EmotionMenu = data;
    this.EmotionStyles = css;
    this.addStyles(css);
    this.addMenus();
    this.addStage();
    this.loadMenu(data);
    console.log(window.getComputedStyle(this.targetInstance, null).getPropertyValue('width'));
    this.stageInstance.style.width = window.getComputedStyle(this.targetInstance, null).getPropertyValue('width');
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
    stage.addEventListener('click', (e: Event) => this.addEmotions(e));
    this.appInstance.appendChild(stage);
    this.stageInstance = stage;
  }
  private addEmotions(e: Event) {
    console.log(e.target, e.target instanceof HTMLAnchorElement);
    const target = <HTMLElement>e.target;
    const scrollPos = this.targetInstance.scrollTop;
    let curValue = this.targetInstance.value;
    let caretPos = this.targetInstance.selectionStart;
    const front = curValue.substring(0, caretPos);
    const back = curValue.substring(this.targetInstance.selectionEnd, curValue.length);
    if (e.target instanceof HTMLAnchorElement) {
      this.targetInstance.value = front +  decodeURI(target.dataset.sign) + back;
      caretPos = caretPos + decodeURI(target.dataset.sign).length;
    }
    if (e.target instanceof HTMLImageElement) {
      if (e.target.dataset.link !== '') {
        this.targetInstance.value = front + `${e.target.dataset.link}` + back;
        caretPos = caretPos + 6;
      } else {
        this.targetInstance.value = front + `[img]${e.target.src}[/img]` + back;
        caretPos = caretPos + e.target.src.length + 11;
      }
    }
    this.targetInstance.selectionStart = caretPos;
    this.targetInstance.selectionEnd = caretPos;
    this.targetInstance.focus();
    this.targetInstance.scrollTop = scrollPos;
  }
  private loadMenu(item: Array<EmotionMenu>) {
    const ulContainer = document.createElement('ul');
    item.forEach((mi) => {
      const listItem = document.createElement('li');
      const clickItem = document.createElement('a');
      listItem.className = `${this.divPrefix}00001`;
      clickItem.title = mi.groupTitle;
      clickItem.dataset.loadtype = `${mi.groupType}`;
      clickItem.addEventListener('click', (e: Event) => this.expandMenu(e, mi, listItem.className));
      clickItem.innerHTML = `<span class="t">${mi.groupTitle}</span>`;
      listItem.appendChild(clickItem);
      ulContainer.appendChild(listItem);
    });
    this.menuInstance.appendChild(ulContainer);
  }
  private expandMenu(e: Event, menuItem: EmotionMenu, className: string) {
    this.clearStage();
    this.toggleStage(e, className);
    switch (menuItem.groupType) {
      case GroupType.Plain:
        console.log('plain', e.target);
        menuItem.groupEmotions.forEach((emotion) => {
          emotion.itemAddress.forEach((addr, idx) => {
            const plainTxtItem = document.createElement('a');
            plainTxtItem.className = 'txtBtnEmotion';
            plainTxtItem.setAttribute('data-sign', `${encodeURI(addr)}`);
            plainTxtItem.innerHTML = emotion.itemDescription.length > 0 ? emotion.itemDescription[idx] : addr;
            this.stageInstance.appendChild(plainTxtItem);
          });
        });
        break;
      case GroupType.ImageLink:
        console.log('imageLink');
        menuItem.groupEmotions.forEach((emotion) => {
          emotion.itemAddress.forEach((addr, idx) => {
            const imageItem = document.createElement('img');
            imageItem.src = addr;
            imageItem.dataset.link = emotion.itemDescription.length > 0 ? emotion.itemDescription[idx] : '';
            imageItem.className = 'Ems';
            this.stageInstance.appendChild(imageItem);
          });
        });
        break;
      default:
        console.log('default');
    }
  }
  private clearStage() {
    this.stageInstance.innerHTML = '';
  }
  private toggleStage(e: Event, className: string) {
    const listElems = document.querySelectorAll(`.${className}`);
    let target = <HTMLElement>e.target;
    if (target instanceof HTMLSpanElement) {
      target = target.parentElement;
    }
    if (target.className && target.className.includes('active')) {
      target.className = '';
    } else {
      listElems.forEach((elem) => {
        elem.querySelector('a').className = '';
      });
      target.className = 'active';
    }
    if (!target.className.includes('active') && this.stageInstance.style.display && this.stageInstance.style.display !== 'none') {
      this.stageInstance.style.display = 'none';
    } else {
      this.stageInstance.style.display = 'block';
    }
  }
}
