import * as utils from './utils';


export enum GroupType {ImageLink, Plain, Image, User}
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
  public popUp: string;
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
  // Popup
  public Popup: HTMLElement;
  // App Style
  public EmotionStyles: CssStyles;
  constructor(name: string, data: Array<EmotionMenu>, css: CssStyles, targetTextarea: HTMLTextAreaElement) {
    this.targetInstance = targetTextarea;
    this.divPrefix = name;
    this.appInstance = document.createElement('div');
    this.Popup = document.createElement('div');
    this.Popup.id = `${this.divPrefix}ppp`;
    this.Popup.innerHTML = `<div style="display: block; width: 100%; padding: 10px;"><h3>每个表情一行</h3><textarea id="eddie32pqp" style="overflow-x: auto; width: 90%;"></textarea><div><button id="${this.divPrefix}ppp1">确认</button><button id="${this.divPrefix}ppp2">取消</button></div>`;
    this.appInstance.id = `${this.divPrefix}0000`;
    this.appInstance.appendChild(this.Popup);
    this.EmotionMenu = data;
    this.EmotionStyles = css;
    this.loadMenus();
    this.loadMenuData(data);
    this.loadStage();
    this.loadStyles(css);

    // console.log(window.getComputedStyle(this.targetInstance, null).getPropertyValue('width'));
    this.stageInstance.style.width = window.getComputedStyle(this.targetInstance, null).getPropertyValue('width');
  }
  private loadStyles(css:CssStyles) {
    const styleInstance = document.createElement('style');
    styleInstance.innerHTML = utils.join(css);
    this.appInstance.appendChild(styleInstance);
  }
  private loadMenus() {
    const menu = document.createElement('div');
    menu.id = `${this.divPrefix}menu`;
    this.appInstance.appendChild(menu);
    this.menuInstance = menu;
  }
  private loadStage() {
    const stage = document.createElement('div');
    stage.id = `${this.divPrefix}stage`;
    stage.addEventListener('click', (e: Event) => this.stageEmitter(e));
    this.appInstance.appendChild(stage);
    this.stageInstance = stage;
  }
  private stageEmitter(e: Event) {
    const target = <HTMLElement>e.target;
    const scrollPos = this.targetInstance.scrollTop;
    let curValue = this.targetInstance.value;
    let caretPos = this.targetInstance.selectionStart;
    const front = curValue.substring(0, caretPos);
    const back = curValue.substring(this.targetInstance.selectionEnd, curValue.length);
    if (e.target instanceof HTMLSpanElement) {
      console.log('span element');
      if (e.target.id === `${this.divPrefix}add`) {
        this.addUserDefinedEmotions(e);
      }
      if (e.target.id === `${this.divPrefix}delete`) {
        this.deleteUserDefinedEmotions();
      }
    }
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
  private loadMenuData(item: Array<EmotionMenu>) {
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
      case GroupType.User:
        console.log('user');
        const addBtn = document.createElement('span');
        addBtn.innerHTML = ' [增加表情] ';
        addBtn.id = `${this.divPrefix}add`;
        addBtn.addEventListener('click', (et: Event) => this.toggleInputWindow(et));
        this.stageInstance.appendChild(addBtn);
        const deleteBtn = document.createElement('span');
        deleteBtn.innerHTML = ' [(功能未开发)] ';
        deleteBtn.id = `${this.divPrefix}btn`;
        this.stageInstance.appendChild(deleteBtn);
        const clearBtn = document.createElement('span');
        clearBtn.innerHTML = ' [清空表情] ';
        clearBtn.id = `${this.divPrefix}clear`;
        clearBtn.addEventListener('click', this.clearUserDefinedEmotions.bind(this));
        this.stageInstance.appendChild(clearBtn);
        this.loadUserDefinedEmotions();
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
  private toggleInputWindow(e: Event) {
    e.stopPropagation();
    e.preventDefault();
    let confirmBtn = document.getElementById(`${this.divPrefix}ppp1`);
    let cBclone = confirmBtn.cloneNode(true);
    cBclone.addEventListener('click', (e1: Event) => this.addUserDefinedEmotions(e1));
    confirmBtn.parentNode.replaceChild(cBclone, confirmBtn);
    let cancelBtn = document.getElementById(`${this.divPrefix}ppp2`);
    let cCclone = cancelBtn.cloneNode(true);
    cCclone.addEventListener('click', (e2: Event) => this.toggleInputWindow(e2));
    cancelBtn.parentNode.replaceChild(cCclone, cancelBtn);
    this.closeWindow();
  }
  private closeWindow() {
    let wm = document.getElementById(`${this.divPrefix}ppp`);
    console.log(wm.style.display);
    if (wm.style.display && wm.style.display !== 'none') {
      wm.style.display = 'none';
    } else {
      wm.style.display = 'block';
      this.loadUserDefinedEmotions();
    }
  }
  private addUserDefinedEmotions(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    let tra = <HTMLTextAreaElement> document.getElementById(`${this.divPrefix}pqp`);
    console.log(tra.value, 'dasfsdd');
    utils.addEmotions(tra.value.split('\n'));
    tra.value = '';
    this.closeWindow();
    return;
  }
  private deleteUserDefinedEmotions() {
    return;
  }
  private loadUserDefinedEmotions() {
    let contents = utils.readEmotions(`${this.divPrefix}`);
    let outerContainer = document.querySelector(`#${this.divPrefix}outer`);
    if (outerContainer) {
      document.querySelector(`#${this.divPrefix}outer`).innerHTML = '';
    } else {
      outerContainer = document.createElement('div');
      outerContainer.id = `${this.divPrefix}outer`;
    }
    contents.forEach((elem) => {
      outerContainer.appendChild(elem);
    });
    this.stageInstance.appendChild(outerContainer);
  }
  private clearUserDefinedEmotions() {
    if (window.confirm('Clear ALL Emotion Caches?')) {
      for (let i = 0; i < window.localStorage.length; i += 1) {
        let key = window.localStorage.key(i);
        if (key.includes(`${this.divPrefix}`)) {
          window.localStorage.removeItem(key);
        }
      }
      this.loadUserDefinedEmotions();
    }
  }
}
