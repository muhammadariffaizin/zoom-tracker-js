class ZoomTracker {
  constructor(name = "ZoomTracker", delay = 3000) {
    this.name = name;
    this.delay = delay;
    this.timestamp = new Date();
    this.list_peserta = [];
    this.startTrack();
    this.updateListLocalStorage();
  }

  startTrack = () => {
    setInterval(() => {
      this.updateList();
      console.log(this.list_peserta.length);

      this.saveToLocalStorage(this.name);
    }, this.delay);
  };

  updateList = () => {
    const newList = this.getList();
    this.timestamp = new Date();

    for (let i = 0; i < newList.length; i++) {
      if (this.list_peserta.indexOf(newList[i]) === -1) {
        this.list_peserta.push(newList[i]);
      }
    }
    this.sortList();
  };

  getElement = () => {
    this.element = document.querySelectorAll(
      ".participants-item__display-name"
    );
  };

  getList = () => {
    let list = [];

    this.getElement();
    Array.from(this.element).forEach((item) => {
      list.push(item.innerText);
    });

    return list;
  };

  sortList = () => {
    this.list_peserta.sort();
  };

  getListString = () => {
    let list = "";

    this.sortList();
    list = this.list_peserta.join("\n");

    return list;
  };

  saveToLocalStorage = (key) => {
    localStorage.setItem(key, JSON.stringify(this.list_peserta));
  };

  getListLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key) || null);
  };

  updateListLocalStorage = () => {
    const lastList = this.getListLocalStorage(this.name);
    this.timestamp = new Date();

    for (let i = 0; i < lastList.length; i++) {
      if (this.list_peserta.indexOf(lastList[i]) === -1) {
        this.list_peserta.push(lastList[i]);
      }
    }
    this.sortList();
  };
}
