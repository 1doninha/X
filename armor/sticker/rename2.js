function _0x4c9d(){const _0x2e559c=['author','alloc','../funcoes/functions.js','10147952EsjQNZ','6904716fRGTso','2379390SaRCWs','5xZHodW','fs-extra','3615666LXKeBx','./exif2','exports','75807GhXEQy','readFileSync','971504siwkQs','isBuffer','sendMessage','existsSync','567358MGUUmV','test','from','base64','split','packname'];_0x4c9d=function(){return _0x2e559c;};return _0x4c9d();}function _0x3d51(_0x53ee20,_0x1e7545){const _0x4c9d7c=_0x4c9d();return _0x3d51=function(_0x3d5161,_0x53a71a){_0x3d5161=_0x3d5161-0x93;let _0x439f65=_0x4c9d7c[_0x3d5161];return _0x439f65;},_0x3d51(_0x53ee20,_0x1e7545);}const _0x3ccf14=_0x3d51;(function(_0x5039d5,_0xc4461a){const _0x554682=_0x3d51,_0x3cca86=_0x5039d5();while(!![]){try{const _0x304b56=parseInt(_0x554682(0xa0))/0x1+-parseInt(_0x554682(0xa6))/0x2+parseInt(_0x554682(0x9a))/0x3+parseInt(_0x554682(0xa2))/0x4*(parseInt(_0x554682(0x9b))/0x5)+-parseInt(_0x554682(0x9d))/0x6+-parseInt(_0x554682(0x99))/0x7+parseInt(_0x554682(0x98))/0x8;if(_0x304b56===_0xc4461a)break;else _0x3cca86['push'](_0x3cca86['shift']());}catch(_0x3c0aa8){_0x3cca86['push'](_0x3cca86['shift']());}}}(_0x4c9d,0x7beed));const fs=require(_0x3ccf14(0x9c)),{imageToWebp2,videoToWebp2,writeExifImg2,writeExifVid2}=require(_0x3ccf14(0x9e)),{getBuffer}=require(_0x3ccf14(0x97)),sendImageAsSticker2=async(_0x3bd577,_0xd767e0,_0x11850b,_0x3d6720,_0x43518b={})=>{const _0x401070=_0x3ccf14;let _0x318fb7=Buffer[_0x401070(0xa3)](_0x11850b)?_0x11850b:/^data:.*?\/.*?;base64,/i['test'](_0x11850b)?Buffer[_0x401070(0xa8)](_0x11850b['split']`,`[0x1],'base64'):/^https?:\/\//[_0x401070(0xa7)](_0x11850b)?await await getBuffer(_0x11850b):fs['existsSync'](_0x11850b)?fs[_0x401070(0xa1)](_0x11850b):Buffer[_0x401070(0x96)](0x0),_0xbd625c;return _0x43518b&&(_0x43518b[_0x401070(0x94)]||_0x43518b[_0x401070(0x95)])?_0xbd625c=await writeExifImg2(_0x318fb7,_0x43518b):_0xbd625c=await imageToWebp2(_0x318fb7),await _0x3bd577['sendMessage'](_0xd767e0,{'sticker':{'url':_0xbd625c},..._0x43518b},{'quoted':_0x3d6720}),_0xbd625c;},sendVideoAsSticker2=async(_0x4fcb2b,_0x4f99a2,_0x3f437d,_0x8bc24b,_0x32e90b={})=>{const _0x92c2c2=_0x3ccf14;let _0x82fff5=Buffer[_0x92c2c2(0xa3)](_0x3f437d)?_0x3f437d:/^data:.*?\/.*?;base64,/i['test'](_0x3f437d)?Buffer[_0x92c2c2(0xa8)](_0x3f437d[_0x92c2c2(0x93)]`,`[0x1],_0x92c2c2(0xa9)):/^https?:\/\//['test'](_0x3f437d)?await await getBuffer(_0x3f437d):fs[_0x92c2c2(0xa5)](_0x3f437d)?fs[_0x92c2c2(0xa1)](_0x3f437d):Buffer[_0x92c2c2(0x96)](0x0),_0x5b5452;return _0x32e90b&&(_0x32e90b[_0x92c2c2(0x94)]||_0x32e90b['author'])?_0x5b5452=await writeExifVid2(_0x82fff5,_0x32e90b):_0x5b5452=await videoToWebp2(_0x82fff5),await _0x4fcb2b[_0x92c2c2(0xa4)](_0x4f99a2,{'sticker':{'url':_0x5b5452},..._0x32e90b},{'quoted':_0x8bc24b}),_0x5b5452;};module[_0x3ccf14(0x9f)]={'sendVideoAsSticker2':sendVideoAsSticker2,'sendImageAsSticker2':sendImageAsSticker2};