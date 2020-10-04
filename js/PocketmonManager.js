export default class PocketmonManager {
  constructor() {
    this.pocketmon = [];
  }

  /*
    getPocketmonInfo function
    비동기 사용자에게 입력받은 value값에 해당하는 포켓몬 정보 return 
    @data   value : int 
    @return array
  */
  getPocketmonInfo = (value) =>
    new Promise((resolve, reject) => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${value}`).then((response) => {
        if (response.status >= 400) {
          if (response.status === 404) {
            alert("해당 ID에 해당하는 포켓몬이 없습니다");
            return false;
          } else {
            throw new Error("Failed to fetch data");
          }
        }
        this.pocketmon = response.json();
        resolve(this.pocketmon);
      });
    });

  /*
    updatePocketmon function
    사용자에게 입력받은 value값에 해당하는 포켓몬 정보 return 
    @data info : array
  */
  updatePocketmon = (info) => {
    const { sprites, name, height, weight } = info;
    let result = "";
    Object.keys(sprites).map((key) => {
      if (sprites[key] !== null && sprites[key].length > 0) {
        result += `<img src='${sprites[key]}' alt='${key}' />`;
      }
    });
    document.querySelector(".img_wrap").innerHTML = result;
    document.querySelector(".pocket_name").innerHTML = name;
    document.querySelector(".pocket_height").innerHTML = height;
    document.querySelector(".pocket_weight").innerHTML = weight;
  };

  /*
    handleSearch function
    유효성 검사 
    @data   value : int 
    @return boolean
  */
  handleSearch = (value) =>
    new Promise((resolve, reject) => {
      const chk_value = /^[0-9]+$/;
      if (value == 0) {
        alert("다른 번호를 입력해주세요");
        return false;
      } else if (value.length < 1) {
        alert("ID 번호를 입력해주세요");
        return false;
      } else if (!chk_value.test(value)) {
        alert("숫자만 입력해주세요");
        return false;
      }
      resolve(true);
    });
}
