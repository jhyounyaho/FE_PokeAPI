import PocketmonManager from "./PocketmonManager.js";

export default class Pocketmon {
  constructor() {
    this.bindSearchEvent();
    this.pocketmonManger = new PocketmonManager();
  }

  /*
    bindSearchEvent function 
    조회 버튼 클릭 이벤트 (유효성 체크)
  */
  bindSearchEvent() {
    $(".btn_search").click((e) => {
      const search = document.querySelector(".input_search").value;
      this.pocketmonManger
        .handleSearch(search)
        .then(() => {
          this.getPocketmon(search);
        })
        .catch((error) => {
          console.log("error ", error);
        });
    });
  }

  /*
    getPocketmon function
    포켓몬 정보 가져오는 함수
    @data   value : int 
  */
  getPocketmon = (value) => {
    this.pocketmonManger
      .getPocketmonInfo(value)
      .then((info) => {
        this.pocketmonManger.updatePocketmon(info);
      })
      .catch((error) => {
        console.log("error ", error);
      });
  };
}
