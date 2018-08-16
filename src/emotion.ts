declare enum GroupType {ImageLink, Plain, Image};
declare class EmotionMenuListItem {
  public groupType: GroupType;
  public groupTitle: string;
  public itemAddress: Array<string>;
  public itemDescription: Array<string>;
}


export class EmotionPlugin {
  // Specify an unique name to separate the app and others;
  public divPrefix: string;
  // App Instance
  public appInstance: HTMLElement;
  // App UI Data
  public data: EmotionMenuListItem;
  constructor(name: string) {
    this.divPrefix = name;
    this.appInstance = document.createElement('div');
    this.appInstance.id = `${this.divPrefix}0000`;
    this.addMenus();
    this.addStage();
  }
  private addMenus() {
    const menu = document.createElement('div');
    menu.id = `${this.divPrefix}menu`;
    this.appInstance.appendChild(menu);
  }
  private addStage() {
    const stage = document.createElement('div');
    stage.id = `${this.divPrefix}stage`;
    this.appInstance.appendChild(stage);
  }
}
