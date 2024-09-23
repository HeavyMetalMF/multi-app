export class DateHelper {
  private _instance: DateHelper | null = null;
  constructor() {
  }

  public static Instance () {
    if (this._instance) {
      return this._instance;
    } else {
      this._instance = new DateHelper();
      return this._instance;
    }
  }

  public getCurrentDate () {
    return `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`
  }
}