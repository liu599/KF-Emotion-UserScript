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

export class EmotionPlugin {
  // Specify an unique name to separate the app and others;
  public divPrefix: string;
  // App Instance
  public appInstance: HTMLElement;
  public menuInstance: HTMLElement;
  public stageInstance: HTMLElement;
  // App UI Data
  public EmotionMenu: EmotionMenuItem;
  constructor(name: string, data: Array<EmotionMenu>) {
    this.divPrefix = name;
    this.appInstance = document.createElement('div');
    this.appInstance.id = `${this.divPrefix}0000`;
    this.addMenus();
    this.addStage();
    this.loadMenu(data);
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
      listItem.innerHTML = `<a title="${mi.groupTitle}" data-loadtype="${mi.groupType}" class="subMenu"><span class="t">${mi.groupTitle}</span></a>`;
      ulContainer.appendChild(listItem);
    });
    this.appInstance.appendChild(ulContainer);
  }
  private expandMenu(gptype: GroupType) {
    switch (gptype) {
      if (gptype === GroupType.Plain) {
        console.log('plain');
      } else if (gptype === GroupType.ImageLink) {
        console.log('imageLink');
      }
    }
  }
}
