export class DateHelper {
  private static _instance: DateHelper | null = null;
  constructor() {
  }

  static get Instance () {
    if (!DateHelper._instance) {
      DateHelper._instance = new DateHelper();
    }
    return DateHelper._instance;
  }

  public getCurrentDate () {
    return `${new Date().getDate()}.0${new Date().getMonth() + 1}.${new Date().getFullYear()}`
  }
}