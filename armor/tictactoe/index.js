const _0x15c9d2=_0x623f;(function(_0xf60969,_0x2467ce){const _0x4c89ca=_0x623f,_0x187959=_0xf60969();while(!![]){try{const _0x58f029=-parseInt(_0x4c89ca(0x12f))/0x1*(parseInt(_0x4c89ca(0x126))/0x2)+-parseInt(_0x4c89ca(0x12e))/0x3*(parseInt(_0x4c89ca(0x12a))/0x4)+parseInt(_0x4c89ca(0x142))/0x5+-parseInt(_0x4c89ca(0x13c))/0x6+-parseInt(_0x4c89ca(0x133))/0x7*(parseInt(_0x4c89ca(0x136))/0x8)+parseInt(_0x4c89ca(0x122))/0x9*(parseInt(_0x4c89ca(0x132))/0xa)+parseInt(_0x4c89ca(0x13e))/0xb;if(_0x58f029===_0x2467ce)break;else _0x187959['push'](_0x187959['shift']());}catch(_0x3b7b06){_0x187959['push'](_0x187959['shift']());}}}(_0x2dd8,0xc4fd9));const fs=require('fs'),dbdir=_0x15c9d2(0x12d);function _0x2dd8(){const _0x1161ec=['589692HWuXMa','1OlWeJw','9️⃣','SERI','190obLqur','229999odHuRv','parse','winner','360HWhwre','length','./armor/tictactoe/db/','writeFileSync','.json','3️⃣','5065380ewNdKi','turn','25363954EPZvQo','1️⃣','isWin','2️⃣','887200uciHpd','exports','7️⃣','Titik\x20ini\x20telah\x20diisi\x20oleh\x20❌','697887takHFQ','push','8️⃣','6️⃣','1260678AigHmZ','5️⃣','_matrix','4️⃣','4yFhHiV','existsSync','nine_push','s0viet'];_0x2dd8=function(){return _0x1161ec;};return _0x2dd8();}function defineSave(_0x50e613,_0x34aaf0,_0x278eba){const _0xd657bc=_0x15c9d2;mine=_0x50e613;const _0x553250=_0xd657bc(0x138)+_0x278eba+_0xd657bc(0x13a);fs[_0xd657bc(0x139)](_0x553250,JSON['stringify'](_0x34aaf0,null,0x2));}function setGame(_0xf038e1){const _0x1631a7=_0x15c9d2,_0x72ab20=[],_0x73c785=_0x1631a7(0x138)+_0xf038e1+_0x1631a7(0x13a);if(!fs[_0x1631a7(0x12b)](_0x73c785)){_0x72ab20[0x0]=[_0x1631a7(0x13f),_0x1631a7(0x141),_0x1631a7(0x13b)],_0x72ab20[0x1]=[_0x1631a7(0x129),_0x1631a7(0x127),_0x1631a7(0x125)],_0x72ab20[0x2]=[_0x1631a7(0x120),_0x1631a7(0x124),_0x1631a7(0x130)];const _0x198731={'status':!![],'session':_0xf038e1,'turn':'X','X':null,'O':null,'isWin':![],'winner':null,'nine_push':[],'_matrix':_0x72ab20};return defineSave(_0x73c785,_0x198731,_0xf038e1),_0x198731;}else{const _0x2f45f6=JSON[_0x1631a7(0x134)](fs['readFileSync'](_0x73c785));return _0x2f45f6;}}function horizontal(_0xb31966){const _0x55f3be=_0x15c9d2;let _0x41d117=_0xb31966[_0x55f3be(0x137)];for(let _0x886413=0x0;_0x886413<_0x41d117;_0x886413++){let _0x857171=0x1,_0x2a4d1d=null;for(let _0x23a10f=0x0;_0x23a10f<_0x41d117;_0x23a10f++){let _0x456682=_0xb31966[_0x886413][_0x23a10f];if(null==_0x2a4d1d)_0x2a4d1d=_0x456682;else{if(_0x456682===_0x2a4d1d){_0x857171++;if(_0x857171>=_0x41d117)return _0x456682;}}}}return![];}function vertical(_0x105189){let _0x2a80d3=_0x105189['length'];for(let _0x1a8390=0x0;_0x1a8390<_0x2a80d3;_0x1a8390++){let _0x57fd6d=0x1,_0x125a75=null;for(let _0x17a0d4=0x0;_0x17a0d4<_0x2a80d3;_0x17a0d4++){let _0x1ac891=_0x105189[_0x17a0d4][_0x1a8390];if(null==_0x125a75)_0x125a75=_0x1ac891;else{if(_0x1ac891===_0x125a75){_0x57fd6d++;if(_0x57fd6d>=_0x2a80d3)return _0x1ac891;}}}}return![];}function diagonalLTR(_0x277388){const _0xe6a3ba=_0x15c9d2;let _0x4a03d6=_0x277388[_0xe6a3ba(0x137)],_0x1dd8ea=0x1,_0x1d1e51=null;for(let _0x313298=0x0;_0x313298<_0x4a03d6;_0x313298++){let _0x939e39=_0x313298,_0x3c9bd3=_0x277388[_0x313298][_0x939e39];if(null==_0x1d1e51)_0x1d1e51=_0x3c9bd3;else{if(_0x3c9bd3===_0x1d1e51){_0x1dd8ea++;if(_0x1dd8ea>=_0x4a03d6)return _0x3c9bd3;}}}return![];}function diagonalRTL(_0x5697b9){const _0x32c1e5=_0x15c9d2;let _0x5db295=_0x5697b9[_0x32c1e5(0x137)],_0xc7f204=0x1,_0x8edc3e=null;for(let _0x51afb3=0x0;_0x51afb3<_0x5db295;_0x51afb3++){let _0x1d4302=_0x5db295-0x1-_0x51afb3,_0x4ee165=_0x5697b9[_0x51afb3][_0x1d4302];if(null==_0x8edc3e)_0x8edc3e=_0x4ee165;else{if(_0x4ee165===_0x8edc3e){_0xc7f204++;if(_0xc7f204>=_0x5db295)return _0x4ee165;}}}return![];}function move(_0x3e0d71,_0x59fcbb,_0x234d5b){const _0x59ee4a=_0x15c9d2,_0x2c25d7=_0x234d5b,_0x1d552e=setGame(_0x2c25d7);if(_0x1d552e[_0x59ee4a(0x140)])return{'status':![],'message':'Game\x20telah\x20dimenangkan\x20oleh\x20'+_0x1d552e[_0x59ee4a(0x135)]};if(_0x1d552e[_0x59ee4a(0x128)][_0x3e0d71][_0x59fcbb]=='❌')return{'status':![],'message':_0x59ee4a(0x121)};if(_0x1d552e['_matrix'][_0x3e0d71][_0x59fcbb]=='⭕')return{'status':![],'message':'Titik\x20ini\x20telah\x20diisi\x20oleh\x20⭕'};if(_0x1d552e[_0x59ee4a(0x13d)]=='X')_0x1d552e[_0x59ee4a(0x128)][_0x3e0d71][_0x59fcbb]='❌',_0x1d552e[_0x59ee4a(0x12c)]['push']('❌'),_0x1d552e[_0x59ee4a(0x13d)]='O';else _0x1d552e[_0x59ee4a(0x13d)]=='O'&&(_0x1d552e[_0x59ee4a(0x128)][_0x3e0d71][_0x59fcbb]='⭕',_0x1d552e['nine_push'][_0x59ee4a(0x123)]('⭕'),_0x1d552e['turn']='X');defineSave(dbdir,_0x1d552e,_0x2c25d7);if(horizontal(setGame(_0x2c25d7)[_0x59ee4a(0x128)])=='❌'||horizontal(setGame(_0x2c25d7)[_0x59ee4a(0x128)])=='⭕')_0x1d552e[_0x59ee4a(0x140)]=!![],_0x1d552e['turn']=='X'?_0x1d552e['winner']='O':_0x1d552e[_0x59ee4a(0x135)]='X',defineSave(dbdir,_0x1d552e,_0x2c25d7);else{if(vertical(setGame(_0x2c25d7)[_0x59ee4a(0x128)])=='❌'||vertical(setGame(_0x2c25d7)['_matrix'])=='⭕')_0x1d552e[_0x59ee4a(0x140)]=!![],_0x1d552e['turn']=='X'?_0x1d552e[_0x59ee4a(0x135)]='O':_0x1d552e[_0x59ee4a(0x135)]='X',defineSave(dbdir,_0x1d552e,_0x2c25d7);else{if(diagonalLTR(setGame(_0x2c25d7)[_0x59ee4a(0x128)])=='❌'||diagonalLTR(setGame(_0x2c25d7)['_matrix'])=='⭕')_0x1d552e[_0x59ee4a(0x140)]=!![],_0x1d552e[_0x59ee4a(0x13d)]=='X'?_0x1d552e[_0x59ee4a(0x135)]='O':_0x1d552e[_0x59ee4a(0x135)]='X',defineSave(dbdir,_0x1d552e,_0x2c25d7);else{if(diagonalRTL(setGame(_0x2c25d7)[_0x59ee4a(0x128)])=='❌'||diagonalRTL(setGame(_0x2c25d7)[_0x59ee4a(0x128)])=='⭕')_0x1d552e[_0x59ee4a(0x140)]=!![],_0x1d552e[_0x59ee4a(0x13d)]=='X'?_0x1d552e['winner']='O':_0x1d552e[_0x59ee4a(0x135)]='X',defineSave(dbdir,_0x1d552e,_0x2c25d7);else _0x1d552e[_0x59ee4a(0x12c)][_0x59ee4a(0x137)]>=0x9&&(_0x1d552e[_0x59ee4a(0x140)]=!![],_0x1d552e['winner']=_0x59ee4a(0x131));}}}return defineSave(dbdir,_0x1d552e,_0x2c25d7),_0x1d552e;}function validmove(_0x4041cc,_0x802219){const _0x4a3b59=_0x802219;if(Number(_0x4041cc)==0x1)return move(0x0,0x0,_0x4a3b59);else{if(Number(_0x4041cc)==0x2)return move(0x0,0x1,_0x4a3b59);else{if(Number(_0x4041cc)==0x3)return move(0x0,0x2,_0x4a3b59);else{if(Number(_0x4041cc)==0x4)return move(0x1,0x0,_0x4a3b59);else{if(Number(_0x4041cc)==0x5)return move(0x1,0x1,_0x4a3b59);else{if(Number(_0x4041cc)==0x6)return move(0x1,0x2,_0x4a3b59);else{if(Number(_0x4041cc)==0x7)return move(0x2,0x0,_0x4a3b59);else{if(Number(_0x4041cc)==0x8)return move(0x2,0x1,_0x4a3b59);else return Number(_0x4041cc)==0x9?move(0x2,0x2,_0x4a3b59):![];}}}}}}}}function _0x623f(_0x53bad5,_0x108f3a){const _0x2dd882=_0x2dd8();return _0x623f=function(_0x623f80,_0x5a4a5c){_0x623f80=_0x623f80-0x120;let _0x3a7bae=_0x2dd882[_0x623f80];return _0x3a7bae;},_0x623f(_0x53bad5,_0x108f3a);}module[_0x15c9d2(0x143)]['setGame']=setGame,module['exports']['validmove']=validmove;