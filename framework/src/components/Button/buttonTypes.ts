

class ButtonAllProps {

  // 定义size
  buttonSizes: string[] = ["small", "default", "large"];
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

}

export default ButtonAllProps
