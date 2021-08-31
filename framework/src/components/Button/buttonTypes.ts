

class HandleButtonClass {

  type;
  size;
  shape;
  commonClass = "btn";

  constructor(props: any) {
    this.type = props.type;
    this.size = props.size;
    this.shape = props.shape;
  }

  // 定义size
  buttonSizes: string[] = ["small", "medium", "large"];
  // 定义基本类型
  buttonTypes: string[] = ["link","default", "href", "dashed", "primary", "warning"];
  // 定义外观类型
  buttonShapes: string[] = ["circle", "round"];

  getButtonSizes() {
    return this.buttonSizes;
  }
  getButtonTypes() {
    return this.buttonTypes
  }
  getButtonShapes() {
    return this.buttonShapes
  }
  getType () {
    if (!this.type) {
      return "default"
    }
    if (this.type) {
      if (this.buttonTypes.indexOf(this.type) === -1) {
        console.log("请输入正确的的按钮类型");
        return "default";
      }
    }
    return this.buttonTypes.find(v => v === this.type);
  }
  getSize () {
    if (!this.size) {
      return "";
    }
    if (this.size) {
      if (this.buttonSizes.indexOf(this.size) === -1) {
        console.log("请输入正确的的按钮尺寸关键字");
        return "btn";
      }
      const currentSize = this.buttonSizes.find(v => v === this.size);
      if (currentSize === "small") {
        return "sm"
      }
      if (currentSize === "large") {
        return "lg"
      }
    }
  }
  makeALlClasses () {
    let classes = "";
    let typeClass = this.commonClass + "-" + this.type;
    let sizeClass = this.commonClass + "-" + this.getSize();
    classes = this.commonClass + this.addBank(typeClass) + this.addBank(sizeClass);
    return classes;
  }
  addBank(item: string) {
    return " " + item;
  }

}
export default HandleButtonClass
