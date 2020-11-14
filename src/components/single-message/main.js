import { Message } from "element-ui";

/**
 * 确保浏览器只有一个弹框
 * options 文档参考
 * https://element.eleme.cn/#/zh-CN/component/message
 */
const SingleMessage = function(options) {
  // success/warning/info/error
  // 判断是否已经弹框

  // 实现方式一：显示最开始的
  // if (document.getElementsByClassName("el-message").length === 0) {
  //   return Message(options);
  // }
  
  // 实现方式二：显示最后触发的
  Message.closeAll();
  return Message(options);
};

/**
 * 参考
 * https://github.com/ElemeFE/element/blob/dev/packages/message/src/main.js
 */
["success", "warning", "info", "error"].forEach(type => {
  SingleMessage[type] = options => {
    if (typeof options === "string") {
      options = {
        message: options
      };
    }
    options.type = type;
    return SingleMessage(options);
  };
});

export default SingleMessage;
