const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/browserAll-QK5P-mZk.js","assets/webworkerAll-BND_8MSO.js","assets/Filter-i3DDERxT.js","assets/react-vant-vendor-CRRiVf61.js","assets/react-router-dom-C-QBo9cq.js","assets/react-vendor-B-L1TqNG.js","assets/react-dom-CpDm7AEs.js","assets/react-vant-icons-CQ0MNA1Z.js","assets/react-vant-vendor-DDb0_RQB.css","assets/index-BGknxuQs.js","assets/redux-toolkit-vendor-Bio0YFct.js","assets/index-oZ6LjVcR.js","assets/crypto-vendor-BKx5uaI1.js","assets/axios-CR0RoyP0.js","assets/lottie-vendor-DbiYowic.js","assets/lottie-web-CO3dkYM0.js","assets/i18n-vendor-BHROooX1.js","assets/types-BPEl8wo7.js","assets/other-vendor-BbzZILQo.js","assets/tg-8NV0JLxF.js","assets/lodash-WAoKiWwl.js","assets/twa-vendor-P0yESWbE.js","assets/fingerprint-vendor-CeybpST7.js","assets/sentry-react-BVdIPApC.js","assets/sentry-core-BkkcUy2C.js","assets/mixpanel-vendor-DjLcEgZF.js","assets/translate-copywrite-vendor-DrN5mn8v.js","assets/index-C7U6j8HK.css","assets/WebGPURenderer-AWvpxlIE.js","assets/BufferResource-CfvddsKP.js","assets/RenderTargetSystem-CJWIkTxn.js","assets/WebGLRenderer-CGBljOCr.js","assets/CanvasRenderer-BMNmWBZP.js","assets/BitmapFont-DBF-U3qq.js"])))=>i.map(i=>d[i]);
var Ae=Object.defineProperty;var Te=(A,_,C)=>_ in A?Ae(A,_,{enumerable:!0,configurable:!0,writable:!0,value:C}):A[_]=C;var pt=(A,_,C)=>Te(A,typeof _!="symbol"?_+"":_,C);import{j as jsxRuntimeExports}from"./react-vant-vendor-CRRiVf61.js";import{r as reactExports,k as useParams}from"./react-router-dom-C-QBo9cq.js";import{c as commonjsGlobal,g as getDefaultExportFromCjs}from"./react-vendor-B-L1TqNG.js";import{s as store,cX as __vitePreload}from"./index-BGknxuQs.js";(function(){try{var A=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_=new A.Error().stack;_&&(A._sentryDebugIds=A._sentryDebugIds||{},A._sentryDebugIds[_]="bfbe3c3b-502e-4abb-8c88-2c75d1c0e67c",A._sentryDebugIdIdentifier="sentry-dbid-bfbe3c3b-502e-4abb-8c88-2c75d1c0e67c")}catch{}})();var ActionType=(A=>(A[A.Check=1]="Check",A[A.Fold=2]="Fold",A[A.Call=3]="Call",A[A.Raise=4]="Raise",A[A.AllIn=5]="AllIn",A))(ActionType||{}),SeatStatus=(A=>(A.Empty="empty",A.Waiting="waiting",A.Playing="playing",A.Folded="folded",A.AllIn="allin",A.SitOut="sitout",A))(SeatStatus||{}),BettingRound=(A=>(A[A.Preflop=0]="Preflop",A[A.Flop=1]="Flop",A[A.Turn=2]="Turn",A[A.River=3]="River",A))(BettingRound||{});function card$1(A,_){return A*16+_}function buildSampleState(A="demo-1"){return{roomId:A,gameType:1,maxSeats:9,round:BettingRound.Flop,communityCards:[card$1(4,14),card$1(3,13),card$1(2,7)],pots:[{index:0,amount:1850}],seats:[{seatNo:0,playerId:100,name:"你",chips:12e3,betThisRound:200,holeCards:[card$1(1,14),card$1(1,13)],status:SeatStatus.Playing,isHero:!0,countdownMs:12e3,countdownTotalMs:15e3},{seatNo:1,playerId:101,name:"Alice",chips:8600,betThisRound:200,holeCards:[0,0],status:SeatStatus.Playing},{seatNo:2,status:SeatStatus.Empty},{seatNo:3,playerId:103,name:"Bob",chips:4300,betThisRound:0,holeCards:[0,0],status:SeatStatus.Folded,isButton:!0},{seatNo:4,status:SeatStatus.Empty},{seatNo:5,playerId:105,name:"Carol",chips:22e3,betThisRound:600,holeCards:[0,0],status:SeatStatus.AllIn},{seatNo:6,status:SeatStatus.Empty},{seatNo:7,playerId:107,name:"Dave",chips:150,betThisRound:0,holeCards:[0,0],status:SeatStatus.Playing},{seatNo:8,status:SeatStatus.Empty}],actionSeatNo:0,smallBlind:100,bigBlind:200}}class SampleBridge{constructor(_){pt(this,"view",null);pt(this,"timer",null);pt(this,"step",0);this.roomId=_}attach(_){this.view=_,_.on("userCommand",C=>this.handleCommand(C)),_.sync(buildSampleState(this.roomId)),this.timer=setInterval(()=>this.tick(),2200)}tick(){if(!this.view)return;switch(this.step%5){case 0:this.view.play({type:"playerBet",seatNo:1,actType:ActionType.Call,amount:200});break;case 1:this.view.play({type:"dealCommunity",cards:[card(1,9)],fromIndex:3});break;case 2:this.view.play({type:"floatText",seatNo:5,text:"All-in"});break;case 3:this.view.play({type:"dealCommunity",cards:[card(2,4)],fromIndex:4});break;case 4:this.view.play({type:"gameResult",winners:[{seatNo:0,win:1850}]}),this.view.sync(buildSampleState(this.roomId));break}this.step++}handleCommand(_){console.info("[SampleBridge] userCommand",_)}detach(){this.timer&&clearInterval(this.timer),this.timer=null,this.view=null}}class WsTableBridge{constructor(_,C){pt(this,"view",null);pt(this,"unsubscribe",null);this.transport=_,this.roomId=C}attach(_){var C,T;this.view=_,_.on("userCommand",R=>this.sendCommand(R)),(T=(C=this.transport).connect)==null||T.call(C),this.unsubscribe=this.transport.subscribe((R,P)=>this.onMessage(R,P)),this.transport.send("texas.MsgEnterRoom",{room_id:Number(this.roomId)||0,enter_type:4,switch_out_pre:!0})}sendCommand(_){switch(_.type){case"playerAction":this.transport.send("texas.MsgPlayerAction",{act_type:_.actType,value:_.amount,round:_.round,room_id:Number(this.roomId)||0});break;case"sitDown":this.transport.send("texas.MsgEnterRoom",{room_id:Number(this.roomId)||0,chair_id:_.seatNo});break;case"buyIn":this.transport.send("texas.MsgQueryChip",{room_id:Number(this.roomId)||0,chip:_.amount});break;case"leave":this.transport.send("texas.MsgLeaveRoom",{room_id:Number(this.roomId)||0});break;case"buyInsurance":this.transport.send("texas.MsgPlayerBuyInsurance",{room_id:Number(this.roomId)||0,value:_.amount});break;case"openHandCard":this.transport.send("texas.MsgOpenHandCard",{room_id:Number(this.roomId)||0,indexes:_.cardIndexes??[]});break;case"preAction":this.transport.send("texas.MsgPreOpration",{room_id:Number(this.roomId)||0,act_type:_.actType,value:_.amount??0});break}}onMessage(_,C){this.view&&console.info("[WsTableBridge] <=",_,C)}detach(){var _,C,T;(_=this.unsubscribe)==null||_.call(this),this.unsubscribe=null,(T=(C=this.transport).close)==null||T.call(C),this.view=null}}function card(A,_){return A*16+_}let table=null;function buildTable(){const A=new Uint32Array(256);for(let _=0;_<256;_++){let C=_;for(let T=0;T<8;T++)C=C&1?3988292384^C>>>1:C>>>1;A[_]=C>>>0}return A}function crc32(A){table||(table=buildTable());const _=new TextEncoder().encode(A);let C=4294967295;for(let T=0;T<_.length;T++)C=(table[(C^_[T])&255]^C>>>8)>>>0;return(C^4294967295)>>>0}const idCache=new Map;function protoIdOf(A){let _=idCache.get(A);return _===void 0&&(_=crc32(A),idCache.set(A,_)),_}function encodeUplink(A,_,C){const T=new ArrayBuffer(10+C.length),R=new DataView(T);return R.setUint16(0,8+C.length,!1),R.setUint32(2,A>>>0,!1),R.setUint32(6,_>>>0,!1),new Uint8Array(T,10).set(C),T}class FrameDecoder{constructor(){pt(this,"buf",new Uint8Array(0))}push(_){const C=_ instanceof Uint8Array?_:new Uint8Array(_),T=new Uint8Array(this.buf.length+C.length);T.set(this.buf),T.set(C,this.buf.length),this.buf=T;const R=[];let P=0;for(;this.buf.length-P>=4;){const I=new DataView(this.buf.buffer,this.buf.byteOffset+P),B=4+I.getUint32(0,!1);if(this.buf.length-P<B)break;const O=I.getUint32(4,!1),G=I.getUint32(8,!1),L=this.buf.slice(P+12,P+B);R.push({session:O,protoId:G,body:L}),P+=B}return this.buf=P>0?this.buf.slice(P):this.buf,R}reset(){this.buf=new Uint8Array(0)}}const __vite_glob_0_0=`syntax = "proto2";\r
package chat;\r
\r
// 聊天信息\r
message MsgChatInfoCast\r
{\r
    optional uint32 type = 1;               // 聊天类型（1=俱乐部聊天，2=牌局聊天，3=私聊）\r
    optional uint64 typeID = 2;             // 俱乐部ID，牌局ID，根据聊天类型判定）\r
    optional uint64 toUserID = 9;           // 私聊对方ID，根据聊天类型判定\r
    optional uint64 userID = 3;             // 发送者ID\r
    optional string icon = 4;               // 头像\r
    optional uint32 vipLv = 5;              // vip等级\r
    optional string nickname = 6;           // 昵称\r
    optional string content = 7;            // 聊天内容\r
    optional uint32 time = 8;               // 时间\r
}\r
\r
//\r
// 发送聊天\r
//\r
message MsgChat 	\r
{ \r
    optional uint32 type = 1;                   // 聊天类型（1=俱乐部聊天，2=牌局聊天，3=私聊）\r
    optional uint64 typeID = 2;                 // 俱乐部ID，牌局ID，根据聊天类型判定）\r
    optional uint64 toUserID = 3;               // 私聊对方ID，根据聊天类型判定\r
    optional string content = 4;                // 聊天内容\r
}\r
\r
\r
message MsgChatRsp    \r
{ \r
    required int32 ec = 1;                      //错误码\r
    optional uint64 typeID = 2;                 //错误描述\r
}\r
\r
\r
// 反馈信息\r
message MsgFeedbackInfoCast\r
{\r
    optional uint64 clubid = 1;             // 俱乐部ID\r
    optional string content = 2;            // 聊天内容\r
    optional uint32 time = 3;               // 消息时间\r
    optional uint32 type = 4;               // 内容类型 1富文本(文本、表情、文本+表情三种小类) 2图片 3礼品券 4比赛门票\r
    optional string id = 5;                 // 消息id\r
    optional uint32 source = 6;             // 反馈渠道 1发现页 2个人游戏场 3比赛场 4指定俱乐部 5俱乐部游戏场 6俱乐部比赛场\r
    optional uint64 sender = 7;             // 发送者\r
    optional uint64 receiver = 8;           // 接收者\r
    optional string clientid = 9;           // 自定义消息id\r
    optional uint32 status = 10;            // 礼品券/门票领取状态（0未兑换1已兑换）\r
}\r
\r
//\r
// 发送反馈信息\r
//\r
message MsgFeedback     \r
{ \r
    optional uint64 clubid = 1;             // 俱乐部ID\r
    optional string content = 2;            // 聊天内容\r
    optional uint32 type = 3;               // 内容类型 1富文本(文本、表情、文本+表情三种小类) 2图片 3礼品券\r
    optional uint32 source = 4;             // 反馈渠道 1发现页 2个人游戏场 3比赛场 4指定俱乐部 5俱乐部游戏场 6俱乐部比赛场\r
    optional string clientid = 5;           // 自定义消息id\r
}\r
\r
//\r
// 发送反馈信息返回\r
//\r
message MsgFeedbackRsp    \r
{ \r
    required int32 ec = 1;                      //错误码\r
    optional string clientid = 2;           // 自定义消息id\r
}\r
\r
//\r
// 是否有未读消息\r
//\r
message MsgCheckHasUnreadMessage  \r
{ \r
    optional uint64 clubid = 1;             // 俱乐部ID\r
}\r
\r
//\r
// 是否有未读消息返回\r
//\r
message MsgCheckHasUnreadMessageRsp\r
{\r
    optional uint64 clubid = 1;             // 俱乐部ID\r
    optional uint32 unReadNum = 2;          // 未读数量\r
    optional bool isHasService = 3;         // 是否分配反馈客服\r
    optional string notice = 4;                 // 公告\r
    optional string name = 5;            // 转账姓名\r
    optional string bankinfo = 6;        // 银行信息\r
    optional string cardnum = 7;         // 银行卡号\r
}\r
\r
//\r
// 获取反馈信息列表\r
//\r
message MsgGetFeedbackList   \r
{ \r
    optional uint64 clubid = 1;             // 俱乐部ID\r
    optional uint32 limit = 2;              // 限制条数\r
    optional string id = 3;                 // 消息id\r
}\r
\r
//\r
// 获取反馈信息列表返回\r
//\r
message MsgGetFeedbackListRsp\r
{\r
    optional uint64 clubid = 1;             // 俱乐部ID\r
    repeated MsgFeedbackInfoCast list = 2;  // 消息列表\r
}\r
\r
//\r
// 通知已读反馈\r
//\r
message MsgMarkRead   \r
{ \r
    optional uint64 clubid = 1;             // 俱乐部ID\r
    optional string id = 2;                 // 消息id\r
}\r
\r
//\r
// 通知已读反馈返回\r
//\r
message MsgMarkReadRsp\r
{\r
    required int32 ec = 1;                      //错误码\r
    optional string id = 2;                 // 消息id\r
}`,__vite_glob_0_1=`syntax = "proto2";\r
package common;\r
\r
//\r
// 通用errorcode\r
//\r
message MsgErrorCodeCast    \r
{ \r
    required int32 ec = 1;       \r
}\r
\r
//道具奖励\r
message PropReward {\r
    optional uint32 prop_id      = 1;  //道具ID\r
    optional uint32 prop_type    = 2;  //道具类型\r
    optional string name         = 3;  //英文名称（根据英文名称做多语言映射）\r
    optional string pic          = 4;  //图片\r
    optional uint64 value        = 5;  //价值\r
\r
    optional uint64 num          = 6;  //数量\r
    optional uint32 expires_time = 7;  //过期时间\r
}\r
\r
// 等级配置\r
message LevelConf    \r
{ \r
    required uint32 level           = 1;    // 等级\r
    required uint32 exp             = 2;    // 经验\r
    required uint32 per_add         = 3;    // 每次点击增加能量\r
    required uint32 energy_limit    = 4;    // 能量上限\r
    required uint32 half_node       = 5;    // 减半节点\r
    required uint32 energy_recover  = 6;    // 能量恢复(每分钟)\r
} `,__vite_glob_0_2=`syntax = "proto2";\r
import "rooms.proto";\r
package cowboy;\r
\r
// 排名玩家信息\r
message RankPlayer\r
{\r
    optional uint64 playerid = 1;       // 玩家ID\r
    optional string name = 2;           // 玩家名字\r
    optional string icon = 3;           // 头像\r
    optional uint32 rank = 4;           // 排名\r
    optional double bet_chip = 5;       // 筹码\r
}\r
\r
message Rule\r
{\r
    optional uint32 id                  = 1;    // 对应后台房间列表id\r
    optional double bet1                = 2;    // 投注额1\r
    optional double bet2                = 3;    // 投注额2\r
    optional double bet3                = 4;    // 投注额3\r
    optional int32 is_chat              = 5;    // 是否开启聊天\r
    optional string room_name           = 6;    // 房间名称\r
    optional double takein              = 7;    // 默认带入\r
    optional double bet_limit           = 8;    // 每轮下注限制\r
}\r
\r
// 房间基础数据\r
message RoomInfo\r
{\r
    optional uint32 room_id = 1;                            // 房间id\r
    optional Rule rule = 2;                                 // 房间规则\r
    optional uint32 player_num = 3;                         // 当前人数\r
}\r
\r
message BetResult\r
{\r
    optional uint32 option = 1;             // 选项（见cowboy_config.lua中的OPTION定义）\r
    optional uint32 chips = 2;              // 下注筹码\r
    optional uint32 win_chips = 3;          // 赢的筹码(该选项下注的返还)\r
}\r
\r
// 玩家结果\r
message PlayerResult\r
{\r
    required uint64 playerid = 1;           // 玩家id\r
    repeated BetResult bet_result = 2;      // 下注结果\r
    optional double leftchip = 3;           // 玩家剩余筹码\r
}\r
\r
message Bet\r
{\r
    optional uint32 option = 1;                     // 选项（见cowboy_config.lua中的OPTION定义）\r
    optional uint32 index = 2;                      // 投注额索引(对应投注筹码)\r
    optional uint32 num = 3;                        // 投注数量\r
    optional uint64 playerid = 4;                   // 玩家id\r
    optional string icon = 5;                       // 头像\r
}\r
\r
message BetInfo\r
{\r
    repeated Bet self_bet = 1;  // 自己下注（比较细，按每次下注单独计）\r
    repeated Bet others_bet = 2;  // 别人下注（统计出来的所有下注情况）\r
}\r
\r
message HitInfo\r
{   \r
    optional uint32 hit_type = 1;               // 击中类型(见cowboy_config.lua中的OPTION定义)\r
    repeated uint32 game_num_list = 2;          // 击中局数列表\r
}\r
\r
// ==========  cowboy玩法牌桌数据 ==================\r
message CowboyInfo\r
{\r
    optional uint32 room_id = 1;                                // 房间id\r
    optional string table_id = 2;                               // 桌子id\r
    optional Rule rule = 3;                                     // 房间规则\r
    optional uint32 table_status = 4;                           // 桌子状态（1未开始，2游戏开始，3下注阶段，4结算阶段，5等待阶段，6游戏结束阶段）\r
    optional uint32 player_num = 5;                             // 当前房间有多少人\r
    optional uint32 game_num = 6;                               // 当前游戏局数\r
    optional uint64 bet_time_end = 7;                           // 下注截止时间戳(单位：毫秒)\r
    optional rooms.PlayerData player = 8;                       // 自己在房间的信息\r
    optional BetInfo bet_info = 9;                              // 下注情况\r
    optional uint32 wait_time_end = 10;                         // 等待截止时间\r
    optional bool is_sit_down = 11;                             // 是否坐下\r
    optional bool is_auto_add_chip = 12;                        // 是否自动补充筹码\r
    repeated HitInfo hit_histoty_list = 13;                     // 击中历史列表\r
    repeated int32 cowboy_handcards = 14;                       // 牛仔手牌\r
    repeated int32 beauty_handcards = 15;                       // 美女手牌\r
    repeated uint32 public_cards = 16;                          // 公共牌\r
    repeated uint32 hightlight_cards = 17;                      // 高亮牌\r
    repeated uint32 hit_list = 18;                              // 本局击中列表 (见cowboy_config.lua中的OPTION定义)\r
    optional bool is_already_keep_bet = 19;                     // 是否已经续压\r
    repeated Bet pre_bet_list = 20;                             // 上局下注列表\r
    optional int32 cowboy_poker_type = 21;                      // 牛仔牌型\r
    optional int32 beauty_poker_type = 22;                      // 美女牌型\r
}\r
\r
// 历史记录\r
message HistoryRecord\r
{\r
    optional uint64 cacl_timestamp = 1;                 // 结算时间戳\r
    optional uint64 game_num = 2;                       // 轮数\r
    repeated int32 cowboy_handcards = 3;                // 牛仔手牌\r
    repeated int32 beauty_handcards = 4;                // 美女手牌\r
    repeated int32 public_cards = 5;                    // 公共牌\r
    repeated uint32 hightlight_cards = 6;               // 高亮牌\r
    repeated BetResult bet_result = 7;                  // 下注结果\r
}\r
\r
message StatisticsInfo\r
{\r
    optional uint32 option = 1;                     // 选项（见cowboy_config.lua中的OPTION定义）\r
    optional uint32 count = 2;                      // 次数\r
}\r
\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
///////////////////////////////////////////////交互协议////////////////////////////////////////////////////////\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
// ====================== 查询房间信息 ======================\r
message MsgQueryRoomInfo\r
{\r
    optional uint32 room_id = 1;                // 房间id\r
}\r
\r
message MsgQueryRoomInfoRsp\r
{\r
    optional uint32 room_id = 1;                // 房间id\r
    optional RoomInfo info = 2;                 // 房间数据\r
}\r
\r
// ========== 进入房间 ============\r
message MsgEnterRoom\r
{\r
    required uint32 room_id = 1;                        //房间id\r
}\r
\r
message MsgEnterRoomRsp\r
{\r
    required uint32 result = 1;                         // 返回结果\r
    optional uint32 room_id = 2;                        // 房间id\r
    optional CowboyInfo info = 3;                       // 牌桌数据\r
}\r
\r
// ========== 退出房间 ============\r
message MsgLeaveRoom\r
{\r
    required uint32 room_id = 1;                  //房间id\r
}\r
\r
message MsgLeaveRoomRsp\r
{\r
    required uint32 result = 1;                   //返回结果\r
}\r
\r
// ========== 买入筹码 ============\r
message MsgAddChip\r
{\r
    required uint32 room_id = 1;                    // 房间id\r
    optional uint32 chip_num = 2;                   // 筹码数(扩大100倍,保留小数点后两位,前端显示除100)\r
}\r
\r
message MsgAddChipRsp\r
{\r
    required uint32 result = 1;                     // 返回结果\r
    optional uint32 curr_chip = 2;                  // 玩家当前筹码(扩大100倍,保留小数点后两位,前端显示除100)\r
    optional uint32 chip_num = 3;                   // 筹码数(扩大100倍,保留小数点后两位,前端显示除100)\r
}\r
\r
// ========== 自动补充筹码 ============\r
message MsgAutoAddChip\r
{\r
    required uint32 room_id = 1;                    // 房间id\r
    optional bool is_auto_add = 2;                  // 是否自动补充筹码\r
}\r
\r
message MsgAutoAddChipRsp\r
{\r
    required uint32 result = 1;                   // 返回结果\r
}\r
\r
// ========== 下注 ============\r
message MsgBetAction\r
{\r
    required uint32 room_id = 1;                    // 房间id\r
    optional Bet bet = 2;                           // 下注信息\r
}\r
\r
message MsgBetActionRsp\r
{\r
    required uint32 result = 1;                     // 返回结果\r
    repeated Bet self_bet = 2;                      // 当前的下注结果\r
    optional uint32 curr_chip = 3;                  // 玩家当前筹码(扩大100倍,保留小数点后两位,前端显示除100)\r
}\r
\r
// ========== 续压 ============\r
message MsgKeepBetAction\r
{\r
    required uint32 room_id = 1;                    // 房间id\r
}\r
\r
message MsgKeepBetActionRsp\r
{\r
    required uint32 result = 1;                     // 返回结果\r
    repeated Bet self_bet = 2;                      // 当前的下注结果\r
    optional uint32 curr_chip = 3;                  // 玩家当前筹码(扩大100倍,保留小数点后两位,前端显示除100)\r
}\r
\r
// 历史记录\r
message MsgGetHistoryRecord\r
{\r
    required string table_id = 1;                   // 桌子id\r
}\r
\r
message MsgGetHistoryRecordRsp\r
{\r
    required uint32 result = 1;                     // 错误码\r
    repeated HistoryRecord records = 2;             // 历史记录信息\r
}\r
\r
// 统计\r
message MsgGetStatistics\r
{\r
    required uint32 id = 1;                         // game_id(对应后台房间列表id)\r
}\r
\r
message MsgGetStatisticsRsp\r
{\r
    required uint32 result = 1;                         // 错误码\r
    repeated StatisticsInfo statistics_info = 2;        // 排名信息\r
}\r
\r
// 排行榜\r
message MsgGetRank\r
{\r
    required uint32 id = 1;                         // game_id(对应后台房间列表id)\r
    required uint32 room_id = 2;                    // 房间id\r
}\r
\r
message MsgGetRankRsp\r
{\r
    required uint32 result = 1;                     // 错误码\r
    repeated RankPlayer ranks = 2;                  // 排名信息\r
    repeated rooms.PlayerData players = 3;          // 自己在房间的信息（前面的50个玩家）\r
    optional uint32 player_sit_num = 4;             // 当前房间有多少人在座位上\r
}\r
\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
///////////////////////////////////////////////广播///////////////////////////////////////////////////////////\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
// ========== 广播房间座位人数变化 ============\r
message MsgPlayerSitNumCast\r
{\r
    optional uint32 room_id = 1;\r
    optional uint32 player_sit_num = 2;                 // 当前房间有多少人在座位上\r
}\r
\r
// 整体下注状态广播，合并下注情况\r
message MsgAllPlayerBetChangeCast\r
{\r
    optional uint32 room_id = 1;                        // 房间id\r
    repeated Bet add_bet = 2;                           // 合并所有人的1秒内的下注增量\r
    repeated Bet all_bet = 3;                           // 当前所有下注情况\r
}\r
\r
message MsgTableResultCast\r
{\r
    required uint32 room_id = 1;                        // 房间ID\r
    required PlayerResult player_result = 2;            // 用户结算信息\r
    repeated int32 cowboy_handcards = 3;                // 牛仔手牌\r
    repeated int32 beauty_handcards = 4;                // 美女手牌\r
    repeated int32 public_cards = 5;                    // 公共牌\r
    repeated uint32 hightlight_cards = 6;               // 高亮牌\r
    repeated uint32 hit_list = 7;                       // 最近的输赢结果(见cowboy_config.lua中的OPTION定义)\r
    optional int32 cowboy_poker_type = 8;               // 牛仔牌型\r
    optional int32 beauty_poker_type = 9;               // 美女牌型\r
}\r
\r
// 广播牌局状态\r
message MsgTableStatusCast\r
{\r
    optional uint32 room_id = 1;                        // 房间id\r
    optional uint32 room_status = 2;                    // 桌子状态（1未开始，2游戏开始，3下注阶段，4结算阶段，5等待阶段，6游戏结束阶段）\r
}\r
\r
// 开始下注(在room_status=2之前)\r
message MsgStartBetCast\r
{\r
    optional uint32 room_id = 1;                        // 房间id\r
    optional uint64 bet_time_end = 2;                   // 下注截止时间戳(单位：毫秒)\r
    optional uint64 game_num = 3;                       // 轮数\r
    repeated Bet pre_bet_list = 4;                      // 上局下注列表\r
    repeated int32 public_cards = 5;                    // 公共牌（只有一张）\r
}\r
\r
// ========== 广播玩家站起状态 ============\r
message MsgPlayerSitDownCast\r
{\r
    optional uint32 room_id = 1;\r
    optional bool is_sit_down = 2;                      // 是否坐下\r
    optional double chip = 3;                           // 玩家筹码\r
}\r
\r
// ========== 同步玩家筹码 ============\r
message MsgPlayerChipCast\r
{\r
    optional uint32 room_id = 1;\r
    optional double chip = 2;                           // 玩家筹码\r
}\r
`,__vite_glob_0_3=`syntax = "proto2";
//import "common.proto";
package friends;


// NOTE: 推送修改golang中的定义
message FriendApplyInfo {
    optional string id = 1; // 申请ID 唯一ID
    optional int32 type = 2; // 申请类型 1 申请添加
    optional uint64 sender = 3; // 申请者玩家ID
    optional string nick = 4; // 玩家昵称
    optional string avatar = 5; // 玩家头像
    optional int64 time = 6; // 申请时间
    optional string source = 7; // 申请来源 ingame/inviter/search
    optional string reason = 8; // 申请原因/消息
    optional uint32 is_read = 9; // 是否已读 0未读 1 已读
}

message FriendInfo {
    optional uint64 playerid = 1;     // 好友ID
    optional string nick = 2;        // 玩家昵称
    optional string avatar = 3;      // 玩家头像
    optional int64 created = 4;      // 成为好友时间
    optional string source = 5;      // 好友来源
    optional int32 status = 6;       // 好友状态 0 不在线 1 在线 2 游戏中
}


// 申请添加好友消息推送给对方
message MsgFriendApplyCast    
{ 
    optional FriendApplyInfo info = 1;
}

// 新增好友
message MsgFriendAddCast
{
    optional uint64 sender = 1; // 请求添加好友的申请者ID（根据申请人 弹出不同的 toast）
    optional FriendInfo info = 2; // 好友信息
}

// 删除好友时通知对方 只需要好友ID
message MsgFriendDeleteCast
{
    optional uint64 playerid = 1; // 谁删除了我
}

// 好友状态变化通知
message MsgFriendUpdateCast
{
    optional uint64 playerid = 1; // 好友ID
    optional int32 status = 2;
}

// 转账消息推送
message TransferPlayer {
    optional int64 player_id = 1; // 玩家ID
    optional string nick = 2; // 玩家昵称
    optional string avatar = 3; // 玩家头像
}

message TransferRecord {
    optional string id = 1; // 转帐ID
    optional TransferPlayer sender = 2; // 转出用户
    optional TransferPlayer receiver = 3; // 转入用户
    optional float send_amount = 4; // 发起转帐金额
    optional float recv_amount = 5; // 实际到账金额
    optional string currency = 6; // 货币类型
    optional float fee_rate = 7; // 手续费百分比
    optional float fee_num = 8; // 手续费
    optional int64 time = 9; // 转帐时间
    optional int32 status = 10; // 转账状态 1 转账中 2 已到帐
    optional string reason = 11; // 转账描述或原因
}

// 转账完成时 推送给好友的消息
message MsgNewTransferCast {
    optional uint64 playerid = 1; // 转账发起方玩家ID
    optional TransferRecord info = 2; // 转账消息
}`,__vite_glob_0_4=`syntax = "proto2";\r
import "mtt.proto";\r
import "common.proto";\r
import "texas.proto";\r
package hall;\r
\r
message GameInfo {\r
    required int32 game_id = 1;         //游戏ID\r
    required string game_tag = 2;       //游戏标签(用于显示名称和icon)\r
    required int32 game_type = 3;       //游戏类型(1.NLH,2.PLO4,3.6+)\r
    required int32 small_blind = 4;     //小盲\r
    required int32 min_buyin = 5;       //最小买入\r
    required int32 max_buyin = 6;       //最大买入\r
    required int32 ante = 7;            //前注\r
}\r
\r
message SceneInfo {\r
    required int32 scene_id = 1;        //场次ID 标注不同游戏的不同场次(初级，中级，高级),目前没有使用到\r
    required int32 game_type = 2;       //游戏类型(1.NLH,2.PLO4,3.6+)\r
    repeated GameInfo game_list = 3;    //游戏列表\r
} \r
\r
message DailyReward {\r
    required int32 day = 1;             // 第几天签到\r
    optional double bind_cash = 2;      // 奖励泥码值\r
}\r
\r
message GameOnline {\r
    required int32 game_id = 1;         //游戏ID\r
    required int32 online_num = 2;      //在线人数\r
}\r
\r
message RankInfo {\r
    optional int32 playerid = 1;            //用户ID\r
    optional int32 rank = 2;                //排名\r
    optional string nick = 3;               //名字\r
    optional int64 score = 4;               //数值\r
    optional string avatar = 5;             //头像\r
}\r
\r
message RewardItem {\r
    required int32 item_id = 1;             //奖励项   item_id == 106 表示实物\r
    optional int32 num = 2;                //奖励数量\r
    optional string name = 3;               //实物名称\r
    optional string icon = 4;               //实物icon\r
    optional int32 vip_day = 5;             //vip有效天数\r
}\r
\r
message RankRewards {\r
    required string rank = 1;               //排名 1-3,4-6 等\r
    repeated common.PropReward rewards = 2;           //奖励列表\r
}\r
\r
\r
message RankRewardConfig {\r
    required int32 type = 1;                 //类型 1.赢取金币。2.赢取比赛奖励。3.拥有的金币\r
    repeated RankRewards list = 2;  //奖励列表\r
}\r
\r
message TaskConf {\r
    required uint32 task_id     = 1;   //任务ID\r
    required uint32 task_type   = 2;   //任务类型（1循环/2常规）\r
    required uint32 event_type  = 3;   //事件类型（不确定）\r
    required uint32 act_type    = 4;   //行动类型（客户端跳转页面用）\r
    required uint32 start_time  = 5;   //任务开始时间\r
    required uint32 end_time    = 6;   //任务开始时间\r
    optional uint32 period      = 7;   //循环周期（按小时）\r
    required uint64 check_value = 8;   //达成门槛\r
    repeated common.PropReward rewards = 9;   //奖励列表\r
    required string title       = 10;  //任务标题\r
    required uint32 sort_weight = 11;  //排序权重\r
    optional string icon_type   = 12;\r
    optional string language_key = 13;\r
    optional string icon_url    = 14;\r
}\r
\r
message TaskInfo {\r
    required TaskConf conf         = 1;  // 任务配置\r
    required uint64 progress_value = 2;  // 当前进度\r
    required int32 status          = 3;  // 状态（0:未完成 1:已完成 2:已领取）\r
    required uint32 refresh_time   = 4;  // 下一次任务刷新时间\r
}\r
\r
message NormalTableInfo {\r
    required int32 game_id = 1;                         // id\r
    required int32 game_type = 2;                       // 游戏类型\r
    required int32 small_blind = 3;                     // 小盲(真金场扩大100倍,保留小数点后两位,前端显示除100)\r
    required int32 min_buyin = 4;                       // 最小买入\r
    required int32 max_buyin = 5;                       // 最大买入\r
    required int32 ante = 6;                            // 前注\r
    required int32 num = 7;                             // 人数（入座）\r
    optional uint32 top_weight = 8;                     // 置顶权重\r
    optional bool jackpot = 9;                          // 是否开启jackpot 和房间内保持一致\r
    optional bool is_canbuy_insurance = 10;             // 是否可以购买保险\r
    optional int32 default_buyin = 11;                  // 默认买入(AOF玩法, 真金场扩大100倍)\r
}\r
\r
message ColorGameInfo {\r
    required int32 game_id = 1;                         // id\r
    required int32 bet1 = 2;                            // 下注项1(扩大100倍,保留小数点后两位,前端显示除100)\r
    required int32 bet2 = 3;                            // 下注项2(扩大100倍,保留小数点后两位,前端显示除100)\r
    required int32 bet3 = 4;                            // 下注项3(扩大100倍,保留小数点后两位,前端显示除100)\r
    optional int32 num = 5;                             // 人数\r
    optional bool is_chat = 6;                          // 是否开启聊天\r
    optional int32 game_type = 7;                       // 游戏类型\r
    optional int32 takein = 8;                          // 默认带入值(扩大100倍,保留小数点后两位,前端显示除100)\r
    optional uint32 top_weight = 9;                     // 置顶权重\r
}\r
\r
message CowboyInfo {\r
    required int32 game_id = 1;                         // id\r
    required int32 bet1 = 2;                            // 下注项1(扩大100倍,保留小数点后两位,前端显示除100)\r
    required int32 bet2 = 3;                            // 下注项2(扩大100倍,保留小数点后两位,前端显示除100)\r
    required int32 bet3 = 4;                            // 下注项3(扩大100倍,保留小数点后两位,前端显示除100)\r
    optional int32 num = 5;                             // 人数\r
    optional bool is_chat = 6;                          // 是否开启聊天\r
    optional int32 game_type = 7;                       // 游戏类型\r
    optional int32 takein = 8;                          // 默认带入值(扩大100倍,保留小数点后两位,前端显示除100)\r
    optional uint32 top_weight = 9;                     // 置顶权重\r
}\r
\r
// 大厅玩法\r
message RoomInfo {\r
    required int32 room_type = 1;                       // 房间数据类型(见define.lua中的ROOM_GAME_TYPE)\r
    optional NormalTableInfo normal = 2;                // 常规桌\r
    optional mtt.MttInfo mtt = 3;                       // mtt\r
    optional int32 cost_type = 4;                       // 货币类型(报名)\r
    optional ColorGameInfo color_game = 5;              // color game\r
    optional CowboyInfo cowboy = 6;                     // 百人德州房间信息\r
}\r
\r
// 货币汇率\r
message ExchangeRate {\r
    required uint32 coin_type = 1;                      // 货币类型\r
    optional uint32 gold_rate = 2;                      // 对金币汇率\r
}\r
\r
message RecommendConf {\r
    required int32 id = 1;                              // 序列id\r
    required int32 weight = 2;                          // 权重\r
    required int32 game_type = 3;                       // 房间推荐类型(0:全部 1.私人房 2:大厅 3:mtt 4:color game)\r
    optional uint32 coin_type = 4;                      // 货币类型 \r
}\r
\r
\r
//---------------------客户端消息-----------------------------\r
message MsgGetSignRewardConfigList {\r
}\r
\r
message MsgGetSignRewardConfigListRsp {\r
    required int32 result = 1;              //错误码\r
    repeated DailyReward list = 2;          //奖励列表\r
    optional int32 today_sign = 3;          //今天是否已签到  >0 表示已签到\r
    optional int32 sign_index = 4;          //第几天签到\r
    optional int32 next_get_reward_time = 5;       //下次领奖剩余时间\r
}\r
\r
message MsgGetTodaySignReward {\r
}\r
\r
message MsgGetTodaySignRewardRsp {\r
    required int32 result = 1;              //错误码\r
    optional DailyReward reward = 2;        //领取到的奖励\r
    optional int32 next_get_reward_time = 3;       //领奖剩余时间\r
}\r
\r
message MsgGetSceneList {\r
    required string md5 = 1;                //场景配置md5\r
}\r
\r
message MsgGetSceneListRsp {\r
    required uint32 result = 1;             //错误码\r
    required string md5 = 2;                //配置MD5\r
    repeated SceneInfo scene_list = 3;\r
    repeated GameOnline online_list = 4;\r
}\r
\r
message MsgGetHallRoomId {\r
    required int32 game_id = 1;                 //游戏ID\r
    optional int32 index = 2;                   //第几个房间\r
    optional int32 ex_room_id = 3;              //当前的房间\r
}\r
\r
message MsgGetHallRoomIdRsp {\r
    required uint32 result = 1;    //返回结果\r
    optional uint32 room_id = 2;        //获取房间ID\r
}\r
\r
message MsgGetColorRoomId {\r
    required int32 game_id = 1;             // 对应后台房间列表id\r
}\r
\r
message MsgGetColorRoomIdRsp {\r
    required uint32 result = 1;             //返回结果\r
    optional uint32 room_id = 2;            //获取房间ID\r
}\r
\r
message MsgGetCowboyRoomId {\r
    optional int32 game_id = 1;             // 对应后台房间列表id\r
}\r
\r
message MsgGetCowboyRoomIdRsp {\r
    required uint32 result = 1;             //返回结果\r
    optional uint32 room_id = 2;            //获取房间ID\r
}\r
\r
message MsgHallTableCountCast {\r
    optional uint64 playerid = 1;            //用户ID\r
    optional uint32 table_count = 2;         //手数\r
}\r
\r
message MsgGetRankList {\r
    required int32 type = 1;                 //类型， 1.赢取金币。2.赢取比赛奖励。3.拥有的金币\r
}\r
\r
message MsgGetRankListRsp {\r
    required uint32 result = 1;                 //错误码\r
    required int32 type = 2;                    //请求的type\r
    repeated RankInfo rank_list = 3;            //排行榜列表\r
    optional RankInfo my_rank = 4;              //自己的排名\r
    optional RankInfo last_rank = 5;            //上次的冠军\r
    optional uint32 last_rank_time = 6;         //上次的冠军时间\r
}\r
\r
message MsgGetRankRewardConfig {\r
    required string md5 = 1;              \r
}\r
\r
message MsgGetRankRewardConfigRsp {\r
    required uint32 result = 1;                 //错误码\r
    required string md5 = 2;                    //配置MD5\r
    repeated RankRewardConfig list = 3;         //配置列表\r
}\r
\r
//================== 获取大厅排行榜奖励数据（道具库版本） ===================\r
message MsgGetRankRewardCfg {\r
    required string md5 = 1;              \r
}\r
\r
message MsgGetRankRewardCfgRsp {\r
    required uint32 result         = 1;  //错误码\r
    required string md5            = 2;  //配置MD5\r
    repeated RankRewardConfig list = 3;  //配置列表\r
}\r
\r
//获取任务列表\r
message MsgGetTaskList {            \r
}\r
\r
message MsgGetTaskListRsp {\r
    required uint32 result = 1;         //错误码\r
    repeated TaskInfo list = 2;         //配置列表\r
}\r
\r
message MsgTasksUpdateCast {\r
    required uint32 status = 1;  //1：任务状态发生变化\r
}\r
\r
//领取任务奖励\r
message MsgClaimTaskReward {   \r
    required uint32 task_id     = 1;  //任务ID\r
}\r
\r
message MsgClaimTaskRewardRsp {\r
    required uint32 result  = 1;  //错误码\r
    required uint32 task_id = 2;  //任务ID\r
}\r
\r
//==================== 客户端完成任务（仅豁免任务允许客户端自行完成）  ========================\r
message MsgFinishClientTask {\r
    required uint32 task_id = 1;\r
}\r
\r
message MsgFinishClientTaskRsp {\r
    required uint32 ec = 1;     //错误码\r
    required uint32 task_id=2;  // 任务ID  \r
}\r
\r
// 获取首页信息\r
message MsgGetHallInfo   \r
{   \r
    // 100:my game\r
    // 101:推荐\r
    // 1:NLH\r
    // 2:6+\r
    // 3:MTT\r
    // 4:PLO4\r
    // 5:SNG\r
    // 6:SPINUP\r
    // 7:COLOR_GAME\r
    // 1000: CASH_NLH\r
    // 1001: TG训练场(包含 1,2,4)\r
    required int32 page_id = 1;                         // 页签id\r
    optional string channel = 2;                        // channels\r
}\r
\r
message MsgGetHallInfoRsp {\r
    required uint32 result = 1;                         // 错误码\r
    required int32 page_id = 2;                         // 页签id \r
    repeated RoomInfo room_list = 3;                    // 房间列表\r
    repeated RecommendConf recommend_conf = 4;          // 推荐配置\r
    optional string channel = 5;                        // channels\r
    repeated ExchangeRate rate_list = 6;                // 货币汇率列表\r
    optional texas.JackpotInfo jackpot_info = 7;        // jackpot 奖池数据\r
}\r
\r
// 获取我的游戏红点\r
message MsgGetMyGameStatus   \r
{   \r
    optional string channel = 1;                        // channels\r
}\r
\r
\r
message MsgGetMyGameStatusRsp {\r
    required uint32 result = 1;                         // 错误码\r
    optional bool active = 2;                        // 是否有可以进入的比赛\r
}\r
\r
// 获取可以玩的spinup\r
message MsgGetSpinupMatchPlayAgain\r
{\r
    optional string channel = 1;\r
}\r
\r
// 获取可以玩的spinup回包\r
message MsgGetSpinupMatchPlayAgainRsp\r
{\r
    required uint32  ec = 1;                // 错误码\r
    optional mtt.MttInfo info = 2;              // 比赛信息\r
}\r
\r
// 获取可以玩的sng\r
message MsgGetSngMatchPlayAgain\r
{\r
    optional string channel = 1;\r
}\r
\r
// 获取可以玩的spinup回包\r
message MsgGetSngMatchPlayAgainRsp\r
{\r
    required uint32  ec = 1;                // 错误码\r
    optional mtt.MttInfo info = 2;              // 比赛信息\r
}\r
\r
// 获取可以玩的mtt\r
message MsgGetMatchRegisterEnabled\r
{\r
    optional string channel = 1;\r
    repeated uint32  mttids = 2;           \r
}\r
\r
// 获取可以玩的mtt回包\r
message MsgGetMatchRegisterEnabledRsp\r
{\r
    required uint32  ec = 1;                // 错误码\r
    optional mtt.MttInfo info = 2;              // 比赛信息\r
}\r
\r
\r
//==================== 广播待领取任务  ========================\r
message MsgTaskClaimChangedCast {\r
    optional uint32 remain_claim = 1;      //剩余待领取任务数量\r
}\r
\r
\r
//==================== TG 练习场金币奖励 ====================\r
message MsgGetPracticeCourtRewardInfo {\r
}\r
\r
message MsgGetPracticeCourtRewardInfoRsp {\r
    required uint32 result = 1;     // 错误码\r
    optional uint32 remain_time = 2; // 剩余时间\r
    optional uint32 reward_count = 3; // 奖励数量\r
    optional uint32 total_chips = 4; // 用户身上总金币数 当前数量\r
}\r
\r
message MsgPickPracticeCourtReward {\r
}\r
\r
message MsgPickPracticeCourtRewardRsp {\r
    required uint32 result  = 1;  //错误码\r
    optional uint32 remain_time = 2; // 刷新剩余时间\r
    optional uint32 reward_count = 3; // 刷新奖励数量\r
    optional uint32 total_chips = 4; // 用户身上总金币数 领取后数量\r
}\r
\r
// TGP信息\r
message MsgTGPInfo {\r
}\r
\r
message MsgTGPInfoRsp {\r
    required uint32 result = 1;                     // 错误码\r
    required uint32 energy = 2;                     // 当前能量\r
    required uint32 energy_last_timestamp = 3;      // 能量最后同步的时间戳\r
    repeated common.LevelConf level_conf_list = 4;  // 等级配置列表\r
    optional double cash_exp_ratio = 5;             // 真金场获取经验比例\r
    optional double normal_exp_ratio = 6;           // 普通场获取经验比例\r
}\r
\r
// 获取TGP\r
message MsgGetTGP {\r
}\r
\r
message MsgGetTGPRsp {\r
    required uint32 result = 1;                     // 错误码\r
    optional uint32 energy = 2;                     // 能量\r
    optional uint32 reward_count = 3;               // 点击奖励的tgp (扩大100倍,保留小数点后两位,前端显示除100)\r
    optional uint32 energy_last_timestamp = 4;      // 能量最后同步的时间戳\r
}\r
\r
//邀请好友奖励配置信息\r
message InviteConfigInfo{\r
    required uint32 iType = 1; //1.邀请奖励  2.被邀请奖励 3.抽水奖励 4.游戏玩N局奖励\r
    optional uint32 iGameNum = 2; //游戏局数\r
    optional uint32 iPumpingNum = 3; //抽水比列\r
    repeated common.PropReward rewards = 4;           //奖励列表\r
}\r
\r
//获取邀请好友配置信息\r
message MsgInviteConfigReq {\r
};\r
\r
message MsgInviteConfigRsp {\r
    required uint32 ec  = 1;  //错误码\r
    repeated InviteConfigInfo inviteConfigInfo = 2;  //\r
};\r
\r
//邀请好友奖励信息\r
message InviteInfo{\r
    required string nick = 1; //玩家名称\r
    required uint32 player_id = 2; //玩家\r
    required uint64 awardTime = 3; //获取奖励服务器时间\r
    required uint32 iType = 4; //完成的任务类型\r
    repeated common.PropReward rewards = 5;  //奖励列表\r
}\r
\r
//获取奖励信息\r
message MsgInviteAwardListReq {\r
    required uint32 iPageId = 1; //请求页数\r
};\r
\r
message MsgInviteAwardListRsp {\r
    required uint32 iTotalPageNum = 1; //总的页数\r
    required uint32 iPageId = 2; //当前返回的是第几页的数据\r
    repeated InviteInfo inviteAwardListInfo = 3;\r
};\r
\r
//获取奖励变化\r
message MsgInviteAwardInfoReq {\r
};\r
\r
message MsgInviteAwardInfoRsp {\r
    required uint32 type = 1; // 1邀请奖励  2被要请的奖励 3:新人奖励\r
    repeated common.PropReward rewards = 2; //奖励列表\r
}\r
\r
// 获取上一次 牌局信息\r
message MsgLastTableInfo {\r
}\r
message MsgLastTableInfoRsp {\r
	optional uint32 tableid   = 1;  // table id\r
	optional uint32 mttid     = 2;  //mtt id\r
	optional uint32 state     = 3;  // 进入比赛的状态\r
	optional uint32 game_type = 4;  // 游戏类型\r
}\r
\r
message LossRebateRecord {\r
	optional uint32 timestamp = 1;              // 时间戳\r
    optional double loss_amount = 2;            // 损失金额\r
	optional double rebate_amount = 3;          // 返利金额\r
	optional uint32 state = 4;                  // 领取状态(0:不可领取 1:可领取 2:已领取 3:已过期)\r
    optional double rate = 5;                   // 返利比例\r
}\r
\r
message LossRebateConf {\r
    optional int32 level = 1;                   // 等级\r
    optional double min_amount = 2;             // 最小金额\r
    optional double max_amount = 3;             // 最大金额\r
    optional double rate = 4;                   // 返利比例\r
}\r
\r
// 获取损失返利列表\r
message MsgLossRebateRecord {\r
}\r
\r
message MsgLossRebateRecordRsp {\r
    repeated LossRebateConf conf = 1;               // 返利比例配置\r
    repeated LossRebateRecord record = 2;           // 返利记录\r
}\r
\r
// 领取返利\r
message MsgGetLossRebate {\r
    optional uint32 timestamp = 1;      // 时间戳\r
}\r
\r
message MsgGetLossRebateRsp {\r
    required uint32 ec  = 1;  //错误码\r
}\r
\r
// 房间内 查询筹码风暴活动信息\r
message MsgGetChipStormTinyInfo {\r
    required uint32 game_id = 1;\r
}\r
\r
message MsgGetChipStormTinyInfoRsp {\r
    required uint32 ec = 1; //错误码\r
    optional bool is_open = 2; // 活动是否开启\r
    optional int64 start_time = 3; // 活动开启时间\r
    optional int64 end_time = 4; // 活动结束时间\r
}\r
\r
// 筹码风暴 房间内玩家中奖广播\r
message MsgChipStormWinPrizeCast {\r
    optional int32 cash = 1; // 中奖金额（单位美分）\r
}\r
\r
// 玩家进入大厅\r
message MsgEnterHall {\r
}\r
message MsgEnterHallRsp {\r
}\r
\r
message MsgBankruptcySubsidyCast {\r
    optional int32 bind_cash = 1; // 尼玛 单位美分\r
    optional int32 cash = 2; // 真金 单位美分\r
    optional int32 today_subsidy_times = 3; // 今日领取次数\r
}\r
`,__vite_glob_0_5=`syntax = "proto2";\r
package login;\r
\r
//\r
// token登录\r
//\r
message MsgLogin 	\r
{ \r
    optional int32 timestamp = 2;       // 服务器时间戳\r
    optional int32 session = 3;         //\r
    optional uint64 playerid = 4;       // 玩家id\r
    optional string addr = 5;             // 登录的ip地址\r
    optional string token = 6;          // 登录token\r
    optional string clientid = 7;       //设备id\r
    optional string platform = 8;       //登录系统\r
    optional string model = 9;       //登录设备\r
    optional uint32 select_tab = 10;    //是否多桌同时发消息(0:否 1:是)\r
    optional string ip = 11;            //登录的ip地址\r
    optional string channel = 12;        // 当前渠道\r
}\r
\r
//\r
// token登录返回\r
//\r
message MsgLoginRsp\r
{\r
	required int32 result     = 1;  // 0 成功 > 0 失败(对应错误码)\r
	optional int32 timestamp  = 2;  // 服务器时间戳\r
	optional int32 session    = 3;  //\r
	optional uint64 playerid  = 4;  // 玩家id\r
	optional uint32 tableid   = 5;  // table id\r
	optional uint32 mttid     = 6;  //mtt id\r
	optional uint32 state     = 8;  // 进入比赛的状态\r
	optional uint32 game_type = 9;  // 游戏类型\r
}\r
\r
//\r
// 被踢下线\r
//\r
message MsgkickCast\r
{\r
    required int32 reason = 1;           // (1顶号，2服务器下线，3后台踢出，4封号踢下线)\r
    optional string desc = 2;         // 下线理由\r
}`,__vite_glob_0_6=`syntax = "proto2";\r
import "common.proto";\r
package mtt;\r
\r
// 比赛信息\r
message MttInfo\r
{\r
    optional uint64 mttid = 1;\r
    optional MttRule rule = 2;\r
\r
    optional RoomInfo gameinfo            = 3;   //牌局涨盲信息\r
    optional uint32 num                   = 4;   //报名人数\r
    optional double prize_pool            = 5;   //奖池\r
    optional uint32 rebuy_num             = 6;   // rebuy次数\r
    optional uint32 addon_num             = 7;   // addon 次数\r
    optional sint32 buttonState           = 8;   //按钮状态 -1-报名 -2-申请中 -3-等待 -4-进入 -5-延迟进入 -6-重新进入 -7 比赛关闭  -9 比赛结束 -10 比赛旁观 -11 可rebuy进入 0-暂无排名 其他正数为比赛名次 \r
    optional PlayerRank memberrank        = 9;   //玩家实时排名信息\r
    optional MttTime time                 = 10;  //时间显示，复合结构\r
    optional uint32 iscreater             = 11;  //是否为比赛创建者 0- 不是 1-是\r
    optional uint32 close_time            = 12;  // 结束时间\r
    optional bool is_super                = 13;  // 是否是超级比赛\r
    optional uint32 clubid                = 14;  // 玩家报名的clubid\r
    optional double ko_prize_pool         = 15;  //KO赛奖池\r
    optional double ko_value              = 16;  //KO赛单人奖励\r
    optional bool is_entrance_close       = 17;  // 是否关闭报名\r
    optional uint64 team_matchid          = 18;  // 战队赛活动ID\r
    optional bool is_team_final           = 19;  // 是否战队赛决赛\r
    optional uint32 group_id              = 20;  // 小组赛id\r
    optional uint32 last_group_start_time = 21;  // 最后一个开赛的小组赛时间\r
    optional uint32 unionid               = 22;  // 比赛所属的联盟id\r
    optional bool wait_balance_start      = 23;  // 比赛等待开局（延迟报名未结束牌桌人数只剩1人）\r
    optional uint32 pin                   = 24;  //操作时设定置顶的值\r
    optional bool authing_enabled         = 25;  //报名审核开关状态\r
    optional bool sign_authing            = 26;  //报名审核中\r
    optional uint32 is_entrance           = 27;  //是否报名(0未报名 1已报名)\r
    optional uint32 top_weight            = 28;  // 置顶权重\r
    optional uint32 multiplier            = 29;  // spinup比赛奖励倍数\r
    optional bool is_enter                = 30;  //是否进入过\r
    optional MttPropRewardInfo first_rewards   = 31;  // 第一名奖励\r
    optional uint32 money_round_count     = 32;  // 钱圈人数\r
    optional uint32 rest_time             = 33;   //休息时间点\r
    optional bool is_break                = 34;   //休息期间\r
    optional PlayerInfo player_info       = 35;   // 玩家信息\r
    optional bool is_free_ticket          = 36;   // 是否免费门票\r
}\r
\r
// 玩家信息\r
message PlayerInfo\r
{\r
    optional uint32 rank = 1;                       // 名次\r
    optional uint32 rebuy_num = 2;                  // 已经rebuy次数\r
    optional uint32 remain_player_num = 3;          // 剩余玩家人数\r
    optional uint32 num = 4;                        // 报名人数\r
}\r
\r
// 比赛时间\r
message MttTime{\r
    optional uint32 type = 1;  //时间类型 1-截止报名 2-比赛开始 3-延迟状态 4-已经开赛 5-比赛关闭 6-比赛结束\r
    optional uint32 days = 2;  //与截止时间的天数 0-当天 1-明天 2-其他天 3-倒计时\r
    optional uint32 time = 3;  //具体时间戳   （只会出现2与0，2与1，2与2，1与3，2与3，3与3的搭配）\r
}\r
\r
message MttCustomReward {\r
    optional string name = 1;           // 实物名字\r
    optional uint32 value = 2;          // 价值\r
    optional uint32 expires_time = 3;   // 过期时间\r
    optional uint32 get_time = 4;       // 获得时间\r
    optional bool is_ticket = 5;        // 是否门票\r
    optional bool is_exchange_chips = 6; // 是否支持兑换筹码\r
    optional double double_value = 7;     // 小数价值（背包接口用）\r
    optional uint32 item_type = 8;       // 物品类型 ITEM_TYPE\r
}\r
\r
// 比赛奖励\r
message MttRewardInfo\r
{\r
    optional uint32 rank = 1;  //排名\r
    optional MttCustomReward reward = 2;  //实物奖励\r
    optional double chips = 3;          //筹码奖励\r
}\r
\r
// prop-比赛奖励\r
message MttPropRewardInfo\r
{\r
    optional uint32 rank            = 1;  //排名\r
    optional common.PropReward reward = 2;  //实物奖励\r
    optional double chips           = 3;  //筹码奖励\r
}\r
\r
// 自定义升盲时间\r
message MttCustomRaiseBlind {\r
    optional uint32 before_entry_close = 1;  // 延迟报名结束前升盲时间(单位:s 默认:180)\r
    optional uint32 after_entry_close = 2;  // 延迟报名结束后升盲时间(单位:s 默认:180)\r
    optional uint32 while_final_table = 3;  // 最终桌升盲时间(单位:s 默认:180)\r
}\r
\r
// 俱乐部指定信息\r
message ClubLimit {\r
    required uint64 clubid     = 1;  //俱乐部id\r
    required uint64 unionid    = 2;  //联盟id\r
}\r
\r
\r
// 比赛排名信息\r
message RankInfo\r
{\r
    optional uint32  rank = 1;          //排名\r
    optional string name = 2;           //玩家名字\r
    optional uint32  chips = 3;        //积分 \r
    optional uint64  uid = 4;           //玩家uid\r
    optional string  avatar = 5;           //玩家头像\r
    optional uint32 rebuy_num = 6;      //rebuy次数\r
    optional uint32 addon_num = 7;      //addon次数\r
    optional uint32 ko_num = 8;         //ko次数\r
    optional bool sign_authing = 9;   //报名审核中\r
    optional bool approved = 10;   //已审核\r
}\r
\r
// 牌局涨盲信息\r
message RoomInfo\r
{\r
    optional uint32  bigblind = 1;    // 大盲\r
    optional uint32  front = 2;    //前注\r
    optional uint32  averagechip = 3;  //平均筹码\r
    optional int32  riseblind = 4;   //涨盲时间 -1 下一局涨盲 正数为涨盲倒计时\r
    optional uint32  nextbigblind = 5;  //下一轮大盲\r
    optional uint32  nextfront = 6;    //下一轮前注\r
    optional uint32  blindround = 7;    //当前盲注级别\r
    optional uint32  largestchip = 8;  //最大筹码\r
    optional uint32  smallestchip = 9;  //最小筹码\r
}\r
\r
\r
// 玩家实时排名信息\r
message PlayerRank\r
{\r
    optional uint64  mttid = 1;\r
    optional uint32  rank = 2;  //名次\r
    optional uint32  num = 3; //未淘汰人数\r
    optional uint32  totalnum = 4; //参赛总人数\r
    optional uint32  isMoney = 5; //是否进入钱圈\r
}\r
\r
// 比赛房间信息\r
message MttRoomInfo\r
{\r
    optional uint64  room_id = 1;                   // 房间id\r
    optional uint64  mttid = 2;\r
    optional uint32  member_count = 3;              // 房间内的玩家数\r
    optional uint32  chip_min = 4;                   // 最小筹码\r
    optional uint32  chip_max = 5;                   // 最大筹码\r
}\r
\r
message KOBounty \r
{\r
    optional bool is_open = 1; //是否开启 0-未开启 1-开启\r
    optional uint32 type = 2; //类型 1-普通 2-进阶\r
    optional uint32 bounty = 3; //奖励(1. 1/4  2. 1/3   3. 1/2  4. 2/3)\r
}\r
\r
message SngRule \r
{\r
    optional bool   is_open   = 1;  // true / false\r
    optional uint32 mul_type  = 2;  //类型 1-1000x 2-10000x\r
    optional bool   is_spinup = 3;  // true / false\r
}\r
\r
message MttRule\r
{\r
    optional uint64 clubid = 1;         // 俱乐部id\r
    optional uint32 mttType = 2;        // 比赛类型  1.普通 2.satellite  3.multi-day 4.sng/spinup\r
    optional string name = 3;           // 比赛名称\r
    optional uint32 tableType = 4;      // 牌桌类型 1-6人 2-9人\r
    optional uint32 action_time = 5;    // 操作时间(单位:s 默认:15)\r
    required uint32 fee = 6;            // 服务费比例   x100上传\r
    required double buyin = 7;          // buyin\r
    required double rebuy = 8;          // rebuy\r
    required double add_on = 9;         // add on\r
    required uint32 reBuyNum = 10;      // 重购次数 0 - 10\r
    required uint32 AddOnTimes = 11;    // add on 按照x10上传\r
    required uint32 raiseBlindTime = 12;  // 升盲时间(单位:s 默认:180)\r
    optional uint32 blindType = 13;     // 盲注结构类型 1.standard 2.turbo  3.deep stack\r
    optional uint32 initChip = 14;      // 初始筹码(单位:BB)\r
    required uint32 endJoinTime = 15;   // 延迟报名截止时间 (level)\r
    required uint32 delayTime = 16;     // 推迟开赛时间（单位：秒）\r
    optional uint32 minPerson = 17;      // 最少人数 \r
    optional uint32 maxPerson = 18;      // 最多人数 \r
    optional bool linked_email = 19;     // 绑定邮箱      \r
    optional bool ban_chatting = 20;     // 是否禁止聊天\r
    optional bool has_break = 21;        // 是否有休息时间\r
    optional uint32 prize_pool = 22;     // 奖池分配机制 1.10%   2.15%   3.20% (默认1)\r
    optional bool gtd_prize_pool = 23;   // 是否开启保底奖池\r
    required uint32 gtd_prize_size = 24; // 保底奖池奖金数\r
    repeated MttRewardInfo reward = 25;  // 自定义奖励\r
    optional MttCustomReward ticket = 26;// 卫星赛时,需要ticket\r
    optional uint32 startTime = 27;      // 比赛开始时间\r
    optional bool pc_restriction = 28;    // pc限制\r
    optional uint32 game_type = 29;       // 类型（1=德州扑克,2=6+,4=plo4,5=plo5,6=plo6 默认1）\r
    optional uint32 chair_num = 30;       // 椅子数（2-9）\r
    optional KOBounty ko_bounty = 31;     // KO赛 配置\r
    optional bool is_spinup = 32;     // spinup\r
    optional bool ios_only = 33;  // 仅限IOS设备(iphone/ipad)\r
    optional MttCustomRaiseBlind custom_raise_blind = 34;  // 自定义升盲\r
    repeated ClubLimit club_limit = 35;  // 仅限指定俱乐部参与\r
    optional uint32 is_super = 36;    //是否超级比赛\r
    required bool   is_open_ip      = 37;  // 是否开启ip限制\r
    required bool   is_sign_auth    = 38;  // 是否开启报名审核\r
    optional string game_img        = 39;  // 比赛图标\r
    repeated MttPropRewardInfo prop_reward   = 40;  // 自定义奖励（道具库版本）\r
    optional common.PropReward prop_ticket = 41;  // 卫星赛时,需要ticket（道具库版本）\r
    optional uint32 afk_act_times_to_allin = 42;  // 留座离桌用户托管多少次后开始allin\r
    optional SngRule sng            = 43;  // sng/spinup\r
    optional bool   is_open_gps     = 44;  // 是否开启gps限制\r
    optional bool auto_open         = 45;  // 自动重开\r
    optional uint32 coin_type       = 46;  // 货币类型(奖池)\r
    optional uint32 buy_coin_type   = 47;  // 货币类型(报名)\r
    optional uint32 reward_mode     = 48;   // 奖励模式 1普通，2并列\r
    optional uint32 reward_person_num = 49;   // 奖励人数\r
    optional bool is_open_guide = 50;   // 社群社媒引导开关\r
}\r
\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
\r
// 获取俱乐部所有比赛列表\r
message MsgGetAllMttInfo\r
{\r
    optional uint64 clubid = 1;\r
    optional uint32 myMtt = 2;  // 我的比赛（1表示查询我的比赛）\r
    optional uint32 is_hall = 3;  // 是否大厅比赛\r
}\r
\r
// 比赛列表\r
message MsgGetAllMttInfoRsp\r
{\r
    optional uint64 clubid = 1;\r
    repeated MttInfo list = 2;\r
}\r
\r
// 创建比赛\r
message MsgCreateMtt{\r
    required uint64 clubid = 1;      //俱乐部id\r
    optional uint32 mttType = 2;     // 比赛类型  1.普通 2.satellite  3.multi-day (默认1) 4.sng/spinup\r
    required MttRule rule = 3;       //mtt规则\r
    optional uint32 is_super = 4;    //是否超级比赛\r
    optional uint32 is_hall = 5;     //是否大厅比赛\r
}\r
\r
// 创建比赛返回\r
message MsgCreateMttRsp\r
{\r
    required uint32 ec = 1;                   //错误码\r
    optional uint64 mttid = 2;                  //创建比赛成功，返回Id\r
}\r
\r
// 请求申请报名/重购\r
message MsgApply\r
{\r
    optional uint64  mttid       = 1;\r
    optional uint32 applytype    = 2;  //1-申请报名  2-申请重购\r
    optional uint32 type         = 3;  // 1-申请  2-不申请（退赛） 3-手动申请\r
    optional uint64 clubid       = 4;  //俱乐部id\r
    optional uint32 unionid      = 5;  //联盟id\r
    optional uint32 chair_id     = 6;  //座位ID\r
    optional bool   is_simulator = 7;  //是否模拟器\r
    optional bool   is_gps_valid = 8;  //是否获取GPS  true表示获取gps  false表示未获取\r
    optional double vlat         = 9;  //纬度\r
    optional double vlong        = 10;  //经度\r
}\r
\r
// 请求申请报名/重购返回\r
message MsgApplyRsp\r
{   \r
    optional uint64  mttid          = 1;\r
    optional uint32 applytype       = 2;  //1-申请报名  2-申请重购\r
    optional uint32 type            = 3;  // 1-申请  2-不申请（退赛） 3-手动申请\r
    required uint32 ec              = 4;  //错误码\r
    optional string entried_club    = 5;  //已报名的俱乐部名称\r
    optional common.PropReward ticket = 6;  //报名使用的票数据或退还的票数据\r
}\r
\r
// 查看单局赛事排名信息\r
message MsgGetMttRankInfo\r
{\r
    optional uint64  mttid = 1;\r
    optional uint32 roomid = 2;  // 请求的桌子\r
    optional uint64 clubid = 3;  //俱乐部id\r
}\r
\r
// 查看单局赛事排名信息返回\r
message MsgGetMttRankInfoRsp\r
{\r
    //optional uint32  mttType = 1;       // 比赛类型 1-日锦标赛，2-周锦标赛 4.sng/spinup\r
    optional uint32  type = 2;          // 获取排名时间段 1-比赛开始前 2-比赛进行中 3-比赛结束\r
    repeated RankInfo rankList = 3;     // 列表\r
    optional uint32 obstate = 4;        // 1-可以旁观  2-不能旁观\r
    optional RankInfo myRank = 5;       // 我的排名信息\r
    optional uint32  myStatus = 6;      // 我的参赛状态（0未参赛未申请1参赛中2报名申请中）\r
    optional uint64 mttid = 7;          // 比赛id\r
}\r
\r
// 查看单局赛事实时奖励信息\r
message MsgGetMttRewardInfo\r
{\r
    optional uint64  mttid = 1;\r
}\r
\r
// 查看单局赛事实时奖励信息返回\r
message MsgGetMttRewardInfoRsp\r
{\r
    optional uint32  mttType = 1;           // 比赛类型\r
    repeated MttRewardInfo rewardList = 2;     \r
    optional uint32 rewardtype = 3;         // 奖励类型  1-奖池奖励  2- 自定义奖励\r
    optional uint32 chipcount = 4;          // 总奖励\r
    optional uint64 mttid = 5;              // 比赛id\r
}\r
\r
// 查看单局赛事实时奖励信息（道具库版）\r
message MsgGetMttPropRewardInfo\r
{\r
    optional uint64  mttid = 1;\r
}\r
\r
// 查看单局赛事实时奖励信息返回（道具库版）\r
message MsgGetMttPropRewardInfoRsp\r
{\r
    optional uint32  mttType              = 1;  // 比赛类型\r
    repeated MttPropRewardInfo rewardList = 2;\r
    optional uint32 rewardtype            = 3;  // 奖励类型  1-奖池奖励  2- 自定义奖励\r
    optional uint32 chipcount             = 4;  // 总奖励\r
    optional uint64 mttid                 = 5;  // 比赛id\r
}\r
\r
// 关闭比赛\r
message MsgCloseMtt\r
{\r
    optional uint64  mttid = 1;\r
    optional uint64 clubid = 2;             //俱乐部ID\r
}\r
\r
// 关闭比赛返回\r
message MsgCloseMttRsp\r
{\r
    required uint32 ec = 1;                   //错误码\r
}\r
\r
// 玩家进入/退出锦标赛\r
message MsgJoinMtt\r
{\r
    optional uint64  mttid           = 1;\r
    optional uint32  state           = 2;  // 进入状态 4 正常进入 7退出 8 旁观\r
    optional uint64  room_id         = 3;  // 旁观房间ID\r
    optional uint64  ob_playerid     = 4;  // 旁观人UID\r
    optional uint64 clubid           = 5;  // 俱乐部ID\r
    optional uint64 switch_out_mttid = 6;  //自动切出上一个比赛多桌\r
    optional bool   no_switch_out    = 7;  //关闭自动切出其他比赛\r
}\r
\r
// 玩家进入/退出锦标赛返回\r
message MsgJoinMttRsp\r
{\r
    optional uint32  state = 1;\r
    optional uint32  ec = 2;\r
    optional uint64  mttid = 3;\r
}\r
\r
// 请求查看单局赛事信息\r
message MsgGetMttInfo\r
{\r
    optional uint64  mttid = 1;\r
    optional bool    is_free_ticket = 2;    // 是否为免费门票\r
}\r
\r
// 请求查看单局赛事信息返回\r
message MsgGetMttInfoRsp\r
{\r
    optional MttInfo  mttInfo = 1;\r
}\r
\r
// 请求获取比赛牌桌列表\r
message MsgGetMttRoomList\r
{\r
    optional uint64  mttid = 1;\r
}\r
\r
// 请求获取比赛牌桌列表返回\r
message MsgGetMttRoomListRsp\r
{\r
    repeated MttRoomInfo mttroominfo = 1;\r
    optional uint32  obstate = 2;   // 1-可以旁观  2-不能旁观\r
    optional uint32 my_roomid = 3;  // 我所在的桌子\r
    optional uint64 mttid = 4;      // 比赛id\r
}\r
\r
// 请求获取比赛中赛况\r
message MsgGetMttLiveInfo\r
{\r
    optional uint64  mttid = 1;\r
    optional uint32 roomid = 2;  // 请求的桌子\r
}\r
\r
// 请求获取比赛中赛况返回\r
message MsgGetMttLiveInfoRsp\r
{\r
    optional RoomInfo gameinfo       = 1;\r
    optional uint32 startTime        = 2;   //开始时间\r
    optional uint32 num              = 3;   //报名人数\r
    optional uint32 maxPerson        = 4;   //最多人数\r
    optional uint32 raiseBlindTime   = 5;   //升盲时间 传值：1-13 对应13个选项\r
    repeated RankInfo rankList       = 6;\r
    optional PlayerRank memberrank   = 7;\r
    optional uint32 rebuy_num        = 8;\r
    optional uint32 addon_num        = 9;\r
    optional double prize_pool       = 10;\r
    optional uint64 mttid            = 11;  // 比赛id\r
    optional double ko_prize_pool    = 12;  // 猎人赛奖池\r
    optional double ko_value         = 13;  //KO赛单人奖励\r
    optional bool wait_balance_start = 14;  // 比赛等待开局（延迟报名未结束牌桌人数只剩1人）\r
    optional uint32 rest_time        = 15;   //休息时间点\r
    repeated double rewards          = 16;  //sng/spinup奖励\r
    optional uint32 multiplier       = 17;   //倍数\r
}\r
\r
// 获取指定比赛更新信息\r
message MsgGetMttFreshInfo\r
{\r
    optional uint64  mttid = 1;\r
}\r
\r
// 获取指定比赛更新信息返回\r
message MsgGetMttFreshInfoRsp\r
{\r
    optional uint64 mttid              = 1;\r
    optional uint32 num                = 2;  //报名人数\r
    optional uint32 startTime          = 3;  //开始时间\r
    optional sint32 buttonState        = 4;  //按钮状态 -1-报名 -2-申请中 -3-等待 -4-进入 -5-延迟进入 -6-重新进入 -7 比赛关闭  -9 比赛结束 -10 比赛旁观 0-暂无排名 其他正数为比赛名次\r
    optional MttTime time              = 5;  //时间显示，复合结构\r
    optional uint32 isMoney            = 6;  //是否进入钱圈\r
    optional bool is_entrance_close    = 7;  //是否关闭报名入口\r
    optional bool wait_balance_start   = 8;  // 比赛等待开局（延迟报名未结束牌桌人数只剩1人）\r
    optional MttPropRewardInfo first_rewards   = 9;  // 第一名奖励\r
    optional uint32 money_round_count  = 10;  // 钱圈人数\r
    optional bool is_free_ticket       = 11; // 免费门票\r
    optional double prize_pool         = 12; // 总奖池\r
    optional PlayerRank memberrank     = 13; // 玩家实时排名信息\r
}\r
\r
// 检查房间状态\r
message MsgGetRoomState\r
{\r
    optional uint64  mttid = 1;\r
    optional uint64  room_id = 2;           // 旁观房间ID\r
    optional uint64  ob_playerid = 3;       // 旁观人UID\r
}\r
\r
// 检查房间状态返回\r
message MsgGetRoomStateRsp\r
{\r
    optional uint64  mttid = 1;\r
    optional uint64  room_id = 2;           // 旁观房间ID\r
    optional uint64  ob_playerid = 3;       // 旁观人UID\r
    optional uint32  ec = 4;\r
}\r
\r
// 获取比赛场标签红点\r
message MsgGetMttRedPoint\r
{\r
    optional uint64 clubid = 1;             //俱乐部id\r
}\r
\r
// 获取比赛场标签红点返回\r
message MsgGetMttRedPointRsp\r
{\r
    optional uint32  red_point = 1;         //0无1有\r
    optional uint64  clubid = 2;         //0无1有\r
}\r
\r
// 请求修改比赛开始时间\r
message MsgChangeMttStartTime\r
{\r
    optional uint32 mttid          = 1;\r
    optional uint32 new_start_time = 2;  //新的开赛时间\r
    optional uint64  clubid        = 3;  //0无1有\r
}\r
\r
message MsgChangeMttStartTimeRsp\r
{\r
    required uint32  ec = 1;\r
}\r
\r
// 请求添加筹码\r
message MsgRequestAddon\r
{\r
    optional uint64  mttid = 1;             // 比赛ID\r
}\r
\r
message MsgRequestAddonRsp\r
{\r
    optional uint32  ec = 1;                // 错误码\r
    optional uint64 mttid = 2;              // 比赛ID\r
}\r
\r
// 请求rebuy和addon\r
message MsgRebuyAndAddon\r
{\r
    optional uint64  mttid = 1;             // 比赛ID\r
}\r
\r
message MsgRebuyAndAddonRsp\r
{\r
    optional uint32  ec = 1;                // 错误码\r
    optional uint64 mttid = 2;              // 比赛ID\r
}\r
\r
// 请求切出MTT\r
message MsgOutMtt\r
{\r
    required uint32 mttid = 1;              // 比赛ID\r
}\r
\r
message MsgOutMttRsp\r
{\r
    required uint32  ec = 1;                // 错误码\r
    required uint32 mttid = 2;              // 比赛ID\r
}\r
\r
//================ 置顶比赛 =========================\r
message MsgPinMtt\r
{\r
    optional uint32 mttid   = 1;  //比赛ID\r
    optional uint64  clubid = 2;  //俱乐部id\r
    optional uint32 opt     = 3;  //1 置顶 0取消置顶\r
}\r
\r
message MsgPinMttRsp\r
{\r
    required uint32 ec      = 1;  //返回结果\r
    optional uint32 mttid   = 2;  //房间id\r
    optional uint32 opt     = 3;  //1 置顶 0取消置顶\r
    optional uint32 pin     = 4;  //操作时设定的值\r
}\r
\r
//================ 设置报名申请开关=========================\r
message MsgSetSignAuthEnabled\r
{\r
    optional uint32 mttid         = 1;  //比赛ID\r
    optional uint64  clubid       = 2;  //俱乐部id\r
    optional bool authing_enabled = 3;  //报名审核开关状态\r
}\r
\r
message MsgSetSignAuthEnabledRsp\r
{\r
    required uint32 ec            = 1;  //返回结果\r
    optional uint32 mttid         = 2;  //房间id\r
    optional bool authing_enabled = 3;  //报名审核开关状态\r
}\r
\r
//================ 处理报名申请=========================\r
message MsgApplySignOperation\r
{\r
    optional uint32 mttid    = 1;  //房间id\r
    required uint64 clubid   = 2;  //俱乐部id\r
    optional uint64 playerid = 3;  //被处理人id \r
    optional uint32 AorR     = 4;  //同意或拒绝（AorR=1：拒绝，AorR=2：同意）\r
}\r
\r
message MsgApplySignOperationRsp\r
{\r
    required int32 ec        = 1;  // 错误码\r
    required uint64 playerid = 2;  //被处理人id\r
    optional uint32 mttid    = 3;  //房间id\r
}\r
\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
\r
// 玩家当前比赛牌局id广播\r
message MsgGameRoomIdCast\r
{\r
    optional uint64 room_id = 1;  // 牌局ID\r
    optional uint64 clubid  = 2;  // 俱乐部ID\r
    optional uint32 mttid   = 3;  // 比赛id\r
    optional uint32  state  = 4;  // 进入状态 4 正常进入 7退出 8 旁观\r
}\r
\r
// 玩家等待通知\r
message MsgWaitCast\r
{\r
    optional uint32  state = 1;// 0-等待上桌  1-等待统一发牌  2-是否进入牌局 3-取消等待  4-重购申请中 5-退出比赛（淘汰） 6-等待开赛  7.等待addon  8.等待休息\r
    optional uint32 value = 2;      // 开赛时间戳\r
    optional uint32 mttid = 3;      // 比赛id\r
}\r
\r
// 玩家淘汰通知\r
message MsgWeedCast\r
{\r
    optional string value = 1;  //提示信息\r
    optional uint32 mttid = 2;  //比赛id\r
    optional uint32 num   = 3;  //报名人数\r
    optional MttRule rule = 4;  // rule\r
}\r
\r
// 发送重购信息\r
message MsgRebuyInfoCast\r
{\r
    optional uint32 joinFee = 1;        // 参赛费用\r
    optional uint32 serverFee = 2;      // 服务费用\r
    optional uint32 leftTime = 3;       // 有效时间（时间戳 ）\r
    optional uint32 mttid = 4;          // 比赛id\r
}\r
\r
// 广播通知报名玩家进入牌局\r
message MsgPlayerJoinCast\r
{\r
    optional uint64  mttid = 1;\r
    optional uint64 clubid = 2;\r
    //optional uint32 mttType = 3;       // 比赛类型 1-日锦标赛，2-周锦标赛 4.sng/spinup\r
}\r
\r
// 发送玩家实时排名信息\r
message MsgPlayerRankCast\r
{\r
    optional PlayerRank memberrank = 1;\r
    optional uint32 mttid = 2;          // 比赛id\r
}\r
\r
// 广播比赛状态\r
message MsgMttStatusCast\r
{\r
    optional uint64 clubid = 1;\r
    optional uint64  mttid = 2;\r
    optional uint32  mttid_status = 3;  // 1.新建比赛 2.关闭比赛 3.比赛更新部分信息 4.比赛更新所有信息\r
    optional uint32 mtt_site = 4;   // 比赛位置 2.大厅     空.俱乐部\r
}\r
\r
// 报名人数变更\r
message MsgEntryPlayerNumChangeCast\r
{\r
    optional uint64 mttid = 1;\r
    optional uint32 num = 2;  //报名人数\r
    optional uint32 in_num = 3;  //还在比赛的人数\r
}\r
\r
// 广播牌局涨盲信息\r
message MsgRoomInfoCast\r
{\r
    optional RoomInfo gameinfo = 1;  \r
    optional uint32 mttid = 2;          // 比赛id\r
}\r
\r
message MsgAddonOrBreakCast\r
{\r
    optional uint32 type = 1;           //1.addon 2.break\r
    optional uint32 time = 2;           //时间\r
    optional uint32 mttid = 3;          // 比赛id\r
    optional uint32 add_on = 4;         // add_on次数\r
}\r
\r
message MsgNextHandAddonOrBreakCast\r
{\r
    optional uint32 type = 1;           //1.addon 2.break\r
    optional uint32 mttid = 2;           //比赛id\r
}\r
\r
message MsgNotifyMatchStartCast\r
{\r
    optional uint32 clubid = 1;         // 俱乐部id\r
    optional uint32 mttid = 2;          // 比赛id\r
    optional string name = 3;           // 比赛名称 \r
    optional uint32 start_time = 4;     // 开赛时间\r
    optional SngRule sng       = 5;  // sng/spinup\r
}\r
\r
message MsgNotifyFinalTableCast\r
{\r
    optional uint32 mttid = 1;          // 比赛id\r
}\r
\r
message MsgNotifyUserSignAuthCast\r
{\r
    optional uint32 mttid      = 1;  // 比赛id\r
    optional uint32 playerid   = 2;  // 玩家id\r
    optional bool sign_authing = 3;  // 是否报名审核中\r
}\r
\r
message MsgNotifyMttSignAuthCast\r
{\r
    optional uint32 mttid         = 1;  // 比赛id\r
    optional bool authing_enabled = 2;  // 比赛审核开关\r
}\r
\r
// 广播钱圈状态\r
message MsgMttMoneyRoundCast\r
{\r
    optional uint64 mttid = 1;              // 比赛id\r
    optional uint32 money_round = 2;        // 钱圈状态（1:在钱圈）\r
}\r
\r
// 广播玩家信息\r
message MsgMttPlayerInfoCast\r
{\r
    optional uint64 mttid = 1;                      // 比赛id\r
    optional PlayerInfo player_info = 2;            // 玩家信息\r
}\r
\r
//==============================sng===============================\r
message MsgNotifySpinUpMultiplierCast\r
{\r
    optional uint32 mttid = 1;          // 比赛id\r
    optional uint32 multiplier = 2;     // 比赛奖励倍数\r
    optional uint32 reward = 3;         // 比赛总奖励\r
}\r
\r
//==============================换桌通知===============================\r
message MsgChangeTableCast\r
{\r
    optional uint64 mttid = 1;          // 比赛id\r
    optional uint32 roomid = 2;         // 房间id\r
}\r
\r
//==============================mtt比赛最终结算===============================\r
message MsgMttFinalSettleInfo\r
{\r
    optional uint64 mttid                           = 1;    // 比赛id\r
    repeated MttFinalSettlePlayerInfo player_infos  = 2;    // 用户信息s\r
}\r
\r
message MttFinalSettlePlayerInfo\r
{\r
    optional uint32 playerid            = 1;    // 玩家id\r
    optional string name                = 2;    // 姓名\r
    optional string avatar              = 3;    // 头像\r
    optional string value               = 4;    // value\r
}`,__vite_glob_0_7=`syntax = "proto2";\r
package notice;\r
\r
//\r
// 消息信息结构\r
//\r
message NoticeInfo\r
{\r
    optional string noticeId = 1;         		// 通知id\r
    optional string content = 2;				// 消息内容（json数据）\r
    optional uint32 time = 3;					\r
    optional uint32 need_deal = 4;              // 0不需要处理的通知 1需要处理的通知  \r
    optional uint32 status = 5;             	// 0-未处理，1-已拒绝，2-已同意\r
    optional uint32 type = 6;             		// 消息类型(2系统消息)\r
    optional uint32 sub_type = 7;             	// 消息子类型-- 消息类型notice_config\r
    optional uint32 is_read = 9;                // 是否已读 0:未读  1:已读\r
}\r
\r
//\r
// 弹窗消息结构\r
//\r
message PopupMessageInfo\r
{\r
    optional uint32 sceneType = 1;      //对应场景类型（0表示不限场景，1大厅2牌局）\r
    optional uint32 winId = 2;          //窗体id\r
    optional string param = 3;          //内容（json格式 param = {contentText = "xxx",isHideCancelButton = true/false,...}）\r
    optional uint32 isOnce = 4;         //是否循环滚动 0每次都弹，1每次启动只弹一次\r
}\r
\r
\r
//\r
// 获取通知列表\r
//\r
message MsgGetMessageList 	\r
{ \r
    optional uint32 get_type = 1;               //消息类型(2系统消息)\r
    optional uint32 limit = 3;                  //限制条数\r
    optional string noticeId = 4;               // 消息id\r
}\r
\r
//\r
// 获取通知列表返回\r
//\r
message MsgGetMessageListRsp\r
{\r
	repeated NoticeInfo noticelist = 1;\r
    optional uint32 get_type = 2;               //消息类型(2系统消息)\r
}\r
\r
\r
//\r
// 获取未读通知数量\r
//\r
message MsgGetUnReadMessageNum 	\r
{ \r
    optional uint32 get_type = 1;               //消息类型(2系统消息)\r
    optional uint32 limit = 3;                  //限制条数\r
    optional string noticeId = 4;               // 消息id\r
}\r
\r
//\r
// 获取未读通知数量返回\r
//\r
message MsgGetUnReadMessageNumRsp\r
{\r
	required uint32 num = 1;\r
    optional uint32 get_type = 2;               //消息类型(2系统消息)\r
}\r
\r
\r
//================ 标记为已读======================\r
message MsgReadMessage \r
{\r
    required string noticeId = 1;               //消息id\r
}\r
\r
message MsgReadMessageRsp\r
{\r
    required uint32 ec = 1;                     //错误码\r
    optional string noticeId = 2;               //消息id\r
}\r
\r
//============== 删除消息 =========================\r
message MsgDelMessage\r
{\r
    required uint32 type = 1;                   //1.指定消息   2.所有已读\r
    optional string noticeId = 2;               //消息id\r
    optional uint32 get_type = 3;               //删除所有已读时 过滤 消息类型(2系统消息)\r
    repeated string noticeIds = 5;              //消息id数组\r
}\r
\r
message MsgDelMessageRsp\r
{\r
    required uint32 ec = 1;                     //错误码\r
    optional uint32 type = 2;                   //消息\r
    optional string noticeId = 3;               //消息id\r
    repeated string noticeIds = 4;              //消息id数组\r
}\r
\r
//\r
// 获取弹窗消息列表\r
//\r
message MsgGetPopupMessageList   \r
{\r
    optional string channel = 1;                        // channel\r
}\r
\r
//\r
// 获取弹窗消息列表返回\r
//\r
message MsgGetPopupMessageListRsp\r
{\r
    repeated PopupMessageInfo list = 1;\r
}\r
\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
\r
//\r
// 新增通知\r
//\r
message MsgNewMessageCast\r
{\r
    optional NoticeInfo notice = 1;\r
}\r
\r
//\r
// 弹窗消息\r
//\r
message MsgPopupMessageCast\r
{   \r
    repeated PopupMessageInfo list = 1;\r
}\r
\r
//\r
// 滚动消息\r
//\r
message MsgScrollMessageCast\r
{   \r
    optional uint32 noticeId = 1;       //消息ID （客户端定义 ID和content的解析）\r
    optional uint32 sceneType = 2;      //对应场景类型（0表示不限场景，1大厅2牌局）\r
    optional uint32 isOnce = 3;         //是否循环滚动 0无限循环，1滚动一次\r
    optional string content = 4;        //内容 json encode 客户端根据 ID实习解析\r
}\r
\r
\r
// 停服公告消息推送\r
message MsgShutdownNoticeUpdateCast\r
{\r
}\r
\r
// 滚屏消息刷新推送\r
message MsgScrollNoticeUpdateCast\r
{\r
}`,__vite_glob_0_8=`syntax = "proto2";
package opsconfig;

// 运营配置契约:签到、钻石档位、礼包、会员卡、VIP、活动、在线奖励。
// 后台(admin)增删改落库,gate 通过 /poker/ops/* REST 端点读同库并以 JSON 下发,
// 字段名与本契约一致。客户端据此渲染大厅内的运营界面。
// 注意:大厅走 JSON-over-HTTP,本 proto 是"字段契约/规范",非 WS 运行时消息。

// ================= 签到 =================
// 每天一档,day 为 1..7 循环。
message SigninItem {
    optional int32 day         = 1;  // 第几天(1..7)
    optional int32 reward_type = 2;  // 1=金币 2=钻石
    optional int64 amount      = 3;  // 奖励数量
    optional bool  enabled     = 4;
}
message MsgGetSigninConfigList {}
message MsgGetSigninConfigListRsp {
    optional int32      result = 1;  // 0=成功
    repeated SigninItem list   = 2;
}

// ================= 钻石充值档位 =================
message DiamondTier {
    optional int32  id      = 1;
    optional int64  amount  = 2;  // 基础钻石数
    optional int64  bonus   = 3;  // 赠送钻石数
    optional string price   = 4;  // 展示价格(带货币符号)
    optional string tag     = 5;  // 角标文案(如 首充双倍)
    optional int32  sort    = 6;
    optional bool   enabled = 7;
}
message MsgGetDiamondTierList {}
message MsgGetDiamondTierListRsp {
    optional int32       result = 1;
    repeated DiamondTier list   = 2;
}

// ================= 礼包 =================
message PackItem {
    optional int32  id         = 1;
    optional string name       = 2;
    optional string desc       = 3;
    optional int64  gold       = 4;  // 含金币数
    optional int64  diamond    = 5;  // 含钻石数
    optional string price      = 6;  // 展示价格
    optional string tag        = 7;  // 角标
    optional int32  limit_type = 8;  // 0=不限 1=每日 2=一次性
    optional int32  sort       = 9;
    optional bool   enabled    = 10;
}
message MsgGetPackList {}
message MsgGetPackListRsp {
    optional int32    result = 1;
    repeated PackItem list   = 2;
}

// ================= 会员卡 =================
message CardItem {
    optional int32  id           = 1;
    optional string name         = 2;
    optional int32  days         = 3;  // 有效天数
    optional int32  daily_type   = 4;  // 每日发放类型 1=金币 2=钻石
    optional int64  daily_amount = 5;  // 每日发放数量
    optional string price        = 6;
    optional string tag          = 7;
    optional int32  sort         = 8;
    optional bool   enabled      = 9;
}
message MsgGetCardList {}
message MsgGetCardListRsp {
    optional int32    result = 1;
    repeated CardItem list   = 2;
}

// ================= VIP 等级 =================
message VipLevel {
    optional int32  level    = 1;
    optional int64  exp      = 2;  // 达到该等级所需累计经验
    optional string name     = 3;  // 等级名(可空)
    optional string benefits = 4;  // 权益文案
    optional bool   enabled  = 5;
}
message MsgGetVipList {}
message MsgGetVipListRsp {
    optional int32    result = 1;
    repeated VipLevel list   = 2;
}

// ================= 活动 =================
message ActivityItem {
    optional int32  id         = 1;
    optional string title      = 2;
    optional string desc       = 3;
    optional string image      = 4;  // banner 图 URL
    optional int32  link_type  = 5;  // 0=无 1=商城 2=外链 3=内部页
    optional string link_value = 6;  // 跳转目标
    optional int64  start_time = 7;  // 开始时间(unix 秒;0=不限)
    optional int64  end_time   = 8;  // 结束时间(unix 秒;0=不限)
    optional int32  sort       = 9;
    optional bool   enabled    = 10;
}
message MsgGetActivityList {}
message MsgGetActivityListRsp {
    optional int32        result = 1;
    repeated ActivityItem list   = 2;
}

// ================= 在线奖励 =================
// 按累计在线分钟阈值发放。
message OnlineRewardItem {
    optional int32 id          = 1;
    optional int32 minutes     = 2;  // 累计在线分钟阈值
    optional int32 reward_type = 3;  // 1=金币 2=钻石
    optional int64 amount      = 4;
    optional int32 sort        = 5;
    optional bool  enabled     = 6;
}
message MsgGetOnlineRewardList {}
message MsgGetOnlineRewardListRsp {
    optional int32            result = 1;
    repeated OnlineRewardItem list   = 2;
}
`,__vite_glob_0_9=`syntax = "proto2";\r
package ping;\r
\r
//\r
// 心跳\r
//\r
message MsgPing\r
{\r
    optional int32 tag = 1;         //客户端标记，方便客户端区分不同的心跳\r
}\r
\r
//\r
// 心跳返回\r
//\r
message MsgPingRsp\r
{\r
    optional int32 timestamp = 1;  //服务器时间戳\r
    optional int32 tag = 2;         //客户端标记，方便客户端区分不同的心跳\r
}\r
\r
\r
`,__vite_glob_0_10=`syntax = "proto2";\r
import "mtt.proto";\r
import "common.proto";\r
package role;\r
\r
\r
message ItemInfo {\r
    optional uint32 itemid = 1;         //道具ID\r
    optional uint32 num = 2;            //道具数量\r
}\r
\r
message PlayerTag {\r
    required uint64 playerid  = 1;  //标记的玩家\r
    required string desc_tag  = 2;  //内容标记\r
    required uint32 color_tag = 3;  //颜色标记\r
}\r
\r
message GameAutoBuyIn\r
{\r
    optional uint32  threshold_chips = 1; //bb数\r
    optional uint32  buyin_chips     = 2; //bb数\r
}\r
\r
message Mobile\r
{\r
    required string number = 1; // 手机号\r
    required string country = 2;\r
    required string dialing = 3; // 区号\r
}\r
\r
// 玩家信息\r
message RoleInfo \r
{\r
    optional string email             = 1;   // email\r
    optional string nick              = 2;   // 名字\r
    optional uint32 sex               = 3;   // 性别    \r
    optional uint32 province          = 4;   // 省\r
    optional uint32 city              = 5;   // 城市\r
    optional string signature         = 6;   // 签名\r
    optional uint32 diamonds          = 7;   // 钻石\r
    optional uint64 chip              = 8;   // 筹码\r
    optional string avatar            = 9;   // 头像\r
    optional int32 vip                = 10;  // vip等级（0无,1银，2黑，3紫）\r
    optional uint32 win_count         = 11;  // 胜场数\r
    optional uint32 lose_count        = 12;  // 负场数\r
    optional uint32 table_count       = 13;  // 总手数\r
    optional int32 profit             = 14;  // 总收益\r
    optional uint64 playerid          = 15;  // 玩家id\r
    optional uint32 first_modify_name = 16;  //是否修改过昵称\r
    optional uint32 guide             = 17;  //引导进度\r
    optional uint32 reg_bonus         = 18;  //是否领过注册奖励\r
    optional string area              = 19;  //国家或地区\r
    optional uint32 vip_exprie        = 20;  //vip到期时间\r
    repeated ItemInfo item_list       = 21;  //道具列表\r
    optional uint32 vip_prop          = 22;  //vip道具数量\r
    optional uint32 vip_time_bank     = 23;  //vip时间银行数量\r
    optional uint64 report            = 25;  //数据上报信息\r
    repeated string used_heads        = 26;  //历史头像\r
    required uint32 hide_profit       = 27;  //1隐藏 0.不隐藏\r
    required GameAutoBuyIn auto_buyin = 28;  //自动买入\r
    optional int64 cash               = 29;  // 可提现现金(真金) 扩大100倍（保留小数点后两位） 前端显示除100\r
    optional uint64 exp               = 30;  // 经验\r
    optional uint32 level             = 31;  // 等级\r
    optional uint64 tgp_chip          = 32;  // tgp(筹码扩大100倍,保留小数点后两位,前端显示除100)\r
    optional Mobile mobile            = 33;  // 手机号\r
    optional string social_avatar     = 34;  // 社交头像\r
    optional uint32 newbie_guide      = 35;  // 是否进入新手教程 0:不进入 1:进入\r
    optional int64 bind_cash          = 36;  // 不可提现现金(真金) 扩大100倍（保留小数点后两位） 前端显示除100\r
}\r
\r
//生涯数据\r
message CareerInfo\r
{\r
    optional uint32 type = 1;     //1.NLH,2.PLO,3.6+, 11 MTT_NLH, 12.MTT_PLO\r
    optional uint32 games = 2;    //游戏数\r
    optional uint32 hands = 3;    //手数\r
    optional double profit = 4;   //收益\r
}\r
\r
//\r
// 请求玩家信息\r
//\r
message MsgRoleInfo 	\r
{ \r
    optional uint64 playerid = 1;  // 玩家id(0 代表请求自己的基本信息)\r
}\r
\r
//\r
// 请求玩家信息返回\r
//\r
message MsgRoleInfoRsp\r
{\r
    optional uint64 playerid = 1;      // 玩家id\r
    optional RoleInfo role = 2;       // 玩家信息\r
}\r
\r
//\r
// 玩家筹码变动通知\r
//\r
message MsgRoleChipChangeCast\r
{\r
    optional uint64 playerid = 1;      // 玩家id\r
    optional double chip = 2;          // 玩家账号当前筹码\r
    optional uint32 Reason = 3;        // 更新原因\r
}\r
\r
//\r
// 玩家钻石变动通知\r
//\r
message MsgRoleDiamondChangeCast\r
{\r
    optional uint64 playerid = 1;      // 玩家id\r
    optional uint32 diamond = 2;          // 玩家账号当前钻石\r
    optional uint32 Reason = 3;        // 更新原因\r
}\r
\r
//\r
// 玩家现金变动通知\r
//\r
message MsgRoleCashChangeCast\r
{\r
    optional uint64 playerid = 1;      // 玩家id\r
    optional int64  cash = 2;          // 玩家账号可提现真金 扩大100倍(保留小数点后2位) 前端显示除100\r
    optional uint32 Reason = 3;        // 更新原因\r
    optional int64  bind_cash = 4;     // 玩家账号不可提现真金 扩大100倍(保留小数点后2位) 前端显示除100\r
}\r
\r
//\r
// 玩家vip等级变动通知\r
//\r
message MsgRoleVipLevelChangeCast\r
{\r
    optional uint64 playerid = 1;      // 玩家id\r
    optional uint32 vip = 2;          // 玩家账号当前vip等级\r
}\r
\r
//\r
// 玩家经验等级变动通知\r
//\r
message MsgRoleExpLevelChangeCast\r
{\r
    optional uint64 playerid = 1;           // 玩家id\r
    optional uint64 exp = 2;                // 玩家账号当前经验\r
    optional uint32 level = 3;              // 玩家账号当前等级\r
}\r
\r
//\r
// 请求玩家牌局统计\r
//\r
message MsgRoleGameLog 	\r
{ \r
    optional uint64 playerid = 1;  // 玩家id(0 代表请求自己的基本信息)\r
}\r
\r
//\r
// 请求玩家牌局统计返回\r
//\r
message MsgRoleGameLogRsp\r
{\r
    optional uint32 all_field_num = 1;              //总场次\r
    optional uint32 win_table_count = 2;            //赢手数\r
    optional uint32 all_pot_num = 3;                //总池数\r
    optional uint32 in_pot_num = 4;                 //入池数\r
    optional uint32 max_pot_chip = 5;               //最大奖池\r
    optional uint32 table_count = 6;                //总手数\r
}\r
\r
\r
//\r
// 玩家信息变动通知（收到通知请求MsgRoleInfo重新获取玩家信息）\r
//\r
message MsgRoleInfoChangeCast\r
{\r
}\r
\r
//\r
// 设置玩家信息\r
//\r
message MsgSetRoleInfo \r
{ \r
    optional string avatar    = 1;  // 头像\r
    optional string email     = 2;  // email\r
    optional uint32 sex       = 3;  // 性别    \r
    optional uint32 province  = 4;  // 省\r
    optional string signature = 5;  // 签名\r
\r
    optional string name         = 6;  // 名字(仅在测试可以使用)\r
    optional uint32 chip         = 7;  // 筹码(仅在测试可以使用)\r
    optional bool default_avatar = 8;  // 是否默认头像\r
    optional string channel      = 9;  // 渠道(tg：1000)\r
}\r
\r
//\r
// 设置玩家信息返回\r
//\r
message MsgSetRoleInfoRsp\r
{\r
    required uint32 result = 1;         //返回结果 \r
}\r
\r
//\r
// 获取玩家头像修改开关\r
//\r
message MsgChangeAvatarSwitch\r
{ \r
}\r
\r
//\r
// 获取玩家头像修改开关返回\r
//\r
message MsgChangeAvatarSwitchRsp\r
{\r
    optional uint32 switch = 1; // 1可以\r
}\r
\r
\r
//\r
// 获取本地日志上传设置信息\r
//\r
message MsgGetReportLogSet\r
{ \r
}\r
\r
//\r
// 获取本地日志上传设置信息返回\r
//\r
message MsgGetReportLogSetRsp\r
{\r
    optional uint64 playerid = 1;       // 玩家id\r
    optional uint64 start_time = 2;      // 开始时间\r
    optional uint64 end_time = 3;        // 结束时间\r
}\r
\r
//============= 获取游戏钻石的配置  ==================\r
message MsgGetGameConfig\r
{  \r
}\r
\r
message MsgGetGameConfigRsp\r
{\r
    optional uint32 diamond_to_chip        = 3;  //钻石兑换筹码比例\r
    optional uint32 change_nick            = 4;  //修改昵称需要的钻石\r
    optional uint32 room_prop              = 5;  //房间互动道具需要的钻石\r
    optional uint32 dataexport_transaction = 7;  //导出数据中交易记录需要的钻石\r
    optional uint32 dataexport_diamond     = 8;  //导出数据中钻石流水需要的钻石\r
    optional uint32 fee_mtt_diamond        = 9;  //免费报名MTT比赛需要的钻石\r
}\r
\r
\r
//=========== 修改guide进度 ================================\r
message MsgSetRoleGuide\r
{\r
    required uint32 guide = 1;              //当前guide\r
}\r
\r
message MsgSetRoleGuideRsp\r
{\r
    required uint32 ec = 1;                 //错误码\r
}\r
\r
//================ 获取生涯信息 =====================\r
message MsgGetRoleCareer\r
{\r
    required uint32 is_all = 1;           //是否获取所有生涯信息(0:获取指定时间 1:获取所有)\r
    optional uint32 start_time = 2;       //开始时间\r
    optional uint32 end_time = 3;         //结束时间\r
}\r
\r
message MsgGetRoleCareerRsp\r
{\r
    required uint32 ec = 1;                 //错误码\r
    repeated CareerInfo careerInfo = 2;     //生涯信息\r
}\r
\r
//================ 获取免费道具数量 =====================\r
message MsgGetFreePropCount\r
{\r
\r
}\r
\r
message MsgGetFreePropCountRsp\r
{\r
\r
}\r
\r
//================= 注销账号 =====================\r
message MsgDeleteAccount\r
{\r
}\r
\r
message MsgDeleteAccountRsp\r
{\r
    required uint32 ec = 1;         //错误码\r
}\r
\r
//=========== 修改上报进度 ================================\r
message MsgSetRoleReport\r
{\r
    required uint64 report = 1;     //上报的FLAG\r
}\r
\r
message MsgSetRoleReportRsp\r
{\r
    required uint32 ec = 1;         //错误码\r
    required uint64 report = 2;     // report flag\r
}\r
\r
//\r
//=========== 设置玩家标记 ================================\r
//\r
message MsgSetRoleTag\r
{\r
    required PlayerTag tag = 1;\r
}\r
\r
message MsgSetRoleTagRsp\r
{\r
    required uint32 ec     = 1;  //错误码\r
    required PlayerTag tag = 2;\r
}\r
\r
message MsgGetRoleTagList\r
{\r
}\r
\r
message MsgGetRoleTagListRsp\r
{\r
    required uint32 ec      = 1;  //错误码\r
    repeated PlayerTag tags = 2;  //设置的tag\r
}\r
\r
//\r
//=========== 设置隐藏记分牌记录 =======================\r
//\r
message MsgSetHideProfit\r
{\r
    required uint32 hide_profit = 1; // 1隐藏 0.不隐藏\r
}\r
\r
message MsgSetHideProfitRsp\r
{\r
    required uint32 ec     = 1;  //错误码\r
    required uint32 hide_profit = 2;// 1隐藏 0.不隐藏\r
}\r
\r
//\r
//=========== 设置玩家自动买入 =======================\r
//\r
message MsgSetAutoBuyin\r
{\r
    required GameAutoBuyIn auto_buyin = 1;\r
}\r
\r
message MsgSetAutoBuyinRsp\r
{   \r
    required uint32 ec                = 1;\r
    required GameAutoBuyIn auto_buyin = 2;\r
}\r
\r
message MsgGetAutoBuyin\r
{\r
}\r
\r
message MsgGetAutoBuyinRsp\r
{\r
    required uint32 ec                = 1;\r
    optional GameAutoBuyIn auto_buyin = 2;\r
}\r
\r
//==================== 获取用户授权码 ========================\r
message MsgGetProfileCode\r
{\r
}\r
\r
message MsgGetProfileCodeRsp\r
{\r
    required uint32 ec = 1;         //错误码\r
    optional uint32 playerid = 2;   //用户ID\r
    optional string code = 3;       //授权码\r
}\r
\r
//==================== 注册奖励通知  ========================\r
message MsgRegBonusCast {\r
    optional uint32 diamond = 1;            //奖励的钻石数量\r
    optional uint32 chips = 2;              //奖励的筹码数量\r
}\r
\r
//===================  vip 状态变化 ========================\r
message MsgVipStateChangeCast {\r
    optional uint32 vip_level = 1;          //vip等级\r
    optional uint32 vip_exprie = 2;         //到期时间\r
}\r
\r
//================= vip 免费道具变化 ======================\r
//只会通知有变化的道具,通知最新值\r
message MsgVipFreeChangeCast {\r
    optional uint32 vip_prop = 1;           //vip免费道具\r
    optional uint32 vip_time_bank = 2;      //vip免费时间银行\r
}\r
\r
//================= 道具变化 ======================\r
message MsgItemsChangeCast {\r
    optional uint32 itemid = 1;            //道具id（兔子相机/时间银行）\r
    optional uint32 num = 2;                //道具数量\r
}\r
\r
//================== 获取大厅背包数据 ============================\r
message MsgGetHallBackPack\r
{\r
    optional uint64 playerid = 1;               //俱乐部ID\r
}\r
\r
message MsgGetHallBackPackRsp\r
{\r
    required uint32 ec                 = 1;  // 错误码\r
    repeated mtt.MttCustomReward list  = 2;  // 实物数据\r
}\r
\r
//================== 获取大厅背包数据（道具库版本） ===================\r
message MsgGetBackPack\r
{\r
}\r
\r
message MsgGetBackPackRsp\r
{\r
    required uint32 ec            = 1;  // 错误码\r
    repeated common.PropReward list = 2;  // 实物奖励\r
}\r
\r
//==================== 背包是否有道具  ========================\r
message MsgBackPackCast {\r
    optional bool if_have = 1;            //背包是否有道具\r
}\r
\r
// 广播奖励变化\r
message MsgInviteAwardInfoCast {\r
    required uint32 type = 1; // 1邀请奖励  2被要请的奖励 3:新人奖励\r
    repeated common.PropReward rewards = 2; //奖励列表\r
}\r
\r
// 完成新手指南\r
message MsgFinishNewbieGuide {}\r
message MsgFinishNewbieGuideRsp {\r
    required uint32 ec = 1;  // 错误码\r
    optional uint32 cash = 2; // 奖励金额\r
    optional uint32 room_id = 3;  //房间id 没有能进入到现金桌时：回到大厅，有能进入到现金桌时选择小盲最低的牌桌\r
}\r
\r
message ChargeRewardsConfig {\r
    optional double cash = 1; // 奖励真金\r
    optional double bind_cash = 2; // 奖励尼玛\r
    optional double recharge_amount = 3; // 充值金额\r
}\r
\r
// 充值活动状态变化通知\r
message MsgChargeRewardsUpdateCast {\r
    optional uint32 status = 1; // 状态 0 未达成 1 可领取 2 已领取\r
    optional ChargeRewardsConfig config = 2; // 活动配置\r
}\r
\r
// 查询首充活动状态\r
message MsgGetChargeRewardsInfo {}\r
message MsgGetChargeRewardsInfoRsp {\r
    required uint32 ec = 1;  // 错误码\r
    optional uint32 is_open = 2; // 活动是否开启\r
    optional uint32 status = 3; // 状态 0 未达成 1 可领取 2 已领取\r
    optional ChargeRewardsConfig config = 4; // 活动配置\r
}\r
\r
// 冻结和解冻状态推送\r
message MsgBlockStatusCast {\r
    required uint32 unblock_time = 1; // 时间戳\r
}\r
\r
message TimeRange {\r
    optional uint32 start_time = 1; // 开始时间\r
    optional uint32 end_time = 2; // 结束时间\r
}\r
\r
message LTRechargeStageInfo {\r
    optional uint32 index = 1; // 档位\r
    optional uint32 amount = 2; // 充值金额 单位 美分 1美元=100美分\r
    optional uint32 cash = 3; // 奖励现金 单位美分 1美元=100美分\r
    optional uint32 bind_cash = 4; // 奖励尼玛 单位 美分 1美元=100美分\r
    optional uint32 status = 5; // 玩家活动状态  0:未达成 1:可领取 2:已领取\r
}\r
\r
// 查询限时充值活动信息\r
message MsgLimitedTimeRechargeInfo {}\r
message MsgLimitedTimeRechargeInfoRsp {\r
    required uint32 ec = 1;  // 错误码\r
    optional uint32 is_open = 2; // 活动是否开启\r
    optional TimeRange open_time = 3; // 活动开启时间\r
    optional TimeRange show_time = 4; // 活动展示时间\r
    repeated LTRechargeStageInfo infos = 5; // 不同档位的配置和状态\r
}\r
\r
// 领取限时充值活动奖励\r
message MsgPickLimitedTimeRechargeReward {\r
    required uint32 index = 1; // 领取档位ID\r
}\r
message MsgPickLimitedTimeRechargeRewardRsp {\r
    required uint32 ec = 1;  // 错误码\r
    optional LTRechargeStageInfo info = 2; // 当前领取的档位配置\r
}\r
\r
// 推送活动状态变化  推送时机：充值达成/领取奖励\r
message MsgLimitedTimeRechargeInfoCast {\r
    optional TimeRange open_time = 1; // 活动开启时间\r
    optional TimeRange show_time = 2; // 活动展示时间\r
    repeated LTRechargeStageInfo infos = 3; // 不同档位的配置和状态\r
}`,__vite_glob_0_11=`syntax = "proto2";\r
package rooms;\r
\r
// ==========  玩家数据 ==================\r
//\r
//=======================================\r
message PlayerData\r
{\r
    optional uint64 playerid = 1;               // 玩家ID\r
    optional string  name = 2;                  // 玩家名字\r
    optional string  icon = 3;                  // 头像\r
    optional uint32 vip_level = 4;             // vip等级\r
    optional uint32 sex = 5;                   // 性别\r
    optional double  chip = 6;                 // 筹码\r
    optional double  table_chip = 7;            // 桌上筹码数\r
    optional uint32 club_pos = 8;              // 俱乐部职位（2=创建者，1=管理员，0=普通成员）\r
    optional double club_chip = 9;            // 在俱乐部里的总筹码数\r
    optional double vlat = 10;                 //纬度\r
    optional double vlong = 11;                //经度\r
    optional bool   is_gps_valid  = 12;        //是否获取GPS  true表示获取gps  false表示未获取\r
    optional uint32 chair_id=13;               //椅子ID\r
    optional bool   is_creator = 14;           //是否创建者  \r
    optional bool straddle = 15;\r
    //optional bool is_fold = 16;\r
    optional bool is_leftback = 17;             //是否暂离\r
    optional uint32 act_status = 18;               //玩家行动状态（1=让牌，2=弃牌，3=跟注，4=加注，5=ALLIN，6=延时，7=straddle, 9=第一个下注，10=大盲注，11=小盲注）\r
    optional uint32 status = 19;               //玩家状态（0=无状态，1=入局，2=ALLIN，3=弃牌）\r
    optional uint64 left_time = 20;                   // 留座到期时间（时间戳）\r
    optional uint64 add_chip_left_time = 21;                   // 补码倒计时到期时间（时间戳）\r
    optional double win_chip = 22;              //牌桌中赢取筹码\r
    optional uint32 calltime = 23;              //calltime剩余时间\r
    optional bool use_evchop = 24;           //是否使用ev_chop   true 使用  false 未使用\r
    repeated int32 handcards = 25;              //手牌\r
    optional double ko_value = 26;              //ko值\r
    optional uint32 wait_sitdown_left_time = 27;  //等待坐下倒计时到期时间\r
    optional bool ready_enabled = 28;  //是否可以ready\r
    optional bool be_ready = 29;  //是否准备好了\r
    optional bool leave_next_round = 30;  //是否下一把离开\r
    optional uint32 last_out_chips = 31;             // 上次带出筹码\r
    optional uint32 total_bought_chips = 32;    // 累计买入筹码\r
    optional bool is_auto_recover = 33;                 // 是否自动回收到钱包\r
    optional double already_recover_chips = 34;              // 已回收筹码\r
}\r
\r
//================ 玩家统计数据  =======================\r
//\r
//=================================================\r
message PlayerStatistics\r
{\r
    required uint64 playerid = 1;           // 玩家id\r
    optional string  name = 2;               // 玩家昵称        \r
    required int64 bring_in_chip = 3;       // 带入筹码\r
    required double win_chip = 4;            // 输赢筹码（小于0表示输掉的筹码）\r
    optional string icon = 5;               // 玩家头像\r
    optional uint32 game_num = 6;           // 玩家玩牌手数\r
    optional double fee = 7;                // 玩家服务费\r
    required double bring_in_chip_double = 8;       // 带入筹码（double类型,不改上面的，方便兼容旧版本）\r
    optional uint32 jackpot_chips = 9;      // jackpot 获奖金额 = 实际金额*100\r
}\r
\r
//=================== 玩家俱乐部数据(OFC部分)  =====================\r
message PlayerClubDataOfcPart\r
{\r
    optional uint32 ftc_num     = 1;  // ftc次数\r
    optional uint32 re_ftc_num  = 2;  // re-ftc次数\r
    optional uint32 bust        = 3;  // 爆牌次数(可当fish用)\r
    optional uint32 qq_ftc_num  = 4;  // qq-ftc次数\r
    optional uint32 kk_ftc_num  = 5;  // kk-ftc次数\r
    optional uint32 aa_ftc_num  = 6;  // aa-ftc次数\r
    optional uint32 tok_ftc_num = 7;  // tok-ftc次数\r
\r
    optional uint32 regular_num     = 8;   // 常规次数\r
    optional uint32 progressive_num = 9;   // 进阶次数\r
    optional uint32 ultimate_num    = 10;  // 终极次数\r
    optional uint32 joker_num       = 11;  // joker次数\r
}\r
//=================== 玩家俱乐部数据  =====================\r
message PlayerClubData\r
{\r
    required uint64 playerid           = 1;   // 玩家id\r
    optional string  name              = 2;   // 玩家昵称        \r
    required int64 bring_in_chip       = 3;   // 带入筹码\r
    required double win_chip           = 4;   // 输赢筹码（小于0表示输掉的筹码）\r
    optional string icon               = 5;   // 玩家头像\r
    optional uint32 table_num          = 6;   // 玩家玩牌手数\r
    optional uint32 in_pot_num         = 7;   // 玩家入池数\r
    optional uint32 total_games        = 8;   // 玩家总局数\r
    optional uint32 ct_time            = 9;   //calltime时长\r
    optional uint32 mtt_itm            = 10;  //进入钱圈次数\r
    optional uint32 mtt_title_num      = 11;  //冠军次数\r
    optional uint32 total_mtt_games    = 12;  //比赛场数\r
    optional string club_name          = 13;  //俱乐部名称\r
    optional uint32 clubid             = 14;  //俱乐部ID\r
    optional PlayerClubDataOfcPart ofc = 15;  //ofc数据\r
    optional uint32 pfr_num            = 16;   // pfr\r
    optional uint32 pfr_chance_num     = 17;   // pfr-chance\r
    optional uint32 bet3_num           = 18;   // 3bet\r
    optional uint32 bet3_chance_num    = 19;   // 3bet-chance\r
    optional uint32 cbet_num           = 20;   // cbet\r
    optional uint32 cbet_chance_num    = 21;   // cbet-chance\r
    optional uint32 winner_num         = 22;   // winner\r
    optional uint32 fish_num           = 23;   // fish\r
\r
    optional uint32 open_card     = 24;  // 摊牌次数\r
    optional uint32 flop_hands    = 25;  // 进入翻牌后次数\r
    optional uint32 open_card_win = 26;  // 摊牌赢了的次数\r
\r
    optional uint32 spinup_itm            = 27;  //spinup进入钱圈次数\r
    optional uint32 spinup_title_num      = 28;  //spinup冠军次数\r
    optional uint32 total_spinup_games    = 29;  //spinup比赛场数\r
\r
    optional uint32 sng_itm            = 30;  //sng进入钱圈次数\r
    optional uint32 sng_title_num      = 31;  //sng冠军次数\r
    optional uint32 total_sng_games    = 32;  //sng比赛场数\r
\r
}\r
\r
message PlayerTableVipData\r
{\r
    required uint64 playerid               = 1;   // 玩家id\r
    optional uint64 clubid                 = 2;  // 俱乐部ID\r
    optional uint32 hands_num              = 3;  // 玩家玩牌手数\r
    optional uint32 in_pot_num             = 4;  // 玩家入池数\r
    optional uint32 pfr_num                = 5;  // pfr\r
    optional uint32 pfr_chance_num         = 6;  // pfr-chance\r
    optional uint32 steal_num              = 7;  // steal\r
    optional uint32 steal_chance_num       = 8;  // steal-chance\r
    optional uint32 check_raise_num        = 9;  // check-raise\r
    optional uint32 check_raise_chance_num = 10;  // check-raise-chance\r
    optional uint32 bet3_num               = 11;  // 3bet\r
    optional uint32 bet3_chance_num        = 12;  // 3bet-chance\r
    optional uint32 cbet_num               = 13;  // cbet\r
    optional uint32 cbet_chance_num        = 14;  // cbet-chance\r
    optional uint32 fold_bet3_num          = 15;  // fold_3bet\r
    optional uint32 fold_bet3_chance_num   = 16;  // fold_3bet-chance\r
    optional uint32 fold_cbet_num          = 17;  // fold_cbet\r
    optional uint32 fold_cbet_chance_num   = 18;  // fold_cbet-chance\r
}\r
\r
//================ 玩家操作步骤记录  =======================\r
//\r
//=================================================\r
message PlayerActRecord\r
{       \r
    required int64 act_type = 1;        // 操作类型（1=下注，2=弃牌，3=跟注，4=加注，5=allin）\r
    optional double chip = 2;            // 下注筹码\r
}\r
\r
//================ 上局回顾玩家牌局信息  =======================\r
//\r
//=================================================\r
message PlayerTableInfo\r
{\r
    optional uint64 playerid = 1;               // 玩家id\r
    optional string name = 2;                   // 名字\r
    optional string icon = 3;                   // 头像\r
    repeated int32 handcards = 4;               // 玩家手牌\r
    repeated uint32 hightlight_cards = 5;       // 牌型列表（高亮的牌型）\r
    optional uint32 result = 6;                 // 输赢结果类型  1: 胜局 2: 输局\r
    optional bool is_fold = 7;                  // 是否是弃牌 \r
    optional double  chip = 8;                   // 如果是胜利 就是赢的筹码  如果是失败 就是输掉的筹码 \r
    optional uint32 poker_type = 9;             // 牌型等级（0=没有牌型 1=单牌，2=一对，3=两对，4=三条，5=顺子，6=同花，7=葫芦，8=四条，9=同花顺，10=皇家同花顺）\r
    optional int32 insurance = 10;              // 保险池\r
    optional bool isShowPrivatePoker = 11;      // 是否公开显示私牌\r
    repeated int32 show_handcards = 12;          // 亮牌\r
    optional uint32 chair_id=13;                // 玩家位置\r
    repeated PlayerActRecord record = 14;       // 操作记录\r
\r
    optional bool is_winner = 16;      // 是否最大牌玩家（赢下主池）\r
    optional int32 ev_chop_fee = 17;                // evchop fee\r
\r
    // 双层牌补充\r
    optional uint32 poker_type_2       = 18;\r
    repeated uint32 hightlight_cards_2 = 19;\r
    optional uint32 result_2           = 20;\r
    optional double  chip_2            = 21;\r
    optional bool is_winner_2          = 22;\r
\r
    // 三层牌补充\r
    optional uint32 poker_type_3       = 23;\r
    repeated uint32 hightlight_cards_3 = 24;\r
    optional uint32 result_3           = 25;\r
    optional double  chip_3            = 26;\r
    optional bool is_winner_3          = 27;\r
    optional bool cover                = 28;        // true(盖牌)\r
}\r
\r
message OfcWildInfo\r
{\r
    optional int32 wild_card   = 1;  //癞子牌\r
    optional int32 change_card = 2;  //变成的牌\r
}\r
\r
message OfcPlayerInfo\r
{\r
    optional uint64 playerid            = 1;   //玩家ID\r
    repeated int32 hand_card            = 2;   //待操作牌\r
    repeated int32 head_card            = 3;   //头部牌组\r
    repeated int32 middle_card          = 4;   //中部牌组\r
    repeated int32 tail_card            = 5;   //尾部牌组\r
    optional int32 head_type            = 6;   //头部牌型\r
    optional int32 middle_type          = 7;   //中部牌型\r
    optional int32 tail_type            = 8;   //尾部牌型\r
    optional int32 head_score           = 9;   //头部分数\r
    optional int32 middle_score         = 10;  //中部分数\r
    optional int32 tail_score           = 11;  //尾部分数\r
\r
    optional int32 head_reward          = 12;  //头道奖励\r
    optional int32 middle_reward        = 13;  //中道奖励\r
    optional int32 tail_reward          = 14;  //尾道奖励\r
\r
    repeated int32 abandon_card         = 15;  //丢弃的牌\r
    optional bool bust                  = 16;  //是否破产(爆了)\r
    optional uint32 ftc                 = 17;  //(当前局)是否范特西模式(具体的范特西牌数)\r
    optional uint32 ftc_times           = 18;  //连续范特西计数\r
    optional bool ftc_next              = 19;  //(下一局)是否范特西模式，结算展示用\r
    optional int32 all_score            = 20;  //总分数\r
    repeated OfcWildInfo wild_card_info = 21;  //癞子牌信息\r
}\r
\r
message OfcPlayerTableInfo\r
{\r
    optional uint64 playerid        = 1;  // 玩家id\r
    optional string name            = 2;  // 名字\r
    optional string icon            = 3;  // 头像\r
    optional OfcPlayerInfo ofc_info = 4;  // ofc_info\r
    optional uint32 chair_id        = 5;  // 玩家位置\r
    optional double  chip           = 6;  // 如果是胜利 就是赢的筹码  如果是失败 就是输掉的筹码 \r
    optional double  left_chip      = 7;  // 当时的剩余筹码（结算后的）\r
}\r
\r
//================ 上局回顾  =======================\r
//\r
//=================================================\r
message LastRoundInfo\r
{\r
    optional double pot = 1;         // 池底\r
    optional uint32 game_type = 2;   // 类型（1=德州扑克，2=6+，3=锦标赛）\r
    repeated uint32 public_cards = 3;            // 公共牌\r
    repeated PlayerTableInfo list = 4;\r
    optional int32 insurancePot = 5;       // 保险池\r
    optional uint32 game_num = 6;       // 第几手\r
    optional bool is_collect = 7;       // 是否已收藏\r
    optional uint32 btn_chair_id = 8;               // 庄家位置\r
    optional uint32 sb_chair_id = 9;                // 小盲位置\r
    optional uint32 bb_chair_id = 10;                // 大盲位置\r
}\r
\r
message RoundDetail\r
{\r
    optional double pot = 1;            // 池底\r
    optional uint32 time = 2;           //牌局时间\r
    optional uint32 game_type = 3;      // 类型（1=德州扑克，2=6+，3=锦标赛）\r
    optional string collect_id = 4;     // 记录ID\r
    optional uint32 game_num = 5;       // 第几手\r
    repeated uint32 public_cards = 6;   // 公共牌\r
    repeated PlayerTableInfo list = 7;  // 玩家牌局信息\r
    optional bool is_collect = 8;       // 是否已收藏\r
    optional uint32 btn_chair_id = 9;   // 庄家位置\r
    optional uint32 sb_chair_id = 10;    // 小盲位置\r
    optional uint32 bb_chair_id = 11;    // 大盲位置\r
    optional string operate = 12;       // 操作(目前先用json 数据调整好后，在评估要不要改成pb)\r
    repeated uint32 public_cards_2 = 13;   // 双层公共牌\r
    repeated MultiTimePublicCards multi_public_cards = 14;   // 多次公共牌\r
    repeated uint32 rabbit_cards = 15;   // 兔子牌，只有使用了兔子相机的玩家才有这个数据\r
}\r
\r
message OfcRoundDetail\r
{\r
    optional uint32 time             = 1;   //牌局时间\r
    optional uint32 game_type        = 2;   // 类型（1=德州扑克，2=6+，3=锦标赛）\r
    optional string collect_id       = 3;   // 记录ID\r
    optional uint32 game_num         = 4;   // 第几手\r
    repeated OfcPlayerTableInfo list = 5;   // 玩家牌局信息\r
    optional bool is_collect         = 6;   // 是否已收藏\r
    optional uint32 btn_chair_id     = 7;   // 庄家位置\r
    optional uint32 utg_chair_id     = 8;   // 枪口位置\r
}\r
\r
message ColorRoundDetail\r
{\r
    optional uint32 time        = 1;  //牌局时间\r
    optional uint32 game_type   = 2;  // 类型（1=德州扑克，2=6+，3=锦标赛）\r
    optional string collect_id  = 3;  // 记录ID\r
    optional uint32 game_num    = 4;  // 第几手\r
    repeated uint32 show_colors = 5;  // 开奖情况\r
    required double profit      = 6;  // 玩家自己的盈利情况\r
}\r
\r
\r
// 牌局玩家信息\r
message PlayerList \r
{\r
    optional uint64 playerid = 1;           // 玩家ID\r
    optional string name = 2;                // 玩家昵称\r
    optional string icon = 3;               // 玩家头像\r
}\r
\r
message PlayerListBan \r
{\r
    optional uint64 playerid = 1;           // 玩家ID\r
    optional string name = 2;                // 玩家昵称\r
    optional string icon = 3;               // 玩家头像\r
    optional bool ban = 4;                  // 是否被自己屏蔽\r
}\r
\r
message ChatMsg\r
{\r
    optional uint32 type = 1;           //类型 1.普通文字消息   2.语音消息\r
    optional string content = 2;        //内容\r
    optional uint32 time = 3;           //时间\r
    optional PlayerList player = 4;       //玩家信息\r
    \r
}\r
\r
message WaitingPlayer\r
{\r
    optional uint64 playerid = 1;               // 玩家ID\r
    optional string name = 2;                  // 玩家名字\r
    optional string icon = 3;                  // 头像\r
    optional uint64 clubid = 4;                 // 俱乐部ID\r
    optional string club_name = 5;             // 俱乐部名字\r
}\r
\r
// 多次公共牌\r
message MultiTimePublicCards{\r
    repeated uint32 cards = 1;  // 多次公共牌\r
}\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
\r
\r
//==============  用户请求坐下 ========================\r
//\r
//=====================================================\r
message MsgSitDown\r
{\r
    required uint32  chair_id    = 1;  //椅子id\r
    optional bool   is_gps_valid = 2;  //是否获取GPS  true表示获取gps  false表示未获取\r
    optional double vlat         = 3;  //纬度\r
    optional double vlong        = 4;  //经度\r
    optional bool   is_simulator = 5;  //是否模拟器\r
    optional uint32 room_id      = 6;  //房间id\r
    required uint32 chip_num     = 7;  //携带筹码（可选，flash房间在用）\r
}\r
\r
//==============  用户请求坐下返回 ====================\r
//\r
//=====================================================\r
message MsgSitDownRsp\r
{\r
    required uint32 result = 1;                     // 返回结果\r
    optional uint32 params = 2;                     // min vpip 参数\r
    optional uint32 room_id = 3;                    // 房间id\r
    optional uint32 last_out_chips = 4;             // 上次带出筹码\r
}\r
\r
//===============  用户请求起立 =======================\r
//\r
//=====================================================\r
message MsgStandUp\r
{\r
    required uint32  force_leave  = 1;    //是否强行离开（1强行离开，0不强行离开）\r
    optional uint32 room_id = 2;        //房间id\r
}\r
\r
//================  用户起立返回 ========================\r
//\r
//=====================================================\r
message MsgStandUpRsp\r
{\r
    required uint32 result = 1;         //返回结果\r
    optional uint32 room_id = 2;        //房间id\r
}\r
\r
//================ 申请补充筹码 =========================\r
//\r
//=====================================================\r
message MsgApplyAddChip\r
{\r
    required uint32 chip_num = 1;   //筹码数\r
    optional uint32 room_id = 2;    //房间id\r
}\r
\r
//=============== 申请补充筹码返回 ======================\r
//\r
//=====================================================\r
message MsgApplyAddChipRsp\r
{\r
    required uint32 result    = 1;  //返回结果\r
    optional uint32 room_id   = 2;  //房间id\r
    optional bool is_wait_add = 3;  //是否等待加筹码\r
}\r
\r
\r
//================ 申请延长牌局 =========================\r
//\r
//=====================================================\r
message MsgApplyDelayGameTime\r
{\r
    required int32 delay_time = 1;                  //延时的时间（单位：分钟）\r
    optional uint32 room_id = 2;                    //房间id\r
}\r
\r
//=============== 申请延长牌局返回 ======================\r
//\r
//=====================================================\r
message MsgApplyDelayGameTimeRsp\r
{\r
    required uint32 result = 1;         //返回结果\r
    optional uint32 room_id = 2;        //房间id\r
}\r
\r
\r
//================ 申请解散牌局 =========================\r
//\r
//=====================================================\r
message MsgApplyDismissRoom\r
{\r
    optional uint32 room_id = 1;   //房间id\r
    optional uint32 clubid  = 2;   // 俱乐部ID\r
}\r
\r
//=============== 申请解散牌局返回 ======================\r
//\r
//=====================================================\r
message MsgApplyDismissRoomRsp\r
{\r
    required uint32 result = 1;         //返回结果\r
    optional uint32 room_id = 2;        //房间id\r
}\r
\r
//================ 开局 =========================\r
//\r
//=====================================================\r
message MsgOpenGame\r
{\r
    optional uint32 room_id = 1;        //房间id\r
}\r
\r
//=============== 开局返回 ======================\r
//\r
//=====================================================\r
message MsgOpenGameRsp\r
{\r
    required uint32 result = 1;         //返回结果\r
    optional uint32 room_id = 2;        //房间id\r
    optional uint32 room_status = 3; // 牌桌状态（1未开始，2游戏开始，3翻牌圈(Flop-round）：前三张公共牌出现以后的押注圈，4转牌圈（Turn-round）：第四张出现以后的押注圈,5河牌圈（River-round）:第五张出现以后的押注圈，6结算阶段，7游戏结束阶段）\r
}\r
\r
//================ 请求查看牌局统计信息 =========================\r
//\r
//=====================================================\r
message MsgGetGameStatisticsInfo\r
{\r
    optional uint32 room_id = 1;        //房间id\r
}\r
\r
//=============== 请求查看牌局统计信息返回 ======================\r
//\r
//=====================================================\r
message MsgGetGameStatisticsInfoRsp\r
{\r
    repeated PlayerStatistics player_statistics = 1;    // 玩家统计数据\r
    optional uint32 game_num = 2;                       // 当前游戏局数\r
    optional uint32 remain_time  = 3;                   // 牌局剩余时间\r
    optional string  name = 4;                          // 牌局名称\r
    optional int64  insurance_pool = 5;                    // 保险池\r
    optional int64  award = 6;                             // 大牌奖励\r
    repeated PlayerData onlooker_players = 7;           // 围观的玩家列表（围观玩家需要显示头像等数据）\r
    repeated uint64 participated_playerids = 8;         // 玩过的玩家id列表\r
    repeated uint64 game_playerids = 9;                 // 当前正在玩的玩家id列表\r
    optional uint32 room_id = 10;                        // 房间id\r
    optional double fee_rate = 11;                        // 服务费比例\r
    optional double fee_max = 12;                        // 服务费上限(单位：bb)\r
}\r
\r
\r
//================ 查看个人在当前牌局实时战绩 =========================\r
//\r
//=====================================================\r
message MsgGetPlayerStatisticsInfo\r
{\r
    required uint64 playerid = 1;           // 玩家id\r
    optional uint32 room_id = 2;            // 房间id\r
    optional uint64 clubid = 3;            // clubid\r
}\r
\r
//=============== 查看个人在当前牌局实时战绩返回 ======================\r
//\r
//=====================================================\r
message MsgGetPlayerStatisticsInfoRsp\r
{\r
    optional PlayerStatistics player_statistics = 1;\r
    optional uint32 room_id                     = 2;  // 房间id\r
    repeated uint32 statisticsids               = 3;  // statisticsid\r
}\r
\r
// =============== 查看个人在俱乐部中的实时战绩 ===========================\r
message MsgGetPlayerClubInfo\r
{\r
    required uint64 playerid = 1;           // 玩家id\r
    optional uint32 room_id = 2;            // 房间id\r
}\r
\r
message MsgGetPlayerClubInfoRsp\r
{\r
    optional PlayerClubData player_club_data = 1;\r
    optional uint32 room_id = 2;            // 房间id\r
}\r
\r
//================ straddle勾选 =========================\r
//\r
//=====================================================\r
message MsgSetStraddle\r
{\r
    optional bool straddle = 1;\r
    optional uint32 room_id = 2;\r
}\r
\r
//=============== straddle勾选返回 ======================\r
//\r
//=====================================================\r
message MsgSetStraddleRsp\r
{\r
    required uint32 result = 1;         //返回结果\r
    optional uint32 room_id = 2;        //房间id\r
}\r
\r
\r
//=============== 客户端同步请求接口 ======================\r
//\r
//=====================================================\r
message MsgClientSync\r
{\r
}\r
\r
//=============== 客户端同步请求接口返回 ======================\r
//\r
//=====================================================\r
message MsgClientSyncRsp\r
{\r
    optional uint64  time = 1;                  \r
}\r
\r
//================ 购买剩余行动时间 =========================\r
//\r
//=====================================================\r
message MsgApplyDelayActionTime\r
{\r
    optional uint32 room_id = 1;        //房间id\r
}\r
\r
//=============== 购买剩余行动时间返回 ======================\r
//\r
//=====================================================\r
message MsgApplyDelayActionTimeRsp\r
{\r
    required uint32 result = 1;         //返回结果\r
    optional uint32 room_id = 2;        //房间id\r
}\r
\r
\r
//================ 请求牌局回顾列表信息(废弃) =========================\r
//\r
//=====================================================\r
message MsgGetGameLastRoundListInfo\r
{\r
    optional uint32 room_id = 1;        //房间id\r
}\r
\r
//================ 请求牌局回顾列表信息返回 =========================\r
//\r
//=====================================================\r
message MsgGetGameLastRoundListInfoRsp\r
{\r
    repeated LastRoundInfo list = 1;    // 列表\r
    optional uint32 room_id = 2;        //房间id\r
}\r
\r
message MsgGetRoundInfo\r
{\r
    optional uint32 room_id   = 1;  //房间id\r
    optional uint32 game_num  = 2;  //手数(0表示最后一手)\r
    optional bool filter_self = 3;  //是否过滤自己的\r
}\r
\r
message MsgGetRoundInfoRsp\r
{\r
    optional uint32 room_id = 1;        //房间id\r
    optional uint32 game_num = 2;       //当前手数\r
    optional uint32 total = 3;          //总手数\r
    optional RoundDetail round_detail = 4;  //详细信息\r
    repeated uint32 game_num_list = 5; //手数列表\r
}\r
\r
message MsgGetOfcRoundInfo\r
{\r
    optional uint32 room_id   = 1;  //房间id\r
    optional uint32 game_num  = 2;  //手数(0表示最后一手)\r
    optional bool filter_self = 3;  //是否过滤自己的\r
}\r
\r
message MsgGetOfcRoundInfoRsp\r
{\r
    optional uint32 room_id              = 1;  //房间id\r
    optional uint32 game_num             = 2;  //当前手数\r
    optional uint32 total                = 3;  //总手数\r
    optional OfcRoundDetail round_detail = 4;  //详细信息\r
    repeated uint32 game_num_list        = 5;  //手数列表\r
}\r
\r
message MsgGetColorRoundInfoList\r
{\r
    optional uint32 room_id        = 1;  //房间id\r
    optional uint32 game_num_start = 2;  //开始的局数\r
    optional uint32 game_num_len   = 3;  //一共几局\r
    optional bool filter_self      = 4;  //是否过滤自己的\r
}\r
\r
message MsgGetColorRoundInfoListRsp\r
{\r
    optional uint32 room_id                 = 1;  //房间id\r
    optional uint32 game_num_start          = 2;  //开始的局数\r
    optional uint32 total                   = 3;  //总手数\r
    repeated ColorRoundDetail round_details = 4;  //详细信息\r
    optional uint32 game_num_list_start     = 5;  //可查看的开始手数\r
    optional uint32 game_num_list_end       = 6;  //可查看的结束手数\r
    optional uint32 remain_time             = 7;  // 牌局剩余时间\r
    optional double  total_winnings         = 8;  //总的输赢的筹码     \r
}\r
\r
//================ 请求收藏牌局 =========================\r
//\r
//=====================================================\r
message MsgCollectGameRound\r
{\r
    optional uint32  index = 1;     // 手数\r
    optional uint32  type = 2;      // 1收藏 2取消收藏\r
    optional uint32  room_id = 3;   // 房间id\r
}\r
\r
//================ 请求收藏牌局返回 =========================\r
//\r
//=====================================================\r
message MsgCollectGameRoundRsp\r
{\r
    required uint32 result = 1;         //返回结果\r
    optional uint32  index = 2;         // 手数\r
    optional uint32  type = 3;          // 1收藏 2取消收藏\r
    optional uint32  room_id = 4;       // 房间id\r
}\r
\r
//================ 即刻入局 =========================\r
//\r
//=====================================================\r
message MsgJoinGame\r
{\r
    optional uint32 room_id = 1;        //房间id\r
    optional bool join = 2;             //立即加入/取消立即加入\r
}\r
\r
//================ 即刻入局返回 =========================\r
//\r
//=====================================================\r
message MsgJoinGameRsp\r
{\r
    required uint32 result = 1;         //返回结果\r
    optional uint32 room_id = 2;        //房间id\r
    optional bool join = 3;             //立即加入/取消立即加入\r
}\r
\r
message MsgSetAFK\r
{\r
    optional uint32 room_id = 1;        //房间id\r
    optional bool no_leave = 2;       //标记不用离开\r
}\r
\r
message MsgSetAFKRsp\r
{\r
    required uint32 result = 1;         //返回结果\r
    optional uint32 room_id = 2;        //房间id\r
}\r
\r
\r
//================ 取消暂离 =========================\r
//\r
//=====================================================\r
message MsgCancelAFK\r
{\r
    optional uint32 room_id = 1;        //房间id\r
}\r
\r
//================ 取消暂离返回 =========================\r
//\r
//=====================================================\r
message MsgCancelAFKRsp\r
{\r
    required uint32 result = 1;         //返回结果\r
    optional uint32 room_id = 2;        //房间id\r
}\r
\r
//==============  获取牌局玩家列表 ========================\r
//\r
//=====================================================\r
message MsgGetPlayingPlayerList\r
{\r
    required uint64 playerid = 1;       // 被举报人\r
    optional uint32 room_id = 2;        // 房间id\r
}\r
\r
//==============  获取牌局玩家列表返回 ====================\r
//\r
//=====================================================\r
message MsgGetPlayingPlayerListRsp\r
{   \r
    required uint64 playerid = 1;       // 被举报人\r
    repeated PlayerList list = 2;         //玩家列表\r
    optional uint32 room_id = 3;        // 房间id\r
}\r
\r
//============== 伙牌举报 ========================\r
//\r
//=====================================================\r
message MsgGroupReport\r
{\r
    required uint64 playerid1 = 1;       // 被举报人\r
    required uint64 playerid2 = 2;       // 伙牌人\r
    optional uint32 room_id = 3;        // 房间id\r
}\r
\r
//============== 伙牌举报返回 ====================\r
//\r
//=====================================================\r
message MsgGroupReportRsp\r
{\r
    required uint32 result = 1;         //返回结果\r
    optional uint32 room_id = 2;        //房间id\r
}\r
\r
\r
//============== 玩家举报 ========================\r
message MsgPlayerReport\r
{\r
    required uint64 playerid       = 1;  // 被举报人\r
    optional uint32 room_id        = 2;  // 房间id\r
    optional uint32 report_type    = 3;  // 举报类型 1.Bot 2.言论 3.头像 4.其他\r
    optional string report_content = 4;  // 举报内容\r
}\r
\r
//============== 玩家举报返回 ====================\r
message MsgPlayerReportRsp\r
{\r
    required uint32 result  = 1;  //返回结果\r
    optional uint32 room_id = 2;  //房间id\r
}\r
\r
\r
//============ 请求兔子相机数据 =============\r
message MsgGetRabbitAction\r
{\r
    required uint32 act_type = 1;           // 1. 偷偷看   2. 发发看\r
    required uint32 room_id = 2;            // 房间id\r
}\r
\r
message MsgGetRabbitActionRsp {\r
    required uint32 ec = 1;                 //错误码\r
    optional uint32 act_type = 2;           //操作类型\r
    optional uint32 room_id = 3;            //房间id\r
}\r
\r
\r
\r
//=================自动重开和自动扩展==========================\r
message MsgCloseAutoOpen\r
{\r
    optional uint32 room_id = 1;        //房间id\r
}\r
\r
message MsgCloseAutoOpenRsp \r
{\r
    required uint32 ec = 1;                //错误码\r
    optional uint32 room_id = 2;           //房间id\r
}\r
\r
message MsgCloseAutoExtension\r
{\r
    optional uint32 room_id = 1;        //房间id\r
}\r
\r
message MsgCloseAutoExtensionRsp\r
{\r
    required uint32 ec = 1;                //错误码\r
    optional uint32 room_id = 2;           //房间id\r
}\r
\r
message MsgGetTablePassword\r
{\r
    optional uint32 room_id = 1;        //房间id\r
}\r
\r
message MsgGetTablePasswordRsp\r
{\r
    required uint32 ec = 1;               //错误码\r
    optional uint32 password = 2;         //密码\r
    optional uint32 room_id = 3;          //房间id\r
}\r
\r
message MsgSetCalltime\r
{\r
    optional uint32 room_id = 1;        //房间id\r
}\r
\r
message MsgSetCalltimeRsp\r
{\r
    required uint32 ec = 1;               //错误码\r
    optional uint32 time = 2;             //结束时间\r
    optional uint32 room_id = 3;          //房间id\r
}\r
\r
\r
// =============== 聊天相关 ============================\r
message MsgGetChatMsgList\r
{\r
    optional uint32 room_id = 1;        //房间id\r
}\r
\r
message MsgGetChatMsgListRsp\r
{\r
    repeated ChatMsg list = 1;           //消息列表\r
    optional uint32 room_id = 2;        //房间id\r
}\r
\r
message MsgSendChatMsg\r
{\r
    optional ChatMsg msg = 1;             //消息内容 时间和玩家信息可为空\r
    optional uint32 room_id = 2;          //房间id\r
}\r
\r
message MsgSendChatMsgRsp\r
{\r
    required uint32 ec = 1;            // 错误码\r
    optional uint32 room_id = 2;       //房间id\r
}\r
\r
message MsgGetRoomPlayerList\r
{\r
    optional uint32 room_id = 1;        //房间id\r
}\r
\r
message MsgGetRoomPlayerListRsp\r
{\r
    repeated PlayerListBan list = 1;    //带禁言的玩家信息\r
    optional uint32 room_id = 2;        //房间id\r
}\r
\r
message MsgChatBanPlayerOpt\r
{\r
    optional uint32 type = 1;             //屏蔽或者取消 1.屏蔽   2.取消屏蔽\r
    optional uint64 playerid = 2;         //操作的id\r
    optional uint32 room_id = 3;          //房间id\r
}\r
\r
message MsgChatBanPlayerOptRsp\r
{\r
    required uint32 ec = 1;             // 错误码\r
    optional uint32 type = 2;             //屏蔽或者取消 1.屏蔽   2.取消屏蔽\r
    optional uint64 playerid = 3;         //操作的id\r
    optional uint32 room_id = 4;          //房间id\r
}\r
\r
message MsgGetOnlookPlayer\r
{\r
    optional uint32 room_id = 1;        //房间id\r
}\r
\r
message MsgGetOnlookPlayerRsp\r
{\r
    repeated PlayerData onlooker_players = 1;\r
    optional uint32 room_id = 2;        //房间id\r
}\r
\r
message MsgSetUseEvchop\r
{\r
    required bool use_evchop = 1;       //是否使用   true  使用   false 不使用\r
}\r
\r
message MsgSetUseEvchopRsp\r
{\r
    required uint32 ec = 1;             //错误码\r
    required bool use_evchop = 2;       //是否使用   true  使用   false 不使用\r
}\r
\r
\r
message MsgGetWaitPlayerList\r
{\r
    optional uint32 room_id = 1;        //房间id\r
}\r
\r
message MsgGetWaitPlayerListRsp\r
{\r
    repeated WaitingPlayer waiting_players = 1;\r
    optional uint32 room_id = 2;        //房间id\r
}\r
\r
message MsgJoinWaitList\r
{\r
    optional uint32 room_id = 1;        //房间id\r
    optional string club_name = 2;      //俱乐部名字\r
}\r
\r
message MsgJoinWaitListRsp\r
{\r
    required uint32 ec = 1;             //错误码\r
    optional uint32 room_id = 2;        //房间id\r
\r
}\r
\r
message MsgExitWaitList\r
{\r
    optional uint32 room_id = 1;        //房间id\r
}\r
\r
message MsgExitWaitListRsp\r
{\r
    required uint32 ec = 1;             //错误码\r
    optional uint32 room_id = 2;        //房间id\r
}\r
\r
message MsgWaitingJoinRoom\r
{\r
    optional uint32 room_id      = 1;  //房间id\r
    optional uint32 is_join      = 2;  //是否进入房间 1.加入  0.取消\r
    optional bool   is_gps_valid = 3;  //是否获取GPS  true表示获取gps  false表示未获取\r
    optional double vlat         = 4;  //纬度\r
    optional double vlong        = 5;  //经度\r
    optional bool   is_simulator = 6;  //是否模拟器\r
}\r
\r
message MsgWaitingJoinRoomRsp\r
{\r
    required uint32 ec = 1;             //错误码\r
    optional uint32 room_id = 2;        //房间id\r
    optional uint32 params = 3;         // min vpip 参数\r
}\r
\r
//================ 置顶牌局 =========================\r
message MsgPinRoom\r
{\r
    optional uint32 room_id = 1;  //房间id\r
    optional uint32 clubid  = 2;  // 俱乐部ID\r
    optional uint32 opt     = 3;  //1 置顶 0取消置顶\r
}\r
\r
message MsgPinRoomRsp\r
{\r
    required uint32 ec      = 1;  //返回结果\r
    optional uint32 room_id = 2;  //房间id\r
    optional uint32 opt     = 3;  //1 置顶 0取消置顶\r
    optional uint32 pin     = 4;  //操作时设定的值\r
}\r
\r
//========== 查询能否进入房间 ============\r
//\r
//===============================\r
message MsgCheckEnterRoom\r
{\r
    optional uint32 room_id = 1;                  //房间id\r
    optional uint64 clubid = 2;                   //俱乐部id\r
}\r
\r
//========== 查询能否进入房间返回 ==========\r
//\r
//===============================\r
message MsgCheckEnterRoomRsp\r
{\r
    required uint32 result    = 1;  //返回结果\r
    optional uint64 clubid    = 2;  //俱乐部id\r
    optional uint32 room_id   = 3;  //房间id\r
    required uint32 game_type = 4;  // 类型（1=德州扑克,2=6+,4=plo4,5=plo5,6=plo6,7=ofc）\r
}\r
\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
\r
// ============  玩家加入房间 ===============\r
//\r
//=======================================\r
message MsgAddPlayerCast \r
{\r
    optional PlayerData player = 1;\r
    optional uint32 room_id = 2;\r
    optional uint32 table_index = 3;   //桌子编号\r
}\r
\r
// =========  广播玩家离开房间 ===============\r
//\r
//=======================================\r
message MsgRemovePlayerCast \r
{\r
    optional uint64 playerid = 1;       // 玩家ID\r
    optional uint32 room_id = 2;        // 房间ID\r
    optional uint32 table_index = 3;    //桌子编号\r
}\r
\r
// ==============  玩家坐下 ===============\r
//\r
//=======================================\r
message MsgSitDownCast \r
{\r
    optional uint64 playerid = 1;       // 玩家ID\r
    required uint32 chair_id = 2;       // 椅子id\r
    optional uint32 room_id = 3;        // 房间ID\r
    optional uint32 table_index = 4;    //桌子编号\r
}\r
\r
// =========  玩家站起 ===============\r
//\r
//=======================================\r
message MsgStandUpCast \r
{\r
    optional uint64 playerid = 1;       // 玩家ID\r
    required uint32 chair_id = 2;       // 椅子id\r
    optional uint32 reason = 3;          // 站起原因\r
    optional uint32 room_id = 4;        // 房间ID\r
    optional uint32 table_index = 5;     //桌子编号\r
}\r
\r
//=============== 牌局剩余时间广播 =================\r
//\r
//===============================================\r
message MsgRoomRemainTimeCast\r
{\r
    optional uint32 room_id = 1;                    //房间id\r
    required uint32 remain_time = 2;            //牌局剩余时间\r
}\r
\r
//=============== 玩家解散牌局广播 =================\r
//\r
//===============================================\r
message MsgDismissTableCast\r
{\r
    optional uint32 room_id = 1;                    //房间id\r
    optional uint64 playerid = 2;            //操作者\r
}\r
\r
//=============== 俱乐部牌局列表变动广播通知，收到通知主动请求获取列表接口 =================\r
//\r
//===============================================\r
message MsgRoomListChangeCast\r
{\r
    optional uint64  clubid = 1;                   // 俱乐部id\r
    optional uint32  room_id = 2;                  // 房间id\r
}\r
\r
//=================== 牌局统计结果广播 ====================\r
//\r
//=================================================\r
message MsgGameStatisticsCast\r
{\r
    repeated PlayerStatistics player_statistics = 1;\r
    optional int64  insurance_pool = 2;                    // 保险池\r
    optional int64  award = 3;                             // 大牌奖励\r
    optional uint32 room_id = 4;                           // 房间id\r
    optional uint32 time = 5;                              // 结算时间\r
}\r
\r
//=============== 申请补充筹码成功广播 ======================\r
//\r
//=====================================================\r
// 不一定是补码成功消息（延迟补码失败则只发给个人）\r
message MsgApplyAddChipSuccCast\r
{\r
    optional uint64 playerid = 1;       // 玩家ID\r
    optional double chip = 2;           // 玩家手上筹码\r
    optional double add_chip = 3;       // 补充的筹码\r
    optional double clubChip = 4;       // 剩余俱乐部筹码\r
    optional uint32 room_id = 5;        // 房间ID\r
    optional uint32 apply_type = 6;     // 申请类型(1:主动)\r
    optional uint32 result = 7;         // 补码结果\r
    optional uint32 total_bought = 8;   // 累计买入总筹码\r
}\r
\r
//=============== 通知前端补码 ======================\r
//\r
//=====================================================\r
message MsgNotifyPlayerAddChipCast\r
{   \r
    optional uint32 room_id = 1;                            // 房间id\r
    optional uint64 left_time = 2;                          // 留座到期时间（时间戳）\r
    optional uint32 last_out_chips = 3;                     // 上次带出筹码\r
    optional uint32 total_bought_chips = 4;                 // 累计买入总筹码\r
}\r
\r
//=============== 玩家最新思考时间广播 =================\r
//\r
//===============================================\r
message MsgActionRemainTimeCast\r
{\r
    optional uint32 room_id = 1;                    //房间id\r
    optional uint64 playerid = 2;                   // 玩家id\r
    optional uint64 action_finish_time = 3;           //操作结束时间戳\r
    optional uint32 boughtLeftTimeNeedDiamonds = 4;      // 下次购买剩余行动时间次数所需钻石\r
}\r
\r
// =========  广播玩家被踢 ===============\r
//\r
//=======================================\r
message MsgKickPlayerCast \r
{\r
    optional uint64 playerid = 1;       // 被踢玩家ID\r
    optional uint32 room_id = 2;        // 房间id\r
    optional uint32 reason  = 3;        //退出类型 1：长时间围观\r
}\r
\r
\r
// =========  广播玩家补码倒计时到期时间戳  ===============\r
//\r
//=======================================\r
message MsgForceStandupTimeCast \r
{\r
    optional uint64 playerid = 1;       // 玩家ID\r
    optional uint64 left_time = 2;                    //补码倒计时到期时间戳（0表示取消）\r
    optional uint32 room_id = 3;        // 房间id\r
}\r
\r
//================ 广播兔子相机剩下的牌 ==================\r
message MsgRabbitActionCast \r
{\r
    optional uint64 playerid = 1;      //用户id\r
    repeated int32 cards = 2;          //剩下的牌\r
    optional uint32 room_id = 3;       //房间id\r
    repeated int32 cards_2 = 4;          //剩下的牌\r
}\r
\r
//============== 广播用户入池数和手数 ====================\r
message MsgPlayerTableVPIPCast \r
{\r
    optional uint32 game_num = 1;               //用户当前局手数\r
    optional uint32 in_pot_num = 2;             //用户当前局入池数\r
    optional uint32 room_id = 3;                //房间id\r
}\r
\r
// 广播用户VPIP Level没有达到要求被站起\r
message MsgPlayerVPIPLevelCast\r
{\r
    optional uint32 room_id = 1;                //房间id\r
}\r
\r
//================= 广播AFK时间到了 =======================\r
message MsgAFKTimeoutCast\r
{\r
    optional uint32 room_id = 1;                //房间id\r
}\r
\r
//================ 聊天消息广播\r
message MsgChatMsgCast\r
{\r
    optional ChatMsg msg = 1;               //广播玩家消息\r
    optional uint32 room_id = 2;\r
}\r
\r
//================ 广播有人使用了兔子相机 ============================\r
message MsgPlayerUseRabbitCast\r
{\r
    optional uint64 playerid = 1;           //用户id\r
    optional string nick = 2;               //看的人昵称\r
    optional uint32 room_id = 3;            //房间id\r
}\r
\r
// =============== 广播托管消息 ==============================\r
message MsgPlayerAfkStateCast\r
{\r
    optional uint64 playerid = 1;           //用户id\r
    optional bool afk_state = 2;            //托管状态\r
    optional uint32 room_id = 3;            //房间id\r
}\r
\r
// =============== 下一局离开状态消息 ==============================\r
message MsgPlayerLeaveNextRoundStateCast\r
{\r
    optional uint64 playerid       = 1;  //用户id\r
    optional bool leave_next_round = 2;  //下一局离开\r
    optional uint32 room_id        = 3;  //房间id\r
}\r
\r
\r
// ================== 广播断线保护 ===========================\r
message MsgActionTimeProtectCast\r
{\r
    optional uint32 room_id = 1;                    //房间id\r
    optional uint64 playerid = 2;                   // 玩家id\r
    optional uint64 action_finish_time = 3;           //操作结束时间戳\r
}\r
\r
// ==============广播玩家在牌局当前的结算信息 ==============\r
message MsgPlayerStatisticsInfoCast\r
{\r
    optional uint32 room_id   = 1;  //房间id\r
    optional uint64 playerid  = 2;  //玩家id\r
    optional string game_name = 3;  //牌局名称\r
    required uint32 game_type = 4;  // 类型（1=德州扑克,2=6+,4=plo4,5=plo5,6=plo6,7=ofc）\r
    required double sb_num    = 5;  // 小盲     实际数值\r
    required double win_chip  = 6;  // 输赢筹码（小于0表示输掉的筹码）\r
    optional uint32 flash     = 7;  // flash\r
    repeated double bets      = 8;  // bet（投注额，3个）\r
    optional double exchange_rate = 9;  // 汇率\r
}\r
\r
\r
//================== 广播玩家被踢出房间 ======================\r
message MsgPlayerKickoutTableCast\r
{\r
    optional uint32 roomid      = 1;  //房间id\r
    optional uint32 playerid    = 2;  //玩家id\r
    optional uint32 reason      = 3;  //踢出原因\r
    optional uint32 time        = 4;  //踢出时间\r
    optional uint32 type        = 5;  //牌局类型\r
    optional uint32 small_blind = 6;  //小盲注 需要除以100\r
    repeated double bets        = 7;  // bet（投注额，3个）\r
    optional double exchange_rate = 8;  // 汇率\r
}\r
\r
//================== 广播用户结束进新的flash房间 ======================\r
message MsgFlashEnterNewRoomCast\r
{\r
    optional uint32 roomid = 1;         // 房间id\r
    optional uint32 new_roomid = 2;     // 新的房间ID\r
}\r
\r
//================== 通知用户等待牌桌可以进入了 ======================\r
message MsgWaitingTableCast\r
{\r
    optional uint32 roomid = 1;         // 房间ID\r
    optional uint32 game_type = 2;      // 游戏类型\r
    optional double small_blind = 3;    // 小盲注\r
    optional uint32 left_time = 4;      // 剩余时间\r
    optional uint32 clubid = 5;         // 俱乐部ID\r
    optional string club_name = 6;      // 俱乐部名称\r
    optional double exchange_rate = 7;  // 汇率\r
}\r
\r
//================== 用户等待列表通知 ======================\r
message MsgWaitingListChangeCast\r
{\r
    optional uint32 roomid            = 1;  // 房间ID\r
    optional uint32 waiting_num       = 2;  // 等待人数\r
    optional uint32 player_is_waiting = 3;  // 是否等待中 0:不在等待列表中 1:在等待列表中\r
    optional uint32 player_index      = 4;  // 排到第几名\r
}\r
\r
//================== 广播等待列表人数变化 ======================\r
message MsgWaitingListCountCast\r
{\r
    optional uint32 roomid = 1;         // 房间ID\r
    optional uint32 waiting_num = 2;    // 等待人数\r
}\r
\r
\r
// =========  广播玩家等待倒计时到期时间戳  ===============\r
//\r
//=======================================\r
message MsgWaitingSitdownTimeCast \r
{\r
    optional uint64 playerid = 1;       // 玩家ID\r
    optional uint64 left_time = 2;                    //倒计时到期时间戳（0表示取消）\r
    optional uint32 room_id = 3;        // 房间id\r
}\r
\r
\r
// 广播用户VPIP问题推送\r
message MsgPlayerVPIPCheckCast\r
{\r
    optional uint32 room_id        = 1;  //房间id\r
    optional uint32 cur_game_num   = 2;  //当前桌玩牌数\r
    optional uint32 cur_in_pot_num = 3;  //当前桌入池数\r
    optional uint32 hand_num       = 4;  //手数\r
    optional uint32 vpip           = 5;  //总的vpip\r
    optional uint32 min_vpip       = 6;  //最低\r
    optional uint32 vpip_level     = 7;  //vpip_level\r
    optional uint32 ec             = 8;  //错误码\r
}\r
\r
// 广播紫卡用户对手数据\r
message MsgVipPlayerClubDataCast\r
{\r
    optional uint32 room_id             = 1;  //房间id\r
    optional uint32 table_index         = 2;  //桌子编号\r
    repeated PlayerTableVipData vip_data = 3;  //vip专享数据\r
}\r
\r
//================ 广播用户补码状态 ==================\r
message MsgPlayerAddChipStatusCast \r
{\r
    optional uint32 room_id             = 1; // 房间id\r
    optional uint64 playerid            = 2; // 用户id\r
    optional uint32 add_chip_status     = 3; // 1:坐下 2:筹码归零\r
}\r
\r
//====================== 广播保险保证金不足 ======================\r
message MsgSecurityFundNotEnoughCast\r
{   \r
    optional uint32 room_id = 1;                  // 房间id\r
    optional string invitecode = 2;               // 邀请码\r
}\r
`,__vite_glob_0_12=`syntax = "proto2";\r
import "mtt.proto";\r
package statistics;\r
\r
\r
//牌局内单个玩家信息\r
message PlayerStatistics\r
{\r
    optional uint64 playerid = 1;       //玩家id\r
    optional string name = 2;           //玩家名字\r
    optional string icon = 3;           //头像\r
    optional double win_chip = 4;       //盈亏\r
    optional double bring_in_chip = 5;  //买入\r
    optional int32 game_num = 6;        //手数\r
    optional double fee = 7;            //服务费\r
    optional double ev_chop = 8;        //ev chop输赢\r
    optional double jackpot = 9;           //jackpot奖励\r
    optional double bet_chip = 10;        //下注值（color独有）\r
    optional double insurance = 11;        //保险值\r
}\r
\r
//牌局数据color部分\r
message StatisticsRecordColorPart\r
{\r
    repeated double bets  = 1;\r
    // optional double total_profit = 2; //整个房间的总输赢，暂时没有用\r
}\r
\r
//牌局数据\r
message StatisticsRecord\r
{\r
    optional string statistics_id               = 1;   //牌局编号\r
    optional uint32 statistics_time             = 2;   //时间\r
    optional string avatar                      = 3;   //头像\r
    optional uint32 time                        = 4;   //时长\r
    optional uint32 fee_rate                    = 5;   //费率\r
    optional double sb_num                      = 6;   //小盲\r
    optional uint32 room_type                   = 7;   //类型(1.个人，2.俱乐部，3.mtt)\r
    optional uint32 game_type                   = 8;   //类型(1.NLH,2.6+)\r
    optional double fee                         = 9;   //服务费\r
    repeated PlayerStatistics player_statistics = 10;  //单个玩家数据\r
    optional double profit                      = 11;  //输赢\r
    optional string card_name                   = 12;  //牌局名称\r
    optional uint32 calltime                    = 13;  // calltime时长\r
    optional uint64 creator_id                  = 14;  // 创建者id\r
    optional double evchop_fee                  = 15;  //ev chop服务费\r
    optional double jackpot_fee                 = 16;  //jackpot服务费\r
    optional bool ev_chop                       = 17;  // ev chop\r
    optional bool jackpot                       = 18;  // jackpot\r
    optional bool flash                         = 19;  // flash\r
    optional bool bomb                          = 20;  // 是否暴击\r
    optional bool bomb_double_cards             = 21;  // 是否暴击双层牌\r
    optional bool double_cards                  = 22;  // 是否双层牌\r
    required uint32 fee_cap                     = 23;  // 限额收取\r
    optional StatisticsRecordColorPart color    = 25;  // color部分数据\r
    optional bool insurance                     = 26;  // 是否开启保险\r
    \r
}\r
\r
message PlayerMtt \r
{\r
    optional uint64 playerid = 1;           //玩家id\r
    optional string name = 2;               //玩家名字\r
    optional string icon = 3;               //头像\r
    optional double win_chip = 4;           //盈亏\r
    optional string prize = 5;              //奖金\r
    optional uint32 game_num = 6;           //手数\r
    optional uint32 rank = 7;               //排行\r
    optional uint32 rebuy_num = 8;      //rebuy次数\r
    optional uint32 addon_num = 9;      //addon次数\r
    optional bool use_ticket = 10;      //是否使用门票\r
    optional uint32 ko_num = 11;        //ko次数\r
    optional double get_ko_bonus = 12;    //获得ko奖金\r
}\r
\r
//比赛数据\r
message MttRecord \r
{\r
    optional uint32 mtt_id = 1;             //比赛id\r
    optional uint32 start_time = 2;         //开始时间\r
    optional uint32 close_time = 3;         //结束时间\r
    optional string avatar = 4;             //头像\r
    optional double buy_in = 5;             //报名费\r
    optional uint32 raiseBlindTime = 6;     //涨盲时间\r
    optional uint32 room_type = 7;          //房间类型\r
    optional uint32 game_type = 8;          //游戏类型\r
    optional double fee = 9;                //总服务费\r
    optional uint32 init_chips = 10;        //起始筹码\r
    repeated PlayerMtt members = 11;        //用户mtt数据\r
    optional double join_fee = 12;          //总报名费\r
    optional uint32 money_round = 13;       //钱圈人数\r
    optional double service_fee = 14;       //服务费\r
    optional double profit = 15;            //输赢\r
    optional uint32 rebuy_num = 16;      //rebuy次数\r
    optional uint32 addon_num = 17;      //addon次数\r
    optional uint32 mtt_type = 18;      //mtt_type次数\r
    optional string mtt_name = 19;      //比赛名称\r
    optional uint32 fee_rate = 20;      //比赛费率\r
    optional uint64 creator_id = 21;      //创建者id\r
    optional uint32 ko_type = 22;      //ko_type  0:非KO赛, 1:KO-Regular, 2:KO-Progressive\r
    optional double ko_value = 23;      //ko_value\r
    optional mtt.MttCustomRaiseBlind custom_raise_blind = 24;  // 自定义升盲\r
    optional uint32 multiplier     = 25;   // 比赛奖励倍数\r
    optional bool is_spinup        = 26 ;  //是否spinup\r
    optional bool is_sng           = 27 ;  //是否sng\r
}\r
\r
//玩家手牌数据\r
message PlayerHandsRecord\r
{\r
    optional uint32 id          = 1;   //记录id\r
    optional uint64 playerid    = 2;   //玩家id\r
    optional uint32 c_time      = 3;   //创建时间\r
    optional double small_blind = 4;   //小盲\r
    optional string handcards   = 5;   //手牌\r
    optional double profit      = 6;   //输赢\r
    optional string shard_key   = 7;   //回放key\r
    optional string collect_id  = 8;   //收藏使用id\r
    optional bool collected     = 9 ;  //是否被收藏\r
    optional uint32 scene_type  = 10;  //场景类型(0.俱乐部，1.大厅)\r
    optional uint32 game_type   = 11;  //游戏类型(1.NLH,2.6+,4.plo4,5.plo5,6.plo6)\r
    optional uint32 ext_type    = 12;  //额外的类型(1.flash)\r
    optional uint32 coin_type   = 13;  //货币类型\r
    optional string boardcards  = 14;  //公牌\r
}\r
\r
//==============获取每手牌信息==================\r
message MsgGetPlayerHandsRecord\r
{\r
    repeated string collect_ids = 1;\r
}\r
\r
message MsgGetPlayerHandsRecordRsp\r
{\r
    required uint32 ec = 1;                 //错误码\r
    repeated PlayerHandsRecord list = 2;    //手牌记录\r
}\r
\r
message GameRecordRoomInfo\r
{\r
    optional uint32 game_type = 1;\r
    optional uint32 small_blind = 2;\r
    optional uint32 ante = 3;\r
    optional uint32 coin_type = 4;\r
    optional uint32 roomid = 5;\r
}\r
\r
message PlayerGameRecord\r
{\r
    optional uint32 time    = 1; // 时间\r
    repeated string collect_ids = 2; // 牌局ID列\r
    optional uint32 buyin_chips = 3; // 带入筹码\r
    optional uint32 out_chips = 4; // 带出筹码\r
    optional GameRecordRoomInfo room_info = 5; //房间信息\r
}\r
\r
message MsgGetPlayerGameHistory\r
{\r
    optional uint32 room_type = 1; // 房间类型 1: 私人房 2: 大厅\r
    optional uint32 coin_type = 2; // 代币类型 1: 现金 2: 金币 3: 私人房\r
    optional uint32 roomid = 3; // 指定房间ID\r
    optional uint32 time = 4; // 指定时间 查询某次交易的对局信息，时间有可能不是很准确。实现上匹配距离最近的\r
}\r
\r
message MsgGetPlayerGameHistoryRsp\r
{\r
    required uint32 ec = 1;     // 错误码\r
    repeated PlayerGameRecord list = 2; // 对局信息\r
}\r
\r
//==============获取收藏的手牌信息=====================\r
message MsgGetCollectRecord\r
{\r
\r
}\r
\r
message MsgGetCollectRecordRsp\r
{\r
    required uint32 ec = 1;                 //错误码\r
    repeated PlayerHandsRecord list = 2;    //手牌记录\r
}\r
\r
//==============添加到收藏=============================\r
message MsgCollectRecordAdd\r
{\r
    required string collect_id = 1;\r
}\r
\r
message MsgCollectRecordAddRsp\r
{\r
    required uint32 ec = 1;                     //0表示成功\r
    optional string collect_id = 2;\r
}\r
\r
//===============删除收藏==============================\r
message MsgCollectRecordDel\r
{\r
    required string collect_id = 1;\r
}\r
\r
message MsgCollectRecordDelRsp\r
{\r
    required uint32 ec = 1;                     //0表示成功\r
    optional string collect_id = 2;\r
}\r
\r
//================获取牌局信息==========================\r
message MsgGetStatisticsRecord\r
{\r
    repeated string statisticsids = 1;          //需要获取的牌局信息\r
    optional uint32 type = 2;                   //1.全部数据 2.部分玩家数据\r
    repeated uint64 playerids = 3;              //玩家id\r
}\r
\r
message MsgGetStatisticsRecordRsp\r
{\r
    required uint32 ec = 1;                         //错误码\r
    repeated StatisticsRecord statistics = 2;       //牌局列表\r
}\r
\r
//================= 获取比赛信息==========================\r
message MsgGetMttRecord\r
{\r
    repeated uint32 mttids = 1;                 //需要获取的牌局信息\r
    optional uint32 type = 2;                   //1.全部数据 2.部分玩家数据\r
    repeated uint64 playerids = 3;              //玩家id\r
}\r
\r
message MsgGetMttRecordRsp\r
{\r
    required uint32 ec = 1;                     //错误码\r
    repeated MttRecord mttrecord = 2;           //比赛列表\r
}\r
\r
message MsgGetShardKeyByCollectId \r
{\r
    required string collect_id = 1;\r
}\r
\r
message MsgGetShardKeyByCollectIdRsp\r
{\r
    required uint32 ec = 1;                     //错误码\r
    required string collect_id = 2;\r
    optional string shard_key = 3;\r
}`,__vite_glob_0_13=`syntax = "proto2";\r
package store;\r
\r
//商城信息\r
message pbStoreInfo{\r
    optional uint32 type = 1;                      //商城类型 1筹码 2钻石 3没有使用 4道具 5互动道具\r
    optional uint32 start_time = 2;                 //开始时间\r
    optional uint32 end_time = 3;                   //结束时间\r
}\r
\r
message pbProduct{	\r
    optional uint32 Id = 1;                 //商品id\r
    optional string name = 2;                //商品名称\r
    optional uint32 cost = 3;               //价格\r
    optional uint32 value = 4;              //对应的商品的值\r
    optional uint32 type = 6;                //商城类型 1筹码 2钻石 3没有使用 4道具 5互动道具\r
    optional string pic = 7;                 //图片\r
   	optional uint32 effective_day = 9;      //有效时间 单位天\r
    optional uint32 time = 10;              //最新修改时间\r
    optional uint32 reward_type = 11;       //奖品类型（1实物2钻石4门票）\r
    optional uint32 prop_id = 14;           //道具ID(101.银卡,102.黑卡,103.紫卡,104.时间银行,105.兔子相机)\r
    optional double doule_cost = 15;          //浮点型价格\r
}\r
\r
message PayRecord {\r
    optional uint32 diamond = 1;               //支付获得钻石数量\r
    optional uint32 time = 2;                   //支付时间\r
    optional string name = 3;                   //商品名称\r
    optional uint32 type = 4;                   //商品类型\r
    optional uint32 itemid = 5;                 //道具ID\r
    optional uint32 value = 6;                //道具数量\r
    optional uint32 effect_day = 7;            //有效时间\r
}\r
\r
message VipPrivilege {\r
    required uint32 level = 1;                  //等级\r
    required uint32 itemid = 2;                 //道具ID\r
    required int32 rabbit_hunting = 3;         //兔子相机\r
    required int32 connnect_protect = 4;      //重连\r
    required int32 free_prop = 6;               //免费道具\r
    required int32 time_bank = 7;               //时间银行个数\r
    required int32 valid_day = 8;               //有效天数\r
    required int32 rival_data = 10;              //对手数据\r
}\r
\r
\r
// ========== 获取产品列表 ==========\r
message MsgProductList\r
{\r
    optional string currency = 2; // 货币类型（不传值默认返回美元价格）\r
}\r
\r
// ========== 获取产品列表返回 ==========\r
message MsgProductListRsp     \r
{ \r
    repeated pbProduct list = 1;   \r
    repeated pbStoreInfo info = 2;\r
}\r
\r
\r
// ========== 获取支付记录 =================\r
message MsgGetPaySuccRecord\r
{\r
    optional uint32 type = 1;           //  1筹码  2钻石  4道具  不传值表示获取所有类型\r
}\r
\r
message MsgGetPaySuccRecordRsp\r
{\r
    repeated PayRecord list = 1;                //支付记录 \r
}\r
\r
// 获取VIP特权配置\r
message MsgGetVipPrivilegeConfig {\r
    required string md5 = 1;                     //上次请求配置返回的md5,第一次随便传一个字符串\r
}\r
\r
message MsgGetVipPrivilegeConfigRsp {\r
    required string md5 = 1;                //本次配置的md5(需要本地保存,如果传的md5和这个一样,list里面将没有数据)\r
    repeated VipPrivilege list = 2;     //配置列表\r
}\r
\r
// 使用钻石购买商品\r
message MsgUseDiamondPay {\r
    required uint32 id = 1;                     //商品ID\r
}\r
\r
message MsgUseDiamondPayRsp {\r
    required int32 ec = 1;                      //错误码\r
}\r
\r
// 赠送道具\r
message MsgSendUserItem {\r
    required int64 playerid = 1;                // 被赠送人ID\r
    required uint32 id = 2;                     // 赠送的道具ID\r
}\r
\r
message MsgSendUserItemRsp {\r
    required int32 ec = 1;                     // 错误码\r
}\r
\r
\r
//==============广播支付成功 ==============================\r
message MsgPaySuccCast\r
{\r
    optional uint32 diamonds = 1;                   //支付获得的钻石数量\r
}\r
\r
message MsgCashPaySuccCast {\r
    optional int64 playerid = 1;                 //支付成功的玩家ID\r
    optional double cash = 2;                    //支付获得的可提现现金数量\r
    optional double bind_cash = 3;               //支付获得的不可提现现金数量\r
}`,__vite_glob_0_14=`syntax = "proto2";\r
import "rooms.proto";\r
import "store.proto";\r
package texas;\r
\r
\r
//=========德州房间规则===========\r
//\r
//===============================\r
message TexasRule\r
{\r
    required string  name               = 1;   // 牌局名称\r
    required uint32 game_type           = 2;   // 类型（1=德州扑克,2=6+,4=plo4,5=plo5,6=plo6,7=ofc,8=color）\r
    required uint32 chip_max            = 3;   // 最大筹码    计算后的实际数值\r
    required uint32 chip_min            = 4;   // 最小筹码    计算后的实际数值\r
    required double sb_num              = 5;   // 小盲     实际数值\r
    required uint32 max_chair           = 6;   // 最大座位数  2~9\r
    required uint32 time                = 7;   // 时间(秒)   0.5小时 ~ 5小时.  1800秒 ~18000秒\r
    required double ante                = 8;   // 是否ANTE  计算后的实际数值\r
    required bool   is_canbuy_insurance = 9;   // 是否可以购买保险\r
    required bool   is_force_straddle   = 10;  // 是否force_straddle\r
    optional bool   is_open_gps         = 12;  // 是否开启gps限制\r
    optional bool   is_open_ip          = 13;  // 是否开启ip限制\r
    optional uint32 autostart           = 14;  // 自动开局  0,表示不自动开  其他表示指定人数开\r
    optional uint32 hands_fee           = 15;  // 费率\r
    optional uint32 fee_cap             = 16;  // 限额收取\r
\r
    optional uint32 action_time         = 17;  // 行动时间\r
    optional uint32 min_vpip            = 18;  // 俱乐部vpip限制\r
    optional uint32 vpip_level          = 19;  // 牌局vpip限制\r
    optional uint32 hands_threshold     = 20;  // 牌局vpip阀值\r
    optional bool auto_extension        = 21;  // 自动延时\r
    optional uint32 extension_times     = 22;  // 自动延时次数\r
    optional bool auto_open             = 23;  // 自动重开\r
    optional uint32 calltime            = 24;  // calltime\r
    optional bool exclusive             = 25;  // 专属桌\r
    optional bool ban_chatting          = 26;  // 禁止聊天\r
    optional bool linked_email          = 27;  // 绑定邮箱\r
    optional bool pc_restriction        = 28;  // pc限制\r
    optional bool ev_chop               = 29;  // ev chop\r
    optional bool jackpot               = 30;  // jackpot\r
    optional uint32 flash               = 31;  // flash\r
    optional BombPot bomb_pot           = 32;  // bomb_pot\r
    optional bool double_cards          = 33;  // 双层公共牌\r
    optional bool simulator_restriction = 34;  // 模拟器限制\r
    optional bool ios_only              = 35;  // 仅限IOS设备(iphone/ipad)\r
    optional bool multi_times           = 36;  // 多次发公共牌\r
    optional bool ev_chop_no_bomb       = 37;  // evchop暴击时不生效\r
    optional bool insurance_no_bomb     = 38;  // 保险暴击时不生效\r
    optional uint32 limit_buyin_chips   = 39;  // 玩家总买入限制\r
    optional int32 coin_type            = 40;  // 币种类型（1:现金 2:金币 3:私人房虚拟币）\r
    optional bool is_open_tg_push       = 41;  // 是否开启tg推送\r
    repeated int64 tg_push_groupids     = 42;  // tg推送群组ids\r
    optional int32 security_fund        = 43;  // 保证金（单位：BB）\r
    optional bool is_auto_add_security_fund        = 44;  // 是否自动补充保证金\r
    optional bool is_random_sitdown     = 45;  // 是否随机入座\r
    optional bool is_action_look_cards  = 46;  // 按行动时间看牌\r
    optional bool is_auto_buyin         = 47; // 是否开启自动买入\r
    optional int32 default_buyin        = 48; // 默认买入(AOF玩法)\r
}\r
\r
message BombPot\r
{\r
    optional bool valid        = 1;  // 有效\r
    optional uint32 per_hand   = 2;  // 每多少手触发\r
    optional uint32 min_bb     = 3;  // 最小\r
    optional uint32 max_bb     = 4;  // 最大\r
    optional bool double_cards = 5;  // 双层公共牌\r
}\r
\r
// ==========  德州牌桌数据 ==================\r
//\r
//=======================================\r
message TableInfo\r
{\r
    optional uint32 game_num = 1;                   // 当前游戏局数\r
    optional uint32 remain_time  = 2;               // 牌局剩余时间\r
    optional uint32 btn_chair_id = 3;               // 庄家位置\r
    optional uint32 sb_chair_id = 4;                // 小盲位置\r
    optional uint32 bb_chair_id = 5;                // 大盲位置\r
    repeated rooms.PlayerData players = 6;          // 所有在房间里面的玩家列表\r
    repeated uint32 public_cards = 7;               // 公共牌\r
    repeated double side_pot = 8;                   // 边池(主池、边池1、边池2 ...)\r
    //optional uint64 action_playerid = 9;            // 当前行动玩家id\r
    optional bool   is_open = 10;                   // 是否开局\r
    optional uint32   room_status = 11;             // 牌桌状态（1未开始，2游戏开始，3翻牌圈(Flop-round）：前三张公共牌出现以后的押注圈，4转牌圈（Turn-round）：第四张出现以后的押注圈,5河牌圈（River-round）:第五张出现以后的押注圈，6结算阶段，7游戏结束阶段）\r
    optional double pot = 12;                       // 底池（总池）\r
    optional uint32 room_id = 13;                   // 房间id\r
    optional uint64 clubid = 14;                    // 俱乐部id\r
    optional TexasRule  rule = 15;                   // 房间规则\r
    //optional uint32 round = 16;                      // 当前行动玩家轮次\r
    repeated uint64 game_playerids = 17;                // 当前一手正在参与牌局的玩家列表(中途站起或者离开的玩家剔除)\r
    optional MsgNextActionPlayerCast cur_action_player = 18;    // 当前行动玩家信息\r
    repeated int32 handcards = 19;                      // 玩家手牌\r
    optional uint32 wait_time = 20;                   // 等待时间戳\r
    optional bool landscape = 21;                     // 是否可以横屏\r
    optional uint32 pre_opr_type = 22;                     //玩家预操作类型\r
    optional bool need_times = 23;                     //筹码是否需要加倍计算\r
    optional uint32 table_index = 24;                     //桌子编号\r
    optional bool fast_fold = 25;                     //fast fold\r
    repeated uint32 open_cards = 26;                     //选择了亮那些牌\r
    repeated uint32 public_cards_2 = 27;                // 双层公共牌\r
    repeated MultiTimePublicCards multi_public_cards = 28; // 多次公共牌\r
    optional uint32 multi_status      = 29;  //多次发牌确认状态（0.默认状态-没开始确认 1.领先玩家确认中 2.落后玩家确认中 3.放弃多次发牌 4.拒绝多次发牌 5.允许多次发牌 ）\r
    optional MultiTimeInfo multi_info = 30;  //多次发牌确认信息\r
    optional string cur_collect_id   = 31;  //当前的牌局编号\r
    optional uint32 max_chair        = 32;   // 最大座位数  2~9\r
    optional double cur_security_fund = 33;               // 当前保证金\r
}\r
\r
// 多次公共牌\r
message MultiTimePublicCards{\r
    repeated uint32 cards = 1;  // 多次公共牌\r
}\r
\r
// 多次发牌结构\r
message MultiTimePlayer{\r
    optional uint64 playerid   = 1;  // 玩家ID\r
    optional string nick       = 2;  // 玩家姓名\r
    optional string avatar     = 3;  // 玩家头像\r
    repeated uint64 handcards  = 4;  // 玩家手牌\r
    optional uint32 chair_id   = 5;  // 玩家椅子ID\r
    optional uint32 chance     = 6;  // 胜率 需要 /100\r
    optional bool is_leader    = 7;  // 是否领先\r
}\r
\r
message MultiTimeInfo{\r
    repeated MultiTimePlayer players = 1;   // 玩家信息\r
    repeated uint32 outs             = 2;   // outs\r
    repeated uint32 chops            = 3;   // chops\r
    optional double pot              = 4;   // 底池（总池）\r
    repeated uint32 public_cards     = 5;   // 公共牌\r
    optional uint32 multi_times      = 6;   // 多少次（领先玩家选择后才会有值，可以用来区分落后玩家和领先玩家的弹框）\r
    optional uint32 end_time         = 7;   // 倒计时结束\r
    optional uint32 remain_num       = 8;   // 剩余次数\r
    optional uint32 temp_multi_times = 9;   // 多少次(临时的：领先玩家选了，落后玩家还没确认)\r
}\r
\r
// ==========  房间基础数据 ==================\r
//\r
//=======================================\r
message RoomInfo\r
{\r
    optional uint32 room_id       = 1;   // 房间id\r
    optional uint64 creatorUserID = 2;   // 创建者userID\r
    optional string creatorNick   = 3;   // 创建者昵称\r
    optional string creatorAvatar = 4;   // 创建者头像\r
    optional uint64 clubid        = 5;   // 俱乐部id\r
    optional uint64 create_time   = 6;   // 创建时间\r
    optional bool validity        = 7;   // 房间有效性（true有效，false无效,仅供展示用）\r
    optional TexasRule  rule      = 8;   // 房间规则\r
    optional uint32 remain_time   = 9;   // 牌局剩余时间\r
    optional uint32 count         = 10;  // 当前人数\r
    optional string clubAvatar    = 11;  // 俱乐部头像\r
    optional uint32 group_no      = 12;  // 俱乐部等级（1铜，2银，3金，4钻）\r
    optional string clubNick      = 13;  // 俱乐部昵称\r
    optional int32 status         = 14;  // 房间 状态 -1 未申请，0已申请，1已同意申请\r
    optional bool is_in           = 15;  // 是否\r
\r
    optional uint32 index       = 16;  // 序号（排序使用，1牌局创建者2俱乐部创建者3俱乐部成员4个人牌局参与者）\r
    optional bool is_enter      = 17;  //是否进入过\r
    optional uint32 gameid      = 18;  // 游戏id\r
    optional uint32 is_flash    = 19;  // 是否闪电房\r
    optional uint32 waiting_num = 20;  // 等待人数\r
    optional bool is_sit        = 21;  // 是否在房间里坐下\r
    optional bool is_wait       = 22;  // 是否在等待列表\r
    optional uint32 pin         = 23;  // 设置了置顶（这边标记设置置顶时的时刻，方便排序）\r
    optional int32 cost_type    = 24;  // 币种类型（1:现金 2:金币）\r
    optional string invitecode  = 25; // 邀请码\r
    optional uint32 end_time    = 26;   // 房间结束时间（限时房间使用）\r
    optional bool has_security_fund_warning      = 27;  // 是否有保证金不足告警\r
    optional int64 tg_group_id      = 28;  // 私人房-tg群id\r
}\r
\r
// ==========  房间动态刷新数据 ==================\r
//\r
//=======================================\r
message RoomDynamicInfo\r
{\r
    optional uint32 room_id     = 1;   // 房间id\r
    optional bool validity      = 2;   // 房间有效性（true有效，false无效,仅供展示用）\r
    optional uint32 remain_time = 3;   // 牌局剩余时间\r
    optional uint32 count       = 4;  // 当前人数\r
    optional int32 status       = 5;  // 房间 状态 -1 未申请，0已申请，1已同意申请\r
    optional bool is_in         = 6;  // 是否\r
    optional bool is_enter      = 7;  //是否进入过\r
    optional uint32 gameid      = 8;  // 游戏id\r
    optional uint32 is_flash    = 9;  // 是否闪电房\r
    optional uint32 waiting_num = 10;  // 等待人数\r
    optional bool is_sit        = 11;  // 是否在房间里坐下\r
    optional bool is_wait       = 12;  // 是否在等待列表\r
    optional uint32 pin         = 13;  // 置顶数据\r
}\r
\r
//=================== 玩家下注 ===================\r
//\r
//===============================================\r
message PlayerBet\r
{\r
    optional uint64 playerid = 1;           // 玩家id \r
    optional double turn_chip = 2;          // 下注筹码\r
    optional double table_chip = 3;         // 桌上筹码\r
    optional double chip = 4;               // 玩家身上筹码 \r
    //optional bool is_fold = 5;              // 是否弃牌(true 弃牌) \r
    optional double pot = 6;                // 底池总数\r
    optional uint32 game_num = 7;           // 当前游戏局数\r
    optional uint32 round = 8;              // 当前轮次\r
    optional uint32 act_type = 9;           // 行动类型（1=让牌，2=弃牌，3=跟注，4=加注，5=ALLIN，6=延时，7=straddle，8返还筹码）\r
    optional uint32 act_status = 10;        //玩家行动后的状态（1=让牌，2=弃牌，3=跟注，4=加注，5=ALLIN，6=延时，7=straddle, 9=第一个下注，10=小盲注，11=大盲注）\r
    optional uint32 sum_bet_chip = 11;    //已下到桌上筹码(全部)\r
}\r
\r
//================ 玩家结果  =======================\r
//\r
//=================================================\r
message PlayerResult\r
{\r
    // 玩家id\r
    required uint64 playerid = 1;\r
    // 手牌\r
    repeated int32 handcards = 2;\r
    // 是否是弃牌 \r
    optional bool is_fold = 3;   \r
    // 牌型等级（0=没有牌型 1=单牌，2=一对，3=两对，4=三条，5=顺子，6=同花，7=葫芦，8=四条，9=同花顺，10=皇家同花顺）\r
    required uint32 poker_type = 4; \r
    // 输赢结果类型  1: 胜局 2: 输局\r
    optional uint32 result = 5; \r
    // 输赢的筹码 (净)     \r
    optional double  chip = 6;\r
    // 牌型列表（高亮的牌型）\r
    repeated uint32 hightlight_cards = 7;\r
    // 服务费  \r
    optional double  fee = 8;\r
\r
    // 保险赔偿\r
    optional uint32 return_count = 9;           \r
    // 投保额\r
    optional uint32 insurance = 10; \r
\r
    // 玩家剩余筹码        \r
    optional double  leftchip = 11;\r
\r
    //兔子相机钻石\r
    optional uint32 rabbitself_diamond = 12;\r
    optional uint32 rabbitall_diamond = 13;\r
\r
    // 玩家盈利（牌局总盈利）\r
    optional double win_chip = 14;\r
\r
    // evchop\r
    optional bool is_evchop = 15;\r
\r
    // 双层牌的\r
    optional uint32 poker_type_2 = 16;\r
    optional uint32 result_2 = 17;\r
    repeated uint32 hightlight_cards_2 = 18;\r
\r
    // 池中返还的筹码   \r
    optional double  return_chip = 19;\r
    // 真金场兔子相机花费\r
    optional double  cash_rabbit_cast = 20;\r
}\r
\r
// 玩家胜率\r
message PlayerWinRate\r
{\r
    // 玩家id\r
    required uint64 playerid = 1;\r
    optional uint64 win_rate = 2;\r
    optional uint32 outs = 3;\r
    optional bool is_leader = 4;\r
}\r
\r
message GameAutoBuyIn\r
{\r
    optional double  threshold_chips = 1;\r
    optional double  buyin_chips     = 2;\r
}\r
\r
//=================== 回放牌局相关 ====================\r
//\r
//=================================================\r
message GameRecordInfo\r
{\r
    optional string record_type = 1; // 对应下面各个字段的名字\r
    optional MsgNextActionPlayerCast next_action_player = 2;\r
    optional MsgBetAnteCast bet_ante = 3;\r
    optional MsgPlayerBetCast player_bet = 4;\r
    optional MsgPotsCast side_pot = 5;\r
    optional MsgPublicCardsCast public_cards = 6;\r
    optional MsgGameResultCast game_result = 7;\r
}\r
\r
\r
// 可购买的保险信息\r
message InsuranceInfo\r
{\r
    optional uint64 playerid = 1;                       // 玩家id\r
    optional uint32 pot_id = 2;                         // 底池id\r
    repeated uint32 outs = 3;                           // outs牌\r
    optional float odds = 4;                            // 赔率\r
    optional uint32 min_insurance = 5;                  // 最小投保额\r
    optional uint32 breakeven_insurance = 6;            // 保本投保额\r
    optional uint32 max_insurance = 7;                  // 最大投保额\r
    optional uint32 pot_num = 8;                        // 底池筹码数\r
    repeated ShowHandCardInfo allin_players = 9;        // allin 玩家信息\r
    optional float put_chips = 10;                      // 分池投入金额(下注值+损失的投保额)\r
    optional uint32 remaining_card_num = 11;            // 剩余的牌数量\r
}\r
\r
\r
// 保险结果\r
message InsuranceResult\r
{\r
    optional uint64 playerid = 1;              // 玩家ID\r
    optional uint32 insurance_count = 2;        // 扣除的保险费\r
    optional uint32 return_count = 3;           // 保险赔偿\r
}\r
\r
// 展示手牌的玩家\r
message ShowHandCardInfo\r
{\r
    optional uint64 playerid = 1;\r
    repeated int32 handcards = 2;   // 玩家手牌\r
    optional bool cover = 3;        // true(盖牌)\r
}\r
\r
\r
// 通用TableInfo(多桌用)\r
message CommonRule\r
{\r
    required string  name       = 1;  // 牌局名称\r
    required uint32 game_type   = 2;  // 类型（1=德州扑克,2=6+,4=plo4,5=plo5,6=plo6）\r
    required double sb_num      = 3;  // 小盲     实际数值\r
    required uint32 max_chair   = 4;  // 最大座位数  2~9\r
    required uint32 time        = 5;  // 时间(秒)   0.5小时 ~ 5小时.  1800秒 ~18000秒\r
    optional uint32 action_time = 6;  // 行动时间\r
}\r
\r
// 通用ActionPlayer(多桌用)\r
message CommonNextActionPlayer\r
{\r
    optional uint64 playerid            = 1;   //玩家id\r
    optional uint64 action_finish_time  = 2;   //操作结束时间戳\r
    optional uint32 boughtLeftTimeTimes = 3;   // 已购买剩余行动时间次数\r
}\r
\r
// 通用player(多桌用)\r
message CommonPlayer\r
{\r
    optional uint64 playerid            = 1;   //玩家id\r
    optional uint32 status              = 2;   //玩家状态（0=无状态，1=入局，2=ALLIN，3=弃牌）\r
    optional bool is_leftback           = 3;   //是否暂离\r
}\r
\r
// 通用TableInfo(多桌用)\r
message CommonTableInfo\r
{\r
    optional uint32 game_num          = 1;  // 当前游戏局数\r
    optional uint32 remain_time       = 2;  // 牌局剩余时间\r
    optional uint32 btn_chair_id      = 3;  // 庄家位置\r
    optional bool   is_open           = 4;  // 是否开局\r
    optional uint32   room_status     = 5;  // 牌桌状态（1未开始，2游戏开始，3翻牌圈(Flop-round）：前三张公共牌出现以后的押注圈，4转牌圈（Turn-round）：第四张出现以后的押注圈,5河牌圈（River-round）:第五张出现以后的押注圈，6结算阶段，7游戏结束阶段）\r
    repeated CommonPlayer     players = 6;  // 所有在房间里面的玩家列表\r
    optional uint32 room_id           = 7;  // 房间id\r
    optional uint64 clubid            = 8;  // 俱乐部id\r
    optional CommonRule  rule         = 9;  // 房间规则\r
\r
    repeated uint64 game_playerids                    = 10;  // 可以开局的玩家id列表\r
    optional CommonNextActionPlayer cur_action_player = 11;  // 当前行动玩家信息\r
    repeated CommonNextActionPlayer ftc_action_players = 12;  // 当前ftc行动玩家信息\r
\r
    optional uint32 wait_time = 13;  // 等待时间戳\r
\r
    optional bool need_times    = 14;  //筹码是否需要加倍计算\r
    optional uint32 table_index = 15;  //桌子编号\r
}\r
\r
// 多桌数据\r
message UserRoomInfo \r
{\r
    required uint64 room_id             = 1;  // 房间ID\r
    optional uint64 clubid              = 2;  // 用户俱乐部ID\r
    optional uint32 mttid               = 3;  // 比赛ID\r
    optional uint32 state               = 4;  // 上次加入比赛的参数\r
    optional CommonTableInfo table_info = 5;  //房间信息\r
    optional uint32 time                = 6;  //进入时间\r
    optional uint32 game_type           = 7;  //比赛会有具体的游戏类型\r
    optional bool   is_spinup           = 8;  // true / false\r
    optional bool   is_sng              = 9;  // true / false\r
}\r
\r
message EvchopInfoPlayer\r
{\r
    optional uint64 playerid = 1;   // 玩家ID\r
    optional uint32 chair_id = 2;   // 玩家椅子ID\r
    optional uint32 chips = 3;     // ev chop筹码 需要 /100\r
    optional uint32 chance = 4;    // 胜率 需要 /100\r
}\r
\r
message PotsEvchopInfo\r
{\r
    optional uint32 pot_index = 1;      // pot索引\r
    optional uint32 pot_chips = 2;      // pot筹码\r
    repeated EvchopInfoPlayer evchop_players = 3;    // ev chop信息\r
}\r
\r
message ChanceInfoPlayer\r
{\r
    optional uint64 playerid = 1;  // 玩家ID\r
    optional uint32 chair_id = 2;  // 玩家椅子ID\r
    optional uint32 chance   = 3;  // 胜率 需要 /100\r
}\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
\r
//========== 获取游戏场房间列表 ============\r
//\r
//===============================\r
message MsgGetGameTableList\r
{\r
    required uint64 clubid = 1;                         // 俱乐部id\r
}\r
\r
//========== 获取游戏场房间列表返回 ============\r
//\r
//===============================\r
message MsgGetGameTableListRsp\r
{\r
    repeated RoomInfo room_list = 1;                    // 牌局列表\r
}\r
\r
\r
//========== 获取游戏场房间动态信息 ============\r
//\r
//===============================\r
message MsgGetGameTableListByIds\r
{\r
    required uint64 clubid = 1;          // 俱乐部id\r
    repeated uint32 roomids = 2;         //查询的房间信息\r
}\r
\r
message MsgGetGameTableListByIdsRsp\r
{\r
    repeated RoomDynamicInfo room_list = 1;  // 牌局列表\r
}\r
\r
\r
//========== 创建房间 ============\r
//\r
//===============================\r
message MsgCreateRoom\r
{\r
    optional TexasRule  rule = 1;         // 房间规则\r
    optional uint32 operation_type = 2;         // 操作类型（1玩家，2后台）\r
    optional uint32 room_type = 3;              // 房间类型（1个人，2俱乐部）\r
    optional bool validity = 4;                 // 房间有效性（true有效，false无效,仅供展示用）\r
    optional uint64 clubid = 5;                 // 俱乐部id（房间类型为俱乐部时需传值）\r
}\r
\r
//========== 创建房间返回 ==========\r
//\r
//===============================\r
message MsgCreateRoomRsp\r
{\r
    required uint32 result = 1;                     //返回结果\r
    optional RoomInfo info = 2;                     // 房间基础数据\r
}\r
\r
// 创建私人房间\r
message MsgCreatePrivateRoom\r
{\r
    optional TexasRule  rule = 1;         // 房间规则\r
    optional int64      tg_group_id = 2;  // 私人房-tg群id\r
}\r
\r
message MsgCreatePrivateRoomRsp\r
{\r
    required uint32 result = 1;    //返回结果\r
    optional RoomInfo info = 2;    // 房间基础数据\r
}\r
\r
// 获取私人房间信息\r
message MsgGetPrivateTables\r
{\r
    optional int64 tg_group_id          = 49; // 私人房-tg群id\r
}\r
message MsgGetPrivateTablesRsp\r
{\r
    required uint32 ec = 1;\r
    repeated RoomInfo list = 2;\r
    optional int64 tg_group_id = 3; // 私人房-tg群id\r
}\r
\r
// 私人房再来一局\r
message MsgPrivateRoomAgain\r
{\r
    optional string invitecode  = 1; // 邀请码\r
}\r
\r
message MsgPrivateRoomAgainRsp\r
{\r
    required uint32 result = 1;    //返回结果\r
    optional RoomInfo info = 2;    // 房间基础数据\r
}\r
\r
// 通过邀请码获取私人房ID\r
message MsgGetPrivateTableId\r
{\r
    required string code = 1; // 邀请码\r
}\r
message MsgGetPrivateTableIdRsp\r
{\r
    required uint32 ec = 1;\r
    optional uint32 tableid = 2; // 房间ID\r
}\r
\r
//========== 进入房间 ============\r
//\r
//===============================\r
message MsgEnterRoom\r
{\r
    optional uint32 room_id      = 1;  //房间id\r
    optional uint32 enter_type   = 2;  //1.私人房  2锦标赛 ,3. 大厅牌局 4. 现金普通\r
    optional uint32 password     = 3;  //密码\r
    optional uint32 clubid       = 4;  //从那个俱乐部进入(联盟牌局必须要传)\r
    optional uint32 mttid        = 5;  //进入的是比赛的房间\r
    optional bool switch_out_pre = 6;  //自动切出上一个\r
}\r
\r
//========== 进入房间返回 ==========\r
//\r
//===============================\r
message MsgEnterRoomRsp\r
{\r
    required uint32 result = 1;                   //返回结果\r
    optional uint32 room_id = 2;                  //房间id\r
}\r
\r
//========== 退出房间 ============\r
//\r
//===============================\r
message MsgLeaveRoom\r
{\r
    optional uint32 room_id = 1;                  //房间id\r
    optional uint32 enter_type = 2;              //1 普通牌局  2锦标赛\r
}\r
\r
//========== 退出房间返回 ==========\r
//\r
//===============================\r
message MsgLeaveRoomRsp\r
{\r
    required uint32 result = 1;                   //返回结果\r
    optional uint32 room_id = 2;                  //房间id\r
}\r
\r
//========== 查询能否进入房间 ============\r
//\r
//===============================\r
message MsgCheckEnterRoom\r
{\r
    optional uint32 room_id = 1;                  //房间id\r
    optional uint64 clubid = 2;                   //俱乐部id\r
}\r
\r
//========== 查询能否进入房间返回 ==========\r
//\r
//===============================\r
message MsgCheckEnterRoomRsp\r
{\r
    required uint32 result = 1;                   //返回结果\r
    optional uint64 clubid = 2;                   //俱乐部id\r
    optional uint32 room_id = 3;                  //房间id\r
}\r
\r
//====================== 查询房间信息 ======================\r
// \r
//=========================================================\r
message MsgQueryRoomInfo\r
{\r
    optional uint32 room_id = 1;        //房间id\r
    optional uint64 clubid = 2;        //俱乐部id\r
}\r
\r
//=================== 查询房间信息返回 ======================\r
// \r
//=========================================================\r
message MsgQueryRoomInfoRsp\r
{\r
    optional RoomInfo info = 1;             // 房间数据\r
    optional uint32 room_id = 2;            //房间id\r
}\r
\r
//================ 查询桌上筹码 ========================\r
//\r
//=====================================================\r
message MsgQueryChip\r
{\r
\r
}\r
\r
//=============== 查询桌上筹码返回 ======================\r
//\r
//=====================================================\r
message MsgQueryChipRsp\r
{\r
    optional uint32 table_chip_num = 1;   //桌上筹码数\r
    optional uint32 chip_num = 2;         //账号余额\r
    optional uint32 chip_max = 3;         // 最大筹码    \r
    optional uint32 chip_min = 4;         // 最小筹码    \r
    optional uint32 sb_num = 5;             // 小盲     \r
}\r
\r
//==================玩家行动======================\r
// \r
//===============================================\r
message MsgPlayerAction\r
{\r
    // 行动类型（1=让牌，2=弃牌，3=跟注，4=加注，5=ALLIN)\r
    optional uint32 act_type = 1;               \r
    optional double value = 2;\r
    optional uint32 round = 3;              // 当前轮次\r
    optional uint32 room_id = 4;            // 房间ID(多桌时传需要操作的桌子，默认当前桌)\r
}\r
//=================玩家行动返回====================\r
//玩家行动类型（1=让牌，2=弃牌，3=跟注，4=加注，5=ALLIN ）\r
//result 返回结果,根据动作的类型不同返回不同的结果\r
//act_type == 1 :\r
//act_type == 2 :\r
//act_type == 3 :\r
//act_type == 4 :\r
//act_type == 5 :\r
//===============================================\r
message MsgPlayerActionRsp\r
{\r
    // 返回结果\r
    required uint32 result = 1;                 \r
    // 行动类型（1=让牌，2=弃牌，3=跟注，4=加注，5=ALLIN ）\r
    optional uint32 act_type = 2;\r
    optional uint32 room_id = 3;        // 房间ID            \r
}\r
\r
\r
//====================== 购买保险 ======================\r
// \r
//=========================================================\r
message MsgPlayerBuyInsurance\r
{\r
    optional uint32 pot_id = 1;                      // 底池id\r
    optional uint32 insurance = 2;                  // 保险费\r
    optional bool is_cancel = 3;                  // 是否取消购买\r
    optional uint32 room_id = 4;                    // 房间id\r
}\r
\r
//=================== 购买保险返回 ======================\r
// \r
//=========================================================\r
message MsgPlayerBuyInsuranceRsp\r
{\r
    required uint32 result = 1;                   //返回结果\r
    optional uint32 room_id = 2;                  //房间id\r
}\r
\r
//====================== 获取保险保证金 ======================\r
message MsgGetSecurityFund\r
{\r
    optional uint32 room_id = 1;                    // 房间id\r
}\r
\r
//=================== 获取保险保证金返回 ======================\r
message MsgGetSecurityFundRsp\r
{\r
    optional uint32 result = 1;                   // 返回结果\r
    optional uint32 room_id = 2;                  // 房间id\r
    optional double cur_security_fund = 3;        // 当前保证金\r
    optional double security_fund_cost = 4;       // 保证金投入\r
    optional double security_fund_profit = 5;     // 保证金盈亏\r
    optional bool is_auto_add_security_fund = 6;  // 是否自动补充保证金\r
    optional double add_security_fund_min_scale = 7; // 添加保证金最小刻度值\r
}\r
\r
//====================== 保险补充保证金 ======================\r
message MsgTopUpSecurityFund\r
{\r
    optional uint32 room_id = 1;                    // 房间id\r
    optional double add_security_fund = 2;          // 补充保证金值\r
    optional double add_to_security_fund = 3;       // 补充至保证金值\r
    optional bool is_auto_add_security_fund = 4;    // 是否自动补充保证金\r
}\r
\r
//=================== 保险补充保证金返回 ======================\r
message MsgTopUpSecurityFundRsp\r
{\r
    required uint32 result = 1;                   // 返回结果\r
    optional uint32 room_id = 2;                  // 房间id\r
    optional double cur_security_fund = 3;        // 当前保证金\r
}\r
\r
//====================== 取消保证金告警 ======================\r
message MsgCancelSecurityFundWarn\r
{\r
    optional uint32 room_id = 1;                    // 房间id\r
}\r
\r
//=================== 取消保证金告警返回 ======================\r
message MsgCancelSecurityFundWarnRsp\r
{\r
    required uint32 result = 1;                   // 返回结果\r
}\r
\r
//=================== 踢出牌局成员 ======================\r
// \r
//=========================================================\r
message MsgKickRoomMember\r
{\r
    optional uint32 room_id = 1;\r
    optional uint64 kick_playerid = 2;\r
}\r
\r
//=================== 踢出牌局成员返回 ======================\r
// \r
//=========================================================\r
message MsgKickRoomMemberRsp\r
{\r
    required uint32 result = 1;                   //返回结果\r
    optional uint32 room_id = 2;                 //房间id\r
}\r
\r
//=================== 申请加入牌局 ======================\r
// \r
//=========================================================\r
message MsgApplyJionRoom\r
{\r
    optional uint32 room_id = 1;\r
}\r
\r
//=================== 申请加入牌局返回 ======================\r
// \r
//=========================================================\r
message MsgApplyJionRoomRsp\r
{\r
    required uint32 result = 1;                   //返回结果\r
    optional uint32 room_id = 2;                 //房间id\r
}\r
\r
//=================== 手动打开私牌（亮牌） ======================\r
// \r
//=========================================================\r
message MsgOpenHandCard\r
{\r
    optional int32 card = 1;    // 选择私牌（第一张1，第二张2，不选则两张都打开）\r
    optional uint32 room_id = 2;        // 房间ID\r
    optional uint32 close = 3;              // 是否亮牌 1.取消亮牌 0或者nil 亮牌\r
    optional uint32 game_num = 4;        // 当前手数\r
}\r
\r
//=================== 手动打开私牌返回 ======================\r
// \r
//=========================================================\r
message MsgOpenHandCardRsp\r
{\r
    required uint32 result = 1;                   //返回结果\r
    optional uint32 room_id = 2;                 //房间id\r
}\r
\r
\r
// ========== 获取道具列表 ==========\r
message MsgPropList   \r
{\r
}\r
\r
// ========== 获取道具列表返回 ==========\r
message MsgPropListRsp     \r
{ \r
    repeated store.pbProduct list = 1;\r
}\r
\r
// ========== 赠送道具 ==========\r
message MsgGivingProp  \r
{\r
    optional uint32 roomId = 1;         \r
    optional uint32 toUserID = 2;\r
    optional uint32 Id = 3;             //商品id（store.pbProduct.Id）\r
    optional uint32 num = 4;\r
}\r
\r
// ========== 赠送道具返回 ==========\r
message MsgGivingPropRsp     \r
{ \r
    required uint32 result = 1;         //错误码\r
    optional uint32 room_id = 2;\r
}\r
\r
// ============= 获取用户多桌信息 =================\r
message MsgGetUserRoomInfo\r
{\r
}\r
\r
message MsgGetUserRoomInfoRsp\r
{\r
    repeated UserRoomInfo roomlist = 1;     //房间列表\r
}\r
\r
// ============== 桌子切换 =======================\r
message MsgChangeRoom\r
{\r
}\r
\r
message MsgChangeRoomRsp\r
{\r
    required uint32 ec = 1;             //错误码\r
}\r
\r
// =============== 预操作 ==========================\r
message MsgPreOpration\r
{\r
    required uint32 type = 1;          //操作类型（0.取消所有操作,1.弃/看,2.自动让牌,3.跟注***,4.跟任何注,5.flod, 6.allin）\r
    required uint32 room_id = 2;       //房间id\r
}\r
\r
message MsgPreOprationRsp\r
{\r
    required uint32 ec = 1;          //错误码\r
    optional uint32 type = 2;        //操作类型\r
    optional uint32 room_id = 3;     //房间id\r
}\r
\r
message MsgBetEvchop\r
{\r
    required uint32 room_id = 1;\r
    required uint32 pot_index = 2; //第几个池子\r
    required uint32 act = 3;       // 1.resume hand 2.ev chop\r
}\r
\r
message MsgBetEvchopRsp\r
{\r
    required uint32 ec = 1;\r
    optional uint32 room_id = 2;\r
}\r
\r
message MsgSetAutoBuyin\r
{\r
    optional uint32 room_id           = 1;\r
    required GameAutoBuyIn auto_buyin = 2;\r
}\r
\r
message MsgSetAutoBuyinRsp\r
{   \r
    required uint32 ec                = 1;\r
    optional uint32 room_id           = 2;\r
    required GameAutoBuyIn auto_buyin = 3;\r
}\r
\r
message MsgGetAutoBuyin\r
{\r
    optional uint32 room_id = 1;\r
}\r
\r
message MsgGetAutoBuyinRsp\r
{\r
    required uint32 ec                = 1;\r
    optional uint32 room_id           = 2;\r
    optional GameAutoBuyIn auto_buyin = 3;\r
}\r
\r
message MsgQuickJoinWaitList\r
{\r
    optional uint32 room_id   = 1;  //房间id\r
    optional uint64  clubid   = 2;  //俱乐部ID\r
    optional uint32 password  = 3;  //密码\r
    optional string club_name = 4;  //俱乐部名字\r
}\r
\r
message MsgQuickJoinWaitListRsp\r
{\r
    required uint32 ec = 1;             //错误码\r
    optional uint32 room_id = 2;        //房间id\r
}\r
\r
//领先、落后玩家同一个协议\r
//领先玩家选择发几次\r
//落后玩家确认是否接受\r
message MsgMultiTimesConfirm\r
{\r
    optional uint32 room_id     = 1;  //房间id\r
    optional uint32 multi_times = 2;  //1.拒绝 2.两次 3.三次\r
    optional bool       accept  = 3;  //落后玩家是否接受\r
}\r
\r
message MsgMultiTimesConfirmRsp\r
{\r
    required uint32 ec      = 1;  //错误码\r
    optional uint32 room_id = 2;  //房间id\r
}\r
\r
//领先玩家增加思考时间\r
message MsgMultiTimesDelaySelectTime\r
{\r
    optional uint32 room_id     = 1;  //房间id\r
}\r
\r
message MsgMultiTimesDelaySelectTimeRsp\r
{\r
    required uint32 ec      = 1;  //错误码\r
    optional uint32 room_id = 2;  //房间id\r
}\r
\r
//================ 购买保险的时间 =========================\r
message MsgApplyInsuranceTime\r
{\r
    optional uint32 room_id = 1;        //房间id\r
}\r
\r
//=============== 购买剩余行动时间返回 ======================\r
//\r
//=====================================================\r
message MsgApplyInsuranceTimeRsp\r
{\r
    required uint32 result = 1;         //返回结果\r
    optional uint32 room_id = 2;        //房间id\r
    optional uint32 time = 3;           //剩余时间\r
}\r
\r
\r
\r
// 自动回收筹码到钱包(AOF玩法)\r
message MsgAutoRecover\r
{\r
    optional uint32 room_id = 1;                // 房间id\r
    optional bool is_auto_recover = 2;          // 是否自动回收\r
}\r
\r
message MsgAutoRecoverRsp\r
{\r
    required uint32 result = 1;                 // 返回结果\r
    optional bool is_auto_recover = 2;          // 是否自动回收\r
}\r
\r
\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
//////////////////////////////////////////////////////////////////////////////////////////////////////////////\r
\r
//============= 德州玩法广播帧消息相关 ===============\r
\r
//=============== 下一个行动玩家 =================\r
//\r
//===============================================\r
message MsgNextActionPlayerCast\r
{\r
    optional uint64 playerid = 1;           //玩家id\r
    optional bool canPass = 2;          // 是否可以让牌\r
    optional bool canRaise = 3;         // 是否可以加注\r
    optional double followChip = 4;     // 跟注数\r
    optional double minAddChip = 5;     // 最小加注到\r
    optional double maxBet = 6;        // 最大下注数\r
    optional double minBet = 7;        // 最小下注数\r
    optional uint64 action_finish_time = 8;           //操作结束时间戳\r
    optional bool canAllin = 9;         // 是否可以Allin\r
    optional bool firstBet = 10;         // 是否本手牌第一个操作的玩家（过滤掉弃牌）\r
    optional uint32 round = 11;              // 当前轮次\r
\r
    optional uint32 boughtLeftTimeTimes = 12;      // 已购买剩余行动时间次数\r
    optional uint32 boughtLeftTimeNeedDiamonds = 13;      // 购买剩余行动时间次数所需钻石\r
    optional uint32 room_id = 14;                 // 房间id\r
    optional double boughtLeftTimeNeedCash = 15;      // 现金桌购买剩余行动时间次数所需钻石\r
    optional bool   is_show_bb = 16;         // 是否使用bb计算下注量，给客户端使用\r
}\r
\r
//=============== 庄位广播 =================\r
//\r
//=========================================\r
message MsgBtnCast\r
{\r
\r
    optional uint32 room_id = 1;                    // 房间id\r
    optional uint32 btn_chair_id = 2;               // 庄家位置\r
}\r
\r
\r
//=============== 下前注 =================\r
//\r
//=========================================\r
message MsgBetAnteCast\r
{\r
    repeated PlayerBet player_bets = 1;          // 下注\r
    optional uint32 room_id = 2;                 // 房间id\r
}\r
\r
//=============== 下盲注 =================\r
//\r
//=========================================\r
message MsgBetSBBBAnteCast\r
{\r
    repeated PlayerBet player_bets = 1;          // 下注\r
    optional uint32 room_id = 2;                 // 房间id\r
}\r
\r
//=============== 下暴击注 =================\r
//\r
//=========================================\r
message MsgBombAnteCast\r
{\r
    repeated PlayerBet player_bets = 1;          // 下注\r
    optional uint32 room_id = 2;                 // 房间id\r
}\r
\r
\r
//=============== 广播手牌 =================\r
//\r
//=========================================\r
message MsgHandCardsCast\r
{\r
    repeated uint64 playerids = 1;      // 需要发牌的玩家id\r
    repeated int32 handcards = 2;       // 玩家自己的手牌\r
    optional uint32 room_id = 3;       // 房间id\r
}\r
\r
//=============== 广播玩家下注动作 =================\r
//\r
//===============================================\r
message MsgPlayerBetCast\r
{\r
    optional PlayerBet bet = 1;         // 下注\r
    optional uint32 room_id = 2;        // 房间id\r
}\r
\r
//=============== 广播边池 =================\r
//\r
//===============================================\r
message MsgSidePotsCast\r
{\r
    repeated double side_pot = 1;            // \r
    optional uint32 room_id = 2;             // 房间id\r
}\r
\r
//=============== 广播底池（总池） =================\r
//\r
//===============================================\r
message MsgPotsCast\r
{\r
    optional double pot = 1;            // \r
    optional uint32 room_id = 2;        // 房间id\r
}\r
\r
//=============== 广播公共牌 =================\r
//\r
//===============================================\r
message MsgPublicCardsCast\r
{\r
    repeated uint32 public_cards = 1;            // 公共牌\r
    optional uint32 room_id = 2;                 // 房间id\r
    repeated uint32 public_cards_2 = 3;          // 双层公共牌\r
    repeated PlayerWinRate player_win_rate = 4;  // 玩家胜率\r
}\r
\r
//=============== 广播胜率 =================\r
//\r
//===============================================\r
message MsgWinRateCast\r
{\r
    optional uint32 room_id = 1;                 // 房间id\r
    repeated PlayerWinRate player_win_rate = 2;  // 玩家胜率\r
}\r
\r
//=============== 广播多层公共牌 =================\r
message MsgMultiTimesPublicCardsCast\r
{\r
    optional uint32 room_id                          = 1;  // 房间id\r
    repeated MultiTimePublicCards multi_public_cards = 2;  // 多次公共牌\r
}\r
\r
//=================== 牌型结果 ====================\r
//\r
//=================================================\r
message GamePoolResultPlayer {\r
    // 从这个池中获得筹码的玩家ID\r
    optional int64 playerid = 1;\r
    // 玩家从这个池中赢得的筹码\r
    optional int32 win_chip = 2;\r
    // 玩家从这个池中获得筹码后身上的筹码\r
    optional int32 hand_chip = 3;\r
}\r
\r
message GamePoolResult {\r
    repeated GamePoolResultPlayer players = 1; // 从这个池中获得了筹码的玩家列表\r
}\r
\r
message MsgGameResultCast\r
{\r
    repeated PlayerResult player_results = 1;\r
    optional bool wait = 2;           // 是否等待\r
    optional uint32 wait_time = 3;    // 等待时间戳\r
    optional uint32 room_id = 4;      // 房间id\r
    repeated GamePoolResult pool_results = 5; // 每个池的结算结果\r
}\r
\r
message MsgGameRecord\r
{\r
    optional uint32 id = 1;\r
    optional uint32 room_id = 2; \r
}\r
\r
message MsgGameRecordRsp\r
{\r
    optional uint32 id = 1;\r
    repeated GameRecordInfo records = 2;\r
    optional uint32 room_id = 3;\r
}\r
\r
//=============== 广播牌局状态 =================\r
//\r
//=========================================\r
message MsgTableStatusCast\r
{\r
    optional uint32   room_status = 1;           // 房间状态（1未开始，2游戏开始，3翻牌圈(Flop-round）：前三张公共牌出现以后的押注圈，4转牌圈（Turn-round）：第四张出现以后的押注圈,5河牌圈（River-round）:第五张出现以后的押注圈，6结算阶段，7等待阶段，8游戏结束阶段）\r
    optional uint32   room_id = 2;              // 房间id\r
}\r
\r
\r
//=============== 广播牌局数据 =================\r
//\r
//===============================================\r
message MsgTexasTableInfoCast\r
{\r
    optional TableInfo  info = 1;                   //牌桌数据\r
    optional uint32 room_id = 2;                    // 房间id\r
}\r
\r
\r
//====================== 提前打开私牌（摊牌） ======================\r
// \r
//=========================================================\r
message MsgOpenHandCardCast\r
{\r
    repeated ShowHandCardInfo hand_card = 1;              // 列表\r
    optional uint32 room_id = 2;                         // 房间id\r
    optional uint32 start_chair_id = 3;                 // 开始亮牌玩家chair_id\r
}\r
\r
//====================== 出亮牌按钮 ======================\r
// \r
//=========================================================\r
message MsgOpenHandCardBtnCast\r
{\r
    optional uint32 room_id = 1;                         // 房间id\r
}\r
\r
//====================== 广播玩家亮牌 ======================\r
// \r
//=========================================================\r
message MsgShowHandCardCast\r
{\r
    optional ShowHandCardInfo hand_card = 1;     \r
    optional uint32 room_id = 2;                 // 房间id \r
    optional uint32 table_index = 3;             //桌子编号    \r
}\r
\r
// 广播房间状态\r
message MsgRoomStatusCast\r
{\r
    optional uint64 clubid       = 1;\r
    optional uint32 room_id      = 2;  // 房间id\r
    optional uint32  room_status = 3;  // 1.新建房间 2.关闭房间\r
    optional uint32 game_type    = 4;  //游戏类型(新建时才有)\r
}\r
\r
// ========== 赠送道具广播 ==========\r
message MsgGivingPropCast     \r
{ \r
    optional string pic = 1;         // 商品图片\r
    optional string name = 2;        // 商品名称\r
    optional uint32 price = 3;      // 价格\r
    optional uint32 uid = 4;        // 赠送者id\r
    optional uint32 touid = 5;      // 接收者id\r
    optional uint32 num = 6;        // 数量\r
    optional string nick = 7;        // 赠送者名字\r
    optional uint32 Id = 8;         // 商品id\r
    optional uint32 room_id = 9;    // 房间id\r
}\r
\r
\r
//=============== 广播反馈客服数据 =================\r
//\r
//===============================================\r
message MsgFeedbackInfoCast\r
{\r
    optional uint32 unReadNum = 1;      // 未读反馈消息数量\r
    optional bool isHasService = 2;      // 是否分配反馈客服\r
    optional uint32 room_id = 3;        // 房间id\r
}\r
\r
\r
//================== 广播牌局将结束 ====================\r
message MsgTableWillFinish\r
{\r
    optional uint32 room_id = 1;  // 房间id\r
}\r
\r
//================== 广播多桌牌局结束 ======================\r
message MsgTableCloseCast\r
{\r
    optional uint32 roomid = 1;         //关闭的房间id\r
    optional uint32 mttid = 2;          //关闭的mttid\r
} \r
\r
message MsgMulitTableActionCast\r
{\r
    required uint32 roomid = 1;         //房间id\r
    required MsgNextActionPlayerCast cur_action_player = 2;\r
    optional double exchange_rate = 3;  // 汇率\r
}\r
\r
message MsgPlayerActionDoneCast\r
{\r
    required uint32 roomid = 1;         //房间id\r
}\r
\r
message MsgTableResultCast\r
{\r
    required uint32 roomid = 1;         //房间ID\r
    required PlayerResult player_result = 2;   //用户结算信息\r
    optional double exchange_rate = 3;  // 汇率\r
}\r
\r
//================== 广播可购买ev_chop ======================\r
message MsgEvchopCast\r
{\r
    optional uint32 roomid = 1;         //房间id\r
    repeated PotsEvchopInfo evchop_info = 2;    //ev_chop信息\r
    optional uint64 action_finish_time = 3;     //操作结束时间\r
    optional uint32 player_curr_pot = 4;        //当前玩家所在的pot\r
    optional bool player_resumed = 5;           //当前玩家是否已经选择resume\r
}\r
\r
message MsgChanceChangeCast\r
{\r
    optional uint32 roomid = 1;                     //房间id\r
    repeated EvchopInfoPlayer players = 2; //ev_chop信息\r
}\r
\r
//================== 广播玩家中奖了jackpot ======================\r
message MsgPlayerJackpotCast\r
{\r
    optional uint32 roomid = 1;         //房间id\r
    optional uint32 playerid = 2;       //玩家id\r
    optional double chips = 3;        //中奖金额\r
}\r
\r
message JackpotPrizePlayer\r
{\r
    optional uint32 playerid = 1;   // 玩家id\r
    optional string nick = 2;       // 玩家名称\r
    optional string avatar = 3;     // 玩家头像\r
    optional uint32 chips = 4;      // 中奖金额 = 实际金额 * 100\r
}\r
\r
message JackpotInfo {\r
    optional uint32 type = 1; // 类型 1:混合 2:冤家牌 3:冤家牌+\r
    optional uint32 chips = 2; // 奖池总筹码 = 实际金额 * 100\r
}\r
\r
message MsgPrizePlayersJackpotCast\r
{\r
    optional uint32 roomid = 1;         // 房间id\r
    optional uint32 totalChips = 2;    // 派奖的总额 = 实际金额 * 100\r
    repeated JackpotPrizePlayer players = 3; // 中奖玩家信息\r
    optional uint32 potType = 4;        // 奖池类型\r
    optional uint32 hitType = 5;        // 中奖牌型\r
}\r
\r
message JackpotPrizeRecord\r
{\r
    optional uint32 potType = 1;               //奖池类型\r
    optional uint32 time = 2;                   //时间\r
    optional uint32 gameType = 3;              //游戏类型\r
    optional uint32 smallBlind = 4;            //小盲(扩大100倍,保留小数点后两位,前端显示除100)\r
    optional uint32 chips = 5;                  //奖励总数=实际金额*100， 前端显示除以100\r
    repeated uint32 cardsWin = 6;              //赢家牌型\r
    repeated uint32 cardsLost = 7;             //输家牌型\r
    repeated JackpotPrizePlayer players = 8;    //玩家列表\r
}\r
\r
// 查询jackpot 中奖记录\r
message MsgJackpotPrizeRecord{}\r
message MsgJackpotPrizeRecordRsp\r
{\r
    required uint32 ec = 1;                 // 错误码\r
    repeated JackpotPrizeRecord list = 2;    //中奖记录\r
}\r
\r
// 查询jackpot奖池信息\r
message MsgJackpotInfo{}\r
message MsgJackpotInfoRsp\r
{\r
    required uint32 ec = 1;                 // 错误码\r
    optional JackpotInfo info = 2;          // jackpot 奖池数据\r
}\r
\r
//====================== 出straddle按钮 ======================\r
message MsgOpenStraddleBtnCast\r
{\r
    optional uint32 room_id = 1;                         // 房间id\r
}\r
\r
//====================== 广播KO信息 ======================\r
message MsgRoomKoCast\r
{\r
    optional uint32 roomid = 1;         //房间id\r
}\r
\r
message MsgKoValueChangeCast\r
{\r
    optional uint32 roomid = 1;         //房间id\r
    optional uint32 playerid = 2;       //玩家id\r
    optional double ko_value = 3;          //玩家的ko值\r
}\r
\r
//================== 广播比牌玩家胜率 ======================\r
message MsgNormalChanceStartCast\r
{\r
    optional uint32 roomid = 1;         //房间id\r
    repeated ChanceInfoPlayer players = 2; //chance信息\r
}\r
\r
message MsgNormalChanceChangeCast\r
{\r
    optional uint32 roomid = 1;            //房间id\r
    repeated ChanceInfoPlayer players = 2; //chance信息\r
}\r
\r
//================== 自动买入失败 ======================\r
message MsgAutoBuyInFailCast\r
{\r
    optional uint32 roomid   = 1;  //房间id\r
    optional uint32 playerid = 2;  //玩家id\r
}\r
\r
//================== 快速弃牌是否可用状态推送 ======================\r
message MsgFastFoldStatusChangeCast\r
{\r
    optional uint32 roomid  = 1;  //房间id\r
    optional bool fast_fold = 2;  //fast fold\r
}\r
\r
//================== 暴击数推送 ======================\r
message MsgBombPotAntedCast\r
{\r
    optional uint32 roomid  = 1;  //房间id\r
    optional uint32 bomb_num = 2;  //暴击的BB数量\r
}\r
\r
\r
//================== 多次发牌思考推送 ======================\r
//领先玩家和落后玩家都推这个接口\r
message MsgMultiTimesCardThinkingCast\r
{\r
    optional uint32 roomid            = 1;  //房间id\r
    optional MultiTimeInfo multi_info = 2;  //多次信息\r
    optional uint32 multi_status      = 3;  //多次发牌确认状态（0.默认状态-没开始确认 1.领先玩家确认中 2.落后玩家确认中 3.放弃多次发牌 4.拒绝多次发牌 5.允许多次发牌 ）\r
}\r
\r
//多次发牌确认状态推送\r
message MsgMultiTimesCardStatusCast\r
{\r
    optional uint32 roomid            = 1;  //房间id\r
    optional uint32 multi_status      = 2;  //多次发牌确认状态（0.默认状态-没开始确认 1.领先玩家确认中 2.落后玩家确认中 3.放弃多次发牌 4.拒绝多次发牌 5.允许多次发牌 ）\r
    repeated MultiTimePlayer players  = 3;  //玩家信息\r
}\r
\r
//多次发牌确认思考时间变化推送\r
message MsgMultiTimesThinkingTimeCast\r
{\r
    optional uint32 roomid       = 1;  //房间id\r
    optional uint32 end_time     = 2;  //结束时间戳\r
    optional uint32 remain_num   = 3;  //剩余次数\r
}\r
\r
\r
\r
//====================== 广播正在购买保险的玩家 ======================\r
// \r
//=========================================================\r
message MsgInsuranceBuyingPlayerCast\r
{\r
    repeated uint32 playerids = 1;        // 正在购买保险的玩家id\r
    optional uint32 room_id = 2;          // 房间id\r
}\r
\r
\r
//====================== 广播玩家已购买的保险信息 ======================\r
// \r
//=========================================================\r
message MsgPlayerBoughtInsuranceCast\r
{\r
    optional uint64 playerid = 1;           // 玩家id\r
    optional uint32 pot_id = 2;              // 底池id\r
    optional uint32 insurance_count = 3;     // 投保额\r
    optional uint32 return_count = 4;        // 赔付额\r
    optional uint32 room_id = 5;             // 房间id\r
}\r
\r
\r
//====================== 广播玩家可购买的保险信息 ======================\r
// \r
//=========================================================\r
message MsgPlayerCanBuyInsuranceListCast\r
{\r
    repeated InsuranceInfo insuranceInfos = 1;\r
    optional uint32 time = 2;       // 结束时间\r
    optional uint32 left_time = 3;  // 剩余时间\r
    optional uint32 room_id = 4;    // 房间id\r
}\r
\r
//====================== 广播保险结果 ======================\r
// \r
//=========================================================\r
message MsgInsuranceResultCast\r
{\r
    repeated InsuranceResult list = 1;              // 列表\r
    optional uint32 room_id = 3;    // 房间id\r
}\r
\r
\r
//====================== 广播保险OUTS数超过14提示信息 ======================\r
// \r
//=========================================================\r
message MsgOutsOverNoticeCast\r
{\r
    optional uint32 room_id = 3;    // 房间id\r
}\r
\r
//====================== 广播保险延时后时长 ======================\r
message MsgInsuranceDelayTimeCast       \r
{   \r
    optional uint32 room_id = 1;    // 房间id  \r
    optional uint32 time = 2;       // 剩余时间\r
    optional uint32 total_time = 3; // 总时间\r
    optional uint64 playerid = 4;   // 操作用户ID\r
    optional uint32 finish_timestamp = 5; //结束时间戳\r
}\r
\r
// 废弃\r
//====================== 广播保险保证金不足 ======================\r
message MsgSecurityFundNotEnoughCast\r
{   \r
    optional uint32 room_id = 1;                  // 房间id\r
    optional string invitecode = 2;               // 邀请码\r
}\r
\r
// ===== 广播 私人房信息推送 (推送时机：玩家坐下/站起 牌局开始/结束) ======\r
message MsgPrivateRoomInfoCast\r
{\r
    optional uint32 room_id          = 1; // 房间ID\r
    optional uint32 player_game_num  = 2; // 参与游戏的人数\r
    optional uint32 player_total_num = 3; // 房间总人数（包含围观）\r
    optional bool   is_open          = 4; // 是否开局\r
    optional uint32  room_status     = 5; // 牌桌状态（1未开始，2游戏开始，3翻牌圈(Flop-round）：前三张公共牌出现以后的押注圈，4转牌圈（Turn-round）：第四张出现以后的押注圈,5河牌圈（River-round）:第五张出现以后的押注圈，6结算阶段，7游戏结束阶段）\r
}\r
\r
// ========== 自动回收筹码到钱包通知（AOF玩法） ============\r
message MsgAutoRecoverCast\r
{\r
    optional uint32 room_id = 1;\r
    optional double chips = 2;                              // 自动回收筹码的玩家的当前筹码\r
    optional double already_recover_chips = 3;              // 已回收筹码\r
    optional uint64 playerid = 4;                           // 自动回收筹码的玩家id\r
}\r
`;var src={exports:{}},indexLight={exports:{}},indexMinimal={},minimal={},aspromise,hasRequiredAspromise;function requireAspromise(){if(hasRequiredAspromise)return aspromise;hasRequiredAspromise=1,aspromise=A;function A(_,C){for(var T=new Array(arguments.length-1),R=0,P=2,I=!0;P<arguments.length;)T[R++]=arguments[P++];return new Promise(function(B,O){T[R]=function(L){if(I)if(I=!1,L)O(L);else{for(var F=new Array(arguments.length-1),D=0;D<F.length;)F[D++]=arguments[D];B.apply(null,F)}};try{_.apply(C||null,T)}catch(G){I&&(I=!1,O(G))}})}return aspromise}var base64={},hasRequiredBase64;function requireBase64(){return hasRequiredBase64||(hasRequiredBase64=1,function(A){var _=A;_.length=function(E){var B=E.length;if(!B)return 0;for(var O=0;--B%4>1&&E.charAt(B)==="=";)++O;return Math.ceil(E.length*3)/4-O};for(var C=new Array(64),T=new Array(123),R=0;R<64;)T[C[R]=R<26?R+65:R<52?R+71:R<62?R-4:R-59|43]=R++;_.encode=function(E,B,O){for(var G=null,L=[],F=0,D=0,q;B<O;){var U=E[B++];switch(D){case 0:L[F++]=C[U>>2],q=(U&3)<<4,D=1;break;case 1:L[F++]=C[q|U>>4],q=(U&15)<<2,D=2;break;case 2:L[F++]=C[q|U>>6],L[F++]=C[U&63],D=0;break}F>8191&&((G||(G=[])).push(String.fromCharCode.apply(String,L)),F=0)}return D&&(L[F++]=C[q],L[F++]=61,D===1&&(L[F++]=61)),G?(F&&G.push(String.fromCharCode.apply(String,L.slice(0,F))),G.join("")):String.fromCharCode.apply(String,L.slice(0,F))};var P="invalid encoding";_.decode=function(E,B,O){for(var G=O,L=0,F,D=0;D<E.length;){var q=E.charCodeAt(D++);if(q===61&&L>1)break;if((q=T[q])===void 0)throw Error(P);switch(L){case 0:F=q,L=1;break;case 1:B[O++]=F<<2|(q&48)>>4,F=q,L=2;break;case 2:B[O++]=(F&15)<<4|(q&60)>>2,F=q,L=3;break;case 3:B[O++]=(F&3)<<6|q,L=0;break}}if(L===1)throw Error(P);return O-G},_.test=function(E){return/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(E)}}(base64)),base64}var eventemitter,hasRequiredEventemitter;function requireEventemitter(){if(hasRequiredEventemitter)return eventemitter;hasRequiredEventemitter=1,eventemitter=A;function A(){this._listeners={}}return A.prototype.on=function(C,T,R){return(this._listeners[C]||(this._listeners[C]=[])).push({fn:T,ctx:R||this}),this},A.prototype.off=function(C,T){if(C===void 0)this._listeners={};else if(T===void 0)this._listeners[C]=[];else for(var R=this._listeners[C],P=0;P<R.length;)R[P].fn===T?R.splice(P,1):++P;return this},A.prototype.emit=function(C){var T=this._listeners[C];if(T){for(var R=[],P=1;P<arguments.length;)R.push(arguments[P++]);for(P=0;P<T.length;)T[P].fn.apply(T[P++].ctx,R)}return this},eventemitter}var float,hasRequiredFloat;function requireFloat(){if(hasRequiredFloat)return float;hasRequiredFloat=1,float=A(A);function A(P){return typeof Float32Array<"u"?function(){var I=new Float32Array([-0]),E=new Uint8Array(I.buffer),B=E[3]===128;function O(D,q,U){I[0]=D,q[U]=E[0],q[U+1]=E[1],q[U+2]=E[2],q[U+3]=E[3]}function G(D,q,U){I[0]=D,q[U]=E[3],q[U+1]=E[2],q[U+2]=E[1],q[U+3]=E[0]}P.writeFloatLE=B?O:G,P.writeFloatBE=B?G:O;function L(D,q){return E[0]=D[q],E[1]=D[q+1],E[2]=D[q+2],E[3]=D[q+3],I[0]}function F(D,q){return E[3]=D[q],E[2]=D[q+1],E[1]=D[q+2],E[0]=D[q+3],I[0]}P.readFloatLE=B?L:F,P.readFloatBE=B?F:L}():function(){function I(B,O,G,L){var F=O<0?1:0;if(F&&(O=-O),O===0)B(1/O>0?0:2147483648,G,L);else if(isNaN(O))B(2143289344,G,L);else if(O>34028234663852886e22)B((F<<31|2139095040)>>>0,G,L);else if(O<11754943508222875e-54)B((F<<31|Math.round(O/1401298464324817e-60))>>>0,G,L);else{var D=Math.floor(Math.log(O)/Math.LN2),q=Math.round(O*Math.pow(2,-D)*8388608)&8388607;B((F<<31|D+127<<23|q)>>>0,G,L)}}P.writeFloatLE=I.bind(null,_),P.writeFloatBE=I.bind(null,C);function E(B,O,G){var L=B(O,G),F=(L>>31)*2+1,D=L>>>23&255,q=L&8388607;return D===255?q?NaN:F*(1/0):D===0?F*1401298464324817e-60*q:F*Math.pow(2,D-150)*(q+8388608)}P.readFloatLE=E.bind(null,T),P.readFloatBE=E.bind(null,R)}(),typeof Float64Array<"u"?function(){var I=new Float64Array([-0]),E=new Uint8Array(I.buffer),B=E[7]===128;function O(D,q,U){I[0]=D,q[U]=E[0],q[U+1]=E[1],q[U+2]=E[2],q[U+3]=E[3],q[U+4]=E[4],q[U+5]=E[5],q[U+6]=E[6],q[U+7]=E[7]}function G(D,q,U){I[0]=D,q[U]=E[7],q[U+1]=E[6],q[U+2]=E[5],q[U+3]=E[4],q[U+4]=E[3],q[U+5]=E[2],q[U+6]=E[1],q[U+7]=E[0]}P.writeDoubleLE=B?O:G,P.writeDoubleBE=B?G:O;function L(D,q){return E[0]=D[q],E[1]=D[q+1],E[2]=D[q+2],E[3]=D[q+3],E[4]=D[q+4],E[5]=D[q+5],E[6]=D[q+6],E[7]=D[q+7],I[0]}function F(D,q){return E[7]=D[q],E[6]=D[q+1],E[5]=D[q+2],E[4]=D[q+3],E[3]=D[q+4],E[2]=D[q+5],E[1]=D[q+6],E[0]=D[q+7],I[0]}P.readDoubleLE=B?L:F,P.readDoubleBE=B?F:L}():function(){function I(B,O,G,L,F,D){var q=L<0?1:0;if(q&&(L=-L),L===0)B(0,F,D+O),B(1/L>0?0:2147483648,F,D+G);else if(isNaN(L))B(0,F,D+O),B(2146959360,F,D+G);else if(L>17976931348623157e292)B(0,F,D+O),B((q<<31|2146435072)>>>0,F,D+G);else{var U;if(L<22250738585072014e-324)U=L/5e-324,B(U>>>0,F,D+O),B((q<<31|U/4294967296)>>>0,F,D+G);else{var V=Math.floor(Math.log(L)/Math.LN2);V===1024&&(V=1023),U=L*Math.pow(2,-V),B(U*4503599627370496>>>0,F,D+O),B((q<<31|V+1023<<20|U*1048576&1048575)>>>0,F,D+G)}}}P.writeDoubleLE=I.bind(null,_,0,4),P.writeDoubleBE=I.bind(null,C,4,0);function E(B,O,G,L,F){var D=B(L,F+O),q=B(L,F+G),U=(q>>31)*2+1,V=q>>>20&2047,W=4294967296*(q&1048575)+D;return V===2047?W?NaN:U*(1/0):V===0?U*5e-324*W:U*Math.pow(2,V-1075)*(W+4503599627370496)}P.readDoubleLE=E.bind(null,T,0,4),P.readDoubleBE=E.bind(null,R,4,0)}(),P}function _(P,I,E){I[E]=P&255,I[E+1]=P>>>8&255,I[E+2]=P>>>16&255,I[E+3]=P>>>24}function C(P,I,E){I[E]=P>>>24,I[E+1]=P>>>16&255,I[E+2]=P>>>8&255,I[E+3]=P&255}function T(P,I){return(P[I]|P[I+1]<<8|P[I+2]<<16|P[I+3]<<24)>>>0}function R(P,I){return(P[I]<<24|P[I+1]<<16|P[I+2]<<8|P[I+3])>>>0}return float}var inquire_1,hasRequiredInquire;function requireInquire(){if(hasRequiredInquire)return inquire_1;hasRequiredInquire=1,inquire_1=inquire;function inquire(moduleName){try{var mod=eval("quire".replace(/^/,"re"))(moduleName);if(mod&&(mod.length||Object.keys(mod).length))return mod}catch(A){}return null}return inquire_1}var utf8={},hasRequiredUtf8;function requireUtf8(){return hasRequiredUtf8||(hasRequiredUtf8=1,function(A){var _=A;_.length=function(T){for(var R=0,P=0,I=0;I<T.length;++I)P=T.charCodeAt(I),P<128?R+=1:P<2048?R+=2:(P&64512)===55296&&(T.charCodeAt(I+1)&64512)===56320?(++I,R+=4):R+=3;return R},_.read=function(T,R,P){var I=P-R;if(I<1)return"";for(var E=null,B=[],O=0,G;R<P;)G=T[R++],G<128?B[O++]=G:G>191&&G<224?B[O++]=(G&31)<<6|T[R++]&63:G>239&&G<365?(G=((G&7)<<18|(T[R++]&63)<<12|(T[R++]&63)<<6|T[R++]&63)-65536,B[O++]=55296+(G>>10),B[O++]=56320+(G&1023)):B[O++]=(G&15)<<12|(T[R++]&63)<<6|T[R++]&63,O>8191&&((E||(E=[])).push(String.fromCharCode.apply(String,B)),O=0);return E?(O&&E.push(String.fromCharCode.apply(String,B.slice(0,O))),E.join("")):String.fromCharCode.apply(String,B.slice(0,O))},_.write=function(T,R,P){for(var I=P,E,B,O=0;O<T.length;++O)E=T.charCodeAt(O),E<128?R[P++]=E:E<2048?(R[P++]=E>>6|192,R[P++]=E&63|128):(E&64512)===55296&&((B=T.charCodeAt(O+1))&64512)===56320?(E=65536+((E&1023)<<10)+(B&1023),++O,R[P++]=E>>18|240,R[P++]=E>>12&63|128,R[P++]=E>>6&63|128,R[P++]=E&63|128):(R[P++]=E>>12|224,R[P++]=E>>6&63|128,R[P++]=E&63|128);return P-I}}(utf8)),utf8}var pool_1,hasRequiredPool;function requirePool(){if(hasRequiredPool)return pool_1;hasRequiredPool=1,pool_1=A;function A(_,C,T){var R=T||8192,P=R>>>1,I=null,E=R;return function(O){if(O<1||O>P)return _(O);E+O>R&&(I=_(R),E=0);var G=C.call(I,E,E+=O);return E&7&&(E=(E|7)+1),G}}return pool_1}var longbits,hasRequiredLongbits;function requireLongbits(){if(hasRequiredLongbits)return longbits;hasRequiredLongbits=1,longbits=_;var A=requireMinimal();function _(P,I){this.lo=P>>>0,this.hi=I>>>0}var C=_.zero=new _(0,0);C.toNumber=function(){return 0},C.zzEncode=C.zzDecode=function(){return this},C.length=function(){return 1};var T=_.zeroHash="\0\0\0\0\0\0\0\0";_.fromNumber=function(I){if(I===0)return C;var E=I<0;E&&(I=-I);var B=I>>>0,O=(I-B)/4294967296>>>0;return E&&(O=~O>>>0,B=~B>>>0,++B>4294967295&&(B=0,++O>4294967295&&(O=0))),new _(B,O)},_.from=function(I){if(typeof I=="number")return _.fromNumber(I);if(A.isString(I))if(A.Long)I=A.Long.fromString(I);else return _.fromNumber(parseInt(I,10));return I.low||I.high?new _(I.low>>>0,I.high>>>0):C},_.prototype.toNumber=function(I){if(!I&&this.hi>>>31){var E=~this.lo+1>>>0,B=~this.hi>>>0;return E||(B=B+1>>>0),-(E+B*4294967296)}return this.lo+this.hi*4294967296},_.prototype.toLong=function(I){return A.Long?new A.Long(this.lo|0,this.hi|0,!!I):{low:this.lo|0,high:this.hi|0,unsigned:!!I}};var R=String.prototype.charCodeAt;return _.fromHash=function(I){return I===T?C:new _((R.call(I,0)|R.call(I,1)<<8|R.call(I,2)<<16|R.call(I,3)<<24)>>>0,(R.call(I,4)|R.call(I,5)<<8|R.call(I,6)<<16|R.call(I,7)<<24)>>>0)},_.prototype.toHash=function(){return String.fromCharCode(this.lo&255,this.lo>>>8&255,this.lo>>>16&255,this.lo>>>24,this.hi&255,this.hi>>>8&255,this.hi>>>16&255,this.hi>>>24)},_.prototype.zzEncode=function(){var I=this.hi>>31;return this.hi=((this.hi<<1|this.lo>>>31)^I)>>>0,this.lo=(this.lo<<1^I)>>>0,this},_.prototype.zzDecode=function(){var I=-(this.lo&1);return this.lo=((this.lo>>>1|this.hi<<31)^I)>>>0,this.hi=(this.hi>>>1^I)>>>0,this},_.prototype.length=function(){var I=this.lo,E=(this.lo>>>28|this.hi<<4)>>>0,B=this.hi>>>24;return B===0?E===0?I<16384?I<128?1:2:I<2097152?3:4:E<16384?E<128?5:6:E<2097152?7:8:B<128?9:10},longbits}var hasRequiredMinimal;function requireMinimal(){return hasRequiredMinimal||(hasRequiredMinimal=1,function(A){var _=A;_.asPromise=requireAspromise(),_.base64=requireBase64(),_.EventEmitter=requireEventemitter(),_.float=requireFloat(),_.inquire=requireInquire(),_.utf8=requireUtf8(),_.pool=requirePool(),_.LongBits=requireLongbits(),_.isNode=!!(typeof commonjsGlobal<"u"&&commonjsGlobal&&commonjsGlobal.process&&commonjsGlobal.process.versions&&commonjsGlobal.process.versions.node),_.global=_.isNode&&commonjsGlobal||typeof window<"u"&&window||typeof self<"u"&&self||minimal,_.emptyArray=Object.freeze?Object.freeze([]):[],_.emptyObject=Object.freeze?Object.freeze({}):{},_.isInteger=Number.isInteger||function(P){return typeof P=="number"&&isFinite(P)&&Math.floor(P)===P},_.isString=function(P){return typeof P=="string"||P instanceof String},_.isObject=function(P){return P&&typeof P=="object"},_.isset=_.isSet=function(P,I){var E=P[I];return E!=null&&P.hasOwnProperty(I)?typeof E!="object"||(Array.isArray(E)?E.length:Object.keys(E).length)>0:!1},_.Buffer=function(){try{var R=_.inquire("buffer").Buffer;return R.prototype.utf8Write?R:null}catch{return null}}(),_._Buffer_from=null,_._Buffer_allocUnsafe=null,_.newBuffer=function(P){return typeof P=="number"?_.Buffer?_._Buffer_allocUnsafe(P):new _.Array(P):_.Buffer?_._Buffer_from(P):typeof Uint8Array>"u"?P:new Uint8Array(P)},_.Array=typeof Uint8Array<"u"?Uint8Array:Array,_.Long=_.global.dcodeIO&&_.global.dcodeIO.Long||_.global.Long||_.inquire("long"),_.key2Re=/^true|false|0|1$/,_.key32Re=/^-?(?:0|[1-9][0-9]*)$/,_.key64Re=/^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/,_.longToHash=function(P){return P?_.LongBits.from(P).toHash():_.LongBits.zeroHash},_.longFromHash=function(P,I){var E=_.LongBits.fromHash(P);return _.Long?_.Long.fromBits(E.lo,E.hi,I):E.toNumber(!!I)};function C(R,P,I){for(var E=Object.keys(P),B=0;B<E.length;++B)(R[E[B]]===void 0||!I)&&(R[E[B]]=P[E[B]]);return R}_.merge=C,_.lcFirst=function(P){return P.charAt(0).toLowerCase()+P.substring(1)};function T(R){function P(I,E){if(!(this instanceof P))return new P(I,E);Object.defineProperty(this,"message",{get:function(){return I}}),Error.captureStackTrace?Error.captureStackTrace(this,P):Object.defineProperty(this,"stack",{value:new Error().stack||""}),E&&C(this,E)}return P.prototype=Object.create(Error.prototype,{constructor:{value:P,writable:!0,enumerable:!1,configurable:!0},name:{get:function(){return R},set:void 0,enumerable:!1,configurable:!0},toString:{value:function(){return this.name+": "+this.message},writable:!0,enumerable:!1,configurable:!0}}),P}_.newError=T,_.ProtocolError=T("ProtocolError"),_.oneOfGetter=function(P){for(var I={},E=0;E<P.length;++E)I[P[E]]=1;return function(){for(var B=Object.keys(this),O=B.length-1;O>-1;--O)if(I[B[O]]===1&&this[B[O]]!==void 0&&this[B[O]]!==null)return B[O]}},_.oneOfSetter=function(P){return function(I){for(var E=0;E<P.length;++E)P[E]!==I&&delete this[P[E]]}},_.toJSONOptions={longs:String,enums:String,bytes:String,json:!0},_._configure=function(){var R=_.Buffer;if(!R){_._Buffer_from=_._Buffer_allocUnsafe=null;return}_._Buffer_from=R.from!==Uint8Array.from&&R.from||function(I,E){return new R(I,E)},_._Buffer_allocUnsafe=R.allocUnsafe||function(I){return new R(I)}}}(minimal)),minimal}var writer,hasRequiredWriter;function requireWriter(){if(hasRequiredWriter)return writer;hasRequiredWriter=1,writer=B;var A=requireMinimal(),_,C=A.LongBits,T=A.base64,R=A.utf8;function P(V,W,z){this.fn=V,this.len=W,this.next=void 0,this.val=z}function I(){}function E(V){this.head=V.head,this.tail=V.tail,this.len=V.len,this.next=V.states}function B(){this.len=0,this.head=new P(I,0,0),this.tail=this.head,this.states=null}var O=function(){return A.Buffer?function(){return(B.create=function(){return new _})()}:function(){return new B}};B.create=O(),B.alloc=function(W){return new A.Array(W)},A.Array!==Array&&(B.alloc=A.pool(B.alloc,A.Array.prototype.subarray)),B.prototype._push=function(W,z,X){return this.tail=this.tail.next=new P(W,z,X),this.len+=z,this};function G(V,W,z){W[z]=V&255}function L(V,W,z){for(;V>127;)W[z++]=V&127|128,V>>>=7;W[z]=V}function F(V,W){this.len=V,this.next=void 0,this.val=W}F.prototype=Object.create(P.prototype),F.prototype.fn=L,B.prototype.uint32=function(W){return this.len+=(this.tail=this.tail.next=new F((W=W>>>0)<128?1:W<16384?2:W<2097152?3:W<268435456?4:5,W)).len,this},B.prototype.int32=function(W){return W<0?this._push(D,10,C.fromNumber(W)):this.uint32(W)},B.prototype.sint32=function(W){return this.uint32((W<<1^W>>31)>>>0)};function D(V,W,z){for(;V.hi;)W[z++]=V.lo&127|128,V.lo=(V.lo>>>7|V.hi<<25)>>>0,V.hi>>>=7;for(;V.lo>127;)W[z++]=V.lo&127|128,V.lo=V.lo>>>7;W[z++]=V.lo}B.prototype.uint64=function(W){var z=C.from(W);return this._push(D,z.length(),z)},B.prototype.int64=B.prototype.uint64,B.prototype.sint64=function(W){var z=C.from(W).zzEncode();return this._push(D,z.length(),z)},B.prototype.bool=function(W){return this._push(G,1,W?1:0)};function q(V,W,z){W[z]=V&255,W[z+1]=V>>>8&255,W[z+2]=V>>>16&255,W[z+3]=V>>>24}B.prototype.fixed32=function(W){return this._push(q,4,W>>>0)},B.prototype.sfixed32=B.prototype.fixed32,B.prototype.fixed64=function(W){var z=C.from(W);return this._push(q,4,z.lo)._push(q,4,z.hi)},B.prototype.sfixed64=B.prototype.fixed64,B.prototype.float=function(W){return this._push(A.float.writeFloatLE,4,W)},B.prototype.double=function(W){return this._push(A.float.writeDoubleLE,8,W)};var U=A.Array.prototype.set?function(W,z,X){z.set(W,X)}:function(W,z,X){for(var Y=0;Y<W.length;++Y)z[X+Y]=W[Y]};return B.prototype.bytes=function(W){var z=W.length>>>0;if(!z)return this._push(G,1,0);if(A.isString(W)){var X=B.alloc(z=T.length(W));T.decode(W,X,0),W=X}return this.uint32(z)._push(U,z,W)},B.prototype.string=function(W){var z=R.length(W);return z?this.uint32(z)._push(R.write,z,W):this._push(G,1,0)},B.prototype.fork=function(){return this.states=new E(this),this.head=this.tail=new P(I,0,0),this.len=0,this},B.prototype.reset=function(){return this.states?(this.head=this.states.head,this.tail=this.states.tail,this.len=this.states.len,this.states=this.states.next):(this.head=this.tail=new P(I,0,0),this.len=0),this},B.prototype.ldelim=function(){var W=this.head,z=this.tail,X=this.len;return this.reset().uint32(X),X&&(this.tail.next=W.next,this.tail=z,this.len+=X),this},B.prototype.finish=function(){for(var W=this.head.next,z=this.constructor.alloc(this.len),X=0;W;)W.fn(W.val,z,X),X+=W.len,W=W.next;return z},B._configure=function(V){_=V,B.create=O(),_._configure()},writer}var writer_buffer,hasRequiredWriter_buffer;function requireWriter_buffer(){if(hasRequiredWriter_buffer)return writer_buffer;hasRequiredWriter_buffer=1,writer_buffer=C;var A=requireWriter();(C.prototype=Object.create(A.prototype)).constructor=C;var _=requireMinimal();function C(){A.call(this)}C._configure=function(){C.alloc=_._Buffer_allocUnsafe,C.writeBytesBuffer=_.Buffer&&_.Buffer.prototype instanceof Uint8Array&&_.Buffer.prototype.set.name==="set"?function(P,I,E){I.set(P,E)}:function(P,I,E){if(P.copy)P.copy(I,E,0,P.length);else for(var B=0;B<P.length;)I[E++]=P[B++]}},C.prototype.bytes=function(P){_.isString(P)&&(P=_._Buffer_from(P,"base64"));var I=P.length>>>0;return this.uint32(I),I&&this._push(C.writeBytesBuffer,I,P),this};function T(R,P,I){R.length<40?_.utf8.write(R,P,I):P.utf8Write?P.utf8Write(R,I):P.write(R,I)}return C.prototype.string=function(P){var I=_.Buffer.byteLength(P);return this.uint32(I),I&&this._push(T,I,P),this},C._configure(),writer_buffer}var reader,hasRequiredReader;function requireReader(){if(hasRequiredReader)return reader;hasRequiredReader=1,reader=P;var A=requireMinimal(),_,C=A.LongBits,T=A.utf8;function R(L,F){return RangeError("index out of range: "+L.pos+" + "+(F||1)+" > "+L.len)}function P(L){this.buf=L,this.pos=0,this.len=L.length}var I=typeof Uint8Array<"u"?function(F){if(F instanceof Uint8Array||Array.isArray(F))return new P(F);throw Error("illegal buffer")}:function(F){if(Array.isArray(F))return new P(F);throw Error("illegal buffer")},E=function(){return A.Buffer?function(D){return(P.create=function(U){return A.Buffer.isBuffer(U)?new _(U):I(U)})(D)}:I};P.create=E(),P.prototype._slice=A.Array.prototype.subarray||A.Array.prototype.slice,P.prototype.uint32=function(){var F=4294967295;return function(){if(F=(this.buf[this.pos]&127)>>>0,this.buf[this.pos++]<128||(F=(F|(this.buf[this.pos]&127)<<7)>>>0,this.buf[this.pos++]<128)||(F=(F|(this.buf[this.pos]&127)<<14)>>>0,this.buf[this.pos++]<128)||(F=(F|(this.buf[this.pos]&127)<<21)>>>0,this.buf[this.pos++]<128)||(F=(F|(this.buf[this.pos]&15)<<28)>>>0,this.buf[this.pos++]<128))return F;if((this.pos+=5)>this.len)throw this.pos=this.len,R(this,10);return F}}(),P.prototype.int32=function(){return this.uint32()|0},P.prototype.sint32=function(){var F=this.uint32();return F>>>1^-(F&1)|0};function B(){var L=new C(0,0),F=0;if(this.len-this.pos>4){for(;F<4;++F)if(L.lo=(L.lo|(this.buf[this.pos]&127)<<F*7)>>>0,this.buf[this.pos++]<128)return L;if(L.lo=(L.lo|(this.buf[this.pos]&127)<<28)>>>0,L.hi=(L.hi|(this.buf[this.pos]&127)>>4)>>>0,this.buf[this.pos++]<128)return L;F=0}else{for(;F<3;++F){if(this.pos>=this.len)throw R(this);if(L.lo=(L.lo|(this.buf[this.pos]&127)<<F*7)>>>0,this.buf[this.pos++]<128)return L}return L.lo=(L.lo|(this.buf[this.pos++]&127)<<F*7)>>>0,L}if(this.len-this.pos>4){for(;F<5;++F)if(L.hi=(L.hi|(this.buf[this.pos]&127)<<F*7+3)>>>0,this.buf[this.pos++]<128)return L}else for(;F<5;++F){if(this.pos>=this.len)throw R(this);if(L.hi=(L.hi|(this.buf[this.pos]&127)<<F*7+3)>>>0,this.buf[this.pos++]<128)return L}throw Error("invalid varint encoding")}P.prototype.bool=function(){return this.uint32()!==0};function O(L,F){return(L[F-4]|L[F-3]<<8|L[F-2]<<16|L[F-1]<<24)>>>0}P.prototype.fixed32=function(){if(this.pos+4>this.len)throw R(this,4);return O(this.buf,this.pos+=4)},P.prototype.sfixed32=function(){if(this.pos+4>this.len)throw R(this,4);return O(this.buf,this.pos+=4)|0};function G(){if(this.pos+8>this.len)throw R(this,8);return new C(O(this.buf,this.pos+=4),O(this.buf,this.pos+=4))}return P.prototype.float=function(){if(this.pos+4>this.len)throw R(this,4);var F=A.float.readFloatLE(this.buf,this.pos);return this.pos+=4,F},P.prototype.double=function(){if(this.pos+8>this.len)throw R(this,4);var F=A.float.readDoubleLE(this.buf,this.pos);return this.pos+=8,F},P.prototype.bytes=function(){var F=this.uint32(),D=this.pos,q=this.pos+F;if(q>this.len)throw R(this,F);if(this.pos+=F,Array.isArray(this.buf))return this.buf.slice(D,q);if(D===q){var U=A.Buffer;return U?U.alloc(0):new this.buf.constructor(0)}return this._slice.call(this.buf,D,q)},P.prototype.string=function(){var F=this.bytes();return T.read(F,0,F.length)},P.prototype.skip=function(F){if(typeof F=="number"){if(this.pos+F>this.len)throw R(this,F);this.pos+=F}else do if(this.pos>=this.len)throw R(this);while(this.buf[this.pos++]&128);return this},P.prototype.skipType=function(L){switch(L){case 0:this.skip();break;case 1:this.skip(8);break;case 2:this.skip(this.uint32());break;case 3:for(;(L=this.uint32()&7)!==4;)this.skipType(L);break;case 5:this.skip(4);break;default:throw Error("invalid wire type "+L+" at offset "+this.pos)}return this},P._configure=function(L){_=L,P.create=E(),_._configure();var F=A.Long?"toLong":"toNumber";A.merge(P.prototype,{int64:function(){return B.call(this)[F](!1)},uint64:function(){return B.call(this)[F](!0)},sint64:function(){return B.call(this).zzDecode()[F](!1)},fixed64:function(){return G.call(this)[F](!0)},sfixed64:function(){return G.call(this)[F](!1)}})},reader}var reader_buffer,hasRequiredReader_buffer;function requireReader_buffer(){if(hasRequiredReader_buffer)return reader_buffer;hasRequiredReader_buffer=1,reader_buffer=C;var A=requireReader();(C.prototype=Object.create(A.prototype)).constructor=C;var _=requireMinimal();function C(T){A.call(this,T)}return C._configure=function(){_.Buffer&&(C.prototype._slice=_.Buffer.prototype.slice)},C.prototype.string=function(){var R=this.uint32();return this.buf.utf8Slice?this.buf.utf8Slice(this.pos,this.pos=Math.min(this.pos+R,this.len)):this.buf.toString("utf-8",this.pos,this.pos=Math.min(this.pos+R,this.len))},C._configure(),reader_buffer}var rpc={},service$1,hasRequiredService$1;function requireService$1(){if(hasRequiredService$1)return service$1;hasRequiredService$1=1,service$1=_;var A=requireMinimal();(_.prototype=Object.create(A.EventEmitter.prototype)).constructor=_;function _(C,T,R){if(typeof C!="function")throw TypeError("rpcImpl must be a function");A.EventEmitter.call(this),this.rpcImpl=C,this.requestDelimited=!!T,this.responseDelimited=!!R}return _.prototype.rpcCall=function C(T,R,P,I,E){if(!I)throw TypeError("request must be specified");var B=this;if(!E)return A.asPromise(C,B,T,R,P,I);if(!B.rpcImpl){setTimeout(function(){E(Error("already ended"))},0);return}try{return B.rpcImpl(T,R[B.requestDelimited?"encodeDelimited":"encode"](I).finish(),function(G,L){if(G)return B.emit("error",G,T),E(G);if(L===null){B.end(!0);return}if(!(L instanceof P))try{L=P[B.responseDelimited?"decodeDelimited":"decode"](L)}catch(F){return B.emit("error",F,T),E(F)}return B.emit("data",L,T),E(null,L)})}catch(O){B.emit("error",O,T),setTimeout(function(){E(O)},0);return}},_.prototype.end=function(T){return this.rpcImpl&&(T||this.rpcImpl(null,null,null),this.rpcImpl=null,this.emit("end").off()),this},service$1}var hasRequiredRpc;function requireRpc(){return hasRequiredRpc||(hasRequiredRpc=1,function(A){var _=A;_.Service=requireService$1()}(rpc)),rpc}var roots,hasRequiredRoots;function requireRoots(){return hasRequiredRoots||(hasRequiredRoots=1,roots={}),roots}var hasRequiredIndexMinimal;function requireIndexMinimal(){return hasRequiredIndexMinimal||(hasRequiredIndexMinimal=1,function(A){var _=A;_.build="minimal",_.Writer=requireWriter(),_.BufferWriter=requireWriter_buffer(),_.Reader=requireReader(),_.BufferReader=requireReader_buffer(),_.util=requireMinimal(),_.rpc=requireRpc(),_.roots=requireRoots(),_.configure=C;function C(){_.util._configure(),_.Writer._configure(_.BufferWriter),_.Reader._configure(_.BufferReader)}C()}(indexMinimal)),indexMinimal}var util={exports:{}},codegen_1,hasRequiredCodegen;function requireCodegen(){if(hasRequiredCodegen)return codegen_1;hasRequiredCodegen=1,codegen_1=A;function A(_,C){typeof _=="string"&&(C=_,_=void 0);var T=[];function R(I){if(typeof I!="string"){var E=P();if(A.verbose&&console.log("codegen: "+E),E="return "+E,I){for(var B=Object.keys(I),O=new Array(B.length+1),G=new Array(B.length),L=0;L<B.length;)O[L]=B[L],G[L]=I[B[L++]];return O[L]=E,Function.apply(null,O).apply(null,G)}return Function(E)()}for(var F=new Array(arguments.length-1),D=0;D<F.length;)F[D]=arguments[++D];if(D=0,I=I.replace(/%([%dfijs])/g,function(U,V){var W=F[D++];switch(V){case"d":case"f":return String(Number(W));case"i":return String(Math.floor(W));case"j":return JSON.stringify(W);case"s":return String(W)}return"%"}),D!==F.length)throw Error("parameter count mismatch");return T.push(I),R}function P(I){return"function "+(I||C||"")+"("+(_&&_.join(",")||"")+`){
  `+T.join(`
  `)+`
}`}return R.toString=P,R}return A.verbose=!1,codegen_1}var fetch_1,hasRequiredFetch;function requireFetch(){if(hasRequiredFetch)return fetch_1;hasRequiredFetch=1,fetch_1=T;var A=requireAspromise(),_=requireInquire(),C=_("fs");function T(R,P,I){return typeof P=="function"?(I=P,P={}):P||(P={}),I?!P.xhr&&C&&C.readFile?C.readFile(R,function(B,O){return B&&typeof XMLHttpRequest<"u"?T.xhr(R,P,I):B?I(B):I(null,P.binary?O:O.toString("utf8"))}):T.xhr(R,P,I):A(T,this,R,P)}return T.xhr=function(P,I,E){var B=new XMLHttpRequest;B.onreadystatechange=function(){if(B.readyState===4){if(B.status!==0&&B.status!==200)return E(Error("status "+B.status));if(I.binary){var G=B.response;if(!G){G=[];for(var L=0;L<B.responseText.length;++L)G.push(B.responseText.charCodeAt(L)&255)}return E(null,typeof Uint8Array<"u"?new Uint8Array(G):G)}return E(null,B.responseText)}},I.binary&&("overrideMimeType"in B&&B.overrideMimeType("text/plain; charset=x-user-defined"),B.responseType="arraybuffer"),B.open("GET",P),B.send()},fetch_1}var path$1={},hasRequiredPath;function requirePath(){return hasRequiredPath||(hasRequiredPath=1,function(A){var _=A,C=_.isAbsolute=function(P){return/^(?:\/|\w+:)/.test(P)},T=_.normalize=function(P){P=P.replace(/\\/g,"/").replace(/\/{2,}/g,"/");var I=P.split("/"),E=C(P),B="";E&&(B=I.shift()+"/");for(var O=0;O<I.length;)I[O]===".."?O>0&&I[O-1]!==".."?I.splice(--O,2):E?I.splice(O,1):++O:I[O]==="."?I.splice(O,1):++O;return B+I.join("/")};_.resolve=function(P,I,E){return E||(I=T(I)),C(I)?I:(E||(P=T(P)),(P=P.replace(/(?:\/|^)[^/]+$/,"")).length?T(P+"/"+I):I)}}(path$1)),path$1}var types={},hasRequiredTypes;function requireTypes(){return hasRequiredTypes||(hasRequiredTypes=1,function(A){var _=A,C=requireUtil(),T=["double","float","int32","uint32","sint32","fixed32","sfixed32","int64","uint64","sint64","fixed64","sfixed64","bool","string","bytes"];function R(P,I){var E=0,B={};for(I|=0;E<P.length;)B[T[E+I]]=P[E++];return B}_.basic=R([1,5,0,0,0,5,5,0,0,0,1,1,0,2,2]),_.defaults=R([0,0,0,0,0,0,0,0,0,0,0,0,!1,"",C.emptyArray,null]),_.long=R([0,0,0,1,1],7),_.mapKey=R([0,0,0,5,5,0,0,0,1,1,0,2],2),_.packed=R([1,5,0,0,0,5,5,0,0,0,1,1,0])}(types)),types}var field,hasRequiredField;function requireField(){if(hasRequiredField)return field;hasRequiredField=1,field=I;var A=requireObject();((I.prototype=Object.create(A.prototype)).constructor=I).className="Field";var _=require_enum(),C=requireTypes(),T=requireUtil(),R,P=/^required|optional|repeated$/;I.fromJSON=function(B,O){return new I(B,O.id,O.type,O.rule,O.extend,O.options,O.comment)};function I(E,B,O,G,L,F,D){if(T.isObject(G)?(D=L,F=G,G=L=void 0):T.isObject(L)&&(D=F,F=L,L=void 0),A.call(this,E,F),!T.isInteger(B)||B<0)throw TypeError("id must be a non-negative integer");if(!T.isString(O))throw TypeError("type must be a string");if(G!==void 0&&!P.test(G=G.toString().toLowerCase()))throw TypeError("rule must be a string rule");if(L!==void 0&&!T.isString(L))throw TypeError("extend must be a string");G==="proto3_optional"&&(G="optional"),this.rule=G&&G!=="optional"?G:void 0,this.type=O,this.id=B,this.extend=L||void 0,this.required=G==="required",this.optional=!this.required,this.repeated=G==="repeated",this.map=!1,this.message=null,this.partOf=null,this.typeDefault=null,this.defaultValue=null,this.long=T.Long?C.long[O]!==void 0:!1,this.bytes=O==="bytes",this.resolvedType=null,this.extensionField=null,this.declaringField=null,this._packed=null,this.comment=D}return Object.defineProperty(I.prototype,"packed",{get:function(){return this._packed===null&&(this._packed=this.getOption("packed")!==!1),this._packed}}),I.prototype.setOption=function(B,O,G){return B==="packed"&&(this._packed=null),A.prototype.setOption.call(this,B,O,G)},I.prototype.toJSON=function(B){var O=B?!!B.keepComments:!1;return T.toObject(["rule",this.rule!=="optional"&&this.rule||void 0,"type",this.type,"id",this.id,"extend",this.extend,"options",this.options,"comment",O?this.comment:void 0])},I.prototype.resolve=function(){if(this.resolved)return this;if((this.typeDefault=C.defaults[this.type])===void 0?(this.resolvedType=(this.declaringField?this.declaringField.parent:this.parent).lookupTypeOrEnum(this.type),this.resolvedType instanceof R?this.typeDefault=null:this.typeDefault=this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]):this.options&&this.options.proto3_optional&&(this.typeDefault=null),this.options&&this.options.default!=null&&(this.typeDefault=this.options.default,this.resolvedType instanceof _&&typeof this.typeDefault=="string"&&(this.typeDefault=this.resolvedType.values[this.typeDefault])),this.options&&((this.options.packed===!0||this.options.packed!==void 0&&this.resolvedType&&!(this.resolvedType instanceof _))&&delete this.options.packed,Object.keys(this.options).length||(this.options=void 0)),this.long)this.typeDefault=T.Long.fromNumber(this.typeDefault,this.type.charAt(0)==="u"),Object.freeze&&Object.freeze(this.typeDefault);else if(this.bytes&&typeof this.typeDefault=="string"){var B;T.base64.test(this.typeDefault)?T.base64.decode(this.typeDefault,B=T.newBuffer(T.base64.length(this.typeDefault)),0):T.utf8.write(this.typeDefault,B=T.newBuffer(T.utf8.length(this.typeDefault)),0),this.typeDefault=B}return this.map?this.defaultValue=T.emptyObject:this.repeated?this.defaultValue=T.emptyArray:this.defaultValue=this.typeDefault,this.parent instanceof R&&(this.parent.ctor.prototype[this.name]=this.defaultValue),A.prototype.resolve.call(this)},I.d=function(B,O,G,L){return typeof O=="function"?O=T.decorateType(O).name:O&&typeof O=="object"&&(O=T.decorateEnum(O).name),function(D,q){T.decorateType(D.constructor).add(new I(q,B,O,G,{default:L}))}},I._configure=function(B){R=B},field}var oneof,hasRequiredOneof;function requireOneof(){if(hasRequiredOneof)return oneof;hasRequiredOneof=1,oneof=T;var A=requireObject();((T.prototype=Object.create(A.prototype)).constructor=T).className="OneOf";var _=requireField(),C=requireUtil();function T(P,I,E,B){if(Array.isArray(I)||(E=I,I=void 0),A.call(this,P,E),!(I===void 0||Array.isArray(I)))throw TypeError("fieldNames must be an Array");this.oneof=I||[],this.fieldsArray=[],this.comment=B}T.fromJSON=function(I,E){return new T(I,E.oneof,E.options,E.comment)},T.prototype.toJSON=function(I){var E=I?!!I.keepComments:!1;return C.toObject(["options",this.options,"oneof",this.oneof,"comment",E?this.comment:void 0])};function R(P){if(P.parent)for(var I=0;I<P.fieldsArray.length;++I)P.fieldsArray[I].parent||P.parent.add(P.fieldsArray[I])}return T.prototype.add=function(I){if(!(I instanceof _))throw TypeError("field must be a Field");return I.parent&&I.parent!==this.parent&&I.parent.remove(I),this.oneof.push(I.name),this.fieldsArray.push(I),I.partOf=this,R(this),this},T.prototype.remove=function(I){if(!(I instanceof _))throw TypeError("field must be a Field");var E=this.fieldsArray.indexOf(I);if(E<0)throw Error(I+" is not a member of "+this);return this.fieldsArray.splice(E,1),E=this.oneof.indexOf(I.name),E>-1&&this.oneof.splice(E,1),I.partOf=null,this},T.prototype.onAdd=function(I){A.prototype.onAdd.call(this,I);for(var E=this,B=0;B<this.oneof.length;++B){var O=I.get(this.oneof[B]);O&&!O.partOf&&(O.partOf=E,E.fieldsArray.push(O))}R(this)},T.prototype.onRemove=function(I){for(var E=0,B;E<this.fieldsArray.length;++E)(B=this.fieldsArray[E]).parent&&B.parent.remove(B);A.prototype.onRemove.call(this,I)},T.d=function(){for(var I=new Array(arguments.length),E=0;E<arguments.length;)I[E]=arguments[E++];return function(O,G){C.decorateType(O.constructor).add(new T(G,I)),Object.defineProperty(O,G,{get:C.oneOfGetter(I),set:C.oneOfSetter(I)})}},oneof}var namespace,hasRequiredNamespace;function requireNamespace(){if(hasRequiredNamespace)return namespace;hasRequiredNamespace=1,namespace=B;var A=requireObject();((B.prototype=Object.create(A.prototype)).constructor=B).className="Namespace";var _=requireField(),C=requireUtil(),T=requireOneof(),R,P,I;B.fromJSON=function(L,F){return new B(L,F.options).addJSON(F.nested)};function E(G,L){if(G&&G.length){for(var F={},D=0;D<G.length;++D)F[G[D].name]=G[D].toJSON(L);return F}}B.arrayToJSON=E,B.isReservedId=function(L,F){if(L){for(var D=0;D<L.length;++D)if(typeof L[D]!="string"&&L[D][0]<=F&&L[D][1]>F)return!0}return!1},B.isReservedName=function(L,F){if(L){for(var D=0;D<L.length;++D)if(L[D]===F)return!0}return!1};function B(G,L){A.call(this,G,L),this.nested=void 0,this._nestedArray=null}function O(G){return G._nestedArray=null,G}return Object.defineProperty(B.prototype,"nestedArray",{get:function(){return this._nestedArray||(this._nestedArray=C.toArray(this.nested))}}),B.prototype.toJSON=function(L){return C.toObject(["options",this.options,"nested",E(this.nestedArray,L)])},B.prototype.addJSON=function(L){var F=this;if(L)for(var D=Object.keys(L),q=0,U;q<D.length;++q)U=L[D[q]],F.add((U.fields!==void 0?R.fromJSON:U.values!==void 0?I.fromJSON:U.methods!==void 0?P.fromJSON:U.id!==void 0?_.fromJSON:B.fromJSON)(D[q],U));return this},B.prototype.get=function(L){return this.nested&&this.nested[L]||null},B.prototype.getEnum=function(L){if(this.nested&&this.nested[L]instanceof I)return this.nested[L].values;throw Error("no such enum: "+L)},B.prototype.add=function(L){if(!(L instanceof _&&L.extend!==void 0||L instanceof R||L instanceof T||L instanceof I||L instanceof P||L instanceof B))throw TypeError("object must be a valid nested object");if(!this.nested)this.nested={};else{var F=this.get(L.name);if(F)if(F instanceof B&&L instanceof B&&!(F instanceof R||F instanceof P)){for(var D=F.nestedArray,q=0;q<D.length;++q)L.add(D[q]);this.remove(F),this.nested||(this.nested={}),L.setOptions(F.options,!0)}else throw Error("duplicate name '"+L.name+"' in "+this)}return this.nested[L.name]=L,L.onAdd(this),O(this)},B.prototype.remove=function(L){if(!(L instanceof A))throw TypeError("object must be a ReflectionObject");if(L.parent!==this)throw Error(L+" is not a member of "+this);return delete this.nested[L.name],Object.keys(this.nested).length||(this.nested=void 0),L.onRemove(this),O(this)},B.prototype.define=function(L,F){if(C.isString(L))L=L.split(".");else if(!Array.isArray(L))throw TypeError("illegal path");if(L&&L.length&&L[0]==="")throw Error("path must be relative");for(var D=this;L.length>0;){var q=L.shift();if(D.nested&&D.nested[q]){if(D=D.nested[q],!(D instanceof B))throw Error("path conflicts with non-namespace objects")}else D.add(D=new B(q))}return F&&D.addJSON(F),D},B.prototype.resolveAll=function(){for(var L=this.nestedArray,F=0;F<L.length;)L[F]instanceof B?L[F++].resolveAll():L[F++].resolve();return this.resolve()},B.prototype.lookup=function(L,F,D){if(typeof F=="boolean"?(D=F,F=void 0):F&&!Array.isArray(F)&&(F=[F]),C.isString(L)&&L.length){if(L===".")return this.root;L=L.split(".")}else if(!L.length)return this;if(L[0]==="")return this.root.lookup(L.slice(1),F);var q=this.get(L[0]);if(q){if(L.length===1){if(!F||F.indexOf(q.constructor)>-1)return q}else if(q instanceof B&&(q=q.lookup(L.slice(1),F,!0)))return q}else for(var U=0;U<this.nestedArray.length;++U)if(this._nestedArray[U]instanceof B&&(q=this._nestedArray[U].lookup(L,F,!0)))return q;return this.parent===null||D?null:this.parent.lookup(L,F)},B.prototype.lookupType=function(L){var F=this.lookup(L,[R]);if(!F)throw Error("no such type: "+L);return F},B.prototype.lookupEnum=function(L){var F=this.lookup(L,[I]);if(!F)throw Error("no such Enum '"+L+"' in "+this);return F},B.prototype.lookupTypeOrEnum=function(L){var F=this.lookup(L,[R,I]);if(!F)throw Error("no such Type or Enum '"+L+"' in "+this);return F},B.prototype.lookupService=function(L){var F=this.lookup(L,[P]);if(!F)throw Error("no such Service '"+L+"' in "+this);return F},B._configure=function(G,L,F){R=G,P=L,I=F},namespace}var mapfield,hasRequiredMapfield;function requireMapfield(){if(hasRequiredMapfield)return mapfield;hasRequiredMapfield=1,mapfield=T;var A=requireField();((T.prototype=Object.create(A.prototype)).constructor=T).className="MapField";var _=requireTypes(),C=requireUtil();function T(R,P,I,E,B,O){if(A.call(this,R,P,E,void 0,void 0,B,O),!C.isString(I))throw TypeError("keyType must be a string");this.keyType=I,this.resolvedKeyType=null,this.map=!0}return T.fromJSON=function(P,I){return new T(P,I.id,I.keyType,I.type,I.options,I.comment)},T.prototype.toJSON=function(P){var I=P?!!P.keepComments:!1;return C.toObject(["keyType",this.keyType,"type",this.type,"id",this.id,"extend",this.extend,"options",this.options,"comment",I?this.comment:void 0])},T.prototype.resolve=function(){if(this.resolved)return this;if(_.mapKey[this.keyType]===void 0)throw Error("invalid key type: "+this.keyType);return A.prototype.resolve.call(this)},T.d=function(P,I,E){return typeof E=="function"?E=C.decorateType(E).name:E&&typeof E=="object"&&(E=C.decorateEnum(E).name),function(O,G){C.decorateType(O.constructor).add(new T(G,P,I,E))}},mapfield}var method,hasRequiredMethod;function requireMethod(){if(hasRequiredMethod)return method;hasRequiredMethod=1,method=C;var A=requireObject();((C.prototype=Object.create(A.prototype)).constructor=C).className="Method";var _=requireUtil();function C(T,R,P,I,E,B,O,G,L){if(_.isObject(E)?(O=E,E=B=void 0):_.isObject(B)&&(O=B,B=void 0),!(R===void 0||_.isString(R)))throw TypeError("type must be a string");if(!_.isString(P))throw TypeError("requestType must be a string");if(!_.isString(I))throw TypeError("responseType must be a string");A.call(this,T,O),this.type=R||"rpc",this.requestType=P,this.requestStream=E?!0:void 0,this.responseType=I,this.responseStream=B?!0:void 0,this.resolvedRequestType=null,this.resolvedResponseType=null,this.comment=G,this.parsedOptions=L}return C.fromJSON=function(R,P){return new C(R,P.type,P.requestType,P.responseType,P.requestStream,P.responseStream,P.options,P.comment,P.parsedOptions)},C.prototype.toJSON=function(R){var P=R?!!R.keepComments:!1;return _.toObject(["type",this.type!=="rpc"&&this.type||void 0,"requestType",this.requestType,"requestStream",this.requestStream,"responseType",this.responseType,"responseStream",this.responseStream,"options",this.options,"comment",P?this.comment:void 0,"parsedOptions",this.parsedOptions])},C.prototype.resolve=function(){return this.resolved?this:(this.resolvedRequestType=this.parent.lookupType(this.requestType),this.resolvedResponseType=this.parent.lookupType(this.responseType),A.prototype.resolve.call(this))},method}var service,hasRequiredService;function requireService(){if(hasRequiredService)return service;hasRequiredService=1,service=R;var A=requireNamespace();((R.prototype=Object.create(A.prototype)).constructor=R).className="Service";var _=requireMethod(),C=requireUtil(),T=requireRpc();function R(I,E){A.call(this,I,E),this.methods={},this._methodsArray=null}R.fromJSON=function(E,B){var O=new R(E,B.options);if(B.methods)for(var G=Object.keys(B.methods),L=0;L<G.length;++L)O.add(_.fromJSON(G[L],B.methods[G[L]]));return B.nested&&O.addJSON(B.nested),O.comment=B.comment,O},R.prototype.toJSON=function(E){var B=A.prototype.toJSON.call(this,E),O=E?!!E.keepComments:!1;return C.toObject(["options",B&&B.options||void 0,"methods",A.arrayToJSON(this.methodsArray,E)||{},"nested",B&&B.nested||void 0,"comment",O?this.comment:void 0])},Object.defineProperty(R.prototype,"methodsArray",{get:function(){return this._methodsArray||(this._methodsArray=C.toArray(this.methods))}});function P(I){return I._methodsArray=null,I}return R.prototype.get=function(E){return this.methods[E]||A.prototype.get.call(this,E)},R.prototype.resolveAll=function(){for(var E=this.methodsArray,B=0;B<E.length;++B)E[B].resolve();return A.prototype.resolve.call(this)},R.prototype.add=function(E){if(this.get(E.name))throw Error("duplicate name '"+E.name+"' in "+this);return E instanceof _?(this.methods[E.name]=E,E.parent=this,P(this)):A.prototype.add.call(this,E)},R.prototype.remove=function(E){if(E instanceof _){if(this.methods[E.name]!==E)throw Error(E+" is not a member of "+this);return delete this.methods[E.name],E.parent=null,P(this)}return A.prototype.remove.call(this,E)},R.prototype.create=function(E,B,O){for(var G=new T.Service(E,B,O),L=0,F;L<this.methodsArray.length;++L){var D=C.lcFirst((F=this._methodsArray[L]).resolve().name).replace(/[^$\w_]/g,"");G[D]=C.codegen(["r","c"],C.isReserved(D)?D+"_":D)("return this.rpcCall(m,q,s,r,c)")({m:F,q:F.resolvedRequestType.ctor,s:F.resolvedResponseType.ctor})}return G},service}var message,hasRequiredMessage;function requireMessage(){if(hasRequiredMessage)return message;hasRequiredMessage=1,message=_;var A=requireMinimal();function _(C){if(C)for(var T=Object.keys(C),R=0;R<T.length;++R)this[T[R]]=C[T[R]]}return _.create=function(T){return this.$type.create(T)},_.encode=function(T,R){return this.$type.encode(T,R)},_.encodeDelimited=function(T,R){return this.$type.encodeDelimited(T,R)},_.decode=function(T){return this.$type.decode(T)},_.decodeDelimited=function(T){return this.$type.decodeDelimited(T)},_.verify=function(T){return this.$type.verify(T)},_.fromObject=function(T){return this.$type.fromObject(T)},_.toObject=function(T,R){return this.$type.toObject(T,R)},_.prototype.toJSON=function(){return this.$type.toObject(this,A.toJSONOptions)},message}var decoder_1,hasRequiredDecoder;function requireDecoder(){if(hasRequiredDecoder)return decoder_1;hasRequiredDecoder=1,decoder_1=R;var A=require_enum(),_=requireTypes(),C=requireUtil();function T(P){return"missing required '"+P.name+"'"}function R(P){var I=C.codegen(["r","l"],P.name+"$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor"+(P.fieldsArray.filter(function(F){return F.map}).length?",k,value":""))("while(r.pos<c){")("var t=r.uint32()");P.group&&I("if((t&7)===4)")("break"),I("switch(t>>>3){");for(var E=0;E<P.fieldsArray.length;++E){var B=P._fieldsArray[E].resolve(),O=B.resolvedType instanceof A?"int32":B.type,G="m"+C.safeProp(B.name);I("case %i: {",B.id),B.map?(I("if(%s===util.emptyObject)",G)("%s={}",G)("var c2 = r.uint32()+r.pos"),_.defaults[B.keyType]!==void 0?I("k=%j",_.defaults[B.keyType]):I("k=null"),_.defaults[O]!==void 0?I("value=%j",_.defaults[O]):I("value=null"),I("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break",B.keyType)("case 2:"),_.basic[O]===void 0?I("value=types[%i].decode(r,r.uint32())",E):I("value=r.%s()",O),I("break")("default:")("r.skipType(tag2&7)")("break")("}")("}"),_.long[B.keyType]!==void 0?I('%s[typeof k==="object"?util.longToHash(k):k]=value',G):I("%s[k]=value",G)):B.repeated?(I("if(!(%s&&%s.length))",G,G)("%s=[]",G),_.packed[O]!==void 0&&I("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())",G,O)("}else"),_.basic[O]===void 0?I(B.resolvedType.group?"%s.push(types[%i].decode(r))":"%s.push(types[%i].decode(r,r.uint32()))",G,E):I("%s.push(r.%s())",G,O)):_.basic[O]===void 0?I(B.resolvedType.group?"%s=types[%i].decode(r)":"%s=types[%i].decode(r,r.uint32())",G,E):I("%s=r.%s()",G,O),I("break")("}")}for(I("default:")("r.skipType(t&7)")("break")("}")("}"),E=0;E<P._fieldsArray.length;++E){var L=P._fieldsArray[E];L.required&&I("if(!m.hasOwnProperty(%j))",L.name)("throw util.ProtocolError(%j,{instance:m})",T(L))}return I("return m")}return decoder_1}var verifier_1,hasRequiredVerifier;function requireVerifier(){if(hasRequiredVerifier)return verifier_1;hasRequiredVerifier=1,verifier_1=P;var A=require_enum(),_=requireUtil();function C(I,E){return I.name+": "+E+(I.repeated&&E!=="array"?"[]":I.map&&E!=="object"?"{k:"+I.keyType+"}":"")+" expected"}function T(I,E,B,O){if(E.resolvedType)if(E.resolvedType instanceof A){I("switch(%s){",O)("default:")("return%j",C(E,"enum value"));for(var G=Object.keys(E.resolvedType.values),L=0;L<G.length;++L)I("case %i:",E.resolvedType.values[G[L]]);I("break")("}")}else I("{")("var e=types[%i].verify(%s);",B,O)("if(e)")("return%j+e",E.name+".")("}");else switch(E.type){case"int32":case"uint32":case"sint32":case"fixed32":case"sfixed32":I("if(!util.isInteger(%s))",O)("return%j",C(E,"integer"));break;case"int64":case"uint64":case"sint64":case"fixed64":case"sfixed64":I("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))",O,O,O,O)("return%j",C(E,"integer|Long"));break;case"float":case"double":I('if(typeof %s!=="number")',O)("return%j",C(E,"number"));break;case"bool":I('if(typeof %s!=="boolean")',O)("return%j",C(E,"boolean"));break;case"string":I("if(!util.isString(%s))",O)("return%j",C(E,"string"));break;case"bytes":I('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))',O,O,O)("return%j",C(E,"buffer"));break}return I}function R(I,E,B){switch(E.keyType){case"int32":case"uint32":case"sint32":case"fixed32":case"sfixed32":I("if(!util.key32Re.test(%s))",B)("return%j",C(E,"integer key"));break;case"int64":case"uint64":case"sint64":case"fixed64":case"sfixed64":I("if(!util.key64Re.test(%s))",B)("return%j",C(E,"integer|Long key"));break;case"bool":I("if(!util.key2Re.test(%s))",B)("return%j",C(E,"boolean key"));break}return I}function P(I){var E=_.codegen(["m"],I.name+"$verify")('if(typeof m!=="object"||m===null)')("return%j","object expected"),B=I.oneofsArray,O={};B.length&&E("var p={}");for(var G=0;G<I.fieldsArray.length;++G){var L=I._fieldsArray[G].resolve(),F="m"+_.safeProp(L.name);if(L.optional&&E("if(%s!=null&&m.hasOwnProperty(%j)){",F,L.name),L.map)E("if(!util.isObject(%s))",F)("return%j",C(L,"object"))("var k=Object.keys(%s)",F)("for(var i=0;i<k.length;++i){"),R(E,L,"k[i]"),T(E,L,G,F+"[k[i]]")("}");else if(L.repeated)E("if(!Array.isArray(%s))",F)("return%j",C(L,"array"))("for(var i=0;i<%s.length;++i){",F),T(E,L,G,F+"[i]")("}");else{if(L.partOf){var D=_.safeProp(L.partOf.name);O[L.partOf.name]===1&&E("if(p%s===1)",D)("return%j",L.partOf.name+": multiple values"),O[L.partOf.name]=1,E("p%s=1",D)}T(E,L,G,F)}L.optional&&E("}")}return E("return null")}return verifier_1}var converter={},hasRequiredConverter;function requireConverter(){return hasRequiredConverter||(hasRequiredConverter=1,function(A){var _=A,C=require_enum(),T=requireUtil();function R(I,E,B,O){var G=!1;if(E.resolvedType)if(E.resolvedType instanceof C){I("switch(d%s){",O);for(var L=E.resolvedType.values,F=Object.keys(L),D=0;D<F.length;++D)L[F[D]]===E.typeDefault&&!G&&(I("default:")('if(typeof(d%s)==="number"){m%s=d%s;break}',O,O,O),E.repeated||I("break"),G=!0),I("case%j:",F[D])("case %i:",L[F[D]])("m%s=%j",O,L[F[D]])("break");I("}")}else I('if(typeof d%s!=="object")',O)("throw TypeError(%j)",E.fullName+": object expected")("m%s=types[%i].fromObject(d%s)",O,B,O);else{var q=!1;switch(E.type){case"double":case"float":I("m%s=Number(d%s)",O,O);break;case"uint32":case"fixed32":I("m%s=d%s>>>0",O,O);break;case"int32":case"sint32":case"sfixed32":I("m%s=d%s|0",O,O);break;case"uint64":q=!0;case"int64":case"sint64":case"fixed64":case"sfixed64":I("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j",O,O,q)('else if(typeof d%s==="string")',O)("m%s=parseInt(d%s,10)",O,O)('else if(typeof d%s==="number")',O)("m%s=d%s",O,O)('else if(typeof d%s==="object")',O)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)",O,O,O,q?"true":"");break;case"bytes":I('if(typeof d%s==="string")',O)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)",O,O,O)("else if(d%s.length >= 0)",O)("m%s=d%s",O,O);break;case"string":I("m%s=String(d%s)",O,O);break;case"bool":I("m%s=Boolean(d%s)",O,O);break}}return I}_.fromObject=function(E){var B=E.fieldsArray,O=T.codegen(["d"],E.name+"$fromObject")("if(d instanceof this.ctor)")("return d");if(!B.length)return O("return new this.ctor");O("var m=new this.ctor");for(var G=0;G<B.length;++G){var L=B[G].resolve(),F=T.safeProp(L.name);L.map?(O("if(d%s){",F)('if(typeof d%s!=="object")',F)("throw TypeError(%j)",L.fullName+": object expected")("m%s={}",F)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){",F),R(O,L,G,F+"[ks[i]]")("}")("}")):L.repeated?(O("if(d%s){",F)("if(!Array.isArray(d%s))",F)("throw TypeError(%j)",L.fullName+": array expected")("m%s=[]",F)("for(var i=0;i<d%s.length;++i){",F),R(O,L,G,F+"[i]")("}")("}")):(L.resolvedType instanceof C||O("if(d%s!=null){",F),R(O,L,G,F),L.resolvedType instanceof C||O("}"))}return O("return m")};function P(I,E,B,O){if(E.resolvedType)E.resolvedType instanceof C?I("d%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s",O,B,O,O,B,O,O):I("d%s=types[%i].toObject(m%s,o)",O,B,O);else{var G=!1;switch(E.type){case"double":case"float":I("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s",O,O,O,O);break;case"uint64":G=!0;case"int64":case"sint64":case"fixed64":case"sfixed64":I('if(typeof m%s==="number")',O)("d%s=o.longs===String?String(m%s):m%s",O,O,O)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s",O,O,O,O,G?"true":"",O);break;case"bytes":I("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s",O,O,O,O,O);break;default:I("d%s=m%s",O,O);break}}return I}_.toObject=function(E){var B=E.fieldsArray.slice().sort(T.compareFieldsById);if(!B.length)return T.codegen()("return {}");for(var O=T.codegen(["m","o"],E.name+"$toObject")("if(!o)")("o={}")("var d={}"),G=[],L=[],F=[],D=0;D<B.length;++D)B[D].partOf||(B[D].resolve().repeated?G:B[D].map?L:F).push(B[D]);if(G.length){for(O("if(o.arrays||o.defaults){"),D=0;D<G.length;++D)O("d%s=[]",T.safeProp(G[D].name));O("}")}if(L.length){for(O("if(o.objects||o.defaults){"),D=0;D<L.length;++D)O("d%s={}",T.safeProp(L[D].name));O("}")}if(F.length){for(O("if(o.defaults){"),D=0;D<F.length;++D){var q=F[D],U=T.safeProp(q.name);if(q.resolvedType instanceof C)O("d%s=o.enums===String?%j:%j",U,q.resolvedType.valuesById[q.typeDefault],q.typeDefault);else if(q.long)O("if(util.Long){")("var n=new util.Long(%i,%i,%j)",q.typeDefault.low,q.typeDefault.high,q.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n",U)("}else")("d%s=o.longs===String?%j:%i",U,q.typeDefault.toString(),q.typeDefault.toNumber());else if(q.bytes){var V="["+Array.prototype.slice.call(q.typeDefault).join(",")+"]";O("if(o.bytes===String)d%s=%j",U,String.fromCharCode.apply(String,q.typeDefault))("else{")("d%s=%s",U,V)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)",U,U)("}")}else O("d%s=%j",U,q.typeDefault)}O("}")}var W=!1;for(D=0;D<B.length;++D){var q=B[D],z=E._fieldsArray.indexOf(q),U=T.safeProp(q.name);q.map?(W||(W=!0,O("var ks2")),O("if(m%s&&(ks2=Object.keys(m%s)).length){",U,U)("d%s={}",U)("for(var j=0;j<ks2.length;++j){"),P(O,q,z,U+"[ks2[j]]")("}")):q.repeated?(O("if(m%s&&m%s.length){",U,U)("d%s=[]",U)("for(var j=0;j<m%s.length;++j){",U),P(O,q,z,U+"[j]")("}")):(O("if(m%s!=null&&m.hasOwnProperty(%j)){",U,q.name),P(O,q,z,U),q.partOf&&O("if(o.oneofs)")("d%s=%j",T.safeProp(q.partOf.name),q.name)),O("}")}return O("return d")}}(converter)),converter}var wrappers={},hasRequiredWrappers;function requireWrappers(){return hasRequiredWrappers||(hasRequiredWrappers=1,function(A){var _=A,C=requireMessage();_[".google.protobuf.Any"]={fromObject:function(T){if(T&&T["@type"]){var R=T["@type"].substring(T["@type"].lastIndexOf("/")+1),P=this.lookup(R);if(P){var I=T["@type"].charAt(0)==="."?T["@type"].slice(1):T["@type"];return I.indexOf("/")===-1&&(I="/"+I),this.create({type_url:I,value:P.encode(P.fromObject(T)).finish()})}}return this.fromObject(T)},toObject:function(T,R){var P="type.googleapis.com/",I="",E="";if(R&&R.json&&T.type_url&&T.value){E=T.type_url.substring(T.type_url.lastIndexOf("/")+1),I=T.type_url.substring(0,T.type_url.lastIndexOf("/")+1);var B=this.lookup(E);B&&(T=B.decode(T.value))}if(!(T instanceof this.ctor)&&T instanceof C){var O=T.$type.toObject(T,R),G=T.$type.fullName[0]==="."?T.$type.fullName.slice(1):T.$type.fullName;return I===""&&(I=P),E=I+G,O["@type"]=E,O}return this.toObject(T,R)}}}(wrappers)),wrappers}var type,hasRequiredType;function requireType(){if(hasRequiredType)return type;hasRequiredType=1,type=U;var A=requireNamespace();((U.prototype=Object.create(A.prototype)).constructor=U).className="Type";var _=require_enum(),C=requireOneof(),T=requireField(),R=requireMapfield(),P=requireService(),I=requireMessage(),E=requireReader(),B=requireWriter(),O=requireUtil(),G=requireEncoder(),L=requireDecoder(),F=requireVerifier(),D=requireConverter(),q=requireWrappers();function U(W,z){A.call(this,W,z),this.fields={},this.oneofs=void 0,this.extensions=void 0,this.reserved=void 0,this.group=void 0,this._fieldsById=null,this._fieldsArray=null,this._oneofsArray=null,this._ctor=null}Object.defineProperties(U.prototype,{fieldsById:{get:function(){if(this._fieldsById)return this._fieldsById;this._fieldsById={};for(var W=Object.keys(this.fields),z=0;z<W.length;++z){var X=this.fields[W[z]],Y=X.id;if(this._fieldsById[Y])throw Error("duplicate id "+Y+" in "+this);this._fieldsById[Y]=X}return this._fieldsById}},fieldsArray:{get:function(){return this._fieldsArray||(this._fieldsArray=O.toArray(this.fields))}},oneofsArray:{get:function(){return this._oneofsArray||(this._oneofsArray=O.toArray(this.oneofs))}},ctor:{get:function(){return this._ctor||(this.ctor=U.generateConstructor(this)())},set:function(W){var z=W.prototype;z instanceof I||((W.prototype=new I).constructor=W,O.merge(W.prototype,z)),W.$type=W.prototype.$type=this,O.merge(W,I,!0),this._ctor=W;for(var X=0;X<this.fieldsArray.length;++X)this._fieldsArray[X].resolve();var Y={};for(X=0;X<this.oneofsArray.length;++X)Y[this._oneofsArray[X].resolve().name]={get:O.oneOfGetter(this._oneofsArray[X].oneof),set:O.oneOfSetter(this._oneofsArray[X].oneof)};X&&Object.defineProperties(W.prototype,Y)}}}),U.generateConstructor=function(z){for(var X=O.codegen(["p"],z.name),Y=0,Q;Y<z.fieldsArray.length;++Y)(Q=z._fieldsArray[Y]).map?X("this%s={}",O.safeProp(Q.name)):Q.repeated&&X("this%s=[]",O.safeProp(Q.name));return X("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]")};function V(W){return W._fieldsById=W._fieldsArray=W._oneofsArray=null,delete W.encode,delete W.decode,delete W.verify,W}return U.fromJSON=function(z,X){var Y=new U(z,X.options);Y.extensions=X.extensions,Y.reserved=X.reserved;for(var Q=Object.keys(X.fields),J=0;J<Q.length;++J)Y.add((typeof X.fields[Q[J]].keyType<"u"?R.fromJSON:T.fromJSON)(Q[J],X.fields[Q[J]]));if(X.oneofs)for(Q=Object.keys(X.oneofs),J=0;J<Q.length;++J)Y.add(C.fromJSON(Q[J],X.oneofs[Q[J]]));if(X.nested)for(Q=Object.keys(X.nested),J=0;J<Q.length;++J){var Z=X.nested[Q[J]];Y.add((Z.id!==void 0?T.fromJSON:Z.fields!==void 0?U.fromJSON:Z.values!==void 0?_.fromJSON:Z.methods!==void 0?P.fromJSON:A.fromJSON)(Q[J],Z))}return X.extensions&&X.extensions.length&&(Y.extensions=X.extensions),X.reserved&&X.reserved.length&&(Y.reserved=X.reserved),X.group&&(Y.group=!0),X.comment&&(Y.comment=X.comment),Y},U.prototype.toJSON=function(z){var X=A.prototype.toJSON.call(this,z),Y=z?!!z.keepComments:!1;return O.toObject(["options",X&&X.options||void 0,"oneofs",A.arrayToJSON(this.oneofsArray,z),"fields",A.arrayToJSON(this.fieldsArray.filter(function(Q){return!Q.declaringField}),z)||{},"extensions",this.extensions&&this.extensions.length?this.extensions:void 0,"reserved",this.reserved&&this.reserved.length?this.reserved:void 0,"group",this.group||void 0,"nested",X&&X.nested||void 0,"comment",Y?this.comment:void 0])},U.prototype.resolveAll=function(){for(var z=this.fieldsArray,X=0;X<z.length;)z[X++].resolve();var Y=this.oneofsArray;for(X=0;X<Y.length;)Y[X++].resolve();return A.prototype.resolveAll.call(this)},U.prototype.get=function(z){return this.fields[z]||this.oneofs&&this.oneofs[z]||this.nested&&this.nested[z]||null},U.prototype.add=function(z){if(this.get(z.name))throw Error("duplicate name '"+z.name+"' in "+this);if(z instanceof T&&z.extend===void 0){if(this._fieldsById?this._fieldsById[z.id]:this.fieldsById[z.id])throw Error("duplicate id "+z.id+" in "+this);if(this.isReservedId(z.id))throw Error("id "+z.id+" is reserved in "+this);if(this.isReservedName(z.name))throw Error("name '"+z.name+"' is reserved in "+this);return z.parent&&z.parent.remove(z),this.fields[z.name]=z,z.message=this,z.onAdd(this),V(this)}return z instanceof C?(this.oneofs||(this.oneofs={}),this.oneofs[z.name]=z,z.onAdd(this),V(this)):A.prototype.add.call(this,z)},U.prototype.remove=function(z){if(z instanceof T&&z.extend===void 0){if(!this.fields||this.fields[z.name]!==z)throw Error(z+" is not a member of "+this);return delete this.fields[z.name],z.parent=null,z.onRemove(this),V(this)}if(z instanceof C){if(!this.oneofs||this.oneofs[z.name]!==z)throw Error(z+" is not a member of "+this);return delete this.oneofs[z.name],z.parent=null,z.onRemove(this),V(this)}return A.prototype.remove.call(this,z)},U.prototype.isReservedId=function(z){return A.isReservedId(this.reserved,z)},U.prototype.isReservedName=function(z){return A.isReservedName(this.reserved,z)},U.prototype.create=function(z){return new this.ctor(z)},U.prototype.setup=function(){for(var z=this.fullName,X=[],Y=0;Y<this.fieldsArray.length;++Y)X.push(this._fieldsArray[Y].resolve().resolvedType);this.encode=G(this)({Writer:B,types:X,util:O}),this.decode=L(this)({Reader:E,types:X,util:O}),this.verify=F(this)({types:X,util:O}),this.fromObject=D.fromObject(this)({types:X,util:O}),this.toObject=D.toObject(this)({types:X,util:O});var Q=q[z];if(Q){var J=Object.create(this);J.fromObject=this.fromObject,this.fromObject=Q.fromObject.bind(J),J.toObject=this.toObject,this.toObject=Q.toObject.bind(J)}return this},U.prototype.encode=function(z,X){return this.setup().encode(z,X)},U.prototype.encodeDelimited=function(z,X){return this.encode(z,X&&X.len?X.fork():X).ldelim()},U.prototype.decode=function(z,X){return this.setup().decode(z,X)},U.prototype.decodeDelimited=function(z){return z instanceof E||(z=E.create(z)),this.decode(z,z.uint32())},U.prototype.verify=function(z){return this.setup().verify(z)},U.prototype.fromObject=function(z){return this.setup().fromObject(z)},U.prototype.toObject=function(z,X){return this.setup().toObject(z,X)},U.d=function(z){return function(Y){O.decorateType(Y,z)}},type}var root,hasRequiredRoot;function requireRoot(){if(hasRequiredRoot)return root;hasRequiredRoot=1,root=B;var A=requireNamespace();((B.prototype=Object.create(A.prototype)).constructor=B).className="Root";var _=requireField(),C=require_enum(),T=requireOneof(),R=requireUtil(),P,I,E;function B(F){A.call(this,"",F),this.deferred=[],this.files=[]}B.fromJSON=function(D,q){return q||(q=new B),D.options&&q.setOptions(D.options),q.addJSON(D.nested)},B.prototype.resolvePath=R.path.resolve,B.prototype.fetch=R.fetch;function O(){}B.prototype.load=function F(D,q,U){typeof q=="function"&&(U=q,q=void 0);var V=this;if(!U)return R.asPromise(F,V,D,q);var W=U===O;function z(rt,et){if(U){if(W)throw rt;var tt=U;U=null,tt(rt,et)}}function X(rt){var et=rt.lastIndexOf("google/protobuf/");if(et>-1){var tt=rt.substring(et);if(tt in E)return tt}return null}function Y(rt,et){try{if(R.isString(et)&&et.charAt(0)==="{"&&(et=JSON.parse(et)),!R.isString(et))V.setOptions(et.options).addJSON(et.nested);else{I.filename=rt;var tt=I(et,V,q),lt,ht=0;if(tt.imports)for(;ht<tt.imports.length;++ht)(lt=X(tt.imports[ht])||V.resolvePath(rt,tt.imports[ht]))&&Q(lt);if(tt.weakImports)for(ht=0;ht<tt.weakImports.length;++ht)(lt=X(tt.weakImports[ht])||V.resolvePath(rt,tt.weakImports[ht]))&&Q(lt,!0)}}catch(it){z(it)}!W&&!J&&z(null,V)}function Q(rt,et){if(rt=X(rt)||rt,!(V.files.indexOf(rt)>-1)){if(V.files.push(rt),rt in E){W?Y(rt,E[rt]):(++J,setTimeout(function(){--J,Y(rt,E[rt])}));return}if(W){var tt;try{tt=R.fs.readFileSync(rt).toString("utf8")}catch(lt){et||z(lt);return}Y(rt,tt)}else++J,V.fetch(rt,function(lt,ht){if(--J,!!U){if(lt){et?J||z(null,V):z(lt);return}Y(rt,ht)}})}}var J=0;R.isString(D)&&(D=[D]);for(var Z=0,ut;Z<D.length;++Z)(ut=V.resolvePath("",D[Z]))&&Q(ut);if(W)return V;J||z(null,V)},B.prototype.loadSync=function(D,q){if(!R.isNode)throw Error("not supported");return this.load(D,q,O)},B.prototype.resolveAll=function(){if(this.deferred.length)throw Error("unresolvable extensions: "+this.deferred.map(function(D){return"'extend "+D.extend+"' in "+D.parent.fullName}).join(", "));return A.prototype.resolveAll.call(this)};var G=/^[A-Z]/;function L(F,D){var q=D.parent.lookup(D.extend);if(q){var U=new _(D.fullName,D.id,D.type,D.rule,void 0,D.options);return q.get(U.name)||(U.declaringField=D,D.extensionField=U,q.add(U)),!0}return!1}return B.prototype._handleAdd=function(D){if(D instanceof _)D.extend!==void 0&&!D.extensionField&&(L(this,D)||this.deferred.push(D));else if(D instanceof C)G.test(D.name)&&(D.parent[D.name]=D.values);else if(!(D instanceof T)){if(D instanceof P)for(var q=0;q<this.deferred.length;)L(this,this.deferred[q])?this.deferred.splice(q,1):++q;for(var U=0;U<D.nestedArray.length;++U)this._handleAdd(D._nestedArray[U]);G.test(D.name)&&(D.parent[D.name]=D)}},B.prototype._handleRemove=function(D){if(D instanceof _){if(D.extend!==void 0)if(D.extensionField)D.extensionField.parent.remove(D.extensionField),D.extensionField=null;else{var q=this.deferred.indexOf(D);q>-1&&this.deferred.splice(q,1)}}else if(D instanceof C)G.test(D.name)&&delete D.parent[D.name];else if(D instanceof A){for(var U=0;U<D.nestedArray.length;++U)this._handleRemove(D._nestedArray[U]);G.test(D.name)&&delete D.parent[D.name]}},B._configure=function(F,D,q){P=F,I=D,E=q},root}var hasRequiredUtil;function requireUtil(){if(hasRequiredUtil)return util.exports;hasRequiredUtil=1;var A=util.exports=requireMinimal(),_=requireRoots(),C,T;A.codegen=requireCodegen(),A.fetch=requireFetch(),A.path=requirePath(),A.fs=A.inquire("fs"),A.toArray=function(O){if(O){for(var G=Object.keys(O),L=new Array(G.length),F=0;F<G.length;)L[F]=O[G[F++]];return L}return[]},A.toObject=function(O){for(var G={},L=0;L<O.length;){var F=O[L++],D=O[L++];D!==void 0&&(G[F]=D)}return G};var R=/\\/g,P=/"/g;A.isReserved=function(O){return/^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(O)},A.safeProp=function(O){return!/^[$\w_]+$/.test(O)||A.isReserved(O)?'["'+O.replace(R,"\\\\").replace(P,'\\"')+'"]':"."+O},A.ucFirst=function(O){return O.charAt(0).toUpperCase()+O.substring(1)};var I=/_([a-z])/g;A.camelCase=function(O){return O.substring(0,1)+O.substring(1).replace(I,function(G,L){return L.toUpperCase()})},A.compareFieldsById=function(O,G){return O.id-G.id},A.decorateType=function(O,G){if(O.$type)return G&&O.$type.name!==G&&(A.decorateRoot.remove(O.$type),O.$type.name=G,A.decorateRoot.add(O.$type)),O.$type;C||(C=requireType());var L=new C(G||O.name);return A.decorateRoot.add(L),L.ctor=O,Object.defineProperty(O,"$type",{value:L,enumerable:!1}),Object.defineProperty(O.prototype,"$type",{value:L,enumerable:!1}),L};var E=0;return A.decorateEnum=function(O){if(O.$type)return O.$type;T||(T=require_enum());var G=new T("Enum"+E++,O);return A.decorateRoot.add(G),Object.defineProperty(O,"$type",{value:G,enumerable:!1}),G},A.setProperty=function(O,G,L){function F(D,q,U){var V=q.shift();if(V==="__proto__"||V==="prototype")return D;if(q.length>0)D[V]=F(D[V]||{},q,U);else{var W=D[V];W&&(U=[].concat(W).concat(U)),D[V]=U}return D}if(typeof O!="object")throw TypeError("dst must be an object");if(!G)throw TypeError("path must be specified");return G=G.split("."),F(O,G,L)},Object.defineProperty(A,"decorateRoot",{get:function(){return _.decorated||(_.decorated=new(requireRoot()))}}),util.exports}var object,hasRequiredObject;function requireObject(){if(hasRequiredObject)return object;hasRequiredObject=1,object=C,C.className="ReflectionObject";var A=requireUtil(),_;function C(T,R){if(!A.isString(T))throw TypeError("name must be a string");if(R&&!A.isObject(R))throw TypeError("options must be an object");this.options=R,this.parsedOptions=null,this.name=T,this.parent=null,this.resolved=!1,this.comment=null,this.filename=null}return Object.defineProperties(C.prototype,{root:{get:function(){for(var T=this;T.parent!==null;)T=T.parent;return T}},fullName:{get:function(){for(var T=[this.name],R=this.parent;R;)T.unshift(R.name),R=R.parent;return T.join(".")}}}),C.prototype.toJSON=function(){throw Error()},C.prototype.onAdd=function(R){this.parent&&this.parent!==R&&this.parent.remove(this),this.parent=R,this.resolved=!1;var P=R.root;P instanceof _&&P._handleAdd(this)},C.prototype.onRemove=function(R){var P=R.root;P instanceof _&&P._handleRemove(this),this.parent=null,this.resolved=!1},C.prototype.resolve=function(){return this.resolved?this:(this.root instanceof _&&(this.resolved=!0),this)},C.prototype.getOption=function(R){if(this.options)return this.options[R]},C.prototype.setOption=function(R,P,I){return(!I||!this.options||this.options[R]===void 0)&&((this.options||(this.options={}))[R]=P),this},C.prototype.setParsedOption=function(R,P,I){this.parsedOptions||(this.parsedOptions=[]);var E=this.parsedOptions;if(I){var B=E.find(function(L){return Object.prototype.hasOwnProperty.call(L,R)});if(B){var O=B[R];A.setProperty(O,I,P)}else B={},B[R]=A.setProperty({},I,P),E.push(B)}else{var G={};G[R]=P,E.push(G)}return this},C.prototype.setOptions=function(R,P){if(R)for(var I=Object.keys(R),E=0;E<I.length;++E)this.setOption(I[E],R[I[E]],P);return this},C.prototype.toString=function(){var R=this.constructor.className,P=this.fullName;return P.length?R+" "+P:R},C._configure=function(T){_=T},object}var _enum,hasRequired_enum;function require_enum(){if(hasRequired_enum)return _enum;hasRequired_enum=1,_enum=T;var A=requireObject();((T.prototype=Object.create(A.prototype)).constructor=T).className="Enum";var _=requireNamespace(),C=requireUtil();function T(R,P,I,E,B,O){if(A.call(this,R,I),P&&typeof P!="object")throw TypeError("values must be an object");if(this.valuesById={},this.values=Object.create(this.valuesById),this.comment=E,this.comments=B||{},this.valuesOptions=O,this.reserved=void 0,P)for(var G=Object.keys(P),L=0;L<G.length;++L)typeof P[G[L]]=="number"&&(this.valuesById[this.values[G[L]]=P[G[L]]]=G[L])}return T.fromJSON=function(P,I){var E=new T(P,I.values,I.options,I.comment,I.comments);return E.reserved=I.reserved,E},T.prototype.toJSON=function(P){var I=P?!!P.keepComments:!1;return C.toObject(["options",this.options,"valuesOptions",this.valuesOptions,"values",this.values,"reserved",this.reserved&&this.reserved.length?this.reserved:void 0,"comment",I?this.comment:void 0,"comments",I?this.comments:void 0])},T.prototype.add=function(P,I,E,B){if(!C.isString(P))throw TypeError("name must be a string");if(!C.isInteger(I))throw TypeError("id must be an integer");if(this.values[P]!==void 0)throw Error("duplicate name '"+P+"' in "+this);if(this.isReservedId(I))throw Error("id "+I+" is reserved in "+this);if(this.isReservedName(P))throw Error("name '"+P+"' is reserved in "+this);if(this.valuesById[I]!==void 0){if(!(this.options&&this.options.allow_alias))throw Error("duplicate id "+I+" in "+this);this.values[P]=I}else this.valuesById[this.values[P]=I]=P;return B&&(this.valuesOptions===void 0&&(this.valuesOptions={}),this.valuesOptions[P]=B||null),this.comments[P]=E||null,this},T.prototype.remove=function(P){if(!C.isString(P))throw TypeError("name must be a string");var I=this.values[P];if(I==null)throw Error("name '"+P+"' does not exist in "+this);return delete this.valuesById[I],delete this.values[P],delete this.comments[P],this.valuesOptions&&delete this.valuesOptions[P],this},T.prototype.isReservedId=function(P){return _.isReservedId(this.reserved,P)},T.prototype.isReservedName=function(P){return _.isReservedName(this.reserved,P)},_enum}var encoder_1,hasRequiredEncoder;function requireEncoder(){if(hasRequiredEncoder)return encoder_1;hasRequiredEncoder=1,encoder_1=R;var A=require_enum(),_=requireTypes(),C=requireUtil();function T(P,I,E,B){return I.resolvedType.group?P("types[%i].encode(%s,w.uint32(%i)).uint32(%i)",E,B,(I.id<<3|3)>>>0,(I.id<<3|4)>>>0):P("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()",E,B,(I.id<<3|2)>>>0)}function R(P){for(var I=C.codegen(["m","w"],P.name+"$encode")("if(!w)")("w=Writer.create()"),E,B,O=P.fieldsArray.slice().sort(C.compareFieldsById),E=0;E<O.length;++E){var G=O[E].resolve(),L=P._fieldsArray.indexOf(G),F=G.resolvedType instanceof A?"int32":G.type,D=_.basic[F];B="m"+C.safeProp(G.name),G.map?(I("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){",B,G.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){",B)("w.uint32(%i).fork().uint32(%i).%s(ks[i])",(G.id<<3|2)>>>0,8|_.mapKey[G.keyType],G.keyType),D===void 0?I("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()",L,B):I(".uint32(%i).%s(%s[ks[i]]).ldelim()",16|D,F,B),I("}")("}")):G.repeated?(I("if(%s!=null&&%s.length){",B,B),G.packed&&_.packed[F]!==void 0?I("w.uint32(%i).fork()",(G.id<<3|2)>>>0)("for(var i=0;i<%s.length;++i)",B)("w.%s(%s[i])",F,B)("w.ldelim()"):(I("for(var i=0;i<%s.length;++i)",B),D===void 0?T(I,G,L,B+"[i]"):I("w.uint32(%i).%s(%s[i])",(G.id<<3|D)>>>0,F,B)),I("}")):(G.optional&&I("if(%s!=null&&Object.hasOwnProperty.call(m,%j))",B,G.name),D===void 0?T(I,G,L,B):I("w.uint32(%i).%s(%s)",(G.id<<3|D)>>>0,F,B))}return I("return w")}return encoder_1}var hasRequiredIndexLight;function requireIndexLight(){if(hasRequiredIndexLight)return indexLight.exports;hasRequiredIndexLight=1;var A=indexLight.exports=requireIndexMinimal();A.build="light";function _(T,R,P){return typeof R=="function"?(P=R,R=new A.Root):R||(R=new A.Root),R.load(T,P)}A.load=_;function C(T,R){return R||(R=new A.Root),R.loadSync(T)}return A.loadSync=C,A.encoder=requireEncoder(),A.decoder=requireDecoder(),A.verifier=requireVerifier(),A.converter=requireConverter(),A.ReflectionObject=requireObject(),A.Namespace=requireNamespace(),A.Root=requireRoot(),A.Enum=require_enum(),A.Type=requireType(),A.Field=requireField(),A.OneOf=requireOneof(),A.MapField=requireMapfield(),A.Service=requireService(),A.Method=requireMethod(),A.Message=requireMessage(),A.wrappers=requireWrappers(),A.types=requireTypes(),A.util=requireUtil(),A.ReflectionObject._configure(A.Root),A.Namespace._configure(A.Type,A.Service,A.Enum),A.Root._configure(A.Type),A.Field._configure(A.Type),indexLight.exports}var tokenize_1,hasRequiredTokenize;function requireTokenize(){if(hasRequiredTokenize)return tokenize_1;hasRequiredTokenize=1,tokenize_1=G;var A=/[\s{}=;:[\],'"()<>]/g,_=/(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,C=/(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,T=/^ *[*/]+ */,R=/^\s*\*?\/*/,P=/\n/g,I=/\s/,E=/\\(.?)/g,B={0:"\0",r:"\r",n:`
`,t:"	"};function O(L){return L.replace(E,function(F,D){switch(D){case"\\":case"":return D;default:return B[D]||""}})}G.unescape=O;function G(L,F){L=L.toString();var D=0,q=L.length,U=1,V=0,W={},z=[],X=null;function Y(mt){return Error("illegal "+mt+" (line "+U+")")}function Q(){var mt=X==="'"?C:_;mt.lastIndex=D-1;var nt=mt.exec(L);if(!nt)throw Y("string");return D=mt.lastIndex,tt(X),X=null,O(nt[1])}function J(mt){return L.charAt(mt)}function Z(mt,nt,st){var xt={type:L.charAt(mt++),lineEmpty:!1,leading:st},dt;F?dt=2:dt=3;var yt=mt-dt,vt;do if(--yt<0||(vt=L.charAt(yt))===`
`){xt.lineEmpty=!0;break}while(vt===" "||vt==="	");for(var gt=L.substring(mt,nt).split(P),Ct=0;Ct<gt.length;++Ct)gt[Ct]=gt[Ct].replace(F?R:T,"").trim();xt.text=gt.join(`
`).trim(),W[U]=xt,V=U}function ut(mt){var nt=rt(mt),st=L.substring(mt,nt),xt=/^\s*\/\//.test(st);return xt}function rt(mt){for(var nt=mt;nt<q&&J(nt)!==`
`;)nt++;return nt}function et(){if(z.length>0)return z.shift();if(X)return Q();var mt,nt,st,xt,dt,yt=D===0;do{if(D===q)return null;for(mt=!1;I.test(st=J(D));)if(st===`
`&&(yt=!0,++U),++D===q)return null;if(J(D)==="/"){if(++D===q)throw Y("comment");if(J(D)==="/")if(F){if(xt=D,dt=!1,ut(D-1)){dt=!0;do if(D=rt(D),D===q||(D++,!yt))break;while(ut(D))}else D=Math.min(q,rt(D)+1);dt&&(Z(xt,D,yt),yt=!0),U++,mt=!0}else{for(dt=J(xt=D+1)==="/";J(++D)!==`
`;)if(D===q)return null;++D,dt&&(Z(xt,D-1,yt),yt=!0),++U,mt=!0}else if((st=J(D))==="*"){xt=D+1,dt=F||J(xt)==="*";do{if(st===`
`&&++U,++D===q)throw Y("comment");nt=st,st=J(D)}while(nt!=="*"||st!=="/");++D,dt&&(Z(xt,D-2,yt),yt=!0),mt=!0}else return"/"}}while(mt);var vt=D;A.lastIndex=0;var gt=A.test(J(vt++));if(!gt)for(;vt<q&&!A.test(J(vt));)++vt;var Ct=L.substring(D,D=vt);return(Ct==='"'||Ct==="'")&&(X=Ct),Ct}function tt(mt){z.push(mt)}function lt(){if(!z.length){var mt=et();if(mt===null)return null;tt(mt)}return z[0]}function ht(mt,nt){var st=lt(),xt=st===mt;if(xt)return et(),!0;if(!nt)throw Y("token '"+st+"', '"+mt+"' expected");return!1}function it(mt){var nt=null,st;return mt===void 0?(st=W[U-1],delete W[U-1],st&&(F||st.type==="*"||st.lineEmpty)&&(nt=st.leading?st.text:null)):(V<mt&&lt(),st=W[mt],delete W[mt],st&&!st.lineEmpty&&(F||st.type==="/")&&(nt=st.leading?null:st.text)),nt}return Object.defineProperty({next:et,peek:lt,push:tt,skip:ht,cmnt:it},"line",{get:function(){return U}})}return tokenize_1}var parse_1,hasRequiredParse;function requireParse(){if(hasRequiredParse)return parse_1;hasRequiredParse=1,parse_1=Q,Q.filename=null,Q.defaults={keepCase:!1};var A=requireTokenize(),_=requireRoot(),C=requireType(),T=requireField(),R=requireMapfield(),P=requireOneof(),I=require_enum(),E=requireService(),B=requireMethod(),O=requireTypes(),G=requireUtil(),L=/^[1-9][0-9]*$/,F=/^-?[1-9][0-9]*$/,D=/^0[x][0-9a-fA-F]+$/,q=/^-?0[x][0-9a-fA-F]+$/,U=/^0[0-7]+$/,V=/^-?0[0-7]+$/,W=/^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/,z=/^[a-zA-Z_][a-zA-Z_0-9]*$/,X=/^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/,Y=/^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;function Q(J,Z,ut){Z instanceof _||(ut=Z,Z=new _),ut||(ut=Q.defaults);var rt=ut.preferTrailingComment||!1,et=A(J,ut.alternateCommentMode||!1),tt=et.next,lt=et.push,ht=et.peek,it=et.skip,mt=et.cmnt,nt=!0,st,xt,dt,yt,vt=!1,gt=Z,Ct=ut.keepCase?function(at){return at}:G.camelCase;function ft(at,ot,ct){var bt=Q.filename;return ct||(Q.filename=null),Error("illegal "+(ot||"token")+" '"+at+"' ("+(bt?bt+", ":"")+"line "+et.line+")")}function At(){var at=[],ot;do{if((ot=tt())!=='"'&&ot!=="'")throw ft(ot);at.push(tt()),it(ot),ot=ht()}while(ot==='"'||ot==="'");return at.join("")}function Mt(at){var ot=tt();switch(ot){case"'":case'"':return lt(ot),At();case"true":case"TRUE":return!0;case"false":case"FALSE":return!1}try{return kt(ot,!0)}catch{if(X.test(ot))return ot;throw ft(ot,"value")}}function Tt(at,ot){var ct,bt;do ot&&((ct=ht())==='"'||ct==="'")?at.push(At()):at.push([bt=Rt(tt()),it("to",!0)?Rt(tt()):bt]);while(it(",",!0));var _t={options:void 0};_t.setOption=function(St,Pt){this.options===void 0&&(this.options={}),this.options[St]=Pt},It(_t,function(Pt){if(Pt==="option")Ut(_t,Pt),it(";");else throw ft(Pt)},function(){Xt(_t)})}function kt(at,ot){var ct=1;switch(at.charAt(0)==="-"&&(ct=-1,at=at.substring(1)),at){case"inf":case"INF":case"Inf":return ct*(1/0);case"nan":case"NAN":case"Nan":case"NaN":return NaN;case"0":return 0}if(L.test(at))return ct*parseInt(at,10);if(D.test(at))return ct*parseInt(at,16);if(U.test(at))return ct*parseInt(at,8);if(W.test(at))return ct*parseFloat(at);throw ft(at,"number",ot)}function Rt(at,ot){switch(at){case"max":case"MAX":case"Max":return 536870911;case"0":return 0}if(!ot&&at.charAt(0)==="-")throw ft(at,"id");if(F.test(at))return parseInt(at,10);if(q.test(at))return parseInt(at,16);if(V.test(at))return parseInt(at,8);throw ft(at,"id")}function Bt(){if(st!==void 0)throw ft("package");if(st=tt(),!X.test(st))throw ft(st,"name");gt=gt.define(st),it(";")}function Dt(){var at=ht(),ot;switch(at){case"weak":ot=dt||(dt=[]),tt();break;case"public":tt();default:ot=xt||(xt=[]);break}at=At(),it(";"),ot.push(at)}function Et(){if(it("="),yt=At(),vt=yt==="proto3",!vt&&yt!=="proto2")throw ft(yt,"syntax");Z.setOption("syntax",yt),it(";")}function Gt(at,ot){switch(ot){case"option":return Ut(at,ot),it(";"),!0;case"message":return Nt(at,ot),!0;case"enum":return ae(at,ot),!0;case"service":return Ce(at,ot),!0;case"extend":return Me(at,ot),!0}return!1}function It(at,ot,ct){var bt=et.line;if(at&&(typeof at.comment!="string"&&(at.comment=mt()),at.filename=Q.filename),it("{",!0)){for(var _t;(_t=tt())!=="}";)ot(_t);it(";",!0)}else ct&&ct(),it(";"),at&&(typeof at.comment!="string"||rt)&&(at.comment=mt(bt)||at.comment)}function Nt(at,ot){if(!z.test(ot=tt()))throw ft(ot,"type name");var ct=new C(ot);It(ct,function(_t){if(!Gt(ct,_t))switch(_t){case"map":Qt(ct);break;case"required":case"repeated":Lt(ct,_t);break;case"optional":vt?Lt(ct,"proto3_optional"):Lt(ct,"optional");break;case"oneof":oe(ct,_t);break;case"extensions":Tt(ct.extensions||(ct.extensions=[]));break;case"reserved":Tt(ct.reserved||(ct.reserved=[]),!0);break;default:if(!vt||!X.test(_t))throw ft(_t);lt(_t),Lt(ct,"optional");break}}),at.add(ct)}function Lt(at,ot,ct){var bt=tt();if(bt==="group"){$t(at,ot);return}for(;bt.endsWith(".")||ht().startsWith(".");)bt+=tt();if(!X.test(bt))throw ft(bt,"type");var _t=tt();if(!z.test(_t))throw ft(_t,"name");_t=Ct(_t),it("=");var St=new T(_t,Rt(tt()),bt,ot,ct);if(It(St,function(Ft){if(Ft==="option")Ut(St,Ft),it(";");else throw ft(Ft)},function(){Xt(St)}),ot==="proto3_optional"){var Pt=new P("_"+_t);St.setOption("proto3_optional",!0),Pt.add(St),at.add(Pt)}else at.add(St);!vt&&St.repeated&&(O.packed[bt]!==void 0||O.basic[bt]===void 0)&&St.setOption("packed",!1,!0)}function $t(at,ot){var ct=tt();if(!z.test(ct))throw ft(ct,"name");var bt=G.lcFirst(ct);ct===bt&&(ct=G.ucFirst(ct)),it("=");var _t=Rt(tt()),St=new C(ct);St.group=!0;var Pt=new T(bt,_t,ct,ot);Pt.filename=Q.filename,It(St,function(Ft){switch(Ft){case"option":Ut(St,Ft),it(";");break;case"required":case"repeated":Lt(St,Ft);break;case"optional":vt?Lt(St,"proto3_optional"):Lt(St,"optional");break;case"message":Nt(St,Ft);break;case"enum":ae(St,Ft);break;default:throw ft(Ft)}}),at.add(St).add(Pt)}function Qt(at){it("<");var ot=tt();if(O.mapKey[ot]===void 0)throw ft(ot,"type");it(",");var ct=tt();if(!X.test(ct))throw ft(ct,"type");it(">");var bt=tt();if(!z.test(bt))throw ft(bt,"name");it("=");var _t=new R(Ct(bt),Rt(tt()),ot,ct);It(_t,function(Pt){if(Pt==="option")Ut(_t,Pt),it(";");else throw ft(Pt)},function(){Xt(_t)}),at.add(_t)}function oe(at,ot){if(!z.test(ot=tt()))throw ft(ot,"name");var ct=new P(Ct(ot));It(ct,function(_t){_t==="option"?(Ut(ct,_t),it(";")):(lt(_t),Lt(ct,"optional"))}),at.add(ct)}function ae(at,ot){if(!z.test(ot=tt()))throw ft(ot,"name");var ct=new I(ot);It(ct,function(_t){switch(_t){case"option":Ut(ct,_t),it(";");break;case"reserved":Tt(ct.reserved||(ct.reserved=[]),!0);break;default:we(ct,_t)}}),at.add(ct)}function we(at,ot){if(!z.test(ot))throw ft(ot,"name");it("=");var ct=Rt(tt(),!0),bt={options:void 0};bt.setOption=function(_t,St){this.options===void 0&&(this.options={}),this.options[_t]=St},It(bt,function(St){if(St==="option")Ut(bt,St),it(";");else throw ft(St)},function(){Xt(bt)}),at.add(ot,ct,bt.comment,bt.options)}function Ut(at,ot){var ct=it("(",!0);if(!X.test(ot=tt()))throw ft(ot,"name");var bt=ot,_t=bt,St;ct&&(it(")"),bt="("+bt+")",_t=bt,ot=ht(),Y.test(ot)&&(St=ot.slice(1),bt+=ot,tt())),it("=");var Pt=le(at,bt);ve(at,_t,Pt,St)}function le(at,ot){if(it("{",!0)){for(var ct={};!it("}",!0);){if(!z.test(Ot=tt()))throw ft(Ot,"name");if(Ot===null)throw ft(Ot,"end of input");var bt,_t=Ot;if(it(":",!0),ht()==="{")bt=le(at,ot+"."+Ot);else if(ht()==="["){bt=[];var St;if(it("[",!0)){do St=Mt(),bt.push(St);while(it(",",!0));it("]"),typeof St<"u"&&Zt(at,ot+"."+Ot,St)}}else bt=Mt(),Zt(at,ot+"."+Ot,bt);var Pt=ct[_t];Pt&&(bt=[].concat(Pt).concat(bt)),ct[_t]=bt,it(",",!0),it(";",!0)}return ct}var Wt=Mt();return Zt(at,ot,Wt),Wt}function Zt(at,ot,ct){at.setOption&&at.setOption(ot,ct)}function ve(at,ot,ct,bt){at.setParsedOption&&at.setParsedOption(ot,ct,bt)}function Xt(at){if(it("[",!0)){do Ut(at,"option");while(it(",",!0));it("]")}return at}function Ce(at,ot){if(!z.test(ot=tt()))throw ft(ot,"service name");var ct=new E(ot);It(ct,function(_t){if(!Gt(ct,_t))if(_t==="rpc")Se(ct,_t);else throw ft(_t)}),at.add(ct)}function Se(at,ot){var ct=mt(),bt=ot;if(!z.test(ot=tt()))throw ft(ot,"name");var _t=ot,St,Pt,Wt,Ft;if(it("("),it("stream",!0)&&(Pt=!0),!X.test(ot=tt())||(St=ot,it(")"),it("returns"),it("("),it("stream",!0)&&(Ft=!0),!X.test(ot=tt())))throw ft(ot);Wt=ot,it(")");var Yt=new B(_t,bt,St,Wt,Pt,Ft);Yt.comment=ct,It(Yt,function(te){if(te==="option")Ut(Yt,te),it(";");else throw ft(te)}),at.add(Yt)}function Me(at,ot){if(!X.test(ot=tt()))throw ft(ot,"reference");var ct=ot;It(null,function(_t){switch(_t){case"required":case"repeated":Lt(at,_t,ct);break;case"optional":vt?Lt(at,"proto3_optional",ct):Lt(at,"optional",ct);break;default:if(!vt||!X.test(_t))throw ft(_t);lt(_t),Lt(at,"optional",ct);break}})}for(var Ot;(Ot=tt())!==null;)switch(Ot){case"package":if(!nt)throw ft(Ot);Bt();break;case"import":if(!nt)throw ft(Ot);Dt();break;case"syntax":if(!nt)throw ft(Ot);Et();break;case"option":Ut(gt,Ot),it(";");break;default:if(Gt(gt,Ot)){nt=!1;continue}throw ft(Ot)}return Q.filename=null,{package:st,imports:xt,weakImports:dt,syntax:yt,root:Z}}return parse_1}var common_1,hasRequiredCommon;function requireCommon(){if(hasRequiredCommon)return common_1;hasRequiredCommon=1,common_1=_;var A=/\/|\./;function _(T,R){A.test(T)||(T="google/protobuf/"+T+".proto",R={nested:{google:{nested:{protobuf:{nested:R}}}}}),_[T]=R}_("any",{Any:{fields:{type_url:{type:"string",id:1},value:{type:"bytes",id:2}}}});var C;return _("duration",{Duration:C={fields:{seconds:{type:"int64",id:1},nanos:{type:"int32",id:2}}}}),_("timestamp",{Timestamp:C}),_("empty",{Empty:{fields:{}}}),_("struct",{Struct:{fields:{fields:{keyType:"string",type:"Value",id:1}}},Value:{oneofs:{kind:{oneof:["nullValue","numberValue","stringValue","boolValue","structValue","listValue"]}},fields:{nullValue:{type:"NullValue",id:1},numberValue:{type:"double",id:2},stringValue:{type:"string",id:3},boolValue:{type:"bool",id:4},structValue:{type:"Struct",id:5},listValue:{type:"ListValue",id:6}}},NullValue:{values:{NULL_VALUE:0}},ListValue:{fields:{values:{rule:"repeated",type:"Value",id:1}}}}),_("wrappers",{DoubleValue:{fields:{value:{type:"double",id:1}}},FloatValue:{fields:{value:{type:"float",id:1}}},Int64Value:{fields:{value:{type:"int64",id:1}}},UInt64Value:{fields:{value:{type:"uint64",id:1}}},Int32Value:{fields:{value:{type:"int32",id:1}}},UInt32Value:{fields:{value:{type:"uint32",id:1}}},BoolValue:{fields:{value:{type:"bool",id:1}}},StringValue:{fields:{value:{type:"string",id:1}}},BytesValue:{fields:{value:{type:"bytes",id:1}}}}),_("field_mask",{FieldMask:{fields:{paths:{rule:"repeated",type:"string",id:1}}}}),_.get=function(R){return _[R]||null},common_1}var hasRequiredSrc;function requireSrc(){if(hasRequiredSrc)return src.exports;hasRequiredSrc=1;var A=src.exports=requireIndexLight();return A.build="full",A.tokenize=requireTokenize(),A.parse=requireParse(),A.common=requireCommon(),A.Root._configure(A.Type,A.parse,A.common),src.exports}var protobufjs,hasRequiredProtobufjs;function requireProtobufjs(){return hasRequiredProtobufjs||(hasRequiredProtobufjs=1,protobufjs=requireSrc()),protobufjs}var protobufjsExports=requireProtobufjs();const rawSources=Object.assign({"/protocol/chat.proto":__vite_glob_0_0,"/protocol/common.proto":__vite_glob_0_1,"/protocol/cowboy.proto":__vite_glob_0_2,"/protocol/friends.proto":__vite_glob_0_3,"/protocol/hall.proto":__vite_glob_0_4,"/protocol/login.proto":__vite_glob_0_5,"/protocol/mtt.proto":__vite_glob_0_6,"/protocol/notice.proto":__vite_glob_0_7,"/protocol/opsconfig.proto":__vite_glob_0_8,"/protocol/ping.proto":__vite_glob_0_9,"/protocol/role.proto":__vite_glob_0_10,"/protocol/rooms.proto":__vite_glob_0_11,"/protocol/statistics.proto":__vite_glob_0_12,"/protocol/store.proto":__vite_glob_0_13,"/protocol/texas.proto":__vite_glob_0_14}),byName={};for(const[A,_]of Object.entries(rawSources)){const C=A.split("/").pop();C&&(byName[C]=_)}let codecPromise=null;function ensureCodec(){if(codecPromise)return codecPromise;const A=new protobufjsExports.Root;return A.resolvePath=(_,C)=>C.split("/").pop()??C,A.fetch=(_,C)=>{const T=byName[_.split("/").pop()??_];T==null?C(new Error(`proto 未找到: ${_}`)):C(null,T)},codecPromise=A.load(Object.keys(byName),{keepCase:!0}).then(_=>{const C=new Map,T=R=>{for(const P of R.nestedArray){if(P instanceof protobufjsExports.Type){const I=P.fullName.replace(/^\./,"");C.set(crc32(I),P)}P instanceof protobufjsExports.Namespace&&T(P)}};return T(_),{encode(R,P){const I=_.lookupType(R);return I.encode(I.create(P)).finish()},decode(R,P){const I=C.get(R);if(!I)return null;const E=I.decode(P);return{route:I.fullName.replace(/^\./,""),message:E}}}}),codecPromise}class GameNetClient{constructor(_){pt(this,"ws",null);pt(this,"decoder",new FrameDecoder);pt(this,"handlers",new Set);pt(this,"outbox",[]);pt(this,"session",0);pt(this,"open",!1);this.opts=_}connect(){ensureCodec();const _=this.opts.url.includes("?")?"&":"?",C=new WebSocket(`${this.opts.url}${_}token=${encodeURIComponent(this.opts.token)}`);C.binaryType="arraybuffer",C.onopen=()=>{var T,R;this.open=!0,this.flush(),(R=(T=this.opts).onOpen)==null||R.call(T)},C.onmessage=T=>this.onData(T.data),C.onclose=T=>{var R,P;this.open=!1,(P=(R=this.opts).onClose)==null||P.call(R,T)},C.onerror=T=>{var R,P;return(P=(R=this.opts).onError)==null?void 0:P.call(R,T)},this.ws=C,this.opts.loginPayload&&this.send("login.MsgLogin",this.opts.loginPayload)}send(_,C){ensureCodec().then(T=>{const R=T.encode(_,C??{});this.outbox.push(encodeUplink(this.nextSession(),protoIdOf(_),R)),this.flush()}).catch(T=>{})}subscribe(_){return this.handlers.add(_),()=>this.handlers.delete(_)}close(){var _;this.handlers.clear(),this.decoder.reset(),this.outbox.length=0,this.open=!1,(_=this.ws)==null||_.close(),this.ws=null}onData(_){const C=this.decoder.push(_);C.length!==0&&ensureCodec().then(T=>{for(const R of C){const P=T.decode(R.protoId,R.body);P&&this.handlers.forEach(I=>I(P.route,P.message))}})}flush(){var _;if(!(!this.open||((_=this.ws)==null?void 0:_.readyState)!==WebSocket.OPEN)){for(const C of this.outbox)this.ws.send(C);this.outbox.length=0}}nextSession(){return this.session=this.session+1>>>0,this.session}}function resolveGameConnection(){var I,E,B;const _=`${"http://42.194.144.73:3250".replace(/^http/,"ws").replace(/\/+$/,"")}/enterroom`,C=store.getState(),T=((E=(I=C.auth)==null?void 0:I.verifyData)==null?void 0:E.token)??"";if(!T)return null;const R=((B=C.role)==null?void 0:B.playerid)??0;return{url:_,token:T,loginPayload:{token:T,playerid:R,session:0,platform:"web",clientid:""}}}var ExtensionType=(A=>(A.Application="application",A.WebGLPipes="webgl-pipes",A.WebGLPipesAdaptor="webgl-pipes-adaptor",A.WebGLSystem="webgl-system",A.WebGPUPipes="webgpu-pipes",A.WebGPUPipesAdaptor="webgpu-pipes-adaptor",A.WebGPUSystem="webgpu-system",A.CanvasSystem="canvas-system",A.CanvasPipesAdaptor="canvas-pipes-adaptor",A.CanvasPipes="canvas-pipes",A.Asset="asset",A.LoadParser="load-parser",A.ResolveParser="resolve-parser",A.CacheParser="cache-parser",A.DetectionParser="detection-parser",A.MaskEffect="mask-effect",A.BlendMode="blend-mode",A.TextureSource="texture-source",A.TextureUploaderWebGL="texture-uploader-webgl",A.TextureUploaderWebGPU="texture-uploader-webgpu",A.Environment="environment",A.ShapeBuilder="shape-builder",A.Batcher="batcher",A))(ExtensionType||{});const normalizeExtension=A=>{if(typeof A=="function"||typeof A=="object"&&A.extension){if(!A.extension)throw new Error("Extension class must have an extension object");A={...typeof A.extension!="object"?{type:A.extension}:A.extension,ref:A}}if(typeof A=="object")A={...A};else throw new Error("Invalid extension type");return typeof A.type=="string"&&(A.type=[A.type]),A},normalizeExtensionPriority=(A,_)=>normalizeExtension(A).priority??_,extensions={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...A){return A.map(normalizeExtension).forEach(_=>{_.type.forEach(C=>{var T,R;return(R=(T=this._removeHandlers)[C])==null?void 0:R.call(T,_)})}),this},add(...A){return A.map(normalizeExtension).forEach(_=>{_.type.forEach(C=>{var P,I;const T=this._addHandlers,R=this._queue;T[C]?(I=T[C])==null||I.call(T,_):(R[C]=R[C]||[],(P=R[C])==null||P.push(_))})}),this},handle(A,_,C){var I;const T=this._addHandlers,R=this._removeHandlers;if(T[A]||R[A])throw new Error(`Extension type ${A} already has a handler`);T[A]=_,R[A]=C;const P=this._queue;return P[A]&&((I=P[A])==null||I.forEach(E=>_(E)),delete P[A]),this},handleByMap(A,_){return this.handle(A,C=>{C.name&&(_[C.name]=C.ref)},C=>{C.name&&delete _[C.name]})},handleByNamedList(A,_,C=-1){return this.handle(A,T=>{_.findIndex(P=>P.name===T.name)>=0||(_.push({name:T.name,value:T.ref}),_.sort((P,I)=>normalizeExtensionPriority(I.value,C)-normalizeExtensionPriority(P.value,C)))},T=>{const R=_.findIndex(P=>P.name===T.name);R!==-1&&_.splice(R,1)})},handleByList(A,_,C=-1){return this.handle(A,T=>{_.includes(T.ref)||(_.push(T.ref),_.sort((R,P)=>normalizeExtensionPriority(P,C)-normalizeExtensionPriority(R,C)))},T=>{const R=_.indexOf(T.ref);R!==-1&&_.splice(R,1)})},mixin(A,..._){for(const C of _)Object.defineProperties(A.prototype,Object.getOwnPropertyDescriptors(C))}},browserExt={extension:{type:ExtensionType.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await __vitePreload(()=>import("./browserAll-QK5P-mZk.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]))}},webworkerExt={extension:{type:ExtensionType.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await __vitePreload(()=>import("./webworkerAll-BND_8MSO.js"),__vite__mapDeps([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]))}};class ObservablePoint{constructor(_,C,T){this._x=C||0,this._y=T||0,this._observer=_}clone(_){return new ObservablePoint(_??this._observer,this._x,this._y)}set(_=0,C=_){return(this._x!==_||this._y!==C)&&(this._x=_,this._y=C,this._observer._onUpdate(this)),this}copyFrom(_){return(this._x!==_.x||this._y!==_.y)&&(this._x=_.x,this._y=_.y,this._observer._onUpdate(this)),this}copyTo(_){return _.set(this._x,this._y),_}equals(_){return _.x===this._x&&_.y===this._y}toString(){return`[pixi.js/math:ObservablePoint x=${this._x} y=${this._y} scope=${this._observer}]`}get x(){return this._x}set x(_){this._x!==_&&(this._x=_,this._observer._onUpdate(this))}get y(){return this._y}set y(_){this._y!==_&&(this._y=_,this._observer._onUpdate(this))}}var eventemitter3={exports:{}},hasRequiredEventemitter3;function requireEventemitter3(){return hasRequiredEventemitter3||(hasRequiredEventemitter3=1,function(A){var _=Object.prototype.hasOwnProperty,C="~";function T(){}Object.create&&(T.prototype=Object.create(null),new T().__proto__||(C=!1));function R(B,O,G){this.fn=B,this.context=O,this.once=G||!1}function P(B,O,G,L,F){if(typeof G!="function")throw new TypeError("The listener must be a function");var D=new R(G,L||B,F),q=C?C+O:O;return B._events[q]?B._events[q].fn?B._events[q]=[B._events[q],D]:B._events[q].push(D):(B._events[q]=D,B._eventsCount++),B}function I(B,O){--B._eventsCount===0?B._events=new T:delete B._events[O]}function E(){this._events=new T,this._eventsCount=0}E.prototype.eventNames=function(){var O=[],G,L;if(this._eventsCount===0)return O;for(L in G=this._events)_.call(G,L)&&O.push(C?L.slice(1):L);return Object.getOwnPropertySymbols?O.concat(Object.getOwnPropertySymbols(G)):O},E.prototype.listeners=function(O){var G=C?C+O:O,L=this._events[G];if(!L)return[];if(L.fn)return[L.fn];for(var F=0,D=L.length,q=new Array(D);F<D;F++)q[F]=L[F].fn;return q},E.prototype.listenerCount=function(O){var G=C?C+O:O,L=this._events[G];return L?L.fn?1:L.length:0},E.prototype.emit=function(O,G,L,F,D,q){var U=C?C+O:O;if(!this._events[U])return!1;var V=this._events[U],W=arguments.length,z,X;if(V.fn){switch(V.once&&this.removeListener(O,V.fn,void 0,!0),W){case 1:return V.fn.call(V.context),!0;case 2:return V.fn.call(V.context,G),!0;case 3:return V.fn.call(V.context,G,L),!0;case 4:return V.fn.call(V.context,G,L,F),!0;case 5:return V.fn.call(V.context,G,L,F,D),!0;case 6:return V.fn.call(V.context,G,L,F,D,q),!0}for(X=1,z=new Array(W-1);X<W;X++)z[X-1]=arguments[X];V.fn.apply(V.context,z)}else{var Y=V.length,Q;for(X=0;X<Y;X++)switch(V[X].once&&this.removeListener(O,V[X].fn,void 0,!0),W){case 1:V[X].fn.call(V[X].context);break;case 2:V[X].fn.call(V[X].context,G);break;case 3:V[X].fn.call(V[X].context,G,L);break;case 4:V[X].fn.call(V[X].context,G,L,F);break;default:if(!z)for(Q=1,z=new Array(W-1);Q<W;Q++)z[Q-1]=arguments[Q];V[X].fn.apply(V[X].context,z)}}return!0},E.prototype.on=function(O,G,L){return P(this,O,G,L,!1)},E.prototype.once=function(O,G,L){return P(this,O,G,L,!0)},E.prototype.removeListener=function(O,G,L,F){var D=C?C+O:O;if(!this._events[D])return this;if(!G)return I(this,D),this;var q=this._events[D];if(q.fn)q.fn===G&&(!F||q.once)&&(!L||q.context===L)&&I(this,D);else{for(var U=0,V=[],W=q.length;U<W;U++)(q[U].fn!==G||F&&!q[U].once||L&&q[U].context!==L)&&V.push(q[U]);V.length?this._events[D]=V.length===1?V[0]:V:I(this,D)}return this},E.prototype.removeAllListeners=function(O){var G;return O?(G=C?C+O:O,this._events[G]&&I(this,G)):(this._events=new T,this._eventsCount=0),this},E.prototype.off=E.prototype.removeListener,E.prototype.addListener=E.prototype.on,E.prefixed=C,E.EventEmitter=E,A.exports=E}(eventemitter3)),eventemitter3.exports}var eventemitter3Exports=requireEventemitter3();const EventEmitter=getDefaultExportFromCjs(eventemitter3Exports),PI_2=Math.PI*2,RAD_TO_DEG=180/Math.PI,DEG_TO_RAD=Math.PI/180;class Point{constructor(_=0,C=0){this.x=0,this.y=0,this.x=_,this.y=C}clone(){return new Point(this.x,this.y)}copyFrom(_){return this.set(_.x,_.y),this}copyTo(_){return _.set(this.x,this.y),_}equals(_){return _.x===this.x&&_.y===this.y}set(_=0,C=_){return this.x=_,this.y=C,this}toString(){return`[pixi.js/math:Point x=${this.x} y=${this.y}]`}static get shared(){return tempPoint.x=0,tempPoint.y=0,tempPoint}}const tempPoint=new Point;class Matrix{constructor(_=1,C=0,T=0,R=1,P=0,I=0){this.array=null,this.a=_,this.b=C,this.c=T,this.d=R,this.tx=P,this.ty=I}fromArray(_){this.a=_[0],this.b=_[1],this.c=_[3],this.d=_[4],this.tx=_[2],this.ty=_[5]}set(_,C,T,R,P,I){return this.a=_,this.b=C,this.c=T,this.d=R,this.tx=P,this.ty=I,this}toArray(_,C){this.array||(this.array=new Float32Array(9));const T=C||this.array;return _?(T[0]=this.a,T[1]=this.b,T[2]=0,T[3]=this.c,T[4]=this.d,T[5]=0,T[6]=this.tx,T[7]=this.ty,T[8]=1):(T[0]=this.a,T[1]=this.c,T[2]=this.tx,T[3]=this.b,T[4]=this.d,T[5]=this.ty,T[6]=0,T[7]=0,T[8]=1),T}apply(_,C){C=C||new Point;const T=_.x,R=_.y;return C.x=this.a*T+this.c*R+this.tx,C.y=this.b*T+this.d*R+this.ty,C}applyInverse(_,C){C=C||new Point;const T=this.a,R=this.b,P=this.c,I=this.d,E=this.tx,B=this.ty,O=1/(T*I+P*-R),G=_.x,L=_.y;return C.x=I*O*G+-P*O*L+(B*P-E*I)*O,C.y=T*O*L+-R*O*G+(-B*T+E*R)*O,C}translate(_,C){return this.tx+=_,this.ty+=C,this}scale(_,C){return this.a*=_,this.d*=C,this.c*=_,this.b*=C,this.tx*=_,this.ty*=C,this}rotate(_){const C=Math.cos(_),T=Math.sin(_),R=this.a,P=this.c,I=this.tx;return this.a=R*C-this.b*T,this.b=R*T+this.b*C,this.c=P*C-this.d*T,this.d=P*T+this.d*C,this.tx=I*C-this.ty*T,this.ty=I*T+this.ty*C,this}append(_){const C=this.a,T=this.b,R=this.c,P=this.d;return this.a=_.a*C+_.b*R,this.b=_.a*T+_.b*P,this.c=_.c*C+_.d*R,this.d=_.c*T+_.d*P,this.tx=_.tx*C+_.ty*R+this.tx,this.ty=_.tx*T+_.ty*P+this.ty,this}appendFrom(_,C){const T=_.a,R=_.b,P=_.c,I=_.d,E=_.tx,B=_.ty,O=C.a,G=C.b,L=C.c,F=C.d;return this.a=T*O+R*L,this.b=T*G+R*F,this.c=P*O+I*L,this.d=P*G+I*F,this.tx=E*O+B*L+C.tx,this.ty=E*G+B*F+C.ty,this}setTransform(_,C,T,R,P,I,E,B,O){return this.a=Math.cos(E+O)*P,this.b=Math.sin(E+O)*P,this.c=-Math.sin(E-B)*I,this.d=Math.cos(E-B)*I,this.tx=_-(T*this.a+R*this.c),this.ty=C-(T*this.b+R*this.d),this}prepend(_){const C=this.tx;if(_.a!==1||_.b!==0||_.c!==0||_.d!==1){const T=this.a,R=this.c;this.a=T*_.a+this.b*_.c,this.b=T*_.b+this.b*_.d,this.c=R*_.a+this.d*_.c,this.d=R*_.b+this.d*_.d}return this.tx=C*_.a+this.ty*_.c+_.tx,this.ty=C*_.b+this.ty*_.d+_.ty,this}decompose(_){const C=this.a,T=this.b,R=this.c,P=this.d,I=_.pivot,E=-Math.atan2(-R,P),B=Math.atan2(T,C),O=Math.abs(E+B);return O<1e-5||Math.abs(PI_2-O)<1e-5?(_.rotation=B,_.skew.x=_.skew.y=0):(_.rotation=0,_.skew.x=E,_.skew.y=B),_.scale.x=Math.sqrt(C*C+T*T),_.scale.y=Math.sqrt(R*R+P*P),_.position.x=this.tx+(I.x*C+I.y*R),_.position.y=this.ty+(I.x*T+I.y*P),_}invert(){const _=this.a,C=this.b,T=this.c,R=this.d,P=this.tx,I=_*R-C*T;return this.a=R/I,this.b=-C/I,this.c=-T/I,this.d=_/I,this.tx=(T*this.ty-R*P)/I,this.ty=-(_*this.ty-C*P)/I,this}isIdentity(){return this.a===1&&this.b===0&&this.c===0&&this.d===1&&this.tx===0&&this.ty===0}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){const _=new Matrix;return _.a=this.a,_.b=this.b,_.c=this.c,_.d=this.d,_.tx=this.tx,_.ty=this.ty,_}copyTo(_){return _.a=this.a,_.b=this.b,_.c=this.c,_.d=this.d,_.tx=this.tx,_.ty=this.ty,_}copyFrom(_){return this.a=_.a,this.b=_.b,this.c=_.c,this.d=_.d,this.tx=_.tx,this.ty=_.ty,this}equals(_){return _.a===this.a&&_.b===this.b&&_.c===this.c&&_.d===this.d&&_.tx===this.tx&&_.ty===this.ty}toString(){return`[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`}static get IDENTITY(){return identityMatrix$1.identity()}static get shared(){return tempMatrix$3.identity()}}const tempMatrix$3=new Matrix,identityMatrix$1=new Matrix,ux=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],uy=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],vx=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],vy=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],rotationCayley=[],rotationMatrices=[],signum=Math.sign;function init(){for(let A=0;A<16;A++){const _=[];rotationCayley.push(_);for(let C=0;C<16;C++){const T=signum(ux[A]*ux[C]+vx[A]*uy[C]),R=signum(uy[A]*ux[C]+vy[A]*uy[C]),P=signum(ux[A]*vx[C]+vx[A]*vy[C]),I=signum(uy[A]*vx[C]+vy[A]*vy[C]);for(let E=0;E<16;E++)if(ux[E]===T&&uy[E]===R&&vx[E]===P&&vy[E]===I){_.push(E);break}}}for(let A=0;A<16;A++){const _=new Matrix;_.set(ux[A],uy[A],vx[A],vy[A],0,0),rotationMatrices.push(_)}}init();const groupD8={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:A=>ux[A],uY:A=>uy[A],vX:A=>vx[A],vY:A=>vy[A],inv:A=>A&8?A&15:-A&7,add:(A,_)=>rotationCayley[A][_],sub:(A,_)=>rotationCayley[A][groupD8.inv(_)],rotate180:A=>A^4,isVertical:A=>(A&3)===2,byDirection:(A,_)=>Math.abs(A)*2<=Math.abs(_)?_>=0?groupD8.S:groupD8.N:Math.abs(_)*2<=Math.abs(A)?A>0?groupD8.E:groupD8.W:_>0?A>0?groupD8.SE:groupD8.SW:A>0?groupD8.NE:groupD8.NW,matrixAppendRotationInv:(A,_,C=0,T=0,R=0,P=0)=>{const I=rotationMatrices[groupD8.inv(_)],E=I.a,B=I.b,O=I.c,G=I.d,L=C-Math.min(0,E*R,O*P,E*R+O*P),F=T-Math.min(0,B*R,G*P,B*R+G*P),D=A.a,q=A.b,U=A.c,V=A.d;A.a=E*D+B*U,A.b=E*q+B*V,A.c=O*D+G*U,A.d=O*q+G*V,A.tx=L*D+F*U+A.tx,A.ty=L*q+F*V+A.ty},transformRectCoords:(A,_,C,T)=>{const{x:R,y:P,width:I,height:E}=A,{x:B,y:O,width:G,height:L}=_;return C===groupD8.E?(T.set(R+B,P+O,I,E),T):C===groupD8.S?T.set(G-P-E+B,R+O,E,I):C===groupD8.W?T.set(G-R-I+B,L-P-E+O,I,E):C===groupD8.N?T.set(P+B,L-R-I+O,E,I):T.set(R+B,P+O,I,E)}},tempPoints=[new Point,new Point,new Point,new Point];class Rectangle{constructor(_=0,C=0,T=0,R=0){this.type="rectangle",this.x=Number(_),this.y=Number(C),this.width=Number(T),this.height=Number(R)}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}isEmpty(){return this.left===this.right||this.top===this.bottom}static get EMPTY(){return new Rectangle(0,0,0,0)}clone(){return new Rectangle(this.x,this.y,this.width,this.height)}copyFromBounds(_){return this.x=_.minX,this.y=_.minY,this.width=_.maxX-_.minX,this.height=_.maxY-_.minY,this}copyFrom(_){return this.x=_.x,this.y=_.y,this.width=_.width,this.height=_.height,this}copyTo(_){return _.copyFrom(this),_}contains(_,C){return this.width<=0||this.height<=0?!1:_>=this.x&&_<this.x+this.width&&C>=this.y&&C<this.y+this.height}strokeContains(_,C,T,R=.5){const{width:P,height:I}=this;if(P<=0||I<=0)return!1;const E=this.x,B=this.y,O=T*(1-R),G=T-O,L=E-O,F=E+P+O,D=B-O,q=B+I+O,U=E+G,V=E+P-G,W=B+G,z=B+I-G;return _>=L&&_<=F&&C>=D&&C<=q&&!(_>U&&_<V&&C>W&&C<z)}intersects(_,C){if(!C){const ut=this.x<_.x?_.x:this.x;if((this.right>_.right?_.right:this.right)<=ut)return!1;const et=this.y<_.y?_.y:this.y;return(this.bottom>_.bottom?_.bottom:this.bottom)>et}const T=this.left,R=this.right,P=this.top,I=this.bottom;if(R<=T||I<=P)return!1;const E=tempPoints[0].set(_.left,_.top),B=tempPoints[1].set(_.left,_.bottom),O=tempPoints[2].set(_.right,_.top),G=tempPoints[3].set(_.right,_.bottom);if(O.x<=E.x||B.y<=E.y)return!1;const L=Math.sign(C.a*C.d-C.b*C.c);if(L===0||(C.apply(E,E),C.apply(B,B),C.apply(O,O),C.apply(G,G),Math.max(E.x,B.x,O.x,G.x)<=T||Math.min(E.x,B.x,O.x,G.x)>=R||Math.max(E.y,B.y,O.y,G.y)<=P||Math.min(E.y,B.y,O.y,G.y)>=I))return!1;const F=L*(B.y-E.y),D=L*(E.x-B.x),q=F*T+D*P,U=F*R+D*P,V=F*T+D*I,W=F*R+D*I;if(Math.max(q,U,V,W)<=F*E.x+D*E.y||Math.min(q,U,V,W)>=F*G.x+D*G.y)return!1;const z=L*(E.y-O.y),X=L*(O.x-E.x),Y=z*T+X*P,Q=z*R+X*P,J=z*T+X*I,Z=z*R+X*I;return!(Math.max(Y,Q,J,Z)<=z*E.x+X*E.y||Math.min(Y,Q,J,Z)>=z*G.x+X*G.y)}pad(_=0,C=_){return this.x-=_,this.y-=C,this.width+=_*2,this.height+=C*2,this}fit(_){const C=Math.max(this.x,_.x),T=Math.min(this.x+this.width,_.x+_.width),R=Math.max(this.y,_.y),P=Math.min(this.y+this.height,_.y+_.height);return this.x=C,this.width=Math.max(T-C,0),this.y=R,this.height=Math.max(P-R,0),this}ceil(_=1,C=.001){const T=Math.ceil((this.x+this.width-C)*_)/_,R=Math.ceil((this.y+this.height-C)*_)/_;return this.x=Math.floor((this.x+C)*_)/_,this.y=Math.floor((this.y+C)*_)/_,this.width=T-this.x,this.height=R-this.y,this}scale(_,C=_){return this.x*=_,this.y*=C,this.width*=_,this.height*=C,this}enlarge(_){const C=Math.min(this.x,_.x),T=Math.max(this.x+this.width,_.x+_.width),R=Math.min(this.y,_.y),P=Math.max(this.y+this.height,_.y+_.height);return this.x=C,this.width=T-C,this.y=R,this.height=P-R,this}getBounds(_){return _||(_=new Rectangle),_.copyFrom(this),_}containsRect(_){if(this.width<=0||this.height<=0)return!1;const C=_.x,T=_.y,R=_.x+_.width,P=_.y+_.height;return C>=this.x&&C<this.x+this.width&&T>=this.y&&T<this.y+this.height&&R>=this.x&&R<this.x+this.width&&P>=this.y&&P<this.y+this.height}set(_,C,T,R){return this.x=_,this.y=C,this.width=T,this.height=R,this}toString(){return`[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}const uidCache={default:-1};function uid(A="default"){return uidCache[A]===void 0&&(uidCache[A]=-1),++uidCache[A]}const warnings=new Set,v8_0_0="8.0.0",v8_3_4="8.3.4",deprecationState={quiet:!1,noColor:!1},deprecation=(A,_,C=3)=>{if(deprecationState.quiet||warnings.has(_))return;let T=new Error().stack;const R=`${_}
Deprecated since v${A}`,P=typeof console.groupCollapsed=="function"&&!deprecationState.noColor;typeof T>"u"?console.warn("PixiJS Deprecation Warning: ",R):(T=T.split(`
`).splice(C).join(`
`),P?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",R),console.warn(T),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",R),console.warn(T))),warnings.add(_)};Object.defineProperties(deprecation,{quiet:{get:()=>deprecationState.quiet,set:A=>{deprecationState.quiet=A},enumerable:!0,configurable:!1},noColor:{get:()=>deprecationState.noColor,set:A=>{deprecationState.noColor=A},enumerable:!0,configurable:!1}});const NOOP=()=>{};function nextPow2(A){return A+=A===0?1:0,--A,A|=A>>>1,A|=A>>>2,A|=A>>>4,A|=A>>>8,A|=A>>>16,A+1}function isPow2(A){return!(A&A-1)&&!!A}function definedProps(A){const _={};for(const C in A)A[C]!==void 0&&(_[C]=A[C]);return _}const idHash$1=Object.create(null);function createResourceIdFromString(A){const _=idHash$1[A];return _===void 0&&(idHash$1[A]=uid("resource")),_}const _TextureStyle=class ue extends EventEmitter{constructor(_={}){super(),this._resourceType="textureSampler",this._touched=0,this._maxAnisotropy=1,this.destroyed=!1,_={...ue.defaultOptions,..._},this.addressMode=_.addressMode,this.addressModeU=_.addressModeU??this.addressModeU,this.addressModeV=_.addressModeV??this.addressModeV,this.addressModeW=_.addressModeW??this.addressModeW,this.scaleMode=_.scaleMode,this.magFilter=_.magFilter??this.magFilter,this.minFilter=_.minFilter??this.minFilter,this.mipmapFilter=_.mipmapFilter??this.mipmapFilter,this.lodMinClamp=_.lodMinClamp,this.lodMaxClamp=_.lodMaxClamp,this.compare=_.compare,this.maxAnisotropy=_.maxAnisotropy??1}set addressMode(_){this.addressModeU=_,this.addressModeV=_,this.addressModeW=_}get addressMode(){return this.addressModeU}set wrapMode(_){deprecation(v8_0_0,"TextureStyle.wrapMode is now TextureStyle.addressMode"),this.addressMode=_}get wrapMode(){return this.addressMode}set scaleMode(_){this.magFilter=_,this.minFilter=_,this.mipmapFilter=_}get scaleMode(){return this.magFilter}set maxAnisotropy(_){this._maxAnisotropy=Math.min(_,16),this._maxAnisotropy>1&&(this.scaleMode="linear")}get maxAnisotropy(){return this._maxAnisotropy}get _resourceId(){return this._sharedResourceId||this._generateResourceId()}update(){this._sharedResourceId=null,this.emit("change",this)}_generateResourceId(){const _=`${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;return this._sharedResourceId=createResourceIdFromString(_),this._resourceId}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this.removeAllListeners()}};_TextureStyle.defaultOptions={addressMode:"clamp-to-edge",scaleMode:"linear"};let TextureStyle=_TextureStyle;const _TextureSource=class he extends EventEmitter{constructor(_={}){super(),this.options=_,this._gpuData=Object.create(null),this._gcLastUsed=-1,this.uid=uid("textureSource"),this._resourceType="textureSource",this._resourceId=uid("resource"),this.uploadMethodId="unknown",this._resolution=1,this.pixelWidth=1,this.pixelHeight=1,this.width=1,this.height=1,this.sampleCount=1,this.mipLevelCount=1,this.autoGenerateMipmaps=!1,this.format="rgba8unorm",this.dimension="2d",this.viewDimension="2d",this.arrayLayerCount=1,this.antialias=!1,this.transient=!1,this._touched=0,this._batchTick=-1,this._textureBindLocation=-1,_={...he.defaultOptions,..._},this.label=_.label??"",this.resource=_.resource,this.autoGarbageCollect=_.autoGarbageCollect,this._resolution=_.resolution,_.width?this.pixelWidth=_.width*this._resolution:this.pixelWidth=this.resource?this.resourceWidth??1:1,_.height?this.pixelHeight=_.height*this._resolution:this.pixelHeight=this.resource?this.resourceHeight??1:1,this.width=this.pixelWidth/this._resolution,this.height=this.pixelHeight/this._resolution,this.format=_.format,this.dimension=_.dimensions,this.viewDimension=_.viewDimension??_.dimensions,this.arrayLayerCount=_.arrayLayerCount,this.mipLevelCount=_.mipLevelCount,this.autoGenerateMipmaps=_.autoGenerateMipmaps,this.sampleCount=_.sampleCount,this.antialias=_.antialias,this.transient=_.transient??!1,this.alphaMode=_.alphaMode,this.style=new TextureStyle(definedProps(_)),this.destroyed=!1,this._refreshPOT()}get source(){return this}get style(){return this._style}set style(_){var C,T;this.style!==_&&((C=this._style)==null||C.off("change",this._onStyleChange,this),this._style=_,(T=this._style)==null||T.on("change",this._onStyleChange,this),this._onStyleChange())}set maxAnisotropy(_){this._style.maxAnisotropy=_}get maxAnisotropy(){return this._style.maxAnisotropy}get addressMode(){return this._style.addressMode}set addressMode(_){this._style.addressMode=_}get repeatMode(){return this._style.addressMode}set repeatMode(_){this._style.addressMode=_}get magFilter(){return this._style.magFilter}set magFilter(_){this._style.magFilter=_}get minFilter(){return this._style.minFilter}set minFilter(_){this._style.minFilter=_}get mipmapFilter(){return this._style.mipmapFilter}set mipmapFilter(_){this._style.mipmapFilter=_}get lodMinClamp(){return this._style.lodMinClamp}set lodMinClamp(_){this._style.lodMinClamp=_}get lodMaxClamp(){return this._style.lodMaxClamp}set lodMaxClamp(_){this._style.lodMaxClamp=_}_onStyleChange(){this.emit("styleChange",this)}update(){if(this.resource){const _=this._resolution;if(this.resize(this.resourceWidth/_,this.resourceHeight/_))return}this.emit("update",this)}destroy(){this.destroyed=!0,this.unload(),this.emit("destroy",this),this._style&&(this._style.destroy(),this._style=null),this.uploadMethodId=null,this.resource=null,this.removeAllListeners()}unload(){var _,C;this._resourceId=uid("resource"),this.emit("change",this),this.emit("unload",this);for(const T in this._gpuData)(C=(_=this._gpuData[T])==null?void 0:_.destroy)==null||C.call(_);this._gpuData=Object.create(null)}get resourceWidth(){const{resource:_}=this;return _.naturalWidth||_.videoWidth||_.displayWidth||_.width}get resourceHeight(){const{resource:_}=this;return _.naturalHeight||_.videoHeight||_.displayHeight||_.height}get resolution(){return this._resolution}set resolution(_){this._resolution!==_&&(this._resolution=_,this.width=this.pixelWidth/_,this.height=this.pixelHeight/_)}resize(_,C,T){T||(T=this._resolution),_||(_=this.width),C||(C=this.height);const R=Math.round(_*T),P=Math.round(C*T);return this.width=R/T,this.height=P/T,this._resolution=T,this.pixelWidth===R&&this.pixelHeight===P?!1:(this._refreshPOT(),this.pixelWidth=R,this.pixelHeight=P,this.emit("resize",this),this._resourceId=uid("resource"),this.emit("change",this),!0)}updateMipmaps(){this.autoGenerateMipmaps&&this.mipLevelCount>1&&this.emit("updateMipmaps",this)}set wrapMode(_){this._style.wrapMode=_}get wrapMode(){return this._style.wrapMode}set scaleMode(_){this._style.scaleMode=_}get scaleMode(){return this._style.scaleMode}_refreshPOT(){this.isPowerOfTwo=isPow2(this.pixelWidth)&&isPow2(this.pixelHeight)}static test(_){throw new Error("Unimplemented")}};_TextureSource.defaultOptions={resolution:1,format:"bgra8unorm",alphaMode:"premultiply-alpha-on-upload",dimensions:"2d",viewDimension:"2d",arrayLayerCount:1,mipLevelCount:1,autoGenerateMipmaps:!1,sampleCount:1,antialias:!1,autoGarbageCollect:!1};let TextureSource=_TextureSource;class BufferImageSource extends TextureSource{constructor(_){const C=_.resource||new Float32Array(_.width*_.height*4);let T=_.format;T||(C instanceof Float32Array?T="rgba32float":C instanceof Int32Array||C instanceof Uint32Array?T="rgba32uint":C instanceof Int16Array||C instanceof Uint16Array?T="rgba16uint":(C instanceof Int8Array,T="bgra8unorm")),super({..._,resource:C,format:T}),this.uploadMethodId="buffer"}static test(_){return _ instanceof Int8Array||_ instanceof Uint8Array||_ instanceof Uint8ClampedArray||_ instanceof Int16Array||_ instanceof Uint16Array||_ instanceof Int32Array||_ instanceof Uint32Array||_ instanceof Float32Array}}BufferImageSource.extension=ExtensionType.TextureSource;const tempMat=new Matrix;class TextureMatrix{constructor(_,C){this.mapCoord=new Matrix,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._updateID=0,this.clampOffset=0,typeof C>"u"?this.clampMargin=_.width<10?0:.5:this.clampMargin=C,this.isSimple=!1,this.texture=_}get texture(){return this._texture}set texture(_){var C;this._texture!==_&&((C=this._texture)==null||C.removeListener("update",this.update,this),this._texture=_,this._texture.addListener("update",this.update,this)),this.update()}multiplyUvs(_,C){C===void 0&&(C=_);const T=this.mapCoord;for(let R=0;R<_.length;R+=2){const P=_[R],I=_[R+1];C[R]=P*T.a+I*T.c+T.tx,C[R+1]=P*T.b+I*T.d+T.ty}return C}update(){const _=this._texture;this._updateID++;const C=_.uvs;this.mapCoord.set(C.x1-C.x0,C.y1-C.y0,C.x3-C.x0,C.y3-C.y0,C.x0,C.y0);const T=_.orig,R=_.trim;R&&(tempMat.set(T.width/R.width,0,0,T.height/R.height,-R.x/R.width,-R.y/R.height),this.mapCoord.append(tempMat));const P=_.source,I=this.uClampFrame,E=this.clampMargin/P._resolution,B=this.clampOffset/P._resolution;return I[0]=(_.frame.x+E+B)/P.width,I[1]=(_.frame.y+E+B)/P.height,I[2]=(_.frame.x+_.frame.width-E+B)/P.width,I[3]=(_.frame.y+_.frame.height-E+B)/P.height,this.uClampOffset[0]=this.clampOffset/P.pixelWidth,this.uClampOffset[1]=this.clampOffset/P.pixelHeight,this.isSimple=_.frame.width===P.width&&_.frame.height===P.height&&_.rotate===0,!0}}class Texture extends EventEmitter{constructor({source:_,label:C,frame:T,orig:R,trim:P,defaultAnchor:I,defaultBorders:E,rotate:B,dynamic:O}={}){if(super(),this.uid=uid("texture"),this.uvs={x0:0,y0:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0},this.frame=new Rectangle,this.noFrame=!1,this.dynamic=!1,this.isTexture=!0,this.label=C,this.source=(_==null?void 0:_.source)??new TextureSource,this.noFrame=!T,T)this.frame.copyFrom(T);else{const{width:G,height:L}=this._source;this.frame.width=G,this.frame.height=L}this.orig=R||this.frame,this.trim=P,this.rotate=B??0,this.defaultAnchor=I,this.defaultBorders=E,this.destroyed=!1,this.dynamic=O||!1,this.updateUvs()}set source(_){this._source&&this._source.off("resize",this.update,this),this._source=_,_.on("resize",this.update,this),this.emit("update",this)}get source(){return this._source}get textureMatrix(){return this._textureMatrix||(this._textureMatrix=new TextureMatrix(this)),this._textureMatrix}get width(){return this.orig.width}get height(){return this.orig.height}updateUvs(){const{uvs:_,frame:C}=this,{width:T,height:R}=this._source,P=C.x/T,I=C.y/R,E=C.width/T,B=C.height/R;let O=this.rotate;if(O){const G=E/2,L=B/2,F=P+G,D=I+L;O=groupD8.add(O,groupD8.NW),_.x0=F+G*groupD8.uX(O),_.y0=D+L*groupD8.uY(O),O=groupD8.add(O,2),_.x1=F+G*groupD8.uX(O),_.y1=D+L*groupD8.uY(O),O=groupD8.add(O,2),_.x2=F+G*groupD8.uX(O),_.y2=D+L*groupD8.uY(O),O=groupD8.add(O,2),_.x3=F+G*groupD8.uX(O),_.y3=D+L*groupD8.uY(O)}else _.x0=P,_.y0=I,_.x1=P+E,_.y1=I,_.x2=P+E,_.y2=I+B,_.x3=P,_.y3=I+B}destroy(_=!1){this._source&&(this._source.off("resize",this.update,this),_&&(this._source.destroy(),this._source=null)),this._textureMatrix=null,this.destroyed=!0,this.emit("destroy",this),this.removeAllListeners()}update(){this.noFrame&&(this.frame.width=this._source.width,this.frame.height=this._source.height),this.updateUvs(),this.emit("update",this)}get baseTexture(){return deprecation(v8_0_0,"Texture.baseTexture is now Texture.source"),this._source}}Texture.EMPTY=new Texture({label:"EMPTY",source:new TextureSource({label:"EMPTY"})});Texture.EMPTY.destroy=NOOP;Texture.WHITE=new Texture({source:new BufferImageSource({resource:new Uint8Array([255,255,255,255]),width:1,height:1,alphaMode:"premultiply-alpha-on-upload",label:"WHITE"}),label:"WHITE"});Texture.WHITE.destroy=NOOP;function updateQuadBounds(A,_,C){const{width:T,height:R}=C.orig,P=C.trim;if(P){const I=P.width,E=P.height;A.minX=P.x-_._x*T,A.maxX=A.minX+I,A.minY=P.y-_._y*R,A.maxY=A.minY+E}else A.minX=-_._x*T,A.maxX=A.minX+T,A.minY=-_._y*R,A.maxY=A.minY+R}const defaultMatrix=new Matrix;class Bounds{constructor(_=1/0,C=1/0,T=-1/0,R=-1/0){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=defaultMatrix,this.minX=_,this.minY=C,this.maxX=T,this.maxY=R}isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}get rectangle(){this._rectangle||(this._rectangle=new Rectangle);const _=this._rectangle;return this.minX>this.maxX||this.minY>this.maxY?(_.x=0,_.y=0,_.width=0,_.height=0):_.copyFromBounds(this),_}clear(){return this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=defaultMatrix,this}set(_,C,T,R){this.minX=_,this.minY=C,this.maxX=T,this.maxY=R}addFrame(_,C,T,R,P){P||(P=this.matrix);const I=P.a,E=P.b,B=P.c,O=P.d,G=P.tx,L=P.ty;let F=this.minX,D=this.minY,q=this.maxX,U=this.maxY,V=I*_+B*C+G,W=E*_+O*C+L;V<F&&(F=V),W<D&&(D=W),V>q&&(q=V),W>U&&(U=W),V=I*T+B*C+G,W=E*T+O*C+L,V<F&&(F=V),W<D&&(D=W),V>q&&(q=V),W>U&&(U=W),V=I*_+B*R+G,W=E*_+O*R+L,V<F&&(F=V),W<D&&(D=W),V>q&&(q=V),W>U&&(U=W),V=I*T+B*R+G,W=E*T+O*R+L,V<F&&(F=V),W<D&&(D=W),V>q&&(q=V),W>U&&(U=W),this.minX=F,this.minY=D,this.maxX=q,this.maxY=U}addRect(_,C){this.addFrame(_.x,_.y,_.x+_.width,_.y+_.height,C)}addBounds(_,C){this.addFrame(_.minX,_.minY,_.maxX,_.maxY,C)}addBoundsMask(_){this.minX=this.minX>_.minX?this.minX:_.minX,this.minY=this.minY>_.minY?this.minY:_.minY,this.maxX=this.maxX<_.maxX?this.maxX:_.maxX,this.maxY=this.maxY<_.maxY?this.maxY:_.maxY}applyMatrix(_){const C=this.minX,T=this.minY,R=this.maxX,P=this.maxY,{a:I,b:E,c:B,d:O,tx:G,ty:L}=_;let F=I*C+B*T+G,D=E*C+O*T+L;this.minX=F,this.minY=D,this.maxX=F,this.maxY=D,F=I*R+B*T+G,D=E*R+O*T+L,this.minX=F<this.minX?F:this.minX,this.minY=D<this.minY?D:this.minY,this.maxX=F>this.maxX?F:this.maxX,this.maxY=D>this.maxY?D:this.maxY,F=I*C+B*P+G,D=E*C+O*P+L,this.minX=F<this.minX?F:this.minX,this.minY=D<this.minY?D:this.minY,this.maxX=F>this.maxX?F:this.maxX,this.maxY=D>this.maxY?D:this.maxY,F=I*R+B*P+G,D=E*R+O*P+L,this.minX=F<this.minX?F:this.minX,this.minY=D<this.minY?D:this.minY,this.maxX=F>this.maxX?F:this.maxX,this.maxY=D>this.maxY?D:this.maxY}fit(_){return this.minX<_.left&&(this.minX=_.left),this.maxX>_.right&&(this.maxX=_.right),this.minY<_.top&&(this.minY=_.top),this.maxY>_.bottom&&(this.maxY=_.bottom),this}fitBounds(_,C,T,R){return this.minX<_&&(this.minX=_),this.maxX>C&&(this.maxX=C),this.minY<T&&(this.minY=T),this.maxY>R&&(this.maxY=R),this}pad(_,C=_){return this.minX-=_,this.maxX+=_,this.minY-=C,this.maxY+=C,this}ceil(){return this.minX=Math.floor(this.minX),this.minY=Math.floor(this.minY),this.maxX=Math.ceil(this.maxX),this.maxY=Math.ceil(this.maxY),this}clone(){return new Bounds(this.minX,this.minY,this.maxX,this.maxY)}scale(_,C=_){return this.minX*=_,this.minY*=C,this.maxX*=_,this.maxY*=C,this}get x(){return this.minX}set x(_){const C=this.maxX-this.minX;this.minX=_,this.maxX=_+C}get y(){return this.minY}set y(_){const C=this.maxY-this.minY;this.minY=_,this.maxY=_+C}get width(){return this.maxX-this.minX}set width(_){this.maxX=this.minX+_}get height(){return this.maxY-this.minY}set height(_){this.maxY=this.minY+_}get left(){return this.minX}get right(){return this.maxX}get top(){return this.minY}get bottom(){return this.maxY}get isPositive(){return this.maxX-this.minX>0&&this.maxY-this.minY>0}get isValid(){return this.minX+this.minY!==1/0}addVertexData(_,C,T,R){let P=this.minX,I=this.minY,E=this.maxX,B=this.maxY;R||(R=this.matrix);const O=R.a,G=R.b,L=R.c,F=R.d,D=R.tx,q=R.ty;for(let U=C;U<T;U+=2){const V=_[U],W=_[U+1],z=O*V+L*W+D,X=G*V+F*W+q;P=z<P?z:P,I=X<I?X:I,E=z>E?z:E,B=X>B?X:B}this.minX=P,this.minY=I,this.maxX=E,this.maxY=B}containsPoint(_,C){return this.minX<=_&&this.minY<=C&&this.maxX>=_&&this.maxY>=C}toString(){return`[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`}copyFrom(_){return this.minX=_.minX,this.minY=_.minY,this.maxX=_.maxX,this.maxY=_.maxY,this}}var r={grad:.9,turn:360,rad:360/(2*Math.PI)},t=function(A){return typeof A=="string"?A.length>0:typeof A=="number"},n=function(A,_,C){return _===void 0&&(_=0),C===void 0&&(C=Math.pow(10,_)),Math.round(C*A)/C+0},e=function(A,_,C){return _===void 0&&(_=0),C===void 0&&(C=1),A>C?C:A>_?A:_},u=function(A){return(A=isFinite(A)?A%360:0)>0?A:A+360},a=function(A){return{r:e(A.r,0,255),g:e(A.g,0,255),b:e(A.b,0,255),a:e(A.a)}},o=function(A){return{r:n(A.r),g:n(A.g),b:n(A.b),a:n(A.a,3)}},i=/^#([0-9a-f]{3,8})$/i,s=function(A){var _=A.toString(16);return _.length<2?"0"+_:_},h=function(A){var _=A.r,C=A.g,T=A.b,R=A.a,P=Math.max(_,C,T),I=P-Math.min(_,C,T),E=I?P===_?(C-T)/I:P===C?2+(T-_)/I:4+(_-C)/I:0;return{h:60*(E<0?E+6:E),s:P?I/P*100:0,v:P/255*100,a:R}},b=function(A){var _=A.h,C=A.s,T=A.v,R=A.a;_=_/360*6,C/=100,T/=100;var P=Math.floor(_),I=T*(1-C),E=T*(1-(_-P)*C),B=T*(1-(1-_+P)*C),O=P%6;return{r:255*[T,E,I,I,B,T][O],g:255*[B,T,T,E,I,I][O],b:255*[I,I,B,T,T,E][O],a:R}},g=function(A){return{h:u(A.h),s:e(A.s,0,100),l:e(A.l,0,100),a:e(A.a)}},d=function(A){return{h:n(A.h),s:n(A.s),l:n(A.l),a:n(A.a,3)}},f=function(A){return b((C=(_=A).s,{h:_.h,s:(C*=((T=_.l)<50?T:100-T)/100)>0?2*C/(T+C)*100:0,v:T+C,a:_.a}));var _,C,T},c=function(A){return{h:(_=h(A)).h,s:(R=(200-(C=_.s))*(T=_.v)/100)>0&&R<200?C*T/100/(R<=100?R:200-R)*100:0,l:R/2,a:_.a};var _,C,T,R},l=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,p=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,v=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,m=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,y={string:[[function(A){var _=i.exec(A);return _?(A=_[1]).length<=4?{r:parseInt(A[0]+A[0],16),g:parseInt(A[1]+A[1],16),b:parseInt(A[2]+A[2],16),a:A.length===4?n(parseInt(A[3]+A[3],16)/255,2):1}:A.length===6||A.length===8?{r:parseInt(A.substr(0,2),16),g:parseInt(A.substr(2,2),16),b:parseInt(A.substr(4,2),16),a:A.length===8?n(parseInt(A.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(A){var _=v.exec(A)||m.exec(A);return _?_[2]!==_[4]||_[4]!==_[6]?null:a({r:Number(_[1])/(_[2]?100/255:1),g:Number(_[3])/(_[4]?100/255:1),b:Number(_[5])/(_[6]?100/255:1),a:_[7]===void 0?1:Number(_[7])/(_[8]?100:1)}):null},"rgb"],[function(A){var _=l.exec(A)||p.exec(A);if(!_)return null;var C,T,R=g({h:(C=_[1],T=_[2],T===void 0&&(T="deg"),Number(C)*(r[T]||1)),s:Number(_[3]),l:Number(_[4]),a:_[5]===void 0?1:Number(_[5])/(_[6]?100:1)});return f(R)},"hsl"]],object:[[function(A){var _=A.r,C=A.g,T=A.b,R=A.a,P=R===void 0?1:R;return t(_)&&t(C)&&t(T)?a({r:Number(_),g:Number(C),b:Number(T),a:Number(P)}):null},"rgb"],[function(A){var _=A.h,C=A.s,T=A.l,R=A.a,P=R===void 0?1:R;if(!t(_)||!t(C)||!t(T))return null;var I=g({h:Number(_),s:Number(C),l:Number(T),a:Number(P)});return f(I)},"hsl"],[function(A){var _=A.h,C=A.s,T=A.v,R=A.a,P=R===void 0?1:R;if(!t(_)||!t(C)||!t(T))return null;var I=function(E){return{h:u(E.h),s:e(E.s,0,100),v:e(E.v,0,100),a:e(E.a)}}({h:Number(_),s:Number(C),v:Number(T),a:Number(P)});return b(I)},"hsv"]]},N=function(A,_){for(var C=0;C<_.length;C++){var T=_[C][0](A);if(T)return[T,_[C][1]]}return[null,void 0]},x=function(A){return typeof A=="string"?N(A.trim(),y.string):typeof A=="object"&&A!==null?N(A,y.object):[null,void 0]},M=function(A,_){var C=c(A);return{h:C.h,s:e(C.s+100*_,0,100),l:C.l,a:C.a}},H=function(A){return(299*A.r+587*A.g+114*A.b)/1e3/255},$=function(A,_){var C=c(A);return{h:C.h,s:C.s,l:e(C.l+100*_,0,100),a:C.a}},j=function(){function A(_){this.parsed=x(_)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return A.prototype.isValid=function(){return this.parsed!==null},A.prototype.brightness=function(){return n(H(this.rgba),2)},A.prototype.isDark=function(){return H(this.rgba)<.5},A.prototype.isLight=function(){return H(this.rgba)>=.5},A.prototype.toHex=function(){return _=o(this.rgba),C=_.r,T=_.g,R=_.b,I=(P=_.a)<1?s(n(255*P)):"","#"+s(C)+s(T)+s(R)+I;var _,C,T,R,P,I},A.prototype.toRgb=function(){return o(this.rgba)},A.prototype.toRgbString=function(){return _=o(this.rgba),C=_.r,T=_.g,R=_.b,(P=_.a)<1?"rgba("+C+", "+T+", "+R+", "+P+")":"rgb("+C+", "+T+", "+R+")";var _,C,T,R,P},A.prototype.toHsl=function(){return d(c(this.rgba))},A.prototype.toHslString=function(){return _=d(c(this.rgba)),C=_.h,T=_.s,R=_.l,(P=_.a)<1?"hsla("+C+", "+T+"%, "+R+"%, "+P+")":"hsl("+C+", "+T+"%, "+R+"%)";var _,C,T,R,P},A.prototype.toHsv=function(){return _=h(this.rgba),{h:n(_.h),s:n(_.s),v:n(_.v),a:n(_.a,3)};var _},A.prototype.invert=function(){return w({r:255-(_=this.rgba).r,g:255-_.g,b:255-_.b,a:_.a});var _},A.prototype.saturate=function(_){return _===void 0&&(_=.1),w(M(this.rgba,_))},A.prototype.desaturate=function(_){return _===void 0&&(_=.1),w(M(this.rgba,-_))},A.prototype.grayscale=function(){return w(M(this.rgba,-1))},A.prototype.lighten=function(_){return _===void 0&&(_=.1),w($(this.rgba,_))},A.prototype.darken=function(_){return _===void 0&&(_=.1),w($(this.rgba,-_))},A.prototype.rotate=function(_){return _===void 0&&(_=15),this.hue(this.hue()+_)},A.prototype.alpha=function(_){return typeof _=="number"?w({r:(C=this.rgba).r,g:C.g,b:C.b,a:_}):n(this.rgba.a,3);var C},A.prototype.hue=function(_){var C=c(this.rgba);return typeof _=="number"?w({h:_,s:C.s,l:C.l,a:C.a}):n(C.h)},A.prototype.isEqual=function(_){return this.toHex()===w(_).toHex()},A}(),w=function(A){return A instanceof j?A:new j(A)},S=[],k=function(A){A.forEach(function(_){S.indexOf(_)<0&&(_(j,y),S.push(_))})};function namesPlugin(A,_){var C={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},T={};for(var R in C)T[C[R]]=R;var P={};A.prototype.toName=function(I){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var E,B,O=T[this.toHex()];if(O)return O;if(I!=null&&I.closest){var G=this.toRgb(),L=1/0,F="black";if(!P.length)for(var D in C)P[D]=new A(C[D]).toRgb();for(var q in C){var U=(E=G,B=P[q],Math.pow(E.r-B.r,2)+Math.pow(E.g-B.g,2)+Math.pow(E.b-B.b,2));U<L&&(L=U,F=q)}return F}},_.string.push([function(I){var E=I.toLowerCase(),B=E==="transparent"?"#0000":C[E];return B?new A(B).toRgb():null},"name"])}k([namesPlugin]);const _Color=class zt{constructor(_=16777215){this._value=null,this._components=new Float32Array(4),this._components.fill(1),this._int=16777215,this.value=_}get red(){return this._components[0]}get green(){return this._components[1]}get blue(){return this._components[2]}get alpha(){return this._components[3]}setValue(_){return this.value=_,this}set value(_){if(_ instanceof zt)this._value=this._cloneSource(_._value),this._int=_._int,this._components.set(_._components);else{if(_===null)throw new Error("Cannot set Color#value to null");(this._value===null||!this._isSourceEqual(this._value,_))&&(this._value=this._cloneSource(_),this._normalize(this._value))}}get value(){return this._value}_cloneSource(_){return typeof _=="string"||typeof _=="number"||_ instanceof Number||_===null?_:Array.isArray(_)||ArrayBuffer.isView(_)?_.slice(0):typeof _=="object"&&_!==null?{..._}:_}_isSourceEqual(_,C){const T=typeof _;if(T!==typeof C)return!1;if(T==="number"||T==="string"||_ instanceof Number)return _===C;if(Array.isArray(_)&&Array.isArray(C)||ArrayBuffer.isView(_)&&ArrayBuffer.isView(C))return _.length!==C.length?!1:_.every((P,I)=>P===C[I]);if(_!==null&&C!==null){const P=Object.keys(_),I=Object.keys(C);return P.length!==I.length?!1:P.every(E=>_[E]===C[E])}return _===C}toRgba(){const[_,C,T,R]=this._components;return{r:_,g:C,b:T,a:R}}toRgb(){const[_,C,T]=this._components;return{r:_,g:C,b:T}}toRgbaString(){const[_,C,T]=this.toUint8RgbArray();return`rgba(${_},${C},${T},${this.alpha})`}toUint8RgbArray(_){const[C,T,R]=this._components;return this._arrayRgb||(this._arrayRgb=[]),_||(_=this._arrayRgb),_[0]=Math.round(C*255),_[1]=Math.round(T*255),_[2]=Math.round(R*255),_}toArray(_){this._arrayRgba||(this._arrayRgba=[]),_||(_=this._arrayRgba);const[C,T,R,P]=this._components;return _[0]=C,_[1]=T,_[2]=R,_[3]=P,_}toRgbArray(_){this._arrayRgb||(this._arrayRgb=[]),_||(_=this._arrayRgb);const[C,T,R]=this._components;return _[0]=C,_[1]=T,_[2]=R,_}toNumber(){return this._int}toBgrNumber(){const[_,C,T]=this.toUint8RgbArray();return(T<<16)+(C<<8)+_}toLittleEndianNumber(){const _=this._int;return(_>>16)+(_&65280)+((_&255)<<16)}multiply(_){const[C,T,R,P]=zt._temp.setValue(_)._components;return this._components[0]*=C,this._components[1]*=T,this._components[2]*=R,this._components[3]*=P,this._refreshInt(),this._value=null,this}premultiply(_,C=!0){return C&&(this._components[0]*=_,this._components[1]*=_,this._components[2]*=_),this._components[3]=_,this._refreshInt(),this._value=null,this}toPremultiplied(_,C=!0){if(_===1)return(255<<24)+this._int;if(_===0)return C?0:this._int;let T=this._int>>16&255,R=this._int>>8&255,P=this._int&255;return C&&(T=T*_+.5|0,R=R*_+.5|0,P=P*_+.5|0),(_*255<<24)+(T<<16)+(R<<8)+P}toHex(){const _=this._int.toString(16);return`#${"000000".substring(0,6-_.length)+_}`}toHexa(){const C=Math.round(this._components[3]*255).toString(16);return this.toHex()+"00".substring(0,2-C.length)+C}setAlpha(_){return this._components[3]=this._clamp(_),this._value=null,this}_normalize(_){let C,T,R,P;if((typeof _=="number"||_ instanceof Number)&&_>=0&&_<=16777215){const I=_;C=(I>>16&255)/255,T=(I>>8&255)/255,R=(I&255)/255,P=1}else if((Array.isArray(_)||_ instanceof Float32Array)&&_.length>=3&&_.length<=4)_=this._clamp(_),[C,T,R,P=1]=_;else if((_ instanceof Uint8Array||_ instanceof Uint8ClampedArray)&&_.length>=3&&_.length<=4)_=this._clamp(_,0,255),[C,T,R,P=255]=_,C/=255,T/=255,R/=255,P/=255;else if(typeof _=="string"||typeof _=="object"){if(typeof _=="string"){const E=zt.HEX_PATTERN.exec(_);E&&(_=`#${E[2]}`)}const I=w(_);I.isValid()&&({r:C,g:T,b:R,a:P}=I.rgba,C/=255,T/=255,R/=255)}if(C!==void 0)this._components[0]=C,this._components[1]=T,this._components[2]=R,this._components[3]=P,this._refreshInt();else throw new Error(`Unable to convert color ${_}`)}_refreshInt(){this._clamp(this._components);const[_,C,T]=this._components;this._int=(_*255<<16)+(C*255<<8)+(T*255|0)}_clamp(_,C=0,T=1){return typeof _=="number"?Math.min(Math.max(_,C),T):(_.forEach((R,P)=>{_[P]=Math.min(Math.max(R,C),T)}),_)}static isColorLike(_){return typeof _=="number"||typeof _=="string"||_ instanceof Number||_ instanceof zt||Array.isArray(_)||_ instanceof Uint8Array||_ instanceof Uint8ClampedArray||_ instanceof Float32Array||_.r!==void 0&&_.g!==void 0&&_.b!==void 0||_.r!==void 0&&_.g!==void 0&&_.b!==void 0&&_.a!==void 0||_.h!==void 0&&_.s!==void 0&&_.l!==void 0||_.h!==void 0&&_.s!==void 0&&_.l!==void 0&&_.a!==void 0||_.h!==void 0&&_.s!==void 0&&_.v!==void 0||_.h!==void 0&&_.s!==void 0&&_.v!==void 0&&_.a!==void 0}};_Color.shared=new _Color;_Color._temp=new _Color;_Color.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;let Color=_Color;const cullingMixin={cullArea:null,cullable:!1,cullableChildren:!0};let warnCount=0;const maxWarnings=500;function warn(...A){warnCount!==maxWarnings&&(warnCount++,warnCount===maxWarnings?console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS."):console.warn("PixiJS Warning: ",...A))}const GlobalResourceRegistry={_registeredResources:new Set,register(A){this._registeredResources.add(A)},unregister(A){this._registeredResources.delete(A)},release(){this._registeredResources.forEach(A=>A.clear())},get registeredCount(){return this._registeredResources.size},isRegistered(A){return this._registeredResources.has(A)},reset(){this._registeredResources.clear()}};class Pool{constructor(_,C){this._pool=[],this._count=0,this._index=0,this._classType=_,C&&this.prepopulate(C)}prepopulate(_){for(let C=0;C<_;C++)this._pool[this._index++]=new this._classType;this._count+=_}get(_){var T;let C;return this._index>0?C=this._pool[--this._index]:(C=new this._classType,this._count++),(T=C.init)==null||T.call(C,_),C}return(_){var C;(C=_.reset)==null||C.call(_),this._pool[this._index++]=_}get totalSize(){return this._count}get totalFree(){return this._index}get totalUsed(){return this._count-this._index}clear(){if(this._pool.length>0&&this._pool[0].destroy)for(let _=0;_<this._index;_++)this._pool[_].destroy();this._pool.length=0,this._count=0,this._index=0}}class PoolGroupClass{constructor(){this._poolsByClass=new Map}prepopulate(_,C){this.getPool(_).prepopulate(C)}get(_,C){return this.getPool(_).get(C)}return(_){this.getPool(_.constructor).return(_)}getPool(_){return this._poolsByClass.has(_)||this._poolsByClass.set(_,new Pool(_)),this._poolsByClass.get(_)}stats(){const _={};return this._poolsByClass.forEach(C=>{const T=_[C._classType.name]?C._classType.name+C._classType.ID:C._classType.name;_[T]={free:C.totalFree,used:C.totalUsed,size:C.totalSize}}),_}clear(){this._poolsByClass.forEach(_=>_.clear()),this._poolsByClass.clear()}}const BigPool=new PoolGroupClass;GlobalResourceRegistry.register(BigPool);const cacheAsTextureMixin={get isCachedAsTexture(){var A;return!!((A=this.renderGroup)!=null&&A.isCachedAsTexture)},cacheAsTexture(A){typeof A=="boolean"&&A===!1?this.disableRenderGroup():(this.enableRenderGroup(),this.renderGroup.enableCacheAsTexture(A===!0?{}:A))},updateCacheTexture(){var A;(A=this.renderGroup)==null||A.updateCacheTexture()},get cacheAsBitmap(){return this.isCachedAsTexture},set cacheAsBitmap(A){deprecation("v8.6.0","cacheAsBitmap is deprecated, use cacheAsTexture instead."),this.cacheAsTexture(A)}};function removeItems(A,_,C){const T=A.length;let R;if(_>=T||C===0)return;C=_+C>T?T-_:C;const P=T-C;for(R=_;R<P;++R)A[R]=A[R+C];A.length=P}const childrenHelperMixin={allowChildren:!0,removeChildren(A=0,_){var P;const C=_??this.children.length,T=C-A,R=[];if(T>0&&T<=C){for(let E=C-1;E>=A;E--){const B=this.children[E];B&&(R.push(B),B.parent=null)}removeItems(this.children,A,C);const I=this.renderGroup||this.parentRenderGroup;I&&I.removeChildren(R);for(let E=0;E<R.length;++E){const B=R[E];(P=B.parentRenderLayer)==null||P.detach(B),this.emit("childRemoved",B,this,E),R[E].emit("removed",this)}return R.length>0&&this._didViewChangeTick++,R}else if(T===0&&this.children.length===0)return R;throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},removeChildAt(A){const _=this.getChildAt(A);return this.removeChild(_)},getChildAt(A){if(A<0||A>=this.children.length)throw new Error(`getChildAt: Index (${A}) does not exist.`);return this.children[A]},setChildIndex(A,_){if(_<0||_>=this.children.length)throw new Error(`The index ${_} supplied is out of bounds ${this.children.length}`);this.getChildIndex(A),this.addChildAt(A,_)},getChildIndex(A){const _=this.children.indexOf(A);if(_===-1)throw new Error("The supplied Container must be a child of the caller");return _},addChildAt(A,_){this.allowChildren||deprecation(v8_0_0,"addChildAt: Only Containers will be allowed to add children in v8.0.0");const{children:C}=this;if(_<0||_>C.length)throw new Error(`${A}addChildAt: The index ${_} supplied is out of bounds ${C.length}`);const T=A.parent===this;if(A.parent){const P=A.parent.children.indexOf(A);if(T){if(P===_)return A;A.parent.children.splice(P,1)}else A.removeFromParent()}_===C.length?C.push(A):C.splice(_,0,A),A.parent=this,A.didChange=!0,A._updateFlags=15;const R=this.renderGroup||this.parentRenderGroup;return R&&R.addChild(A),this.sortableChildren&&(this.sortDirty=!0),T||(this.emit("childAdded",A,this,_),A.emit("added",this)),A},swapChildren(A,_){if(A===_)return;const C=this.getChildIndex(A),T=this.getChildIndex(_);this.children[C]=_,this.children[T]=A;const R=this.renderGroup||this.parentRenderGroup;R&&(R.structureDidChange=!0),this._didContainerChangeTick++},removeFromParent(){var A;(A=this.parent)==null||A.removeChild(this)},reparentChild(...A){return A.length===1?this.reparentChildAt(A[0],this.children.length):(A.forEach(_=>this.reparentChildAt(_,this.children.length)),A[0])},reparentChildAt(A,_){if(A.parent===this)return this.setChildIndex(A,_),A;const C=A.worldTransform.clone();A.removeFromParent(),this.addChildAt(A,_);const T=this.worldTransform.clone();return T.invert(),C.prepend(T),A.setFromMatrix(C),A},replaceChild(A,_){A.updateLocalTransform(),this.addChildAt(_,this.getChildIndex(A)),_.setFromMatrix(A.localTransform),_.updateLocalTransform(),this.removeChild(A)}},collectRenderablesMixin={collectRenderables(A,_,C){this.parentRenderLayer&&this.parentRenderLayer!==C||this.globalDisplayStatus<7||!this.includeInBuild||(this.sortableChildren&&this.sortChildren(),this.isSimple?this.collectRenderablesSimple(A,_,C):this.renderGroup?_.renderPipes.renderGroup.addRenderGroup(this.renderGroup,A):this.collectRenderablesWithEffects(A,_,C))},collectRenderablesSimple(A,_,C){const T=this.children,R=T.length;for(let P=0;P<R;P++)T[P].collectRenderables(A,_,C)},collectRenderablesWithEffects(A,_,C){const{renderPipes:T}=_;for(let R=0;R<this.effects.length;R++){const P=this.effects[R];T[P.pipe].push(P,this,A)}this.collectRenderablesSimple(A,_,C);for(let R=this.effects.length-1;R>=0;R--){const P=this.effects[R];T[P.pipe].pop(P,this,A)}}};class FilterEffect{constructor(){this.pipe="filter",this.priority=1}destroy(){for(let _=0;_<this.filters.length;_++)this.filters[_].destroy();this.filters=null,this.filterArea=null}}class MaskEffectManagerClass{constructor(){this._effectClasses=[],this._tests=[],this._initialized=!1}init(){this._initialized||(this._initialized=!0,this._effectClasses.forEach(_=>{this.add({test:_.test,maskClass:_})}))}add(_){this._tests.push(_)}getMaskEffect(_){this._initialized||this.init();for(let C=0;C<this._tests.length;C++){const T=this._tests[C];if(T.test(_))return BigPool.get(T.maskClass,_)}return _}returnMaskEffect(_){BigPool.return(_)}}const MaskEffectManager=new MaskEffectManagerClass;extensions.handleByList(ExtensionType.MaskEffect,MaskEffectManager._effectClasses);const effectsMixin={_maskEffect:null,_maskOptions:{inverse:!1,channel:"red"},_filterEffect:null,effects:[],_markStructureAsChanged(){const A=this.renderGroup||this.parentRenderGroup;A&&(A.structureDidChange=!0)},addEffect(A){this.effects.indexOf(A)===-1&&(this.effects.push(A),this.effects.sort((C,T)=>C.priority-T.priority),this._markStructureAsChanged(),this._updateIsSimple())},removeEffect(A){const _=this.effects.indexOf(A);_!==-1&&(this.effects.splice(_,1),this._markStructureAsChanged(),this._updateIsSimple())},set mask(A){const _=this._maskEffect;(_==null?void 0:_.mask)!==A&&(_&&(this.removeEffect(_),MaskEffectManager.returnMaskEffect(_),this._maskEffect=null),A!=null&&(this._maskEffect=MaskEffectManager.getMaskEffect(A),this.addEffect(this._maskEffect)))},get mask(){var A;return(A=this._maskEffect)==null?void 0:A.mask},setMask(A){this._maskOptions={...this._maskOptions,...A},A.mask&&(this.mask=A.mask),this._markStructureAsChanged()},set filters(A){var P;!Array.isArray(A)&&A&&(A=[A]);const _=this._filterEffect||(this._filterEffect=new FilterEffect);A=A;const C=(A==null?void 0:A.length)>0,T=((P=_.filters)==null?void 0:P.length)>0,R=C!==T;A=Array.isArray(A)?A.slice(0):A,_.filters=Object.freeze(A),R&&(C?this.addEffect(_):(this.removeEffect(_),_.filters=A??null))},get filters(){var A;return(A=this._filterEffect)==null?void 0:A.filters},set filterArea(A){this._filterEffect||(this._filterEffect=new FilterEffect),this._filterEffect.filterArea=A},get filterArea(){var A;return(A=this._filterEffect)==null?void 0:A.filterArea}},findMixin={label:null,get name(){return deprecation(v8_0_0,"Container.name property has been removed, use Container.label instead"),this.label},set name(A){deprecation(v8_0_0,"Container.name property has been removed, use Container.label instead"),this.label=A},getChildByName(A,_=!1){return this.getChildByLabel(A,_)},getChildByLabel(A,_=!1){const C=this.children;for(let T=0;T<C.length;T++){const R=C[T];if(R.label===A||A instanceof RegExp&&A.test(R.label))return R}if(_)for(let T=0;T<C.length;T++){const P=C[T].getChildByLabel(A,!0);if(P)return P}return null},getChildrenByLabel(A,_=!1,C=[]){const T=this.children;for(let R=0;R<T.length;R++){const P=T[R];(P.label===A||A instanceof RegExp&&A.test(P.label))&&C.push(P)}if(_)for(let R=0;R<T.length;R++)T[R].getChildrenByLabel(A,!0,C);return C}},matrixPool=BigPool.getPool(Matrix),boundsPool=BigPool.getPool(Bounds),tempMatrix$2=new Matrix,getFastGlobalBoundsMixin={getFastGlobalBounds(A,_){_||(_=new Bounds),_.clear(),this._getGlobalBoundsRecursive(!!A,_,this.parentRenderLayer),_.isValid||_.set(0,0,0,0);const C=this.renderGroup||this.parentRenderGroup;return _.applyMatrix(C.worldTransform),_},_getGlobalBoundsRecursive(A,_,C){let T=_;if(A&&this.parentRenderLayer&&this.parentRenderLayer!==C||this.localDisplayStatus!==7||!this.measurable)return;const R=!!this.effects.length;if((this.renderGroup||R)&&(T=boundsPool.get().clear()),this.boundsArea)_.addRect(this.boundsArea,this.worldTransform);else{if(this.renderPipeId){const I=this.bounds;T.addFrame(I.minX,I.minY,I.maxX,I.maxY,this.groupTransform)}const P=this.children;for(let I=0;I<P.length;I++)P[I]._getGlobalBoundsRecursive(A,T,C)}if(R){let P=!1;const I=this.renderGroup||this.parentRenderGroup;for(let E=0;E<this.effects.length;E++)this.effects[E].addBounds&&(P||(P=!0,T.applyMatrix(I.worldTransform)),this.effects[E].addBounds(T,!0));P&&T.applyMatrix(I.worldTransform.copyTo(tempMatrix$2).invert()),_.addBounds(T),boundsPool.return(T)}else this.renderGroup&&(_.addBounds(T,this.relativeGroupTransform),boundsPool.return(T))}};function getGlobalBounds(A,_,C){C.clear();let T,R;return A.parent?_?T=A.parent.worldTransform:(R=matrixPool.get().identity(),T=updateTransformBackwards(A,R)):T=Matrix.IDENTITY,_getGlobalBounds(A,C,T,_),R&&matrixPool.return(R),C.isValid||C.set(0,0,0,0),C}function _getGlobalBounds(A,_,C,T){var E,B;if(!A.visible||!A.measurable)return;let R;T?R=A.worldTransform:(A.updateLocalTransform(),R=matrixPool.get(),R.appendFrom(A.localTransform,C));const P=_,I=!!A.effects.length;if(I&&(_=boundsPool.get().clear()),A.boundsArea)_.addRect(A.boundsArea,R);else{const O=A.bounds;O&&!O.isEmpty()&&(_.matrix=R,_.addBounds(O));for(let G=0;G<A.children.length;G++)_getGlobalBounds(A.children[G],_,R,T)}if(I){for(let O=0;O<A.effects.length;O++)(B=(E=A.effects[O]).addBounds)==null||B.call(E,_);P.addBounds(_,Matrix.IDENTITY),boundsPool.return(_)}T||matrixPool.return(R)}function updateTransformBackwards(A,_){const C=A.parent;return C&&(updateTransformBackwards(C,_),C.updateLocalTransform(),_.append(C.localTransform)),_}function multiplyHexColors(A,_){if(A===16777215||!_)return _;if(_===16777215||!A)return A;const C=A>>16&255,T=A>>8&255,R=A&255,P=_>>16&255,I=_>>8&255,E=_&255,B=C*P/255|0,O=T*I/255|0,G=R*E/255|0;return(B<<16)+(O<<8)+G}const WHITE_BGR=16777215;function multiplyColors(A,_){return A===WHITE_BGR?_:_===WHITE_BGR?A:multiplyHexColors(A,_)}function bgr2rgb(A){return((A&255)<<16)+(A&65280)+(A>>16&255)}const getGlobalMixin={getGlobalAlpha(A){if(A)return this.renderGroup?this.renderGroup.worldAlpha:this.parentRenderGroup?this.parentRenderGroup.worldAlpha*this.alpha:this.alpha;let _=this.alpha,C=this.parent;for(;C;)_*=C.alpha,C=C.parent;return _},getGlobalTransform(A=new Matrix,_){if(_)return A.copyFrom(this.worldTransform);this.updateLocalTransform();const C=updateTransformBackwards(this,matrixPool.get().identity());return A.appendFrom(this.localTransform,C),matrixPool.return(C),A},getGlobalTint(A){if(A)return this.renderGroup?bgr2rgb(this.renderGroup.worldColor):this.parentRenderGroup?bgr2rgb(multiplyColors(this.localColor,this.parentRenderGroup.worldColor)):this.tint;let _=this.localColor,C=this.parent;for(;C;)_=multiplyColors(_,C.localColor),C=C.parent;return bgr2rgb(_)}};function getLocalBounds(A,_,C){return _.clear(),C||(C=Matrix.IDENTITY),_getLocalBounds(A,_,C,A,!0),_.isValid||_.set(0,0,0,0),_}function _getLocalBounds(A,_,C,T,R){var B,O;let P;if(R)P=matrixPool.get(),P=C.copyTo(P);else{if(!A.visible||!A.measurable)return;A.updateLocalTransform();const G=A.localTransform;P=matrixPool.get(),P.appendFrom(G,C)}const I=_,E=!!A.effects.length;if(E&&(_=boundsPool.get().clear()),A.boundsArea)_.addRect(A.boundsArea,P);else{A.renderPipeId&&(_.matrix=P,_.addBounds(A.bounds));const G=A.children;for(let L=0;L<G.length;L++)_getLocalBounds(G[L],_,P,T,!1)}if(E){for(let G=0;G<A.effects.length;G++)(O=(B=A.effects[G]).addLocalBounds)==null||O.call(B,_,T);I.addBounds(_,Matrix.IDENTITY),boundsPool.return(_)}matrixPool.return(P)}function checkChildrenDidChange(A,_){const C=A.children;for(let T=0;T<C.length;T++){const R=C[T],P=R.uid,I=(R._didViewChangeTick&65535)<<16|R._didContainerChangeTick&65535,E=_.index;(_.data[E]!==P||_.data[E+1]!==I)&&(_.data[_.index]=P,_.data[_.index+1]=I,_.didChange=!0),_.index=E+2,R.children.length&&checkChildrenDidChange(R,_)}return _.didChange}const tempMatrix$1=new Matrix,measureMixin={_localBoundsCacheId:-1,_localBoundsCacheData:null,_setWidth(A,_){const C=Math.sign(this.scale.x)||1;_!==0?this.scale.x=A/_*C:this.scale.x=C},_setHeight(A,_){const C=Math.sign(this.scale.y)||1;_!==0?this.scale.y=A/_*C:this.scale.y=C},getLocalBounds(){this._localBoundsCacheData||(this._localBoundsCacheData={data:[],index:1,didChange:!1,localBounds:new Bounds});const A=this._localBoundsCacheData;return A.index=1,A.didChange=!1,A.data[0]!==this._didViewChangeTick&&(A.didChange=!0,A.data[0]=this._didViewChangeTick),checkChildrenDidChange(this,A),A.didChange&&getLocalBounds(this,A.localBounds,tempMatrix$1),A.localBounds},getBounds(A,_){return getGlobalBounds(this,A,_||new Bounds)}},onRenderMixin={_onRender:null,set onRender(A){const _=this.renderGroup||this.parentRenderGroup;if(!A){this._onRender&&(_==null||_.removeOnRender(this)),this._onRender=null;return}this._onRender||_==null||_.addOnRender(this),this._onRender=A},get onRender(){return this._onRender}},sortMixin={_zIndex:0,sortDirty:!1,sortableChildren:!1,get zIndex(){return this._zIndex},set zIndex(A){this._zIndex!==A&&(this._zIndex=A,this.depthOfChildModified())},depthOfChildModified(){this.parent&&(this.parent.sortableChildren=!0,this.parent.sortDirty=!0),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0)},sortChildren(){this.sortDirty&&(this.sortDirty=!1,this.children.sort(sortChildren))}};function sortChildren(A,_){return A._zIndex-_._zIndex}const toLocalGlobalMixin={getGlobalPosition(A=new Point,_=!1){return this.parent?this.parent.toGlobal(this._position,A,_):(A.x=this._position.x,A.y=this._position.y),A},toGlobal(A,_,C=!1){const T=this.getGlobalTransform(matrixPool.get(),C);return _=T.apply(A,_),matrixPool.return(T),_},toLocal(A,_,C,T){_&&(A=_.toGlobal(A,C,T));const R=this.getGlobalTransform(matrixPool.get(),T);return C=R.applyInverse(A,C),matrixPool.return(R),C}};class InstructionSet{constructor(){this.uid=uid("instructionSet"),this.instructions=[],this.instructionSize=0,this.renderables=[],this.gcTick=0}reset(){this.instructionSize=0}destroy(){this.instructions.length=0,this.renderables.length=0,this.renderPipes=null,this.gcTick=0}add(_){this.instructions[this.instructionSize++]=_}log(){this.instructions.length=this.instructionSize,console.table(this.instructions,["type","action"])}}let count=0;class TexturePoolClass{constructor(_){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=_||{},this.enableFullScreen=!1,this.textureStyle=new TextureStyle(this.textureOptions)}createTexture(_,C,T,R){const P=new TextureSource({...this.textureOptions,width:_,height:C,resolution:1,antialias:T,autoGarbageCollect:!1,autoGenerateMipmaps:R});return new Texture({source:P,label:`texturePool_${count++}`})}getOptimalTexture(_,C,T=1,R,P=!1){let I=Math.ceil(_*T-1e-6),E=Math.ceil(C*T-1e-6);I=nextPow2(I),E=nextPow2(E);const B=R?1:0,O=P?1:0,G=(I<<17)+(E<<2)+(O<<1)+B;this._texturePool[G]||(this._texturePool[G]=[]);let L=this._texturePool[G].pop();return L||(L=this.createTexture(I,E,R,P)),L.source._resolution=T,L.source.width=I/T,L.source.height=E/T,L.source.pixelWidth=I,L.source.pixelHeight=E,L.frame.x=0,L.frame.y=0,L.frame.width=_,L.frame.height=C,L.updateUvs(),this._poolKeyHash[L.uid]=G,L}getSameSizeTexture(_,C=!1){const T=_.source;return this.getOptimalTexture(_.width,_.height,T._resolution,C)}returnTexture(_,C=!1){const T=this._poolKeyHash[_.uid];C&&(_.source.style=this.textureStyle),this._texturePool[T].push(_)}clear(_){if(_=_!==!1,_)for(const C in this._texturePool){const T=this._texturePool[C];if(T)for(let R=0;R<T.length;R++)T[R].destroy(!0)}this._texturePool={}}}const TexturePool=new TexturePoolClass;GlobalResourceRegistry.register(TexturePool);class RenderGroup{constructor(){this.renderPipeId="renderGroup",this.root=null,this.canBundle=!1,this.renderGroupParent=null,this.renderGroupChildren=[],this.worldTransform=new Matrix,this.worldColorAlpha=4294967295,this.worldColor=16777215,this.worldAlpha=1,this.childrenToUpdate=Object.create(null),this.updateTick=0,this.gcTick=0,this.childrenRenderablesToUpdate={list:[],index:0},this.structureDidChange=!0,this.instructionSet=new InstructionSet,this._onRenderContainers=[],this.textureNeedsUpdate=!0,this.isCachedAsTexture=!1,this._matrixDirty=7}init(_){this.root=_,_._onRender&&this.addOnRender(_),_.didChange=!0;const C=_.children;for(let T=0;T<C.length;T++){const R=C[T];R._updateFlags=15,this.addChild(R)}}enableCacheAsTexture(_={}){this.textureOptions=_,this.isCachedAsTexture=!0,this.textureNeedsUpdate=!0}disableCacheAsTexture(){this.isCachedAsTexture=!1,this.texture&&(TexturePool.returnTexture(this.texture,!0),this.texture=null)}updateCacheTexture(){this.textureNeedsUpdate=!0;const _=this._parentCacheAsTextureRenderGroup;_&&!_.textureNeedsUpdate&&_.updateCacheTexture()}reset(){this.renderGroupChildren.length=0;for(const _ in this.childrenToUpdate){const C=this.childrenToUpdate[_];C.list.fill(null),C.index=0}this.childrenRenderablesToUpdate.index=0,this.childrenRenderablesToUpdate.list.fill(null),this.root=null,this.updateTick=0,this.structureDidChange=!0,this._onRenderContainers.length=0,this.renderGroupParent=null,this.disableCacheAsTexture()}get localTransform(){return this.root.localTransform}addRenderGroupChild(_){_.renderGroupParent&&_.renderGroupParent._removeRenderGroupChild(_),_.renderGroupParent=this,this.renderGroupChildren.push(_)}_removeRenderGroupChild(_){const C=this.renderGroupChildren.indexOf(_);C>-1&&this.renderGroupChildren.splice(C,1),_.renderGroupParent=null}addChild(_){if(this.structureDidChange=!0,_.parentRenderGroup=this,_.updateTick=-1,_.parent===this.root?_.relativeRenderGroupDepth=1:_.relativeRenderGroupDepth=_.parent.relativeRenderGroupDepth+1,_.didChange=!0,this.onChildUpdate(_),_.renderGroup){this.addRenderGroupChild(_.renderGroup);return}_._onRender&&this.addOnRender(_);const C=_.children;for(let T=0;T<C.length;T++)this.addChild(C[T])}removeChild(_){if(this.structureDidChange=!0,_._onRender&&(_.renderGroup||this.removeOnRender(_)),_.parentRenderGroup=null,_.renderGroup){this._removeRenderGroupChild(_.renderGroup);return}const C=_.children;for(let T=0;T<C.length;T++)this.removeChild(C[T])}removeChildren(_){for(let C=0;C<_.length;C++)this.removeChild(_[C])}onChildUpdate(_){let C=this.childrenToUpdate[_.relativeRenderGroupDepth];C||(C=this.childrenToUpdate[_.relativeRenderGroupDepth]={index:0,list:[]}),C.list[C.index++]=_}updateRenderable(_){_.globalDisplayStatus<7||(this.instructionSet.renderPipes[_.renderPipeId].updateRenderable(_),_.didViewUpdate=!1)}onChildViewUpdate(_){this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++]=_}get isRenderable(){return this.root.localDisplayStatus===7&&this.worldAlpha>0}addOnRender(_){this._onRenderContainers.push(_)}removeOnRender(_){this._onRenderContainers.splice(this._onRenderContainers.indexOf(_),1)}runOnRender(_){for(let C=0;C<this._onRenderContainers.length;C++)this._onRenderContainers[C]._onRender(_)}destroy(){this.disableCacheAsTexture(),this.renderGroupParent=null,this.root=null,this.childrenRenderablesToUpdate=null,this.childrenToUpdate=null,this.renderGroupChildren=null,this._onRenderContainers=null,this.instructionSet=null}getChildren(_=[]){const C=this.root.children;for(let T=0;T<C.length;T++)this._getChildren(C[T],_);return _}_getChildren(_,C=[]){if(C.push(_),_.renderGroup)return C;const T=_.children;for(let R=0;R<T.length;R++)this._getChildren(T[R],C);return C}invalidateMatrices(){this._matrixDirty=7}get inverseWorldTransform(){return this._matrixDirty&1?(this._matrixDirty&=-2,this._inverseWorldTransform||(this._inverseWorldTransform=new Matrix),this._inverseWorldTransform.copyFrom(this.worldTransform).invert()):this._inverseWorldTransform}get textureOffsetInverseTransform(){return this._matrixDirty&2?(this._matrixDirty&=-3,this._textureOffsetInverseTransform||(this._textureOffsetInverseTransform=new Matrix),this._textureOffsetInverseTransform.copyFrom(this.inverseWorldTransform).translate(-this._textureBounds.x,-this._textureBounds.y)):this._textureOffsetInverseTransform}get inverseParentTextureTransform(){if(!(this._matrixDirty&4))return this._inverseParentTextureTransform;this._matrixDirty&=-5;const _=this._parentCacheAsTextureRenderGroup;return _?(this._inverseParentTextureTransform||(this._inverseParentTextureTransform=new Matrix),this._inverseParentTextureTransform.copyFrom(this.worldTransform).prepend(_.inverseWorldTransform).translate(-_._textureBounds.x,-_._textureBounds.y)):this.worldTransform}get cacheToLocalTransform(){return this.isCachedAsTexture?this.textureOffsetInverseTransform:this._parentCacheAsTextureRenderGroup?this._parentCacheAsTextureRenderGroup.textureOffsetInverseTransform:null}}function assignWithIgnore(A,_,C={}){for(const T in _)!C[T]&&_[T]!==void 0&&(A[T]=_[T])}const defaultSkew=new ObservablePoint(null),defaultPivot=new ObservablePoint(null),defaultScale=new ObservablePoint(null,1,1),defaultOrigin=new ObservablePoint(null),UPDATE_COLOR=1,UPDATE_BLEND=2,UPDATE_VISIBLE=4;class Container extends EventEmitter{constructor(_={}){var C,T;super(),this.uid=uid("renderable"),this._updateFlags=15,this.renderGroup=null,this.parentRenderGroup=null,this.parentRenderGroupIndex=0,this.didChange=!1,this.didViewUpdate=!1,this.relativeRenderGroupDepth=0,this.children=[],this.parent=null,this.includeInBuild=!0,this.measurable=!0,this.isSimple=!0,this.parentRenderLayer=null,this.updateTick=-1,this.localTransform=new Matrix,this.relativeGroupTransform=new Matrix,this.groupTransform=this.relativeGroupTransform,this.destroyed=!1,this._position=new ObservablePoint(this,0,0),this._scale=defaultScale,this._pivot=defaultPivot,this._origin=defaultOrigin,this._skew=defaultSkew,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._rotation=0,this.localColor=16777215,this.localAlpha=1,this.groupAlpha=1,this.groupColor=16777215,this.groupColorAlpha=4294967295,this.localBlendMode="inherit",this.groupBlendMode="normal",this.localDisplayStatus=7,this.globalDisplayStatus=7,this._didContainerChangeTick=0,this._didViewChangeTick=0,this._didLocalTransformChangeId=-1,this.effects=[],assignWithIgnore(this,_,{children:!0,parent:!0,effects:!0}),(C=_.children)==null||C.forEach(R=>this.addChild(R)),(T=_.parent)==null||T.addChild(this)}static mixin(_){deprecation("8.8.0","Container.mixin is deprecated, please use extensions.mixin instead."),extensions.mixin(Container,_)}set _didChangeId(_){this._didViewChangeTick=_>>12&4095,this._didContainerChangeTick=_&4095}get _didChangeId(){return this._didContainerChangeTick&4095|(this._didViewChangeTick&4095)<<12}addChild(..._){if(this.allowChildren||deprecation(v8_0_0,"addChild: Only Containers will be allowed to add children in v8.0.0"),_.length>1){for(let R=0;R<_.length;R++)this.addChild(_[R]);return _[0]}const C=_[0],T=this.renderGroup||this.parentRenderGroup;return C.parent===this?(this.children.splice(this.children.indexOf(C),1),this.children.push(C),T&&(T.structureDidChange=!0),C):(C.parent&&C.parent.removeChild(C),this.children.push(C),this.sortableChildren&&(this.sortDirty=!0),C.parent=this,C.didChange=!0,C._updateFlags=15,T&&T.addChild(C),this.emit("childAdded",C,this,this.children.length-1),C.emit("added",this),this._didViewChangeTick++,C._zIndex!==0&&C.depthOfChildModified(),C)}removeChild(..._){if(_.length>1){for(let R=0;R<_.length;R++)this.removeChild(_[R]);return _[0]}const C=_[0],T=this.children.indexOf(C);return T>-1&&(this._didViewChangeTick++,this.children.splice(T,1),this.renderGroup?this.renderGroup.removeChild(C):this.parentRenderGroup&&this.parentRenderGroup.removeChild(C),C.parentRenderLayer&&C.parentRenderLayer.detach(C),C.parent=null,this.emit("childRemoved",C,this,T),C.emit("removed",this)),C}_onUpdate(_){_&&_===this._skew&&this._updateSkew(),this._didContainerChangeTick++,!this.didChange&&(this.didChange=!0,this.parentRenderGroup&&this.parentRenderGroup.onChildUpdate(this))}set isRenderGroup(_){!!this.renderGroup!==_&&(_?this.enableRenderGroup():this.disableRenderGroup())}get isRenderGroup(){return!!this.renderGroup}enableRenderGroup(){if(this.renderGroup)return;const _=this.parentRenderGroup;_==null||_.removeChild(this),this.renderGroup=BigPool.get(RenderGroup,this),this.groupTransform=Matrix.IDENTITY,_==null||_.addChild(this),this._updateIsSimple()}disableRenderGroup(){if(!this.renderGroup)return;const _=this.parentRenderGroup;_==null||_.removeChild(this),BigPool.return(this.renderGroup),this.renderGroup=null,this.groupTransform=this.relativeGroupTransform,_==null||_.addChild(this),this._updateIsSimple()}_updateIsSimple(){this.isSimple=!this.renderGroup&&this.effects.length===0}get worldTransform(){return this._worldTransform||(this._worldTransform=new Matrix),this.renderGroup?this._worldTransform.copyFrom(this.renderGroup.worldTransform):this.parentRenderGroup&&this._worldTransform.appendFrom(this.relativeGroupTransform,this.parentRenderGroup.worldTransform),this._worldTransform}get x(){return this._position.x}set x(_){this._position.x=_}get y(){return this._position.y}set y(_){this._position.y=_}get position(){return this._position}set position(_){this._position.copyFrom(_)}get rotation(){return this._rotation}set rotation(_){this._rotation!==_&&(this._rotation=_,this._onUpdate(this._skew))}get angle(){return this.rotation*RAD_TO_DEG}set angle(_){this.rotation=_*DEG_TO_RAD}get pivot(){return this._pivot===defaultPivot&&(this._pivot=new ObservablePoint(this,0,0)),this._pivot}set pivot(_){this._pivot===defaultPivot&&(this._pivot=new ObservablePoint(this,0,0),this._origin!==defaultOrigin&&warn("Setting both a pivot and origin on a Container is not recommended. This can lead to unexpected behavior if not handled carefully.")),typeof _=="number"?this._pivot.set(_):this._pivot.copyFrom(_)}get skew(){return this._skew===defaultSkew&&(this._skew=new ObservablePoint(this,0,0)),this._skew}set skew(_){this._skew===defaultSkew&&(this._skew=new ObservablePoint(this,0,0)),this._skew.copyFrom(_)}get scale(){return this._scale===defaultScale&&(this._scale=new ObservablePoint(this,1,1)),this._scale}set scale(_){this._scale===defaultScale&&(this._scale=new ObservablePoint(this,0,0)),typeof _=="string"&&(_=parseFloat(_)),typeof _=="number"?this._scale.set(_):this._scale.copyFrom(_)}get origin(){return this._origin===defaultOrigin&&(this._origin=new ObservablePoint(this,0,0)),this._origin}set origin(_){this._origin===defaultOrigin&&(this._origin=new ObservablePoint(this,0,0),this._pivot!==defaultPivot&&warn("Setting both a pivot and origin on a Container is not recommended. This can lead to unexpected behavior if not handled carefully.")),typeof _=="number"?this._origin.set(_):this._origin.copyFrom(_)}get width(){return Math.abs(this.scale.x*this.getLocalBounds().width)}set width(_){const C=this.getLocalBounds().width;this._setWidth(_,C)}get height(){return Math.abs(this.scale.y*this.getLocalBounds().height)}set height(_){const C=this.getLocalBounds().height;this._setHeight(_,C)}getSize(_){_||(_={});const C=this.getLocalBounds();return _.width=Math.abs(this.scale.x*C.width),_.height=Math.abs(this.scale.y*C.height),_}setSize(_,C){const T=this.getLocalBounds();typeof _=="object"?(C=_.height??_.width,_=_.width):C??(C=_),_!==void 0&&this._setWidth(_,T.width),C!==void 0&&this._setHeight(C,T.height)}_updateSkew(){const _=this._rotation,C=this._skew;this._cx=Math.cos(_+C._y),this._sx=Math.sin(_+C._y),this._cy=-Math.sin(_-C._x),this._sy=Math.cos(_-C._x)}updateTransform(_){return this.position.set(typeof _.x=="number"?_.x:this.position.x,typeof _.y=="number"?_.y:this.position.y),this.scale.set(typeof _.scaleX=="number"?_.scaleX:this.scale.x,typeof _.scaleY=="number"?_.scaleY:this.scale.y),this.rotation=typeof _.rotation=="number"?_.rotation:this.rotation,this.skew.set(typeof _.skewX=="number"?_.skewX:this.skew.x,typeof _.skewY=="number"?_.skewY:this.skew.y),this.pivot.set(typeof _.pivotX=="number"?_.pivotX:this.pivot.x,typeof _.pivotY=="number"?_.pivotY:this.pivot.y),this.origin.set(typeof _.originX=="number"?_.originX:this.origin.x,typeof _.originY=="number"?_.originY:this.origin.y),this}setFromMatrix(_){_.decompose(this)}updateLocalTransform(){const _=this._didContainerChangeTick;if(this._didLocalTransformChangeId===_)return;this._didLocalTransformChangeId=_;const C=this.localTransform,T=this._scale,R=this._pivot,P=this._origin,I=this._position,E=T._x,B=T._y,O=R._x,G=R._y,L=-P._x,F=-P._y;C.a=this._cx*E,C.b=this._sx*E,C.c=this._cy*B,C.d=this._sy*B,C.tx=I._x-(O*C.a+G*C.c)+(L*C.a+F*C.c)-L,C.ty=I._y-(O*C.b+G*C.d)+(L*C.b+F*C.d)-F}set alpha(_){_!==this.localAlpha&&(this.localAlpha=_,this._updateFlags|=UPDATE_COLOR,this._onUpdate())}get alpha(){return this.localAlpha}set tint(_){const T=Color.shared.setValue(_??16777215).toBgrNumber();T!==this.localColor&&(this.localColor=T,this._updateFlags|=UPDATE_COLOR,this._onUpdate())}get tint(){return bgr2rgb(this.localColor)}set blendMode(_){this.localBlendMode!==_&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=UPDATE_BLEND,this.localBlendMode=_,this._onUpdate())}get blendMode(){return this.localBlendMode}get visible(){return!!(this.localDisplayStatus&2)}set visible(_){const C=_?2:0;(this.localDisplayStatus&2)!==C&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=UPDATE_VISIBLE,this.localDisplayStatus^=2,this._onUpdate(),this.emit("visibleChanged",_))}get culled(){return!(this.localDisplayStatus&4)}set culled(_){const C=_?0:4;(this.localDisplayStatus&4)!==C&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=UPDATE_VISIBLE,this.localDisplayStatus^=4,this._onUpdate())}get renderable(){return!!(this.localDisplayStatus&1)}set renderable(_){const C=_?1:0;(this.localDisplayStatus&1)!==C&&(this._updateFlags|=UPDATE_VISIBLE,this.localDisplayStatus^=1,this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._onUpdate())}get isRenderable(){return this.localDisplayStatus===7&&this.groupAlpha>0}destroy(_=!1){var R;if(this.destroyed)return;this.destroyed=!0;let C;if(this.children.length&&(C=this.removeChildren(0,this.children.length)),this.removeFromParent(),this.parent=null,this._maskEffect=null,this._filterEffect=null,this.effects=null,this._position=null,this._scale=null,this._pivot=null,this._origin=null,this._skew=null,this.emit("destroyed",this),this.removeAllListeners(),(typeof _=="boolean"?_:_==null?void 0:_.children)&&C)for(let P=0;P<C.length;++P)C[P].destroy(_);(R=this.renderGroup)==null||R.destroy(),this.renderGroup=null}}extensions.mixin(Container,childrenHelperMixin,getFastGlobalBoundsMixin,toLocalGlobalMixin,onRenderMixin,measureMixin,effectsMixin,findMixin,sortMixin,cullingMixin,cacheAsTextureMixin,getGlobalMixin,collectRenderablesMixin);class ViewContainer extends Container{constructor(_){super(_),this.canBundle=!0,this.allowChildren=!1,this._roundPixels=0,this._lastUsed=-1,this._gpuData=Object.create(null),this.autoGarbageCollect=!0,this._gcLastUsed=-1,this._bounds=new Bounds(0,1,0,0),this._boundsDirty=!0,this.autoGarbageCollect=_.autoGarbageCollect??!0}get bounds(){return this._boundsDirty?(this.updateBounds(),this._boundsDirty=!1,this._bounds):this._bounds}get roundPixels(){return!!this._roundPixels}set roundPixels(_){this._roundPixels=_?1:0}containsPoint(_){const C=this.bounds,{x:T,y:R}=_;return T>=C.minX&&T<=C.maxX&&R>=C.minY&&R<=C.maxY}onViewUpdate(){if(this._didViewChangeTick++,this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const _=this.renderGroup||this.parentRenderGroup;_&&_.onChildViewUpdate(this)}unload(){var _;this.emit("unload",this);for(const C in this._gpuData)(_=this._gpuData[C])==null||_.destroy();this._gpuData=Object.create(null),this.onViewUpdate()}destroy(_){this.unload(),super.destroy(_),this._bounds=null}collectRenderablesSimple(_,C,T){const{renderPipes:R}=C;R.blendMode.pushBlendMode(this,this.groupBlendMode,_);const I=R[this.renderPipeId];I!=null&&I.addRenderable&&I.addRenderable(this,_),this.didViewUpdate=!1;const E=this.children,B=E.length;for(let O=0;O<B;O++)E[O].collectRenderables(_,C,T);R.blendMode.popBlendMode(_)}}class Sprite extends ViewContainer{constructor(_=Texture.EMPTY){_ instanceof Texture&&(_={texture:_});const{texture:C=Texture.EMPTY,anchor:T,roundPixels:R,width:P,height:I,...E}=_;super({label:"Sprite",...E}),this.renderPipeId="sprite",this.batched=!0,this._visualBounds={minX:0,maxX:1,minY:0,maxY:0},this._anchor=new ObservablePoint({_onUpdate:()=>{this.onViewUpdate()}}),T?this.anchor=T:C.defaultAnchor&&(this.anchor=C.defaultAnchor),this.texture=C,this.allowChildren=!1,this.roundPixels=R??!1,P!==void 0&&(this.width=P),I!==void 0&&(this.height=I)}static from(_,C=!1){return _ instanceof Texture?new Sprite(_):new Sprite(Texture.from(_,C))}set texture(_){_||(_=Texture.EMPTY);const C=this._texture;C!==_&&(C&&C.dynamic&&C.off("update",this.onViewUpdate,this),_.dynamic&&_.on("update",this.onViewUpdate,this),this._texture=_,this._width&&this._setWidth(this._width,this._texture.orig.width),this._height&&this._setHeight(this._height,this._texture.orig.height),this.onViewUpdate())}get texture(){return this._texture}get visualBounds(){return updateQuadBounds(this._visualBounds,this._anchor,this._texture),this._visualBounds}get sourceBounds(){return deprecation("8.6.1","Sprite.sourceBounds is deprecated, use visualBounds instead."),this.visualBounds}updateBounds(){const _=this._anchor,C=this._texture,T=this._bounds,{width:R,height:P}=C.orig;T.minX=-_._x*R,T.maxX=T.minX+R,T.minY=-_._y*P,T.maxY=T.minY+P}destroy(_=!1){if(super.destroy(_),typeof _=="boolean"?_:_==null?void 0:_.texture){const T=typeof _=="boolean"?_:_==null?void 0:_.textureSource;this._texture.destroy(T)}this._texture=null,this._visualBounds=null,this._bounds=null,this._anchor=null}get anchor(){return this._anchor}set anchor(_){typeof _=="number"?this._anchor.set(_):this._anchor.copyFrom(_)}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(_){this._setWidth(_,this._texture.orig.width),this._width=_}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(_){this._setHeight(_,this._texture.orig.height),this._height=_}getSize(_){return _||(_={}),_.width=Math.abs(this.scale.x)*this._texture.orig.width,_.height=Math.abs(this.scale.y)*this._texture.orig.height,_}setSize(_,C){typeof _=="object"?(C=_.height??_.width,_=_.width):C??(C=_),_!==void 0&&this._setWidth(_,this._texture.orig.width),C!==void 0&&this._setHeight(C,this._texture.orig.height)}}const tempBounds$1=new Bounds;function addMaskBounds(A,_,C){const T=tempBounds$1;A.measurable=!0,getGlobalBounds(A,C,T),_.addBoundsMask(T),A.measurable=!1}function addMaskLocalBounds(A,_,C){const T=boundsPool.get();A.measurable=!0;const R=matrixPool.get().identity(),P=getMatrixRelativeToParent(A,C,R);getLocalBounds(A,T,P),A.measurable=!1,_.addBoundsMask(T),matrixPool.return(R),boundsPool.return(T)}function getMatrixRelativeToParent(A,_,C){return A?(A!==_&&(getMatrixRelativeToParent(A.parent,_,C),A.updateLocalTransform(),C.append(A.localTransform)),C):(warn("Mask bounds, renderable is not inside the root container"),C)}class AlphaMask{constructor(_){this.priority=0,this.inverse=!1,this.channel="red",this.pipe="alphaMask",_!=null&&_.mask&&this.init(_.mask)}init(_){this.mask=_,this.renderMaskToTexture=!(_ instanceof Sprite),this.mask.renderable=this.renderMaskToTexture,this.mask.includeInBuild=!this.renderMaskToTexture,this.mask.measurable=!1}reset(){this.mask!==null&&(this.mask.measurable=!0,this.mask=null)}addBounds(_,C){this.inverse||addMaskBounds(this.mask,_,C)}addLocalBounds(_,C){addMaskLocalBounds(this.mask,_,C)}containsPoint(_,C){const T=this.mask;return C(T,_)}destroy(){this.reset()}static test(_){return _ instanceof Sprite}}AlphaMask.extension=ExtensionType.MaskEffect;class ColorMask{constructor(_){this.priority=0,this.pipe="colorMask",_!=null&&_.mask&&this.init(_.mask)}init(_){this.mask=_}destroy(){}static test(_){return typeof _=="number"}}ColorMask.extension=ExtensionType.MaskEffect;class StencilMask{constructor(_){this.priority=0,this.pipe="stencilMask",_!=null&&_.mask&&this.init(_.mask)}init(_){this.mask=_,this.mask.includeInBuild=!1,this.mask.measurable=!1}reset(){this.mask!==null&&(this.mask.measurable=!0,this.mask.includeInBuild=!0,this.mask=null)}addBounds(_,C){addMaskBounds(this.mask,_,C)}addLocalBounds(_,C){addMaskLocalBounds(this.mask,_,C)}containsPoint(_,C){const T=this.mask;return C(T,_)}destroy(){this.reset()}static test(_){return _ instanceof Container}}StencilMask.extension=ExtensionType.MaskEffect;const BrowserAdapter={createCanvas:(A,_)=>{const C=document.createElement("canvas");return C.width=A,C.height=_,C},createImage:()=>new Image,getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>document.baseURI??window.location.href,getFontFaceSet:()=>document.fonts,fetch:(A,_)=>fetch(A,_),parseXML:A=>new DOMParser().parseFromString(A,"text/xml")};let currentAdapter=BrowserAdapter;const DOMAdapter={get(){return currentAdapter},set(A){currentAdapter=A}};class CanvasSource extends TextureSource{constructor(_){_.resource||(_.resource=DOMAdapter.get().createCanvas()),_.width||(_.width=_.resource.width,_.autoDensity||(_.width/=_.resolution)),_.height||(_.height=_.resource.height,_.autoDensity||(_.height/=_.resolution)),super(_),this.uploadMethodId="image",this.autoDensity=_.autoDensity,this.resizeCanvas(),this.transparent=!!_.transparent}resizeCanvas(){this.autoDensity&&"style"in this.resource&&(this.resource.style.width=`${this.width}px`,this.resource.style.height=`${this.height}px`),(this.resource.width!==this.pixelWidth||this.resource.height!==this.pixelHeight)&&(this.resource.width=this.pixelWidth,this.resource.height=this.pixelHeight)}resize(_=this.width,C=this.height,T=this._resolution){const R=super.resize(_,C,T);return R&&this.resizeCanvas(),R}static test(_){return globalThis.HTMLCanvasElement&&_ instanceof HTMLCanvasElement||globalThis.OffscreenCanvas&&_ instanceof OffscreenCanvas}get context2D(){return this._context2D||(this._context2D=this.resource.getContext("2d"))}}CanvasSource.extension=ExtensionType.TextureSource;class ImageSource extends TextureSource{constructor(_){super(_),this.uploadMethodId="image",this.autoGarbageCollect=!0}static test(_){return globalThis.HTMLImageElement&&_ instanceof HTMLImageElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||globalThis.VideoFrame&&_ instanceof VideoFrame}}ImageSource.extension=ExtensionType.TextureSource;var UPDATE_PRIORITY=(A=>(A[A.INTERACTION=50]="INTERACTION",A[A.HIGH=25]="HIGH",A[A.NORMAL=0]="NORMAL",A[A.LOW=-25]="LOW",A[A.UTILITY=-50]="UTILITY",A))(UPDATE_PRIORITY||{});class TickerListener{constructor(_,C=null,T=0,R=!1){this.next=null,this.previous=null,this._destroyed=!1,this._fn=_,this._context=C,this.priority=T,this._once=R}match(_,C=null){return this._fn===_&&this._context===C}emit(_){this._fn&&(this._context?this._fn.call(this._context,_):this._fn(_));const C=this.next;return this._once&&this.destroy(!0),this._destroyed&&(this.next=null),C}connect(_){this.previous=_,_.next&&(_.next.previous=this),this.next=_.next,_.next=this}destroy(_=!1){this._destroyed=!0,this._fn=null,this._context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);const C=this.next;return this.next=_?null:C,this.previous=null,C}}const _Ticker=class qt{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new TickerListener(null,null,1/0),this.deltaMS=1/qt.targetFPMS,this.elapsedMS=1/qt.targetFPMS,this._tick=_=>{this._requestId=null,this.started&&(this.update(_),this.started&&this._requestId===null&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)))}}_requestIfNeeded(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))}_cancelIfNeeded(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)}_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start()}add(_,C,T=UPDATE_PRIORITY.NORMAL){return this._addListener(new TickerListener(_,C,T))}addOnce(_,C,T=UPDATE_PRIORITY.NORMAL){return this._addListener(new TickerListener(_,C,T,!0))}_addListener(_){let C=this._head.next,T=this._head;if(!C)_.connect(T);else{for(;C;){if(_.priority>C.priority){_.connect(T);break}T=C,C=C.next}_.previous||_.connect(T)}return this._startIfPossible(),this}remove(_,C){let T=this._head.next;for(;T;)T.match(_,C)?T=T.destroy():T=T.next;return this._head.next||this._cancelIfNeeded(),this}get count(){if(!this._head)return 0;let _=0,C=this._head;for(;C=C.next;)_++;return _}start(){this.started||(this.started=!0,this._requestIfNeeded())}stop(){this.started&&(this.started=!1,this._cancelIfNeeded())}destroy(){if(!this._protected){this.stop();let _=this._head.next;for(;_;)_=_.destroy(!0);this._head.destroy(),this._head=null}}update(_=performance.now()){let C;if(_>this.lastTime){if(C=this.elapsedMS=_-this.lastTime,C>this._maxElapsedMS&&(C=this._maxElapsedMS),C*=this.speed,this._minElapsedMS){const P=_-this._lastFrame|0;if(P<this._minElapsedMS)return;this._lastFrame=_-P%this._minElapsedMS}this.deltaMS=C,this.deltaTime=this.deltaMS*qt.targetFPMS;const T=this._head;let R=T.next;for(;R;)R=R.emit(this);T.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=_}get FPS(){return 1e3/this.elapsedMS}get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(_){const C=Math.min(Math.max(0,_)/1e3,qt.targetFPMS);this._maxElapsedMS=1/C,this._minElapsedMS&&_>this.maxFPS&&(this.maxFPS=_)}get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(_){_===0?this._minElapsedMS=0:(_<this.minFPS&&(this.minFPS=_),this._minElapsedMS=1/(_/1e3))}static get shared(){if(!qt._shared){const _=qt._shared=new qt;_.autoStart=!0,_._protected=!0}return qt._shared}static get system(){if(!qt._system){const _=qt._system=new qt;_.autoStart=!0,_._protected=!0}return qt._system}};_Ticker.targetFPMS=.06;let Ticker=_Ticker,promise;async function detectVideoAlphaMode(){return promise??(promise=(async()=>{var I;const _=DOMAdapter.get().createCanvas(1,1).getContext("webgl");if(!_)return"premultiply-alpha-on-upload";const C=await new Promise(E=>{const B=document.createElement("video");B.onloadeddata=()=>E(B),B.onerror=()=>E(null),B.autoplay=!1,B.crossOrigin="anonymous",B.preload="auto",B.src="data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=",B.load()});if(!C)return"premultiply-alpha-on-upload";const T=_.createTexture();_.bindTexture(_.TEXTURE_2D,T);const R=_.createFramebuffer();_.bindFramebuffer(_.FRAMEBUFFER,R),_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,T,0),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),_.pixelStorei(_.UNPACK_COLORSPACE_CONVERSION_WEBGL,_.NONE),_.texImage2D(_.TEXTURE_2D,0,_.RGBA,_.RGBA,_.UNSIGNED_BYTE,C);const P=new Uint8Array(4);return _.readPixels(0,0,1,1,_.RGBA,_.UNSIGNED_BYTE,P),_.deleteFramebuffer(R),_.deleteTexture(T),(I=_.getExtension("WEBGL_lose_context"))==null||I.loseContext(),P[0]<=P[3]?"premultiplied-alpha":"premultiply-alpha-on-upload"})()),promise}const _VideoSource=class ce extends TextureSource{constructor(_){super(_),this.isReady=!1,this.uploadMethodId="video",_={...ce.defaultOptions,..._},this._autoUpdate=!0,this._isConnectedToTicker=!1,this._updateFPS=_.updateFPS||0,this._msToNextUpdate=0,this.autoPlay=_.autoPlay!==!1,this.alphaMode=_.alphaMode??"premultiply-alpha-on-upload",this._videoFrameRequestCallback=this._videoFrameRequestCallback.bind(this),this._videoFrameRequestCallbackHandle=null,this._load=null,this._resolve=null,this._reject=null,this._onCanPlay=this._onCanPlay.bind(this),this._onCanPlayThrough=this._onCanPlayThrough.bind(this),this._onError=this._onError.bind(this),this._onPlayStart=this._onPlayStart.bind(this),this._onPlayStop=this._onPlayStop.bind(this),this._onSeeked=this._onSeeked.bind(this),this._onLoadedMetadata=this._onLoadedMetadata.bind(this),_.autoLoad!==!1&&this.load()}updateFrame(){if(!this.destroyed){if(this._updateFPS){const _=Ticker.shared.elapsedMS*this.resource.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-_)}(!this._updateFPS||this._msToNextUpdate<=0)&&(this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0),this.isValid&&this.update()}}_videoFrameRequestCallback(){this.updateFrame(),this.destroyed?this._videoFrameRequestCallbackHandle=null:this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback)}get isValid(){return!!this.resource.videoWidth&&!!this.resource.videoHeight}async load(){if(this._load)return this._load;const _=this.resource,C=this.options;return(_.readyState===_.HAVE_ENOUGH_DATA||_.readyState===_.HAVE_FUTURE_DATA)&&_.width&&_.height&&(_.complete=!0),_.addEventListener("play",this._onPlayStart),_.addEventListener("pause",this._onPlayStop),_.addEventListener("seeked",this._onSeeked),this._isSourceReady()?this._mediaReady():(C.preload||_.addEventListener("canplay",this._onCanPlay),_.addEventListener("canplaythrough",this._onCanPlayThrough),_.addEventListener("error",this._onError,!0)),this.isValid||_.addEventListener("loadedmetadata",this._onLoadedMetadata),this.alphaMode=await detectVideoAlphaMode(),this._load=new Promise((T,R)=>{this.isValid?T(this):(this._resolve=T,this._reject=R,C.preloadTimeoutMs!==void 0&&(this._preloadTimeout=setTimeout(()=>{this._onError(new ErrorEvent(`Preload exceeded timeout of ${C.preloadTimeoutMs}ms`))})),_.load())}),this._load}_onError(_){this.resource.removeEventListener("error",this._onError,!0),this.emit("error",_),this._reject&&(this._reject(_),this._reject=null,this._resolve=null)}_isSourcePlaying(){const _=this.resource;return!_.paused&&!_.ended}_isSourceReady(){return this.resource.readyState>2}_onPlayStart(){this._configureAutoUpdate()}_onPlayStop(){this._configureAutoUpdate()}_onSeeked(){this._autoUpdate&&!this._isSourcePlaying()&&(this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0)}_onLoadedMetadata(){this.isValid&&this._mediaReady()}_onCanPlay(){this.resource.removeEventListener("canplay",this._onCanPlay),this._mediaReady()}_onCanPlayThrough(){this.resource.removeEventListener("canplaythrough",this._onCanPlayThrough),this._preloadTimeout&&(clearTimeout(this._preloadTimeout),this._preloadTimeout=void 0),this._mediaReady()}_mediaReady(){const _=this.resource;this.isValid&&(this.isReady=!0,this.resize(_.videoWidth,_.videoHeight)),this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0,this._resolve&&this.isValid&&(this._resolve(this),this._resolve=null,this._reject=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&this.resource.play()}destroy(){this._configureAutoUpdate();const _=this.resource;_&&(_.removeEventListener("play",this._onPlayStart),_.removeEventListener("pause",this._onPlayStop),_.removeEventListener("seeked",this._onSeeked),_.removeEventListener("canplay",this._onCanPlay),_.removeEventListener("canplaythrough",this._onCanPlayThrough),_.removeEventListener("loadedmetadata",this._onLoadedMetadata),_.removeEventListener("error",this._onError,!0),_.pause(),_.src="",_.load()),super.destroy()}get autoUpdate(){return this._autoUpdate}set autoUpdate(_){_!==this._autoUpdate&&(this._autoUpdate=_,this._configureAutoUpdate())}get updateFPS(){return this._updateFPS}set updateFPS(_){_!==this._updateFPS&&(this._updateFPS=_,this._configureAutoUpdate())}_configureAutoUpdate(){this._autoUpdate&&this._isSourcePlaying()?!this._updateFPS&&this.resource.requestVideoFrameCallback?(this._isConnectedToTicker&&(Ticker.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0),this._videoFrameRequestCallbackHandle===null&&(this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker||(Ticker.shared.add(this.updateFrame,this),this._isConnectedToTicker=!0,this._msToNextUpdate=0)):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker&&(Ticker.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0))}static test(_){return globalThis.HTMLVideoElement&&_ instanceof HTMLVideoElement}};_VideoSource.extension=ExtensionType.TextureSource;_VideoSource.defaultOptions={...TextureSource.defaultOptions,autoLoad:!0,autoPlay:!0,updateFPS:0,crossorigin:!0,loop:!1,muted:!0,playsinline:!0,preload:!1};_VideoSource.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};let VideoSource=_VideoSource;const convertToList=(A,_,C=!1)=>(Array.isArray(A)||(A=[A]),_?A.map(T=>typeof T=="string"||C?_(T):T):A);class CacheClass{constructor(){this._parsers=[],this._cache=new Map,this._cacheMap=new Map}reset(){this._cacheMap.clear(),this._cache.clear()}has(_){return this._cache.has(_)}get(_){const C=this._cache.get(_);return C||warn(`[Assets] Asset id ${_} was not found in the Cache`),C}set(_,C){const T=convertToList(_);let R;for(let B=0;B<this.parsers.length;B++){const O=this.parsers[B];if(O.test(C)){R=O.getCacheableAssets(T,C);break}}const P=new Map(Object.entries(R||{}));R||T.forEach(B=>{P.set(B,C)});const I=[...P.keys()],E={cacheKeys:I,keys:T};T.forEach(B=>{this._cacheMap.set(B,E)}),I.forEach(B=>{const O=R?R[B]:C;this._cache.has(B)&&this._cache.get(B)!==O&&warn("[Cache] already has key:",B),this._cache.set(B,P.get(B))})}remove(_){if(!this._cacheMap.has(_)){warn(`[Assets] Asset id ${_} was not found in the Cache`);return}const C=this._cacheMap.get(_);C.cacheKeys.forEach(R=>{this._cache.delete(R)}),C.keys.forEach(R=>{this._cacheMap.delete(R)})}get parsers(){return this._parsers}}const Cache=new CacheClass,sources=[];extensions.handleByList(ExtensionType.TextureSource,sources);function textureSourceFrom(A={}){const _=A&&A.resource,C=_?A.resource:A,T=_?A:{resource:A};for(let R=0;R<sources.length;R++){const P=sources[R];if(P.test(C))return new P(T)}throw new Error(`Could not find a source type for resource: ${T.resource}`)}function resourceToTexture(A={},_=!1){const C=A&&A.resource,T=C?A.resource:A,R=C?A:{resource:A};if(!_&&Cache.has(T))return Cache.get(T);const P=new Texture({source:textureSourceFrom(R)});return P.on("destroy",()=>{Cache.has(T)&&Cache.remove(T)}),_||Cache.set(T,P),P}function textureFrom(A,_=!1){return typeof A=="string"?Cache.get(A):A instanceof TextureSource?new Texture({source:A}):resourceToTexture(A,_)}Texture.from=textureFrom;TextureSource.from=textureSourceFrom;extensions.add(AlphaMask,ColorMask,StencilMask,VideoSource,ImageSource,CanvasSource,BufferImageSource);var LoaderParserPriority=(A=>(A[A.Low=0]="Low",A[A.Normal=1]="Normal",A[A.High=2]="High",A))(LoaderParserPriority||{});function assertPath(A){if(typeof A!="string")throw new TypeError(`Path must be a string. Received ${JSON.stringify(A)}`)}function removeUrlParams(A){return A.split("?")[0].split("#")[0]}function escapeRegExp(A){return A.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function replaceAll(A,_,C){return A.replace(new RegExp(escapeRegExp(_),"g"),C)}function normalizeStringPosix(A,_){let C="",T=0,R=-1,P=0,I=-1;for(let E=0;E<=A.length;++E){if(E<A.length)I=A.charCodeAt(E);else{if(I===47)break;I=47}if(I===47){if(!(R===E-1||P===1))if(R!==E-1&&P===2){if(C.length<2||T!==2||C.charCodeAt(C.length-1)!==46||C.charCodeAt(C.length-2)!==46){if(C.length>2){const B=C.lastIndexOf("/");if(B!==C.length-1){B===-1?(C="",T=0):(C=C.slice(0,B),T=C.length-1-C.lastIndexOf("/")),R=E,P=0;continue}}else if(C.length===2||C.length===1){C="",T=0,R=E,P=0;continue}}}else C.length>0?C+=`/${A.slice(R+1,E)}`:C=A.slice(R+1,E),T=E-R-1;R=E,P=0}else I===46&&P!==-1?++P:P=-1}return C}const path={toPosix(A){return replaceAll(A,"\\","/")},isUrl(A){return/^https?:/.test(this.toPosix(A))},isDataUrl(A){return/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(A)},isBlobUrl(A){return A.startsWith("blob:")},hasProtocol(A){return/^[^/:]+:/.test(this.toPosix(A))},getProtocol(A){assertPath(A),A=this.toPosix(A);const _=/^file:\/\/\//.exec(A);if(_)return _[0];const C=/^[^/:]+:\/{0,2}/.exec(A);return C?C[0]:""},toAbsolute(A,_,C){if(assertPath(A),this.isDataUrl(A)||this.isBlobUrl(A))return A;const T=removeUrlParams(this.toPosix(_??DOMAdapter.get().getBaseUrl())),R=removeUrlParams(this.toPosix(C??this.rootname(T)));return A=this.toPosix(A),A.startsWith("/")?path.join(R,A.slice(1)):this.isAbsolute(A)?A:this.join(T,A)},normalize(A){if(assertPath(A),A.length===0)return".";if(this.isDataUrl(A)||this.isBlobUrl(A))return A;A=this.toPosix(A);let _="";const C=A.startsWith("/");this.hasProtocol(A)&&(_=this.rootname(A),A=A.slice(_.length));const T=A.endsWith("/");return A=normalizeStringPosix(A),A.length>0&&T&&(A+="/"),C?`/${A}`:_+A},isAbsolute(A){return assertPath(A),A=this.toPosix(A),this.hasProtocol(A)?!0:A.startsWith("/")},join(...A){if(A.length===0)return".";let _;for(let C=0;C<A.length;++C){const T=A[C];if(assertPath(T),T.length>0)if(_===void 0)_=T;else{const R=A[C-1]??"";this.joinExtensions.includes(this.extname(R).toLowerCase())?_+=`/../${T}`:_+=`/${T}`}}return _===void 0?".":this.normalize(_)},dirname(A){if(assertPath(A),A.length===0)return".";A=this.toPosix(A);let _=A.charCodeAt(0);const C=_===47;let T=-1,R=!0;const P=this.getProtocol(A),I=A;A=A.slice(P.length);for(let E=A.length-1;E>=1;--E)if(_=A.charCodeAt(E),_===47){if(!R){T=E;break}}else R=!1;return T===-1?C?"/":this.isUrl(I)?P+A:P:C&&T===1?"//":P+A.slice(0,T)},rootname(A){assertPath(A),A=this.toPosix(A);let _="";if(A.startsWith("/")?_="/":_=this.getProtocol(A),this.isUrl(A)){const C=A.indexOf("/",_.length);C!==-1?_=A.slice(0,C):_=A,_.endsWith("/")||(_+="/")}return _},basename(A,_){assertPath(A),_&&assertPath(_),A=removeUrlParams(this.toPosix(A));let C=0,T=-1,R=!0,P;if(_!==void 0&&_.length>0&&_.length<=A.length){if(_.length===A.length&&_===A)return"";let I=_.length-1,E=-1;for(P=A.length-1;P>=0;--P){const B=A.charCodeAt(P);if(B===47){if(!R){C=P+1;break}}else E===-1&&(R=!1,E=P+1),I>=0&&(B===_.charCodeAt(I)?--I===-1&&(T=P):(I=-1,T=E))}return C===T?T=E:T===-1&&(T=A.length),A.slice(C,T)}for(P=A.length-1;P>=0;--P)if(A.charCodeAt(P)===47){if(!R){C=P+1;break}}else T===-1&&(R=!1,T=P+1);return T===-1?"":A.slice(C,T)},extname(A){assertPath(A),A=removeUrlParams(this.toPosix(A));let _=-1,C=0,T=-1,R=!0,P=0;for(let I=A.length-1;I>=0;--I){const E=A.charCodeAt(I);if(E===47){if(!R){C=I+1;break}continue}T===-1&&(R=!1,T=I+1),E===46?_===-1?_=I:P!==1&&(P=1):_!==-1&&(P=-1)}return _===-1||T===-1||P===0||P===1&&_===T-1&&_===C+1?"":A.slice(_,T)},parse(A){assertPath(A);const _={root:"",dir:"",base:"",ext:"",name:""};if(A.length===0)return _;A=removeUrlParams(this.toPosix(A));let C=A.charCodeAt(0);const T=this.isAbsolute(A);let R;_.root=this.rootname(A),T||this.hasProtocol(A)?R=1:R=0;let P=-1,I=0,E=-1,B=!0,O=A.length-1,G=0;for(;O>=R;--O){if(C=A.charCodeAt(O),C===47){if(!B){I=O+1;break}continue}E===-1&&(B=!1,E=O+1),C===46?P===-1?P=O:G!==1&&(G=1):P!==-1&&(G=-1)}return P===-1||E===-1||G===0||G===1&&P===E-1&&P===I+1?E!==-1&&(I===0&&T?_.base=_.name=A.slice(1,E):_.base=_.name=A.slice(I,E)):(I===0&&T?(_.name=A.slice(1,P),_.base=A.slice(1,E)):(_.name=A.slice(I,P),_.base=A.slice(I,E)),_.ext=A.slice(P,E)),_.dir=this.dirname(A),_},sep:"/",delimiter:":",joinExtensions:[".html"]};function processX(A,_,C,T,R){const P=_[C];for(let I=0;I<P.length;I++){const E=P[I];C<_.length-1?processX(A.replace(T[C],E),_,C+1,T,R):R.push(A.replace(T[C],E))}}function createStringVariations(A){const _=/\{(.*?)\}/g,C=A.match(_),T=[];if(C){const R=[];C.forEach(P=>{const I=P.substring(1,P.length-1).split(",");R.push(I)}),processX(A,R,0,C,T)}else T.push(A);return T}const isSingleItem=A=>!Array.isArray(A);class Resolver{constructor(){this._defaultBundleIdentifierOptions={connector:"-",createBundleAssetId:(_,C)=>`${_}${this._bundleIdConnector}${C}`,extractAssetIdFromBundle:(_,C)=>C.replace(`${_}${this._bundleIdConnector}`,"")},this._bundleIdConnector=this._defaultBundleIdentifierOptions.connector,this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundleAssetId,this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,this._assetMap={},this._preferredOrder=[],this._parsers=[],this._resolverHash={},this._bundles={}}setBundleIdentifier(_){if(this._bundleIdConnector=_.connector??this._bundleIdConnector,this._createBundleAssetId=_.createBundleAssetId??this._createBundleAssetId,this._extractAssetIdFromBundle=_.extractAssetIdFromBundle??this._extractAssetIdFromBundle,this._extractAssetIdFromBundle("foo",this._createBundleAssetId("foo","bar"))!=="bar")throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")}prefer(..._){_.forEach(C=>{this._preferredOrder.push(C),C.priority||(C.priority=Object.keys(C.params))}),this._resolverHash={}}set basePath(_){this._basePath=_}get basePath(){return this._basePath}set rootPath(_){this._rootPath=_}get rootPath(){return this._rootPath}get parsers(){return this._parsers}reset(){this.setBundleIdentifier(this._defaultBundleIdentifierOptions),this._assetMap={},this._preferredOrder=[],this._resolverHash={},this._rootPath=null,this._basePath=null,this._manifest=null,this._bundles={},this._defaultSearchParams=null}setDefaultSearchParams(_){if(typeof _=="string")this._defaultSearchParams=_;else{const C=_;this._defaultSearchParams=Object.keys(C).map(T=>`${encodeURIComponent(T)}=${encodeURIComponent(C[T])}`).join("&")}}getAlias(_){const{alias:C,src:T}=_;return convertToList(C||T,P=>typeof P=="string"?P:Array.isArray(P)?P.map(I=>(I==null?void 0:I.src)??I):P!=null&&P.src?P.src:P,!0)}removeAlias(_,C){this._assetMap[_]&&(C&&C!==this._resolverHash[_]||(delete this._resolverHash[_],delete this._assetMap[_]))}addManifest(_){this._manifest&&warn("[Resolver] Manifest already exists, this will be overwritten"),this._manifest=_,_.bundles.forEach(C=>{this.addBundle(C.name,C.assets)})}addBundle(_,C){const T=[];let R=C;Array.isArray(C)||(R=Object.entries(C).map(([P,I])=>typeof I=="string"||Array.isArray(I)?{alias:P,src:I}:{alias:P,...I})),R.forEach(P=>{const I=P.src,E=P.alias;let B;if(typeof E=="string"){const O=this._createBundleAssetId(_,E);T.push(O),B=[E,O]}else{const O=E.map(G=>this._createBundleAssetId(_,G));T.push(...O),B=[...E,...O]}this.add({...P,alias:B,src:I})}),this._bundles[_]=T}add(_){const C=[];Array.isArray(_)?C.push(..._):C.push(_);let T;T=P=>{this.hasKey(P)&&warn(`[Resolver] already has key: ${P} overwriting`)},convertToList(C).forEach(P=>{const{src:I}=P;let{data:E,format:B,loadParser:O,parser:G}=P;const L=convertToList(I).map(U=>typeof U=="string"?createStringVariations(U):Array.isArray(U)?U:[U]),F=this.getAlias(P);Array.isArray(F)?F.forEach(T):T(F);const D=[],q=U=>{const V=this._parsers.find(W=>W.test(U));return{src:U,...V==null?void 0:V.parse(U)}};L.forEach(U=>{U.forEach(V=>{let W={};if(typeof V!="object"?W=q(V):(E=V.data??E,B=V.format??B,(V.loadParser||V.parser)&&(O=V.loadParser??O,G=V.parser??G),W={...q(V.src),...V}),!F)throw new Error(`[Resolver] alias is undefined for this asset: ${W.src}`);W=this._buildResolvedAsset(W,{aliases:F,data:E,format:B,loadParser:O,parser:G,progressSize:P.progressSize}),D.push(W)})}),F.forEach(U=>{this._assetMap[U]=D})})}resolveBundle(_){const C=isSingleItem(_);_=convertToList(_);const T={};return _.forEach(R=>{const P=this._bundles[R];if(P){const I=this.resolve(P),E={};for(const B in I){const O=I[B];E[this._extractAssetIdFromBundle(R,B)]=O}T[R]=E}}),C?T[_[0]]:T}resolveUrl(_){const C=this.resolve(_);if(typeof _!="string"){const T={};for(const R in C)T[R]=C[R].src;return T}return C.src}resolve(_){const C=isSingleItem(_);_=convertToList(_);const T={};return _.forEach(R=>{if(!this._resolverHash[R])if(this._assetMap[R]){let P=this._assetMap[R];const I=this._getPreferredOrder(P);I==null||I.priority.forEach(E=>{I.params[E].forEach(B=>{const O=P.filter(G=>G[E]?G[E]===B:!1);O.length&&(P=O)})}),this._resolverHash[R]=P[0]}else this._resolverHash[R]=this._buildResolvedAsset({alias:[R],src:R},{});T[R]=this._resolverHash[R]}),C?T[_[0]]:T}hasKey(_){return!!this._assetMap[_]}hasBundle(_){return!!this._bundles[_]}_getPreferredOrder(_){for(let C=0;C<_.length;C++){const T=_[C],R=this._preferredOrder.find(P=>P.params.format.includes(T.format));if(R)return R}return this._preferredOrder[0]}_appendDefaultSearchParams(_){if(!this._defaultSearchParams)return _;const C=/\?/.test(_)?"&":"?";return`${_}${C}${this._defaultSearchParams}`}_buildResolvedAsset(_,C){const{aliases:T,data:R,loadParser:P,parser:I,format:E,progressSize:B}=C;return(this._basePath||this._rootPath)&&(_.src=path.toAbsolute(_.src,this._basePath,this._rootPath)),_.alias=T??_.alias??[_.src],_.src=this._appendDefaultSearchParams(_.src),_.data={...R||{},..._.data},_.loadParser=P??_.loadParser,_.parser=I??_.parser,_.format=E??_.format??getUrlExtension(_.src),B!==void 0&&(_.progressSize=B),_}}Resolver.RETINA_PREFIX=/@([0-9\.]+)x/;function getUrlExtension(A){return A.split(".").pop().split("?").shift().split("#").shift()}const copySearchParams=(A,_)=>{const C=_.split("?")[1];return C&&(A+=`?${C}`),A},_Spritesheet=class jt{constructor(_,C){this.linkedSheets=[];let T=_;(_==null?void 0:_.source)instanceof TextureSource&&(T={texture:_,data:C});const{texture:R,data:P,cachePrefix:I=""}=T;this.cachePrefix=I,this._texture=R instanceof Texture?R:null,this.textureSource=R.source,this.textures={},this.animations={},this.data=P;const E=parseFloat(P.meta.scale);E?(this.resolution=E,R.source.resolution=this.resolution):this.resolution=R.source._resolution,this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}parse(){return new Promise(_=>{this._callback=_,this._batchIndex=0,this._frameKeys.length<=jt.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()})}parseSync(){return this._processFrames(0,!0),this._processAnimations(),this.textures}_processFrames(_,C=!1){let T=_;const R=C?1/0:jt.BATCH_SIZE;for(;T-_<R&&T<this._frameKeys.length;){const P=this._frameKeys[T],I=this._frames[P],E=I.frame;if(E){let B=null,O=null;const G=I.trimmed!==!1&&I.sourceSize?I.sourceSize:I.frame,L=new Rectangle(0,0,Math.floor(G.w)/this.resolution,Math.floor(G.h)/this.resolution);I.rotated?B=new Rectangle(Math.floor(E.x)/this.resolution,Math.floor(E.y)/this.resolution,Math.floor(E.h)/this.resolution,Math.floor(E.w)/this.resolution):B=new Rectangle(Math.floor(E.x)/this.resolution,Math.floor(E.y)/this.resolution,Math.floor(E.w)/this.resolution,Math.floor(E.h)/this.resolution),I.trimmed!==!1&&I.spriteSourceSize&&(O=new Rectangle(Math.floor(I.spriteSourceSize.x)/this.resolution,Math.floor(I.spriteSourceSize.y)/this.resolution,Math.floor(E.w)/this.resolution,Math.floor(E.h)/this.resolution)),this.textures[P]=new Texture({source:this.textureSource,frame:B,orig:L,trim:O,rotate:I.rotated?2:0,defaultAnchor:I.anchor,defaultBorders:I.borders,label:P.toString()})}T++}}_processAnimations(){const _=this.data.animations||{};for(const C in _){this.animations[C]=[];for(let T=0;T<_[C].length;T++){const R=_[C][T];this.animations[C].push(this.textures[R])}}}_parseComplete(){const _=this._callback;this._callback=null,this._batchIndex=0,_.call(this,this.textures)}_nextBatch(){this._processFrames(this._batchIndex*jt.BATCH_SIZE),this._batchIndex++,setTimeout(()=>{this._batchIndex*jt.BATCH_SIZE<this._frameKeys.length?this._nextBatch():(this._processAnimations(),this._parseComplete())},0)}destroy(_=!1){var C;for(const T in this.textures)this.textures[T].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,_&&((C=this._texture)==null||C.destroy(),this.textureSource.destroy()),this._texture=null,this.textureSource=null,this.linkedSheets=[]}};_Spritesheet.BATCH_SIZE=1e3;let Spritesheet=_Spritesheet;const validImages=["jpg","png","jpeg","avif","webp","basis","etc2","bc7","bc6h","bc5","bc4","bc3","bc2","bc1","eac","astc"];function getCacheableAssets(A,_,C){const T={};if(A.forEach(R=>{T[R]=_}),Object.keys(_.textures).forEach(R=>{T[`${_.cachePrefix}${R}`]=_.textures[R]}),!C){const R=path.dirname(A[0]);_.linkedSheets.forEach((P,I)=>{const E=getCacheableAssets([`${R}/${_.data.meta.related_multi_packs[I]}`],P,!0);Object.assign(T,E)})}return T}const spritesheetAsset={extension:ExtensionType.Asset,cache:{test:A=>A instanceof Spritesheet,getCacheableAssets:(A,_)=>getCacheableAssets(A,_,!1)},resolver:{extension:{type:ExtensionType.ResolveParser,name:"resolveSpritesheet"},test:A=>{const C=A.split("?")[0].split("."),T=C.pop(),R=C.pop();return T==="json"&&validImages.includes(R)},parse:A=>{var C;const _=A.split(".");return{resolution:parseFloat(((C=Resolver.RETINA_PREFIX.exec(A))==null?void 0:C[1])??"1"),format:_[_.length-2],src:A}}},loader:{name:"spritesheetLoader",id:"spritesheet",extension:{type:ExtensionType.LoadParser,priority:LoaderParserPriority.Normal,name:"spritesheetLoader"},async testParse(A,_){return path.extname(_.src).toLowerCase()===".json"&&!!A.frames},async parse(A,_,C){var L,F;const{texture:T,imageFilename:R,textureOptions:P,cachePrefix:I}=(_==null?void 0:_.data)??{};let E=path.dirname(_.src);E&&E.lastIndexOf("/")!==E.length-1&&(E+="/");let B;if(T instanceof Texture)B=T;else{const D=copySearchParams(E+(R??A.meta.image),_.src);B=(await C.load([{src:D,data:P}]))[D]}const O=new Spritesheet({texture:B.source,data:A,cachePrefix:I});await O.parse();const G=(L=A==null?void 0:A.meta)==null?void 0:L.related_multi_packs;if(Array.isArray(G)){const D=[];for(const U of G){if(typeof U!="string")continue;let V=E+U;(F=_.data)!=null&&F.ignoreMultiPack||(V=copySearchParams(V,_.src),D.push(C.load({src:V,data:{textureOptions:P,ignoreMultiPack:!0}})))}const q=await Promise.all(D);O.linkedSheets=q,q.forEach(U=>{U.linkedSheets=[O].concat(O.linkedSheets.filter(V=>V!==U))})}return O},async unload(A,_,C){await C.unload(A.textureSource._sourceOrigin),A.destroy(!1)}}};extensions.add(spritesheetAsset);var appleIphone=/iPhone/i,appleIpod=/iPod/i,appleTablet=/iPad/i,appleUniversal=/\biOS-universal(?:.+)Mac\b/i,androidPhone=/\bAndroid(?:.+)Mobile\b/i,androidTablet=/Android/i,amazonPhone=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,amazonTablet=/Silk/i,windowsPhone=/Windows Phone/i,windowsTablet=/\bWindows(?:.+)ARM\b/i,otherBlackBerry=/BlackBerry/i,otherBlackBerry10=/BB10/i,otherOpera=/Opera Mini/i,otherChrome=/\b(CriOS|Chrome)(?:.+)Mobile/i,otherFirefox=/Mobile(?:.+)Firefox\b/i,isAppleTabletOnIos13=function(A){return typeof A<"u"&&A.platform==="MacIntel"&&typeof A.maxTouchPoints=="number"&&A.maxTouchPoints>1&&typeof MSStream>"u"};function createMatch(A){return function(_){return _.test(A)}}function isMobile$1(A){var _={userAgent:"",platform:"",maxTouchPoints:0};!A&&typeof navigator<"u"?_={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}:typeof A=="string"?_.userAgent=A:A&&A.userAgent&&(_={userAgent:A.userAgent,platform:A.platform,maxTouchPoints:A.maxTouchPoints||0});var C=_.userAgent,T=C.split("[FBAN");typeof T[1]<"u"&&(C=T[0]),T=C.split("Twitter"),typeof T[1]<"u"&&(C=T[0]);var R=createMatch(C),P={apple:{phone:R(appleIphone)&&!R(windowsPhone),ipod:R(appleIpod),tablet:!R(appleIphone)&&(R(appleTablet)||isAppleTabletOnIos13(_))&&!R(windowsPhone),universal:R(appleUniversal),device:(R(appleIphone)||R(appleIpod)||R(appleTablet)||R(appleUniversal)||isAppleTabletOnIos13(_))&&!R(windowsPhone)},amazon:{phone:R(amazonPhone),tablet:!R(amazonPhone)&&R(amazonTablet),device:R(amazonPhone)||R(amazonTablet)},android:{phone:!R(windowsPhone)&&R(amazonPhone)||!R(windowsPhone)&&R(androidPhone),tablet:!R(windowsPhone)&&!R(amazonPhone)&&!R(androidPhone)&&(R(amazonTablet)||R(androidTablet)),device:!R(windowsPhone)&&(R(amazonPhone)||R(amazonTablet)||R(androidPhone)||R(androidTablet))||R(/\bokhttp\b/i)},windows:{phone:R(windowsPhone),tablet:R(windowsTablet),device:R(windowsPhone)||R(windowsTablet)},other:{blackberry:R(otherBlackBerry),blackberry10:R(otherBlackBerry10),opera:R(otherOpera),firefox:R(otherFirefox),chrome:R(otherChrome),device:R(otherBlackBerry)||R(otherBlackBerry10)||R(otherOpera)||R(otherFirefox)||R(otherChrome)},any:!1,phone:!1,tablet:!1};return P.any=P.apple.device||P.android.device||P.windows.device||P.other.device,P.phone=P.apple.phone||P.android.phone||P.windows.phone,P.tablet=P.apple.tablet||P.android.tablet||P.windows.tablet,P}const isMobileCall=isMobile$1.default??isMobile$1,isMobile=isMobileCall(globalThis.navigator),idCounts=Object.create(null),idHash=Object.create(null);function createIdFromString(A,_){let C=idHash[A];return C===void 0&&(idCounts[_]===void 0&&(idCounts[_]=1),idHash[A]=C=idCounts[_]++),C}let context;function getTestContext(){return(!context||context!=null&&context.isContextLost())&&(context=DOMAdapter.get().createCanvas().getContext("webgl",{})),context}let maxFragmentPrecision;function getMaxFragmentPrecision(){if(!maxFragmentPrecision){maxFragmentPrecision="mediump";const A=getTestContext();A&&A.getShaderPrecisionFormat&&(maxFragmentPrecision=A.getShaderPrecisionFormat(A.FRAGMENT_SHADER,A.HIGH_FLOAT).precision?"highp":"mediump")}return maxFragmentPrecision}function addProgramDefines(A,_,C){return _?A:C?(A=A.replace("out vec4 finalColor;",""),`

        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${A}
        `):`

        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${A}
        `}function ensurePrecision(A,_,C){const T=C?_.maxSupportedFragmentPrecision:_.maxSupportedVertexPrecision;if(A.substring(0,9)!=="precision"){let R=C?_.requestedFragmentPrecision:_.requestedVertexPrecision;return R==="highp"&&T!=="highp"&&(R="mediump"),`precision ${R} float;
${A}`}else if(T!=="highp"&&A.substring(0,15)==="precision highp")return A.replace("precision highp","precision mediump");return A}function insertVersion(A,_){return _?`#version 300 es
${A}`:A}const fragmentNameCache={},VertexNameCache={};function setProgramName(A,{name:_="pixi-program"},C=!0){_=_.replace(/\s+/g,"-"),_+=C?"-fragment":"-vertex";const T=C?fragmentNameCache:VertexNameCache;return T[_]?(T[_]++,_+=`-${T[_]}`):T[_]=1,A.indexOf("#define SHADER_NAME")!==-1?A:`${`#define SHADER_NAME ${_}`}
${A}`}function stripVersion(A,_){return _?A.replace("#version 300 es",""):A}const processes={stripVersion,ensurePrecision,addProgramDefines,setProgramName,insertVersion},programCache$1=Object.create(null),_GlProgram=class ee{constructor(_){_={...ee.defaultOptions,..._};const C=_.fragment.indexOf("#version 300 es")!==-1,T={stripVersion:C,ensurePrecision:{requestedFragmentPrecision:_.preferredFragmentPrecision,requestedVertexPrecision:_.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:getMaxFragmentPrecision()},setProgramName:{name:_.name},addProgramDefines:C,insertVersion:C};let R=_.fragment,P=_.vertex;Object.keys(processes).forEach(I=>{const E=T[I];R=processes[I](R,E,!0),P=processes[I](P,E,!1)}),this.fragment=R,this.vertex=P,this.transformFeedbackVaryings=_.transformFeedbackVaryings,this._key=createIdFromString(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null,programCache$1[this._cacheKey]=null}static from(_){const C=`${_.vertex}:${_.fragment}`;return programCache$1[C]||(programCache$1[C]=new ee(_),programCache$1[C]._cacheKey=C),programCache$1[C]}};_GlProgram.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let GlProgram=_GlProgram;const attributeFormatData={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function getAttributeInfoFromFormat(A){return attributeFormatData[A]??attributeFormatData.float32}const WGSL_TO_VERTEX_TYPES={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",vec2i:"sint32x2",vec3i:"sint32x3",vec4i:"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",vec2u:"uint32x2",vec3u:"uint32x3",vec4u:"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"},LOCATION_REGEX=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|\)|$)/g;function parseLocations(A,_){let C;for(;(C=LOCATION_REGEX.exec(A))!==null;){const T=WGSL_TO_VERTEX_TYPES[C[3]]??"float32";_[C[2]]={location:parseInt(C[1],10),format:T,stride:getAttributeInfoFromFormat(T).stride,offset:0,instance:!1,start:0}}LOCATION_REGEX.lastIndex=0}function stripComments(A){return A.replace(/\/\/.*$/gm,"").replace(/\/\*[\s\S]*?\*\//g,"")}function extractAttributesFromGpuProgram({source:A,entryPoint:_}){const C={},T=stripComments(A),R=T.indexOf(`fn ${_}(`);if(R===-1)return C;const P=T.indexOf("->",R);if(P===-1)return C;const I=T.substring(R,P);if(parseLocations(I,C),Object.keys(C).length===0){const E=I.match(/\(\s*\w+\s*:\s*(\w+)/);if(E){const B=E[1],O=new RegExp(`struct\\s+${B}\\s*\\{([^}]+)\\}`,"s"),G=T.match(O);G&&parseLocations(G[1],C)}}return C}function extractStructAndGroups(A){var L,F;const _=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,C=/@group\((\d+)\)/,T=/@binding\((\d+)\)/,R=/var(<[^>]+>)? (\w+)/,P=/:\s*([\w<>]+)/,I=/struct\s+(\w+)\s*{([^}]+)}/g,E=/(\w+)\s*:\s*([\w\<\>]+)/g,B=/struct\s+(\w+)/,O=(L=A.match(_))==null?void 0:L.map(D=>({group:parseInt(D.match(C)[1],10),binding:parseInt(D.match(T)[1],10),name:D.match(R)[2],isUniform:D.match(R)[1]==="<uniform>",type:D.match(P)[1]}));if(!O)return{groups:[],structs:[]};const G=((F=A.match(I))==null?void 0:F.map(D=>{const q=D.match(B)[1],U=D.match(E).reduce((V,W)=>{const[z,X]=W.split(":");return V[z.trim()]=X.trim(),V},{});return U?{name:q,members:U}:null}).filter(({name:D})=>O.some(q=>q.type===D||q.type.includes(`<${D}>`))))??[];return{groups:O,structs:G}}var ShaderStage=(A=>(A[A.VERTEX=1]="VERTEX",A[A.FRAGMENT=2]="FRAGMENT",A[A.COMPUTE=4]="COMPUTE",A))(ShaderStage||{});function generateGpuLayoutGroups({groups:A}){const _=[];for(let C=0;C<A.length;C++){const T=A[C];_[T.group]||(_[T.group]=[]),T.isUniform?_[T.group].push({binding:T.binding,visibility:ShaderStage.VERTEX|ShaderStage.FRAGMENT,buffer:{type:"uniform"}}):T.type==="sampler"?_[T.group].push({binding:T.binding,visibility:ShaderStage.FRAGMENT,sampler:{type:"filtering"}}):T.type==="texture_2d"||T.type.startsWith("texture_2d<")?_[T.group].push({binding:T.binding,visibility:ShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}}):T.type==="texture_2d_array"||T.type.startsWith("texture_2d_array<")?_[T.group].push({binding:T.binding,visibility:ShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array",multisampled:!1}}):(T.type==="texture_cube"||T.type.startsWith("texture_cube<"))&&_[T.group].push({binding:T.binding,visibility:ShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"cube",multisampled:!1}})}for(let C=0;C<_.length;C++)_[C]||(_[C]=[]);return _}function generateLayoutHash({groups:A}){const _=[];for(let C=0;C<A.length;C++){const T=A[C];_[T.group]||(_[T.group]={}),_[T.group][T.name]=T.binding}return _}function removeStructAndGroupDuplicates(A,_){const C=new Set,T=new Set,R=[...A.structs,..._.structs].filter(I=>C.has(I.name)?!1:(C.add(I.name),!0)),P=[...A.groups,..._.groups].filter(I=>{const E=`${I.name}-${I.binding}`;return T.has(E)?!1:(T.add(E),!0)});return{structs:R,groups:P}}const programCache=Object.create(null);class GpuProgram{constructor(_){var E,B;this._layoutKey=0,this._attributeLocationsKey=0;const{fragment:C,vertex:T,layout:R,gpuLayout:P,name:I}=_;if(this.name=I,this.fragment=C,this.vertex=T,C.source===T.source){const O=extractStructAndGroups(C.source);this.structsAndGroups=O}else{const O=extractStructAndGroups(T.source),G=extractStructAndGroups(C.source);this.structsAndGroups=removeStructAndGroupDuplicates(O,G)}this.layout=R??generateLayoutHash(this.structsAndGroups),this.gpuLayout=P??generateGpuLayoutGroups(this.structsAndGroups),this.autoAssignGlobalUniforms=((E=this.layout[0])==null?void 0:E.globalUniforms)!==void 0,this.autoAssignLocalUniforms=((B=this.layout[1])==null?void 0:B.localUniforms)!==void 0,this._generateProgramKey()}_generateProgramKey(){const{vertex:_,fragment:C}=this,T=_.source+C.source+_.entryPoint+C.entryPoint;this._layoutKey=createIdFromString(T,"program")}get attributeData(){return this._attributeData??(this._attributeData=extractAttributesFromGpuProgram(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null,programCache[this._cacheKey]=null}static from(_){const C=`${_.vertex.source}:${_.fragment.source}:${_.fragment.entryPoint}:${_.vertex.entryPoint}`;return programCache[C]||(programCache[C]=new GpuProgram(_),programCache[C]._cacheKey=C),programCache[C]}}const UNIFORM_TYPES_VALUES=["f32","i32","vec2<f32>","vec3<f32>","vec4<f32>","mat2x2<f32>","mat3x3<f32>","mat4x4<f32>","mat3x2<f32>","mat4x2<f32>","mat2x3<f32>","mat4x3<f32>","mat2x4<f32>","mat3x4<f32>","vec2<i32>","vec3<i32>","vec4<i32>"],UNIFORM_TYPES_MAP=UNIFORM_TYPES_VALUES.reduce((A,_)=>(A[_]=!0,A),{});function getDefaultUniformValue(A,_){switch(A){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*_);case"vec3<f32>":return new Float32Array(3*_);case"vec4<f32>":return new Float32Array(4*_);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const _UniformGroup=class de{constructor(_,C){this._touched=0,this.uid=uid("uniform"),this._resourceType="uniformGroup",this._resourceId=uid("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,C={...de.defaultOptions,...C},this.uniformStructures=_;const T={};for(const R in _){const P=_[R];if(P.name=R,P.size=P.size??1,!UNIFORM_TYPES_MAP[P.type]){const I=P.type.match(/^array<(\w+(?:<\w+>)?),\s*(\d+)>$/);if(I){const[,E,B]=I;throw new Error(`Uniform type ${P.type} is not supported. Use type: '${E}', size: ${B} instead.`)}throw new Error(`Uniform type ${P.type} is not supported. Supported uniform types are: ${UNIFORM_TYPES_VALUES.join(", ")}`)}P.value??(P.value=getDefaultUniformValue(P.type,P.size)),T[R]=P.value}this.uniforms=T,this._dirtyId=1,this.ubo=C.ubo,this.isStatic=C.isStatic,this._signature=createIdFromString(Object.keys(T).map(R=>`${R}-${_[R].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};_UniformGroup.defaultOptions={ubo:!1,isStatic:!1};let UniformGroup=_UniformGroup;class BindGroup{constructor(_){this.resources=Object.create(null),this._dirty=!0;let C=0;for(const T in _){const R=_[T];this.setResource(R,C++)}this._updateKey()}_updateKey(){if(!this._dirty)return;this._dirty=!1;const _=[];let C=0;for(const T in this.resources)_[C++]=this.resources[T]._resourceId;this._key=_.join("|")}setResource(_,C){var R,P;const T=this.resources[C];_!==T&&((R=T==null?void 0:T.off)==null||R.call(T,"change",this.onResourceChange,this),(P=_.on)==null||P.call(_,"change",this.onResourceChange,this),this.resources[C]=_,this._dirty=!0)}getResource(_){return this.resources[_]}_touch(_,C){const T=this.resources;for(const R in T)T[R]._gcLastUsed=_,T[R]._touched=C}destroy(){var C;const _=this.resources;for(const T in _){const R=_[T];(C=R==null?void 0:R.off)==null||C.call(R,"change",this.onResourceChange,this)}this.resources=null}onResourceChange(_){this._dirty=!0,_.destroyed?this.destroy():this._updateKey()}}var RendererType=(A=>(A[A.WEBGL=1]="WEBGL",A[A.WEBGPU=2]="WEBGPU",A[A.CANVAS=4]="CANVAS",A[A.BOTH=3]="BOTH",A))(RendererType||{});class Shader extends EventEmitter{constructor(_){super(),this.uid=uid("shader"),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[],this._destroyed=!1;let{gpuProgram:C,glProgram:T,groups:R,resources:P,compatibleRenderers:I,groupMap:E}=_;this.gpuProgram=C,this.glProgram=T,I===void 0&&(I=0,C&&(I|=RendererType.WEBGPU),T&&(I|=RendererType.WEBGL)),this.compatibleRenderers=I;const B={};if(!P&&!R&&(P={}),P&&R)throw new Error("[Shader] Cannot have both resources and groups");if(!C&&R&&!E)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!C&&R&&E)for(const O in E)for(const G in E[O]){const L=E[O][G];B[L]={group:O,binding:G,name:L}}else if(C&&R&&!E){const O=C.structsAndGroups.groups;E={},O.forEach(G=>{E[G.group]=E[G.group]||{},E[G.group][G.binding]=G.name,B[G.name]=G})}else if(P){R={},E={},C&&C.structsAndGroups.groups.forEach(L=>{E[L.group]=E[L.group]||{},E[L.group][L.binding]=L.name,B[L.name]=L});let O=0;for(const G in P)B[G]||(R[99]||(R[99]=new BindGroup,this._ownedBindGroups.push(R[99])),B[G]={group:99,binding:O,name:G},E[99]=E[99]||{},E[99][O]=G,O++);for(const G in P){const L=G;let F=P[G];!F.source&&!F._resourceType&&(F=new UniformGroup(F));const D=B[L];D&&(R[D.group]||(R[D.group]=new BindGroup,this._ownedBindGroups.push(R[D.group])),R[D.group].setResource(F,D.binding))}}this.groups=R,this._uniformBindMap=E,this.resources=this._buildResourceAccessor(R,B)}addResource(_,C,T){var R,P;(R=this._uniformBindMap)[C]||(R[C]={}),(P=this._uniformBindMap[C])[T]||(P[T]=_),this.groups[C]||(this.groups[C]=new BindGroup,this._ownedBindGroups.push(this.groups[C]))}_buildResourceAccessor(_,C){const T={};for(const R in C){const P=C[R];Object.defineProperty(T,P.name,{get(){return _[P.group].getResource(P.binding)},set(I){_[P.group].setResource(I,P.binding)}})}return T}destroy(_=!1){var C,T;this._destroyed||(this._destroyed=!0,this.emit("destroy",this),_&&((C=this.gpuProgram)==null||C.destroy(),(T=this.glProgram)==null||T.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(R=>{R.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null)}static from(_){const{gpu:C,gl:T,...R}=_;let P,I;return C&&(P=GpuProgram.from(C)),T&&(I=GlProgram.from(T)),new Shader({gpuProgram:P,glProgram:I,...R})}}const blendModeIds={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8,min:9,max:10},BLEND=0,OFFSET=1,CULLING=2,DEPTH_TEST=3,WINDING=4,DEPTH_MASK=5,_State=class pe{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<BLEND)}set blend(_){!!(this.data&1<<BLEND)!==_&&(this.data^=1<<BLEND)}get offsets(){return!!(this.data&1<<OFFSET)}set offsets(_){!!(this.data&1<<OFFSET)!==_&&(this.data^=1<<OFFSET)}set cullMode(_){if(_==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=_==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<CULLING)}set culling(_){!!(this.data&1<<CULLING)!==_&&(this.data^=1<<CULLING)}get depthTest(){return!!(this.data&1<<DEPTH_TEST)}set depthTest(_){!!(this.data&1<<DEPTH_TEST)!==_&&(this.data^=1<<DEPTH_TEST)}get depthMask(){return!!(this.data&1<<DEPTH_MASK)}set depthMask(_){!!(this.data&1<<DEPTH_MASK)!==_&&(this.data^=1<<DEPTH_MASK)}get clockwiseFrontFace(){return!!(this.data&1<<WINDING)}set clockwiseFrontFace(_){!!(this.data&1<<WINDING)!==_&&(this.data^=1<<WINDING)}get blendMode(){return this._blendMode}set blendMode(_){this.blend=_!=="none",this._blendMode=_,this._blendModeId=blendModeIds[_]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(_){this.offsets=!!_,this._polygonOffset=_}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const _=new pe;return _.depthTest=!1,_.blend=!0,_}};_State.default2d=_State.for2d();let State=_State;const environments=[];extensions.handleByNamedList(ExtensionType.Environment,environments);async function loadEnvironmentExtensions(A){if(!A)for(let _=0;_<environments.length;_++){const C=environments[_];if(C.value.test()){await C.value.load();return}}}let unsafeEval;function unsafeEvalSupported(){if(typeof unsafeEval=="boolean")return unsafeEval;try{unsafeEval=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{unsafeEval=!1}return unsafeEval}const steiners=new Set;function earcut$1(A,_,C=2){const T=_&&_.length,R=T?_[0]*C:A.length;steiners.size&&steiners.clear();let P=linkedList(A,0,R,C,!0);const I=[];if(!P||P.next===P.prev)return I;let E=0,B=0,O=0;if(T&&(P=eliminateHoles(A,_,P,C),P=filterPoints(P)),A.length>80*C){E=A[0],B=A[1];let G=E,L=B;for(let F=C;F<R;F+=C){const D=A[F],q=A[F+1];D<E&&(E=D),q<B&&(B=q),D>G&&(G=D),q>L&&(L=q)}O=Math.max(G-E,L-B),O=O!==0?32767/O:0}return earcutLinked(P,I,C,E,B,O,0),I}function linkedList(A,_,C,T,R){let P=null;if(R===signedArea(A,_,C,T)>0)for(let I=_;I<C;I+=T)P=insertNode(I/T|0,A[I],A[I+1],P);else for(let I=C-T;I>=_;I-=T)P=insertNode(I/T|0,A[I],A[I+1],P);return P&&equals(P,P.next)&&(removeNode(P),P=P.next),P}function filterPoints(A,_=A){const C=_===A;let T=A,R;do R=!1,T!==T.next&&(steiners.size===0||!steiners.has(T))&&(equals(T,T.next)||area(T.prev,T,T.next)===0)?((C||T===_)&&(_=T.prev),removeNode(T),T=T.prev,R=!0):(C||T!==_)&&(T=T.next,R=!C);while(R||T!==_);return _}function earcutLinked(A,_,C,T,R,P,I){if(!A)return;!I&&P&&indexCurve(A,T,R,P);let E=A;for(;A.prev!==A.next;){const B=A.prev,O=A.next;if(area(B,A,O)<0&&(P?isEarHashed(A,T,R,P):isEar(A))){_.push(B.i,A.i,O.i),removeNode(A),A=O,E=O;continue}if(A=O,A===E){I?I===1?(A=cureLocalIntersections(filterPoints(A),_),earcutLinked(A,_,C,T,R,P,2)):I===2&&splitEarcut(A,_,C,T,R,P):earcutLinked(filterPoints(A),_,C,T,R,P,1);break}}}function isEar(A){const _=A.prev,C=A,T=A.next,R=_.x,P=C.x,I=T.x,E=_.y,B=C.y,O=T.y,G=Math.min(R,P,I),L=Math.min(E,B,O),F=Math.max(R,P,I),D=Math.max(E,B,O);let q=T.next;for(;q!==_;){if(q.x>=G&&q.x<=F&&q.y>=L&&q.y<=D&&!(R===q.x&&E===q.y)&&(I-q.x)*(E-q.y)>=(R-q.x)*(O-q.y)&&(R-q.x)*(B-q.y)>=(P-q.x)*(E-q.y)&&(P-q.x)*(O-q.y)>=(I-q.x)*(B-q.y)&&area(q.prev,q,q.next)>=0)return!1;q=q.next}return!0}function isEarHashed(A,_,C,T){const R=A.prev,P=A,I=A.next,E=R.x,B=P.x,O=I.x,G=R.y,L=P.y,F=I.y,D=Math.min(E,B,O),q=Math.min(G,L,F),U=Math.max(E,B,O),V=Math.max(G,L,F),W=zOrder(D,q,_,C,T),z=zOrder(U,V,_,C,T);let X=A.prevZ,Y=A.nextZ;for(;X&&X.z>=W&&Y&&Y.z<=z;){if(X.x>=D&&X.x<=U&&X.y>=q&&X.y<=V&&X!==I&&!(E===X.x&&G===X.y)&&(O-X.x)*(G-X.y)>=(E-X.x)*(F-X.y)&&(E-X.x)*(L-X.y)>=(B-X.x)*(G-X.y)&&(B-X.x)*(F-X.y)>=(O-X.x)*(L-X.y)&&area(X.prev,X,X.next)>=0||(X=X.prevZ,Y.x>=D&&Y.x<=U&&Y.y>=q&&Y.y<=V&&Y!==I&&!(E===Y.x&&G===Y.y)&&(O-Y.x)*(G-Y.y)>=(E-Y.x)*(F-Y.y)&&(E-Y.x)*(L-Y.y)>=(B-Y.x)*(G-Y.y)&&(B-Y.x)*(F-Y.y)>=(O-Y.x)*(L-Y.y)&&area(Y.prev,Y,Y.next)>=0))return!1;Y=Y.nextZ}for(;X&&X.z>=W;){if(X.x>=D&&X.x<=U&&X.y>=q&&X.y<=V&&X!==I&&!(E===X.x&&G===X.y)&&(O-X.x)*(G-X.y)>=(E-X.x)*(F-X.y)&&(E-X.x)*(L-X.y)>=(B-X.x)*(G-X.y)&&(B-X.x)*(F-X.y)>=(O-X.x)*(L-X.y)&&area(X.prev,X,X.next)>=0)return!1;X=X.prevZ}for(;Y&&Y.z<=z;){if(Y.x>=D&&Y.x<=U&&Y.y>=q&&Y.y<=V&&Y!==I&&!(E===Y.x&&G===Y.y)&&(O-Y.x)*(G-Y.y)>=(E-Y.x)*(F-Y.y)&&(E-Y.x)*(L-Y.y)>=(B-Y.x)*(G-Y.y)&&(B-Y.x)*(F-Y.y)>=(O-Y.x)*(L-Y.y)&&area(Y.prev,Y,Y.next)>=0)return!1;Y=Y.nextZ}return!0}function cureLocalIntersections(A,_){let C=A,T=!1;do{const R=C.prev,P=C.next.next;intersects(R,C,C.next,P,!1)&&locallyInside(R,P)&&locallyInside(P,R)&&(_.push(R.i,C.i,P.i),removeNode(C),removeNode(C.next),C=A=P,T=!0),C=C.next}while(C!==A);return T?filterPoints(C):C}function splitEarcut(A,_,C,T,R,P){let I=A;do{let E=I.next.next;for(;E!==I.prev;){if(I.i!==E.i&&isValidDiagonal(I,E)){let B=splitPolygon(I,E);I=filterPoints(I,I.next),B=filterPoints(B,B.next),earcutLinked(I,_,C,T,R,P,0),earcutLinked(B,_,C,T,R,P,0);return}E=E.next}I=I.next}while(I!==A)}let indexActive=!1;function eliminateHoles(A,_,C,T){const R=[];for(let P=0,I=_.length;P<I;P++){const E=_[P]*T,B=P<I-1?_[P+1]*T:A.length,O=linkedList(A,E,B,T,!1);O===O.next&&steiners.add(O),R.push(getLeftmost(O))}R.sort(compareXYSlope),buildBlockIndex(A.length/T,_.length),indexSegment(C,C),indexActive=!0;for(let P=0;P<R.length;P++)C=eliminateHole(R[P],C);return indexActive=!1,C}function compareXYSlope(A,_){return A.x-_.x||A.y-_.y||(A.next.y-A.y)/(A.next.x-A.x)-(_.next.y-_.y)/(_.next.x-_.x)}function eliminateHole(A,_){const C=findHoleBridge(A,_);if(!C)return _;const T=splitPolygon(C,A),R=T.next;return indexSegment(C,R.next),filterPoints(T,T.next),filterPoints(C,C.next)}const K=16;let blockBBox=new Float64Array(0),numBlocks=0;const blockHead=[],blockStop=[];function buildBlockIndex(A,_){const C=Math.ceil((A+2*_)/K)+_+2;blockBBox.length<C*4&&(blockBBox=new Float64Array(C*4)),numBlocks=0}function indexSegment(A,_){let C=A;do{const T=numBlocks++;blockHead[T]=C;let R=1/0,P=1/0,I=-1/0,E=-1/0,B=0;do{const G=C.next;C.z=T,C.x<R&&(R=C.x),C.x>I&&(I=C.x),C.y<P&&(P=C.y),C.y>E&&(E=C.y),G.x<R&&(R=G.x),G.x>I&&(I=G.x),G.y<P&&(P=G.y),G.y>E&&(E=G.y),C=G}while(++B<K&&C!==_);blockStop[T]=C;const O=T*4;blockBBox[O]=R,blockBBox[O+1]=P,blockBBox[O+2]=I,blockBBox[O+3]=E}while(C!==_)}function growBlock(A,_){const C=A.z*4;_.x<blockBBox[C]&&(blockBBox[C]=_.x),_.y<blockBBox[C+1]&&(blockBBox[C+1]=_.y),_.x>blockBBox[C+2]&&(blockBBox[C+2]=_.x),_.y>blockBBox[C+3]&&(blockBBox[C+3]=_.y)}function liveBlockStop(A){let _=blockStop[A];for(;_.prev.next!==_;)_=_.next;return blockStop[A]=_,_}function liveBlockHead(A){let _=blockHead[A];for(;_.prev.next!==_;)_=_.next;return blockHead[A]=_,_}function findHoleBridge(A,_){let C=_;const T=A.x,R=A.y;let P=-1/0,I;if(equals(A,C))return C;for(let F=0,D=0;F<numBlocks;F++,D+=4){if(R<blockBBox[D+1]||R>blockBBox[D+3]||blockBBox[D]>T||blockBBox[D+2]<=P)continue;const q=liveBlockStop(F);C=liveBlockHead(F);do{if(C.prev.next===C){if(equals(A,C.next))return C.next;if(R<=C.y&&R>=C.next.y&&C.next.y!==C.y){const U=C.x+(R-C.y)*(C.next.x-C.x)/(C.next.y-C.y);if(U<=T&&U>P&&(P=U,I=C.x<C.next.x?C:C.next,U===T))return I}}C=C.next}while(C!==q)}if(!I)return null;const E=I.x,B=I.y,O=Math.min(R,B),G=Math.max(R,B);let L=1/0;for(let F=0,D=0;F<numBlocks;F++,D+=4){if(blockBBox[D+2]<E||blockBBox[D]>T||blockBBox[D+3]<O||blockBBox[D+1]>G)continue;const q=liveBlockStop(F);C=liveBlockHead(F);do{if(C.prev.next===C&&T>=C.x&&C.x>=E&&T!==C.x&&pointInTriangle(R<B?T:P,R,E,B,R<B?P:T,R,C.x,C.y)){const U=Math.abs(R-C.y)/(T-C.x);(locallyInside(C,A)||C.y===R&&C.next.y===R&&C.next.x>T)&&(U<L||U===L&&(C.x>I.x||C.x===I.x&&sectorContainsSector(I,C)))&&(I=C,L=U)}C=C.next}while(C!==q)}return I}function sectorContainsSector(A,_){return area(A.prev,A,_.prev)<0&&area(_.next,A,A.next)<0}const sortArr=[];function indexCurve(A,_,C,T){let R=A,P=0;do R.z=zOrder(R.x,R.y,_,C,T),sortArr[P++]=R,R=R.next;while(R!==A);quicksortNodes(sortArr,0,P-1);let I=null;for(let E=0;E<P;E++){const B=sortArr[E];B.prevZ=I,I&&(I.nextZ=B),I=B}I.nextZ=null}function quicksortNodes(A,_,C){for(;C-_>20;){const T=A[_+C>>1].z;let R=_,P=C,I;for(;R<=P;){for(;A[R].z<T;)R++;for(;A[P].z>T;)P--;R<=P&&(I=A[R],A[R]=A[P],A[P]=I,R++,P--)}P-_<C-R?(quicksortNodes(A,_,P),_=R):(quicksortNodes(A,R,C),C=P)}for(let T=_+1;T<=C;T++){const R=A[T],P=R.z;let I=T-1;for(;I>=_&&A[I].z>P;)A[I+1]=A[I],I--;A[I+1]=R}}function zOrder(A,_,C,T,R){return A=(A-C)*R|0,_=(_-T)*R|0,A=(A|A<<8)&16711935,A=(A|A<<4)&252645135,A=(A|A<<2)&858993459,A=(A|A<<1)&1431655765,_=(_|_<<8)&16711935,_=(_|_<<4)&252645135,_=(_|_<<2)&858993459,_=(_|_<<1)&1431655765,A|_<<1}function getLeftmost(A){let _=A,C=A;do(_.x<C.x||_.x===C.x&&_.y<C.y)&&(C=_),_=_.next;while(_!==A);return C}function pointInTriangle(A,_,C,T,R,P,I,E){return(R-I)*(_-E)>=(A-I)*(P-E)&&(A-I)*(T-E)>=(C-I)*(_-E)&&(C-I)*(P-E)>=(R-I)*(T-E)}function isValidDiagonal(A,_){return A.next.i!==_.i&&!intersectsPolygon(A,_)&&(locallyInside(A,_)&&locallyInside(_,A)&&middleInside(A,_)&&(area(A.prev,A,_.prev)!==0||area(A,_.prev,_)!==0)||equals(A,_)&&area(A.prev,A,A.next)>0&&area(_.prev,_,_.next)>0)}function area(A,_,C){return(_.y-A.y)*(C.x-_.x)-(_.x-A.x)*(C.y-_.y)}function equals(A,_){return A.x===_.x&&A.y===_.y}function intersects(A,_,C,T,R=!0){const P=area(A,_,C),I=area(A,_,T),E=area(C,T,A),B=area(C,T,_);return(P>0&&I<0||P<0&&I>0)&&(E>0&&B<0||E<0&&B>0)?!0:R?!!(P===0&&onSegment(A,C,_)||I===0&&onSegment(A,T,_)||E===0&&onSegment(C,A,T)||B===0&&onSegment(C,_,T)):!1}function onSegment(A,_,C){return _.x<=Math.max(A.x,C.x)&&_.x>=Math.min(A.x,C.x)&&_.y<=Math.max(A.y,C.y)&&_.y>=Math.min(A.y,C.y)}function intersectsPolygon(A,_){const C=Math.min(A.x,_.x),T=Math.max(A.x,_.x),R=Math.min(A.y,_.y),P=Math.max(A.y,_.y);let I=A;do{const E=I.next;if(I.x>T&&E.x>T||I.x<C&&E.x<C||I.y>P&&E.y>P||I.y<R&&E.y<R){I=E;continue}if(I.i!==A.i&&E.i!==A.i&&I.i!==_.i&&E.i!==_.i&&intersects(I,E,A,_))return!0;I=E}while(I!==A);return!1}function locallyInside(A,_){return area(A.prev,A,A.next)<0?area(A,_,A.next)>=0&&area(A,A.prev,_)>=0:area(A,_,A.prev)<0||area(A,A.next,_)<0}function middleInside(A,_){let C=A,T=!1;const R=(A.x+_.x)/2,P=(A.y+_.y)/2;do{const I=C.next;C.y>P!=I.y>P&&R<(I.x-C.x)*(P-C.y)/(I.y-C.y)+C.x&&(T=!T),C=I}while(C!==A);return T}function splitPolygon(A,_){const C=createNode(A.i,A.x,A.y),T=createNode(_.i,_.x,_.y),R=A.next,P=_.prev;return A.next=_,_.prev=A,C.next=R,R.prev=C,T.next=C,C.prev=T,P.next=T,T.prev=P,T}function insertNode(A,_,C,T){const R=createNode(A,_,C);return T?(R.next=T.next,R.prev=T,T.next.prev=R,T.next=R):(R.prev=R,R.next=R),R}function removeNode(A){A.next.prev=A.prev,A.prev.next=A.next,A.prevZ&&(A.prevZ.nextZ=A.nextZ),A.nextZ&&(A.nextZ.prevZ=A.prevZ),indexActive&&growBlock(A.prev,A.next)}function createNode(A,_,C){return{i:A,x:_,y:C,prev:null,next:null,z:0,prevZ:null,nextZ:null}}function signedArea(A,_,C,T){let R=0;for(let P=_,I=C-T;P<C;P+=T)R+=(A[I]-A[P])*(A[P+1]+A[I+1]),I=P;return R}const earcut=earcut$1.default||earcut$1;var CLEAR=(A=>(A[A.NONE=0]="NONE",A[A.COLOR=16384]="COLOR",A[A.STENCIL=1024]="STENCIL",A[A.DEPTH=256]="DEPTH",A[A.COLOR_DEPTH=16640]="COLOR_DEPTH",A[A.COLOR_STENCIL=17408]="COLOR_STENCIL",A[A.DEPTH_STENCIL=1280]="DEPTH_STENCIL",A[A.ALL=17664]="ALL",A))(CLEAR||{});class SystemRunner{constructor(_){this.items=[],this._name=_}emit(_,C,T,R,P,I,E,B){const{name:O,items:G}=this;for(let L=0,F=G.length;L<F;L++)G[L][O](_,C,T,R,P,I,E,B);return this}add(_){return _[this._name]&&(this.remove(_),this.items.push(_)),this}remove(_){const C=this.items.indexOf(_);return C!==-1&&this.items.splice(C,1),this}contains(_){return this.items.indexOf(_)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const defaultRunners=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],_AbstractRenderer=class fe extends EventEmitter{constructor(_){super(),this.tick=0,this.uid=uid("renderer"),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=_.type,this.name=_.name,this.config=_;const C=[...defaultRunners,...this.config.runners??[]];this._addRunners(...C),this._unsafeEvalCheck()}async init(_={}){const C=_.skipExtensionImports===!0?!0:_.manageImports===!1;await loadEnvironmentExtensions(C),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const T in this._systemsHash)_={...this._systemsHash[T].constructor.defaultOptions,..._};_={...fe.defaultOptions,..._},this._roundPixels=_.roundPixels?1:0;for(let T=0;T<this.runners.init.items.length;T++)await this.runners.init.items[T].init(_);this._initOptions=_}render(_,C){this.tick++;let T=_;if(T instanceof Container&&(T={container:T},C&&(deprecation(v8_0_0,"passing a second argument is deprecated, please use render options instead"),T.target=C.renderTexture)),T.target||(T.target=this.view.renderTarget),T.target===this.view.renderTarget&&(this._lastObjectRendered=T.container,T.clearColor??(T.clearColor=this.background.colorRgba),T.clear??(T.clear=this.background.clearBeforeRender)),T.clearColor){const R=Array.isArray(T.clearColor)&&T.clearColor.length===4;T.clearColor=R?T.clearColor:Color.shared.setValue(T.clearColor).toArray()}T.transform||(T.container.updateLocalTransform(),T.transform=T.container.localTransform),T.container.visible&&(T.container.enableRenderGroup(),this.runners.prerender.emit(T),this.runners.renderStart.emit(T),this.runners.render.emit(T),this.runners.renderEnd.emit(T),this.runners.postrender.emit(T))}resize(_,C,T){const R=this.view.resolution;this.view.resize(_,C,T),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),T!==void 0&&T!==R&&this.runners.resolutionChange.emit(T)}clear(_={}){const C=this;_.target||(_.target=C.renderTarget.renderTarget),_.clearColor||(_.clearColor=this.background.colorRgba),_.clear??(_.clear=CLEAR.ALL);const{clear:T,clearColor:R,target:P,mipLevel:I,layer:E}=_;Color.shared.setValue(R??this.background.colorRgba),C.renderTarget.clear(P,T,Color.shared.toArray(),I??0,E??0)}get resolution(){return this.view.resolution}set resolution(_){this.view.resolution=_,this.runners.resolutionChange.emit(_)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(..._){_.forEach(C=>{this.runners[C]=new SystemRunner(C)})}_addSystems(_){let C;for(C in _){const T=_[C];this._addSystem(T.value,T.name)}}_addSystem(_,C){const T=new _(this);if(this[C])throw new Error(`Whoops! The name "${C}" is already in use`);this[C]=T,this._systemsHash[C]=T;for(const R in this.runners)this.runners[R].add(T);return this}_addPipes(_,C){const T=C.reduce((R,P)=>(R[P.name]=P.value,R),{});_.forEach(R=>{const P=R.value,I=R.name,E=T[I];this.renderPipes[I]=new P(this,E?new E:null),this.runners.destroy.add(this.renderPipes[I])})}destroy(_=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(_),(_===!0||typeof _=="object"&&_.releaseGlobalResources)&&GlobalResourceRegistry.release(),Object.values(this.runners).forEach(C=>{C.destroy()}),this._systemsHash=null,this.renderPipes=null,this.removeAllListeners()}generateTexture(_){return this.textureGenerator.generateTexture(_)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!unsafeEvalSupported())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};_AbstractRenderer.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let AbstractRenderer=_AbstractRenderer,_isWebGLSupported;function isWebGLSupported(A){return _isWebGLSupported!==void 0||(_isWebGLSupported=(()=>{var C;const _={stencil:!0,failIfMajorPerformanceCaveat:A??AbstractRenderer.defaultOptions.failIfMajorPerformanceCaveat};try{if(!DOMAdapter.get().getWebGLRenderingContext())return!1;let R=DOMAdapter.get().createCanvas().getContext("webgl",_);const P=!!((C=R==null?void 0:R.getContextAttributes())!=null&&C.stencil);if(R){const I=R.getExtension("WEBGL_lose_context");I&&I.loseContext()}return R=null,P}catch{return!1}})()),_isWebGLSupported}let _isWebGPUSupported;async function isWebGPUSupported(A={}){return _isWebGPUSupported!==void 0||(_isWebGPUSupported=await(async()=>{const _=DOMAdapter.get().getNavigator().gpu;if(!_)return!1;try{return await(await _.requestAdapter(A)).requestDevice(),!0}catch{return!1}})()),_isWebGPUSupported}const renderPriority=["webgl","webgpu","canvas"];async function autoDetectRenderer(A){let _=[];A.preference?Array.isArray(A.preference)?_=A.preference.slice():(_.push(A.preference),renderPriority.forEach(P=>{P!==A.preference&&_.push(P)})):_=renderPriority.slice();let C,T={};for(let P=0;P<_.length;P++){const I=_[P];if(I==="webgpu"&&await isWebGPUSupported()){const{WebGPURenderer:E}=await __vitePreload(async()=>{const{WebGPURenderer:B}=await import("./WebGPURenderer-AWvpxlIE.js");return{WebGPURenderer:B}},__vite__mapDeps([28,29,30,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]));C=E,T={...A,...A.webgpu};break}else if(I==="webgl"&&isWebGLSupported(A.failIfMajorPerformanceCaveat??AbstractRenderer.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:E}=await __vitePreload(async()=>{const{WebGLRenderer:B}=await import("./WebGLRenderer-CGBljOCr.js");return{WebGLRenderer:B}},__vite__mapDeps([31,29,30,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]));C=E,T={...A,...A.webgl};break}else if(I==="canvas"){const{CanvasRenderer:E}=await __vitePreload(async()=>{const{CanvasRenderer:B}=await import("./CanvasRenderer-BMNmWBZP.js");return{CanvasRenderer:B}},__vite__mapDeps([32,30,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]));C=E,T={...A,...A.canvasOptions};break}}if(delete T.webgpu,delete T.webgl,delete T.canvasOptions,!C)throw new Error("No available renderer for the current environment");const R=new C;return await R.init(T),R}const VERSION="8.19.0";class ApplicationInitHook{static init(){var _;(_=globalThis.__PIXI_APP_INIT__)==null||_.call(globalThis,this,VERSION)}static destroy(){}}ApplicationInitHook.extension=ExtensionType.Application;class RendererInitHook{constructor(_){this._renderer=_}init(){var _;(_=globalThis.__PIXI_RENDERER_INIT__)==null||_.call(globalThis,this._renderer,VERSION)}destroy(){this._renderer=null}}RendererInitHook.extension={type:[ExtensionType.WebGLSystem,ExtensionType.WebGPUSystem],name:"initHook",priority:-10};class ResizePlugin{static init(_){Object.defineProperty(this,"resizeTo",{configurable:!0,set(C){globalThis.removeEventListener("resize",this.queueResize),this._resizeTo=C,C&&(globalThis.addEventListener("resize",this.queueResize),this.resize())},get(){return this._resizeTo}}),this.queueResize=()=>{this._resizeTo&&(this._cancelResize(),this._resizeId=requestAnimationFrame(()=>this.resize()))},this._cancelResize=()=>{this._resizeId&&(cancelAnimationFrame(this._resizeId),this._resizeId=null)},this.resize=()=>{if(!this._resizeTo)return;this._cancelResize();let C,T;if(this._resizeTo===globalThis.window)C=globalThis.innerWidth,T=globalThis.innerHeight;else{const{clientWidth:R,clientHeight:P}=this._resizeTo;C=R,T=P}this.renderer.resize(C,T),this.render()},this._resizeId=null,this._resizeTo=null,this.resizeTo=_.resizeTo||null}static destroy(){globalThis.removeEventListener("resize",this.queueResize),this._cancelResize(),this._cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null}}ResizePlugin.extension=ExtensionType.Application;class TickerPlugin{static init(_){_=Object.assign({autoStart:!0,sharedTicker:!1},_),Object.defineProperty(this,"ticker",{configurable:!0,set(C){this._ticker&&this._ticker.remove(this.render,this),this._ticker=C,C&&C.add(this.render,this,UPDATE_PRIORITY.LOW)},get(){return this._ticker}}),this.stop=()=>{this._ticker.stop()},this.start=()=>{this._ticker.start()},this._ticker=null,this.ticker=_.sharedTicker?Ticker.shared:new Ticker,_.autoStart&&this.start()}static destroy(){if(this._ticker){const _=this._ticker;this.ticker=null,_.destroy()}}}TickerPlugin.extension=ExtensionType.Application;extensions.add(ResizePlugin);extensions.add(TickerPlugin);const _Application=class ne{constructor(..._){this.stage=new Container,_[0]!==void 0&&deprecation(v8_0_0,"Application constructor options are deprecated, please use Application.init() instead.")}async init(_){_={..._},this.stage||(this.stage=new Container),this.renderer=await autoDetectRenderer(_),ne._plugins.forEach(C=>{C.init.call(this,_)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return deprecation(v8_0_0,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}get domContainerRoot(){var _;return(_=this.renderer.renderPipes.dom)==null?void 0:_._domElement}destroy(_=!1,C=!1){const T=ne._plugins.slice(0);T.reverse(),T.forEach(R=>{R.destroy.call(this)}),this.stage.destroy(C),this.stage=null,this.renderer.destroy(_),this.renderer=null}};_Application._plugins=[];let Application=_Application;extensions.handleByList(ExtensionType.Application,Application._plugins);extensions.add(ApplicationInitHook);const bitmapFontTextParser={test(A){return typeof A=="string"&&A.startsWith("info face=")},parse(A){const _=A.match(/^[a-z]+\s+.+$/gm),C={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const L in _){const F=_[L].match(/^[a-z]+/gm)[0],D=_[L].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),q={};for(const U in D){const V=D[U].split("="),W=V[0],z=V[1].replace(/"/gm,""),X=parseFloat(z),Y=isNaN(X)?z:X;q[W]=Y}C[F].push(q)}const T={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[R]=C.info,[P]=C.common,[I]=C.distanceField;I&&(T.distanceField={range:parseInt(I.distanceRange,10),type:I.fieldType}),T.fontSize=parseInt(R.size,10),T.fontFamily=R.face,T.lineHeight=parseInt(P.lineHeight,10);const E=C.page;for(let L=0;L<E.length;L++)T.pages.push({id:parseInt(E[L].id,10)||0,file:E[L].file});const B={};T.baseLineOffset=T.lineHeight-parseInt(P.base,10);const O=C.char;for(let L=0;L<O.length;L++){const F=O[L],D=parseInt(F.id,10);let q=F.letter??F.char??String.fromCharCode(D);q==="space"&&(q=" "),B[D]=q,T.chars[q]={id:D,page:parseInt(F.page,10)||0,x:parseInt(F.x,10),y:parseInt(F.y,10),width:parseInt(F.width,10),height:parseInt(F.height,10),xOffset:parseInt(F.xoffset,10),yOffset:parseInt(F.yoffset,10),xAdvance:parseInt(F.xadvance,10),kerning:{}}}const G=C.kerning;for(let L=0;L<G.length;L++){const F=parseInt(G[L].first,10),D=parseInt(G[L].second,10),q=parseInt(G[L].amount,10);T.chars[B[D]]&&(T.chars[B[D]].kerning[B[F]]=q)}return T}},bitmapFontXMLParser={test(A){const _=A;return typeof _!="string"&&"getElementsByTagName"in _&&_.getElementsByTagName("page").length&&_.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(A){const _={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},C=A.getElementsByTagName("info")[0],T=A.getElementsByTagName("common")[0],R=A.getElementsByTagName("distanceField")[0];R&&(_.distanceField={type:R.getAttribute("fieldType"),range:parseInt(R.getAttribute("distanceRange"),10)});const P=A.getElementsByTagName("page"),I=A.getElementsByTagName("char"),E=A.getElementsByTagName("kerning");_.fontSize=parseInt(C.getAttribute("size"),10),_.fontFamily=C.getAttribute("face"),_.lineHeight=parseInt(T.getAttribute("lineHeight"),10);for(let O=0;O<P.length;O++)_.pages.push({id:parseInt(P[O].getAttribute("id"),10)||0,file:P[O].getAttribute("file")});const B={};_.baseLineOffset=_.lineHeight-parseInt(T.getAttribute("base"),10);for(let O=0;O<I.length;O++){const G=I[O],L=parseInt(G.getAttribute("id"),10);let F=G.getAttribute("letter")??G.getAttribute("char")??String.fromCharCode(L);F==="space"&&(F=" "),B[L]=F,_.chars[F]={id:L,page:parseInt(G.getAttribute("page"),10)||0,x:parseInt(G.getAttribute("x"),10),y:parseInt(G.getAttribute("y"),10),width:parseInt(G.getAttribute("width"),10),height:parseInt(G.getAttribute("height"),10),xOffset:parseInt(G.getAttribute("xoffset"),10),yOffset:parseInt(G.getAttribute("yoffset"),10),xAdvance:parseInt(G.getAttribute("xadvance"),10),kerning:{}}}for(let O=0;O<E.length;O++){const G=parseInt(E[O].getAttribute("first"),10),L=parseInt(E[O].getAttribute("second"),10),F=parseInt(E[O].getAttribute("amount"),10);_.chars[B[L]]&&(_.chars[B[L]].kerning[B[G]]=F)}return _}},bitmapFontXMLStringParser={test(A){return typeof A=="string"&&A.match(/<font(\s|>)/)?bitmapFontXMLParser.test(DOMAdapter.get().parseXML(A)):!1},parse(A){return bitmapFontXMLParser.parse(DOMAdapter.get().parseXML(A))}},validExtensions=[".xml",".fnt"],bitmapFontCachePlugin={extension:{type:ExtensionType.CacheParser,name:"cacheBitmapFont"},test:A=>!!(A!=null&&A.pages)&&!!(A!=null&&A.chars)&&typeof(A==null?void 0:A.fontFamily)=="string"&&A.fontFamily!=="",getCacheableAssets(A,_){const C={};return A.forEach(T=>{C[T]=_,C[`${T}-bitmap`]=_}),C[`${_.fontFamily}-bitmap`]=_,C}},loadBitmapFont={extension:{type:ExtensionType.LoadParser,priority:LoaderParserPriority.Normal},name:"loadBitmapFont",id:"bitmap-font",test(A){return validExtensions.includes(path.extname(A).toLowerCase())},async testParse(A){return bitmapFontTextParser.test(A)||bitmapFontXMLStringParser.test(A)},async parse(A,_,C){const T=bitmapFontTextParser.test(A)?bitmapFontTextParser.parse(A):bitmapFontXMLStringParser.parse(A),{src:R}=_,{pages:P}=T,I=[],E=T.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let F=0;F<P.length;++F){const D=P[F].file;let q=path.join(path.dirname(R),D);q=copySearchParams(q,R),I.push({src:q,data:E})}const[B,{BitmapFont:O}]=await Promise.all([C.load(I),__vitePreload(()=>import("./BitmapFont-DBF-U3qq.js"),__vite__mapDeps([33,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]))]),G=I.map(F=>B[F.src]);return new O({data:T,textures:G},R)},async load(A,_){return await(await DOMAdapter.get().fetch(A)).text()},async unload(A,_,C){await Promise.all(A.pages.map(T=>C.unload(T.texture.source._sourceOrigin))),A.destroy()}};class BackgroundLoader{constructor(_,C=!1){this._loader=_,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=C}add(_){_.forEach(C=>{this._assetList.push(C)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const _=[],C=Math.min(this._assetList.length,this._maxConcurrent);for(let T=0;T<C;T++)_.push(this._assetList.pop());await this._loader.load(_),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(_){this._isActive!==_&&(this._isActive=_,_&&!this._isLoading&&this._next())}}const cacheTextureArray={extension:{type:ExtensionType.CacheParser,name:"cacheTextureArray"},test:A=>Array.isArray(A)&&A.every(_=>_ instanceof Texture),getCacheableAssets:(A,_)=>{const C={};return A.forEach(T=>{_.forEach((R,P)=>{C[T+(P===0?"":P+1)]=R})}),C}};async function testImageFormat(A){if("Image"in globalThis)return new Promise(_=>{const C=new Image;C.onload=()=>{_(!0)},C.onerror=()=>{_(!1)},C.src=A});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const _=await(await fetch(A)).blob();await createImageBitmap(_)}catch{return!1}return!0}return!1}const detectAvif={extension:{type:ExtensionType.DetectionParser,priority:1},test:async()=>testImageFormat("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async A=>[...A,"avif"],remove:async A=>A.filter(_=>_!=="avif")},imageFormats=["png","jpg","jpeg"],detectDefaults={extension:{type:ExtensionType.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async A=>[...A,...imageFormats],remove:async A=>A.filter(_=>!imageFormats.includes(_))},inWorker="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function testVideoFormat(A){return inWorker?!1:document.createElement("video").canPlayType(A)!==""}const detectMp4={extension:{type:ExtensionType.DetectionParser,priority:0},test:async()=>testVideoFormat("video/mp4"),add:async A=>[...A,"mp4","m4v"],remove:async A=>A.filter(_=>_!=="mp4"&&_!=="m4v")},detectOgv={extension:{type:ExtensionType.DetectionParser,priority:0},test:async()=>testVideoFormat("video/ogg"),add:async A=>[...A,"ogv"],remove:async A=>A.filter(_=>_!=="ogv")},detectWebm={extension:{type:ExtensionType.DetectionParser,priority:0},test:async()=>testVideoFormat("video/webm"),add:async A=>[...A,"webm"],remove:async A=>A.filter(_=>_!=="webm")},detectWebp={extension:{type:ExtensionType.DetectionParser,priority:0},test:async()=>testImageFormat("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async A=>[...A,"webp"],remove:async A=>A.filter(_=>_!=="webp")},_Loader=class Kt{constructor(){this.loadOptions={...Kt.defaultOptions},this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(_,C,T)=>(this._parsersValidated=!1,_[C]=T,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(_,C){const T={promise:null,parser:null};return T.promise=(async()=>{var I,E;let R=null,P=null;if((C.parser||C.loadParser)&&(P=this._parserHash[C.parser||C.loadParser],C.loadParser&&warn(`[Assets] "loadParser" is deprecated, use "parser" instead for ${_}`),P||warn(`[Assets] specified load parser "${C.parser||C.loadParser}" not found while loading ${_}`)),!P){for(let B=0;B<this.parsers.length;B++){const O=this.parsers[B];if(O.load&&((I=O.test)!=null&&I.call(O,_,C,this))){P=O;break}}if(!P)return warn(`[Assets] ${_} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}R=await P.load(_,C,this),T.parser=P;for(let B=0;B<this.parsers.length;B++){const O=this.parsers[B];O.parse&&O.parse&&await((E=O.testParse)==null?void 0:E.call(O,R,C,this))&&(R=await O.parse(R,C,this)||R,T.parser=O)}return R})(),T}async load(_,C){this._parsersValidated||this._validateParsers();const T=typeof C=="function"?{...Kt.defaultOptions,...this.loadOptions,onProgress:C}:{...Kt.defaultOptions,...this.loadOptions,...C||{}},{onProgress:R,onError:P,strategy:I,retryCount:E,retryDelay:B}=T;let O=0;const G={},L=isSingleItem(_),F=convertToList(_,U=>({alias:[U],src:U,data:{}})),D=F.reduce((U,V)=>U+(V.progressSize||1),0),q=F.map(async U=>{const V=path.toAbsolute(U.src);G[U.src]||(await this._loadAssetWithRetry(V,U,{onProgress:R,onError:P,strategy:I,retryCount:E,retryDelay:B},G),O+=U.progressSize||1,R&&R(O/D))});return await Promise.all(q),L?G[F[0].src]:G}async unload(_){const T=convertToList(_,R=>({alias:[R],src:R})).map(async R=>{var E,B;const P=path.toAbsolute(R.src),I=this.promiseCache[P];if(I){const O=await I.promise;delete this.promiseCache[P],await((B=(E=I.parser)==null?void 0:E.unload)==null?void 0:B.call(E,O,R,this))}});await Promise.all(T)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(_=>_.name||_.id).reduce((_,C)=>(!C.name&&!C.id?warn("[Assets] parser should have an id"):(_[C.name]||_[C.id])&&warn(`[Assets] parser id conflict "${C.id}"`),_[C.name]=C,C.id&&(_[C.id]=C),_),{})}async _loadAssetWithRetry(_,C,T,R){let P=0;const{onError:I,strategy:E,retryCount:B,retryDelay:O}=T,G=L=>new Promise(F=>setTimeout(F,L));for(;;)try{this.promiseCache[_]||(this.promiseCache[_]=this._getLoadPromiseAndParser(_,C)),R[C.src]=await this.promiseCache[_].promise;return}catch(L){delete this.promiseCache[_],delete R[C.src],P++;const F=E!=="retry"||P>B;if(E==="retry"&&!F){I&&I(L,C),await G(O);continue}if(E==="skip"){I&&I(L,C);return}I&&I(L,C);const D=new Error(`[Loader.load] Failed to load ${_}.
${L}`);throw L instanceof Error&&L.stack&&(D.stack=L.stack),D}}};_Loader.defaultOptions={onProgress:void 0,onError:void 0,strategy:"throw",retryCount:3,retryDelay:250};let Loader=_Loader;function checkDataUrl(A,_){if(Array.isArray(_)){for(const C of _)if(A.startsWith(`data:${C}`))return!0;return!1}return A.startsWith(`data:${_}`)}function checkExtension(A,_){const C=A.split("?")[0],T=path.extname(C).toLowerCase();return Array.isArray(_)?_.includes(T):T===_}const validJSONExtension=".json",validJSONMIME="application/json",loadJson={extension:{type:ExtensionType.LoadParser,priority:LoaderParserPriority.Low},name:"loadJson",id:"json",test(A){return checkDataUrl(A,validJSONMIME)||checkExtension(A,validJSONExtension)},async load(A){return await(await DOMAdapter.get().fetch(A)).json()}},validTXTExtension=".txt",validTXTMIME="text/plain",loadTxt={name:"loadTxt",id:"text",extension:{type:ExtensionType.LoadParser,priority:LoaderParserPriority.Low,name:"loadTxt"},test(A){return checkDataUrl(A,validTXTMIME)||checkExtension(A,validTXTExtension)},async load(A){return await(await DOMAdapter.get().fetch(A)).text()}},validWeights=["normal","bold","100","200","300","400","500","600","700","800","900"],validFontExtensions=[".ttf",".otf",".woff",".woff2"],validFontMIMEs=["font/ttf","font/otf","font/woff","font/woff2"],CSS_IDENT_TOKEN_REGEX=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function getFontFamilyName(A){const _=path.extname(A),R=path.basename(A,_).replace(/(-|_)/g," ").toLowerCase().split(" ").map(E=>E.charAt(0).toUpperCase()+E.slice(1));let P=R.length>0;for(const E of R)if(!E.match(CSS_IDENT_TOKEN_REGEX)){P=!1;break}let I=R.join(" ");return P||(I=`"${I.replace(/[\\"]/g,"\\$&")}"`),I}const validURICharactersRegex=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function encodeURIWhenNeeded(A){return validURICharactersRegex.test(A)?A:encodeURI(A)}const loadWebFont={extension:{type:ExtensionType.LoadParser,priority:LoaderParserPriority.Low},name:"loadWebFont",id:"web-font",test(A){return checkDataUrl(A,validFontMIMEs)||checkExtension(A,validFontExtensions)},async load(A,_){var T,R,P;const C=DOMAdapter.get().getFontFaceSet();if(C){const I=[],E=((T=_.data)==null?void 0:T.family)??getFontFamilyName(A),B=((P=(R=_.data)==null?void 0:R.weights)==null?void 0:P.filter(G=>validWeights.includes(G)))??["normal"],O=_.data??{};for(let G=0;G<B.length;G++){const L=B[G],F=new FontFace(E,`url('${encodeURIWhenNeeded(A)}')`,{...O,weight:L});await F.load(),C.add(F),I.push(F)}return Cache.has(`${E}-and-url`)?Cache.get(`${E}-and-url`).entries.push({url:A,faces:I}):Cache.set(`${E}-and-url`,{entries:[{url:A,faces:I}]}),I.length===1?I[0]:I}return warn("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(A){const _=Array.isArray(A)?A:[A],C=_[0].family,T=Cache.get(`${C}-and-url`),R=T.entries.find(P=>P.faces.some(I=>_.indexOf(I)!==-1));R.faces=R.faces.filter(P=>_.indexOf(P)===-1),R.faces.length===0&&(T.entries=T.entries.filter(P=>P!==R)),_.forEach(P=>{DOMAdapter.get().getFontFaceSet().delete(P)}),T.entries.length===0&&Cache.remove(`${C}-and-url`)}},length={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},segment=/([astvzqmhlc])([^astvzqmhlc]*)/gi,number=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;function parse(A){const _=[];return A.replace(segment,(C,T,R)=>{let P=T.toLowerCase(),I=T;const E=parseValues(R);for(P==="m"&&E.length>2&&(_.push([I,...E.splice(0,2)]),P="l",I=I==="m"?"l":"L");;){if(E.length===length[P])return _.push([I,...E]),"";if(E.length<length[P])throw new Error("malformed path data");_.push([I,...E.splice(0,length[P])])}}),_}function parseValues(A){const _=A.match(number);return _?_.map(Number):[]}function parseSVGPath(A,_){const C=parse(A),T=[];let R=null,P=0,I=0;for(let E=0;E<C.length;E++){const B=C[E],O=B[0],G=B;switch(O){case"M":P=G[1],I=G[2],_.moveTo(P,I);break;case"m":P+=G[1],I+=G[2],_.moveTo(P,I);break;case"H":P=G[1],_.lineTo(P,I);break;case"h":P+=G[1],_.lineTo(P,I);break;case"V":I=G[1],_.lineTo(P,I);break;case"v":I+=G[1],_.lineTo(P,I);break;case"L":P=G[1],I=G[2],_.lineTo(P,I);break;case"l":P+=G[1],I+=G[2],_.lineTo(P,I);break;case"C":P=G[5],I=G[6],_.bezierCurveTo(G[1],G[2],G[3],G[4],P,I);break;case"c":_.bezierCurveTo(P+G[1],I+G[2],P+G[3],I+G[4],P+G[5],I+G[6]),P+=G[5],I+=G[6];break;case"S":P=G[3],I=G[4],_.bezierCurveToShort(G[1],G[2],P,I);break;case"s":_.bezierCurveToShort(P+G[1],I+G[2],P+G[3],I+G[4]),P+=G[3],I+=G[4];break;case"Q":P=G[3],I=G[4],_.quadraticCurveTo(G[1],G[2],P,I);break;case"q":_.quadraticCurveTo(P+G[1],I+G[2],P+G[3],I+G[4]),P+=G[3],I+=G[4];break;case"T":P=G[1],I=G[2],_.quadraticCurveToShort(P,I);break;case"t":P+=G[1],I+=G[2],_.quadraticCurveToShort(P,I);break;case"A":P=G[6],I=G[7],_.arcToSvg(G[1],G[2],G[3],G[4],G[5],P,I);break;case"a":P+=G[6],I+=G[7],_.arcToSvg(G[1],G[2],G[3],G[4],G[5],P,I);break;case"Z":case"z":_.closePath(),T.length>0&&(R=T.pop(),R?(P=R.startX,I=R.startY):(P=0,I=0)),R=null;break;default:warn(`Unknown SVG path command: ${O}`)}O!=="Z"&&O!=="z"&&R===null&&(R={startX:P,startY:I},T.push(R))}return _}class Circle{constructor(_=0,C=0,T=0){this.type="circle",this.x=_,this.y=C,this.radius=T}clone(){return new Circle(this.x,this.y,this.radius)}contains(_,C){if(this.radius<=0)return!1;const T=this.radius*this.radius;let R=this.x-_,P=this.y-C;return R*=R,P*=P,R+P<=T}strokeContains(_,C,T,R=.5){if(this.radius===0)return!1;const P=this.x-_,I=this.y-C,E=this.radius,B=(1-R)*T,O=Math.sqrt(P*P+I*I);return O<=E+B&&O>E-(T-B)}getBounds(_){return _||(_=new Rectangle),_.x=this.x-this.radius,_.y=this.y-this.radius,_.width=this.radius*2,_.height=this.radius*2,_}copyFrom(_){return this.x=_.x,this.y=_.y,this.radius=_.radius,this}copyTo(_){return _.copyFrom(this),_}toString(){return`[pixi.js/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`}}class Ellipse{constructor(_=0,C=0,T=0,R=0){this.type="ellipse",this.x=_,this.y=C,this.halfWidth=T,this.halfHeight=R}clone(){return new Ellipse(this.x,this.y,this.halfWidth,this.halfHeight)}contains(_,C){if(this.halfWidth<=0||this.halfHeight<=0)return!1;let T=(_-this.x)/this.halfWidth,R=(C-this.y)/this.halfHeight;return T*=T,R*=R,T+R<=1}strokeContains(_,C,T,R=.5){const{halfWidth:P,halfHeight:I}=this;if(P<=0||I<=0)return!1;const E=T*(1-R),B=T-E,O=P-B,G=I-B,L=P+E,F=I+E,D=_-this.x,q=C-this.y,U=D*D/(O*O)+q*q/(G*G),V=D*D/(L*L)+q*q/(F*F);return U>1&&V<=1}getBounds(_){return _||(_=new Rectangle),_.x=this.x-this.halfWidth,_.y=this.y-this.halfHeight,_.width=this.halfWidth*2,_.height=this.halfHeight*2,_}copyFrom(_){return this.x=_.x,this.y=_.y,this.halfWidth=_.halfWidth,this.halfHeight=_.halfHeight,this}copyTo(_){return _.copyFrom(this),_}toString(){return`[pixi.js/math:Ellipse x=${this.x} y=${this.y} halfWidth=${this.halfWidth} halfHeight=${this.halfHeight}]`}}function squaredDistanceToLineSegment(A,_,C,T,R,P){const I=A-C,E=_-T,B=R-C,O=P-T,G=I*B+E*O,L=B*B+O*O;let F=-1;L!==0&&(F=G/L);let D,q;F<0?(D=C,q=T):F>1?(D=R,q=P):(D=C+F*B,q=T+F*O);const U=A-D,V=_-q;return U*U+V*V}let tempRect$3,tempRect2;class Polygon{constructor(..._){this.type="polygon";let C=Array.isArray(_[0])?_[0]:_;if(typeof C[0]!="number"){const T=[];for(let R=0,P=C.length;R<P;R++)T.push(C[R].x,C[R].y);C=T}this.points=C,this.closePath=!0}isClockwise(){let _=0;const C=this.points,T=C.length;for(let R=0;R<T;R+=2){const P=C[R],I=C[R+1],E=C[(R+2)%T],B=C[(R+3)%T];_+=(E-P)*(B+I)}return _<0}containsPolygon(_){const C=this.getBounds(tempRect$3),T=_.getBounds(tempRect2);if(!C.containsRect(T))return!1;const R=_.points;for(let P=0;P<R.length;P+=2){const I=R[P],E=R[P+1];if(!this.contains(I,E))return!1}return!0}clone(){const _=this.points.slice(),C=new Polygon(_);return C.closePath=this.closePath,C}contains(_,C){let T=!1;const R=this.points.length/2;for(let P=0,I=R-1;P<R;I=P++){const E=this.points[P*2],B=this.points[P*2+1],O=this.points[I*2],G=this.points[I*2+1];B>C!=G>C&&_<(O-E)*((C-B)/(G-B))+E&&(T=!T)}return T}strokeContains(_,C,T,R=.5){const P=T*T,I=P*(1-R),E=P-I,{points:B}=this,O=B.length-(this.closePath?0:2);for(let G=0;G<O;G+=2){const L=B[G],F=B[G+1],D=B[(G+2)%B.length],q=B[(G+3)%B.length],U=squaredDistanceToLineSegment(_,C,L,F,D,q),V=Math.sign((D-L)*(C-F)-(q-F)*(_-L));if(U<=(V<0?E:I))return!0}return!1}getBounds(_){_||(_=new Rectangle);const C=this.points;let T=1/0,R=-1/0,P=1/0,I=-1/0;for(let E=0,B=C.length;E<B;E+=2){const O=C[E],G=C[E+1];T=O<T?O:T,R=O>R?O:R,P=G<P?G:P,I=G>I?G:I}return _.x=T,_.width=R-T,_.y=P,_.height=I-P,_}copyFrom(_){return this.points=_.points.slice(),this.closePath=_.closePath,this}copyTo(_){return _.copyFrom(this),_}toString(){return`[pixi.js/math:PolygoncloseStroke=${this.closePath}points=${this.points.reduce((_,C)=>`${_}, ${C}`,"")}]`}get lastX(){return this.points[this.points.length-2]}get lastY(){return this.points[this.points.length-1]}get x(){return deprecation("8.11.0","Polygon.lastX is deprecated, please use Polygon.lastX instead."),this.points[this.points.length-2]}get y(){return deprecation("8.11.0","Polygon.y is deprecated, please use Polygon.lastY instead."),this.points[this.points.length-1]}get startX(){return this.points[0]}get startY(){return this.points[1]}}const isCornerWithinStroke=(A,_,C,T,R,P,I)=>{const E=A-C,B=_-T,O=Math.sqrt(E*E+B*B);return O>=R-P&&O<=R+I};class RoundedRectangle{constructor(_=0,C=0,T=0,R=0,P=20){this.type="roundedRectangle",this.x=_,this.y=C,this.width=T,this.height=R,this.radius=P}getBounds(_){return _||(_=new Rectangle),_.x=this.x,_.y=this.y,_.width=this.width,_.height=this.height,_}clone(){return new RoundedRectangle(this.x,this.y,this.width,this.height,this.radius)}copyFrom(_){return this.x=_.x,this.y=_.y,this.width=_.width,this.height=_.height,this}copyTo(_){return _.copyFrom(this),_}contains(_,C){if(this.width<=0||this.height<=0)return!1;if(_>=this.x&&_<=this.x+this.width&&C>=this.y&&C<=this.y+this.height){const T=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(C>=this.y+T&&C<=this.y+this.height-T||_>=this.x+T&&_<=this.x+this.width-T)return!0;let R=_-(this.x+T),P=C-(this.y+T);const I=T*T;if(R*R+P*P<=I||(R=_-(this.x+this.width-T),R*R+P*P<=I)||(P=C-(this.y+this.height-T),R*R+P*P<=I)||(R=_-(this.x+T),R*R+P*P<=I))return!0}return!1}strokeContains(_,C,T,R=.5){const{x:P,y:I,width:E,height:B,radius:O}=this,G=T*(1-R),L=T-G,F=P+O,D=I+O,q=E-O*2,U=B-O*2,V=P+E,W=I+B;return(_>=P-G&&_<=P+L||_>=V-L&&_<=V+G)&&C>=D&&C<=D+U||(C>=I-G&&C<=I+L||C>=W-L&&C<=W+G)&&_>=F&&_<=F+q?!0:_<F&&C<D&&isCornerWithinStroke(_,C,F,D,O,L,G)||_>V-O&&C<D&&isCornerWithinStroke(_,C,V-O,D,O,L,G)||_>V-O&&C>W-O&&isCornerWithinStroke(_,C,V-O,W-O,O,L,G)||_<F&&C>W-O&&isCornerWithinStroke(_,C,F,W-O,O,L,G)}toString(){return`[pixi.js/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`}}const cachedGroups={};function getTextureBatchBindGroup(A,_,C){let T=2166136261;for(let R=0;R<_;R++)T^=A[R].uid,T=Math.imul(T,16777619),T>>>=0;return cachedGroups[T]||generateTextureBatchBindGroup(A,_,T,C)}function generateTextureBatchBindGroup(A,_,C,T){const R={};let P=0;for(let E=0;E<T;E++){const B=E<_?A[E]:Texture.EMPTY.source;R[P++]=B.source,R[P++]=B.style}const I=new BindGroup(R);return cachedGroups[C]=I,I}class ViewableBuffer{constructor(_){typeof _=="number"?this.rawBinaryData=new ArrayBuffer(_):_ instanceof Uint8Array?this.rawBinaryData=_.buffer:this.rawBinaryData=_,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData),this.size=this.rawBinaryData.byteLength}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}get float64View(){return this._float64Array||(this._float64Array=new Float64Array(this.rawBinaryData)),this._float64Array}get bigUint64View(){return this._bigUint64Array||(this._bigUint64Array=new BigUint64Array(this.rawBinaryData)),this._bigUint64Array}view(_){return this[`${_}View`]}destroy(){this.rawBinaryData=null,this.uint32View=null,this.float32View=null,this.uint16View=null,this._int8View=null,this._uint8View=null,this._int16View=null,this._int32View=null,this._float64Array=null,this._bigUint64Array=null}static sizeOf(_){switch(_){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(`${_} isn't a valid view type`)}}}function fastCopy(A,_,C,T){if(C??(C=0),T??(T=Math.min(A.byteLength-C,_.byteLength)),!(C&7)&&!(T&7)){const R=T/8;new Float64Array(_,0,R).set(new Float64Array(A,C,R))}else if(!(C&3)&&!(T&3)){const R=T/4;new Float32Array(_,0,R).set(new Float32Array(A,C,R))}else new Uint8Array(_).set(new Uint8Array(A,C,T))}const BLEND_TO_NPM={normal:"normal-npm",add:"add-npm",screen:"screen-npm"};var STENCIL_MODES=(A=>(A[A.DISABLED=0]="DISABLED",A[A.RENDERING_MASK_ADD=1]="RENDERING_MASK_ADD",A[A.MASK_ACTIVE=2]="MASK_ACTIVE",A[A.INVERSE_MASK_ACTIVE=3]="INVERSE_MASK_ACTIVE",A[A.RENDERING_MASK_REMOVE=4]="RENDERING_MASK_REMOVE",A[A.NONE=5]="NONE",A))(STENCIL_MODES||{});function getAdjustedBlendModeBlend(A,_){return _.alphaMode==="no-premultiply-alpha"&&BLEND_TO_NPM[A]||A}const fragTemplate=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join(`
`);function generateIfTestSrc(A){let _="";for(let C=0;C<A;++C)C>0&&(_+=`
else `),C<A-1&&(_+=`if(test == ${C}.0){}`);return _}function checkMaxIfStatementsInShader(A,_){if(A===0)throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");const C=_.createShader(_.FRAGMENT_SHADER);try{for(;;){const T=fragTemplate.replace(/%forloop%/gi,generateIfTestSrc(A));if(_.shaderSource(C,T),_.compileShader(C),!_.getShaderParameter(C,_.COMPILE_STATUS))A=A/2|0;else break}}finally{_.deleteShader(C)}return A}let maxTexturesPerBatchCache=null;function getMaxTexturesPerBatch(){var _;if(maxTexturesPerBatchCache)return maxTexturesPerBatchCache;const A=getTestContext();return maxTexturesPerBatchCache=A.getParameter(A.MAX_TEXTURE_IMAGE_UNITS),maxTexturesPerBatchCache=checkMaxIfStatementsInShader(maxTexturesPerBatchCache,A),(_=A.getExtension("WEBGL_lose_context"))==null||_.loseContext(),maxTexturesPerBatchCache}class BatchTextureArray{constructor(){this.ids=Object.create(null),this.textures=[],this.count=0}clear(){for(let _=0;_<this.count;_++){const C=this.textures[_];this.textures[_]=null,this.ids[C.uid]=null}this.count=0}}class Batch{constructor(){this.renderPipeId="batch",this.action="startBatch",this.start=0,this.size=0,this.textures=new BatchTextureArray,this.blendMode="normal",this.topology="triangle-strip",this.canBundle=!0}destroy(){this.textures=null,this.gpuBindGroup=null,this.bindGroup=null,this.batcher=null,this.elements=null}}const batchPool=[];let batchPoolIndex=0;GlobalResourceRegistry.register({clear:()=>{if(batchPool.length>0)for(const A of batchPool)A&&A.destroy();batchPool.length=0,batchPoolIndex=0}});function getBatchFromPool(){return batchPoolIndex>0?batchPool[--batchPoolIndex]:new Batch}function returnBatchToPool(A){A.elements=null,batchPool[batchPoolIndex++]=A}let BATCH_TICK=0;const _Batcher=class me{constructor(_){this.uid=uid("batcher"),this.dirty=!0,this.batchIndex=0,this.batches=[],this._elements=[],_={...me.defaultOptions,..._},_.maxTextures||(deprecation("v8.8.0","maxTextures is a required option for Batcher now, please pass it in the options"),_.maxTextures=getMaxTexturesPerBatch());const{maxTextures:C,attributesInitialSize:T,indicesInitialSize:R}=_;this.attributeBuffer=new ViewableBuffer(T*4),this.indexBuffer=new Uint16Array(R),this.maxTextures=C}begin(){this.elementSize=0,this.elementStart=0,this.indexSize=0,this.attributeSize=0;for(let _=0;_<this.batchIndex;_++)returnBatchToPool(this.batches[_]);this.batchIndex=0,this._batchIndexStart=0,this._batchIndexSize=0,this.dirty=!0}add(_){this._elements[this.elementSize++]=_,_._indexStart=this.indexSize,_._attributeStart=this.attributeSize,_._batcher=this,this.indexSize+=_.indexSize,this.attributeSize+=_.attributeSize*this.vertexSize}checkAndUpdateTexture(_,C){const T=_._batch.textures.ids[C._source.uid];return!T&&T!==0?!1:(_._textureId=T,_.texture=C,!0)}updateElement(_){this.dirty=!0;const C=this.attributeBuffer;_.packAsQuad?this.packQuadAttributes(_,C.float32View,C.uint32View,_._attributeStart,_._textureId):this.packAttributes(_,C.float32View,C.uint32View,_._attributeStart,_._textureId)}break(_){const C=this._elements;if(!C[this.elementStart])return;let T=getBatchFromPool(),R=T.textures;R.clear();const P=C[this.elementStart];let I=getAdjustedBlendModeBlend(P.blendMode,P.texture._source),E=P.topology;this.attributeSize*4>this.attributeBuffer.size&&this._resizeAttributeBuffer(this.attributeSize*4),this.indexSize>this.indexBuffer.length&&this._resizeIndexBuffer(this.indexSize);const B=this.attributeBuffer.float32View,O=this.attributeBuffer.uint32View,G=this.indexBuffer;let L=this._batchIndexSize,F=this._batchIndexStart,D="startBatch",q=[];const U=this.maxTextures;for(let V=this.elementStart;V<this.elementSize;++V){const W=C[V];C[V]=null;const X=W.texture._source,Y=getAdjustedBlendModeBlend(W.blendMode,X),Q=I!==Y||E!==W.topology;if(X._batchTick===BATCH_TICK&&!Q){W._textureId=X._textureBindLocation,L+=W.indexSize,W.packAsQuad?(this.packQuadAttributes(W,B,O,W._attributeStart,W._textureId),this.packQuadIndex(G,W._indexStart,W._attributeStart/this.vertexSize)):(this.packAttributes(W,B,O,W._attributeStart,W._textureId),this.packIndex(W,G,W._indexStart,W._attributeStart/this.vertexSize)),W._batch=T,q.push(W);continue}X._batchTick=BATCH_TICK,(R.count>=U||Q)&&(this._finishBatch(T,F,L-F,R,I,E,_,D,q),D="renderBatch",F=L,I=Y,E=W.topology,T=getBatchFromPool(),R=T.textures,R.clear(),q=[],++BATCH_TICK),W._textureId=X._textureBindLocation=R.count,R.ids[X.uid]=R.count,R.textures[R.count++]=X,W._batch=T,q.push(W),L+=W.indexSize,W.packAsQuad?(this.packQuadAttributes(W,B,O,W._attributeStart,W._textureId),this.packQuadIndex(G,W._indexStart,W._attributeStart/this.vertexSize)):(this.packAttributes(W,B,O,W._attributeStart,W._textureId),this.packIndex(W,G,W._indexStart,W._attributeStart/this.vertexSize))}R.count>0&&(this._finishBatch(T,F,L-F,R,I,E,_,D,q),F=L,++BATCH_TICK),this.elementStart=this.elementSize,this._batchIndexStart=F,this._batchIndexSize=L}_finishBatch(_,C,T,R,P,I,E,B,O){_.gpuBindGroup=null,_.bindGroup=null,_.action=B,_.batcher=this,_.textures=R,_.blendMode=P,_.topology=I,_.start=C,_.size=T,_.elements=O,++BATCH_TICK,this.batches[this.batchIndex++]=_,E.add(_)}finish(_){this.break(_)}ensureAttributeBuffer(_){_*4<=this.attributeBuffer.size||this._resizeAttributeBuffer(_*4)}ensureIndexBuffer(_){_<=this.indexBuffer.length||this._resizeIndexBuffer(_)}_resizeAttributeBuffer(_){const C=Math.max(_,this.attributeBuffer.size*2),T=new ViewableBuffer(C);fastCopy(this.attributeBuffer.rawBinaryData,T.rawBinaryData),this.attributeBuffer=T}_resizeIndexBuffer(_){const C=this.indexBuffer;let T=Math.max(_,C.length*1.5);T+=T%2;const R=T>65535?new Uint32Array(T):new Uint16Array(T);if(R.BYTES_PER_ELEMENT!==C.BYTES_PER_ELEMENT)for(let P=0;P<C.length;P++)R[P]=C[P];else fastCopy(C.buffer,R.buffer);this.indexBuffer=R}packQuadIndex(_,C,T){_[C]=T+0,_[C+1]=T+1,_[C+2]=T+2,_[C+3]=T+0,_[C+4]=T+2,_[C+5]=T+3}packIndex(_,C,T,R){const P=_.indices,I=_.indexSize,E=_.indexOffset,B=_.attributeOffset;for(let O=0;O<I;O++)C[T++]=R+P[O+E]-B}destroy(_={}){var C;if(this.batches!==null){for(let T=0;T<this.batchIndex;T++)returnBatchToPool(this.batches[T]);this.batches=null,this.geometry.destroy(!0),this.geometry=null,_.shader&&((C=this.shader)==null||C.destroy(),this.shader=null);for(let T=0;T<this._elements.length;T++)this._elements[T]&&(this._elements[T]._batch=null);this._elements=null,this.indexBuffer=null,this.attributeBuffer.destroy(),this.attributeBuffer=null}}};_Batcher.defaultOptions={maxTextures:null,attributesInitialSize:4,indicesInitialSize:6};let Batcher=_Batcher;var BufferUsage=(A=>(A[A.MAP_READ=1]="MAP_READ",A[A.MAP_WRITE=2]="MAP_WRITE",A[A.COPY_SRC=4]="COPY_SRC",A[A.COPY_DST=8]="COPY_DST",A[A.INDEX=16]="INDEX",A[A.VERTEX=32]="VERTEX",A[A.UNIFORM=64]="UNIFORM",A[A.STORAGE=128]="STORAGE",A[A.INDIRECT=256]="INDIRECT",A[A.QUERY_RESOLVE=512]="QUERY_RESOLVE",A[A.STATIC=1024]="STATIC",A))(BufferUsage||{});class Buffer extends EventEmitter{constructor(_){let{data:C,size:T}=_;const{usage:R,label:P,shrinkToFit:I}=_;super(),this._gpuData=Object.create(null),this._gcLastUsed=-1,this.autoGarbageCollect=!0,this.uid=uid("buffer"),this._resourceType="buffer",this._resourceId=uid("resource"),this._touched=0,this._updateID=1,this._dataInt32=null,this.shrinkToFit=!0,this.destroyed=!1,C instanceof Array&&(C=new Float32Array(C)),this._data=C,T??(T=C==null?void 0:C.byteLength);const E=!!C;this.descriptor={size:T,usage:R,mappedAtCreation:E,label:P},this.shrinkToFit=I??!0}get data(){return this._data}set data(_){this.setDataWithSize(_,_.length,!0)}get dataInt32(){return this._dataInt32||(this._dataInt32=new Int32Array(this.data.buffer)),this._dataInt32}get static(){return!!(this.descriptor.usage&BufferUsage.STATIC)}set static(_){_?this.descriptor.usage|=BufferUsage.STATIC:this.descriptor.usage&=~BufferUsage.STATIC}setDataWithSize(_,C,T){if(this._updateID++,this._updateSize=C*_.BYTES_PER_ELEMENT,this._data===_){T&&this.emit("update",this);return}const R=this._data;if(this._data=_,this._dataInt32=null,!R||R.length!==_.length){!this.shrinkToFit&&R&&_.byteLength<R.byteLength?T&&this.emit("update",this):(this.descriptor.size=_.byteLength,this._resourceId=uid("resource"),this.emit("change",this));return}T&&this.emit("update",this)}update(_){this._updateSize=_??this._updateSize,this._updateID++,this.emit("update",this)}unload(){var _;this.emit("unload",this);for(const C in this._gpuData)(_=this._gpuData[C])==null||_.destroy();this._gpuData=Object.create(null)}destroy(){this.destroyed=!0,this.unload(),this.emit("destroy",this),this.emit("change",this),this._data=null,this.descriptor=null,this.removeAllListeners()}}function ensureIsBuffer(A,_){if(!(A instanceof Buffer)){let C=_?BufferUsage.INDEX:BufferUsage.VERTEX;A instanceof Array&&(_?(A=new Uint32Array(A),C=BufferUsage.INDEX|BufferUsage.COPY_DST):(A=new Float32Array(A),C=BufferUsage.VERTEX|BufferUsage.COPY_DST)),A=new Buffer({data:A,label:_?"index-mesh-buffer":"vertex-mesh-buffer",usage:C})}return A}function getGeometryBounds(A,_,C){const T=A.getAttribute(_);if(!T)return C.minX=0,C.minY=0,C.maxX=0,C.maxY=0,C;const R=T.buffer.data;let P=1/0,I=1/0,E=-1/0,B=-1/0;const O=R.BYTES_PER_ELEMENT,G=(T.offset||0)/O,L=(T.stride||2*4)/O;for(let F=G;F<R.length;F+=L){const D=R[F],q=R[F+1];D>E&&(E=D),q>B&&(B=q),D<P&&(P=D),q<I&&(I=q)}return C.minX=P,C.minY=I,C.maxX=E,C.maxY=B,C}function ensureIsAttribute(A){return(A instanceof Buffer||Array.isArray(A)||A.BYTES_PER_ELEMENT)&&(A={buffer:A}),A.buffer=ensureIsBuffer(A.buffer,!1),A}class Geometry extends EventEmitter{constructor(_={}){super(),this._gpuData=Object.create(null),this.autoGarbageCollect=!0,this._gcLastUsed=-1,this.uid=uid("geometry"),this._layoutKey=0,this.instanceCount=1,this._bounds=new Bounds,this._boundsDirty=!0;const{attributes:C,indexBuffer:T,topology:R}=_;if(this.buffers=[],this.attributes={},C)for(const P in C)this.addAttribute(P,C[P]);this.instanceCount=_.instanceCount??1,T&&this.addIndex(T),this.topology=R||"triangle-list"}onBufferUpdate(){this._boundsDirty=!0,this.emit("update",this)}getAttribute(_){return this.attributes[_]}getIndex(){return this.indexBuffer}getBuffer(_){return this.getAttribute(_).buffer}getSize(){for(const _ in this.attributes){const C=this.attributes[_];return C.buffer.data.length/(C.stride/4||C.size)}return 0}addAttribute(_,C){const T=ensureIsAttribute(C);this.buffers.indexOf(T.buffer)===-1&&(this.buffers.push(T.buffer),T.buffer.on("update",this.onBufferUpdate,this),T.buffer.on("change",this.onBufferUpdate,this)),this.attributes[_]=T}addIndex(_){this.indexBuffer=ensureIsBuffer(_,!0),this.buffers.push(this.indexBuffer)}get bounds(){return this._boundsDirty?(this._boundsDirty=!1,getGeometryBounds(this,"aPosition",this._bounds)):this._bounds}unload(){var _;this.emit("unload",this);for(const C in this._gpuData)(_=this._gpuData[C])==null||_.destroy();this._gpuData=Object.create(null)}destroy(_=!1){var C;this.emit("destroy",this),this.removeAllListeners(),_&&this.buffers.forEach(T=>T.destroy()),this.unload(),(C=this.indexBuffer)==null||C.destroy(),this.attributes=null,this.buffers=null,this.indexBuffer=null,this._bounds=null}}const placeHolderBufferData=new Float32Array(1),placeHolderIndexData=new Uint32Array(1);class BatchGeometry extends Geometry{constructor(){const C=new Buffer({data:placeHolderBufferData,label:"attribute-batch-buffer",usage:BufferUsage.VERTEX|BufferUsage.COPY_DST,shrinkToFit:!1}),T=new Buffer({data:placeHolderIndexData,label:"index-batch-buffer",usage:BufferUsage.INDEX|BufferUsage.COPY_DST,shrinkToFit:!1}),R=6*4;super({attributes:{aPosition:{buffer:C,format:"float32x2",stride:R,offset:0},aUV:{buffer:C,format:"float32x2",stride:R,offset:2*4},aColor:{buffer:C,format:"unorm8x4",stride:R,offset:4*4},aTextureIdAndRound:{buffer:C,format:"uint16x2",stride:R,offset:5*4}},indexBuffer:T})}}function addBits(A,_,C){if(A)for(const T in A){const R=T.toLocaleLowerCase(),P=_[R];if(P){let I=A[T];T==="header"&&(I=I.replace(/@in\s+[^;]+;\s*/g,"").replace(/@out\s+[^;]+;\s*/g,"")),C&&P.push(`//----${C}----//`),P.push(I)}else warn(`${T} placement hook does not exist in shader`)}}const findHooksRx=/\{\{(.*?)\}\}/g;function compileHooks(A){var T;const _={};return(((T=A.match(findHooksRx))==null?void 0:T.map(R=>R.replace(/[{()}]/g,"")))??[]).forEach(R=>{_[R]=[]}),_}function extractInputs(A,_){let C;const T=/@in\s+([^;]+);/g;for(;(C=T.exec(A))!==null;)_.push(C[1])}function compileInputs(A,_,C=!1){const T=[];extractInputs(_,T),A.forEach(E=>{E.header&&extractInputs(E.header,T)});const R=T;C&&R.sort();const P=R.map((E,B)=>`       @location(${B}) ${E},`).join(`
`);let I=_.replace(/@in\s+[^;]+;\s*/g,"");return I=I.replace("{{in}}",`
${P}
`),I}function extractOutputs(A,_){let C;const T=/@out\s+([^;]+);/g;for(;(C=T.exec(A))!==null;)_.push(C[1])}function extractVariableName(A){const C=/\b(\w+)\s*:/g.exec(A);return C?C[1]:""}function stripVariable(A){const _=/@.*?\s+/g;return A.replace(_,"")}function compileOutputs(A,_){const C=[];extractOutputs(_,C),A.forEach(B=>{B.header&&extractOutputs(B.header,C)});let T=0;const R=C.sort().map(B=>B.indexOf("builtin")>-1?B:`@location(${T++}) ${B}`).join(`,
`),P=C.sort().map(B=>`       var ${stripVariable(B)};`).join(`
`),I=`return VSOutput(
            ${C.sort().map(B=>` ${extractVariableName(B)}`).join(`,
`)});`;let E=_.replace(/@out\s+[^;]+;\s*/g,"");return E=E.replace("{{struct}}",`
${R}
`),E=E.replace("{{start}}",`
${P}
`),E=E.replace("{{return}}",`
${I}
`),E}function injectBits(A,_){let C=A;for(const T in _){const R=_[T];R.join(`
`).length?C=C.replace(`{{${T}}}`,`//-----${T} START-----//
${R.join(`
`)}
//----${T} FINISH----//`):C=C.replace(`{{${T}}}`,"")}return C}const cacheMap=Object.create(null),bitCacheMap=new Map;let CACHE_UID=0;function compileHighShader({template:A,bits:_}){const C=generateCacheId(A,_);if(cacheMap[C])return cacheMap[C];const{vertex:T,fragment:R}=compileInputsAndOutputs(A,_);return cacheMap[C]=compileBits(T,R,_),cacheMap[C]}function compileHighShaderGl({template:A,bits:_}){const C=generateCacheId(A,_);return cacheMap[C]||(cacheMap[C]=compileBits(A.vertex,A.fragment,_)),cacheMap[C]}function compileInputsAndOutputs(A,_){const C=_.map(I=>I.vertex).filter(I=>!!I),T=_.map(I=>I.fragment).filter(I=>!!I);let R=compileInputs(C,A.vertex,!0);R=compileOutputs(C,R);const P=compileInputs(T,A.fragment,!0);return{vertex:R,fragment:P}}function generateCacheId(A,_){return _.map(C=>(bitCacheMap.has(C)||bitCacheMap.set(C,CACHE_UID++),bitCacheMap.get(C))).sort((C,T)=>C-T).join("-")+A.vertex+A.fragment}function compileBits(A,_,C){const T=compileHooks(A),R=compileHooks(_);return C.forEach(P=>{addBits(P.vertex,T,P.name),addBits(P.fragment,R,P.name)}),{vertex:injectBits(A,T),fragment:injectBits(_,R)}}const vertexGPUTemplate=`
    @in aPosition: vec2<f32>;
    @in aUV: vec2<f32>;

    @out @builtin(position) vPosition: vec4<f32>;
    @out vUV : vec2<f32>;
    @out vColor : vec4<f32>;

    {{header}}

    struct VSOutput {
        {{struct}}
    };

    @vertex
    fn main( {{in}} ) -> VSOutput {

        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;
        var modelMatrix = mat3x3<f32>(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        var position = aPosition;
        var uv = aUV;

        {{start}}

        vColor = vec4<f32>(1., 1., 1., 1.);

        {{main}}

        vUV = uv;

        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;

        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);

        vColor *= globalUniforms.uWorldColorAlpha;

        {{end}}

        {{return}}
    };
`,fragmentGPUTemplate=`
    @in vUV : vec2<f32>;
    @in vColor : vec4<f32>;

    {{header}}

    @fragment
    fn main(
        {{in}}
      ) -> @location(0) vec4<f32> {

        {{start}}

        var outColor:vec4<f32>;

        {{main}}

        var finalColor:vec4<f32> = outColor * vColor;

        {{end}}

        return finalColor;
      };
`,vertexGlTemplate=`
    in vec2 aPosition;
    in vec2 aUV;

    out vec4 vColor;
    out vec2 vUV;

    {{header}}

    void main(void){

        mat3 worldTransformMatrix = uWorldTransformMatrix;
        mat3 modelMatrix = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        vec2 position = aPosition;
        vec2 uv = aUV;

        {{start}}

        vColor = vec4(1.);

        {{main}}

        vUV = uv;

        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;

        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);

        vColor *= uWorldColorAlpha;

        {{end}}
    }
`,fragmentGlTemplate=`

    in vec4 vColor;
    in vec2 vUV;

    out vec4 finalColor;

    {{header}}

    void main(void) {

        {{start}}

        vec4 outColor;

        {{main}}

        finalColor = outColor * vColor;

        {{end}}
    }
`,globalUniformsBit={name:"global-uniforms-bit",vertex:{header:`
        struct GlobalUniforms {
            uProjectionMatrix:mat3x3<f32>,
            uWorldTransformMatrix:mat3x3<f32>,
            uWorldColorAlpha: vec4<f32>,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        `}},globalUniformsBitGl={name:"global-uniforms-bit",vertex:{header:`
          uniform mat3 uProjectionMatrix;
          uniform mat3 uWorldTransformMatrix;
          uniform vec4 uWorldColorAlpha;
          uniform vec2 uResolution;
        `}};function compileHighShaderGpuProgram({bits:A,name:_}){const C=compileHighShader({template:{fragment:fragmentGPUTemplate,vertex:vertexGPUTemplate},bits:[globalUniformsBit,...A]});return GpuProgram.from({name:_,vertex:{source:C.vertex,entryPoint:"main"},fragment:{source:C.fragment,entryPoint:"main"}})}function compileHighShaderGlProgram({bits:A,name:_}){return new GlProgram({name:_,...compileHighShaderGl({template:{vertex:vertexGlTemplate,fragment:fragmentGlTemplate},bits:[globalUniformsBitGl,...A]})})}const colorBit={name:"color-bit",vertex:{header:`
            @in aColor: vec4<f32>;
        `,main:`
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        `}},colorBitGl={name:"color-bit",vertex:{header:`
            in vec4 aColor;
        `,main:`
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        `}},textureBatchBitGpuCache={};function generateBindingSrc(A){const _=[];if(A===1)_.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;"),_.push("@group(1) @binding(1) var textureSampler1: sampler;");else{let C=0;for(let T=0;T<A;T++)_.push(`@group(1) @binding(${C++}) var textureSource${T+1}: texture_2d<f32>;`),_.push(`@group(1) @binding(${C++}) var textureSampler${T+1}: sampler;`)}return _.join(`
`)}function generateSampleSrc(A){const _=[];if(A===1)_.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");else{_.push("switch vTextureId {");for(let C=0;C<A;C++)C===A-1?_.push("  default:{"):_.push(`  case ${C}:{`),_.push(`      outColor = textureSampleGrad(textureSource${C+1}, textureSampler${C+1}, vUV, uvDx, uvDy);`),_.push("      break;}");_.push("}")}return _.join(`
`)}function generateTextureBatchBit(A){return textureBatchBitGpuCache[A]||(textureBatchBitGpuCache[A]={name:"texture-batch-bit",vertex:{header:`
                @in aTextureIdAndRound: vec2<u32>;
                @out @interpolate(flat) vTextureId : u32;
            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1)
                {
                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
                }
            `},fragment:{header:`
                @in @interpolate(flat) vTextureId: u32;

                ${generateBindingSrc(A)}
            `,main:`
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);

                ${generateSampleSrc(A)}
            `}}),textureBatchBitGpuCache[A]}const textureBatchBitGlCache={};function generateSampleGlSrc(A){const _=[];for(let C=0;C<A;C++)C>0&&_.push("else"),C<A-1&&_.push(`if(vTextureId < ${C}.5)`),_.push("{"),_.push(`	outColor = texture(uTextures[${C}], vUV);`),_.push("}");return _.join(`
`)}function generateTextureBatchBitGl(A){return textureBatchBitGlCache[A]||(textureBatchBitGlCache[A]={name:"texture-batch-bit",vertex:{header:`
                in vec2 aTextureIdAndRound;
                out float vTextureId;

            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1.)
                {
                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
                }
            `},fragment:{header:`
                in float vTextureId;

                uniform sampler2D uTextures[${A}];

            `,main:`

                ${generateSampleGlSrc(A)}
            `}}),textureBatchBitGlCache[A]}const roundPixelsBit={name:"round-pixels-bit",vertex:{header:`
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32>
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},roundPixelsBitGl={name:"round-pixels-bit",vertex:{header:`
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},batchSamplersUniformGroupHash={};function getBatchSamplersUniformGroup(A){let _=batchSamplersUniformGroupHash[A];if(_)return _;const C=new Int32Array(A);for(let T=0;T<A;T++)C[T]=T;return _=batchSamplersUniformGroupHash[A]=new UniformGroup({uTextures:{value:C,type:"i32",size:A}},{isStatic:!0}),_}class DefaultShader extends Shader{constructor(_){const C=compileHighShaderGlProgram({name:"batch",bits:[colorBitGl,generateTextureBatchBitGl(_),roundPixelsBitGl]}),T=compileHighShaderGpuProgram({name:"batch",bits:[colorBit,generateTextureBatchBit(_),roundPixelsBit]});super({glProgram:C,gpuProgram:T,resources:{batchSamplers:getBatchSamplersUniformGroup(_)}}),this.maxTextures=_}}let defaultShader=null;const _DefaultBatcher=class ge extends Batcher{constructor(_){super(_),this.geometry=new BatchGeometry,this.name=ge.extension.name,this.vertexSize=6,defaultShader??(defaultShader=new DefaultShader(_.maxTextures)),this.shader=defaultShader}packAttributes(_,C,T,R,P){const I=P<<16|_.roundPixels&65535,E=_.transform,B=E.a,O=E.b,G=E.c,L=E.d,F=E.tx,D=E.ty,{positions:q,uvs:U}=_,V=_.color,W=_.attributeOffset,z=W+_.attributeSize;for(let X=W;X<z;X++){const Y=X*2,Q=q[Y],J=q[Y+1];C[R++]=B*Q+G*J+F,C[R++]=L*J+O*Q+D,C[R++]=U[Y],C[R++]=U[Y+1],T[R++]=V,T[R++]=I}}packQuadAttributes(_,C,T,R,P){const I=_.texture,E=_.transform,B=E.a,O=E.b,G=E.c,L=E.d,F=E.tx,D=E.ty,q=_.bounds,U=q.maxX,V=q.minX,W=q.maxY,z=q.minY,X=I.uvs,Y=_.color,Q=P<<16|_.roundPixels&65535;C[R+0]=B*V+G*z+F,C[R+1]=L*z+O*V+D,C[R+2]=X.x0,C[R+3]=X.y0,T[R+4]=Y,T[R+5]=Q,C[R+6]=B*U+G*z+F,C[R+7]=L*z+O*U+D,C[R+8]=X.x1,C[R+9]=X.y1,T[R+10]=Y,T[R+11]=Q,C[R+12]=B*U+G*W+F,C[R+13]=L*W+O*U+D,C[R+14]=X.x2,C[R+15]=X.y2,T[R+16]=Y,T[R+17]=Q,C[R+18]=B*V+G*W+F,C[R+19]=L*W+O*V+D,C[R+20]=X.x3,C[R+21]=X.y3,T[R+22]=Y,T[R+23]=Q}_updateMaxTextures(_){this.shader.maxTextures!==_&&(defaultShader=new DefaultShader(_),this.shader=defaultShader)}destroy(){this.shader=null,super.destroy()}};_DefaultBatcher.extension={type:[ExtensionType.Batcher],name:"default"};let DefaultBatcher=_DefaultBatcher;class GCManagedHash{constructor(_){this.items=Object.create(null);const{renderer:C,type:T,onUnload:R,priority:P,name:I}=_;this._renderer=C,C.gc.addResourceHash(this,"items",T,P??0),this._onUnload=R,this.name=I}add(_){return this.items[_.uid]?!1:(this.items[_.uid]=_,_.once("unload",this.remove,this),_._gcLastUsed=this._renderer.gc.now,!0)}remove(_,...C){var R;if(!this.items[_.uid])return;const T=_._gpuData[this._renderer.uid];T&&((R=this._onUnload)==null||R.call(this,_,...C),T.destroy(),_._gpuData[this._renderer.uid]=null,this.items[_.uid]=null)}removeAll(..._){Object.values(this.items).forEach(C=>C&&this.remove(C,..._))}destroy(..._){this.removeAll(..._),this.items=Object.create(null),this._renderer=null,this._onUnload=null}}function buildUvs(A,_,C,T,R,P,I,E=null){let B=0;C*=_,R*=P;const O=E.a,G=E.b,L=E.c,F=E.d,D=E.tx,q=E.ty;for(;B<I;){const U=A[C],V=A[C+1];T[R]=O*U+L*V+D,T[R+1]=G*U+F*V+q,R+=P,C+=_,B++}}function buildSimpleUvs(A,_,C,T){let R=0;for(_*=C;R<T;)A[_]=0,A[_+1]=0,_+=C,R++}function transformVertices(A,_,C,T,R){const P=_.a,I=_.b,E=_.c,B=_.d,O=_.tx,G=_.ty;C||(C=0),T||(T=2),R||(R=A.length/T-C);let L=C*T;for(let F=0;F<R;F++){const D=A[L],q=A[L+1];A[L]=P*D+E*q+O,A[L+1]=I*D+B*q+G,L+=T}}const identityMatrix=new Matrix;class BatchableGraphics{constructor(){this.packAsQuad=!1,this.batcherName="default",this.topology="triangle-list",this.applyTransform=!0,this.roundPixels=0,this._batcher=null,this._batch=null}get uvs(){return this.geometryData.uvs}get positions(){return this.geometryData.vertices}get indices(){return this.geometryData.indices}get blendMode(){return this.renderable&&this.applyTransform?this.renderable.groupBlendMode:"normal"}get color(){const _=this.baseColor,C=_>>16|_&65280|(_&255)<<16,T=this.renderable;return T?multiplyHexColors(C,T.groupColor)+(this.alpha*T.groupAlpha*255<<24):C+(this.alpha*255<<24)}get transform(){var _;return((_=this.renderable)==null?void 0:_.groupTransform)||identityMatrix}copyTo(_){_.indexOffset=this.indexOffset,_.indexSize=this.indexSize,_.attributeOffset=this.attributeOffset,_.attributeSize=this.attributeSize,_.baseColor=this.baseColor,_.alpha=this.alpha,_.texture=this.texture,_.geometryData=this.geometryData,_.topology=this.topology}reset(){this.applyTransform=!0,this.renderable=null,this.topology="triangle-list"}destroy(){this.renderable=null,this.texture=null,this.geometryData=null,this._batcher=null,this._batch=null}}const buildCircle={extension:{type:ExtensionType.ShapeBuilder,name:"circle"},build(A,_){let C,T,R,P,I,E;if(A.type==="circle"){const Y=A;if(I=E=Y.radius,I<=0)return!1;C=Y.x,T=Y.y,R=P=0}else if(A.type==="ellipse"){const Y=A;if(I=Y.halfWidth,E=Y.halfHeight,I<=0||E<=0)return!1;C=Y.x,T=Y.y,R=P=0}else{const Y=A,Q=Y.width/2,J=Y.height/2;C=Y.x+Q,T=Y.y+J,I=E=Math.max(0,Math.min(Y.radius,Math.min(Q,J))),R=Q-I,P=J-E}if(R<0||P<0)return!1;const B=Math.ceil(2.3*Math.sqrt(I+E)),O=B*8+(R?4:0)+(P?4:0);if(O===0)return!1;if(B===0)return _[0]=_[6]=C+R,_[1]=_[3]=T+P,_[2]=_[4]=C-R,_[5]=_[7]=T-P,!0;let G=0,L=B*4+(R?2:0)+2,F=L,D=O,q=R+I,U=P,V=C+q,W=C-q,z=T+U;if(_[G++]=V,_[G++]=z,_[--L]=z,_[--L]=W,P){const Y=T-U;_[F++]=W,_[F++]=Y,_[--D]=Y,_[--D]=V}for(let Y=1;Y<B;Y++){const Q=Math.PI/2*(Y/B),J=R+Math.cos(Q)*I,Z=P+Math.sin(Q)*E,ut=C+J,rt=C-J,et=T+Z,tt=T-Z;_[G++]=ut,_[G++]=et,_[--L]=et,_[--L]=rt,_[F++]=rt,_[F++]=tt,_[--D]=tt,_[--D]=ut}q=R,U=P+E,V=C+q,W=C-q,z=T+U;const X=T-U;return _[G++]=V,_[G++]=z,_[--D]=X,_[--D]=V,R&&(_[G++]=W,_[G++]=z,_[--D]=X,_[--D]=W),!0},triangulate(A,_,C,T,R,P){if(A.length===0)return;let I=0,E=0;for(let G=0;G<A.length;G+=2)I+=A[G],E+=A[G+1];I/=A.length/2,E/=A.length/2;let B=T;_[B*C]=I,_[B*C+1]=E;const O=B++;for(let G=0;G<A.length;G+=2)_[B*C]=A[G],_[B*C+1]=A[G+1],G>0&&(R[P++]=B,R[P++]=O,R[P++]=B-1),B++;R[P++]=O+1,R[P++]=O,R[P++]=B-1}},buildEllipse={...buildCircle,extension:{...buildCircle.extension,name:"ellipse"}},buildRoundedRectangle={...buildCircle,extension:{...buildCircle.extension,name:"roundedRectangle"}},closePointEps=1e-4,curveEps=1e-4;function getOrientationOfPoints(A){const _=A.length;if(_<6)return 1;let C=0;for(let T=0,R=A[_-2],P=A[_-1];T<_;T+=2){const I=A[T],E=A[T+1];C+=(I-R)*(E+P),R=I,P=E}return C<0?-1:1}function square(A,_,C,T,R,P,I,E){const B=A-C*R,O=_-T*R,G=A+C*P,L=_+T*P;let F,D;I?(F=T,D=-C):(F=-T,D=C);const q=B+F,U=O+D,V=G+F,W=L+D;return E.push(q,U),E.push(V,W),2}function round(A,_,C,T,R,P,I,E){const B=C-A,O=T-_;let G=Math.atan2(B,O),L=Math.atan2(R-A,P-_);E&&G<L?G+=Math.PI*2:!E&&G>L&&(L+=Math.PI*2);let F=G;const D=L-G,q=Math.abs(D),U=Math.sqrt(B*B+O*O),V=(15*q*Math.sqrt(U)/Math.PI>>0)+1,W=D/V;if(F+=W,E){I.push(A,_),I.push(C,T);for(let z=1,X=F;z<V;z++,X+=W)I.push(A,_),I.push(A+Math.sin(X)*U,_+Math.cos(X)*U);I.push(A,_),I.push(R,P)}else{I.push(C,T),I.push(A,_);for(let z=1,X=F;z<V;z++,X+=W)I.push(A+Math.sin(X)*U,_+Math.cos(X)*U),I.push(A,_);I.push(R,P),I.push(A,_)}return V*2}function buildLine(A,_,C,T,R,P){const I=closePointEps;if(A.length===0)return;const E=_;let B=E.alignment;if(_.alignment!==.5){let dt=getOrientationOfPoints(A);B=(B-.5)*dt+.5}const O=new Point(A[0],A[1]),G=new Point(A[A.length-2],A[A.length-1]),L=T,F=Math.abs(O.x-G.x)<I&&Math.abs(O.y-G.y)<I;if(L){A=A.slice(),F&&(A.pop(),A.pop(),G.set(A[A.length-2],A[A.length-1]));const dt=(O.x+G.x)*.5,yt=(G.y+O.y)*.5;A.unshift(dt,yt),A.push(dt,yt)}const D=R,q=A.length/2;let U=A.length;const V=D.length/2,W=E.width/2,z=W*W,X=E.miterLimit*E.miterLimit;let Y=A[0],Q=A[1],J=A[2],Z=A[3],ut=0,rt=0,et=-(Q-Z),tt=Y-J,lt=0,ht=0,it=Math.sqrt(et*et+tt*tt);et/=it,tt/=it,et*=W,tt*=W;const mt=B,nt=(1-mt)*2,st=mt*2;L||(E.cap==="round"?U+=round(Y-et*(nt-st)*.5,Q-tt*(nt-st)*.5,Y-et*nt,Q-tt*nt,Y+et*st,Q+tt*st,D,!0)+2:E.cap==="square"&&(U+=square(Y,Q,et,tt,nt,st,!0,D))),D.push(Y-et*nt,Q-tt*nt),D.push(Y+et*st,Q+tt*st);for(let dt=1;dt<q-1;++dt){Y=A[(dt-1)*2],Q=A[(dt-1)*2+1],J=A[dt*2],Z=A[dt*2+1],ut=A[(dt+1)*2],rt=A[(dt+1)*2+1],et=-(Q-Z),tt=Y-J,it=Math.sqrt(et*et+tt*tt),et/=it,tt/=it,et*=W,tt*=W,lt=-(Z-rt),ht=J-ut,it=Math.sqrt(lt*lt+ht*ht),lt/=it,ht/=it,lt*=W,ht*=W;const yt=J-Y,vt=Q-Z,gt=J-ut,Ct=rt-Z,ft=yt*gt+vt*Ct,At=vt*gt-Ct*yt,Mt=At<0;if(Math.abs(At)<.001*Math.abs(ft)){D.push(J-et*nt,Z-tt*nt),D.push(J+et*st,Z+tt*st),ft>=0&&(E.join==="round"?U+=round(J,Z,J-et*nt,Z-tt*nt,J-lt*nt,Z-ht*nt,D,!1)+4:U+=2,D.push(J-lt*st,Z-ht*st),D.push(J+lt*nt,Z+ht*nt));continue}const Tt=(-et+Y)*(-tt+Z)-(-et+J)*(-tt+Q),kt=(-lt+ut)*(-ht+Z)-(-lt+J)*(-ht+rt),Rt=(yt*kt-gt*Tt)/At,Bt=(Ct*Tt-vt*kt)/At,Dt=(Rt-J)*(Rt-J)+(Bt-Z)*(Bt-Z),Et=J+(Rt-J)*nt,Gt=Z+(Bt-Z)*nt,It=J-(Rt-J)*st,Nt=Z-(Bt-Z)*st,Lt=Math.min(yt*yt+vt*vt,gt*gt+Ct*Ct),$t=Mt?nt:st,Qt=Lt+$t*$t*z;Dt<=Qt?E.join==="bevel"||Dt/z>X?(Mt?(D.push(Et,Gt),D.push(J+et*st,Z+tt*st),D.push(Et,Gt),D.push(J+lt*st,Z+ht*st)):(D.push(J-et*nt,Z-tt*nt),D.push(It,Nt),D.push(J-lt*nt,Z-ht*nt),D.push(It,Nt)),U+=2):E.join==="round"?Mt?(D.push(Et,Gt),D.push(J+et*st,Z+tt*st),U+=round(J,Z,J+et*st,Z+tt*st,J+lt*st,Z+ht*st,D,!0)+4,D.push(Et,Gt),D.push(J+lt*st,Z+ht*st)):(D.push(J-et*nt,Z-tt*nt),D.push(It,Nt),U+=round(J,Z,J-et*nt,Z-tt*nt,J-lt*nt,Z-ht*nt,D,!1)+4,D.push(J-lt*nt,Z-ht*nt),D.push(It,Nt)):(D.push(Et,Gt),D.push(It,Nt)):(D.push(J-et*nt,Z-tt*nt),D.push(J+et*st,Z+tt*st),E.join==="round"?Mt?U+=round(J,Z,J+et*st,Z+tt*st,J+lt*st,Z+ht*st,D,!0)+2:U+=round(J,Z,J-et*nt,Z-tt*nt,J-lt*nt,Z-ht*nt,D,!1)+2:E.join==="miter"&&Dt/z<=X&&(Mt?(D.push(It,Nt),D.push(It,Nt)):(D.push(Et,Gt),D.push(Et,Gt)),U+=2),D.push(J-lt*nt,Z-ht*nt),D.push(J+lt*st,Z+ht*st),U+=2)}Y=A[(q-2)*2],Q=A[(q-2)*2+1],J=A[(q-1)*2],Z=A[(q-1)*2+1],et=-(Q-Z),tt=Y-J,it=Math.sqrt(et*et+tt*tt),et/=it,tt/=it,et*=W,tt*=W,D.push(J-et*nt,Z-tt*nt),D.push(J+et*st,Z+tt*st),L||(E.cap==="round"?U+=round(J-et*(nt-st)*.5,Z-tt*(nt-st)*.5,J-et*nt,Z-tt*nt,J+et*st,Z+tt*st,D,!1)+2:E.cap==="square"&&(U+=square(J,Z,et,tt,nt,st,!1,D)));const xt=curveEps*curveEps;for(let dt=V;dt<U+V-2;++dt)Y=D[dt*2],Q=D[dt*2+1],J=D[(dt+1)*2],Z=D[(dt+1)*2+1],ut=D[(dt+2)*2],rt=D[(dt+2)*2+1],!(Math.abs(Y*(Z-rt)+J*(rt-Q)+ut*(Q-Z))<xt)&&P.push(dt,dt+1,dt+2)}function buildPixelLine(A,_,C,T){const R=closePointEps;if(A.length===0)return;const P=A[0],I=A[1],E=A[A.length-2],B=A[A.length-1],O=_||Math.abs(P-E)<R&&Math.abs(I-B)<R,G=C,L=A.length/2,F=G.length/2;for(let D=0;D<L;D++)G.push(A[D*2]),G.push(A[D*2+1]);for(let D=0;D<L-1;D++)T.push(F+D,F+D+1);O&&T.push(F+L-1,F)}function triangulateWithHoles(A,_,C,T,R,P,I){const E=earcut(A,_,2);if(!E)return;for(let O=0;O<E.length;O+=3)P[I++]=E[O]+R,P[I++]=E[O+1]+R,P[I++]=E[O+2]+R;let B=R*T;for(let O=0;O<A.length;O+=2)C[B]=A[O],C[B+1]=A[O+1],B+=T}const emptyArray=[],buildPolygon={extension:{type:ExtensionType.ShapeBuilder,name:"polygon"},build(A,_){for(let C=0;C<A.points.length;C++)_[C]=A.points[C];return!0},triangulate(A,_,C,T,R,P){triangulateWithHoles(A,emptyArray,_,C,T,R,P)}},buildRectangle={extension:{type:ExtensionType.ShapeBuilder,name:"rectangle"},build(A,_){const C=A,T=C.x,R=C.y,P=C.width,I=C.height;return P>0&&I>0?(_[0]=T,_[1]=R,_[2]=T+P,_[3]=R,_[4]=T+P,_[5]=R+I,_[6]=T,_[7]=R+I,!0):!1},triangulate(A,_,C,T,R,P){let I=0;T*=C,_[T+I]=A[0],_[T+I+1]=A[1],I+=C,_[T+I]=A[2],_[T+I+1]=A[3],I+=C,_[T+I]=A[6],_[T+I+1]=A[7],I+=C,_[T+I]=A[4],_[T+I+1]=A[5],I+=C;const E=T/C;R[P++]=E,R[P++]=E+1,R[P++]=E+2,R[P++]=E+1,R[P++]=E+3,R[P++]=E+2}},buildTriangle={extension:{type:ExtensionType.ShapeBuilder,name:"triangle"},build(A,_){return _[0]=A.x,_[1]=A.y,_[2]=A.x2,_[3]=A.y2,_[4]=A.x3,_[5]=A.y3,!0},triangulate(A,_,C,T,R,P){let I=0;T*=C,_[T+I]=A[0],_[T+I+1]=A[1],I+=C,_[T+I]=A[2],_[T+I+1]=A[3],I+=C,_[T+I]=A[4],_[T+I+1]=A[5];const E=T/C;R[P++]=E,R[P++]=E+1,R[P++]=E+2}},emptyColorStops=[{offset:0,color:"white"},{offset:1,color:"black"}],_FillGradient=class re{constructor(..._){this.uid=uid("fillGradient"),this._tick=0,this.type="linear",this.colorStops=[];let C=ensureGradientOptions(_);C={...C.type==="radial"?re.defaultRadialOptions:re.defaultLinearOptions,...definedProps(C)},this._textureSize=C.textureSize,this._wrapMode=C.wrapMode,C.type==="radial"?(this.center=C.center,this.outerCenter=C.outerCenter??this.center,this.innerRadius=C.innerRadius,this.outerRadius=C.outerRadius,this.scale=C.scale,this.rotation=C.rotation):(this.start=C.start,this.end=C.end),this.textureSpace=C.textureSpace,this.type=C.type,C.colorStops.forEach(R=>{this.addColorStop(R.offset,R.color)})}addColorStop(_,C){return this.colorStops.push({offset:_,color:Color.shared.setValue(C).toHexa()}),this}buildLinearGradient(){if(this.texture)return;let{x:_,y:C}=this.start,{x:T,y:R}=this.end,P=T-_,I=R-C;const E=P<0||I<0;if(this._wrapMode==="clamp-to-edge"){if(P<0){const V=_;_=T,T=V,P*=-1}if(I<0){const V=C;C=R,R=V,I*=-1}}const B=this.colorStops.length?this.colorStops:emptyColorStops,O=this._textureSize,{canvas:G,context:L}=getCanvas(O,1),F=E?L.createLinearGradient(this._textureSize,0,0,0):L.createLinearGradient(0,0,this._textureSize,0);addColorStops(F,B),L.fillStyle=F,L.fillRect(0,0,O,1),this.texture=new Texture({source:new ImageSource({resource:G,addressMode:this._wrapMode})});const D=Math.sqrt(P*P+I*I),q=Math.atan2(I,P),U=new Matrix;U.scale(D/O,1),U.rotate(q),U.translate(_,C),this.textureSpace==="local"&&U.scale(O,O),this.transform=U}buildGradient(){this.texture||this._tick++,this.type==="linear"?this.buildLinearGradient():this.buildRadialGradient()}buildRadialGradient(){if(this.texture)return;const _=this.colorStops.length?this.colorStops:emptyColorStops,C=this._textureSize,{canvas:T,context:R}=getCanvas(C,C),{x:P,y:I}=this.center,{x:E,y:B}=this.outerCenter,O=this.innerRadius,G=this.outerRadius,L=E-G,F=B-G,D=C/(G*2),q=(P-L)*D,U=(I-F)*D,V=R.createRadialGradient(q,U,O*D,(E-L)*D,(B-F)*D,G*D);addColorStops(V,_),R.fillStyle=_[_.length-1].color,R.fillRect(0,0,C,C),R.fillStyle=V,R.translate(q,U),R.rotate(this.rotation),R.scale(1,this.scale),R.translate(-q,-U),R.fillRect(0,0,C,C),this.texture=new Texture({source:new ImageSource({resource:T,addressMode:this._wrapMode})});const W=new Matrix;this.textureSpace==="local"?W.scale(2*G,2*G):W.scale(1/D,1/D),W.translate(L,F),this.transform=W}destroy(){var _;(_=this.texture)==null||_.destroy(!0),this.texture=null,this.transform=null,this.colorStops=[],this.start=null,this.end=null,this.center=null,this.outerCenter=null}get styleKey(){return`fill-gradient-${this.uid}-${this._tick}`}};_FillGradient.defaultLinearOptions={start:{x:0,y:0},end:{x:0,y:1},colorStops:[],textureSpace:"local",type:"linear",textureSize:256,wrapMode:"clamp-to-edge"};_FillGradient.defaultRadialOptions={center:{x:.5,y:.5},innerRadius:0,outerRadius:.5,colorStops:[],scale:1,rotation:0,textureSpace:"local",type:"radial",textureSize:256,wrapMode:"clamp-to-edge"};let FillGradient=_FillGradient;function addColorStops(A,_){for(let C=0;C<_.length;C++){const T=_[C];A.addColorStop(T.offset,T.color)}}function getCanvas(A,_){const C=DOMAdapter.get().createCanvas(A,_),T=C.getContext("2d");return{canvas:C,context:T}}function ensureGradientOptions(A){let _=A[0]??{};return(typeof _=="number"||A[1])&&(deprecation("8.5.2","use options object instead"),_={type:"linear",start:{x:A[0],y:A[1]},end:{x:A[2],y:A[3]},textureSpace:A[4],textureSize:A[5]??FillGradient.defaultLinearOptions.textureSize}),_}const tempTextureMatrix$1=new Matrix,tempRect$2=new Rectangle;function generateTextureMatrix(A,_,C,T){const R=_.matrix?A.copyFrom(_.matrix).invert():A.identity();if(_.textureSpace==="local"){const I=C.getBounds(tempRect$2);_.width&&I.pad(_.width);const{x:E,y:B}=I,O=1/I.width,G=1/I.height,L=-E*O,F=-B*G,D=R.a,q=R.b,U=R.c,V=R.d;R.a*=O,R.b*=O,R.c*=G,R.d*=G,R.tx=L*D+F*U+R.tx,R.ty=L*q+F*V+R.ty}else R.translate(_.texture.frame.x,_.texture.frame.y),R.scale(1/_.texture.source.width,1/_.texture.source.height);const P=_.texture.source.style;return!(_.fill instanceof FillGradient)&&P.addressMode==="clamp-to-edge"&&(P.addressMode="repeat",P.update()),T&&R.append(tempTextureMatrix$1.copyFrom(T).invert()),R}const shapeBuilders={};extensions.handleByMap(ExtensionType.ShapeBuilder,shapeBuilders);extensions.add(buildRectangle,buildPolygon,buildTriangle,buildCircle,buildEllipse,buildRoundedRectangle);const tempRect$1=new Rectangle,tempTextureMatrix=new Matrix;function buildContextBatches(A,_){const{geometryData:C,batches:T}=_;T.length=0,C.indices.length=0,C.vertices.length=0,C.uvs.length=0;for(let R=0;R<A.instructions.length;R++){const P=A.instructions[R];if(P.action==="texture")addTextureToGeometryData(P.data,T,C);else if(P.action==="fill"||P.action==="stroke"){const I=P.action==="stroke",E=P.data.path.shapePath,B=P.data.style,O=P.data.hole;I&&O&&addShapePathToGeometryData(O.shapePath,B,!0,T,C),O&&(E.shapePrimitives[E.shapePrimitives.length-1].holes=O.shapePath.shapePrimitives),addShapePathToGeometryData(E,B,I,T,C)}}}function addTextureToGeometryData(A,_,C){const T=[],R=shapeBuilders.rectangle,P=tempRect$1;P.x=A.dx,P.y=A.dy,P.width=A.dw,P.height=A.dh;const I=A.transform;if(!R.build(P,T))return;const{vertices:E,uvs:B,indices:O}=C,G=O.length,L=E.length/2;I&&transformVertices(T,I),R.triangulate(T,E,2,L,O,G);const F=A.image,D=F.uvs;B.push(D.x0,D.y0,D.x1,D.y1,D.x3,D.y3,D.x2,D.y2);const q=BigPool.get(BatchableGraphics);q.indexOffset=G,q.indexSize=O.length-G,q.attributeOffset=L,q.attributeSize=E.length/2-L,q.baseColor=A.style,q.alpha=A.alpha,q.texture=F,q.geometryData=C,_.push(q)}function addShapePathToGeometryData(A,_,C,T,R){const{vertices:P,uvs:I,indices:E}=R;A.shapePrimitives.forEach(({shape:B,transform:O,holes:G})=>{const L=[],F=shapeBuilders[B.type];if(!F.build(B,L))return;const D=E.length,q=P.length/2;let U="triangle-list";if(O&&transformVertices(L,O),C){const X=B.closePath??!0,Y=_;Y.pixelLine?(buildPixelLine(L,X,P,E),U="line-list"):buildLine(L,Y,!1,X,P,E)}else if(G){const X=[],Y=L.slice();getHoleArrays(G).forEach(J=>{X.push(Y.length/2),Y.push(...J)}),triangulateWithHoles(Y,X,P,2,q,E,D)}else F.triangulate(L,P,2,q,E,D);const V=I.length/2,W=_.texture;if(W!==Texture.WHITE){const X=generateTextureMatrix(tempTextureMatrix,_,B,O);buildUvs(P,2,q,I,V,2,P.length/2-q,X)}else buildSimpleUvs(I,V,2,P.length/2-q);const z=BigPool.get(BatchableGraphics);z.indexOffset=D,z.indexSize=E.length-D,z.attributeOffset=q,z.attributeSize=P.length/2-q,z.baseColor=_.color,z.alpha=_.alpha,z.texture=W,z.geometryData=R,z.topology=U,T.push(z)})}function getHoleArrays(A){const _=[];for(let C=0;C<A.length;C++){const T=A[C].shape,R=[];shapeBuilders[T.type].build(T,R)&&_.push(R)}return _}class GpuGraphicsContext{constructor(){this.batches=[],this.geometryData={vertices:[],uvs:[],indices:[]}}reset(){this.batches&&this.batches.forEach(_=>{BigPool.return(_)}),this.graphicsData&&BigPool.return(this.graphicsData),this.isBatchable=!1,this.context=null,this.batches.length=0,this.geometryData.indices.length=0,this.geometryData.vertices.length=0,this.geometryData.uvs.length=0,this.graphicsData=null}destroy(){this.reset(),this.batches=null,this.geometryData=null}}class GraphicsContextRenderData{constructor(){this.instructions=new InstructionSet}init(_){const C=_.maxTextures;this.batcher?this.batcher._updateMaxTextures(C):this.batcher=new DefaultBatcher({maxTextures:C}),this.instructions.reset()}get geometry(){return deprecation(v8_3_4,"GraphicsContextRenderData#geometry is deprecated, please use batcher.geometry instead."),this.batcher.geometry}destroy(){this.batcher.destroy(),this.instructions.destroy(),this.batcher=null,this.instructions=null}}const _GraphicsContextSystem=class ie{constructor(_){this._renderer=_,this._managedContexts=new GCManagedHash({renderer:_,type:"resource",name:"graphicsContext"})}init(_){ie.defaultOptions.bezierSmoothness=(_==null?void 0:_.bezierSmoothness)??ie.defaultOptions.bezierSmoothness}getContextRenderData(_){return _._gpuData[this._renderer.uid].graphicsData||this._initContextRenderData(_)}updateGpuContext(_){const C=!!_._gpuData[this._renderer.uid],T=_._gpuData[this._renderer.uid]||this._initContext(_);if(_.dirty||!C){C&&T.reset(),buildContextBatches(_,T);const R=_.batchMode;_.customShader||R==="no-batch"?T.isBatchable=!1:R==="auto"?T.isBatchable=T.geometryData.vertices.length<400:T.isBatchable=!0,_.dirty=!1}return T}getGpuContext(_){return _._gpuData[this._renderer.uid]||this._initContext(_)}_initContextRenderData(_){const C=BigPool.get(GraphicsContextRenderData,{maxTextures:this._renderer.limits.maxBatchableTextures}),T=_._gpuData[this._renderer.uid],{batches:R,geometryData:P}=T;T.graphicsData=C;const I=P.vertices.length,E=P.indices.length;for(let L=0;L<R.length;L++)R[L].applyTransform=!1;const B=C.batcher;B.ensureAttributeBuffer(I),B.ensureIndexBuffer(E),B.begin();for(let L=0;L<R.length;L++){const F=R[L];B.add(F)}B.finish(C.instructions);const O=B.geometry;O.indexBuffer.setDataWithSize(B.indexBuffer,B.indexSize,!0),O.buffers[0].setDataWithSize(B.attributeBuffer.float32View,B.attributeSize,!0);const G=B.batches;for(let L=0;L<G.length;L++){const F=G[L];F.bindGroup=getTextureBatchBindGroup(F.textures.textures,F.textures.count,this._renderer.limits.maxBatchableTextures)}return C}_initContext(_){const C=new GpuGraphicsContext;return C.context=_,_._gpuData[this._renderer.uid]=C,this._managedContexts.add(_),C}destroy(){this._managedContexts.destroy(),this._renderer=null}};_GraphicsContextSystem.extension={type:[ExtensionType.WebGLSystem,ExtensionType.WebGPUSystem],name:"graphicsContext"};_GraphicsContextSystem.defaultOptions={bezierSmoothness:.5};let GraphicsContextSystem=_GraphicsContextSystem;const RECURSION_LIMIT$1=8,FLT_EPSILON$1=11920929e-14,PATH_DISTANCE_EPSILON$1=1;function buildAdaptiveBezier(A,_,C,T,R,P,I,E,B,O){const L=Math.min(.99,Math.max(0,O??GraphicsContextSystem.defaultOptions.bezierSmoothness));let F=(PATH_DISTANCE_EPSILON$1-L)/1;return F*=F,begin$1(_,C,T,R,P,I,E,B,A,F),A}function begin$1(A,_,C,T,R,P,I,E,B,O){recursive$1(A,_,C,T,R,P,I,E,B,O,0),B.push(I,E)}function recursive$1(A,_,C,T,R,P,I,E,B,O,G){if(G>RECURSION_LIMIT$1)return;const L=(A+C)/2,F=(_+T)/2,D=(C+R)/2,q=(T+P)/2,U=(R+I)/2,V=(P+E)/2,W=(L+D)/2,z=(F+q)/2,X=(D+U)/2,Y=(q+V)/2,Q=(W+X)/2,J=(z+Y)/2;if(G>0){let Z=I-A,ut=E-_;const rt=Math.abs((C-I)*ut-(T-E)*Z),et=Math.abs((R-I)*ut-(P-E)*Z);if(rt>FLT_EPSILON$1&&et>FLT_EPSILON$1){if((rt+et)*(rt+et)<=O*(Z*Z+ut*ut)){B.push(Q,J);return}}else if(rt>FLT_EPSILON$1){if(rt*rt<=O*(Z*Z+ut*ut)){B.push(Q,J);return}}else if(et>FLT_EPSILON$1){if(et*et<=O*(Z*Z+ut*ut)){B.push(Q,J);return}}else if(Z=Q-(A+I)/2,ut=J-(_+E)/2,Z*Z+ut*ut<=O){B.push(Q,J);return}}recursive$1(A,_,L,F,W,z,Q,J,B,O,G+1),recursive$1(Q,J,X,Y,U,V,I,E,B,O,G+1)}const RECURSION_LIMIT=8,FLT_EPSILON=11920929e-14,PATH_DISTANCE_EPSILON=1;function buildAdaptiveQuadratic(A,_,C,T,R,P,I,E){const O=Math.min(.99,Math.max(0,E??GraphicsContextSystem.defaultOptions.bezierSmoothness));let G=(PATH_DISTANCE_EPSILON-O)/1;return G*=G,begin(_,C,T,R,P,I,A,G),A}function begin(A,_,C,T,R,P,I,E){recursive(I,A,_,C,T,R,P,E,0),I.push(R,P)}function recursive(A,_,C,T,R,P,I,E,B){if(B>RECURSION_LIMIT)return;const O=(_+T)/2,G=(C+R)/2,L=(T+P)/2,F=(R+I)/2,D=(O+L)/2,q=(G+F)/2;let U=P-_,V=I-C;const W=Math.abs((T-P)*V-(R-I)*U);if(W>FLT_EPSILON){if(W*W<=E*(U*U+V*V)){A.push(D,q);return}}else if(U=D-(_+P)/2,V=q-(C+I)/2,U*U+V*V<=E){A.push(D,q);return}recursive(A,_,C,O,G,D,q,E,B+1),recursive(A,D,q,L,F,P,I,E,B+1)}function buildArc(A,_,C,T,R,P,I,E){let B=Math.abs(R-P);(!I&&R>P||I&&P>R)&&(B=2*Math.PI-B),E||(E=Math.max(6,Math.floor(6*Math.pow(T,1/3)*(B/Math.PI)))),E=Math.max(E,3);let O=B/E,G=R;O*=I?-1:1;for(let L=0;L<E+1;L++){const F=Math.cos(G),D=Math.sin(G),q=_+F*T,U=C+D*T;A.push(q,U),G+=O}}function buildArcTo(A,_,C,T,R,P){const I=A[A.length-2],B=A[A.length-1]-C,O=I-_,G=R-C,L=T-_,F=Math.abs(B*L-O*G);if(F<1e-8||P===0){(A[A.length-2]!==_||A[A.length-1]!==C)&&A.push(_,C);return}const D=B*B+O*O,q=G*G+L*L,U=B*G+O*L,V=P*Math.sqrt(D)/F,W=P*Math.sqrt(q)/F,z=V*U/D,X=W*U/q,Y=V*L+W*O,Q=V*G+W*B,J=O*(W+z),Z=B*(W+z),ut=L*(V+X),rt=G*(V+X),et=Math.atan2(Z-Q,J-Y),tt=Math.atan2(rt-Q,ut-Y);buildArc(A,Y+_,Q+C,P,et,tt,O*G>L*B)}const TAU=Math.PI*2,out={centerX:0,centerY:0,ang1:0,ang2:0},mapToEllipse=({x:A,y:_},C,T,R,P,I,E,B)=>{A*=C,_*=T;const O=R*A-P*_,G=P*A+R*_;return B.x=O+I,B.y=G+E,B};function approxUnitArc(A,_){const C=_===-1.5707963267948966?-.551915024494:1.3333333333333333*Math.tan(_/4),T=_===1.5707963267948966?.551915024494:C,R=Math.cos(A),P=Math.sin(A),I=Math.cos(A+_),E=Math.sin(A+_);return[{x:R-P*T,y:P+R*T},{x:I+E*T,y:E-I*T},{x:I,y:E}]}const vectorAngle=(A,_,C,T)=>{const R=A*T-_*C<0?-1:1;let P=A*C+_*T;return P>1&&(P=1),P<-1&&(P=-1),R*Math.acos(P)},getArcCenter=(A,_,C,T,R,P,I,E,B,O,G,L,F)=>{const D=Math.pow(R,2),q=Math.pow(P,2),U=Math.pow(G,2),V=Math.pow(L,2);let W=D*q-D*V-q*U;W<0&&(W=0),W/=D*V+q*U,W=Math.sqrt(W)*(I===E?-1:1);const z=W*R/P*L,X=W*-P/R*G,Y=O*z-B*X+(A+C)/2,Q=B*z+O*X+(_+T)/2,J=(G-z)/R,Z=(L-X)/P,ut=(-G-z)/R,rt=(-L-X)/P,et=vectorAngle(1,0,J,Z);let tt=vectorAngle(J,Z,ut,rt);E===0&&tt>0&&(tt-=TAU),E===1&&tt<0&&(tt+=TAU),F.centerX=Y,F.centerY=Q,F.ang1=et,F.ang2=tt};function buildArcToSvg(A,_,C,T,R,P,I,E=0,B=0,O=0){if(P===0||I===0)return;const G=Math.sin(E*TAU/360),L=Math.cos(E*TAU/360),F=L*(_-T)/2+G*(C-R)/2,D=-G*(_-T)/2+L*(C-R)/2;if(F===0&&D===0)return;P=Math.abs(P),I=Math.abs(I);const q=Math.pow(F,2)/Math.pow(P,2)+Math.pow(D,2)/Math.pow(I,2);q>1&&(P*=Math.sqrt(q),I*=Math.sqrt(q)),getArcCenter(_,C,T,R,P,I,B,O,G,L,F,D,out);let{ang1:U,ang2:V}=out;const{centerX:W,centerY:z}=out;let X=Math.abs(V)/(TAU/4);Math.abs(1-X)<1e-7&&(X=1);const Y=Math.max(Math.ceil(X),1);V/=Y;let Q=A[A.length-2],J=A[A.length-1];const Z={x:0,y:0};for(let ut=0;ut<Y;ut++){const rt=approxUnitArc(U,V),{x:et,y:tt}=mapToEllipse(rt[0],P,I,L,G,W,z,Z),{x:lt,y:ht}=mapToEllipse(rt[1],P,I,L,G,W,z,Z),{x:it,y:mt}=mapToEllipse(rt[2],P,I,L,G,W,z,Z);buildAdaptiveBezier(A,Q,J,et,tt,lt,ht,it,mt),Q=it,J=mt,U+=V}}function roundedShapeArc(A,_,C){const T=(I,E)=>{const B=E.x-I.x,O=E.y-I.y,G=Math.sqrt(B*B+O*O),L=B/G,F=O/G;return{len:G,nx:L,ny:F}},R=(I,E)=>{I===0?A.moveTo(E.x,E.y):A.lineTo(E.x,E.y)};let P=_[_.length-1];for(let I=0;I<_.length;I++){const E=_[I%_.length],B=E.radius??C;if(B<=0){R(I,E),P=E;continue}const O=_[(I+1)%_.length],G=T(E,P),L=T(E,O);if(G.len<1e-4||L.len<1e-4){R(I,E),P=E;continue}let F=Math.asin(G.nx*L.ny-G.ny*L.nx),D=1,q=!1;G.nx*L.nx-G.ny*-L.ny<0?F<0?F=Math.PI+F:(F=Math.PI-F,D=-1,q=!0):F>0&&(D=-1,q=!0);const U=F/2;let V,W=Math.abs(Math.cos(U)*B/Math.sin(U));W>Math.min(G.len/2,L.len/2)?(W=Math.min(G.len/2,L.len/2),V=Math.abs(W*Math.sin(U)/Math.cos(U))):V=B;const z=E.x+L.nx*W+-L.ny*V*D,X=E.y+L.ny*W+L.nx*V*D,Y=Math.atan2(G.ny,G.nx)+Math.PI/2*D,Q=Math.atan2(L.ny,L.nx)-Math.PI/2*D;I===0&&A.moveTo(z+Math.cos(Y)*V,X+Math.sin(Y)*V),A.arc(z,X,V,Y,Q,q),P=E}}function roundedShapeQuadraticCurve(A,_,C,T){const R=(E,B)=>Math.sqrt((E.x-B.x)**2+(E.y-B.y)**2),P=(E,B,O)=>({x:E.x+(B.x-E.x)*O,y:E.y+(B.y-E.y)*O}),I=_.length;for(let E=0;E<I;E++){const B=_[(E+1)%I],O=B.radius??C;if(O<=0){E===0?A.moveTo(B.x,B.y):A.lineTo(B.x,B.y);continue}const G=_[E],L=_[(E+2)%I],F=R(G,B);let D;if(F<1e-4)D=B;else{const V=Math.min(F/2,O);D=P(B,G,V/F)}const q=R(L,B);let U;if(q<1e-4)U=B;else{const V=Math.min(q/2,O);U=P(B,L,V/q)}E===0?A.moveTo(D.x,D.y):A.lineTo(D.x,D.y),A.quadraticCurveTo(B.x,B.y,U.x,U.y,T)}}const tempRectangle=new Rectangle;class ShapePath{constructor(_){this.shapePrimitives=[],this._currentPoly=null,this._bounds=new Bounds,this._graphicsPath2D=_,this.signed=_.checkForHoles}moveTo(_,C){return this.startPoly(_,C),this}lineTo(_,C){this._ensurePoly();const T=this._currentPoly.points,R=T[T.length-2],P=T[T.length-1];return(R!==_||P!==C)&&T.push(_,C),this}arc(_,C,T,R,P,I){this._ensurePoly(!1);const E=this._currentPoly.points;return buildArc(E,_,C,T,R,P,I),this}arcTo(_,C,T,R,P){this._ensurePoly();const I=this._currentPoly.points;return buildArcTo(I,_,C,T,R,P),this}arcToSvg(_,C,T,R,P,I,E){const B=this._currentPoly.points;return buildArcToSvg(B,this._currentPoly.lastX,this._currentPoly.lastY,I,E,_,C,T,R,P),this}bezierCurveTo(_,C,T,R,P,I,E){this._ensurePoly();const B=this._currentPoly;return buildAdaptiveBezier(this._currentPoly.points,B.lastX,B.lastY,_,C,T,R,P,I,E),this}quadraticCurveTo(_,C,T,R,P){this._ensurePoly();const I=this._currentPoly;return buildAdaptiveQuadratic(this._currentPoly.points,I.lastX,I.lastY,_,C,T,R,P),this}closePath(){return this.endPoly(!0),this}addPath(_,C){this.endPoly(),C&&!C.isIdentity()&&(_=_.clone(!0),_.transform(C));const T=this.shapePrimitives,R=T.length;for(let P=0;P<_.instructions.length;P++){const I=_.instructions[P];this[I.action](...I.data)}if(_.checkForHoles&&T.length-R>1){let P=null;for(let I=R;I<T.length;I++){const E=T[I];if(E.shape.type==="polygon"){const B=E.shape,O=P==null?void 0:P.shape;O&&O.containsPolygon(B)?(P.holes||(P.holes=[]),P.holes.push(E),T.copyWithin(I,I+1),T.length--,I--):P=E}}}return this}finish(_=!1){this.endPoly(_)}rect(_,C,T,R,P){return this.drawShape(new Rectangle(_,C,T,R),P),this}circle(_,C,T,R){return this.drawShape(new Circle(_,C,T),R),this}poly(_,C,T){const R=new Polygon(_);return R.closePath=C,this.drawShape(R,T),this}regularPoly(_,C,T,R,P=0,I){R=Math.max(R|0,3);const E=-1*Math.PI/2+P,B=Math.PI*2/R,O=[];for(let G=0;G<R;G++){const L=E-G*B;O.push(_+T*Math.cos(L),C+T*Math.sin(L))}return this.poly(O,!0,I),this}roundPoly(_,C,T,R,P,I=0,E){if(R=Math.max(R|0,3),P<=0)return this.regularPoly(_,C,T,R,I);const B=T*Math.sin(Math.PI/R)-.001;P=Math.min(P,B);const O=-1*Math.PI/2+I,G=Math.PI*2/R,L=(R-2)*Math.PI/R/2;for(let F=0;F<R;F++){const D=F*G+O,q=_+T*Math.cos(D),U=C+T*Math.sin(D),V=D+Math.PI+L,W=D-Math.PI-L,z=q+P*Math.cos(V),X=U+P*Math.sin(V),Y=q+P*Math.cos(W),Q=U+P*Math.sin(W);F===0?this.moveTo(z,X):this.lineTo(z,X),this.quadraticCurveTo(q,U,Y,Q,E)}return this.closePath()}roundShape(_,C,T=!1,R){return _.length<3?this:(T?roundedShapeQuadraticCurve(this,_,C,R):roundedShapeArc(this,_,C),this.closePath())}filletRect(_,C,T,R,P){if(P===0)return this.rect(_,C,T,R);const I=Math.min(T,R)/2,E=Math.min(I,Math.max(-I,P)),B=_+T,O=C+R,G=E<0?-E:0,L=Math.abs(E);return this.moveTo(_,C+L).arcTo(_+G,C+G,_+L,C,L).lineTo(B-L,C).arcTo(B-G,C+G,B,C+L,L).lineTo(B,O-L).arcTo(B-G,O-G,_+T-L,O,L).lineTo(_+L,O).arcTo(_+G,O-G,_,O-L,L).closePath()}chamferRect(_,C,T,R,P,I){if(P<=0)return this.rect(_,C,T,R);const E=Math.min(P,Math.min(T,R)/2),B=_+T,O=C+R,G=[_+E,C,B-E,C,B,C+E,B,O-E,B-E,O,_+E,O,_,O-E,_,C+E];for(let L=G.length-1;L>=2;L-=2)G[L]===G[L-2]&&G[L-1]===G[L-3]&&G.splice(L-1,2);return this.poly(G,!0,I)}ellipse(_,C,T,R,P){return this.drawShape(new Ellipse(_,C,T,R),P),this}roundRect(_,C,T,R,P,I){return this.drawShape(new RoundedRectangle(_,C,T,R,P),I),this}drawShape(_,C){return this.endPoly(),this.shapePrimitives.push({shape:_,transform:C}),this}startPoly(_,C){let T=this._currentPoly;return T&&this.endPoly(),T=new Polygon,T.points.push(_,C),this._currentPoly=T,this}endPoly(_=!1){const C=this._currentPoly;return C&&C.points.length>2&&(C.closePath=_,this.shapePrimitives.push({shape:C})),this._currentPoly=null,this}_ensurePoly(_=!0){if(!this._currentPoly&&(this._currentPoly=new Polygon,_)){const C=this.shapePrimitives[this.shapePrimitives.length-1];if(C){let T=C.shape.x,R=C.shape.y;if(C.transform&&!C.transform.isIdentity()){const P=C.transform,I=T;T=P.a*T+P.c*R+P.tx,R=P.b*I+P.d*R+P.ty}this._currentPoly.points.push(T,R)}else this._currentPoly.points.push(0,0)}}buildPath(){const _=this._graphicsPath2D;this.shapePrimitives.length=0,this._currentPoly=null;for(let C=0;C<_.instructions.length;C++){const T=_.instructions[C];this[T.action](...T.data)}this.finish()}get bounds(){const _=this._bounds;_.clear();const C=this.shapePrimitives;for(let T=0;T<C.length;T++){const R=C[T],P=R.shape.getBounds(tempRectangle);R.transform?_.addRect(P,R.transform):_.addRect(P)}return _}}class GraphicsPath{constructor(_,C=!1){this.instructions=[],this.uid=uid("graphicsPath"),this._dirty=!0,this.checkForHoles=C,typeof _=="string"?parseSVGPath(_,this):this.instructions=(_==null?void 0:_.slice())??[]}get shapePath(){return this._shapePath||(this._shapePath=new ShapePath(this)),this._dirty&&(this._dirty=!1,this._shapePath.buildPath()),this._shapePath}addPath(_,C){return _=_.clone(),this.instructions.push({action:"addPath",data:[_,C]}),this._dirty=!0,this}arc(..._){return this.instructions.push({action:"arc",data:_}),this._dirty=!0,this}arcTo(..._){return this.instructions.push({action:"arcTo",data:_}),this._dirty=!0,this}arcToSvg(..._){return this.instructions.push({action:"arcToSvg",data:_}),this._dirty=!0,this}bezierCurveTo(..._){return this.instructions.push({action:"bezierCurveTo",data:_}),this._dirty=!0,this}bezierCurveToShort(_,C,T,R,P){const I=this.instructions[this.instructions.length-1],E=this.getLastPoint(Point.shared);let B=0,O=0;if(!I||I.action!=="bezierCurveTo")B=E.x,O=E.y;else{B=I.data[2],O=I.data[3];const G=E.x,L=E.y;B=G+(G-B),O=L+(L-O)}return this.instructions.push({action:"bezierCurveTo",data:[B,O,_,C,T,R,P]}),this._dirty=!0,this}closePath(){return this.instructions.push({action:"closePath",data:[]}),this._dirty=!0,this}ellipse(..._){return this.instructions.push({action:"ellipse",data:_}),this._dirty=!0,this}lineTo(..._){return this.instructions.push({action:"lineTo",data:_}),this._dirty=!0,this}moveTo(..._){return this.instructions.push({action:"moveTo",data:_}),this}quadraticCurveTo(..._){return this.instructions.push({action:"quadraticCurveTo",data:_}),this._dirty=!0,this}quadraticCurveToShort(_,C,T){const R=this.instructions[this.instructions.length-1],P=this.getLastPoint(Point.shared);let I=0,E=0;if(!R||R.action!=="quadraticCurveTo")I=P.x,E=P.y;else{I=R.data[0],E=R.data[1];const B=P.x,O=P.y;I=B+(B-I),E=O+(O-E)}return this.instructions.push({action:"quadraticCurveTo",data:[I,E,_,C,T]}),this._dirty=!0,this}rect(_,C,T,R,P){return this.instructions.push({action:"rect",data:[_,C,T,R,P]}),this._dirty=!0,this}circle(_,C,T,R){return this.instructions.push({action:"circle",data:[_,C,T,R]}),this._dirty=!0,this}roundRect(..._){return this.instructions.push({action:"roundRect",data:_}),this._dirty=!0,this}poly(..._){return this.instructions.push({action:"poly",data:_}),this._dirty=!0,this}regularPoly(..._){return this.instructions.push({action:"regularPoly",data:_}),this._dirty=!0,this}roundPoly(..._){return this.instructions.push({action:"roundPoly",data:_}),this._dirty=!0,this}roundShape(..._){return this.instructions.push({action:"roundShape",data:_}),this._dirty=!0,this}filletRect(..._){return this.instructions.push({action:"filletRect",data:_}),this._dirty=!0,this}chamferRect(..._){return this.instructions.push({action:"chamferRect",data:_}),this._dirty=!0,this}star(_,C,T,R,P,I,E){P||(P=R/2);const B=-1*Math.PI/2+I,O=T*2,G=Math.PI*2/O,L=[];for(let F=0;F<O;F++){const D=F%2?P:R,q=F*G+B;L.push(_+D*Math.cos(q),C+D*Math.sin(q))}return this.poly(L,!0,E),this}clone(_=!1){const C=new GraphicsPath;if(C.checkForHoles=this.checkForHoles,!_)C.instructions=this.instructions.slice();else for(let T=0;T<this.instructions.length;T++){const R=this.instructions[T];C.instructions.push({action:R.action,data:R.data.slice()})}return C}clear(){return this.instructions.length=0,this._dirty=!0,this}transform(_){if(_.isIdentity())return this;const C=_.a,T=_.b,R=_.c,P=_.d,I=_.tx,E=_.ty;let B=0,O=0,G=0,L=0,F=0,D=0,q=0,U=0;for(let V=0;V<this.instructions.length;V++){const W=this.instructions[V],z=W.data;switch(W.action){case"moveTo":case"lineTo":B=z[0],O=z[1],z[0]=C*B+R*O+I,z[1]=T*B+P*O+E;break;case"bezierCurveTo":G=z[0],L=z[1],F=z[2],D=z[3],B=z[4],O=z[5],z[0]=C*G+R*L+I,z[1]=T*G+P*L+E,z[2]=C*F+R*D+I,z[3]=T*F+P*D+E,z[4]=C*B+R*O+I,z[5]=T*B+P*O+E;break;case"quadraticCurveTo":G=z[0],L=z[1],B=z[2],O=z[3],z[0]=C*G+R*L+I,z[1]=T*G+P*L+E,z[2]=C*B+R*O+I,z[3]=T*B+P*O+E;break;case"arcToSvg":B=z[5],O=z[6],q=z[0],U=z[1],z[0]=C*q+R*U,z[1]=T*q+P*U,z[5]=C*B+R*O+I,z[6]=T*B+P*O+E;break;case"circle":z[4]=adjustTransform(z[3],_);break;case"rect":z[4]=adjustTransform(z[4],_);break;case"ellipse":z[8]=adjustTransform(z[8],_);break;case"roundRect":z[5]=adjustTransform(z[5],_);break;case"addPath":z[0].transform(_);break;case"poly":z[2]=adjustTransform(z[2],_);break;case"regularPoly":case"chamferRect":z[5]=adjustTransform(z[5],_);break;case"closePath":break;default:warn("unknown transform action",W.action);break}}return this._dirty=!0,this}get bounds(){return this.shapePath.bounds}getLastPoint(_){let C=this.instructions.length-1,T=this.instructions[C];if(!T)return _.x=0,_.y=0,_;for(;T.action==="closePath";){if(C--,C<0)return _.x=0,_.y=0,_;T=this.instructions[C]}switch(T.action){case"moveTo":case"lineTo":_.x=T.data[0],_.y=T.data[1];break;case"quadraticCurveTo":_.x=T.data[2],_.y=T.data[3];break;case"bezierCurveTo":_.x=T.data[4],_.y=T.data[5];break;case"arc":case"arcToSvg":_.x=T.data[5],_.y=T.data[6];break;case"addPath":T.data[0].getLastPoint(_);break}return _}}function adjustTransform(A,_){return A?A.prepend(_):_.clone()}function parseSVGFloatAttribute(A,_,C){const T=A.getAttribute(_);return T?Number(T):C}function parseSVGDefinitions(A,_){const C=A.querySelectorAll("defs");for(let T=0;T<C.length;T++){const R=C[T];for(let P=0;P<R.children.length;P++){const I=R.children[P];switch(I.nodeName.toLowerCase()){case"lineargradient":_.defs[I.id]=parseLinearGradient(I);break;case"radialgradient":_.defs[I.id]=parseRadialGradient();break}}}}function parseLinearGradient(A){const _=parseSVGFloatAttribute(A,"x1",0),C=parseSVGFloatAttribute(A,"y1",0),T=parseSVGFloatAttribute(A,"x2",1),R=parseSVGFloatAttribute(A,"y2",0),P=A.getAttribute("gradientUnits")||"objectBoundingBox",I=new FillGradient(_,C,T,R,P==="objectBoundingBox"?"local":"global");for(let E=0;E<A.children.length;E++){const B=A.children[E],O=parseSVGFloatAttribute(B,"offset",0),G=Color.shared.setValue(B.getAttribute("stop-color")).toNumber();I.addColorStop(O,G)}return I}function parseRadialGradient(A){return warn("[SVG Parser] Radial gradients are not yet supported"),new FillGradient(0,0,1,0)}function extractSvgUrlId(A){const _=A.match(/url\s*\(\s*['"]?\s*#([^'"\s)]+)\s*['"]?\s*\)/i);return _?_[1]:""}const styleAttributes={fill:{type:"paint",default:0},"fill-opacity":{type:"number",default:1},stroke:{type:"paint",default:0},"stroke-width":{type:"number",default:1},"stroke-opacity":{type:"number",default:1},"stroke-linecap":{type:"string",default:"butt"},"stroke-linejoin":{type:"string",default:"miter"},"stroke-miterlimit":{type:"number",default:10},"stroke-dasharray":{type:"string",default:"none"},"stroke-dashoffset":{type:"number",default:0},opacity:{type:"number",default:1}};function parseSVGStyle(A,_){const C=A.getAttribute("style"),T={},R={},P={strokeStyle:T,fillStyle:R,useFill:!1,useStroke:!1};for(const I in styleAttributes){const E=A.getAttribute(I);E&&parseAttribute(_,P,I,E.trim())}if(C){const I=C.split(";");for(let E=0;E<I.length;E++){const B=I[E].trim(),[O,G]=B.split(":");styleAttributes[O]&&parseAttribute(_,P,O,G.trim())}}return{strokeStyle:P.useStroke?T:null,fillStyle:P.useFill?R:null,useFill:P.useFill,useStroke:P.useStroke}}function parseAttribute(A,_,C,T){switch(C){case"stroke":if(T!=="none"){if(T.startsWith("url(")){const R=extractSvgUrlId(T);_.strokeStyle.fill=A.defs[R]}else _.strokeStyle.color=Color.shared.setValue(T).toNumber();_.useStroke=!0}break;case"stroke-width":_.strokeStyle.width=Number(T);break;case"fill":if(T!=="none"){if(T.startsWith("url(")){const R=extractSvgUrlId(T);_.fillStyle.fill=A.defs[R]}else _.fillStyle.color=Color.shared.setValue(T).toNumber();_.useFill=!0}break;case"fill-opacity":_.fillStyle.alpha=Number(T);break;case"stroke-opacity":_.strokeStyle.alpha=Number(T);break;case"opacity":_.fillStyle.alpha=Number(T),_.strokeStyle.alpha=Number(T);break}}function checkForNestedPattern(A){if(A.length<=2)return!0;const _=A.map(E=>E.area).sort((E,B)=>B-E),[C,T]=_,R=_[_.length-1],P=C/T,I=T/R;return!(P>3&&I<2)}function extractSubpaths(A){return A.split(/(?=[Mm])/).filter(T=>T.trim().length>0)}function calculatePathArea(A){const _=A.match(/[-+]?[0-9]*\.?[0-9]+/g);if(!_||_.length<4)return 0;const C=_.map(Number),T=[],R=[];for(let G=0;G<C.length;G+=2)G+1<C.length&&(T.push(C[G]),R.push(C[G+1]));if(T.length===0||R.length===0)return 0;const P=Math.min(...T),I=Math.max(...T),E=Math.min(...R),B=Math.max(...R);return(I-P)*(B-E)}function appendSVGPath(A,_){const C=new GraphicsPath(A,!1);for(const T of C.instructions)_.instructions.push(T)}function SVGParser(A,_){if(typeof A=="string"){const I=document.createElement("div");I.innerHTML=A.trim(),A=I.querySelector("svg")}const C={context:_,defs:{},path:new GraphicsPath};parseSVGDefinitions(A,C);const T=A.children,{fillStyle:R,strokeStyle:P}=parseSVGStyle(A,C);for(let I=0;I<T.length;I++){const E=T[I];E.nodeName.toLowerCase()!=="defs"&&renderChildren(E,C,R,P)}return _}function renderChildren(A,_,C,T){const R=A.children,{fillStyle:P,strokeStyle:I}=parseSVGStyle(A,_);P&&C?C={...C,...P}:P&&(C=P),I&&T?T={...T,...I}:I&&(T=I);const E=!C&&!T;E&&(C={color:0});let B,O,G,L,F,D,q,U,V,W,z,X,Y,Q,J,Z,ut;switch(A.nodeName.toLowerCase()){case"path":{Q=A.getAttribute("d");const rt=A.getAttribute("fill-rule"),et=extractSubpaths(Q),tt=rt==="evenodd",lt=et.length>1;if(tt&&lt){const it=et.map(nt=>({path:nt,area:calculatePathArea(nt)}));if(it.sort((nt,st)=>st.area-nt.area),et.length>3||!checkForNestedPattern(it))for(let nt=0;nt<it.length;nt++){const st=it[nt],xt=nt===0;_.context.beginPath();const dt=new GraphicsPath(void 0,!0);appendSVGPath(st.path,dt),_.context.path(dt),xt?(C&&_.context.fill(C),T&&_.context.stroke(T)):_.context.cut()}else for(let nt=0;nt<it.length;nt++){const st=it[nt],xt=nt%2===1;_.context.beginPath();const dt=new GraphicsPath(void 0,!0);appendSVGPath(st.path,dt),_.context.path(dt),xt?_.context.cut():(C&&_.context.fill(C),T&&_.context.stroke(T))}}else{const it=rt?rt==="evenodd":!0;J=new GraphicsPath(Q,it),_.context.path(J),C&&_.context.fill(C),T&&_.context.stroke(T)}break}case"circle":q=parseSVGFloatAttribute(A,"cx",0),U=parseSVGFloatAttribute(A,"cy",0),V=parseSVGFloatAttribute(A,"r",0),_.context.ellipse(q,U,V,V),C&&_.context.fill(C),T&&_.context.stroke(T);break;case"rect":B=parseSVGFloatAttribute(A,"x",0),O=parseSVGFloatAttribute(A,"y",0),Z=parseSVGFloatAttribute(A,"width",0),ut=parseSVGFloatAttribute(A,"height",0),W=parseSVGFloatAttribute(A,"rx",0),z=parseSVGFloatAttribute(A,"ry",0),W||z?_.context.roundRect(B,O,Z,ut,W||z):_.context.rect(B,O,Z,ut),C&&_.context.fill(C),T&&_.context.stroke(T);break;case"ellipse":q=parseSVGFloatAttribute(A,"cx",0),U=parseSVGFloatAttribute(A,"cy",0),W=parseSVGFloatAttribute(A,"rx",0),z=parseSVGFloatAttribute(A,"ry",0),_.context.beginPath(),_.context.ellipse(q,U,W,z),C&&_.context.fill(C),T&&_.context.stroke(T);break;case"line":G=parseSVGFloatAttribute(A,"x1",0),L=parseSVGFloatAttribute(A,"y1",0),F=parseSVGFloatAttribute(A,"x2",0),D=parseSVGFloatAttribute(A,"y2",0),_.context.beginPath(),_.context.moveTo(G,L),_.context.lineTo(F,D),T&&_.context.stroke(T);break;case"polygon":Y=A.getAttribute("points"),X=Y.match(/-?\d+/g).map(rt=>parseInt(rt,10)),_.context.poly(X,!0),C&&_.context.fill(C),T&&_.context.stroke(T);break;case"polyline":Y=A.getAttribute("points"),X=Y.match(/-?\d+/g).map(rt=>parseInt(rt,10)),_.context.poly(X,!1),T&&_.context.stroke(T);break;case"g":case"svg":break;default:{warn(`[SVG parser] <${A.nodeName}> elements unsupported`);break}}E&&(C=null);for(let rt=0;rt<R.length;rt++)renderChildren(R[rt],_,C,T)}function isFillPatternOptions(A){return A.texture!==void 0}const repetitionMap={repeat:{addressModeU:"repeat",addressModeV:"repeat"},"repeat-x":{addressModeU:"repeat",addressModeV:"clamp-to-edge"},"repeat-y":{addressModeU:"clamp-to-edge",addressModeV:"repeat"},"no-repeat":{addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}};class FillPattern{constructor(_,C){this.uid=uid("fillPattern"),this._tick=0,this.transform=new Matrix;const T=isFillPatternOptions(_)?_:{texture:_,repetition:C};this.texture=T.texture,this.textureSpace=T.textureSpace??"global";const R=T.repetition;R&&(this.texture.source.style.addressModeU=repetitionMap[R].addressModeU,this.texture.source.style.addressModeV=repetitionMap[R].addressModeV)}setTransform(_){if(_){if(this.transform.equals(_))return;this.transform.copyFrom(_)}else{if(this.transform.isIdentity())return;this.transform.identity()}this._tick++}get texture(){return this._texture}set texture(_){this._texture!==_&&(this._texture=_,this._tick++)}get styleKey(){return`fill-pattern-${this.uid}-${this._tick}`}destroy(){this.texture.destroy(!0),this.texture=null}}function isColorLike(A){return Color.isColorLike(A)}function isFillPattern(A){return A instanceof FillPattern}function isFillGradient(A){return A instanceof FillGradient}function isTexture(A){return A instanceof Texture}function handleColorLike(A,_,C){const T=Color.shared.setValue(_??0);return A.color=T.toNumber(),A.alpha=T.alpha===1?C.alpha:T.alpha,A.texture=Texture.WHITE,{...C,...A}}function handleTexture(A,_,C){return A.texture=_,{...C,...A}}function handleFillPattern(A,_,C){return A.fill=_,A.color=16777215,A.texture=_.texture,A.matrix=_.transform,A.textureSpace=_.textureSpace,{...C,...A}}function handleFillGradient(A,_,C){return _.buildGradient(),A.fill=_,A.color=16777215,A.texture=_.texture,A.matrix=_.transform,A.textureSpace=_.textureSpace,{...C,...A}}function handleFillObject(A,_){const C={..._,...A},T=Color.shared.setValue(C.color);return C.alpha*=T.alpha,C.color=T.toNumber(),C}function toFillStyle(A,_){if(A==null)return null;const C={},T=A;return isColorLike(A)?handleColorLike(C,A,_):isTexture(A)?handleTexture(C,A,_):isFillPattern(A)?handleFillPattern(C,A,_):isFillGradient(A)?handleFillGradient(C,A,_):T.fill&&isFillPattern(T.fill)?handleFillPattern(T,T.fill,_):T.fill&&isFillGradient(T.fill)?handleFillGradient(T,T.fill,_):handleFillObject(T,_)}function toStrokeStyle(A,_){const{width:C,alignment:T,miterLimit:R,cap:P,join:I,pixelLine:E,...B}=_,O=toFillStyle(A,B);return O?{width:C,alignment:T,miterLimit:R,cap:P,join:I,pixelLine:E,...O}:null}function getMaxMiterRatio(A,_){let C=1;const T=A.shapePath.shapePrimitives;for(let R=0;R<T.length;R++){const P=T[R].shape;if(P.type!=="polygon")continue;const I=P.points,E=I.length;if(E<6)continue;const B=P.closePath;for(let O=0;O<E;O+=2){if(!B&&(O===0||O===E-2))continue;const G=(O-2+E)%E,L=(O+2)%E,F=I[G],D=I[G+1],q=I[O],U=I[O+1],V=I[L],W=I[L+1],z=F-q,X=D-U,Y=V-q,Q=W-U,J=z*z+X*X,Z=Y*Y+Q*Q;if(J<1e-12||Z<1e-12)continue;let et=(z*Y+X*Q)/Math.sqrt(J*Z);et<-1?et=-1:et>1&&(et=1);const tt=Math.sqrt((1-et)*.5);if(tt<1e-6)continue;const lt=Math.min(1/tt,_);lt>C&&(C=lt)}}return C}const tmpPoint=new Point,tempMatrix=new Matrix,_GraphicsContext=class Vt extends EventEmitter{constructor(){super(...arguments),this._gpuData=Object.create(null),this.autoGarbageCollect=!0,this._gcLastUsed=-1,this.uid=uid("graphicsContext"),this.dirty=!0,this.batchMode="auto",this.instructions=[],this.destroyed=!1,this._activePath=new GraphicsPath,this._transform=new Matrix,this._fillStyle={...Vt.defaultFillStyle},this._strokeStyle={...Vt.defaultStrokeStyle},this._stateStack=[],this._tick=0,this._bounds=new Bounds,this._boundsDirty=!0}clone(){const _=new Vt;return _.batchMode=this.batchMode,_.instructions=this.instructions.slice(),_._activePath=this._activePath.clone(),_._transform=this._transform.clone(),_._fillStyle={...this._fillStyle},_._strokeStyle={...this._strokeStyle},_._stateStack=this._stateStack.slice(),_._bounds=this._bounds.clone(),_._boundsDirty=!0,_}get fillStyle(){return this._fillStyle}set fillStyle(_){this._fillStyle=toFillStyle(_,Vt.defaultFillStyle)}get strokeStyle(){return this._strokeStyle}set strokeStyle(_){this._strokeStyle=toStrokeStyle(_,Vt.defaultStrokeStyle)}setFillStyle(_){return this._fillStyle=toFillStyle(_,Vt.defaultFillStyle),this}setStrokeStyle(_){return this._strokeStyle=toFillStyle(_,Vt.defaultStrokeStyle),this}texture(_,C,T,R,P,I){return this.instructions.push({action:"texture",data:{image:_,dx:T||0,dy:R||0,dw:P||_.frame.width,dh:I||_.frame.height,transform:this._transform.clone(),alpha:this._fillStyle.alpha,style:C||C===0?Color.shared.setValue(C).toNumber():16777215}}),this.onUpdate(),this}beginPath(){return this._activePath=new GraphicsPath,this}fill(_,C){let T;const R=this.instructions[this.instructions.length-1];return this._tick===0&&(R==null?void 0:R.action)==="stroke"?T=R.data.path:T=this._activePath.clone(),T?(_!=null&&(C!==void 0&&typeof _=="number"&&(deprecation(v8_0_0,"GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead"),_={color:_,alpha:C}),this._fillStyle=toFillStyle(_,Vt.defaultFillStyle)),this.instructions.push({action:"fill",data:{style:this.fillStyle,path:T}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}_initNextPathLocation(){const{x:_,y:C}=this._activePath.getLastPoint(Point.shared);this._activePath.clear(),this._activePath.moveTo(_,C)}stroke(_){let C;const T=this.instructions[this.instructions.length-1];return this._tick===0&&(T==null?void 0:T.action)==="fill"?C=T.data.path:C=this._activePath.clone(),C?(_!=null&&(this._strokeStyle=toStrokeStyle(_,Vt.defaultStrokeStyle)),this.instructions.push({action:"stroke",data:{style:this.strokeStyle,path:C}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}cut(){for(let _=0;_<2;_++){const C=this.instructions[this.instructions.length-1-_],T=this._activePath.clone();if(C&&(C.action==="stroke"||C.action==="fill"))if(C.data.hole)C.data.hole.addPath(T);else{C.data.hole=T;break}}return this._initNextPathLocation(),this}arc(_,C,T,R,P,I){this._tick++;const E=this._transform;return this._activePath.arc(E.a*_+E.c*C+E.tx,E.b*_+E.d*C+E.ty,T,R,P,I),this}arcTo(_,C,T,R,P){this._tick++;const I=this._transform;return this._activePath.arcTo(I.a*_+I.c*C+I.tx,I.b*_+I.d*C+I.ty,I.a*T+I.c*R+I.tx,I.b*T+I.d*R+I.ty,P),this}arcToSvg(_,C,T,R,P,I,E){this._tick++;const B=this._transform;return this._activePath.arcToSvg(_,C,T,R,P,B.a*I+B.c*E+B.tx,B.b*I+B.d*E+B.ty),this}bezierCurveTo(_,C,T,R,P,I,E){this._tick++;const B=this._transform;return this._activePath.bezierCurveTo(B.a*_+B.c*C+B.tx,B.b*_+B.d*C+B.ty,B.a*T+B.c*R+B.tx,B.b*T+B.d*R+B.ty,B.a*P+B.c*I+B.tx,B.b*P+B.d*I+B.ty,E),this}closePath(){var _;return this._tick++,(_=this._activePath)==null||_.closePath(),this}ellipse(_,C,T,R){return this._tick++,this._activePath.ellipse(_,C,T,R,this._transform.clone()),this}circle(_,C,T){return this._tick++,this._activePath.circle(_,C,T,this._transform.clone()),this}path(_){return this._tick++,this._activePath.addPath(_,this._transform.clone()),this}lineTo(_,C){this._tick++;const T=this._transform;return this._activePath.lineTo(T.a*_+T.c*C+T.tx,T.b*_+T.d*C+T.ty),this}moveTo(_,C){this._tick++;const T=this._transform,R=this._activePath.instructions,P=T.a*_+T.c*C+T.tx,I=T.b*_+T.d*C+T.ty;return R.length===1&&R[0].action==="moveTo"?(R[0].data[0]=P,R[0].data[1]=I,this):(this._activePath.moveTo(P,I),this)}quadraticCurveTo(_,C,T,R,P){this._tick++;const I=this._transform;return this._activePath.quadraticCurveTo(I.a*_+I.c*C+I.tx,I.b*_+I.d*C+I.ty,I.a*T+I.c*R+I.tx,I.b*T+I.d*R+I.ty,P),this}rect(_,C,T,R){return this._tick++,this._activePath.rect(_,C,T,R,this._transform.clone()),this}roundRect(_,C,T,R,P){return this._tick++,this._activePath.roundRect(_,C,T,R,P,this._transform.clone()),this}poly(_,C){return this._tick++,this._activePath.poly(_,C,this._transform.clone()),this}regularPoly(_,C,T,R,P=0,I){return this._tick++,this._activePath.regularPoly(_,C,T,R,P,I),this}roundPoly(_,C,T,R,P,I){return this._tick++,this._activePath.roundPoly(_,C,T,R,P,I),this}roundShape(_,C,T,R){return this._tick++,this._activePath.roundShape(_,C,T,R),this}filletRect(_,C,T,R,P){return this._tick++,this._activePath.filletRect(_,C,T,R,P),this}chamferRect(_,C,T,R,P,I){return this._tick++,this._activePath.chamferRect(_,C,T,R,P,I),this}star(_,C,T,R,P=0,I=0){return this._tick++,this._activePath.star(_,C,T,R,P,I,this._transform.clone()),this}svg(_){return this._tick++,SVGParser(_,this),this}restore(){const _=this._stateStack.pop();return _&&(this._transform=_.transform,this._fillStyle=_.fillStyle,this._strokeStyle=_.strokeStyle),this}save(){return this._stateStack.push({transform:this._transform.clone(),fillStyle:{...this._fillStyle},strokeStyle:{...this._strokeStyle}}),this}getTransform(){return this._transform}resetTransform(){return this._transform.identity(),this}rotate(_){return this._transform.rotate(_),this}scale(_,C=_){return this._transform.scale(_,C),this}setTransform(_,C,T,R,P,I){return _ instanceof Matrix?(this._transform.set(_.a,_.b,_.c,_.d,_.tx,_.ty),this):(this._transform.set(_,C,T,R,P,I),this)}transform(_,C,T,R,P,I){return _ instanceof Matrix?(this._transform.append(_),this):(tempMatrix.set(_,C,T,R,P,I),this._transform.append(tempMatrix),this)}translate(_,C=_){return this._transform.translate(_,C),this}clear(){return this._activePath.clear(),this.instructions.length=0,this.resetTransform(),this.onUpdate(),this}onUpdate(){this._boundsDirty=!0,this.dirty=!0,this.emit("update",this,16)}get bounds(){if(!this._boundsDirty)return this._bounds;this._boundsDirty=!1;const _=this._bounds;_.clear();for(let C=0;C<this.instructions.length;C++){const T=this.instructions[C],R=T.action;if(R==="fill"){const P=T.data;_.addBounds(P.path.bounds)}else if(R==="texture"){const P=T.data;_.addFrame(P.dx,P.dy,P.dx+P.dw,P.dy+P.dh,P.transform)}if(R==="stroke"){const P=T.data,I=P.style.alignment;let E=P.style.width*(1-I);P.style.join==="miter"&&(E*=getMaxMiterRatio(P.path,P.style.miterLimit));const B=P.path.bounds;_.addFrame(B.minX-E,B.minY-E,B.maxX+E,B.maxY+E)}}return _.isValid||_.set(0,0,0,0),_}containsPoint(_){var R;if(!this.bounds.containsPoint(_.x,_.y))return!1;const C=this.instructions;let T=!1;for(let P=0;P<C.length;P++){const I=C[P],E=I.data,B=E.path;if(!I.action||!B)continue;const O=E.style,G=B.shapePath.shapePrimitives;for(let L=0;L<G.length;L++){const F=G[L].shape;if(!O||!F)continue;const D=G[L].transform,q=D?D.applyInverse(_,tmpPoint):_;if(I.action==="fill")T=F.contains(q.x,q.y);else{const V=O;T=F.strokeContains(q.x,q.y,V.width,V.alignment)}const U=E.hole;if(U){const V=(R=U.shapePath)==null?void 0:R.shapePrimitives;if(V)for(let W=0;W<V.length;W++)V[W].shape.contains(q.x,q.y)&&(T=!1)}if(T)return!0}}return T}unload(){var _;this.emit("unload",this);for(const C in this._gpuData)(_=this._gpuData[C])==null||_.destroy();this._gpuData=Object.create(null)}destroy(_=!1){if(this.destroyed)return;if(this.destroyed=!0,this._stateStack.length=0,this._transform=null,this.unload(),this.emit("destroy",this),this.removeAllListeners(),typeof _=="boolean"?_:_==null?void 0:_.texture){const T=typeof _=="boolean"?_:_==null?void 0:_.textureSource;this._fillStyle.texture&&(this._fillStyle.fill&&"uid"in this._fillStyle.fill?this._fillStyle.fill.destroy():this._fillStyle.texture.destroy(T)),this._strokeStyle.texture&&(this._strokeStyle.fill&&"uid"in this._strokeStyle.fill?this._strokeStyle.fill.destroy():this._strokeStyle.texture.destroy(T))}this._fillStyle=null,this._strokeStyle=null,this.instructions=null,this._activePath=null,this._bounds=null,this._stateStack=null,this.customShader=null,this._transform=null}};_GraphicsContext.defaultFillStyle={color:16777215,alpha:1,texture:Texture.WHITE,matrix:null,fill:null,textureSpace:"local"};_GraphicsContext.defaultStrokeStyle={width:1,color:16777215,alpha:1,alignment:.5,miterLimit:10,cap:"butt",join:"miter",texture:Texture.WHITE,matrix:null,fill:null,textureSpace:"local",pixelLine:!1};let GraphicsContext=_GraphicsContext;function getResolutionOfUrl(A,_=1){var T;const C=(T=Resolver.RETINA_PREFIX)==null?void 0:T.exec(A);return C?parseFloat(C[1]):_}function createTexture(A,_,C){A.label=C,A._sourceOrigin=C;const T=new Texture({source:A,label:C}),R=()=>{delete _.promiseCache[C],Cache.has(C)&&Cache.remove(C)};return T.source.once("destroy",()=>{_.promiseCache[C]&&(warn("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),R())}),T.once("destroy",()=>{A.destroyed||(warn("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),R())}),T}const validSVGExtension=".svg",validSVGMIME="image/svg+xml",loadSvg={extension:{type:ExtensionType.LoadParser,priority:LoaderParserPriority.Low,name:"loadSVG"},name:"loadSVG",id:"svg",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(A){return checkDataUrl(A,validSVGMIME)||checkExtension(A,validSVGExtension)},async load(A,_,C){var T;return((T=_.data)==null?void 0:T.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?loadAsGraphics(A):loadAsTexture(A,_,C,this.config.crossOrigin)},unload(A){A.destroy(!0)}};async function loadAsTexture(A,_,C,T){var V,W,z;const R=await DOMAdapter.get().fetch(A),P=DOMAdapter.get().createImage();P.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(await R.text())}`,P.crossOrigin=T,await P.decode();const I=((V=_.data)==null?void 0:V.width)??P.width,E=((W=_.data)==null?void 0:W.height)??P.height,B=((z=_.data)==null?void 0:z.resolution)||getResolutionOfUrl(A),O=Math.ceil(I*B),G=Math.ceil(E*B),L=DOMAdapter.get().createCanvas(O,G),F=L.getContext("2d");F.imageSmoothingEnabled=!0,F.imageSmoothingQuality="high",F.drawImage(P,0,0,I*B,E*B);const{parseAsGraphicsContext:D,...q}=_.data??{},U=new ImageSource({resource:L,alphaMode:"premultiply-alpha-on-upload",resolution:B,...q});return createTexture(U,C,A)}async function loadAsGraphics(A){const C=await(await DOMAdapter.get().fetch(A)).text(),T=new GraphicsContext;return T.svg(C),T}const WORKER_CODE$1=`(function () {
    'use strict';

    const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
    async function checkImageBitmap() {
      try {
        if (typeof createImageBitmap !== "function") return false;
        const response = await fetch(WHITE_PNG);
        const imageBlob = await response.blob();
        const imageBitmap = await createImageBitmap(imageBlob);
        return imageBitmap.width === 1 && imageBitmap.height === 1;
      } catch (_e) {
        return false;
      }
    }
    void checkImageBitmap().then((result) => {
      self.postMessage(result);
    });

})();
`;let WORKER_URL$1=null,WorkerInstance$1=class{constructor(){WORKER_URL$1||(WORKER_URL$1=URL.createObjectURL(new Blob([WORKER_CODE$1],{type:"application/javascript"}))),this.worker=new Worker(WORKER_URL$1)}};WorkerInstance$1.revokeObjectURL=function A(){WORKER_URL$1&&(URL.revokeObjectURL(WORKER_URL$1),WORKER_URL$1=null)};const WORKER_CODE=`(function () {
    'use strict';

    async function loadImageBitmap(url, alphaMode) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \${response.status} \${response.statusText}\`);
      }
      const imageBlob = await response.blob();
      return alphaMode === "premultiplied-alpha" ? createImageBitmap(imageBlob, { premultiplyAlpha: "none" }) : createImageBitmap(imageBlob);
    }
    self.onmessage = async (event) => {
      try {
        const imageBitmap = await loadImageBitmap(event.data.data[0], event.data.data[1]);
        self.postMessage({
          data: imageBitmap,
          uuid: event.data.uuid,
          id: event.data.id
        }, [imageBitmap]);
      } catch (e) {
        self.postMessage({
          error: e,
          uuid: event.data.uuid,
          id: event.data.id
        });
      }
    };

})();
`;let WORKER_URL=null;class WorkerInstance{constructor(){WORKER_URL||(WORKER_URL=URL.createObjectURL(new Blob([WORKER_CODE],{type:"application/javascript"}))),this.worker=new Worker(WORKER_URL)}}WorkerInstance.revokeObjectURL=function A(){WORKER_URL&&(URL.revokeObjectURL(WORKER_URL),WORKER_URL=null)};let UUID=0,MAX_WORKERS;class WorkerManagerClass{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(_=>{const{worker:C}=new WorkerInstance$1;C.addEventListener("message",T=>{C.terminate(),WorkerInstance$1.revokeObjectURL(),_(T.data)})}),this._isImageBitmapSupported)}loadImageBitmap(_,C){var T;return this._run("loadImageBitmap",[_,(T=C==null?void 0:C.data)==null?void 0:T.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){MAX_WORKERS===void 0&&(MAX_WORKERS=navigator.hardwareConcurrency||4);let _=this._workerPool.pop();return!_&&this._createdWorkers<MAX_WORKERS&&(this._createdWorkers++,_=new WorkerInstance().worker,_.addEventListener("message",C=>{this._complete(C.data),this._returnWorker(C.target),this._next()})),_}_returnWorker(_){this._workerPool.push(_)}_complete(_){this._resolveHash[_.uuid]&&(_.error!==void 0?this._resolveHash[_.uuid].reject(_.error):this._resolveHash[_.uuid].resolve(_.data),delete this._resolveHash[_.uuid])}async _run(_,C){await this._initWorkers();const T=new Promise((R,P)=>{this._queue.push({id:_,arguments:C,resolve:R,reject:P})});return this._next(),T}_next(){if(!this._queue.length)return;const _=this._getWorker();if(!_)return;const C=this._queue.pop(),T=C.id;this._resolveHash[UUID]={resolve:C.resolve,reject:C.reject},_.postMessage({data:C.arguments,uuid:UUID++,id:T})}reset(){this._workerPool.forEach(_=>_.terminate()),this._workerPool.length=0,Object.values(this._resolveHash).forEach(({reject:_})=>{_==null||_(new Error("WorkerManager has been reset before completion"))}),this._resolveHash={},this._queue.length=0,this._initialized=!1,this._createdWorkers=0}}const WorkerManager=new WorkerManagerClass,validImageExtensions=[".jpeg",".jpg",".png",".webp",".avif"],validImageMIMEs=["image/jpeg","image/png","image/webp","image/avif"];async function loadImageBitmap(A,_){var R;const C=await DOMAdapter.get().fetch(A);if(!C.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${A}: ${C.status} ${C.statusText}`);const T=await C.blob();return((R=_==null?void 0:_.data)==null?void 0:R.alphaMode)==="premultiplied-alpha"?createImageBitmap(T,{premultiplyAlpha:"none"}):createImageBitmap(T)}const loadTextures={name:"loadTextures",id:"texture",extension:{type:ExtensionType.LoadParser,priority:LoaderParserPriority.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(A){return checkDataUrl(A,validImageMIMEs)||checkExtension(A,validImageExtensions)},async load(A,_,C){var P;let T=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await WorkerManager.isImageBitmapSupported()?T=await WorkerManager.loadImageBitmap(A,_):T=await loadImageBitmap(A,_):T=await new Promise((I,E)=>{T=DOMAdapter.get().createImage(),T.crossOrigin=this.config.crossOrigin,T.src=A,T.complete?I(T):(T.onload=()=>{I(T)},T.onerror=E)});const R=new ImageSource({resource:T,alphaMode:"premultiply-alpha-on-upload",resolution:((P=_.data)==null?void 0:P.resolution)||getResolutionOfUrl(A),..._.data});return createTexture(R,C,A)},unload(A){A.destroy(!0)}},potentialVideoExtensions=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"];let validVideoExtensions,validVideoMIMEs;function crossOrigin(A,_,C){C===void 0&&!_.startsWith("data:")?A.crossOrigin=determineCrossOrigin(_):C!==!1&&(A.crossOrigin=typeof C=="string"?C:"anonymous")}function preloadVideo(A){return new Promise((_,C)=>{A.addEventListener("canplaythrough",T),A.addEventListener("error",R),A.load();function T(){P(),_()}function R(I){P(),C(I)}function P(){A.removeEventListener("canplaythrough",T),A.removeEventListener("error",R)}})}function determineCrossOrigin(A,_=globalThis.location){if(A.startsWith("data:"))return"";_||(_=globalThis.location);const C=new URL(A,document.baseURI);return C.hostname!==_.hostname||C.port!==_.port||C.protocol!==_.protocol?"anonymous":""}function getBrowserSupportedVideoExtensions(){const A=[],_=[];for(const C of potentialVideoExtensions){const T=VideoSource.MIME_TYPES[C.substring(1)]||`video/${C.substring(1)}`;testVideoFormat(T)&&(A.push(C),_.includes(T)||_.push(T))}return{validVideoExtensions:A,validVideoMime:_}}const loadVideoTextures={name:"loadVideo",id:"video",extension:{type:ExtensionType.LoadParser,name:"loadVideo"},test(A){if(!validVideoExtensions||!validVideoMIMEs){const{validVideoExtensions:T,validVideoMime:R}=getBrowserSupportedVideoExtensions();validVideoExtensions=T,validVideoMIMEs=R}const _=checkDataUrl(A,validVideoMIMEs),C=checkExtension(A,validVideoExtensions);return _||C},async load(A,_,C){var B,O;const T={...VideoSource.defaultOptions,resolution:((B=_.data)==null?void 0:B.resolution)||getResolutionOfUrl(A),alphaMode:((O=_.data)==null?void 0:O.alphaMode)||await detectVideoAlphaMode(),..._.data},R=document.createElement("video"),P={preload:T.autoLoad!==!1?"auto":void 0,"webkit-playsinline":T.playsinline!==!1?"":void 0,playsinline:T.playsinline!==!1?"":void 0,muted:T.muted===!0?"":void 0,loop:T.loop===!0?"":void 0,autoplay:T.autoPlay!==!1?"":void 0};Object.keys(P).forEach(G=>{const L=P[G];L!==void 0&&R.setAttribute(G,L)}),T.muted===!0&&(R.muted=!0),crossOrigin(R,A,T.crossorigin);const I=document.createElement("source");let E;if(T.mime)E=T.mime;else if(A.startsWith("data:"))E=A.slice(5,A.indexOf(";"));else if(!A.startsWith("blob:")){const G=A.split("?")[0].slice(A.lastIndexOf(".")+1).toLowerCase();E=VideoSource.MIME_TYPES[G]||`video/${G}`}return I.src=A,E&&(I.type=E),new Promise((G,L)=>{T.preload&&!T.autoPlay&&R.load(),R.addEventListener("canplay",F),R.addEventListener("error",D),I.addEventListener("error",D),R.appendChild(I);async function F(){const U=new VideoSource({...T,resource:R});q(),_.data.preload&&await preloadVideo(R),G(createTexture(U,C,A))}function D(U){q(),L(U)}function q(){R.removeEventListener("canplay",F),R.removeEventListener("error",D),I.removeEventListener("error",D)}})},unload(A){A.destroy(!0)}},resolveTextureUrl={extension:{type:ExtensionType.ResolveParser,name:"resolveTexture"},test:loadTextures.test,parse:A=>{var _;return{resolution:parseFloat(((_=Resolver.RETINA_PREFIX.exec(A))==null?void 0:_[1])??"1"),format:A.split(".").pop(),src:A}}},resolveJsonUrl={extension:{type:ExtensionType.ResolveParser,priority:-2,name:"resolveJson"},test:A=>Resolver.RETINA_PREFIX.test(A)&&A.endsWith(".json"),parse:resolveTextureUrl.parse};class AssetsClass{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Resolver,this.loader=new Loader,this.cache=Cache,this._backgroundLoader=new BackgroundLoader(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(_={}){var P,I;if(this._initialized){warn("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,_.defaultSearchParams&&this.resolver.setDefaultSearchParams(_.defaultSearchParams),_.basePath&&(this.resolver.basePath=_.basePath),_.bundleIdentifier&&this.resolver.setBundleIdentifier(_.bundleIdentifier),_.manifest){let E=_.manifest;typeof E=="string"&&(E=await this.load(E)),this.resolver.addManifest(E)}const C=((P=_.texturePreference)==null?void 0:P.resolution)??1,T=typeof C=="number"?[C]:C,R=await this._detectFormats({preferredFormats:(I=_.texturePreference)==null?void 0:I.format,skipDetections:_.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:R,resolution:T}}),_.preferences&&this.setPreferences(_.preferences),_.loadOptions&&(this.loader.loadOptions={...this.loader.loadOptions,..._.loadOptions})}add(_){this.resolver.add(_)}async load(_,C){this._initialized||await this.init();const T=isSingleItem(_),R=convertToList(_).map(E=>{if(typeof E!="string"){const B=this.resolver.getAlias(E);return B.some(O=>!this.resolver.hasKey(O))&&this.add(E),Array.isArray(B)?B[0]:B}return this.resolver.hasKey(E)||this.add({alias:E,src:E}),E}),P=this.resolver.resolve(R),I=await this._mapLoadToResolve(P,C);return T?I[R[0]]:I}addBundle(_,C){this.resolver.addBundle(_,C)}async loadBundle(_,C){this._initialized||await this.init();let T=!1;typeof _=="string"&&(T=!0,_=[_]);const R=this.resolver.resolveBundle(_),P={},I=Object.keys(R);let E=0;const B=[],O=()=>{C==null||C(B.reduce((L,F)=>L+F,0)/E)},G=I.map((L,F)=>{const D=R[L],q=Object.values(D),V=[...new Set(q.flat())].reduce((W,z)=>W+(z.progressSize||1),0);return B.push(0),E+=V,this._mapLoadToResolve(D,W=>{B[F]=W*V,O()}).then(W=>{P[L]=W})});return await Promise.all(G),T?P[_[0]]:P}async backgroundLoad(_){this._initialized||await this.init(),typeof _=="string"&&(_=[_]);const C=this.resolver.resolve(_);this._backgroundLoader.add(Object.values(C))}async backgroundLoadBundle(_){this._initialized||await this.init(),typeof _=="string"&&(_=[_]);const C=this.resolver.resolveBundle(_);Object.values(C).forEach(T=>{this._backgroundLoader.add(Object.values(T))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(_){if(typeof _=="string")return Cache.get(_);const C={};for(let T=0;T<_.length;T++)C[T]=Cache.get(_[T]);return C}async _mapLoadToResolve(_,C){const T=[...new Set(Object.values(_))];this._backgroundLoader.active=!1;const R=await this.loader.load(T,C);this._backgroundLoader.active=!0;const P={};return T.forEach(I=>{const E=R[I.src],B=[I.src];I.alias&&B.push(...I.alias),B.forEach(O=>{P[O]=E}),Cache.set(B,E)}),P}async unload(_){this._initialized||await this.init();const C=convertToList(_).map(R=>typeof R!="string"?R.src:R),T=this.resolver.resolve(C);await this._unloadFromResolved(T)}async unloadBundle(_){this._initialized||await this.init(),_=convertToList(_);const C=this.resolver.resolveBundle(_),T=Object.keys(C).map(R=>this._unloadFromResolved(C[R]));await Promise.all(T)}async _unloadFromResolved(_){const C=Object.values(_);C.forEach(T=>{Cache.remove(T.src)}),await this.loader.unload(C)}async _detectFormats(_){let C=[];_.preferredFormats&&(C=Array.isArray(_.preferredFormats)?_.preferredFormats:[_.preferredFormats]);for(const T of _.detections)_.skipDetections||await T.test()?C=await T.add(C):_.skipDetections||(C=await T.remove(C));return C=C.filter((T,R)=>C.indexOf(T)===R),C}get detections(){return this._detections}setPreferences(_){this.loader.parsers.forEach(C=>{C.config&&Object.keys(C.config).filter(T=>T in _).forEach(T=>{C.config[T]=_[T]})})}}const Assets=new AssetsClass;extensions.handleByList(ExtensionType.LoadParser,Assets.loader.parsers).handleByList(ExtensionType.ResolveParser,Assets.resolver.parsers).handleByList(ExtensionType.CacheParser,Assets.cache.parsers).handleByList(ExtensionType.DetectionParser,Assets.detections);extensions.add(cacheTextureArray,detectDefaults,detectAvif,detectWebp,detectMp4,detectOgv,detectWebm,loadJson,loadTxt,loadWebFont,loadSvg,loadTextures,loadVideoTextures,loadBitmapFont,bitmapFontCachePlugin,resolveTextureUrl,resolveJsonUrl);const assetKeyMap={loader:ExtensionType.LoadParser,resolver:ExtensionType.ResolveParser,cache:ExtensionType.CacheParser,detection:ExtensionType.DetectionParser};extensions.handle(ExtensionType.Asset,A=>{const _=A.ref;Object.entries(assetKeyMap).filter(([C])=>!!_[C]).forEach(([C,T])=>extensions.add(Object.assign(_[C],{extension:_[C].extension??T})))},A=>{const _=A.ref;Object.keys(assetKeyMap).filter(C=>!!_[C]).forEach(C=>extensions.remove(_[C]))});let canUseNewCanvasBlendModesValue;function createColoredCanvas(A){const _=DOMAdapter.get().createCanvas(6,1),C=_.getContext("2d");return C.fillStyle=A,C.fillRect(0,0,6,1),_}function canUseNewCanvasBlendModes(){if(canUseNewCanvasBlendModesValue!==void 0)return canUseNewCanvasBlendModesValue;try{const A=createColoredCanvas("#ff00ff"),_=createColoredCanvas("#ffff00"),T=DOMAdapter.get().createCanvas(6,1).getContext("2d");T.globalCompositeOperation="multiply",T.drawImage(A,0,0),T.drawImage(_,2,0);const R=T.getImageData(2,0,1,1);if(!R)canUseNewCanvasBlendModesValue=!1;else{const P=R.data;canUseNewCanvasBlendModesValue=P[0]===255&&P[1]===0&&P[2]===0}}catch{canUseNewCanvasBlendModesValue=!1}return canUseNewCanvasBlendModesValue}const canvasUtils={canvas:null,convertTintToImage:!1,cacheStepsPerColorChannel:8,canUseMultiply:canUseNewCanvasBlendModes(),tintMethod:null,_canvasSourceCache:new WeakMap,_unpremultipliedCache:new WeakMap,getCanvasSource:A=>{const _=A.source,C=_==null?void 0:_.resource;if(!C)return null;const T=_.alphaMode==="premultiplied-alpha",R=_.resourceWidth??_.pixelWidth,P=_.resourceHeight??_.pixelHeight,I=R!==_.pixelWidth||P!==_.pixelHeight;if(T){if((C instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&C instanceof OffscreenCanvas)&&!I)return C;const E=canvasUtils._unpremultipliedCache.get(_);if((E==null?void 0:E.resourceId)===_._resourceId)return E.canvas}if(C instanceof Uint8Array||C instanceof Uint8ClampedArray||C instanceof Int8Array||C instanceof Uint16Array||C instanceof Int16Array||C instanceof Uint32Array||C instanceof Int32Array||C instanceof Float32Array||C instanceof ArrayBuffer){const E=canvasUtils._canvasSourceCache.get(_);if((E==null?void 0:E.resourceId)===_._resourceId)return E.canvas;const B=DOMAdapter.get().createCanvas(_.pixelWidth,_.pixelHeight),O=B.getContext("2d"),G=O.createImageData(_.pixelWidth,_.pixelHeight),L=G.data,F=C instanceof ArrayBuffer?new Uint8Array(C):new Uint8Array(C.buffer,C.byteOffset,C.byteLength);if(_.format==="bgra8unorm")for(let D=0;D<L.length&&D+3<F.length;D+=4)L[D]=F[D+2],L[D+1]=F[D+1],L[D+2]=F[D],L[D+3]=F[D+3];else L.set(F.subarray(0,L.length));return O.putImageData(G,0,0),canvasUtils._canvasSourceCache.set(_,{canvas:B,resourceId:_._resourceId}),B}if(T){const E=DOMAdapter.get().createCanvas(_.pixelWidth,_.pixelHeight),B=E.getContext("2d",{willReadFrequently:!0});E.width=_.pixelWidth,E.height=_.pixelHeight,B.drawImage(C,0,0);const O=B.getImageData(0,0,E.width,E.height),G=O.data;for(let L=0;L<G.length;L+=4){const F=G[L+3];if(F>0){const D=255/F;G[L]=Math.min(255,G[L]*D+.5),G[L+1]=Math.min(255,G[L+1]*D+.5),G[L+2]=Math.min(255,G[L+2]*D+.5)}}return B.putImageData(O,0,0),canvasUtils._unpremultipliedCache.set(_,{canvas:E,resourceId:_._resourceId}),E}if(I){const E=canvasUtils._canvasSourceCache.get(_);if((E==null?void 0:E.resourceId)===_._resourceId)return E.canvas;const B=DOMAdapter.get().createCanvas(_.pixelWidth,_.pixelHeight),O=B.getContext("2d");return B.width=_.pixelWidth,B.height=_.pixelHeight,O.drawImage(C,0,0),canvasUtils._canvasSourceCache.set(_,{canvas:B,resourceId:_._resourceId}),B}return C},getTintedCanvas:(A,_)=>{const C=A.texture,T=Color.shared.setValue(_).toHex(),R=C.tintCache||(C.tintCache={}),P=R[T],I=C.source._resourceId;if((P==null?void 0:P.tintId)===I)return P;const E=P&&"getContext"in P?P:DOMAdapter.get().createCanvas();if(canvasUtils.tintMethod(C,_,E),E.tintId=I,canvasUtils.convertTintToImage&&E.toDataURL!==void 0){const B=DOMAdapter.get().createImage();B.src=E.toDataURL(),B.tintId=I,R[T]=B}else R[T]=E;return R[T]},getTintedPattern:(A,_)=>{const C=Color.shared.setValue(_).toHex(),T=A.patternCache||(A.patternCache={}),R=A.source._resourceId;let P=T[C];return(P==null?void 0:P.tintId)===R||(canvasUtils.canvas||(canvasUtils.canvas=DOMAdapter.get().createCanvas()),canvasUtils.tintMethod(A,_,canvasUtils.canvas),P=canvasUtils.canvas.getContext("2d").createPattern(canvasUtils.canvas,"repeat"),P.tintId=R,T[C]=P),P},applyPatternTransform:(A,_,C=!0)=>{if(!_)return;const T=A;if(!T.setTransform)return;const R=globalThis.DOMMatrix;if(!R)return;const P=new R([_.a,_.b,_.c,_.d,_.tx,_.ty]);T.setTransform(C?P.inverse():P)},tintWithMultiply:(A,_,C)=>{const T=C.getContext("2d"),R=A.frame.clone(),P=A.source._resolution??A.source.resolution??1,I=A.rotate;R.x*=P,R.y*=P,R.width*=P,R.height*=P;const E=groupD8.isVertical(I),B=E?R.height:R.width,O=E?R.width:R.height;C.width=Math.ceil(B),C.height=Math.ceil(O),T.save(),T.fillStyle=Color.shared.setValue(_).toHex(),T.fillRect(0,0,B,O),T.globalCompositeOperation="multiply";const G=canvasUtils.getCanvasSource(A);if(!G){T.restore();return}I&&canvasUtils._applyInverseRotation(T,I,R.width,R.height),T.drawImage(G,R.x,R.y,R.width,R.height,0,0,R.width,R.height),T.globalCompositeOperation="destination-atop",T.drawImage(G,R.x,R.y,R.width,R.height,0,0,R.width,R.height),T.restore()},tintWithOverlay:(A,_,C)=>{const T=C.getContext("2d"),R=A.frame.clone(),P=A.source._resolution??A.source.resolution??1,I=A.rotate;R.x*=P,R.y*=P,R.width*=P,R.height*=P;const E=groupD8.isVertical(I),B=E?R.height:R.width,O=E?R.width:R.height;C.width=Math.ceil(B),C.height=Math.ceil(O),T.save(),T.globalCompositeOperation="copy",T.fillStyle=Color.shared.setValue(_).toHex(),T.fillRect(0,0,B,O),T.globalCompositeOperation="destination-atop";const G=canvasUtils.getCanvasSource(A);if(!G){T.restore();return}I&&canvasUtils._applyInverseRotation(T,I,R.width,R.height),T.drawImage(G,R.x,R.y,R.width,R.height,0,0,R.width,R.height),T.restore()},tintWithPerPixel:(A,_,C)=>{const T=C.getContext("2d"),R=A.frame.clone(),P=A.source._resolution??A.source.resolution??1,I=A.rotate;R.x*=P,R.y*=P,R.width*=P,R.height*=P;const E=groupD8.isVertical(I),B=E?R.height:R.width,O=E?R.width:R.height;C.width=Math.ceil(B),C.height=Math.ceil(O),T.save(),T.globalCompositeOperation="copy";const G=canvasUtils.getCanvasSource(A);if(!G){T.restore();return}I&&canvasUtils._applyInverseRotation(T,I,R.width,R.height),T.drawImage(G,R.x,R.y,R.width,R.height,0,0,R.width,R.height),T.restore();const L=_>>16&255,F=_>>8&255,D=_&255,q=T.getImageData(0,0,B,O),U=q.data;for(let V=0;V<U.length;V+=4)U[V]=U[V]*L/255,U[V+1]=U[V+1]*F/255,U[V+2]=U[V+2]*D/255;T.putImageData(q,0,0)},_applyInverseRotation:(A,_,C,T)=>{const R=groupD8.inv(_),P=groupD8.uX(R),I=groupD8.uY(R),E=groupD8.vX(R),B=groupD8.vY(R),O=-Math.min(0,P*C,E*T,P*C+E*T),G=-Math.min(0,I*C,B*T,I*C+B*T);A.transform(P,I,E,B,O,G)}};canvasUtils.tintMethod=canvasUtils.canUseMultiply?canvasUtils.tintWithMultiply:canvasUtils.tintWithPerPixel;class CanvasPoolClass{constructor(_){this._canvasPool=Object.create(null),this.canvasOptions=_||{},this.enableFullScreen=!1}_createCanvasAndContext(_,C){const T=DOMAdapter.get().createCanvas();T.width=_,T.height=C;const R=T.getContext("2d");return{canvas:T,context:R}}getOptimalCanvasAndContext(_,C,T=1){_=Math.ceil(_*T-1e-6),C=Math.ceil(C*T-1e-6),_=nextPow2(_),C=nextPow2(C);const R=(_<<17)+(C<<1);this._canvasPool[R]||(this._canvasPool[R]=[]);let P=this._canvasPool[R].pop();return P||(P=this._createCanvasAndContext(_,C)),P}returnCanvasAndContext(_){const C=_.canvas,{width:T,height:R}=C,P=(T<<17)+(R<<1);_.context.resetTransform(),_.context.clearRect(0,0,T,R),this._canvasPool[P].push(_)}clear(){this._canvasPool={}}}const CanvasPool=new CanvasPoolClass;GlobalResourceRegistry.register(CanvasPool);const tempBounds=new Bounds;function getPo2TextureFromSource(A,_,C,T,R=!1){const P=tempBounds;P.minX=0,P.minY=0,P.maxX=A.width/T|0,P.maxY=A.height/T|0;const I=TexturePool.getOptimalTexture(P.width,P.height,T,!1,R);return I.source.uploadMethodId="image",I.source.resource=A,I.source.alphaMode="premultiply-alpha-on-upload",I.frame.width=_/T,I.frame.height=C/T,I.source.emit("update",I.source),I.updateUvs(),I}class CanvasGraphicsContext{constructor(){this.isBatchable=!1}reset(){this.isBatchable=!1,this.context=null,this.graphicsData&&(this.graphicsData.destroy(),this.graphicsData=null)}destroy(){this.reset()}}class CanvasGraphicsContextRenderData{constructor(){this.instructions=new InstructionSet}init(){this.instructions.reset()}destroy(){this.instructions.destroy(),this.instructions=null}}const _CanvasGraphicsContextSystem=class se{constructor(_){this._renderer=_,this._managedContexts=new GCManagedHash({renderer:_,type:"resource",name:"graphicsContext"})}init(_){se.defaultOptions.bezierSmoothness=(_==null?void 0:_.bezierSmoothness)??se.defaultOptions.bezierSmoothness}getContextRenderData(_){return this.getGpuContext(_).graphicsData||this._initContextRenderData(_)}updateGpuContext(_){const C=_._gpuData,T=!!C[this._renderer.uid],R=C[this._renderer.uid]||this._initContext(_);return(_.dirty||!T)&&(T&&R.reset(),R.isBatchable=!1,_.dirty=!1),R}getGpuContext(_){return _._gpuData[this._renderer.uid]||this._initContext(_)}_initContextRenderData(_){const C=new CanvasGraphicsContextRenderData,T=this.getGpuContext(_);return T.graphicsData=C,C.init(),C}_initContext(_){const C=new CanvasGraphicsContext;return C.context=_,_._gpuData[this._renderer.uid]=C,this._managedContexts.add(_),C}destroy(){this._managedContexts.destroy(),this._renderer=null}};_CanvasGraphicsContextSystem.extension={type:[ExtensionType.CanvasSystem],name:"graphicsContext"};_CanvasGraphicsContextSystem.defaultOptions={bezierSmoothness:.5};let CanvasGraphicsContextSystem=_CanvasGraphicsContextSystem;class CanvasGraphicsPipe{constructor(_,C){this.state=State.for2d(),this.renderer=_,this._adaptor=C,this.renderer.runners.contextChange.add(this),this._managedGraphics=new GCManagedHash({renderer:_,type:"renderable",priority:-1,name:"graphics"})}contextChange(){this._adaptor.contextChange(this.renderer)}validateRenderable(_){return!1}addRenderable(_,C){this._managedGraphics.add(_),this.renderer.renderPipes.batch.break(C),C.add(_)}updateRenderable(_){}execute(_){_.isRenderable&&this._adaptor.execute(this,_)}destroy(){this._managedGraphics.destroy(),this.renderer=null,this._adaptor.destroy(),this._adaptor=null}}CanvasGraphicsPipe.extension={type:[ExtensionType.CanvasPipes],name:"graphics"};function color32BitToUniform(A,_,C){const T=(A>>24&255)/255;_[C++]=(A&255)/255*T,_[C++]=(A>>8&255)/255*T,_[C++]=(A>>16&255)/255*T,_[C++]=T}class GraphicsGpuData{constructor(){this.batches=[],this.batched=!1}destroy(){this.batches.forEach(_=>{BigPool.return(_)}),this.batches.length=0}}class GraphicsPipe{constructor(_,C){this.state=State.for2d(),this.renderer=_,this._adaptor=C,this.renderer.runners.contextChange.add(this),this._managedGraphics=new GCManagedHash({renderer:_,type:"renderable",priority:-1,name:"graphics"})}contextChange(){this._adaptor.contextChange(this.renderer)}validateRenderable(_){const C=_.context,T=!!_._gpuData,P=this.renderer.graphicsContext.updateGpuContext(C);return!!(P.isBatchable||T!==P.isBatchable)}addRenderable(_,C){const R=this.renderer.graphicsContext.updateGpuContext(_.context);_.didViewUpdate&&this._rebuild(_),R.isBatchable?this._addToBatcher(_,C):(this.renderer.renderPipes.batch.break(C),C.add(_))}updateRenderable(_){const T=this._getGpuDataForRenderable(_).batches;for(let R=0;R<T.length;R++){const P=T[R];P._batcher.updateElement(P)}}execute(_){if(!_.isRenderable)return;const C=this.renderer,T=_.context;if(!C.graphicsContext.getGpuContext(T).batches.length)return;const P=T.customShader||this._adaptor.shader;this.state.blendMode=_.groupBlendMode;const I=P.resources.localUniforms.uniforms;I.uTransformMatrix=_.groupTransform,I.uRound=C._roundPixels|_._roundPixels,color32BitToUniform(_.groupColorAlpha,I.uColor,0),this._adaptor.execute(this,_)}_rebuild(_){const C=this._getGpuDataForRenderable(_),R=this.renderer.graphicsContext.updateGpuContext(_.context);C.destroy(),R.isBatchable&&this._updateBatchesForRenderable(_,C)}_addToBatcher(_,C){const T=this.renderer.renderPipes.batch,R=this._getGpuDataForRenderable(_).batches;for(let P=0;P<R.length;P++){const I=R[P];T.addToBatch(I,C)}}_getGpuDataForRenderable(_){return _._gpuData[this.renderer.uid]||this._initGpuDataForRenderable(_)}_initGpuDataForRenderable(_){const C=new GraphicsGpuData;return _._gpuData[this.renderer.uid]=C,this._managedGraphics.add(_),C}_updateBatchesForRenderable(_,C){const T=_.context,P=this.renderer.graphicsContext.getGpuContext(T),I=this.renderer._roundPixels|_._roundPixels;C.batches=P.batches.map(E=>{const B=BigPool.get(BatchableGraphics);return E.copyTo(B),B.renderable=_,B.roundPixels=I,B})}destroy(){this._managedGraphics.destroy(),this.renderer=null,this._adaptor.destroy(),this._adaptor=null,this.state=null}}GraphicsPipe.extension={type:[ExtensionType.WebGLPipes,ExtensionType.WebGPUPipes],name:"graphics"};extensions.add(CanvasGraphicsPipe);extensions.add(GraphicsPipe);extensions.add(CanvasGraphicsContextSystem);extensions.add(GraphicsContextSystem);class Graphics extends ViewContainer{constructor(_){_ instanceof GraphicsContext&&(_={context:_});const{context:C,roundPixels:T,...R}=_||{};super({label:"Graphics",...R}),this.renderPipeId="graphics",C?this.context=C:(this.context=this._ownedContext=new GraphicsContext,this.context.autoGarbageCollect=this.autoGarbageCollect),this.didViewUpdate=!0,this.allowChildren=!1,this.roundPixels=T??!1}set context(_){_!==this._context&&(this._context&&(this._context.off("update",this.onViewUpdate,this),this._context.off("unload",this.unload,this)),this._context=_,this._context.on("update",this.onViewUpdate,this),this._context.on("unload",this.unload,this),this.onViewUpdate())}get context(){return this._context}get bounds(){return this._context.bounds}updateBounds(){}containsPoint(_){return this._context.containsPoint(_)}destroy(_){this._ownedContext&&!_?this._ownedContext.destroy(_):(_===!0||(_==null?void 0:_.context)===!0)&&this._context.destroy(_),this._ownedContext=null,this._context=null,super.destroy(_)}_onTouch(_){this._gcLastUsed=_,this._context._gcLastUsed=_}_callContextMethod(_,C){return this.context[_](...C),this}setFillStyle(..._){return this._callContextMethod("setFillStyle",_)}setStrokeStyle(..._){return this._callContextMethod("setStrokeStyle",_)}fill(..._){return this._callContextMethod("fill",_)}stroke(..._){return this._callContextMethod("stroke",_)}texture(..._){return this._callContextMethod("texture",_)}beginPath(){return this._callContextMethod("beginPath",[])}cut(){return this._callContextMethod("cut",[])}arc(..._){return this._callContextMethod("arc",_)}arcTo(..._){return this._callContextMethod("arcTo",_)}arcToSvg(..._){return this._callContextMethod("arcToSvg",_)}bezierCurveTo(..._){return this._callContextMethod("bezierCurveTo",_)}closePath(){return this._callContextMethod("closePath",[])}ellipse(..._){return this._callContextMethod("ellipse",_)}circle(..._){return this._callContextMethod("circle",_)}path(..._){return this._callContextMethod("path",_)}lineTo(..._){return this._callContextMethod("lineTo",_)}moveTo(..._){return this._callContextMethod("moveTo",_)}quadraticCurveTo(..._){return this._callContextMethod("quadraticCurveTo",_)}rect(..._){return this._callContextMethod("rect",_)}roundRect(..._){return this._callContextMethod("roundRect",_)}poly(..._){return this._callContextMethod("poly",_)}regularPoly(..._){return this._callContextMethod("regularPoly",_)}roundPoly(..._){return this._callContextMethod("roundPoly",_)}roundShape(..._){return this._callContextMethod("roundShape",_)}filletRect(..._){return this._callContextMethod("filletRect",_)}chamferRect(..._){return this._callContextMethod("chamferRect",_)}star(..._){return this._callContextMethod("star",_)}svg(..._){return this._callContextMethod("svg",_)}restore(..._){return this._callContextMethod("restore",_)}save(){return this._callContextMethod("save",[])}getTransform(){return this.context.getTransform()}resetTransform(){return this._callContextMethod("resetTransform",[])}rotateTransform(..._){return this._callContextMethod("rotate",_)}scaleTransform(..._){return this._callContextMethod("scale",_)}setTransform(..._){return this._callContextMethod("setTransform",_)}transform(..._){return this._callContextMethod("transform",_)}translateTransform(..._){return this._callContextMethod("translate",_)}clear(){return this._callContextMethod("clear",[])}get fillStyle(){return this._context.fillStyle}set fillStyle(_){this._context.fillStyle=_}get strokeStyle(){return this._context.strokeStyle}set strokeStyle(_){this._context.strokeStyle=_}clone(_=!1){return _?new Graphics(this._context.clone()):(this._ownedContext=null,new Graphics(this._context))}lineStyle(_,C,T){deprecation(v8_0_0,"Graphics#lineStyle is no longer needed. Use Graphics#setStrokeStyle to set the stroke style.");const R={};return _&&(R.width=_),C&&(R.color=C),T&&(R.alpha=T),this.context.strokeStyle=R,this}beginFill(_,C){deprecation(v8_0_0,"Graphics#beginFill is no longer needed. Use Graphics#fill to fill the shape with the desired style.");const T={};return _!==void 0&&(T.color=_),C!==void 0&&(T.alpha=C),this.context.fillStyle=T,this}endFill(){deprecation(v8_0_0,"Graphics#endFill is no longer needed. Use Graphics#fill to fill the shape with the desired style."),this.context.fill();const _=this.context.strokeStyle;return(_.width!==GraphicsContext.defaultStrokeStyle.width||_.color!==GraphicsContext.defaultStrokeStyle.color||_.alpha!==GraphicsContext.defaultStrokeStyle.alpha)&&this.context.stroke(),this}drawCircle(..._){return deprecation(v8_0_0,"Graphics#drawCircle has been renamed to Graphics#circle"),this._callContextMethod("circle",_)}drawEllipse(..._){return deprecation(v8_0_0,"Graphics#drawEllipse has been renamed to Graphics#ellipse"),this._callContextMethod("ellipse",_)}drawPolygon(..._){return deprecation(v8_0_0,"Graphics#drawPolygon has been renamed to Graphics#poly"),this._callContextMethod("poly",_)}drawRect(..._){return deprecation(v8_0_0,"Graphics#drawRect has been renamed to Graphics#rect"),this._callContextMethod("rect",_)}drawRoundedRect(..._){return deprecation(v8_0_0,"Graphics#drawRoundedRect has been renamed to Graphics#roundRect"),this._callContextMethod("roundRect",_)}drawStar(..._){return deprecation(v8_0_0,"Graphics#drawStar has been renamed to Graphics#star"),this._callContextMethod("star",_)}}const _MeshGeometry=class _e extends Geometry{constructor(..._){let C=_[0]??{};C instanceof Float32Array&&(deprecation(v8_0_0,"use new MeshGeometry({ positions, uvs, indices }) instead"),C={positions:C,uvs:_[1],indices:_[2]}),C={..._e.defaultOptions,...C};const T=C.positions||new Float32Array([0,0,1,0,1,1,0,1]);let R=C.uvs;R||(C.positions?R=new Float32Array(T.length):R=new Float32Array([0,0,1,0,1,1,0,1]));const P=C.indices||new Uint32Array([0,1,2,0,2,3]),I=C.shrinkBuffersToFit,E=new Buffer({data:T,label:"attribute-mesh-positions",shrinkToFit:I,usage:BufferUsage.VERTEX|BufferUsage.COPY_DST}),B=new Buffer({data:R,label:"attribute-mesh-uvs",shrinkToFit:I,usage:BufferUsage.VERTEX|BufferUsage.COPY_DST}),O=new Buffer({data:P,label:"index-mesh-buffer",shrinkToFit:I,usage:BufferUsage.INDEX|BufferUsage.COPY_DST});super({attributes:{aPosition:{buffer:E,format:"float32x2",stride:2*4,offset:0},aUV:{buffer:B,format:"float32x2",stride:2*4,offset:0}},indexBuffer:O,topology:C.topology}),this.batchMode="auto"}get positions(){return this.attributes.aPosition.buffer.data}set positions(_){this.attributes.aPosition.buffer.data=_}get uvs(){return this.attributes.aUV.buffer.data}set uvs(_){this.attributes.aUV.buffer.data=_}get indices(){return this.indexBuffer.data}set indices(_){this.indexBuffer.data=_}};_MeshGeometry.defaultOptions={topology:"triangle-list",shrinkBuffersToFit:!1};let MeshGeometry=_MeshGeometry;class BatchableMesh{constructor(){this.batcherName="default",this.packAsQuad=!1,this.indexOffset=0,this.attributeOffset=0,this.roundPixels=0,this._batcher=null,this._batch=null,this._textureMatrixUpdateId=-1,this._uvUpdateId=-1}get blendMode(){return this.renderable.groupBlendMode}get topology(){return this._topology||this.geometry.topology}set topology(_){this._topology=_}reset(){this.renderable=null,this.texture=null,this._batcher=null,this._batch=null,this.geometry=null,this._uvUpdateId=-1,this._textureMatrixUpdateId=-1}setTexture(_){this.texture!==_&&(this.texture=_,this._textureMatrixUpdateId=-1)}get uvs(){const C=this.geometry.getBuffer("aUV"),T=C.data;let R=T;const P=this.texture.textureMatrix;return P.isSimple||(R=this._transformedUvs,(this._textureMatrixUpdateId!==P._updateID||this._uvUpdateId!==C._updateID)&&((!R||R.length<T.length)&&(R=this._transformedUvs=new Float32Array(T.length)),this._textureMatrixUpdateId=P._updateID,this._uvUpdateId=C._updateID,P.multiplyUvs(T,R))),R}get positions(){return this.geometry.positions}get indices(){return this.geometry.indices}get color(){return this.renderable.groupColorAlpha}get groupTransform(){return this.renderable.groupTransform}get attributeSize(){return this.geometry.positions.length/2}get indexSize(){return this.geometry.indices.length}}class AbstractText extends ViewContainer{constructor(_,C){const{text:T,resolution:R,style:P,anchor:I,width:E,height:B,roundPixels:O,...G}=_;super({...G}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=C,this.text=T??"",this.style=P,this.resolution=R??null,this.allowChildren=!1,this._anchor=new ObservablePoint({_onUpdate:()=>{this.onViewUpdate()}}),I&&(this.anchor=I),this.roundPixels=O??!1,E!==void 0&&(this.width=E),B!==void 0&&(this.height=B)}get anchor(){return this._anchor}set anchor(_){typeof _=="number"?this._anchor.set(_):this._anchor.copyFrom(_)}set text(_){_=_.toString(),this._text!==_&&(this._text=_,this.onViewUpdate())}get text(){return this._text}set resolution(_){this._autoResolution=_===null,this._resolution=_,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(_){var C;_||(_={}),(C=this._style)==null||C.off("update",this.onViewUpdate,this),_ instanceof this._styleClass?this._style=_:this._style=new this._styleClass(_),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(_){this._setWidth(_,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(_){this._setHeight(_,this.bounds.height)}getSize(_){return _||(_={}),_.width=Math.abs(this.scale.x)*this.bounds.width,_.height=Math.abs(this.scale.y)*this.bounds.height,_}setSize(_,C){typeof _=="object"?(C=_.height??_.width,_=_.width):C??(C=_),_!==void 0&&this._setWidth(_,this.bounds.width),C!==void 0&&this._setHeight(C,this.bounds.height)}containsPoint(_){const C=this.bounds.width,T=this.bounds.height,R=-C*this.anchor.x;let P=0;return _.x>=R&&_.x<=R+C&&(P=-T*this.anchor.y,_.y>=P&&_.y<=P+T)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}destroy(_=!1){super.destroy(_),this.owner=null,this._bounds=null,this._anchor=null,(typeof _=="boolean"?_:_!=null&&_.style)&&this._style.destroy(_),this._style=null,this._text=null}get styleKey(){return`${this._text}:${this._style.styleKey}:${this._resolution}`}}function ensureTextOptions(A,_){let C=A[0]??{};return(typeof C=="string"||A[1])&&(deprecation(v8_0_0,`use new ${_}({ text: "hi!", style }) instead`),C={text:C,style:A[1]}),C}let _internalCanvas=null,_internalContext=null;function ensureInternalCanvas(A,_){_internalCanvas||(_internalCanvas=DOMAdapter.get().createCanvas(256,128),_internalContext=_internalCanvas.getContext("2d",{willReadFrequently:!0}),_internalContext.globalCompositeOperation="copy",_internalContext.globalAlpha=1),(_internalCanvas.width<A||_internalCanvas.height<_)&&(_internalCanvas.width=nextPow2(A),_internalCanvas.height=nextPow2(_))}function checkRow(A,_,C){for(let T=0,R=4*C*_;T<_;++T,R+=4)if(A[R+3]!==0)return!1;return!0}function checkColumn(A,_,C,T,R){const P=4*_;for(let I=T,E=T*P+4*C;I<=R;++I,E+=P)if(A[E+3]!==0)return!1;return!0}function getCanvasBoundingBox(...A){let _=A[0];_.canvas||(_={canvas:A[0],resolution:A[1]});const{canvas:C}=_,T=Math.min(_.resolution??1,1),R=_.width??C.width,P=_.height??C.height;let I=_.output;if(ensureInternalCanvas(R,P),!_internalContext)throw new TypeError("Failed to get canvas 2D context");_internalContext.drawImage(C,0,0,R,P,0,0,R*T,P*T);const B=_internalContext.getImageData(0,0,R,P).data;let O=0,G=0,L=R-1,F=P-1;for(;G<P&&checkRow(B,R,G);)++G;if(G===P)return Rectangle.EMPTY;for(;checkRow(B,R,F);)--F;for(;checkColumn(B,R,O,G,F);)++O;for(;checkColumn(B,R,L,G,F);)--L;return++L,++F,_internalContext.globalCompositeOperation="source-over",_internalContext.strokeRect(O,G,L-O,F-G),_internalContext.globalCompositeOperation="copy",I??(I=new Rectangle),I.set(O/T,G/T,(L-O)/T,(F-G)/T),I}/**
 * tiny-lru
 *
 * @copyright 2026 Jason Mulligan <jason.mulligan@avoidwork.com>
 * @license BSD-3-Clause
 * @version 11.4.7
 */class LRU{constructor(_=0,C=0,T=!1){this.first=null,this.items=Object.create(null),this.last=null,this.max=_,this.resetTtl=T,this.size=0,this.ttl=C}clear(){return this.first=null,this.items=Object.create(null),this.last=null,this.size=0,this}delete(_){if(this.has(_)){const C=this.items[_];delete this.items[_],this.size--,C.prev!==null&&(C.prev.next=C.next),C.next!==null&&(C.next.prev=C.prev),this.first===C&&(this.first=C.next),this.last===C&&(this.last=C.prev)}return this}entries(_=this.keys()){const C=new Array(_.length);for(let T=0;T<_.length;T++){const R=_[T];C[T]=[R,this.get(R)]}return C}evict(_=!1){if(_||this.size>0){const C=this.first;delete this.items[C.key],--this.size===0?(this.first=null,this.last=null):(this.first=C.next,this.first.prev=null)}return this}expiresAt(_){let C;return this.has(_)&&(C=this.items[_].expiry),C}get(_){const C=this.items[_];if(C!==void 0){if(this.ttl>0&&C.expiry<=Date.now()){this.delete(_);return}return this.moveToEnd(C),C.value}}has(_){return _ in this.items}moveToEnd(_){this.last!==_&&(_.prev!==null&&(_.prev.next=_.next),_.next!==null&&(_.next.prev=_.prev),this.first===_&&(this.first=_.next),_.prev=this.last,_.next=null,this.last!==null&&(this.last.next=_),this.last=_,this.first===null&&(this.first=_))}keys(){const _=new Array(this.size);let C=this.first,T=0;for(;C!==null;)_[T++]=C.key,C=C.next;return _}setWithEvicted(_,C,T=this.resetTtl){let R=null;if(this.has(_))this.set(_,C,!0,T);else{this.max>0&&this.size===this.max&&(R={...this.first},this.evict(!0));let P=this.items[_]={expiry:this.ttl>0?Date.now()+this.ttl:this.ttl,key:_,prev:this.last,next:null,value:C};++this.size===1?this.first=P:this.last.next=P,this.last=P}return R}set(_,C,T=!1,R=this.resetTtl){let P=this.items[_];return T||P!==void 0?(P.value=C,T===!1&&R&&(P.expiry=this.ttl>0?Date.now()+this.ttl:this.ttl),this.moveToEnd(P)):(this.max>0&&this.size===this.max&&this.evict(!0),P=this.items[_]={expiry:this.ttl>0?Date.now()+this.ttl:this.ttl,key:_,prev:this.last,next:null,value:C},++this.size===1?this.first=P:this.last.next=P,this.last=P),this}values(_=this.keys()){const C=new Array(_.length);for(let T=0;T<_.length;T++)C[T]=this.get(_[T]);return C}}function lru(A=1e3,_=0,C=!1){if(isNaN(A)||A<0)throw new TypeError("Invalid max value");if(isNaN(_)||_<0)throw new TypeError("Invalid ttl value");if(typeof C!="boolean")throw new TypeError("Invalid resetTtl value");return new LRU(A,_,C)}function hasTagStyles(A){return!!A.tagStyles&&Object.keys(A.tagStyles).length>0}function hasTagMarkup(A){return A.includes("<")}function createMergedStyle(A,_){return A.clone().assign(_)}function parseTaggedText(A,_){const C=[],T=_.tagStyles;if(!hasTagStyles(_)||!hasTagMarkup(A))return C.push({text:A,style:_}),C;const R=[_],P=[];let I="",E=0;for(;E<A.length;){const B=A[E];if(B==="<"){const O=A.indexOf(">",E);if(O===-1){I+=B,E++;continue}const G=A.indexOf("<",E+1);if(G!==-1&&G<O){I+=B,E++;continue}const L=A.slice(E+1,O);if(L.startsWith("/")){const F=L.slice(1).trim();if(P.length>0&&P[P.length-1]===F){I.length>0&&(C.push({text:I,style:R[R.length-1]}),I=""),R.pop(),P.pop(),E=O+1;continue}else{I+=A.slice(E,O+1),E=O+1;continue}}else{const F=L.trim();if(T[F]){I.length>0&&(C.push({text:I,style:R[R.length-1]}),I="");const D=R[R.length-1],q=createMergedStyle(D,T[F]);R.push(q),P.push(F),E=O+1;continue}else{I+=A.slice(E,O+1),E=O+1;continue}}}else I+=B,E++}return I.length>0&&C.push({text:I,style:R[R.length-1]}),C}const NEWLINES=[10,13],NEWLINES_SET=new Set(NEWLINES),BREAKING_SPACES=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288],BREAKING_SPACES_SET=new Set(BREAKING_SPACES),COLLAPSIBLE_SPACES=[9,32],COLLAPSIBLE_SPACES_SET=new Set(COLLAPSIBLE_SPACES),BREAK_AFTER_CHARS=[45,8208,8211,8212,173],BREAK_AFTER_CHARS_SET=new Set(BREAK_AFTER_CHARS),NEWLINE_SPLIT_REGEX=/(\r\n|\r|\n)/,NEWLINE_MATCH_REGEX=/(?:\r\n|\r|\n)/;function isNewline(A){return typeof A!="string"?!1:NEWLINES_SET.has(A.charCodeAt(0))}function isBreakingSpace(A,_){return typeof A!="string"?!1:BREAKING_SPACES_SET.has(A.charCodeAt(0))}function isCollapsibleSpace(A){return typeof A!="string"?!1:COLLAPSIBLE_SPACES_SET.has(A.charCodeAt(0))}function isBreakAfterChar(A){return typeof A!="string"?!1:BREAK_AFTER_CHARS_SET.has(A.charCodeAt(0))}function collapseSpaces(A){return A==="normal"||A==="pre-line"}function collapseNewlines(A){return A==="normal"}function trimRight(A){if(typeof A!="string")return"";let _=A.length-1;for(;_>=0&&isBreakingSpace(A[_]);)_--;return _<A.length-1?A.slice(0,_+1):A}function tokenize(A){const _=[],C=[];if(typeof A!="string")return _;for(let T=0;T<A.length;T++){const R=A[T],P=A[T+1];if(isBreakingSpace(R)||isNewline(R)){C.length>0&&(_.push(C.join("")),C.length=0),R==="\r"&&P===`
`?(_.push(`\r
`),T++):_.push(R);continue}C.push(R),isBreakAfterChar(R)&&P&&!isBreakingSpace(P)&&!isNewline(P)&&(_.push(C.join("")),C.length=0)}return C.length>0&&_.push(C.join("")),_}function getCharacterGroups(A,_,C,T){const R=C(A),P=[];for(let I=0;I<R.length;I++){let E=R[I],B=E,O=1;for(;R[I+O];){const G=R[I+O];if(!T(B,G,A,I,_))E+=G,B=G,O++;else break}I+=O-1,P.push(E)}return P}const NEWLINE_TO_SPACE_REGEX=/\r\n|\r|\n/g;function measureTaggedText(A,_,C,T,R,P,I,E,B){var it,mt;const O=parseTaggedText(A,_);if(collapseNewlines(_.whiteSpace))for(let nt=0;nt<O.length;nt++){const st=O[nt];O[nt]={text:st.text.replace(NEWLINE_TO_SPACE_REGEX," "),style:st.style}}const L=[];let F=[];for(const nt of O){const st=nt.text.split(NEWLINE_SPLIT_REGEX);for(let xt=0;xt<st.length;xt++){const dt=st[xt];dt===`\r
`||dt==="\r"||dt===`
`?(L.push(F),F=[]):dt.length>0&&F.push({text:dt,style:nt.style})}}(F.length>0||L.length===0)&&L.push(F);const D=C?wordWrapTaggedLines(L,_,T,P,E,B):L,q=[],U=[],V=[],W=[],z=[];let X=0;const Y=_._fontString,Q=I(Y);Q.fontSize===0&&(Q.fontSize=_.fontSize,Q.ascent=_.fontSize);let J="",Z=!!_.dropShadow,ut=((it=_._stroke)==null?void 0:it.width)||0;for(const nt of D){let st=0,xt=Q.ascent,dt=Q.descent,yt="";for(const gt of nt){const Ct=gt.style._fontString,ft=I(Ct);Ct!==J&&(T.font=Ct,J=Ct);const At=R(gt.text,gt.style.letterSpacing,T);st+=At,xt=Math.max(xt,ft.ascent),dt=Math.max(dt,ft.descent),yt+=gt.text;const Mt=((mt=gt.style._stroke)==null?void 0:mt.width)||0;Mt>ut&&(ut=Mt),!Z&&gt.style.dropShadow&&(Z=!0)}nt.length===0&&(xt=Q.ascent,dt=Q.descent),q.push(st),U.push(xt),V.push(dt),z.push(yt);const vt=_.lineHeight||xt+dt;W.push(vt+_.leading),X=Math.max(X,st)}const rt=ut,et=X+rt+(_.dropShadow?_.dropShadow.distance:0);let tt=0;for(let nt=0;nt<W.length;nt++)tt+=W[nt];tt=Math.max(tt,W[0]+rt);const lt=tt+(_.dropShadow?_.dropShadow.distance:0),ht=_.lineHeight||Q.fontSize;return{width:et,height:lt,lines:z,lineWidths:q,lineHeight:ht+_.leading,maxLineWidth:X,fontProperties:Q,runsByLine:D,lineAscents:U,lineDescents:V,lineHeights:W,hasDropShadow:Z}}function wordWrapTaggedLines(A,_,C,T,R,P){var V;const{letterSpacing:I,whiteSpace:E,wordWrapWidth:B,breakWords:O}=_,G=collapseSpaces(E),L=B+I,F={};let D="";const q=(W,z)=>{const X=`${W}|${z.styleKey}`;let Y=F[X];if(Y===void 0){const Q=z._fontString;Q!==D&&(C.font=Q,D=Q),Y=T(W,z.letterSpacing,C)+z.letterSpacing,F[X]=Y}return Y},U=[];for(const W of A){const z=tokenizeTaggedRuns(W),X=U.length,Y=lt=>{let ht=0,it=lt;do{const{token:mt,style:nt}=z[it];ht+=q(mt,nt),it++}while(it<z.length&&z[it].continuesFromPrevious);return ht},Q=lt=>{const ht=[];let it=lt;do ht.push({token:z[it].token,style:z[it].style}),it++;while(it<z.length&&z[it].continuesFromPrevious);return ht};let J=[],Z=0,ut=!G,rt=null;const et=()=>{rt&&rt.text.length>0&&J.push(rt),rt=null},tt=()=>{if(et(),J.length>0){const lt=J[J.length-1];lt.text=trimRight(lt.text),lt.text.length===0&&J.pop()}U.push(J),J=[],Z=0,ut=!1};for(let lt=0;lt<z.length;lt++){const{token:ht,style:it,continuesFromPrevious:mt}=z[lt],nt=q(ht,it);if(G){const dt=isBreakingSpace(ht),yt=(rt==null?void 0:rt.text[rt.text.length-1])??((V=J[J.length-1])==null?void 0:V.text.slice(-1))??"",vt=yt?isBreakingSpace(yt):!1;if(dt&&vt)continue}const st=!mt,xt=st?Y(lt):nt;if(xt>L&&st)if(Z>0&&tt(),O){const dt=Q(lt);for(let yt=0;yt<dt.length;yt++){const vt=dt[yt].token,gt=dt[yt].style,Ct=getCharacterGroups(vt,O,P,R);for(const ft of Ct){const At=q(ft,gt);At+Z>L&&tt(),!rt||rt.style!==gt?(et(),rt={text:ft,style:gt}):rt.text+=ft,Z+=At}}lt+=dt.length-1}else{const dt=Q(lt);et(),U.push(dt.map(yt=>({text:yt.token,style:yt.style}))),ut=!1,lt+=dt.length-1}else if(xt+Z>L&&st){if(isBreakingSpace(ht)){ut=!1;continue}tt(),rt={text:ht,style:it},Z=nt}else if(mt&&!O)!rt||rt.style!==it?(et(),rt={text:ht,style:it}):rt.text+=ht,Z+=nt;else{const dt=isBreakingSpace(ht);if(Z===0&&dt&&!ut)continue;!rt||rt.style!==it?(et(),rt={text:ht,style:it}):rt.text+=ht,Z+=nt}}if(et(),J.length>0){const lt=J[J.length-1];lt.text=trimRight(lt.text),lt.text.length===0&&J.pop()}(J.length>0||U.length===X)&&U.push(J)}return U}function tokenizeTaggedRuns(A){const _=[];let C=!1;for(const T of A){const R=tokenize(T.text);let P=!0;for(const I of R){const E=isBreakingSpace(I)||isNewline(I),B=P&&C&&!E;_.push({token:I,style:T.style,continuesFromPrevious:B}),C=!E,P=!1}}return _}const contextSettings$1={willReadFrequently:!0};function getFromCache(A,_,C,T,R){let P=C[A];return typeof P!="number"&&(P=R(A,_,T)+_,C[A]=P),P}function wordWrap(A,_,C,T,R,P,I){const E=C.getContext("2d",contextSettings$1);E.font=_._fontString;let B=0,O="";const G=[],L=Object.create(null),{letterSpacing:F,whiteSpace:D}=_,q=collapseSpaces(D),U=collapseNewlines(D);let V=!q;const W=_.wordWrapWidth+F,z=tokenize(A);for(let Y=0;Y<z.length;Y++){let Q=z[Y];if(isNewline(Q)){if(!U){G.push(trimRight(O)),V=!q,O="",B=0;continue}Q=" "}if(q){const Z=isBreakingSpace(Q),ut=isBreakingSpace(O[O.length-1]);if(Z&&ut)continue}const J=getFromCache(Q,F,L,E,T);if(J>W)if(O!==""&&(G.push(trimRight(O)),O="",B=0),R(Q,_.breakWords)){const Z=getCharacterGroups(Q,_.breakWords,I,P);for(const ut of Z){const rt=getFromCache(ut,F,L,E,T);rt+B>W&&(G.push(trimRight(O)),V=!1,O="",B=0),O+=ut,B+=rt}}else O.length>0&&(G.push(trimRight(O)),O="",B=0),G.push(trimRight(Q)),V=!1,O="",B=0;else J+B>W&&(V=!1,G.push(trimRight(O)),O="",B=0),(O.length>0||!isBreakingSpace(Q)||V)&&(O+=Q,B+=J)}const X=trimRight(O);return X.length>0&&G.push(X),G.join(`
`)}const contextSettings={willReadFrequently:!0},_CanvasTextMetrics=class wt{static get experimentalLetterSpacingSupported(){let _=wt._experimentalLetterSpacingSupported;if(_===void 0){const C=DOMAdapter.get().getCanvasRenderingContext2D().prototype;_=wt._experimentalLetterSpacingSupported="letterSpacing"in C||"textLetterSpacing"in C}return _}constructor(_,C,T,R,P,I,E,B,O,G){this.text=_,this.style=C,this.width=T,this.height=R,this.lines=P,this.lineWidths=I,this.lineHeight=E,this.maxLineWidth=B,this.fontProperties=O,G&&(this.runsByLine=G.runsByLine,this.lineAscents=G.lineAscents,this.lineDescents=G.lineDescents,this.lineHeights=G.lineHeights,this.hasDropShadow=G.hasDropShadow)}static measureText(_=" ",C,T=wt._canvas,R=C.wordWrap){var Y;const P=`${_}-${C.styleKey}-wordWrap-${R}`;if(wt._measurementCache.has(P))return wt._measurementCache.get(P);if(hasTagStyles(C)&&hasTagMarkup(_)){const Q=measureTaggedText(_,C,R,wt._context,wt._measureText,wt._measureTextAdvance,wt.measureFont,wt.canBreakChars,wt.wordWrapSplit),J=new wt(_,C,Q.width,Q.height,Q.lines,Q.lineWidths,Q.lineHeight,Q.maxLineWidth,Q.fontProperties,{runsByLine:Q.runsByLine,lineAscents:Q.lineAscents,lineDescents:Q.lineDescents,lineHeights:Q.lineHeights,hasDropShadow:Q.hasDropShadow});return wt._measurementCache.set(P,J),J}const E=C._fontString,B=wt.measureFont(E);B.fontSize===0&&(B.fontSize=C.fontSize,B.ascent=C.fontSize,B.descent=0);const O=wt._context;O.font=E;const L=(R?wt._wordWrap(_,C,T):_).split(NEWLINE_MATCH_REGEX),F=new Array(L.length);let D=0;for(let Q=0;Q<L.length;Q++){const J=wt._measureText(L[Q],C.letterSpacing,O);F[Q]=J,D=Math.max(D,J)}const q=((Y=C._stroke)==null?void 0:Y.width)??0,U=C.lineHeight||B.fontSize,V=wt._adjustWidthForStyle(D,C),W=Math.max(U,B.fontSize+q)+(L.length-1)*(U+C.leading),z=wt._adjustHeightForStyle(W,C),X=new wt(_,C,V,z,L,F,U+C.leading,D,B);return wt._measurementCache.set(P,X),X}static _adjustWidthForStyle(_,C){var P;const T=((P=C._stroke)==null?void 0:P.width)||0;let R=_+T;return C.dropShadow&&(R+=C.dropShadow.distance),R}static _adjustHeightForStyle(_,C){let T=_;return C.dropShadow&&(T+=C.dropShadow.distance),T}static _measureText(_,C,T){const{metricWidth:R,metrics:P,letterSpacingVal:I}=wt._measureTextCore(_,C,T),E=-(P.actualBoundingBoxLeft??0);let O=(P.actualBoundingBoxRight??0)-E;return P.width>0&&(O+=I),Math.max(R,O)}static _measureTextAdvance(_,C,T){return wt._measureTextCore(_,C,T).metricWidth}static _measureTextCore(_,C,T){let R=!1;wt.experimentalLetterSpacingSupported&&(wt.experimentalLetterSpacing?(T.letterSpacing=`${C}px`,T.textLetterSpacing=`${C}px`,R=!0):(T.letterSpacing="0px",T.textLetterSpacing="0px"));const P=T.measureText(_);let I=P.width,E=0;return I>0&&(R?E=-C:E=(wt.graphemeSegmenter(_).length-1)*C,I+=E),{metricWidth:I,metrics:P,letterSpacingVal:E}}static _wordWrap(_,C,T=wt._canvas){return wordWrap(_,C,T,wt._measureTextAdvance,wt.canBreakWords,wt.canBreakChars,wt.wordWrapSplit)}static isBreakingSpace(_,C){return isBreakingSpace(_)}static canBreakWords(_,C){return C}static canBreakChars(_,C,T,R,P){return!0}static wordWrapSplit(_){return wt.graphemeSegmenter(_)}static measureFont(_){if(wt._fonts[_])return wt._fonts[_];const C=wt._context;C.font=_;const T=C.measureText(wt.METRICS_STRING+wt.BASELINE_SYMBOL),R=T.actualBoundingBoxAscent??0,P=T.actualBoundingBoxDescent??0,I={ascent:R,descent:P,fontSize:R+P};return wt._fonts[_]=I,I}static clearMetrics(_=""){_?delete wt._fonts[_]:wt._fonts={}}static get _canvas(){if(!wt.__canvas){let _;try{const C=new OffscreenCanvas(0,0),T=C.getContext("2d",contextSettings);if(T!=null&&T.measureText)return wt.__canvas=C,C;_=DOMAdapter.get().createCanvas()}catch{_=DOMAdapter.get().createCanvas()}_.width=_.height=10,wt.__canvas=_}return wt.__canvas}static get _context(){return wt.__context||(wt.__context=wt._canvas.getContext("2d",contextSettings)),wt.__context}};_CanvasTextMetrics.METRICS_STRING="|ÉqÅ";_CanvasTextMetrics.BASELINE_SYMBOL="M";_CanvasTextMetrics.BASELINE_MULTIPLIER=1.4;_CanvasTextMetrics.HEIGHT_MULTIPLIER=2;_CanvasTextMetrics.graphemeSegmenter=(()=>{if(typeof(Intl==null?void 0:Intl.Segmenter)=="function"){const A=new Intl.Segmenter;return _=>{const C=A.segment(_),T=[];let R=0;for(const P of C)T[R++]=P.segment;return T}}return A=>[...A]})();_CanvasTextMetrics.experimentalLetterSpacing=!1;_CanvasTextMetrics._fonts={};_CanvasTextMetrics._measurementCache=lru(1e3);let CanvasTextMetrics=_CanvasTextMetrics;const genericFontFamilies=["serif","sans-serif","monospace","cursive","fantasy","system-ui"];function fontStringFromTextStyle(A){const _=typeof A.fontSize=="number"?`${A.fontSize}px`:A.fontSize;let C=A.fontFamily;Array.isArray(A.fontFamily)||(C=A.fontFamily.split(","));for(let T=C.length-1;T>=0;T--){let R=C[T].trim();!/([\"\'])[^\'\"]+\1/.test(R)&&!genericFontFamilies.includes(R)&&(R=`"${R}"`),C[T]=R}return`${A.fontStyle} ${A.fontVariant} ${A.fontWeight} ${_} ${C.join(",")}`}const PRECISION=1e5;function getCanvasFillStyle(A,_,C,T=0,R=0,P=0){if(A.texture===Texture.WHITE&&!A.fill)return Color.shared.setValue(A.color).setAlpha(A.alpha??1).toHexa();if(A.fill){if(A.fill instanceof FillPattern){const I=A.fill,E=_.createPattern(I.texture.source.resource,"repeat");return canvasUtils.applyPatternTransform(E,I.transform,!1),E}else if(A.fill instanceof FillGradient){const I=A.fill,E=I.type==="linear",B=I.textureSpace==="local";let O=1,G=1;B&&C&&(O=C.width+T,G=C.height+T);let L,F=!1;if(E){const{start:D,end:q}=I;L=_.createLinearGradient(D.x*O+R,D.y*G+P,q.x*O+R,q.y*G+P),F=Math.abs(q.x-D.x)<Math.abs((q.y-D.y)*.1)}else{const{center:D,innerRadius:q,outerCenter:U,outerRadius:V}=I;L=_.createRadialGradient(D.x*O+R,D.y*G+P,q*O,U.x*O+R,U.y*G+P,V*O)}if(F&&B&&C){const D=C.lineHeight/G;for(let q=0;q<C.lines.length;q++){const U=(q*C.lineHeight+T/2)/G;I.colorStops.forEach(V=>{let W=U+V.offset*D;W=Math.max(0,Math.min(1,W)),L.addColorStop(Math.floor(W*PRECISION)/PRECISION,Color.shared.setValue(V.color).toHex())})}}else I.colorStops.forEach(D=>{L.addColorStop(D.offset,Color.shared.setValue(D.color).toHex())});return L}}else{const I=_.createPattern(A.texture.source.resource,"repeat"),E=A.matrix.copyTo(Matrix.shared);return E.scale(A.texture.source.pixelWidth,A.texture.source.pixelHeight),I.setTransform(E),I}return warn("FillStyle not recognised",A),"red"}const tempRect=new Rectangle;function countSpaces(A){let _=0;for(let C=0;C<A.length;C++)A.charCodeAt(C)===32&&_++;return _}class CanvasTextGeneratorClass{getCanvasAndContext(_){const{text:C,style:T,resolution:R=1}=_,P=T._getFinalPadding(),I=CanvasTextMetrics.measureText(C||" ",T),E=Math.ceil(Math.ceil(Math.max(1,I.width)+P*2)*R),B=Math.ceil(Math.ceil(Math.max(1,I.height)+P*2)*R),O=CanvasPool.getOptimalCanvasAndContext(E,B);this._renderTextToCanvas(T,P,R,O,I);const G=T.trim?getCanvasBoundingBox({canvas:O.canvas,width:E,height:B,resolution:1,output:tempRect}):tempRect.set(0,0,E,B);return{canvasAndContext:O,frame:G}}returnCanvasAndContext(_){CanvasPool.returnCanvasAndContext(_)}_renderTextToCanvas(_,C,T,R,P){var Q,J,Z;if(P.runsByLine&&P.runsByLine.length>0){this._renderTaggedTextToCanvas(P,_,C,T,R);return}const{canvas:I,context:E}=R,B=fontStringFromTextStyle(_),O=P.lines,G=P.lineHeight,L=P.lineWidths,F=P.maxLineWidth,D=P.fontProperties,q=I.height;if(E.resetTransform(),E.scale(T,T),E.textBaseline=_.textBaseline,(Q=_._stroke)!=null&&Q.width){const ut=_._stroke;E.lineWidth=ut.width,E.miterLimit=ut.miterLimit,E.lineJoin=ut.join,E.lineCap=ut.cap}E.font=B;let U,V;const W=_.dropShadow?2:1,X=(((J=_._stroke)==null?void 0:J.width)??0)/2;let Y=(G-D.fontSize)/2;G-D.fontSize<0&&(Y=0);for(let ut=0;ut<W;++ut){const rt=_.dropShadow&&ut===0,et=rt?Math.ceil(Math.max(1,q)+C*2):0,tt=et*T;if(rt)this._setupDropShadow(E,_,T,tt);else{const lt=_._gradientBounds,ht=_._gradientOffset;if(lt){const it={width:lt.width,height:lt.height,lineHeight:lt.height,lines:P.lines};this._setFillAndStrokeStyles(E,_,it,C,X,(ht==null?void 0:ht.x)??0,(ht==null?void 0:ht.y)??0)}else ht?this._setFillAndStrokeStyles(E,_,P,C,X,ht.x,ht.y):this._setFillAndStrokeStyles(E,_,P,C,X);E.shadowColor="rgba(0,0,0,0)"}for(let lt=0;lt<O.length;lt++){U=X,V=X+lt*G+D.ascent+Y,U+=this._getAlignmentOffset(L[lt],F,_.align);let ht=0;if(_.align==="justify"&&_.wordWrap&&lt<O.length-1){const it=countSpaces(O[lt]);it>0&&(ht=(F-L[lt])/it)}(Z=_._stroke)!=null&&Z.width&&this._drawLetterSpacing(O[lt],_,R,U+C,V+C-et,!0,ht),_._fill!==void 0&&this._drawLetterSpacing(O[lt],_,R,U+C,V+C-et,!1,ht)}}}_renderTaggedTextToCanvas(_,C,T,R,P){var X,Y,Q;const{canvas:I,context:E}=P,{runsByLine:B,lineWidths:O,maxLineWidth:G,lineAscents:L,lineHeights:F,hasDropShadow:D}=_,q=I.height;E.resetTransform(),E.scale(R,R),E.textBaseline=C.textBaseline;const U=D?2:1;let V=((X=C._stroke)==null?void 0:X.width)??0;for(const J of B)for(const Z of J){const ut=((Y=Z.style._stroke)==null?void 0:Y.width)??0;ut>V&&(V=ut)}const W=V/2,z=[];for(let J=0;J<B.length;J++){const Z=B[J],ut=[];for(const rt of Z){const et=fontStringFromTextStyle(rt.style);E.font=et,ut.push({width:CanvasTextMetrics._measureText(rt.text,rt.style.letterSpacing,E),font:et})}z.push(ut)}for(let J=0;J<U;++J){const Z=D&&J===0,ut=Z?Math.ceil(Math.max(1,q)+T*2):0,rt=ut*R;Z||(E.shadowColor="rgba(0,0,0,0)");let et=W;for(let tt=0;tt<B.length;tt++){const lt=B[tt],ht=O[tt],it=L[tt],mt=F[tt],nt=z[tt];let st=W;st+=this._getAlignmentOffset(ht,G,C.align);let xt=0;if(C.align==="justify"&&C.wordWrap&&tt<B.length-1){let vt=0;for(const gt of lt)vt+=countSpaces(gt.text);vt>0&&(xt=(G-ht)/vt)}const dt=et+it;let yt=st+T;for(let vt=0;vt<lt.length;vt++){const gt=lt[vt],{width:Ct,font:ft}=nt[vt];if(E.font=ft,E.textBaseline=gt.style.textBaseline,(Q=gt.style._stroke)!=null&&Q.width){const Mt=gt.style._stroke;if(E.lineWidth=Mt.width,E.miterLimit=Mt.miterLimit,E.lineJoin=Mt.join,E.lineCap=Mt.cap,Z)if(gt.style.dropShadow)this._setupDropShadow(E,gt.style,R,rt);else{const Tt=countSpaces(gt.text);yt+=Ct+Tt*xt;continue}else{const Tt=CanvasTextMetrics.measureFont(ft),kt=gt.style.lineHeight||Tt.fontSize,Rt={width:Ct,height:kt,lineHeight:kt,lines:[gt.text]};E.strokeStyle=getCanvasFillStyle(Mt,E,Rt,T*2,yt-T,et)}this._drawLetterSpacing(gt.text,gt.style,P,yt,dt+T-ut,!0,xt)}const At=countSpaces(gt.text);yt+=Ct+At*xt}yt=st+T;for(let vt=0;vt<lt.length;vt++){const gt=lt[vt],{width:Ct,font:ft}=nt[vt];if(E.font=ft,E.textBaseline=gt.style.textBaseline,gt.style._fill!==void 0){if(Z)if(gt.style.dropShadow)this._setupDropShadow(E,gt.style,R,rt);else{const Mt=countSpaces(gt.text);yt+=Ct+Mt*xt;continue}else{const Mt=CanvasTextMetrics.measureFont(ft),Tt=gt.style.lineHeight||Mt.fontSize,kt={width:Ct,height:Tt,lineHeight:Tt,lines:[gt.text]};E.fillStyle=getCanvasFillStyle(gt.style._fill,E,kt,T*2,yt-T,et)}this._drawLetterSpacing(gt.text,gt.style,P,yt,dt+T-ut,!1,xt)}const At=countSpaces(gt.text);yt+=Ct+At*xt}et+=mt}}}_setFillAndStrokeStyles(_,C,T,R,P,I=0,E=0){var B;if(_.fillStyle=C._fill?getCanvasFillStyle(C._fill,_,T,R*2,I,E):null,(B=C._stroke)!=null&&B.width){const O=P+R*2;_.strokeStyle=getCanvasFillStyle(C._stroke,_,T,O,I,E)}}_setupDropShadow(_,C,T,R){_.fillStyle="black",_.strokeStyle="black";const P=C.dropShadow,I=P.color,E=P.alpha;_.shadowColor=Color.shared.setValue(I).setAlpha(E).toRgbaString();const B=P.blur*T,O=P.distance*T;_.shadowBlur=B,_.shadowOffsetX=Math.cos(P.angle)*O,_.shadowOffsetY=Math.sin(P.angle)*O+R}_getAlignmentOffset(_,C,T){return T==="right"?C-_:T==="center"?(C-_)/2:0}_drawLetterSpacing(_,C,T,R,P,I=!1,E=0){const{context:B}=T,O=C.letterSpacing;let G=!1;if(CanvasTextMetrics.experimentalLetterSpacingSupported&&(CanvasTextMetrics.experimentalLetterSpacing?(B.letterSpacing=`${O}px`,B.textLetterSpacing=`${O}px`,G=!0):(B.letterSpacing="0px",B.textLetterSpacing="0px")),(O===0||G)&&E===0){I?B.strokeText(_,R,P):B.fillText(_,R,P);return}if(E!==0&&(O===0||G)){const U=_.split(" ");let V=R;const W=B.measureText(" ").width;for(let z=0;z<U.length;z++)I?B.strokeText(U[z],V,P):B.fillText(U[z],V,P),V+=B.measureText(U[z]).width+W+E;return}let L=R;const F=CanvasTextMetrics.graphemeSegmenter(_);let D=B.measureText(_).width,q=0;for(let U=0;U<F.length;++U){const V=F[U];I?B.strokeText(V,L,P):B.fillText(V,L,P);let W="";for(let z=U+1;z<F.length;++z)W+=F[z];q=B.measureText(W).width,L+=D-q+O,V===" "&&(L+=E),D=q}}}const CanvasTextGenerator=new CanvasTextGeneratorClass,_TextStyle=class Ht extends EventEmitter{constructor(_={}){super(),this.uid=uid("textStyle"),this._tick=0,this._cachedFontString=null,convertV7Tov8Style(_),_ instanceof Ht&&(_=_._toObject());const R={...Ht.defaultTextStyle,..._};for(const P in R){const I=P;this[I]=R[P]}this._tagStyles=_.tagStyles??void 0,this.update(),this._tick=0}get align(){return this._align}set align(_){this._align!==_&&(this._align=_,this.update())}get breakWords(){return this._breakWords}set breakWords(_){this._breakWords!==_&&(this._breakWords=_,this.update())}get dropShadow(){return this._dropShadow}set dropShadow(_){this._dropShadow!==_&&(_!==null&&typeof _=="object"?this._dropShadow=this._createProxy({...Ht.defaultDropShadow,..._}):this._dropShadow=_?this._createProxy({...Ht.defaultDropShadow}):null,this.update())}get fontFamily(){return this._fontFamily}set fontFamily(_){this._fontFamily!==_&&(this._fontFamily=_,this.update())}get fontSize(){return this._fontSize}set fontSize(_){this._fontSize!==_&&(typeof _=="string"?this._fontSize=parseInt(_,10):this._fontSize=_,this.update())}get fontStyle(){return this._fontStyle}set fontStyle(_){this._fontStyle!==_&&(this._fontStyle=_.toLowerCase(),this.update())}get fontVariant(){return this._fontVariant}set fontVariant(_){this._fontVariant!==_&&(this._fontVariant=_,this.update())}get fontWeight(){return this._fontWeight}set fontWeight(_){this._fontWeight!==_&&(this._fontWeight=_,this.update())}get leading(){return this._leading}set leading(_){this._leading!==_&&(this._leading=_,this.update())}get letterSpacing(){return this._letterSpacing}set letterSpacing(_){this._letterSpacing!==_&&(this._letterSpacing=_,this.update())}get lineHeight(){return this._lineHeight}set lineHeight(_){this._lineHeight!==_&&(this._lineHeight=_,this.update())}get padding(){return this._padding}set padding(_){this._padding!==_&&(this._padding=_,this.update())}get filters(){return this._filters}set filters(_){this._filters!==_&&(this._filters=Object.freeze(_),this.update())}get trim(){return this._trim}set trim(_){this._trim!==_&&(this._trim=_,this.update())}get textBaseline(){return this._textBaseline}set textBaseline(_){this._textBaseline!==_&&(this._textBaseline=_,this.update())}get whiteSpace(){return this._whiteSpace}set whiteSpace(_){this._whiteSpace!==_&&(this._whiteSpace=_,this.update())}get wordWrap(){return this._wordWrap}set wordWrap(_){this._wordWrap!==_&&(this._wordWrap=_,this.update())}get wordWrapWidth(){return this._wordWrapWidth}set wordWrapWidth(_){this._wordWrapWidth!==_&&(this._wordWrapWidth=_,this.update())}get fill(){return this._originalFill}set fill(_){_!==this._originalFill&&(this._originalFill=_,this._isFillStyle(_)&&(this._originalFill=this._createProxy({...GraphicsContext.defaultFillStyle,..._},()=>{this._fill=toFillStyle({...this._originalFill},GraphicsContext.defaultFillStyle)})),this._fill=toFillStyle(_===0?"black":_,GraphicsContext.defaultFillStyle),this.update())}get stroke(){return this._originalStroke}set stroke(_){_!==this._originalStroke&&(this._originalStroke=_,this._isFillStyle(_)&&(this._originalStroke=this._createProxy({...GraphicsContext.defaultStrokeStyle,..._},()=>{this._stroke=toStrokeStyle({...this._originalStroke},GraphicsContext.defaultStrokeStyle)})),this._stroke=toStrokeStyle(_,GraphicsContext.defaultStrokeStyle),this.update())}get tagStyles(){return this._tagStyles}set tagStyles(_){this._tagStyles!==_&&(this._tagStyles=_??void 0,this.update())}update(){this._tick++,this._cachedFontString=null,this.emit("update",this)}reset(){const _=Ht.defaultTextStyle;for(const C in _)this[C]=_[C]}assign(_){for(const C in _){const T=C;this[T]=_[C]}return this}get styleKey(){return`${this.uid}-${this._tick}`}get _fontString(){return this._cachedFontString===null&&(this._cachedFontString=fontStringFromTextStyle(this)),this._cachedFontString}_toObject(){return{align:this.align,breakWords:this.breakWords,dropShadow:this._dropShadow?{...this._dropShadow}:null,fill:this._fill?{...this._fill}:void 0,fontFamily:this.fontFamily,fontSize:this.fontSize,fontStyle:this.fontStyle,fontVariant:this.fontVariant,fontWeight:this.fontWeight,leading:this.leading,letterSpacing:this.letterSpacing,lineHeight:this.lineHeight,padding:this.padding,stroke:this._stroke?{...this._stroke}:void 0,textBaseline:this.textBaseline,trim:this.trim,whiteSpace:this.whiteSpace,wordWrap:this.wordWrap,wordWrapWidth:this.wordWrapWidth,filters:this._filters?[...this._filters]:void 0,tagStyles:this._tagStyles?{...this._tagStyles}:void 0}}clone(){return new Ht(this._toObject())}_getFinalPadding(){let _=0;if(this._filters)for(let C=0;C<this._filters.length;C++)_+=this._filters[C].padding;return Math.max(this._padding,_)}destroy(_=!1){var T,R,P,I;if(this.removeAllListeners(),typeof _=="boolean"?_:_==null?void 0:_.texture){const E=typeof _=="boolean"?_:_==null?void 0:_.textureSource;(T=this._fill)!=null&&T.texture&&this._fill.texture.destroy(E),(R=this._originalFill)!=null&&R.texture&&this._originalFill.texture.destroy(E),(P=this._stroke)!=null&&P.texture&&this._stroke.texture.destroy(E),(I=this._originalStroke)!=null&&I.texture&&this._originalStroke.texture.destroy(E)}this._fill=null,this._stroke=null,this.dropShadow=null,this._originalStroke=null,this._originalFill=null}_createProxy(_,C){return new Proxy(_,{set:(T,R,P)=>(T[R]===P||(T[R]=P,C==null||C(R,P),this.update()),!0)})}_isFillStyle(_){return(_??null)!==null&&!(Color.isColorLike(_)||_ instanceof FillGradient||_ instanceof FillPattern)}};_TextStyle.defaultDropShadow={alpha:1,angle:Math.PI/6,blur:0,color:"black",distance:5};_TextStyle.defaultTextStyle={align:"left",breakWords:!1,dropShadow:null,fill:"black",fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",leading:0,letterSpacing:0,lineHeight:0,padding:0,stroke:null,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100};let TextStyle=_TextStyle;function convertV7Tov8Style(A){const _=A;if(typeof _.dropShadow=="boolean"&&_.dropShadow){const C=TextStyle.defaultDropShadow;A.dropShadow={alpha:_.dropShadowAlpha??C.alpha,angle:_.dropShadowAngle??C.angle,blur:_.dropShadowBlur??C.blur,color:_.dropShadowColor??C.color,distance:_.dropShadowDistance??C.distance}}if(_.strokeThickness!==void 0){deprecation(v8_0_0,"strokeThickness is now a part of stroke");const C=_.stroke;let T={};if(Color.isColorLike(C))T.color=C;else if(C instanceof FillGradient||C instanceof FillPattern)T.fill=C;else if(Object.hasOwnProperty.call(C,"color")||Object.hasOwnProperty.call(C,"fill"))T=C;else throw new Error("Invalid stroke value.");A.stroke={...T,width:_.strokeThickness}}if(Array.isArray(_.fillGradientStops)){if(deprecation(v8_0_0,"gradient fill is now a fill pattern: `new FillGradient(...)`"),!Array.isArray(_.fill)||_.fill.length===0)throw new Error("Invalid fill value. Expected an array of colors for gradient fill.");_.fill.length!==_.fillGradientStops.length&&warn("The number of fill colors must match the number of fill gradient stops.");const C=new FillGradient({start:{x:0,y:0},end:{x:0,y:1},textureSpace:"local"}),T=_.fillGradientStops.slice(),R=_.fill.map(P=>Color.shared.setValue(P).toNumber());T.forEach((P,I)=>{C.addColorStop(P,R[I])}),A.fill={fill:C}}}function updateTextBounds(A,_){const{texture:C,bounds:T}=A,R=_._style._getFinalPadding();updateQuadBounds(T,_._anchor,C);const P=_._anchor._x*R*2,I=_._anchor._y*R*2;T.minX-=R-P,T.minY-=R-I,T.maxX-=R-P,T.maxY-=R-I}class BatchableSprite{constructor(){this.batcherName="default",this.topology="triangle-list",this.attributeSize=4,this.indexSize=6,this.packAsQuad=!0,this.roundPixels=0,this._attributeStart=0,this._batcher=null,this._batch=null}get blendMode(){return this.renderable.groupBlendMode}get color(){return this.renderable.groupColorAlpha}reset(){this.renderable=null,this.texture=null,this._batcher=null,this._batch=null,this.bounds=null}destroy(){this.reset()}}class BatchableText extends BatchableSprite{}class CanvasTextPipe{constructor(_){this._renderer=_,_.runners.resolutionChange.add(this),this._managedTexts=new GCManagedHash({renderer:_,type:"renderable",onUnload:this.onTextUnload.bind(this),name:"canvasText"})}resolutionChange(){for(const _ in this._managedTexts.items){const C=this._managedTexts.items[_];C!=null&&C._autoResolution&&C.onViewUpdate()}}validateRenderable(_){const C=this._getGpuText(_),T=_.styleKey;return C.currentKey!==T?!0:_._didTextUpdate}addRenderable(_,C){const T=this._getGpuText(_);if(_._didTextUpdate){const R=_._autoResolution?this._renderer.resolution:_.resolution;(T.currentKey!==_.styleKey||_._resolution!==R)&&this._updateGpuText(_),_._didTextUpdate=!1,updateTextBounds(T,_)}this._renderer.renderPipes.batch.addToBatch(T,C)}updateRenderable(_){const C=this._getGpuText(_);C._batcher.updateElement(C)}_updateGpuText(_){const C=this._getGpuText(_);C.texture&&this._renderer.canvasText.decreaseReferenceCount(C.currentKey),_._resolution=_._autoResolution?this._renderer.resolution:_.resolution,C.texture=this._renderer.canvasText.getManagedTexture(_),C.currentKey=_.styleKey}_getGpuText(_){return _._gpuData[this._renderer.uid]||this.initGpuText(_)}initGpuText(_){const C=new BatchableText;return C.currentKey="--",C.renderable=_,C.transform=_.groupTransform,C.bounds={minX:0,maxX:1,minY:0,maxY:0},C.roundPixels=this._renderer._roundPixels|_._roundPixels,_._gpuData[this._renderer.uid]=C,this._managedTexts.add(_),C}onTextUnload(_){const C=_._gpuData[this._renderer.uid];if(!C)return;const{canvasText:T}=this._renderer;T.getReferenceCount(C.currentKey)>0?T.decreaseReferenceCount(C.currentKey):C.texture&&T.returnTexture(C.texture)}destroy(){this._managedTexts.destroy(),this._renderer=null}}CanvasTextPipe.extension={type:[ExtensionType.WebGLPipes,ExtensionType.WebGPUPipes,ExtensionType.CanvasPipes],name:"text"};class AbstractTextSystem{constructor(_,C){this._activeTextures={},this._renderer=_,this._retainCanvasContext=C}getTexture(_,C,T,R){typeof _=="string"&&(deprecation("8.0.0","CanvasTextSystem.getTexture: Use object TextOptions instead of separate arguments"),_={text:_,style:T,resolution:C}),_.style instanceof TextStyle||(_.style=new TextStyle(_.style)),_.textureStyle instanceof TextureStyle||(_.textureStyle=new TextureStyle(_.textureStyle)),typeof _.text!="string"&&(_.text=_.text.toString());const{text:P,style:I,textureStyle:E,autoGenerateMipmaps:B}=_,O=_.resolution??this._renderer.resolution,{frame:G,canvasAndContext:L}=CanvasTextGenerator.getCanvasAndContext({text:P,style:I,resolution:O}),F=getPo2TextureFromSource(L.canvas,G.width,G.height,O,B);if(E&&(F.source.style=E),I.trim&&(G.pad(I.padding),F.frame.copyFrom(G),F.frame.scale(1/O),F.updateUvs()),I.filters){const D=this._applyFilters(F,I.filters);return this.returnTexture(F),CanvasTextGenerator.returnCanvasAndContext(L),D}return this._renderer.texture.initSource(F._source),this._retainCanvasContext||CanvasTextGenerator.returnCanvasAndContext(L),F}returnTexture(_){const C=_.source,T=C.resource;if(this._retainCanvasContext&&(T!=null&&T.getContext)){const R=T.getContext("2d");R&&CanvasTextGenerator.returnCanvasAndContext({canvas:T,context:R})}C.resource=null,C.uploadMethodId="unknown",C.alphaMode="no-premultiply-alpha",TexturePool.returnTexture(_,!0)}renderTextToCanvas(){deprecation("8.10.0","CanvasTextSystem.renderTextToCanvas: no longer supported, use CanvasTextSystem.getTexture instead")}getManagedTexture(_){_._resolution=_._autoResolution?this._renderer.resolution:_.resolution;const C=_.styleKey;if(this._activeTextures[C])return this._increaseReferenceCount(C),this._activeTextures[C].texture;const T=this.getTexture({text:_.text,style:_.style,resolution:_._resolution,textureStyle:_.textureStyle,autoGenerateMipmaps:_.autoGenerateMipmaps});return this._activeTextures[C]={texture:T,usageCount:1},T}decreaseReferenceCount(_){const C=this._activeTextures[_];C&&(C.usageCount--,C.usageCount===0&&(this.returnTexture(C.texture),this._activeTextures[_]=null))}getReferenceCount(_){var C;return((C=this._activeTextures[_])==null?void 0:C.usageCount)??0}_increaseReferenceCount(_){this._activeTextures[_].usageCount++}_applyFilters(_,C){const T=this._renderer.renderTarget.renderTarget,R=this._renderer.filter.generateFilteredTexture({texture:_,filters:C});return this._renderer.renderTarget.bind(T,!1),R}destroy(){this._renderer=null;for(const _ in this._activeTextures)this._activeTextures[_]&&this.returnTexture(this._activeTextures[_].texture);this._activeTextures=null}}class CanvasRendererTextSystem extends AbstractTextSystem{constructor(_){super(_,!0)}}CanvasRendererTextSystem.extension={type:[ExtensionType.CanvasSystem],name:"canvasText"};class CanvasTextSystem extends AbstractTextSystem{constructor(_){super(_,!1)}}CanvasTextSystem.extension={type:[ExtensionType.WebGLSystem,ExtensionType.WebGPUSystem],name:"canvasText"};extensions.add(CanvasRendererTextSystem);extensions.add(CanvasTextSystem);extensions.add(CanvasTextPipe);class Text extends AbstractText{constructor(..._){const C=ensureTextOptions(_,"Text");super(C,TextStyle),this.renderPipeId="text",C.textureStyle&&(this.textureStyle=C.textureStyle instanceof TextureStyle?C.textureStyle:new TextureStyle(C.textureStyle)),this.autoGenerateMipmaps=C.autoGenerateMipmaps??TextureSource.defaultOptions.autoGenerateMipmaps}updateBounds(){const _=this._bounds,C=this._anchor;let T=0,R=0;if(this._style.trim){const{frame:P,canvasAndContext:I}=CanvasTextGenerator.getCanvasAndContext({text:this.text,style:this._style,resolution:1});CanvasTextGenerator.returnCanvasAndContext(I),T=P.width,R=P.height}else{const P=CanvasTextMetrics.measureText(this._text,this._style);T=P.width,R=P.height}_.minX=-C._x*T,_.maxX=_.minX+T,_.minY=-C._y*R,_.maxY=_.minY+R}}class RenderTexture extends Texture{static create(_){const{dynamic:C,textureOptions:T,...R}=_;return new RenderTexture({...T,source:new TextureSource(R),dynamic:C??!1})}resize(_,C,T){return this.source.resize(_,C,T),this}}const _PlaneGeometry=class ye extends MeshGeometry{constructor(..._){super({});let C=_[0]??{};typeof C=="number"&&(deprecation(v8_0_0,"PlaneGeometry constructor changed please use { width, height, verticesX, verticesY } instead"),C={width:C,height:_[1],verticesX:_[2],verticesY:_[3]}),this.build(C)}build(_){_={...ye.defaultOptions,..._},this.verticesX=this.verticesX??_.verticesX,this.verticesY=this.verticesY??_.verticesY,this.width=this.width??_.width,this.height=this.height??_.height;const C=this.verticesX*this.verticesY,T=[],R=[],P=[],I=this.verticesX-1,E=this.verticesY-1,B=this.width/I,O=this.height/E;for(let L=0;L<C;L++){const F=L%this.verticesX,D=L/this.verticesX|0;T.push(F*B,D*O),R.push(F/I,D/E)}const G=I*E;for(let L=0;L<G;L++){const F=L%I,D=L/I|0,q=D*this.verticesX+F,U=D*this.verticesX+F+1,V=(D+1)*this.verticesX+F,W=(D+1)*this.verticesX+F+1;P.push(q,U,V,U,W,V)}this.buffers[0].data=new Float32Array(T),this.buffers[1].data=new Float32Array(R),this.indexBuffer.data=new Uint32Array(P),this.buffers[0].update(),this.buffers[1].update(),this.indexBuffer.update()}};_PlaneGeometry.defaultOptions={width:100,height:100,verticesX:10,verticesY:10};let PlaneGeometry=_PlaneGeometry;class CanvasNineSliceSpritePipe{constructor(_){this._renderer=_}validateRenderable(_){return!1}addRenderable(_,C){this._renderer.renderPipes.batch.break(C),C.add(_)}updateRenderable(_){}execute(_){var Gt,It;const C=this._renderer,T=C.canvasContext,R=T.activeContext;R.save();const P=_.groupTransform,I=C._roundPixels|_._roundPixels;T.setContextTransform(P,I===1),T.setBlendMode(_.groupBlendMode);const E=((Gt=C.globalUniforms.globalUniformData)==null?void 0:Gt.worldColor)??4294967295,B=_.groupColorAlpha,O=(E>>>24&255)/255,G=(B>>>24&255)/255,L=((It=C.filter)==null?void 0:It.alphaMultiplier)??1,F=O*G*L;if(F<=0){R.restore();return}R.globalAlpha=F;const D=E&16777215,q=B&16777215,U=bgr2rgb(multiplyHexColors(q,D)),V=_.texture,W=canvasUtils.getCanvasSource(V);if(!W){R.restore();return}const z=T.smoothProperty,X=V.source.style.scaleMode!=="nearest";R[z]!==X&&(R[z]=X);const Y=U!==16777215||V.rotate!==0,Q=Y?canvasUtils.getTintedCanvas({texture:V},U):W,{leftWidth:J,topHeight:Z,rightWidth:ut,bottomHeight:rt,width:et,height:tt}=_,lt=J+ut,ht=Z+rt,it=Math.min(lt>et?et/lt:1,ht>tt?tt/ht:1,1),mt=J*it,nt=ut*it,st=Z*it,xt=rt*it,dt=Math.max(0,et-mt-nt),yt=Math.max(0,tt-st-xt),vt=_.anchor,gt=V.source._resolution??V.source.resolution??1;let Ct=V.frame.x*gt,ft=V.frame.y*gt;const At=-vt.x*et,Mt=-vt.y*tt,Tt=J*gt,kt=Z*gt,Rt=ut*gt,Bt=rt*gt;let Dt=V.frame.width*gt,Et=V.frame.height*gt;Y&&(Ct=0,ft=0,Dt=Q.width,Et=Q.height),R.drawImage(Q,Ct,ft,Tt,kt,At,Mt,mt,st),R.drawImage(Q,Ct+Tt,ft,Dt-Tt-Rt,kt,At+mt,Mt,dt,st),R.drawImage(Q,Ct+Dt-Rt,ft,Rt,kt,At+et-nt,Mt,nt,st),R.drawImage(Q,Ct,ft+kt,Tt,Et-kt-Bt,At,Mt+st,mt,yt),R.drawImage(Q,Ct+Tt,ft+kt,Dt-Tt-Rt,Et-kt-Bt,At+mt,Mt+st,dt,yt),R.drawImage(Q,Ct+Dt-Rt,ft+kt,Rt,Et-kt-Bt,At+et-nt,Mt+st,nt,yt),R.drawImage(Q,Ct,ft+Et-Bt,Tt,Bt,At,Mt+tt-xt,mt,xt),R.drawImage(Q,Ct+Tt,ft+Et-Bt,Dt-Tt-Rt,Bt,At+mt,Mt+tt-xt,dt,xt),R.drawImage(Q,Ct+Dt-Rt,ft+Et-Bt,Rt,Bt,At+et-nt,Mt+tt-xt,nt,xt),R.restore()}destroy(){this._renderer=null}}CanvasNineSliceSpritePipe.extension={type:[ExtensionType.CanvasPipes],name:"nineSliceSprite"};const _NineSliceGeometry=class Jt extends PlaneGeometry{constructor(_={}){_={...Jt.defaultOptions,..._},super({width:_.width,height:_.height,verticesX:4,verticesY:4}),this._trimX=0,this._trimY=0,this._trimWidth=_.originalWidth??Jt.defaultOptions.originalWidth,this._trimHeight=_.originalHeight??Jt.defaultOptions.originalHeight,this.update(_)}update(_){var C,T,R,P,I,E;this.width=_.width??this.width,this.height=_.height??this.height,this._originalWidth=_.originalWidth??this._originalWidth,this._originalHeight=_.originalHeight??this._originalHeight,this._leftWidth=_.leftWidth??this._leftWidth,this._rightWidth=_.rightWidth??this._rightWidth,this._topHeight=_.topHeight??this._topHeight,this._bottomHeight=_.bottomHeight??this._bottomHeight,this._anchorX=(C=_.anchor)==null?void 0:C.x,this._anchorY=(T=_.anchor)==null?void 0:T.y,_.trim!==void 0?(this._trimX=((R=_.trim)==null?void 0:R.x)??0,this._trimY=((P=_.trim)==null?void 0:P.y)??0,this._trimWidth=((I=_.trim)==null?void 0:I.width)??this._originalWidth,this._trimHeight=((E=_.trim)==null?void 0:E.height)??this._originalHeight):(this._trimWidth=this._originalWidth,this._trimHeight=this._originalHeight),this.updateUvs(),this.updatePositions()}updatePositions(){const _=this.positions,{width:C,height:T,_leftWidth:R,_rightWidth:P,_topHeight:I,_bottomHeight:E,_anchorX:B,_anchorY:O}=this,G=R+P,L=C>G?1:C/G,F=I+E,D=T>F?1:T/F,q=Math.min(L,D),U=B*C,V=O*T;_[0]=_[8]=_[16]=_[24]=-U,_[2]=_[10]=_[18]=_[26]=R*q-U,_[4]=_[12]=_[20]=_[28]=C-P*q-U,_[6]=_[14]=_[22]=_[30]=C-U,_[1]=_[3]=_[5]=_[7]=-V,_[9]=_[11]=_[13]=_[15]=I*q-V,_[17]=_[19]=_[21]=_[23]=T-E*q-V,_[25]=_[27]=_[29]=_[31]=T-V,this.getBuffer("aPosition").update()}updateUvs(){const _=this.uvs,C=this._originalWidth,T=this._originalHeight,R=this._trimX/C,P=this._trimY/T,I=(this._trimX+this._trimWidth)/C,E=(this._trimY+this._trimHeight)/T;_[0]=_[8]=_[16]=_[24]=R,_[1]=_[3]=_[5]=_[7]=P,_[6]=_[14]=_[22]=_[30]=I,_[25]=_[27]=_[29]=_[31]=E;const B=1/C,O=1/T;_[2]=_[10]=_[18]=_[26]=R+B*this._leftWidth,_[9]=_[11]=_[13]=_[15]=P+O*this._topHeight,_[4]=_[12]=_[20]=_[28]=I-B*this._rightWidth,_[17]=_[19]=_[21]=_[23]=E-O*this._bottomHeight,this.getBuffer("aUV").update()}};_NineSliceGeometry.defaultOptions={width:100,height:100,leftWidth:10,topHeight:10,rightWidth:10,bottomHeight:10,originalWidth:100,originalHeight:100};let NineSliceGeometry=_NineSliceGeometry;class NineSliceSpriteGpuData extends BatchableMesh{constructor(){super(),this.geometry=new NineSliceGeometry}destroy(){this.geometry.destroy()}}class NineSliceSpritePipe{constructor(_){this._renderer=_,this._managedSprites=new GCManagedHash({renderer:_,type:"renderable",name:"nineSliceSprite"})}addRenderable(_,C){const T=this._getGpuSprite(_);_.didViewUpdate&&this._updateBatchableSprite(_,T),this._renderer.renderPipes.batch.addToBatch(T,C)}updateRenderable(_){const C=this._getGpuSprite(_);_.didViewUpdate&&this._updateBatchableSprite(_,C),C._batcher.updateElement(C)}validateRenderable(_){const C=this._getGpuSprite(_);return!C._batcher.checkAndUpdateTexture(C,_._texture)}_updateBatchableSprite(_,C){C.geometry.update(_),C.setTexture(_._texture)}_getGpuSprite(_){return _._gpuData[this._renderer.uid]||this._initGPUSprite(_)}_initGPUSprite(_){const C=_._gpuData[this._renderer.uid]=new NineSliceSpriteGpuData,T=C;return T.renderable=_,T.transform=_.groupTransform,T.texture=_._texture,T.roundPixels=this._renderer._roundPixels|_._roundPixels,this._managedSprites.add(_),_.didViewUpdate||this._updateBatchableSprite(_,T),C}destroy(){this._managedSprites.destroy(),this._renderer=null}}NineSliceSpritePipe.extension={type:[ExtensionType.WebGLPipes,ExtensionType.WebGPUPipes],name:"nineSliceSprite"};extensions.add(CanvasNineSliceSpritePipe);extensions.add(NineSliceSpritePipe);const _NineSliceSprite=class be extends ViewContainer{constructor(_){var F,D,q,U;_ instanceof Texture&&(_={texture:_});const{width:C,height:T,anchor:R,leftWidth:P,rightWidth:I,topHeight:E,bottomHeight:B,texture:O,roundPixels:G,...L}=_;super({label:"NineSliceSprite",...L}),this.renderPipeId="nineSliceSprite",this.batched=!0,this._leftWidth=P??((F=O==null?void 0:O.defaultBorders)==null?void 0:F.left)??NineSliceGeometry.defaultOptions.leftWidth,this._topHeight=E??((D=O==null?void 0:O.defaultBorders)==null?void 0:D.top)??NineSliceGeometry.defaultOptions.topHeight,this._rightWidth=I??((q=O==null?void 0:O.defaultBorders)==null?void 0:q.right)??NineSliceGeometry.defaultOptions.rightWidth,this._bottomHeight=B??((U=O==null?void 0:O.defaultBorders)==null?void 0:U.bottom)??NineSliceGeometry.defaultOptions.bottomHeight,this._width=C??O.width??NineSliceGeometry.defaultOptions.width,this._height=T??O.height??NineSliceGeometry.defaultOptions.height,this.allowChildren=!1,this.texture=O??be.defaultOptions.texture,this.roundPixels=G??!1,this._anchor=new ObservablePoint({_onUpdate:()=>{this.onViewUpdate()}}),R?this.anchor=R:this.texture.defaultAnchor&&(this.anchor=this.texture.defaultAnchor)}get anchor(){return this._anchor}set anchor(_){typeof _=="number"?this._anchor.set(_):this._anchor.copyFrom(_)}get width(){return this._width}set width(_){this._width=_,this.onViewUpdate()}get height(){return this._height}set height(_){this._height=_,this.onViewUpdate()}setSize(_,C){typeof _=="object"&&(C=_.height??_.width,_=_.width),this._width=_,this._height=C??_,this.onViewUpdate()}getSize(_){return _||(_={}),_.width=this._width,_.height=this._height,_}get leftWidth(){return this._leftWidth}set leftWidth(_){this._leftWidth=_,this.onViewUpdate()}get topHeight(){return this._topHeight}set topHeight(_){this._topHeight=_,this.onViewUpdate()}get rightWidth(){return this._rightWidth}set rightWidth(_){this._rightWidth=_,this.onViewUpdate()}get bottomHeight(){return this._bottomHeight}set bottomHeight(_){this._bottomHeight=_,this.onViewUpdate()}get texture(){return this._texture}set texture(_){_||(_=Texture.EMPTY);const C=this._texture;C!==_&&(C&&C.dynamic&&C.off("update",this.onViewUpdate,this),_.dynamic&&_.on("update",this.onViewUpdate,this),this._texture=_,this.onViewUpdate())}get originalWidth(){return this._texture.width}get originalHeight(){return this._texture.height}get trim(){return this._texture.trim??null}destroy(_){if(super.destroy(_),typeof _=="boolean"?_:_==null?void 0:_.texture){const T=typeof _=="boolean"?_:_==null?void 0:_.textureSource;this._texture.destroy(T)}this._texture=null}updateBounds(){const _=this._bounds,C=this._anchor,T=this._width,R=this._height;_.minX=-C._x*T,_.maxX=_.minX+T,_.minY=-C._y*R,_.maxY=_.minY+R}};_NineSliceSprite.defaultOptions={texture:Texture.EMPTY};let NineSliceSprite=_NineSliceSprite;extensions.add(browserExt,webworkerExt);const CARD_W=120,CARD_H=168,SUIT_SYMBOL=["","♦","♣","♥","♠"],SUIT_COLOR=[0,14037041,2962486,14037041,2962486],RANK_LABEL={2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"J",12:"Q",13:"K",14:"A"};class CardTextures{constructor(){pt(this,"atlas",null);pt(this,"cache",new Map);pt(this,"backTexture",null)}build(_){if(this.atlas)return;const R=RenderTexture.create({width:13*CARD_W,height:5*CARD_H,resolution:1}),P=new Container;for(let E=1;E<=4;E++)for(let B=2;B<=14;B++){const O=this.drawFace(E,B);O.position.set((B-2)*CARD_W,(E-1)*CARD_H),P.addChild(O),this.cache.set(E*16+B,new Texture({source:R.source,frame:new Rectangle((B-2)*CARD_W,(E-1)*CARD_H,CARD_W,CARD_H)}))}const I=this.drawBack();I.position.set(0,4*CARD_H),P.addChild(I),this.backTexture=new Texture({source:R.source,frame:new Rectangle(0,4*CARD_H,CARD_W,CARD_H)}),_.render({container:P,target:R,clear:!0}),P.destroy({children:!0}),this.atlas=R}texture(_){return _<=0?this.backTexture??Texture.WHITE:this.cache.get(_)??this.backTexture??Texture.WHITE}get back(){return this.backTexture??Texture.WHITE}drawFace(_,C){const T=new Container,R=new Graphics().roundRect(4,4,CARD_W-8,CARD_H-8,12).fill(16645623).stroke({width:2,color:13684936,alignment:1});T.addChild(R);const P=SUIT_COLOR[_],I=SUIT_SYMBOL[_],E=RANK_LABEL[C]??String(C),B=new Text({text:E,style:new TextStyle({fontFamily:"Arial",fontSize:30,fontWeight:"700",fill:P})});B.position.set(12,8),T.addChild(B);const O=new Text({text:I,style:new TextStyle({fontFamily:"Arial",fontSize:26,fill:P})});O.position.set(14,44),T.addChild(O);const G=new Text({text:I,style:new TextStyle({fontFamily:"Arial",fontSize:64,fill:P})});return G.anchor.set(.5),G.position.set(CARD_W/2,CARD_H/2+10),T.addChild(G),T}drawBack(){const _=new Container,C=new Graphics().roundRect(4,4,CARD_W-8,CARD_H-8,12).fill(1981066).stroke({width:2,color:16645623,alignment:1}),T=new Graphics;for(let R=16;R<CARD_H-16;R+=20)for(let P=16;P<CARD_W-16;P+=20)T.moveTo(P+8,R).lineTo(P+16,R+8).lineTo(P+8,R+16).lineTo(P,R+8).closePath();return T.fill({color:3890139,alpha:.6}),_.addChild(C,T),_}destroy(){var _,C;this.cache.forEach(T=>T.destroy()),this.cache.clear(),(_=this.backTexture)==null||_.destroy(),this.backTexture=null,(C=this.atlas)==null||C.destroy(!0),this.atlas=null}}const ASSET_MANIFEST_URL="/assets/manifest.json",FALLBACK_MANIFEST={bundles:[{name:"table",assets:[]},{name:"effects",assets:[]}]},TABLE_BUNDLE="table";class AssetLoader{constructor(){pt(this,"cards",new CardTextures);pt(this,"hasRealAssets",!1);pt(this,"initialized",!1)}async init(_){var T;if(this.initialized)return;let C=FALLBACK_MANIFEST;try{const R=await fetch(ASSET_MANIFEST_URL,{cache:"no-cache"});R.ok&&(C=await R.json(),this.hasRealAssets=((T=C.bundles)==null?void 0:T.some(P=>Array.isArray(P.assets)&&P.assets.length>0))??!1)}catch{}await Assets.init({manifest:C}),this.cards.build(_),this.initialized=!0}async loadTableBundle(){this.hasRealAssets&&await Assets.loadBundle(TABLE_BUNDLE)}destroy(){this.cards.destroy(),this.initialized=!1}}class PerfMonitor{constructor(_){pt(this,"gl",null);pt(this,"origDrawElements",null);pt(this,"origDrawArrays",null);pt(this,"frameDrawCalls",0);pt(this,"frameTriangles",0);pt(this,"stats",{fps:0,drawCalls:0,triangles:0});pt(this,"listeners",new Set);pt(this,"accumTime",0);pt(this,"accumFrames",0);pt(this,"tickHandler",_=>this.onTick(_.deltaMS));this.app=_}start(){const _=this.app.renderer.gl;if(!_){this.app.ticker.add(this.tickHandler);return}try{this.origDrawElements=_.drawElements.bind(_),this.origDrawArrays=_.drawArrays.bind(_),_.drawElements=(C,T,R,P)=>{this.frameDrawCalls++,this.frameTriangles+=T/3,this.origDrawElements(C,T,R,P)},_.drawArrays=(C,T,R)=>{this.frameDrawCalls++,this.frameTriangles+=R/3,this.origDrawArrays(C,T,R)},this.gl=_}catch{this.gl=null,this.origDrawElements=null,this.origDrawArrays=null}this.app.ticker.add(this.tickHandler)}onTick(_){this.accumTime+=_,this.accumFrames++,this.accumTime>=500&&(this.stats={fps:Math.round(this.accumFrames*1e3/this.accumTime),drawCalls:this.frameDrawCalls/Math.max(1,this.accumFrames)|0,triangles:this.frameTriangles/Math.max(1,this.accumFrames)|0},this.accumTime=0,this.accumFrames=0,this.frameDrawCalls=0,this.frameTriangles=0,this.listeners.forEach(C=>C(this.stats)))}subscribe(_){return this.listeners.add(_),()=>this.listeners.delete(_)}get current(){return this.stats}destroy(){this.app.ticker.remove(this.tickHandler),this.gl&&this.origDrawElements&&this.origDrawArrays&&(this.gl.drawElements=this.origDrawElements,this.gl.drawArrays=this.origDrawArrays),this.gl=null,this.listeners.clear()}}class PixiStage{constructor(){pt(this,"app");pt(this,"world");pt(this,"overlay");pt(this,"initialized",!1);this.app=new Application,this.world=new Container,this.overlay=new Container}async init(_){await this.app.init({preference:"webgl",antialias:!0,autoDensity:!0,resolution:Math.min(window.devicePixelRatio||1,2),background:728855,powerPreference:"high-performance"});const C=this.app.canvas;C.style.width="100%",C.style.height="100%",C.style.display="block",C.style.touchAction="none",_.appendChild(C),this.app.stage.addChild(this.world),this.app.stage.addChild(this.overlay),this.initialized=!0}get renderer(){return this.app.renderer}get ticker(){return this.app.ticker}destroy(){this.initialized&&(this.initialized=!1,this.app.destroy({removeView:!0},{children:!0,texture:!1,textureSource:!1}))}}class ResponsiveScaler{constructor(_,C,T,R){pt(this,"observer",null);pt(this,"orientation","portrait");pt(this,"fitMode");pt(this,"onOrientationChange");pt(this,"onResize");pt(this,"destroyed",!1);pt(this,"handleOrientationEvent",()=>{requestAnimationFrame(()=>this.apply())});this.app=_,this.world=C,this.host=T,this.config=R,this.fitMode=R.fitMode??"fit"}onOrientation(_){this.onOrientationChange=_}onLayout(_){this.onResize=_}start(){this.observer=new ResizeObserver(()=>this.apply()),this.observer.observe(this.host),window.addEventListener("orientationchange",this.handleOrientationEvent),this.apply()}get currentOrientation(){return this.orientation}get currentDesign(){return this.orientation==="landscape"?this.config.landscape:this.config.portrait}forceOrientation(_){this.orientation!==_&&(this.orientation=_,this.apply(!0))}apply(_=!1){var L,F;if(this.destroyed)return;const C=Math.max(1,Math.floor(this.host.clientWidth)),T=Math.max(1,Math.floor(this.host.clientHeight));this.app.renderer.resize(C,T);const R=C>=T?"landscape":"portrait",P=R!==this.orientation;this.orientation=R;const I=this.currentDesign,E=C/I.width,B=T/I.height,O=this.fitMode==="fit"?Math.min(E,B):Math.max(E,B);this.world.scale.set(O),this.world.position.set((C-I.width*O)/2,(T-I.height*O)/2);const G={orientation:this.orientation,design:I,scale:O,screenWidth:C,screenHeight:T};(P||_)&&((L=this.onOrientationChange)==null||L.call(this,G)),(F=this.onResize)==null||F.call(this,G)}destroy(){var _;this.destroyed=!0,(_=this.observer)==null||_.disconnect(),this.observer=null,window.removeEventListener("orientationchange",this.handleOrientationEvent),this.onOrientationChange=void 0,this.onResize=void 0}}const DESIGN={landscape:{width:1280,height:720},portrait:{width:720,height:1280}};function ellipseSeats(A,_,C,T){const R=[];for(let P=0;P<T;P++){const I=Math.PI/2+P*(2*Math.PI)/T;R.push({x:A.x+_*Math.cos(I),y:A.y+C*Math.sin(I)})}return R}function getTableLayout(A,_=9){if(A==="landscape"){const I=DESIGN.landscape,E={x:I.width/2,y:I.height/2+20},B=520,O=250;return{design:I,center:E,radiusX:B,radiusY:O,seats:ellipseSeats(E,B,O,_),community:{x:E.x,y:E.y-30},pot:{x:E.x,y:E.y-110},communityCardSize:{width:76,height:106}}}const C=DESIGN.portrait,T={x:C.width/2,y:C.height/2-40},R=300,P=420;return{design:C,center:T,radiusX:R,radiusY:P,seats:ellipseSeats(T,R,P,_),community:{x:T.x,y:T.y-10},pot:{x:T.x,y:T.y-90},communityCardSize:{width:64,height:90}}}const Easing$1={linear:A=>A,quadOut:A=>1-(1-A)*(1-A),quadInOut:A=>A<.5?2*A*A:1-(-2*A+2)**2/2,backOut:A=>1+2.70158*(A-1)**3+1.70158*(A-1)**2};class Tweener{constructor(){pt(this,"tasks",[])}to(_,C,T){const R={elapsed:0,duration:Math.max(1,_),easing:(T==null?void 0:T.easing)??Easing$1.quadOut,onUpdate:C,onComplete:T==null?void 0:T.onComplete,done:!1};return this.tasks.push(R),R}cancel(_){_.done=!0}update(_){var C;if(this.tasks.length!==0){for(const T of this.tasks){if(T.done)continue;T.elapsed+=_;const R=Math.min(1,T.elapsed/T.duration);T.onUpdate(T.easing(R)),R>=1&&(T.done=!0,(C=T.onComplete)==null||C.call(T))}this.tasks.some(T=>T.done)&&(this.tasks=this.tasks.filter(T=>!T.done))}}clear(){this.tasks.length=0}}var dist={},Collector={},hasRequiredCollector;function requireCollector(){if(hasRequiredCollector)return Collector;hasRequiredCollector=1,Object.defineProperty(Collector,"__esModule",{value:!0}),Collector.Collector=void 0;let A=class{constructor(C){this.emit=(...T)=>{C.emitCollecting(this,T)}}};return Collector.Collector=A,Collector}var CollectorArray={},hasRequiredCollectorArray;function requireCollectorArray(){if(hasRequiredCollectorArray)return CollectorArray;hasRequiredCollectorArray=1,Object.defineProperty(CollectorArray,"__esModule",{value:!0}),CollectorArray.CollectorArray=void 0;const A=requireCollector();let _=class extends A.Collector{constructor(){super(...arguments),this.result=[]}handleResult(T){return this.result.push(T),!0}getResult(){return this.result}reset(){this.result.length=0}};return CollectorArray.CollectorArray=_,CollectorArray}var CollectorLast={},hasRequiredCollectorLast;function requireCollectorLast(){if(hasRequiredCollectorLast)return CollectorLast;hasRequiredCollectorLast=1,Object.defineProperty(CollectorLast,"__esModule",{value:!0}),CollectorLast.CollectorLast=void 0;const A=requireCollector();let _=class extends A.Collector{handleResult(T){return this.result=T,!0}getResult(){return this.result}reset(){delete this.result}};return CollectorLast.CollectorLast=_,CollectorLast}var CollectorUntil0={},hasRequiredCollectorUntil0;function requireCollectorUntil0(){if(hasRequiredCollectorUntil0)return CollectorUntil0;hasRequiredCollectorUntil0=1,Object.defineProperty(CollectorUntil0,"__esModule",{value:!0}),CollectorUntil0.CollectorUntil0=void 0;const A=requireCollector();let _=class extends A.Collector{constructor(){super(...arguments),this.result=!1}handleResult(T){return this.result=T,this.result}getResult(){return this.result}reset(){this.result=!1}};return CollectorUntil0.CollectorUntil0=_,CollectorUntil0}var CollectorWhile0={},hasRequiredCollectorWhile0;function requireCollectorWhile0(){if(hasRequiredCollectorWhile0)return CollectorWhile0;hasRequiredCollectorWhile0=1,Object.defineProperty(CollectorWhile0,"__esModule",{value:!0}),CollectorWhile0.CollectorWhile0=void 0;const A=requireCollector();let _=class extends A.Collector{constructor(){super(...arguments),this.result=!1}handleResult(T){return this.result=T,!this.result}getResult(){return this.result}reset(){this.result=!1}};return CollectorWhile0.CollectorWhile0=_,CollectorWhile0}var Signal={},SignalConnection={},hasRequiredSignalConnection;function requireSignalConnection(){if(hasRequiredSignalConnection)return SignalConnection;hasRequiredSignalConnection=1,Object.defineProperty(SignalConnection,"__esModule",{value:!0}),SignalConnection.SignalConnectionImpl=void 0;class A{constructor(C,T){this.link=C,this.parentCleanup=T}disconnect(){return this.link!==null?(this.link.unlink(),this.link=null,this.parentCleanup(),this.parentCleanup=null,!0):!1}set enabled(C){this.link&&this.link.setEnabled(C)}get enabled(){return this.link!==null&&this.link.isEnabled()}}return SignalConnection.SignalConnectionImpl=A,SignalConnection}var SignalLink={},hasRequiredSignalLink;function requireSignalLink(){if(hasRequiredSignalLink)return SignalLink;hasRequiredSignalLink=1,Object.defineProperty(SignalLink,"__esModule",{value:!0}),SignalLink.SignalLink=void 0;let A=class xe{constructor(C=null,T=null,R=0){this.enabled=!0,this.newLink=!1,this.callback=null,this.prev=C??this,this.next=T??this,this.order=R}isEnabled(){return this.enabled&&!this.newLink}setEnabled(C){this.enabled=C}unlink(){this.callback=null,this.next.prev=this.prev,this.prev.next=this.next}insert(C,T){let R=this.prev;for(;R!==this&&!(R.order<=T);)R=R.prev;const P=new xe(R,R.next,T);return P.callback=C,R.next=P,P.next.prev=P,P}};return SignalLink.SignalLink=A,SignalLink}var hasRequiredSignal;function requireSignal(){if(hasRequiredSignal)return Signal;hasRequiredSignal=1,Object.defineProperty(Signal,"__esModule",{value:!0}),Signal.Signal=void 0;const A=requireSignalConnection(),_=requireSignalLink();let C=class{constructor(){this.head=new _.SignalLink,this.hasNewLinks=!1,this.emitDepth=0,this.connectionsCount=0}getConnectionsCount(){return this.connectionsCount}hasConnections(){return this.connectionsCount>0}connect(R,P=0){this.connectionsCount++;const I=this.head.insert(R,P);return this.emitDepth>0&&(this.hasNewLinks=!0,I.newLink=!0),new A.SignalConnectionImpl(I,()=>this.decrementConnectionCount())}decrementConnectionCount(){this.connectionsCount--}disconnect(R){for(let P=this.head.next;P!==this.head;P=P.next)if(P.callback===R)return this.decrementConnectionCount(),P.unlink(),!0;return!1}disconnectAll(){for(;this.head.next!==this.head;)this.head.next.unlink();this.connectionsCount=0}emit(...R){this.emitDepth++;for(let P=this.head.next;P!==this.head;P=P.next)P.isEnabled()&&P.callback&&P.callback.apply(null,R);this.emitDepth--,this.unsetNewLink()}emitCollecting(R,P){this.emitDepth++;for(let I=this.head.next;I!==this.head;I=I.next)if(I.isEnabled()&&I.callback){const E=I.callback.apply(null,P);if(!R.handleResult(E))break}this.emitDepth--,this.unsetNewLink()}unsetNewLink(){if(this.hasNewLinks&&this.emitDepth===0){for(let R=this.head.next;R!==this.head;R=R.next)R.newLink=!1;this.hasNewLinks=!1}}};return Signal.Signal=C,Signal}var SignalConnections={},hasRequiredSignalConnections;function requireSignalConnections(){if(hasRequiredSignalConnections)return SignalConnections;hasRequiredSignalConnections=1,Object.defineProperty(SignalConnections,"__esModule",{value:!0}),SignalConnections.SignalConnections=void 0;let A=class{constructor(){this.list=[]}add(C){this.list.push(C)}disconnectAll(){for(const C of this.list)C.disconnect();this.list=[]}getCount(){return this.list.length}isEmpty(){return this.list.length===0}};return SignalConnections.SignalConnections=A,SignalConnections}var hasRequiredDist;function requireDist(){return hasRequiredDist||(hasRequiredDist=1,function(A){Object.defineProperty(A,"__esModule",{value:!0}),A.SignalConnections=A.Signal=A.CollectorWhile0=A.CollectorUntil0=A.CollectorLast=A.CollectorArray=A.Collector=void 0;var _=requireCollector();Object.defineProperty(A,"Collector",{enumerable:!0,get:function(){return _.Collector}});var C=requireCollectorArray();Object.defineProperty(A,"CollectorArray",{enumerable:!0,get:function(){return C.CollectorArray}});var T=requireCollectorLast();Object.defineProperty(A,"CollectorLast",{enumerable:!0,get:function(){return T.CollectorLast}});var R=requireCollectorUntil0();Object.defineProperty(A,"CollectorUntil0",{enumerable:!0,get:function(){return R.CollectorUntil0}});var P=requireCollectorWhile0();Object.defineProperty(A,"CollectorWhile0",{enumerable:!0,get:function(){return P.CollectorWhile0}});var I=requireSignal();Object.defineProperty(A,"Signal",{enumerable:!0,get:function(){return I.Signal}});var E=requireSignalConnections();Object.defineProperty(A,"SignalConnections",{enumerable:!0,get:function(){return E.SignalConnections}})}(dist)),dist}var distExports=requireDist(),__defProp$2=Object.defineProperty,__defNormalProp$2=(A,_,C)=>_ in A?__defProp$2(A,_,{enumerable:!0,configurable:!0,writable:!0,value:C}):A[_]=C,__publicField$2=(A,_,C)=>__defNormalProp$2(A,typeof _!="symbol"?_+"":_,C);class ButtonEvents{constructor(){__publicField$2(this,"_isMouseIn",!1),__publicField$2(this,"_isDown",!1),__publicField$2(this,"onDown"),__publicField$2(this,"onUp"),__publicField$2(this,"onUpOut"),__publicField$2(this,"onOut"),__publicField$2(this,"onPress"),__publicField$2(this,"onHover"),this.onPress=new distExports.Signal,this.onDown=new distExports.Signal,this.onUp=new distExports.Signal,this.onHover=new distExports.Signal,this.onOut=new distExports.Signal,this.onUpOut=new distExports.Signal}connectEvents(_){isMobile.any?(_.on("pointerdown",this.processDown,this),_.on("pointerup",this.processUp,this),_.on("pointerupoutside",this.processUpOut,this),_.on("pointerout",this.processOut,this),_.on("pointertap",this.processPress,this),_.on("pointerover",this.processOver,this)):(_.on("mousedown",this.processDown,this),_.on("mouseup",this.processUp,this),_.on("mouseupoutside",this.processUpOut,this),_.on("mouseout",this.processOut,this),_.on("click",this.processPress,this),_.on("mouseover",this.processOver,this))}disconnectEvents(_){isMobile.any?(_.off("pointerdown",this.processDown,this),_.off("pointerup",this.processUp,this),_.off("pointerupoutside",this.processUpOut,this),_.off("pointerout",this.processOut,this),_.off("pointertap",this.processPress,this),_.off("pointerover",this.processOver,this)):(_.off("mousedown",this.processDown,this),_.off("mouseup",this.processUp,this),_.off("mouseupoutside",this.processUpOut,this),_.off("mouseout",this.processOut,this),_.off("click",this.processPress,this),_.off("mouseover",this.processOver,this))}processDown(_){this._isDown=!0,this.onDown.emit(this,_),this.down(_)}processUp(_){this._isDown&&(this.onUp.emit(this,_),this.up(_)),this._isDown=!1}processUpOut(_){this._isDown&&(this.onUp.emit(this,_),this.onUpOut.emit(this,_),this.up(_),this.upOut(_)),this._isDown=!1}processOut(_){this._isMouseIn&&(this._isMouseIn=!1,this.onOut.emit(this,_),this.out(_))}processPress(_){this._isDown=!1,this.onPress.emit(this,_),this.press(_)}processOver(_){isMobile.any||(this._isMouseIn=!0,this.onHover.emit(this,_),this.hover(_))}down(_){}up(_){}upOut(_){}out(_){}press(_){}hover(_){}get isDown(){return this._isDown}}var __defProp$1=Object.defineProperty,__defNormalProp$1=(A,_,C)=>_ in A?__defProp$1(A,_,{enumerable:!0,configurable:!0,writable:!0,value:C}):A[_]=C,__publicField$1=(A,_,C)=>__defNormalProp$1(A,typeof _!="symbol"?_+"":_,C);class Button extends ButtonEvents{constructor(_){super(),__publicField$1(this,"_view"),_&&(this.view=_,this.enabled=!0)}set view(_){!!this._view&&this._view&&this.disconnectEvents(this._view),this._view=_,this.connectEvents(this._view)}get view(){return this._view}set enabled(_){if(!this.view){console.error("Button view is not set. Please set it before enabling the button.");return}this.view.eventMode=_?"static":"auto",this.view.cursor=_?"pointer":"default",!_&&this.isDown&&this.processUp()}get enabled(){var _;return((_=this.view)==null?void 0:_.eventMode)==="static"}}class ButtonContainer extends Container{constructor(_){super(),__publicField$1(this,"button"),__publicField$1(this,"onDown"),__publicField$1(this,"onUp"),__publicField$1(this,"onUpOut"),__publicField$1(this,"onOut"),__publicField$1(this,"onPress"),__publicField$1(this,"onHover"),this.button=new Button(this),this.button.enabled=!0,_&&this.addChild(_),this.onPress=this.button.onPress,this.onDown=this.button.onDown,this.onUp=this.button.onUp,this.onHover=this.button.onHover,this.onOut=this.button.onOut,this.onUpOut=this.button.onUpOut}set enabled(_){this.button.enabled=_}get enabled(){return this.button.enabled}}function getView(A){return typeof A=="string"?Sprite.from(A):A instanceof Texture?new Sprite(A):A}/*!
 * tweedle.js - v2.1.0
 * Compiled Wed, 05 Apr 2023 15:21:25 UTC
 *
 * tweedle.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 * 
 * Copyright 2019-2021, Milton Candelero <miltoncandelero@gmail.com>, All Rights Reserved
 */let NOW;typeof self>"u"&&typeof process<"u"&&process.hrtime?NOW=function(){const A=process.hrtime();return A[0]*1e3+A[1]/1e6}:typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?NOW=self.performance.now.bind(self.performance):Date.now!==void 0?NOW=Date.now:NOW=function(){return new Date().getTime()};class Group{constructor(){Group.prototype.__init.call(this),Group.prototype.__init2.call(this),Group.prototype.__init3.call(this),Group.prototype.__init4.call(this)}__init(){this._tweens={}}static get shared(){return Group._shared||(Group._shared=new Group),Group._shared}__init2(){this._paused=!1}isPaused(){return this._paused}pause(){this._paused=!0}resume(){this._paused=!1}__init3(){this._lastUpdateTime=void 0}__init4(){this.now=NOW}getAll(){return Object.keys(this._tweens).map(_=>this._tweens[_])}removeAll(){this._tweens={}}add(_){this._tweens[_.getId()]=_}remove(_){delete this._tweens[_.getId()]}update(_,C=!1){if(_==null&&(this._lastUpdateTime==null?(this._lastUpdateTime=this.now(),_=0):_=this.now()-this._lastUpdateTime),this._lastUpdateTime=this.now(),this._paused)return!1;const T=Object.keys(this._tweens);if(T.length==0)return!1;for(let R=0;R<T.length;R++){const P=this._tweens[T[R]];P&&P.update(_,!0)==!1&&!C&&delete this._tweens[T[R]]}return!0}}const Easing={Step:{None(A){return A<.5?0:1}},Linear:{None(A){return A}},Quadratic:{In(A){return A*A},Out(A){return A*(2-A)},InOut(A){return(A*=2)<1?.5*A*A:-.5*(--A*(A-2)-1)}},Cubic:{In(A){return A*A*A},Out(A){return--A*A*A+1},InOut(A){return(A*=2)<1?.5*A*A*A:.5*((A-=2)*A*A+2)}},Quartic:{In(A){return A*A*A*A},Out(A){return 1- --A*A*A*A},InOut(A){return(A*=2)<1?.5*A*A*A*A:-.5*((A-=2)*A*A*A-2)}},Quintic:{In(A){return A*A*A*A*A},Out(A){return--A*A*A*A*A+1},InOut(A){return(A*=2)<1?.5*A*A*A*A*A:.5*((A-=2)*A*A*A*A+2)}},Sinusoidal:{In(A){return 1-Math.cos(A*Math.PI/2)},Out(A){return Math.sin(A*Math.PI/2)},InOut(A){return .5*(1-Math.cos(Math.PI*A))}},Exponential:{In(A){return A==0?0:Math.pow(1024,A-1)},Out(A){return A==1?1:1-Math.pow(2,-10*A)},InOut(A){return A==0?0:A==1?1:(A*=2)<1?.5*Math.pow(1024,A-1):.5*(-Math.pow(2,-10*(A-1))+2)}},Circular:{In(A){return 1-Math.sqrt(1-A*A)},Out(A){return Math.sqrt(1- --A*A)},InOut(A){return(A*=2)<1?-.5*(Math.sqrt(1-A*A)-1):.5*(Math.sqrt(1-(A-=2)*A)+1)}},Elastic:{In(A){return A==0?0:A==1?1:-Math.pow(2,10*(A-1))*Math.sin((A-1.1)*5*Math.PI)},Out(A){return A==0?0:A==1?1:Math.pow(2,-10*A)*Math.sin((A-.1)*5*Math.PI)+1},InOut(A){return A==0?0:A==1?1:(A*=2,A<1?-.5*Math.pow(2,10*(A-1))*Math.sin((A-1.1)*5*Math.PI):.5*Math.pow(2,-10*(A-1))*Math.sin((A-1.1)*5*Math.PI)+1)}},Back:{In(A){return A*A*((1.70158+1)*A-1.70158)},Out(A){return--A*A*((1.70158+1)*A+1.70158)+1},InOut(A){const _=2.5949095;return(A*=2)<1?.5*(A*A*((_+1)*A-_)):.5*((A-=2)*A*((_+1)*A+_)+2)}},Bounce:{In(A){return 1-Easing.Bounce.Out(1-A)},Out(A){return A<1/2.75?7.5625*A*A:A<2/2.75?7.5625*(A-=1.5/2.75)*A+.75:A<2.5/2.75?7.5625*(A-=2.25/2.75)*A+.9375:7.5625*(A-=2.625/2.75)*A+.984375},InOut(A){return A<.5?Easing.Bounce.In(A*2)*.5:Easing.Bounce.Out(A*2-1)*.5+.5}}},Interpolation={Geom:{Linear(A,_){const C=A.length-1,T=C*_,R=Math.floor(T),P=Interpolation.Utils.Linear;return _<0?P(A[0],A[1],T):_>1?P(A[C],A[C-1],C-T):P(A[R],A[R+1>C?C:R+1],T-R)},Bezier(A,_){let C=0;const T=A.length-1,R=Math.pow,P=Interpolation.Utils.Bernstein;for(let I=0;I<=T;I++)C+=P(T,I)*R(1-_,T-I)*R(_,I)*A[I];return C},QuadraticBezier(A,_){let C=0;const T=A.length-1;if(_==1)return A[T];const R=Math.pow,P=Interpolation.Utils.Bernstein,I=T*_,E=Math.floor(I),B=(I-E)*.5+.5*(E%2),O=E-E%2,G=O+1,L=O+2;return C+=P(2,0)*R(1-B,2)*R(B,0)*A[O],C+=P(2,1)*R(1-B,1)*R(B,1)*A[G],C+=P(2,2)*R(1-B,0)*R(B,2)*A[L],C},CubicBezier(A,_){let C=0;const T=A.length-1;if(_==1)return A[T];const R=Math.pow,P=Interpolation.Utils.Bernstein,I=T*_,E=Math.floor(I),B=(I-E)*(1/3)+1/3*(E%3),O=E-E%3,G=O+1,L=O+2,F=O+3;return C+=P(3,0)*R(1-B,3)*R(B,0)*A[O],C+=P(3,1)*R(1-B,2)*R(B,1)*A[G],C+=P(3,2)*R(1-B,1)*R(B,2)*A[L],C+=P(3,3)*R(1-B,0)*R(B,3)*A[F],C},CatmullRom(A,_){const C=A.length-1;let T=C*_,R=Math.floor(T);const P=Interpolation.Utils.CatmullRom;return A[0]==A[C]?(_<0&&(R=Math.floor(T=C*(1+_))),P(A[(R-1+C)%C],A[R],A[(R+1)%C],A[(R+2)%C],T-R)):_<0?A[0]-(P(A[0],A[0],A[1],A[1],-T)-A[0]):_>1?A[C]-(P(A[C],A[C],A[C-1],A[C-1],T-C)-A[C]):P(A[R?R-1:0],A[R],A[C<R+1?C:R+1],A[C<R+2?C:R+2],T-R)}},Angle:{Radians(A,_){const C=A.length-1,T=C*_,R=Math.floor(T),P=Interpolation.Utils.WrapLinear;return _<0?P(A[0],A[1],T,2*Math.PI):_>1?P(A[C],A[C-1],C-T,2*Math.PI):P(A[R],A[R+1>C?C:R+1],T-R,2*Math.PI)},Degrees(A,_){const C=A.length-1,T=C*_,R=Math.floor(T),P=Interpolation.Utils.WrapLinear;return _<0?P(A[0],A[1],T,360):_>1?P(A[C],A[C-1],C-T,360):P(A[R],A[R+1>C?C:R+1],T-R,360)}},Color:{RGB(A,_){const C=A.length-1,T=C*_,R=Math.floor(T),P=Interpolation.Utils.RGBLinear;return _<0?P(A[0],A[1],T):_>1?P(A[C],A[C-1],C-T):P(A[R],A[R+1>C?C:R+1],T-R)},HSV(A,_){const C=A.length-1,T=C*_,R=Math.floor(T),P=Interpolation.Utils.HSVLinear;return _<0?P(A[0],A[1],T):_>1?P(A[C],A[C-1],C-T):P(A[R],A[R+1>C?C:R+1],T-R)},HCL(A,_){const C=A.length-1,T=C*_,R=Math.floor(T),P=Interpolation.Utils.HCLLinear;return _<0?P(A[0],A[1],T):_>1?P(A[C],A[C-1],C-T):P(A[R],A[R+1>C?C:R+1],T-R)}},Utils:{RGBsplit(A){const _=A>>24&255,C=A>>16&255,T=A>>8&255,R=A&255;return{a:_,r:C,g:T,b:R}},HSVsplit(A){const _=Interpolation.Utils.RGBsplit(A);_.r/=255,_.g/=255,_.b/=255;const C=Math.max(_.r,_.g,_.b),T=Math.min(_.r,_.g,_.b);let R;const P=C,I=C-T,E=C==0?0:I/C;if(C==T)R=0;else{switch(C){case _.r:R=(_.g-_.b)/I+(_.g<_.b?6:0);break;case _.g:R=(_.b-_.r)/I+2;break;case _.b:R=(_.r-_.g)/I+4;break}R/=6}return{a:_.a,h:R,s:E,v:P}},HSVJoin(A){let _,C,T;const R=Math.floor(A.h*6),P=A.h*6-R,I=A.v*(1-A.s),E=A.v*(1-P*A.s),B=A.v*(1-(1-P)*A.s);switch(R%6){case 0:_=A.v,C=B,T=I;break;case 1:_=E,C=A.v,T=I;break;case 2:_=I,C=A.v,T=B;break;case 3:_=I,C=E,T=A.v;break;case 4:_=B,C=I,T=A.v;break;case 5:_=A.v,C=I,T=E;break}return A.a<<24|_<<16|C<<8|T},HCLSplit(A){const T=.530454533953517,R=Interpolation.Utils.RGBsplit(A),P={a:R.a,h:0,c:0,l:0};let I=0;const E=Math.min(R.r,Math.min(R.g,R.b)),B=Math.max(R.r,Math.max(R.g,R.b));let O=3/100;return P.c=B-E,P.c!=0&&(I=Math.atan2(R.g-R.b,R.r-R.g)/Math.PI,O*=E/B),O=Math.exp(O),P.h=(I/2-Math.min(I%1,-I%1)/6)%1,P.c*=O,P.l=Interpolation.Utils.Linear(-E,B,O)/(T*2),P},HCLJoin(A){const T=.530454533953517,R={a:A.a,r:0,g:0,b:0};if(A.l!=0){let P=A.h;const I=A.c,E=A.l*T,B=Math.exp((1-I/(2*E))*(3/100)),O=(2*E-I)/(2*B-1),G=I/B,L=(P+Math.min(2*P%1/4,-2*P%1/8))*Math.PI*2;let F;P*=6,P<=.999?(F=Math.tan(L),R.r=1,R.g=F/(1+F)):P<=1.001?(R.r=1,R.g=1):P<=2?(F=Math.tan(L),R.r=(1+F)/F,R.g=1):P<=3?(F=Math.tan(L),R.g=1,R.b=1+F):P<=3.999?(F=Math.tan(L),R.g=1/(1+F),R.b=1):P<=4.001?(R.g=0,R.b=1):P<=5?(F=Math.tan(L),R.r=-1/F,R.b=1):(F=Math.tan(L),R.r=1,R.b=-F),R.r=R.r*G+O,R.g=R.g*G+O,R.b=R.b*G+O}return R.a<<24|R.r<<16|R.g<<8|R.b},WrapLinear(A,_,C,T){let R;return A=(A+T*Math.trunc(Math.abs(A/T)))%T,_=(_+T*Math.trunc(Math.abs(_/T)))%T,Math.abs(A-_)<=.5*T?R=Interpolation.Utils.Linear(A,_,C):(A<_?R=Interpolation.Utils.Linear(A+T,_,C):R=Interpolation.Utils.Linear(A,_+T,C),R=R%T),R},RGBLinear(A,_,C){const T=Interpolation.Utils.RGBsplit(A),R=Interpolation.Utils.RGBsplit(_),P=Interpolation.Utils.Linear(T.a,R.a,C),I=Interpolation.Utils.Linear(T.r,R.r,C),E=Interpolation.Utils.Linear(T.g,R.g,C),B=Interpolation.Utils.Linear(T.b,R.b,C);return P<<24|I<<16|E<<8|B},HSVLinear(A,_,C){const T=Interpolation.Utils.HSVsplit(A),R=Interpolation.Utils.HSVsplit(_);let P;Math.abs(T.h-R.h)<=.5?P=Interpolation.Utils.Linear(T.h,R.h,C):(T.h<R.h?P=Interpolation.Utils.Linear(T.h+1,R.h,C):P=Interpolation.Utils.Linear(T.h,R.h+1,C),P=P%1);const I=Interpolation.Utils.Linear(T.s,R.s,C),E=Interpolation.Utils.Linear(T.v,R.v,C),B=Interpolation.Utils.Linear(T.a,R.a,C);return Interpolation.Utils.HSVJoin({a:B,h:P,s:I,v:E})},HCLLinear(A,_,C){const T=Interpolation.Utils.HCLSplit(A),R=Interpolation.Utils.HCLSplit(_);let P;Math.abs(T.h-R.h)<=.5?P=Interpolation.Utils.Linear(T.h,R.h,C):(T.h<R.h?P=Interpolation.Utils.Linear(T.h+1,R.h,C):P=Interpolation.Utils.Linear(T.h,R.h+1,C),P=P%1);const I=Interpolation.Utils.Linear(T.c,R.c,C),E=Interpolation.Utils.Linear(T.l,R.l,C),B=Interpolation.Utils.Linear(T.a,R.a,C);return Interpolation.Utils.HSVJoin({a:B,h:P,s:I,v:E})},Linear(A,_,C){return(_-A)*C+A},Bernstein(A,_){const C=Interpolation.Utils.Factorial;return C(A)/C(_)/C(A-_)},Factorial:function(){const A=[1];return function(_){let C=1;if(A[_])return A[_];for(let T=_;T>1;T--)C*=T;return A[_]=C,C}}(),CatmullRom(A,_,C,T,R){const P=(C-A)*.5,I=(T-_)*.5,E=R*R,B=R*E;return(2*_-2*C+P+I)*B+(-3*_+3*C-2*P-I)*E+P*R+_}}};class Sequence{static __initStatic(){this._nextId=0}static nextId(){return Sequence._nextId++}}Sequence.__initStatic();const DEFAULTS={safetyCheckFunction:A=>!0,easingFunction:Easing.Linear.None,yoyoEasingFunction:void 0,interpolationFunction:Interpolation.Geom.Linear};class Tween{__init(){this._isPaused=!1}__init2(){this._valuesStart={}}__init3(){this._valuesEnd={}}__init4(){this._valuesStartRepeat={}}__init5(){this._duration=0}__init6(){this._repeatCount=0}__init7(){this._repeat=0}__init8(){this._yoyo=!1}__init9(){this._isPlaying=!1}get _reversed(){return this.yoyo&&this._repeatCount%2!==0}__init10(){this._delayTime=0}__init11(){this._startTime=0}__init12(){this._elapsedTime=0}__init13(){this._timescale=1}__init14(){this._safetyCheckFunction=DEFAULTS.safetyCheckFunction}__init15(){this._easingFunction=DEFAULTS.easingFunction}__init16(){this._yoyoEasingFunction=DEFAULTS.yoyoEasingFunction}__init17(){this._interpolationFunction=DEFAULTS.interpolationFunction}__init18(){this._chainedTweens=[]}__init19(){this._onStartCallbackFired=!1}__init20(){this._onAfterDelayCallbackFired=!1}__init21(){this._id=Sequence.nextId()}__init22(){this._isChainStopped=!1}get _group(){return this._groupRef?this._groupRef:Group.shared}set _group(_){this._groupRef=_}constructor(_,C){Tween.prototype.__init.call(this),Tween.prototype.__init2.call(this),Tween.prototype.__init3.call(this),Tween.prototype.__init4.call(this),Tween.prototype.__init5.call(this),Tween.prototype.__init6.call(this),Tween.prototype.__init7.call(this),Tween.prototype.__init8.call(this),Tween.prototype.__init9.call(this),Tween.prototype.__init10.call(this),Tween.prototype.__init11.call(this),Tween.prototype.__init12.call(this),Tween.prototype.__init13.call(this),Tween.prototype.__init14.call(this),Tween.prototype.__init15.call(this),Tween.prototype.__init16.call(this),Tween.prototype.__init17.call(this),Tween.prototype.__init18.call(this),Tween.prototype.__init19.call(this),Tween.prototype.__init20.call(this),Tween.prototype.__init21.call(this),Tween.prototype.__init22.call(this),this._object=_,this._group=C}getId(){return this._id}getGroup(){return this._group}getTimescale(){return this._timescale}isPlaying(){return this._isPlaying}isPaused(){return this._isPaused}from(_){try{JSON.stringify(_)}catch{throw new Error("The object you provided to the from() method has a circular reference!")}return this._setupProperties(_,this._valuesStart,_,this._valuesStartRepeat,!0),this}to(_,C){try{this._valuesEnd=JSON.parse(JSON.stringify(_))}catch{return console.warn("The object you provided to the to() method has a circular reference!. It can't be cloned. Falling back to dynamic targeting"),this.dynamicTo(_,C)}return C!==void 0&&(this._duration=C),this}dynamicTo(_,C){return this._valuesEnd=_,C!==void 0&&(this._duration=C),this}duration(_){return this._duration=_,this}start(_){return this._isPlaying?this:(_!=null&&(this._delayTime=_),this._group.add(this),this._reversed&&(this._swapEndStartRepeatValues(this._valuesStartRepeat,this._valuesEnd),this._valuesStart=JSON.parse(JSON.stringify(this._valuesStartRepeat))),this._repeatCount=0,this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onAfterDelayCallbackFired=!1,this._isChainStopped=!1,this._startTime=-this._delayTime,this._elapsedTime=0,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,!1),this)}restart(_){return this.reset(),this.start(_)}reset(){return this._isPlaying&&this.stop(),this._valuesStart={},this._valuesStartRepeat={},this}rewind(){this._isPlaying&&this.stop(),this._reversed&&this._swapEndStartRepeatValues(this._valuesStartRepeat,this._valuesEnd);const _=this._easingFunction(0);return this._updateProperties(this._object,this._valuesStart,this._valuesEnd,_),this}_setupProperties(_,C,T,R,P){for(const I in T){const E=_[I],B=Array.isArray(E),O=!Number.isNaN(Number(E)),G=B?"array":typeof E,L=G=="object",F=typeof T[I]=="object",D=!B&&Array.isArray(T[I]);G=="undefined"||G=="function"||T[I]==null||!B&&!O&&!L||((L||B||F)&&E&&!D?(typeof C[I]>"u"&&(C[I]=B?[]:{}),typeof R[I]>"u"&&(R[I]=B?[]:{}),this._setupProperties(E,C[I],T[I],R[I],P)):((typeof C[I]>"u"||P)&&(C[I]=E),(typeof R[I]>"u"||P)&&(D?R[I]=T[I].slice().reverse()[0]:R[I]=C[I]||0)))}}stop(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object,this),this):this}end(_=!1){let C=[];if(_||(C=this._chainedTweens,this._chainedTweens=[]),this.resume(),this.update(1/0),!_){this._chainedTweens=C;for(let T=0,R=this._chainedTweens.length;T<R;T++)this._chainedTweens[T].start()}return this}skip(_,C=!1){return this.resume(),this.update(_*this._duration-(C?this._elapsedTime:0)),this}pause(){return this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._group.remove(this),this)}resume(){return!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._group.add(this),this)}stopChainedTweens(){for(let _=0,C=this._chainedTweens.length;_<C;_++)this._chainedTweens[_].stop();return this}startChainedTweens(_=!1){_&&this.stop();for(let C=0,T=this._chainedTweens.length;C<T;C++)this._chainedTweens[C].start();return this}group(_){return this._group=_,this}delay(_){return this._delayTime=_,this}timescale(_){return this._timescale=_,this}repeat(_=1/0){return this._repeat=_,this}repeatDelay(_){return this._repeatDelayTime=_,this}yoyo(_=!0){return this._yoyo=_,this}easing(_){return this._easingFunction=_,this}safetyCheck(_){return this._safetyCheckFunction=_,this}yoyoEasing(_){return this._yoyoEasingFunction=_,this}interpolation(_){return this._interpolationFunction=_,this}chain(..._){return this._chainedTweens=_,this}onStart(_){return this._onStartCallback=_,this}onAfterDelay(_){return this._onAfterDelayCallback=_,this}onUpdate(_){return this._onUpdateCallback=_,this}onRepeat(_){return this._onRepeatCallback=_,this}onComplete(_){return this._onCompleteCallback=_,this}onStop(_){return this._onStopCallback=_,this}update(_,C=!1){const T=this._internalUpdate(_);return!T&&!C&&this._group.remove(this),T}_internalUpdate(_){if(!this._safetyCheckFunction(this._object)||this._isPaused)return!1;_*=this._timescale;let C;this._elapsedTime+=_;const T=this._duration,R=this._startTime+this._elapsedTime;if(R>T&&!this._isPlaying)return!1;this.isPlaying||this.start(),this._onStartCallbackFired==!1&&(this._onStartCallback&&this._onStartCallback(this._object,this),this._onStartCallbackFired=!0),this._onAfterDelayCallbackFired==!1&&R>=0&&(this._onAfterDelayCallback&&this._onAfterDelayCallback(this._object,this),this._onAfterDelayCallbackFired=!0),C=R/this._duration,this._duration==0&&(R>=0?C=1:C=0),C=Math.min(1,C),C=Math.max(0,C);let P=Number.isFinite(R)?R%this._duration:R;Number.isNaN(P)&&(P=0);const I=Math.floor(R/this._duration);let E;if(this._reversed&&this._yoyoEasingFunction?E=this._yoyoEasingFunction(C):E=this._easingFunction(C),this._updateProperties(this._object,this._valuesStart,this._valuesEnd,E),this._onUpdateCallback&&(C!=1||this._repeat-this._repeatCount<=0)&&this._onUpdateCallback(this._object,C,this),C==1){if(this._repeat-this._repeatCount>0){const B=this._repeatCount;if(this._repeatCount=Math.min(this._repeat+1,this._repeatCount+I),this._onUpdateCallback&&(this._repeat-this._repeatCount<0||P<=0)&&this._onUpdateCallback(this._object,C,this),this._yoyo?this._swapEndStartRepeatValues(this._valuesStartRepeat,this._valuesEnd):this._moveForwardStartRepeatValues(this._valuesStartRepeat,this._valuesEnd),this._valuesStart=JSON.parse(JSON.stringify(this._valuesStartRepeat)),this._repeatDelayTime!==void 0?this._startTime=-this._repeatDelayTime:this._startTime=0,this._onRepeatCallback){let O=1;Number.isFinite(I)?O=this._repeatCount-B:Number.isFinite(this._repeat)&&(O=this._repeat-B);for(let G=0;G<O;G++)this._onRepeatCallback(this._object,B+1+G,this)}if(this._elapsedTime=0,this._repeat-this._repeatCount>=0)return P>0&&Number.isFinite(this._repeat)&&this._internalUpdate(P),!0}this._onCompleteCallback&&this._onCompleteCallback(this._object,this);for(let B=0,O=this._chainedTweens.length;B<O;B++)this._chainedTweens[B].start(),P>0&&this._chainedTweens[B].update(P);return this._isPlaying=!1,!1}return!0}_updateProperties(_,C,T,R){for(const P in T){if(C[P]==null)continue;const I=C[P];let E=T[P];const B=Array.isArray(_[P]),O=Array.isArray(E);!B&&O?this._reversed?_[P]=this._interpolationFunction(E.concat([I]),R):_[P]=this._interpolationFunction([I].concat(E),R):typeof E=="object"&&E?this._updateProperties(_[P],I,E,R):(E=this._handleRelativeValue(I,E),typeof E=="number"&&(typeof I=="number"||typeof I=="string")&&(_[P]=Number(I)+(E-Number(I))*R,typeof I=="string"&&(_[P]=String(_[P]))))}}_handleRelativeValue(_,C){return typeof C!="string"?C:C.charAt(0)=="+"||C.charAt(0)=="-"?_+Number(C):Number(C)}_swapEndStartRepeatValues(_,C){for(const T in _){const R=!Array.isArray(_[T])&&Array.isArray(C[T]);if(typeof _[T]=="object")this._swapEndStartRepeatValues(_[T],C[T]);else{const P=_[T];if(typeof C[T]=="string")_[T]=Number(_[T])+Number(C[T]),C[T]=P;else if(R){const I=C[T].slice().reverse();_[T]=I[0],C[T]=I}else _[T]=C[T],C[T]=P}}}_moveForwardStartRepeatValues(_,C){for(const T in _)typeof C[T]=="object"?this._moveForwardStartRepeatValues(_[T],C[T]):typeof C[T]=="string"&&(_[T]=Number(_[T])+Number(C[T]))}}function fitToView(A,_,C=0,T=!0){let R=_.scale.x,P=_.scale.y;if(!A)throw new Error("Parent is not defined");const I=A.width-C*2,E=A.height-C*2,B=I-Math.round(_.width),O=E-Math.round(_.height);if(B<0&&(R=I/(_.width/R)),O<0&&(P=E/(_.height/P)),R<=0||P<=0){_.scale.set(0);return}if(T||_.scale.x===_.scale.y){const G=Math.min(R,P);_.scale.set(G,G)}else{const G=_.scale.x/_.scale.y;B<O?_.scale.set(R,R/G):_.scale.set(P*G,P)}}function getTextView(A){return typeof A=="string"||typeof A=="number"?new Text({text:String(A)}):A}var __defProp=Object.defineProperty,__defNormalProp=(A,_,C)=>_ in A?__defProp(A,_,{enumerable:!0,configurable:!0,writable:!0,value:C}):A[_]=C,__publicField=(A,_,C)=>__defNormalProp(A,typeof _!="symbol"?_+"":_,C);class FancyButton extends ButtonContainer{constructor(_){super(),__publicField(this,"animations"),__publicField(this,"originalInnerViewState"),__publicField(this,"defaultDuration",100),__publicField(this,"options"),__publicField(this,"_padding",0),__publicField(this,"_offset",{}),__publicField(this,"_textOffset",{}),__publicField(this,"iconOffset",{}),__publicField(this,"innerView",new Container),__publicField(this,"_views",{}),__publicField(this,"state","default"),__publicField(this,"anchor"),__publicField(this,"_defaultTextScale",{x:1,y:1}),__publicField(this,"_defaultIconScale",{x:1,y:1}),__publicField(this,"_defaultTextAnchor",{x:.5,y:.5}),__publicField(this,"_defaultIconAnchor",{x:.5,y:.5}),this.options=_??{};const{defaultView:C,hoverView:T,pressedView:R,disabledView:P,text:I,padding:E,offset:B,textOffset:O,iconOffset:G,defaultTextScale:L,defaultIconScale:F,defaultTextAnchor:D,defaultIconAnchor:q,scale:U,anchor:V,anchorX:W,anchorY:z,icon:X,animations:Y}=_??{};this.addChild(this.innerView),this.anchor=new ObservablePoint({_onUpdate:()=>this.updateAnchor()}),this.anchor.set(W??V??0,z??V??0),this.padding=E??0,this.offset=B??{},this.textOffset=O??{},this.iconOffset=G??{},this.defaultTextScale=L??{x:1,y:1},this.defaultIconScale=F??{x:1,y:1},this.defaultTextAnchor=D??{x:.5,y:.5},this.defaultIconAnchor=q??{x:.5,y:.5},this.scale.set(U??1),Y&&(this.animations=Y,this.setOriginalInnerViewState(),Ticker.shared.add(()=>Group.shared.update())),this.setState("default"),this.defaultView=C,this.hoverView=T,this.pressedView=R,this.disabledView=P,this.text=I??"",X!==void 0&&(this.iconView=X),this.initStateControl()}set text(_){if(!_||_===0){this.removeView("textView");return}if(!this._views.textView){this.createTextView(_);return}this._views.textView.text=_.toString()}get text(){var _;return(_=this._views.textView)==null?void 0:_.text}set enabled(_){this.button.enabled=_,this.setState(_?"default":"disabled")}get enabled(){return this.button.enabled}setState(_,C=!1){if(!C&&this.state===_)return;const T=this.getStateView(this.state);T&&(T.visible=!1),this.state=_;const R=this.getStateView(_);R&&(this.setOffset(R,_,this.offset),R.visible=!0),this.updateAnchor(),this.playAnimations(_)}createTextView(_){var C;if(this._views.textView=getTextView(_),((C=this.options)==null?void 0:C.defaultTextScale)===void 0){const{x:T,y:R}=this._views.textView.scale;this._defaultTextScale={x:T,y:R}}this.innerView.addChild(this._views.textView),this.adjustTextView(this.state)}setOffset(_,C,T){const R=T?T[C]:{x:0,y:0},P=T==null?void 0:T.default;R?(_.x+=R.x??0,_.y+=R.y??0):P?(_.x+=P.x??0,_.y+=P.y??0):(T.x||T.y)&&(_.x+=T.x??0,_.y+=T.y??0)}getStateView(_){if(this._views)switch(_){case"hover":return this._views.hoverView??this._views.defaultView??void 0;case"pressed":return this._views.pressedView??this._views.hoverView??this._views.defaultView??void 0;case"disabled":return this._views.disabledView??this._views.defaultView??void 0;case"default":return this._views.defaultView??void 0;default:return}}adjustTextView(_){var P;if(!this.text||!this._views.textView)return;const C=this.getStateView(this.state),T=this._defaultTextAnchor.x??.5,R=this._defaultTextAnchor.y??.5;if(C){if((P=this.options)!=null&&P.ignoreRefitting||this._views.textView.scale.set(this._defaultTextScale.x,this._defaultTextScale.y),this.contentFittingMode==="default"&&fitToView(C,this._views.textView,this.padding,!1),this.contentFittingMode==="fill"){this._views.textView.scale.set(1);const I=C.width-this.padding*2,E=C.height-this.padding*2,B=I/this._views.textView.width,O=E/this._views.textView.height,G=Math.min(B,O);this._views.textView.scale.set(G*(this._defaultTextScale.x??1),G*(this._defaultTextScale.y??1))}this._views.textView.x=C.x+C.width/2,this._views.textView.y=C.y+C.height/2}this._views.textView.anchor.set(T,R),this.setOffset(this._views.textView,_,this.textOffset)}adjustIconView(_){var P;if(!this._views.iconView)return;const C=this.getStateView(_);if(!C)return;if((P=this.options)!=null&&P.ignoreRefitting||this._views.iconView.scale.set(this._defaultIconScale.x,this._defaultIconScale.y),this.contentFittingMode==="default"&&fitToView(C,this._views.iconView,this.padding,!1),this.contentFittingMode==="fill"){this._views.iconView.scale.set(1);const I=C.width-this.padding*2,E=C.height-this.padding*2,B=I/this._views.iconView.width,O=E/this._views.iconView.height,G=Math.min(B,O);this._views.iconView.scale.set(G*(this._defaultIconScale.x??1),G*(this._defaultIconScale.y??1))}const T=this._defaultIconAnchor.x??.5,R=this._defaultIconAnchor.y??.5;"anchor"in this._views.iconView?this._views.iconView.anchor.set(T,R):this._views.iconView.pivot.set(T*(this._views.iconView.width/this._views.iconView.scale.x),R*(this._views.iconView.height/this._views.iconView.scale.y)),this._views.iconView.x=C.x+C.width/2,this._views.iconView.y=C.y+C.height/2,this.setOffset(this._views.iconView,_,this.iconOffset)}updateAnchor(){if(!this._views)return;const _=this.anchor.x??0,C=this.anchor.y??0;if([this._views.defaultView,this._views.hoverView,this._views.pressedView,this._views.disabledView].forEach(R=>{var P;R&&((P=R.anchor)==null||P.set(0),R.x=-R.width*_,R.y=-R.height*C)}),this._views.defaultView){const{x:R,y:P,width:I,height:E}=this._views.defaultView;this.hitArea=new Rectangle(R,P,I,E)}this.adjustIconView(this.state),this.adjustTextView(this.state)}set contentFittingMode(_){this.options.contentFittingMode=_}get contentFittingMode(){return this.options.contentFittingMode??"default"}set defaultView(_){this.updateView("defaultView",_),this._views.disabledView&&this.state!=="default"&&(this._views.disabledView.visible=!1)}get defaultView(){return this._views.defaultView}set hoverView(_){this.updateView("hoverView",_),this._views.hoverView&&this.state!=="hover"&&(this._views.hoverView.visible=!1)}get hoverView(){return this._views.hoverView}set pressedView(_){this.updateView("pressedView",_),this._views.pressedView&&this.state!=="pressed"&&(this._views.pressedView.visible=!1)}get pressedView(){return this._views.pressedView}set disabledView(_){this.updateView("disabledView",_),this._views.disabledView&&this.state!=="disabled"&&(this._views.disabledView.visible=!1)}get disabledView(){return this._views.disabledView}updateView(_,C){var T;C!==void 0&&(this.removeView(_),(T=this.options)!=null&&T.nineSliceSprite&&(typeof C=="string"?this._views[_]=new NineSliceSprite({texture:Texture.from(C),leftWidth:this.options.nineSliceSprite[0],topHeight:this.options.nineSliceSprite[1],rightWidth:this.options.nineSliceSprite[2],bottomHeight:this.options.nineSliceSprite[3]}):C instanceof Texture?this._views[_]=new NineSliceSprite({texture:C,leftWidth:this.options.nineSliceSprite[0],topHeight:this.options.nineSliceSprite[1],rightWidth:this.options.nineSliceSprite[2],bottomHeight:this.options.nineSliceSprite[3]}):console.warn("NineSliceSprite can not be used with views set as Container. Pass the texture or texture name as instead of the Container extended instance.")),this._views[_]||(this._views[_]=getView(C)),this.setOffset(this._views[_],this.state,this.offset),this._views[_].parent||this.innerView.addChild(this._views[_]),this.updateAnchor(),this._views.iconView&&this.innerView.addChild(this._views.iconView),this._views.textView&&this.innerView.addChild(this._views.textView),this.setState(this.state,!0))}removeView(_){this._views[_]&&(this.innerView.removeChild(this._views[_]),this._views[_]=void 0)}set textView(_){_!==void 0&&(this.removeView("textView"),_!==null&&this.createTextView(_))}get textView(){return this._views.textView}set iconView(_){var C;if(_!==void 0&&(this.removeView("iconView"),_!==null)){if(this._views.iconView=getView(_),((C=this.options)==null?void 0:C.defaultIconScale)===void 0){const{x:T,y:R}=this._views.iconView.scale;this._defaultIconScale={x:T,y:R}}this._views.iconView.parent||this.innerView.addChild(this._views.iconView),this.setState(this.state,!0)}}get iconView(){return this._views.iconView}playAnimations(_){if(!this.animations)return;const C=this.animations[_]??this.animations.default;if(C){const T=C;this.defaultDuration=T.duration??this.defaultDuration,new Tween(this.innerView).to(T.props,T.duration).start();return}new Tween(this.innerView).to(this.originalInnerViewState,this.defaultDuration).start()}setOriginalInnerViewState(){var C,T,R,P,I;this.originalInnerViewState={x:this.innerView.x,y:this.innerView.y,width:this.innerView.width,height:this.innerView.height,scale:{x:this.innerView.scale.x,y:this.innerView.scale.y}};const _=(C=this.animations)==null?void 0:C.default;_&&(this.innerView.x=_.props.x??this.originalInnerViewState.x??0,this.innerView.y=_.props.y??this.originalInnerViewState.y??0,this.innerView.width=_.props.width??this.originalInnerViewState.width??0,this.innerView.height=_.props.height??this.originalInnerViewState.height??0,this.innerView.scale.x=((T=_.props.scale)==null?void 0:T.x)??((R=this.originalInnerViewState.scale)==null?void 0:R.x)??1,this.innerView.scale.y=((P=_.props.scale)==null?void 0:P.y)??((I=this.originalInnerViewState.scale)==null?void 0:I.y)??1)}initStateControl(){this.onDown.connect(()=>{this.setState("pressed")}),this.onUp.connect(()=>{this.setState(isMobile.any?"default":"hover")}),this.onUpOut.connect(()=>{this.setState("default")}),this.onOut.connect(()=>{this.button.isDown||this.setState("default")}),this.onPress.connect(()=>{this.setState(isMobile.any?"default":"hover")}),this.onHover.connect(()=>{this.button.isDown||this.setState(isMobile.any?"default":"hover")})}set padding(_){this._padding=_,this.adjustTextView(this.state),this.adjustIconView(this.state)}get padding(){return this._padding}set offset(_){this._offset=_,this.updateAnchor()}get offset(){return this._offset}set textOffset(_){this._textOffset=_,this.adjustTextView(this.state)}get textOffset(){return this._textOffset}set defaultTextScale(_){if(_===void 0)return;this.options.defaultTextScale=_;const C=typeof _=="number";this._defaultTextScale.x=C?_:_.x??1,this._defaultTextScale.y=C?_:_.y??1,this.adjustTextView(this.state)}get defaultTextScale(){return this.defaultTextScale}set defaultIconScale(_){if(_===void 0)return;this.options.defaultIconScale=_;const C=typeof _=="number";this._defaultIconScale.x=C?_:_.x??1,this._defaultIconScale.y=C?_:_.y??1,this.adjustIconView(this.state)}get defaultIconScale(){return this.defaultIconScale}set defaultTextAnchor(_){if(_===void 0)return;this.options.defaultTextAnchor=_;const C=typeof _=="number";this._defaultTextAnchor.x=C?_:_.x??1,this._defaultTextAnchor.y=C?_:_.y??1,this.adjustTextView(this.state)}get defaultTextAnchor(){return this.defaultTextAnchor}set defaultIconAnchor(_){if(_===void 0)return;this.options.defaultIconAnchor=_;const C=typeof _=="number";this._defaultIconAnchor.x=C?_:_.x??1,this._defaultIconAnchor.y=C?_:_.y??1,this.adjustIconView(this.state)}get defaultIconAnchor(){return this.defaultIconAnchor}set width(_){var C;(C=this.options)!=null&&C.nineSliceSprite?(this._views.defaultView&&(this._views.defaultView.width=_),this._views.hoverView&&(this._views.hoverView.width=_),this._views.pressedView&&(this._views.pressedView.width=_),this._views.disabledView&&(this._views.disabledView.width=_),this.adjustTextView(this.state),this.adjustIconView(this.state),this.updateAnchor()):super.width=_}get width(){return super.width}set height(_){var C;(C=this.options)!=null&&C.nineSliceSprite?(this._views.defaultView&&(this._views.defaultView.height=_),this._views.hoverView&&(this._views.hoverView.height=_),this._views.pressedView&&(this._views.pressedView.height=_),this._views.disabledView&&(this._views.disabledView.height=_),this.adjustTextView(this.state),this.adjustIconView(this.state),this.updateAnchor()):super.height=_}get height(){return super.height}setSize(_,C){var T;(T=this.options)!=null&&T.nineSliceSprite?(this._views.defaultView&&this._views.defaultView.setSize(_,C),this._views.hoverView&&this._views.hoverView.setSize(_,C),this._views.pressedView&&this._views.pressedView.setSize(_,C),this._views.disabledView&&this._views.disabledView.setSize(_,C),this.adjustTextView(this.state),this.adjustIconView(this.state),this.updateAnchor()):super.setSize(_,C)}}function makeButton(A){const _=A.width??120,C=A.height??44,T=C/2,R=E=>new Graphics().roundRect(0,0,_,C,T).fill(E),P=A.color??2976991,I=new FancyButton({defaultView:R(P),hoverView:R(lighten(P,.12)),pressedView:R(lighten(P,-.12)),text:new Text({text:A.label,style:new TextStyle({fontFamily:"Arial",fontSize:18,fontWeight:"700",fill:A.textColor??16777215})}),anchor:.5});return I.onPress.connect(A.onPress),I}function lighten(A,_){const C=Math.min(255,Math.max(0,(A>>16&255)+Math.round(255*_))),T=Math.min(255,Math.max(0,(A>>8&255)+Math.round(255*_))),R=Math.min(255,Math.max(0,(A&255)+Math.round(255*_)));return C<<16|T<<8|R}class Card extends Container{constructor(C){super();pt(this,"sprite");pt(this,"code",0);this.textures=C,this.sprite=new Sprite(C.back),this.sprite.anchor.set(.5),this.addChild(this.sprite)}setSize(C,T){const R=this.sprite.texture;this.sprite.scale.set(C/R.width,T/R.height)}setCard(C,T=!0){this.code=C;const R=this.sprite.width,P=this.sprite.height;this.sprite.texture=T?this.textures.texture(C):this.textures.back,R&&P&&this.sprite.scale.set(R/this.sprite.texture.width,P/this.sprite.texture.height)}flipTo(C,T,R=280){const P=this.sprite.scale.x;T.to(R/2,I=>{this.sprite.scale.x=P*(1-I)},{easing:Easing$1.quadInOut,onComplete:()=>{this.setCard(C,!0);const I=this.sprite.scale.x;this.sprite.scale.x=0,T.to(R/2,E=>{this.sprite.scale.x=I*E},{easing:Easing$1.quadInOut})}})}get cardCode(){return this.code}reset(){this.code=0,this.sprite.texture=this.textures.back,this.alpha=1,this.visible=!0,this.scale.set(1),this.rotation=0}}const CHIP_COLORS=[16777215,15158332,3066993,3447003,10181046,3426654];class ChipStack extends Container{constructor(){super();pt(this,"disc");pt(this,"amountText");pt(this,"amount",0);this.disc=new Graphics,this.amountText=new Text({text:"",style:new TextStyle({fontFamily:"Arial",fontSize:20,fontWeight:"700",fill:16777215,stroke:{color:0,width:3}})}),this.amountText.anchor.set(.5,0),this.amountText.position.set(0,14),this.addChild(this.disc,this.amountText),this.setAmount(0)}setAmount(C){if(this.amount=C,this.visible=C>0,C<=0)return;const T=Math.min(5,1+Math.floor(Math.log10(Math.max(1,C))));this.disc.clear();for(let R=0;R<T;R++){const P=CHIP_COLORS[R%CHIP_COLORS.length],I=-R*5;this.disc.ellipse(0,I,18,7).fill(P).stroke({width:1.5,color:0,alpha:.4})}this.amountText.text=formatChips(C),this.amountText.position.set(0,-T*5-4),this.amountText.anchor.set(.5,1)}get value(){return this.amount}reset(){this.setAmount(0)}}function formatChips(A){return A>=1e6?`${(A/1e6).toFixed(1)}M`:A>=1e3?`${(A/1e3).toFixed(1)}K`:String(A)}class PotDisplay extends Container{constructor(){super();pt(this,"mainChips");pt(this,"totalLabel");pt(this,"sidePotLabel");this.mainChips=new ChipStack,this.totalLabel=new Text({text:"",style:new TextStyle({fontFamily:"Arial",fontSize:22,fontWeight:"700",fill:16766720,stroke:{color:0,width:4}})}),this.totalLabel.anchor.set(.5),this.totalLabel.position.set(0,-36),this.sidePotLabel=new Text({text:"",style:new TextStyle({fontFamily:"Arial",fontSize:15,fill:13421772})}),this.sidePotLabel.anchor.set(.5,0),this.sidePotLabel.position.set(0,24),this.addChild(this.mainChips,this.totalLabel,this.sidePotLabel)}setPots(C){const T=C.reduce((P,I)=>P+I.amount,0);this.visible=T>0,this.mainChips.setAmount(T),this.totalLabel.text=T>0?`底池 ${formatChips(T)}`:"";const R=C.filter(P=>P.index>0);this.sidePotLabel.text=R.length>0?R.map(P=>`边池${P.index} ${formatChips(P.amount)}`).join("  "):""}}const AVATAR_RADIUS=34,HOLE_CARD_W=38,HOLE_CARD_H=53;class Seat extends Container{constructor(C,T){super();pt(this,"panel");pt(this,"avatar");pt(this,"nameLabel");pt(this,"chipsLabel");pt(this,"countdownRing");pt(this,"holeCards",[]);pt(this,"dealerMark");pt(this,"countdownRemaining",0);pt(this,"countdownTotal",0);pt(this,"isActing",!1);this.seatNo=C,this.textures=T,this.panel=new Graphics,this.avatar=new Graphics,this.countdownRing=new Graphics,this.nameLabel=new Text({text:"",style:new TextStyle({fontFamily:"Arial",fontSize:16,fill:16777215})}),this.nameLabel.anchor.set(.5),this.nameLabel.position.set(0,AVATAR_RADIUS+14),this.chipsLabel=new Text({text:"",style:new TextStyle({fontFamily:"Arial",fontSize:15,fontWeight:"700",fill:16766720})}),this.chipsLabel.anchor.set(.5),this.chipsLabel.position.set(0,AVATAR_RADIUS+34),this.dealerMark=new Text({text:"D",style:new TextStyle({fontFamily:"Arial",fontSize:18,fontWeight:"700",fill:2236962})}),this.dealerMark.anchor.set(.5),this.dealerMark.visible=!1,this.addChild(this.countdownRing,this.panel,this.avatar,this.nameLabel,this.chipsLabel,this.dealerMark)}sync(C){const T=C.status!==SeatStatus.Empty;this.drawAvatar(T),this.nameLabel.text=T?C.name??`玩家${C.playerId??""}`:"空位",this.chipsLabel.text=T&&C.chips!=null?formatChips(C.chips):"",this.chipsLabel.visible=T;const R=C.status===SeatStatus.Folded||C.status===SeatStatus.SitOut;this.alpha=R?.45:1,this.dealerMark.visible=!!C.isButton,this.dealerMark.position.set(AVATAR_RADIUS+8,-AVATAR_RADIUS-8),this.syncHoleCards(C),this.isActing=(C.countdownMs??0)>0,this.isActing?(this.countdownRemaining=C.countdownMs,this.countdownTotal=C.countdownTotalMs??C.countdownMs):(this.countdownRemaining=0,this.countdownRing.clear())}syncHoleCards(C){const T=C.holeCards??[];for(;this.holeCards.length<T.length;){const E=new Card(this.textures);E.setSize(HOLE_CARD_W,HOLE_CARD_H),this.holeCards.push(E),this.addChild(E)}const R=T.length,P=HOLE_CARD_W*.62,I=-((R-1)*P)/2;this.holeCards.forEach((E,B)=>{B<R?(E.visible=!0,E.setCard(T[B],T[B]>0),E.setSize(HOLE_CARD_W,HOLE_CARD_H),E.position.set(I+B*P,-AVATAR_RADIUS-HOLE_CARD_H/2-4)):E.visible=!1})}drawAvatar(C){this.panel.clear(),this.avatar.clear(),C?this.avatar.circle(0,0,AVATAR_RADIUS).fill(2899536).stroke({width:3,color:15844367}):this.avatar.circle(0,0,AVATAR_RADIUS).fill({color:0,alpha:.25}).stroke({width:2,color:16777215,alpha:.3})}update(C){if(!this.isActing||this.countdownTotal<=0)return;this.countdownRemaining=Math.max(0,this.countdownRemaining-C);const T=this.countdownRemaining/this.countdownTotal;this.countdownRing.clear();const R=T>.3?3066993:15158332;this.countdownRing.arc(0,0,AVATAR_RADIUS+5,-Math.PI/2,-Math.PI/2+Math.PI*2*T).stroke({width:4,color:R}),this.countdownRemaining<=0&&(this.isActing=!1)}destroy(){this.holeCards.forEach(C=>C.destroy()),this.holeCards.length=0,super.destroy({children:!0})}}class TableScene extends Container{constructor(C,T=9){super();pt(this,"felt",new Graphics);pt(this,"seats",[]);pt(this,"betStacks",[]);pt(this,"communityCards",[]);pt(this,"potDisplay",new PotDisplay);pt(this,"menuButton");pt(this,"tweener",new Tweener);pt(this,"orientation","portrait");pt(this,"layout");pt(this,"onCommand");this.maxSeats=T,this.layout=getTableLayout(this.orientation,T),this.addChild(this.felt);for(let R=0;R<T;R++){const P=new Seat(R,C);this.seats.push(P);const I=new ChipStack;this.betStacks.push(I),this.addChild(P,I)}for(let R=0;R<5;R++){const P=new Card(C);P.visible=!1,this.communityCards.push(P),this.addChild(P)}this.addChild(this.potDisplay),this.menuButton=makeButton({label:"离桌",width:90,height:38,color:9121326,onPress:()=>{var R;return(R=this.onCommand)==null?void 0:R.call(this,{type:"leave"})}}),this.addChild(this.menuButton),this.relayout()}setCommandSink(C){this.onCommand=C}setOrientation(C){this.orientation!==C&&(this.orientation=C,this.relayout())}relayout(){this.layout=getTableLayout(this.orientation,this.maxSeats),this.drawFelt(),this.seats.forEach((C,T)=>{const R=this.layout.seats[T];C.position.set(R.x,R.y),this.betStacks[T].position.set(R.x+(this.layout.center.x-R.x)*.32,R.y+(this.layout.center.y-R.y)*.32)}),this.relayoutCommunity(),this.potDisplay.position.set(this.layout.pot.x,this.layout.pot.y),this.menuButton.position.set(this.layout.design.width-60,36)}relayoutCommunity(){const{width:C,height:T}=this.layout.communityCardSize,R=C*.16,P=C*5+R*4,I=this.layout.community.x-P/2+C/2;this.communityCards.forEach((E,B)=>{E.setSize(C,T),E.position.set(I+B*(C+R),this.layout.community.y)})}drawFelt(){const{center:C,radiusX:T,radiusY:R}=this.layout;this.felt.clear(),this.felt.ellipse(C.x,C.y,T+26,R+26).fill(5913123),this.felt.ellipse(C.x,C.y,T,R).fill(1531974).stroke({width:4,color:801322}),this.felt.ellipse(C.x,C.y,T*.6,R*.6).stroke({width:2,color:1002038,alpha:.5})}sync(C){this.seats.forEach((T,R)=>{var I;const P=C.seats[R];P&&T.sync(P),this.betStacks[R].setAmount(((I=C.seats[R])==null?void 0:I.betThisRound)??0)}),this.communityCards.forEach((T,R)=>{const P=C.communityCards[R];P!=null?(T.visible=!0,T.setCard(P,!0)):T.visible=!1}),this.potDisplay.setPots(C.pots)}play(C){switch(C.type){case"dealCommunity":C.cards.forEach((T,R)=>{const P=this.communityCards[C.fromIndex+R];P&&(P.visible=!0,P.flipTo(T,this.tweener))});break;case"playerBet":this.flashFloatText(C.seatNo,betLabel(C.actType,C.amount));break;case"floatText":C.seatNo!=null&&this.flashFloatText(C.seatNo,C.text);break;case"moveButton":break;case"gameResult":C.winners.forEach(T=>this.flashFloatText(T.seatNo,`+${T.win}`));break}}flashFloatText(C,T){const R=this.seats[C];if(!R)return;const P=new Text({text:T,style:new TextStyle({fontFamily:"Arial",fontSize:22,fontWeight:"700",fill:16770688,stroke:{color:0,width:4}})});P.anchor.set(.5),P.position.set(R.x,R.y-30),this.addChild(P);const I=P.y;this.tweener.to(900,E=>{P.y=I-40*E,P.alpha=1-E},{easing:Easing$1.quadOut,onComplete:()=>P.destroy()})}update(C){this.tweener.update(C);for(const T of this.seats)T.update(C)}destroy(){this.tweener.clear(),super.destroy({children:!0})}}function betLabel(A,_){switch(A){case 1:return"过牌";case 2:return"弃牌";case 3:return`跟注 ${_}`;case 4:return`加注 ${_}`;case 5:return"All-in";default:return""}}class TableGame{constructor(_=9){pt(this,"stage",new PixiStage);pt(this,"assets",new AssetLoader);pt(this,"scaler",null);pt(this,"perf",null);pt(this,"scene",null);pt(this,"userCommandCallback");pt(this,"pendingState",null);pt(this,"ready",!1);pt(this,"tickHandler",_=>{var C;return(C=this.scene)==null?void 0:C.update(_.deltaMS)});this.maxSeats=_}async mount(_){await this.stage.init(_),await this.assets.init(this.stage.renderer),await this.assets.loadTableBundle(),this.scene=new TableScene(this.assets.cards,this.maxSeats),this.scene.setCommandSink(C=>{var T;return(T=this.userCommandCallback)==null?void 0:T.call(this,C)}),this.stage.world.addChild(this.scene),this.scaler=new ResponsiveScaler(this.stage.app,this.stage.world,_,{landscape:DESIGN.landscape,portrait:DESIGN.portrait,fitMode:"fit"}),this.scaler.onOrientation(C=>{var T;(T=this.scene)==null||T.setOrientation(C.orientation)}),this.scaler.start(),this.scene.setOrientation(this.scaler.currentOrientation),this.perf=new PerfMonitor(this.stage.app),this.perf.start(),this.stage.ticker.add(this.tickHandler),this.ready=!0,this.pendingState&&(this.scene.sync(this.pendingState),this.pendingState=null)}sync(_){if(!this.ready||!this.scene){this.pendingState=_;return}this.scene.sync(_)}play(_){var C;(C=this.scene)==null||C.play(_)}setOrientation(_){var C,T;(C=this.scaler)==null||C.forceOrientation(_),(T=this.scene)==null||T.setOrientation(_)}on(_,C){this.userCommandCallback=C}dispatchUserCommand(_){var C;(C=this.userCommandCallback)==null||C.call(this,_)}get perfMonitor(){return this.perf}destroy(){var _,C,T,R;this.ready=!1,(_=this.stage.ticker)==null||_.remove(this.tickHandler),(C=this.perf)==null||C.destroy(),this.perf=null,(T=this.scaler)==null||T.destroy(),this.scaler=null,(R=this.scene)==null||R.destroy(),this.scene=null,this.assets.destroy(),this.userCommandCallback=void 0,this.pendingState=null,this.stage.destroy()}}function useTable(A,_){const C=reactExports.useRef(null),T=reactExports.useRef(null),[R,P]=reactExports.useState(null);reactExports.useEffect(()=>{const E=C.current;if(!E)return;const B=new TableGame,O=_?_():new SampleBridge(A);let G=!1,L;return B.mount(E).then(()=>{if(G){B.destroy();return}T.current=B,O.attach(B);const F=B.perfMonitor;F&&(L=F.subscribe(P))}).catch(F=>{}),()=>{var F;G=!0,L==null||L(),O.detach(),(F=T.current)==null||F.destroy(),T.current=null}},[A,_]);const I=reactExports.useCallback(E=>{var B;(B=T.current)==null||B.dispatchUserCommand(E)},[]);return{hostRef:C,dispatch:I,perf:R}}function ActionBar({round:A,callAmount:_=0,bigBlind:C=200,maxRaise:T=2e4,onAction:R}){const[P,I]=reactExports.useState(Math.min(T,C*3));return jsxRuntimeExports.jsxs("div",{className:"hud-action-bar",children:[jsxRuntimeExports.jsx("button",{type:"button",className:"hud-btn hud-btn--fold",onClick:()=>R({type:"playerAction",actType:ActionType.Fold,amount:0,round:A}),children:"弃牌"}),jsxRuntimeExports.jsx("button",{type:"button",className:"hud-btn hud-btn--check",onClick:()=>R(_>0?{type:"playerAction",actType:ActionType.Call,amount:_,round:A}:{type:"playerAction",actType:ActionType.Check,amount:0,round:A}),children:_>0?`跟注 ${_}`:"过牌"}),jsxRuntimeExports.jsxs("div",{className:"hud-raise",children:[jsxRuntimeExports.jsx("input",{type:"range",min:C,max:T,step:C,value:P,onChange:E=>I(Number(E.target.value))}),jsxRuntimeExports.jsxs("button",{type:"button",className:"hud-btn hud-btn--raise",onClick:()=>R({type:"playerAction",actType:ActionType.Raise,amount:P,round:A}),children:["加注 ",P]})]})]})}function PerfHud({stats:A}){return null}function TableRoom(){const{roomId:A}=useParams(),_=A??"demo-1",C=reactExports.useMemo(()=>{const I=resolveGameConnection();if(I)return()=>new WsTableBridge(new GameNetClient({url:I.url,token:I.token,loginPayload:I.loginPayload}),_)},[_]),{hostRef:T,dispatch:R,perf:P}=useTable(_,C);return jsxRuntimeExports.jsxs("div",{className:"table-room",children:[jsxRuntimeExports.jsx("div",{ref:T,className:"pixi-host"}),jsxRuntimeExports.jsx(PerfHud,{stats:P}),jsxRuntimeExports.jsx(ActionBar,{round:1,callAmount:0,bigBlind:200,maxRaise:12e3,onAction:R})]})}const TableRoom$1=Object.freeze(Object.defineProperty({__proto__:null,default:TableRoom},Symbol.toStringTag,{value:"Module"}));export{removeItems as $,bgr2rgb as A,Buffer as B,CanvasTextMetrics as C,multiplyHexColors as D,EventEmitter as E,Graphics as F,GpuProgram as G,shapeBuilders as H,ImageSource as I,buildLine as J,canUseNewCanvasBlendModes as K,generateTextureMatrix as L,Matrix as M,FillGradient as N,FillPattern as O,CanvasSource as P,DOMAdapter as Q,Rectangle as R,Shader as S,TextStyle as T,extensions as U,AbstractRenderer as V,RendererType as W,Ticker as X,UPDATE_PRIORITY as Y,Point as Z,isMobile as _,State as a,Container as a0,getTextureBatchBindGroup as a1,GCManagedHash as a2,fastCopy as a3,BindGroup as a4,createIdFromString as a5,CLEAR as a6,TextureSource as a7,UniformGroup as a8,compileHighShaderGpuProgram as a9,compileHighShaderGlProgram as aA,colorBitGl as aB,generateTextureBatchBitGl as aC,roundPixelsBitGl as aD,getBatchSamplersUniformGroup as aE,getPo2TextureFromSource as aF,TableRoom$1 as aG,colorBit as aa,generateTextureBatchBit as ab,roundPixelsBit as ac,TextureMatrix as ad,DefaultBatcher as ae,BigPool as af,getGlobalBounds as ag,TexturePool as ah,Bounds as ai,FilterEffect as aj,Sprite as ak,BatchableSprite as al,RenderGroup as am,multiplyColors as an,UPDATE_COLOR as ao,UPDATE_BLEND as ap,UPDATE_VISIBLE as aq,getLocalBounds as ar,RenderTexture as as,color32BitToUniform as at,VERSION as au,GlobalResourceRegistry as av,RendererInitHook as aw,SystemRunner as ax,Geometry as ay,checkMaxIfStatementsInShader as az,GlProgram as b,Texture as c,deprecation as d,TextureStyle as e,fontStringFromTextStyle as f,CanvasPool as g,getCanvasFillStyle as h,Color as i,collapseSpaces as j,collapseNewlines as k,isBreakingSpace as l,isCollapsibleSpace as m,isBreakAfterChar as n,lru as o,Cache as p,groupD8 as q,getAttributeInfoFromFormat as r,STENCIL_MODES as s,BufferUsage as t,unsafeEvalSupported as u,v8_0_0 as v,warn as w,uid as x,ExtensionType as y,canvasUtils as z};
//# sourceMappingURL=TableRoom-B9cEckDl.js.map
