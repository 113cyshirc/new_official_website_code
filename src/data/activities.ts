import { junit } from 'node:test/reporters';
import { Activity } from '../types';

export const activities: Activity[] = [
  {
    id: '1',
    title: '嘉義高中第一屆校內競程推廣競賽',
    description: '想挑戰邏輯極限、讓實力被看見嗎？ 嘉義高中首度舉辦校內競程比賽隆重登場，等你來一戰成名，檢驗自我、發展資訊專長！',
    date: '2025-06-07',
    image: '',
    category: 'competition',
    features: [],
    schedule: [
      { time: '12:30 - 13:00', description: '報到' },
      { time: '13:00 - 13:20', description: '競賽講解' },
      { time: '13:20 - 13:30', description: '賽前準備' },
      { time: '13:30 - 16:30', description: '競賽時間' },
      { time: '16:30 - 17:00', description: '頒獎典禮' },
      { time: '17:00 -', description: '賦歸'}
    ],
    location: '嘉義高中科學大樓電腦教室B',
    notes: [
      '比賽雖不提供午餐，但備有免費充飢小點心！',
      '📝 報名截止 6 月 4 日（三）',
      '📧 競賽通知寄發 6 月 5 日（四)'
    ],
    registrationLink: 'https://forms.gle/Behp1XXJ9acfJnMWA',
    websiteLink: 'https://cc.cysh.cy.edu.tw/contest',
    prizes: ['🥇 第一名：$1500', '🥈 第二名：$1000', '🥉 第三名：$500' ,'🏅 佳作：$200 x 5 名' ,'前八名皆有獎金、所有參賽者皆可獲得學校認證之參與獎狀！']
  },
  {
    id: '2',
    title: '嘉南聯合資訊探索營',
    description: ' 想學習 python 或資安嗎 這場營隊讓我們帶領你們踏入資訊領域',
    date: '2024-08-10 to 2024-08-11',
    image: '',
    category: 'workshop',
    features: ['合作學校:嘉義女中資研社 台南二中資研社'],
    schedule: [
      { time: '2024-08-10 09:00 - 09:30', description: '營隊開幕：集合、報到、開幕式、分組介紹、破冰' },
      { time: '2024-08-10 09:30 - 11:00', description: '第一節課程（第一部分）：Python / 資安' },
      { time: '2024-08-10 11:00 - 11:10', description: '休息時間' },
      { time: '2024-08-10 11:10 - 12:00', description: '第二節課程：Python / 資安' },
      { time: '2024-08-10 12:00 - 13:00', description: '午餐（班級教室）' },
      { time: '2024-08-10 13:00 - 13:50', description: '團康活動' },
      { time: '2024-08-10 13:50 - 14:00', description: '休息時間' },
      { time: '2024-08-10 14:00 - 16:00', description: '第三節課程：Python / 資安' },
      { time: '2024-08-10 16:00 - 16:10', description: '休息時間' },
      { time: '2024-08-10 16:10 - 17:00', description: '結束活動：回顧與討論，Kahoot 測驗' },
      { time: '2024-08-11 09:00 - 09:30', description: '營隊開幕：集合、報到、開幕式' },
      { time: '2024-08-11 09:30 - 11:00', description: '第一節課程（第一部分）：資安 / Python' },
      { time: '2024-08-11 11:00 - 11:10', description: '休息時間' },
      { time: '2024-08-11 11:10 - 12:00', description: '第二節課程：Python / 資安' },
      { time: '2024-08-11 12:00 - 13:00', description: '午餐' },
      { time: '2024-08-11 13:00 - 13:50', description: '團康活動' },
      { time: '2024-08-11 13:50 - 14:00', description: '休息時間' },
      { time: '2024-08-11 14:00 - 16:00', description: '第三節課程：資安 / Python' },
      { time: '2024-08-11 16:00 - 16:10', description: '休息時間' },
      { time: '2024-08-11 16:10 - 17:00', description: '結束活動：回顧與討論，Kahoot 測驗，賦獎、回家' }
    ],
    location: '嘉義高中科學大樓電腦教室',
    notes: [
      '可自行帶筆電',
      '📝 報名截止  月  日 ()',
      '📧 寄送入取通知 月 日 ()'
    ],
    registrationLink: 'null',
    websiteLink:'',
    prizes: ['參加者可獲得參與獎狀及最後一天的競賽前三名可獲得精美獎品!!!']
  },
  {
    id: '3',
    title: '南七校聯合迎新',
    description: '藉由一天的迎新活動令學員更加認識資訊社,並與友社社員交流想法、增進感情。',
    date: '2024-10-27',
    image: '',
    category: 'activity',
    features: ['合作學校:臺南女中 南大附中 臺南二中 永慶高中 臺南一中 嘉義女中',
                '前所未有的賭場和股市遊戲',        
    ],

    schedule: [
      { time: '09:00 - 09:40', description: '各組破冰' },
      { time: '09:40 - 10:00', description: '開幕' },
      { time: '10:00 - 11:10', description: '講師1' },
      { time: '11:10 - 11:20', description: '休息' },
      { time: '11:20 - 12:30', description: '講師2' },
      { time: '12:30 - 14:00', description: '中午休息' },
      { time: '14:00 - 16:20', description: 'RPG' },
      { time: '16:20 - 17:00', description: '閉幕' }
    ],
    location: '台南女中',
    notes: [
      '活動提供午餐',
      '📝 報名截止  月  日（）',
      '📧 競賽通知寄發  月  日（)'
    ],
    registrationLink: 'null',
    websiteLink: '',
    prizes: ['']
  },
  {
    id: '4',
    title: ' [資深玩家] SCIST2025聯合寒訓',
    description: '開放給南區高中對於資訊有興趣的學員來參與，本次主打三大課程discord bot、AI入門、網頁前端開發',
    date: '2025-01-24 to 2025-01-26',
    image: '',
    category: 'activity',
    features: ['三大課程：Discord Bot、AI入門、網頁前端開發', '晚會活動增進交流', '贊助單位與經驗講座分享'],
    schedule: [
      { time: '01-24 09:00 - 09:30', description: '報到' },
      { time: '01-24 09:30 - 10:00', description: '開幕' },
      { time: '01-24 10:00 - 12:30', description: '闖關遊戲' },
      { time: '01-24 12:30 - 13:30', description: '午餐' },
      { time: '01-24 13:30 - 17:30', description: 'Discord Bot、網頁前端開發' },
      { time: '01-24 19:00 - 21:00', description: '晚會活動' },
      { time: '01-24 21:00 -', description: '賦歸' },
      { time: '01-25 08:30 - 09:00', description: '報到' },
      { time: '01-25 09:00 - 13:00', description: 'AI入門、Discord Bot' },
      { time: '01-25 13:00 - 14:00', description: '午餐' },
      { time: '01-25 14:00 - 17:00', description: '贊助單位講座' },
      { time: '01-25 17:00 - 19:00', description: 'Discord Bot、網頁前端開發' },
      { time: '01-25 19:00 - 21:00', description: '晚會活動' },
      { time: '01-25 21:00 -', description: '賦歸' },
      { time: '01-26 08:30 - 09:00', description: '報到' },
      { time: '01-26 09:00 - 13:00', description: 'AI入門、網頁前端開發' },
      { time: '01-26 13:00 - 14:00', description: '午餐' },
      { time: '01-26 14:00 - 17:00', description: '經驗講座分享' },
      { time: '01-26 17:00 - 18:00', description: '閉幕' },
      { time: '01-26 18:00 -', description: '賦歸' }
    ],
    location: '臺南',
    notes: [
      '比賽雖不提供午餐，但備有免費充飢小點心！',
      '📝 報名截止  月  日（）',
      '📧 競賽通知寄發  月  日（)'
    ],
    registrationLink: 'null',
    websiteLink: 'https://wc.scist.org/',
    prizes: ['']
  },
  

];