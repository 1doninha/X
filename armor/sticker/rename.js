const _0x39b67c=_0x5b94;(function(_0x5020d0,_0x338be5){const _0x4552b9=_0x5b94,_0x209c03=_0x5020d0();while(!![]){try{const _0x70604b=-parseInt(_0x4552b9(0x1e4))/0x1+-parseInt(_0x4552b9(0x1e7))/0x2*(parseInt(_0x4552b9(0x1ee))/0x3)+-parseInt(_0x4552b9(0x1e2))/0x4*(-parseInt(_0x4552b9(0x1e5))/0x5)+parseInt(_0x4552b9(0x1dd))/0x6+parseInt(_0x4552b9(0x1ea))/0x7*(parseInt(_0x4552b9(0x1e3))/0x8)+parseInt(_0x4552b9(0x1da))/0x9*(parseInt(_0x4552b9(0x1db))/0xa)+-parseInt(_0x4552b9(0x1d9))/0xb*(parseInt(_0x4552b9(0x1e8))/0xc);if(_0x70604b===_0x338be5)break;else _0x209c03['push'](_0x209c03['shift']());}catch(_0x11b4f4){_0x209c03['push'](_0x209c03['shift']());}}}(_0x55f8,0x2e537));function _0x55f8(){const _0x4d6b65=['split','537144WoABdS','4596eLhydg','fs-extra','301IHOUhw','from','sendMessage','readFileSync','3yxFjll','alloc','./exif','author','2959VntUBT','27YeLrdk','1189160UjgJmZ','isBuffer','1007826TUcBdx','exports','base64','test','existsSync','9308rxdnlb','22160EaLRnq','322160XQeLSA','515FBIPaN'];_0x55f8=function(){return _0x4d6b65;};return _0x55f8();}function _0x5b94(_0x42f4fc,_0x171919){const _0x55f840=_0x55f8();return _0x5b94=function(_0x5b94b9,_0x2543d8){_0x5b94b9=_0x5b94b9-0x1d6;let _0x175df4=_0x55f840[_0x5b94b9];return _0x175df4;},_0x5b94(_0x42f4fc,_0x171919);}const fs=require(_0x39b67c(0x1e9)),{imageToWebp,videoToWebp,writeExifImg,writeExifVid}=require(_0x39b67c(0x1d7)),{getBuffer}=require('../funcoes/functions.js'),sendImageAsSticker=async(_0x51f497,_0x5db062,_0x658d8b,_0x1eacdc,_0x5bb1bd={})=>{const _0x6e5747=_0x39b67c;let _0x171e6c=Buffer[_0x6e5747(0x1dc)](_0x658d8b)?_0x658d8b:/^data:.*?\/.*?;base64,/i[_0x6e5747(0x1e0)](_0x658d8b)?Buffer[_0x6e5747(0x1eb)](_0x658d8b[_0x6e5747(0x1e6)]`,`[0x1],_0x6e5747(0x1df)):/^https?:\/\//[_0x6e5747(0x1e0)](_0x658d8b)?await await getBuffer(_0x658d8b):fs[_0x6e5747(0x1e1)](_0x658d8b)?fs[_0x6e5747(0x1ed)](_0x658d8b):Buffer[_0x6e5747(0x1d6)](0x0),_0x42ddbd;return _0x5bb1bd&&(_0x5bb1bd['packname']||_0x5bb1bd['author'])?_0x42ddbd=await writeExifImg(_0x171e6c,_0x5bb1bd):_0x42ddbd=await imageToWebp(_0x171e6c),await _0x51f497[_0x6e5747(0x1ec)](_0x5db062,{'sticker':{'url':_0x42ddbd},..._0x5bb1bd},{'quoted':_0x1eacdc}),_0x42ddbd;},sendVideoAsSticker=async(_0x3fa8e6,_0x5ee6f6,_0x2305d8,_0x3e4b29,_0x573f88={})=>{const _0xccb343=_0x39b67c;let _0x3e6bb4=Buffer[_0xccb343(0x1dc)](_0x2305d8)?_0x2305d8:/^data:.*?\/.*?;base64,/i[_0xccb343(0x1e0)](_0x2305d8)?Buffer['from'](_0x2305d8['split']`,`[0x1],_0xccb343(0x1df)):/^https?:\/\//['test'](_0x2305d8)?await await getBuffer(_0x2305d8):fs[_0xccb343(0x1e1)](_0x2305d8)?fs[_0xccb343(0x1ed)](_0x2305d8):Buffer['alloc'](0x0),_0x2a101b;return _0x573f88&&(_0x573f88['packname']||_0x573f88[_0xccb343(0x1d8)])?_0x2a101b=await writeExifVid(_0x3e6bb4,_0x573f88):_0x2a101b=await videoToWebp(_0x3e6bb4),await _0x3fa8e6[_0xccb343(0x1ec)](_0x5ee6f6,{'sticker':{'url':_0x2a101b},..._0x573f88},{'quoted':_0x3e4b29}),_0x2a101b;};module[_0x39b67c(0x1de)]={'sendVideoAsSticker':sendVideoAsSticker,'sendImageAsSticker':sendImageAsSticker};