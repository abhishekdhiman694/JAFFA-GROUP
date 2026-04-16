/* ============================================================
   JAFFA GROUP — MAIN JAVASCRIPT
   Parallax · Scroll Reveals · Gallery · Projects · Modal
   ============================================================ */

'use strict';

/* ============================================================
   DATA — GALLERY IMAGES
============================================================ */
const GALLERY_IMAGES = [
  { src: 'Hero Photos/showcase 2.webp',      label: 'Park City, Utah',    span: 'wide tall' },
  { src: 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-1.jpg',  label: 'Deer Valley',        span: 'medium normal' },
  { src: 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-5.jpg',  label: 'Deer Valley',        span: 'narrow short' },
  { src: 'Hero Photos/showcase 3.webp',      label: 'Mountain Estate',    span: 'narrow tall' },
  { src: 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-12.jpg', label: 'Deer Valley',        span: 'medium normal' },
  { src: 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-16.jpg', label: 'Deer Valley',        span: 'wide short' },
  { src: 'Jaffa Group Portfolo/White Pine Canyon I/172whitePineCanyon00.jpg', label: 'White Pine Canyon', span: 'medium tall' },
  { src: 'Hero Photos/showcase 4 .webp',     label: 'Mountain Living',    span: 'narrow normal' },
  { src: 'Jaffa Group Portfolo/The Colony/TheColony05.jpg',     label: 'The Colony',         span: 'narrow normal' },
  { src: 'Jaffa Group Portfolo/Glenwild/r-1-1024x797.jpg',      label: 'Glenwild',           span: 'medium short' },
  { src: 'Jaffa Group Portfolo/Federal Heights/j-3-1024x616.jpg', label: 'Federal Heights',  span: 'wide normal' },
  { src: 'Hero Photos/showcase6.webp',       label: 'Luxury Interior',    span: 'narrow normal' },
  { src: 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-22.jpg', label: 'Deer Valley',        span: 'medium normal' },
  { src: 'Jaffa Group Portfolo/White Pine Canyon I/172whitePineCanyon05.jpg', label: 'White Pine Canyon', span: 'narrow short' },
  { src: 'Hero Photos/showcase 7.webp',      label: 'Mountain Home',      span: 'medium tall' },
  { src: 'Jaffa Group Portfolo/The Colony/TheColony00.jpg',     label: 'The Colony',         span: 'narrow normal' },
];

/* Span class mapping */
const SPAN_MAP = {
  'wide tall':    { col: 'gallery__item--wide',   row: 'gallery__item--tall' },
  'wide normal':  { col: 'gallery__item--wide',   row: 'gallery__item--normal' },
  'wide short':   { col: 'gallery__item--wide',   row: 'gallery__item--short' },
  'medium tall':  { col: 'gallery__item--medium', row: 'gallery__item--tall' },
  'medium normal':{ col: 'gallery__item--medium', row: 'gallery__item--normal' },
  'medium short': { col: 'gallery__item--medium', row: 'gallery__item--short' },
  'narrow tall':  { col: 'gallery__item--narrow', row: 'gallery__item--tall' },
  'narrow normal':{ col: 'gallery__item--narrow', row: 'gallery__item--normal' },
  'narrow short': { col: 'gallery__item--narrow', row: 'gallery__item--short' },
};

/* ============================================================
   DATA — PROJECTS
============================================================ */
const PROJECTS = [
  {
    id: 'deer-valley',
    name: 'Deer Valley',
    location: 'Park City, Utah',
    category: 'mountain',
    cover: 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-1.jpg',
    images: [
      'Jaffa Group Portfolo/Deer Valley/Jaffa Group-1.jpg',
      'Jaffa Group Portfolo/Deer Valley/Jaffa Group-2.jpg',
      'Jaffa Group Portfolo/Deer Valley/Jaffa Group-3.jpg',
      'Jaffa Group Portfolo/Deer Valley/Jaffa Group-4.jpg',
      'Jaffa Group Portfolo/Deer Valley/Jaffa Group-5.jpg',
      'Jaffa Group Portfolo/Deer Valley/Jaffa Group-6.jpg',
      'Jaffa Group Portfolo/Deer Valley/Jaffa Group-7.jpg',
      'Jaffa Group Portfolo/Deer Valley/Jaffa Group-8.jpg',
      'Jaffa Group Portfolo/Deer Valley/Jaffa Group-9.jpg',
      'Jaffa Group Portfolo/Deer Valley/Jaffa Group-10.jpg',
      'Jaffa Group Portfolo/Deer Valley/Jaffa Group-11.jpg',
      'Jaffa Group Portfolo/Deer Valley/Jaffa Group-12.jpg',
    ],
  },
  {
    id: 'white-pine-canyon-i',
    name: 'White Pine Canyon I',
    location: 'Park City, Utah',
    category: 'mountain',
    cover: 'Jaffa Group Portfolo/White Pine Canyon I/172whitePineCanyon00.jpg',
    images: [
      'Jaffa Group Portfolo/White Pine Canyon I/172whitePineCanyon00.jpg',
      'Jaffa Group Portfolo/White Pine Canyon I/172whitePineCanyon01.jpg',
      'Jaffa Group Portfolo/White Pine Canyon I/172whitePineCanyon02.jpg',
      'Jaffa Group Portfolo/White Pine Canyon I/172whitePineCanyon03.jpg',
      'Jaffa Group Portfolo/White Pine Canyon I/172whitePineCanyon04.jpg',
      'Jaffa Group Portfolo/White Pine Canyon I/172whitePineCanyon05.jpg',
      'Jaffa Group Portfolo/White Pine Canyon I/172whitePineCanyon06.jpg',
      'Jaffa Group Portfolo/White Pine Canyon I/172whitePineCanyon07.jpg',
      'Jaffa Group Portfolo/White Pine Canyon I/172whitePineCanyon08.jpg',
      'Jaffa Group Portfolo/White Pine Canyon I/172whitePineCanyon09.jpg',
      'Jaffa Group Portfolo/White Pine Canyon I/172whitePineCanyon10.jpg',
    ],
  },
  {
    id: 'the-colony',
    name: 'The Colony',
    location: 'Park City, Utah',
    category: 'mountain',
    cover: 'Jaffa Group Portfolo/The Colony/TheColony00.jpg',
    images: [
      'Jaffa Group Portfolo/The Colony/TheColony00.jpg',
      'Jaffa Group Portfolo/The Colony/TheColony01.jpg',
      'Jaffa Group Portfolo/The Colony/TheColony02.jpg',
      'Jaffa Group Portfolo/The Colony/TheColony03.jpg',
      'Jaffa Group Portfolo/The Colony/TheColony04.jpg',
      'Jaffa Group Portfolo/The Colony/TheColony05.jpg',
      'Jaffa Group Portfolo/The Colony/TheColony06.jpg',
      'Jaffa Group Portfolo/The Colony/TheColony07.jpg',
    ],
  },
  {
    id: 'glenwild',
    name: 'Glenwild',
    location: 'Park City, Utah',
    category: 'modern',
    cover: 'Jaffa Group Portfolo/Glenwild/r-1-1024x797.jpg',
    images: [
      'Jaffa Group Portfolo/Glenwild/r-1-1024x797.jpg',
      'Jaffa Group Portfolo/Glenwild/r-3-1024x683.jpg',
      'Jaffa Group Portfolo/Glenwild/r-5-1024x691.jpg',
      'Jaffa Group Portfolo/Glenwild/r-7-1024x525.jpg',
      'Jaffa Group Portfolo/Glenwild/r-9-1024x614.jpg',
      'Jaffa Group Portfolo/Glenwild/r-11-1024x671.jpg',
      'Jaffa Group Portfolo/Glenwild/r-15-1024x683.jpg',
      'Jaffa Group Portfolo/Glenwild/r-21-1024x683.jpg',
      'Jaffa Group Portfolo/Glenwild/r-26-1024x689.jpg',
      'Jaffa Group Portfolo/Glenwild/r-34-1024x683.jpg',
    ],
  },
  {
    id: 'federal-heights',
    name: 'Federal Heights',
    location: 'Salt Lake City, Utah',
    category: 'urban',
    cover: 'Jaffa Group Portfolo/featured-federal-heights-1024x694.jpg',
    images: [
      'Jaffa Group Portfolo/Federal Heights/j-3-1024x616.jpg',
      'Jaffa Group Portfolo/Federal Heights/j-8-1024x659.jpg',
      'Jaffa Group Portfolo/Federal Heights/j-12-1024x687.jpg',
      'Jaffa Group Portfolo/Federal Heights/j-13c-1024x663.jpg',
      'Jaffa Group Portfolo/Federal Heights/j-14b-1024x678.jpg',
      'Jaffa Group Portfolo/Federal Heights/j-20-1024x692.jpg',
      'Jaffa Group Portfolo/Federal Heights/j-21-1024x679.jpg',
      'Jaffa Group Portfolo/Federal Heights/j-22-1024x683.jpg',
      'Jaffa Group Portfolo/Federal Heights/j-25-1024x609.jpg',
      'Jaffa Group Portfolo/Federal Heights/j-26-1024x683.jpg',
    ],
  },
  {
    id: 'quarry-mountain',
    name: 'Quarry Mountain',
    location: 'Park City, Utah',
    category: 'mountain',
    cover: 'Jaffa Group Portfolo/featured-quarry-mountain-1024x526.jpg',
    images: [
      'Jaffa Group Portfolo/featured-quarry-mountain-1024x526.jpg',
      'Jaffa Group Portfolo/featured-quarry-mountain-tall-1024x709.jpg',
      'Jaffa Group Portfolo/PrintSize-01-1024x551.jpg',
      'Jaffa Group Portfolo/PrintSize-04-1024x684.jpg',
      'Jaffa Group Portfolo/PrintSize-07-1024x684.jpg',
      'Jaffa Group Portfolo/PrintSize-12-1024x684.jpg',
    ],
  },
  {
    id: 'deer-valley-i',
    name: 'Deer Valley I',
    location: 'Park City, Utah',
    category: 'mountain',
    cover: 'Jaffa Group Portfolo/featured-deer-valley-i-1024x682.jpg',
    images: [
      'Jaffa Group Portfolo/featured-deer-valley-i-1024x682.jpg',
      'Jaffa Group Portfolo/PrintSize-18-1024x684.jpg',
      'Jaffa Group Portfolo/PrintSize-20-1024x684.jpg',
      'Jaffa Group Portfolo/PrintSize-26-1024x684.jpg',
      'Jaffa Group Portfolo/PrintSize-27-1024x684.jpg',
      'Jaffa Group Portfolo/PrintSize-31-684x1024.jpg',
    ],
  },
  {
    id: 'mountain-top',
    name: 'Mountain Top Spec',
    location: 'Park City, Utah',
    category: 'mountain',
    cover: 'Jaffa Group Portfolo/featured-mountain-top-spec-1024x576.jpg',
    images: [
      'Jaffa Group Portfolo/featured-mountain-top-spec-1024x576.jpg',
      'Jaffa Group Portfolo/PrintSize-32-1024x684.jpg',
      'Jaffa Group Portfolo/PrintSize-33-1024x684.jpg',
      'Jaffa Group Portfolo/PrintSize-35-684x1024.jpg',
      'Jaffa Group Portfolo/PrintSize-36-1024x684.jpg',
      'Jaffa Group Portfolo/PrintSize-37-1024x684.jpg',
    ],
  },
  {
    id: 'white-pine-vi',
    name: 'White Pine VI',
    location: 'Park City, Utah',
    category: 'mountain',
    cover: 'Jaffa Group Portfolo/featured-white-pine-vi-short-1024x477.jpg',
    images: [
      'Jaffa Group Portfolo/featured-white-pine-vi-short-1024x477.jpg',
      'Jaffa Group Portfolo/featured-white-pine-vi-tall-1024x709.jpg',
      'Jaffa Group Portfolo/PrintSize-38-1024x684.jpg',
      'Jaffa Group Portfolo/PrintSize-54-1024x682.jpg',
      'Jaffa Group Portfolo/PrintSize-57-1024x679.jpg',
    ],
  },
  {
    id: 'aerie-drive',
    name: 'Aerie Drive',
    location: 'Park City, Utah',
    category: 'modern',
    cover: 'Jaffa Group Portfolo/thumb_974aerieDrive-1.jpg',
    images: [
      'Jaffa Group Portfolo/thumb_974aerieDrive-1.jpg',
      'Jaffa Group Portfolo/007-2810TelemarkDr.jpg',
      'Jaffa Group Portfolo/008-2810TelemarkDr.jpg',
      'Jaffa Group Portfolo/018-2810TelemarkDr.jpg',
    ],
  },
  {
    id: 'american-saddler',
    name: 'American Saddler',
    location: 'Park City, Utah',
    category: 'modern',
    cover: 'Jaffa Group Portfolo/thumb_3308americanSaddler-1.jpg',
    images: [
      'Jaffa Group Portfolo/thumb_3308americanSaddler-1.jpg',
      'Jaffa Group Portfolo/ENTRY-2-1-1024x576.jpg',
      'Jaffa Group Portfolo/ENTRY-5-1024x576.jpg',
      'Jaffa Group Portfolo/POOL-AREA-2-1024x576.jpg',
      'Jaffa Group Portfolo/REAR-ELEVATION-1-1024x576.jpg',
      'Jaffa Group Portfolo/REAR-ELEVATION-2-1024x576.jpg',
    ],
  },
  {
    id: 'hawk-court',
    name: 'Hawk Court',
    location: 'Park City, Utah',
    category: 'mountain',
    cover: 'Jaffa Group Portfolo/thumb_7864HawkCourt-thumb.jpg',
    images: [
      'Jaffa Group Portfolo/thumb_7864HawkCourt-thumb.jpg',
      'Jaffa Group Portfolo/REAR-RIGHT-PERSPECTIVE-1024x576.jpg',
      'Jaffa Group Portfolo/REAR-POOL-DECK-PERSPECTIVE-1024x576.jpg',
      'Jaffa Group Portfolo/bath-1024x786.jpg',
    ],
  },
  {
    id: 'lucky-john',
    name: 'Lucky John Drive',
    location: 'Park City, Utah',
    category: 'modern',
    cover: 'Jaffa Group Portfolo/thumb_2381luckyJohnDrive-1.jpg',
    images: [
      'Jaffa Group Portfolo/thumb_2381luckyJohnDrive-1.jpg',
      'Jaffa Group Portfolo/IMG_3994_edited-683x1024.jpg',
      'Jaffa Group Portfolo/IMG_3997_edited-723x1024.jpg',
    ],
  },
  {
    id: 'michigan-lakefront',
    name: 'Michigan Lakefront',
    location: 'Michigan',
    category: 'lakefront',
    cover: 'Hero Photos/showcase 7.webp',
    images: [
      'Hero Photos/showcase 7.webp',
      'Hero Photos/showcase 5.webp',
      'Hero Photos/showcase6.webp',
    ],
  },
];

/* ============================================================
   DATA — PROJECT ARCHIVE (Full Directory)
============================================================ */
const PROJECT_ARCHIVE = [
  { name: 'Aerie Drive', folder: 'Aerie Drive', cover: 'Jaffa Group Portfolo/Aerie Drive/974aerieDrive00.jpg', images: ['Jaffa Group Portfolo/Aerie Drive/974aerieDrive00.jpg', 'Jaffa Group Portfolo/Aerie Drive/974aerieDrive01.jpg', 'Jaffa Group Portfolo/Aerie Drive/974aerieDrive02.jpg', 'Jaffa Group Portfolo/Aerie Drive/974aerieDrive03.jpg', 'Jaffa Group Portfolo/Aerie Drive/974aerieDrive04.jpg', 'Jaffa Group Portfolo/Aerie Drive/974aerieDrive05.jpg', 'Jaffa Group Portfolo/Aerie Drive/974aerieDrive06.jpg'] },
  { name: 'American Saddler', folder: 'American Saddler', cover: 'Jaffa Group Portfolo/American Saddler/J-12-1024x683.jpg', images: ['Jaffa Group Portfolo/American Saddler/J-12-1024x683.jpg', 'Jaffa Group Portfolo/American Saddler/J-14-1024x683.jpg', 'Jaffa Group Portfolo/American Saddler/J-15-1024x683.jpg', 'Jaffa Group Portfolo/American Saddler/J-17-1024x648.jpg', 'Jaffa Group Portfolo/American Saddler/J-19-1024x683.jpg', 'Jaffa Group Portfolo/American Saddler/J-23-1024x608.jpg', 'Jaffa Group Portfolo/American Saddler/J-24-1024x653.jpg', 'Jaffa Group Portfolo/American Saddler/J-27-1024x683.jpg', 'Jaffa Group Portfolo/American Saddler/J-3-1024x683.jpg', 'Jaffa Group Portfolo/American Saddler/J-31-1024x683.jpg', 'Jaffa Group Portfolo/American Saddler/J-32-1024x666.jpg', 'Jaffa Group Portfolo/American Saddler/J-33-1024x632.jpg', 'Jaffa Group Portfolo/American Saddler/J-5-1024x710.jpg', 'Jaffa Group Portfolo/American Saddler/J-7-1024x680.jpg', 'Jaffa Group Portfolo/American Saddler/J-8-1024x659.jpg'] },
  { name: 'American Saddler correct one', folder: 'American Saddler correct one', cover: 'Jaffa Group Portfolo/American Saddler correct one/3308americanSaddler00.jpg', images: ['Jaffa Group Portfolo/American Saddler correct one/3308americanSaddler00.jpg', 'Jaffa Group Portfolo/American Saddler correct one/3308americanSaddler01.jpg', 'Jaffa Group Portfolo/American Saddler correct one/3308americanSaddler02.jpg', 'Jaffa Group Portfolo/American Saddler correct one/3308americanSaddler03.jpg', 'Jaffa Group Portfolo/American Saddler correct one/3308americanSaddler04.jpg', 'Jaffa Group Portfolo/American Saddler correct one/3308americanSaddler05.jpg', 'Jaffa Group Portfolo/American Saddler correct one/3308americanSaddler06.jpg'] },
  { name: 'American Saddler1', folder: 'American Saddler1', cover: 'Jaffa Group Portfolo/American Saddler1/3308americanSaddler00.jpg', images: ['Jaffa Group Portfolo/American Saddler1/3308americanSaddler00.jpg', 'Jaffa Group Portfolo/American Saddler1/3308americanSaddler01.jpg', 'Jaffa Group Portfolo/American Saddler1/3308americanSaddler02.jpg', 'Jaffa Group Portfolo/American Saddler1/3308americanSaddler03.jpg', 'Jaffa Group Portfolo/American Saddler1/3308americanSaddler04.jpg', 'Jaffa Group Portfolo/American Saddler1/3308americanSaddler05.jpg', 'Jaffa Group Portfolo/American Saddler1/3308americanSaddler06.jpg'] },
  { name: 'Deer Valley', folder: 'Deer Valley', cover: 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-1.jpg', images: ['Jaffa Group Portfolo/Deer Valley/Jaffa Group-1.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-10.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-11.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-12.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-13.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-14.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-15.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-16.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-17.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-18.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-19.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-2.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-20.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-21.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-22.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-23.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-24.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-25.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-26.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-27.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-28.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-29.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-3.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-30.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-31.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-32.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-33.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-34.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-35.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-36.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-37.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-38.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-39.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-4.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-5.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-6.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-7.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-8.jpg', 'Jaffa Group Portfolo/Deer Valley/Jaffa Group-9.jpg'] },
  { name: 'DEER VALLEY I', folder: 'DEER VALLEY I', cover: 'Jaffa Group Portfolo/DEER VALLEY I/featured-deer-valley-i.jpg', images: ['Jaffa Group Portfolo/DEER VALLEY I/featured-deer-valley-i.jpg', 'Jaffa Group Portfolo/DEER VALLEY I/IMG_3994_edited.jpg', 'Jaffa Group Portfolo/DEER VALLEY I/IMG_3997_edited.jpg', 'Jaffa Group Portfolo/DEER VALLEY I/PrintSize-01.jpg', 'Jaffa Group Portfolo/DEER VALLEY I/PrintSize-04.jpg', 'Jaffa Group Portfolo/DEER VALLEY I/PrintSize-07.jpg', 'Jaffa Group Portfolo/DEER VALLEY I/PrintSize-12.jpg', 'Jaffa Group Portfolo/DEER VALLEY I/PrintSize-18.jpg', 'Jaffa Group Portfolo/DEER VALLEY I/PrintSize-20.jpg', 'Jaffa Group Portfolo/DEER VALLEY I/PrintSize-26.jpg', 'Jaffa Group Portfolo/DEER VALLEY I/PrintSize-27.jpg', 'Jaffa Group Portfolo/DEER VALLEY I/PrintSize-31.jpg', 'Jaffa Group Portfolo/DEER VALLEY I/PrintSize-32.jpg', 'Jaffa Group Portfolo/DEER VALLEY I/PrintSize-33.jpg', 'Jaffa Group Portfolo/DEER VALLEY I/PrintSize-35.jpg', 'Jaffa Group Portfolo/DEER VALLEY I/PrintSize-36.jpg', 'Jaffa Group Portfolo/DEER VALLEY I/PrintSize-37.jpg', 'Jaffa Group Portfolo/DEER VALLEY I/PrintSize-38.jpg', 'Jaffa Group Portfolo/DEER VALLEY I/PrintSize-54.jpg', 'Jaffa Group Portfolo/DEER VALLEY I/PrintSize-57.jpg'] },
  { name: 'duck hook', folder: 'duck hook', cover: 'Jaffa Group Portfolo/duck hook/rm-duckHookB01.jpg', images: ['Jaffa Group Portfolo/duck hook/rm-duckHookB01.jpg', 'Jaffa Group Portfolo/duck hook/rm-duckHookB05.jpg', 'Jaffa Group Portfolo/duck hook/rm-duckHookB10.jpg', 'Jaffa Group Portfolo/duck hook/rm-duckHookB11.jpg', 'Jaffa Group Portfolo/duck hook/rm-duckHookB12.jpg', 'Jaffa Group Portfolo/duck hook/rm-duckHookB13.jpg', 'Jaffa Group Portfolo/duck hook/rm-duckHookB14.jpg', 'Jaffa Group Portfolo/duck hook/rm-duckHookB15.jpg', 'Jaffa Group Portfolo/duck hook/rm-duckHookB16.jpg', 'Jaffa Group Portfolo/duck hook/rm-duckHookB17.jpg', 'Jaffa Group Portfolo/duck hook/rm-duckHookB18.jpg', 'Jaffa Group Portfolo/duck hook/rm-duckHookB19.jpg', 'Jaffa Group Portfolo/duck hook/rm-duckHookB20.jpg', 'Jaffa Group Portfolo/duck hook/rm-duckHookB21.jpg', 'Jaffa Group Portfolo/duck hook/rm-duckHookB22.jpg', 'Jaffa Group Portfolo/duck hook/rm-duckHookB23.jpg', 'Jaffa Group Portfolo/duck hook/rm-duckHookB24.jpg', 'Jaffa Group Portfolo/duck hook/rm-duckHookB25.jpg', 'Jaffa Group Portfolo/duck hook/rm-duckHookB26.jpg', 'Jaffa Group Portfolo/duck hook/rm-duckHookB27.jpg', 'Jaffa Group Portfolo/duck hook/rm-duckHookB28.jpg', 'Jaffa Group Portfolo/duck hook/rm-duckHookB29.jpg', 'Jaffa Group Portfolo/duck hook/rm-duckHookB30.jpg', 'Jaffa Group Portfolo/duck hook/rm-duckHookB31.jpg', 'Jaffa Group Portfolo/duck hook/rm-duckHookB32.jpg'] },
  { name: 'Fairway Hills Court', folder: 'Fairway Hills Court', cover: 'Jaffa Group Portfolo/Fairway Hills Court/FairwayHillsCourt00.jpg', images: ['Jaffa Group Portfolo/Fairway Hills Court/FairwayHillsCourt00.jpg', 'Jaffa Group Portfolo/Fairway Hills Court/FairwayHillsCourt01.jpg', 'Jaffa Group Portfolo/Fairway Hills Court/FairwayHillsCourt02.jpg', 'Jaffa Group Portfolo/Fairway Hills Court/FairwayHillsCourt03.jpg', 'Jaffa Group Portfolo/Fairway Hills Court/FairwayHillsCourt04.jpg', 'Jaffa Group Portfolo/Fairway Hills Court/FairwayHillsCourt05.jpg', 'Jaffa Group Portfolo/Fairway Hills Court/FairwayHillsCourt06.jpg', 'Jaffa Group Portfolo/Fairway Hills Court/FairwayHillsCourt07.jpg', 'Jaffa Group Portfolo/Fairway Hills Court/FairwayHillsCourt08.jpg', 'Jaffa Group Portfolo/Fairway Hills Court/FairwayHillsCourt09.jpg', 'Jaffa Group Portfolo/Fairway Hills Court/FairwayHillsCourt10.jpg', 'Jaffa Group Portfolo/Fairway Hills Court/FairwayHillsCourt11.jpg', 'Jaffa Group Portfolo/Fairway Hills Court/FairwayHillsCourt12 (1).jpg', 'Jaffa Group Portfolo/Fairway Hills Court/FairwayHillsCourt13.jpg'] },
  { name: 'Federal Heights', folder: 'Federal Heights', cover: 'Jaffa Group Portfolo/Federal Heights/j-12-1024x687.jpg', images: ['Jaffa Group Portfolo/Federal Heights/j-12-1024x687.jpg', 'Jaffa Group Portfolo/Federal Heights/j-13c-1024x663.jpg', 'Jaffa Group Portfolo/Federal Heights/j-14b-1024x678.jpg', 'Jaffa Group Portfolo/Federal Heights/j-16-660x1024.jpg', 'Jaffa Group Portfolo/Federal Heights/j-17-683x1024.jpg', 'Jaffa Group Portfolo/Federal Heights/j-20-1024x692.jpg', 'Jaffa Group Portfolo/Federal Heights/j-21-1024x679.jpg', 'Jaffa Group Portfolo/Federal Heights/j-22-1024x683.jpg', 'Jaffa Group Portfolo/Federal Heights/j-25-1024x609.jpg', 'Jaffa Group Portfolo/Federal Heights/j-26-1024x683.jpg', 'Jaffa Group Portfolo/Federal Heights/j-28-1024x657.jpg', 'Jaffa Group Portfolo/Federal Heights/j-3-1024x616.jpg', 'Jaffa Group Portfolo/Federal Heights/j-31-691x1024.jpg', 'Jaffa Group Portfolo/Federal Heights/j-32-683x1024.jpg', 'Jaffa Group Portfolo/Federal Heights/j-33-1024x683.jpg', 'Jaffa Group Portfolo/Federal Heights/j-35-689x1024.jpg', 'Jaffa Group Portfolo/Federal Heights/j-8-1024x659.jpg'] },
  { name: 'Glenwild', folder: 'Glenwild', cover: 'Jaffa Group Portfolo/Glenwild/r-1-1024x797.jpg', images: ['Jaffa Group Portfolo/Glenwild/r-1-1024x797.jpg', 'Jaffa Group Portfolo/Glenwild/r-11-1024x671.jpg', 'Jaffa Group Portfolo/Glenwild/r-15-1024x683.jpg', 'Jaffa Group Portfolo/Glenwild/r-21-1024x683.jpg', 'Jaffa Group Portfolo/Glenwild/r-26-1024x689.jpg', 'Jaffa Group Portfolo/Glenwild/r-3-1024x683.jpg', 'Jaffa Group Portfolo/Glenwild/r-34-1024x683.jpg', 'Jaffa Group Portfolo/Glenwild/r-5-1024x691.jpg', 'Jaffa Group Portfolo/Glenwild/r-7-1024x525.jpg', 'Jaffa Group Portfolo/Glenwild/r-9-1024x614.jpg'] },
  { name: 'Hawk Court', folder: 'Hawk Court', cover: 'Jaffa Group Portfolo/Hawk Court/7864HawkCourt00.jpg', images: ['Jaffa Group Portfolo/Hawk Court/7864HawkCourt00.jpg', 'Jaffa Group Portfolo/Hawk Court/7864HawkCourt01.jpg', 'Jaffa Group Portfolo/Hawk Court/7864HawkCourt02.jpg', 'Jaffa Group Portfolo/Hawk Court/7864HawkCourt03.jpg', 'Jaffa Group Portfolo/Hawk Court/7864HawkCourt04.jpg', 'Jaffa Group Portfolo/Hawk Court/7864HawkCourt05.jpg', 'Jaffa Group Portfolo/Hawk Court/7864HawkCourt06.jpg', 'Jaffa Group Portfolo/Hawk Court/7864HawkCourt07.jpg', 'Jaffa Group Portfolo/Hawk Court/7864HawkCourt08.jpg', 'Jaffa Group Portfolo/Hawk Court/7864HawkCourt09.jpg'] },
  { name: 'Holiday Ranch', folder: 'Holiday Ranch', cover: 'Jaffa Group Portfolo/Holiday Ranch/1-featured-photo.jpg', images: ['Jaffa Group Portfolo/Holiday Ranch/1-featured-photo.jpg', 'Jaffa Group Portfolo/Holiday Ranch/m-12-1.jpg', 'Jaffa Group Portfolo/Holiday Ranch/m-13-1.jpg', 'Jaffa Group Portfolo/Holiday Ranch/m-14-1.jpg', 'Jaffa Group Portfolo/Holiday Ranch/m-17-1.jpg', 'Jaffa Group Portfolo/Holiday Ranch/m-21-1.jpg', 'Jaffa Group Portfolo/Holiday Ranch/m-25-1.jpg', 'Jaffa Group Portfolo/Holiday Ranch/m-30-1.jpg', 'Jaffa Group Portfolo/Holiday Ranch/m-32-1.jpg', 'Jaffa Group Portfolo/Holiday Ranch/m-4-1.jpg', 'Jaffa Group Portfolo/Holiday Ranch/m-9-1.jpg'] },
  { name: 'Iron Caynon', folder: 'Iron Caynon', cover: 'Jaffa Group Portfolo/Iron Caynon/01-6J2A1614-Edit-Edit-Edit-1024x683.jpg', images: ['Jaffa Group Portfolo/Iron Caynon/01-6J2A1614-Edit-Edit-Edit-1024x683.jpg', 'Jaffa Group Portfolo/Iron Caynon/02-6J2A1636-1024x683.jpg', 'Jaffa Group Portfolo/Iron Caynon/03-Rothwell-1-of-1-2-1024x683.jpg', 'Jaffa Group Portfolo/Iron Caynon/04-6J2A2168-HDR-Edit-1024x683.jpg', 'Jaffa Group Portfolo/Iron Caynon/05-6J2A2326-Edit-1024x683.jpg', 'Jaffa Group Portfolo/Iron Caynon/06-DJI_0016-1024x682.jpg', 'Jaffa Group Portfolo/Iron Caynon/07-DJI_0031-HDR-1024x682.jpg', 'Jaffa Group Portfolo/Iron Caynon/08-Rothwell-5-of-35-1024x682.jpg', 'Jaffa Group Portfolo/Iron Caynon/09-rothwell-carport-2-1024x683.jpg', 'Jaffa Group Portfolo/Iron Caynon/10-rothwell-ext-back-5-1024x683.jpg', 'Jaffa Group Portfolo/Iron Caynon/11-rothwell-ext-outdoor-living-1024x683.jpg', 'Jaffa Group Portfolo/Iron Caynon/12-6J2A1798-Edit-1024x683.jpg', 'Jaffa Group Portfolo/Iron Caynon/13-6J2A1803-Edit-1024x683.jpg', 'Jaffa Group Portfolo/Iron Caynon/14-6J2A1488-1024x683.jpg', 'Jaffa Group Portfolo/Iron Caynon/15-6J2A1501-Edit-Edit-1024x682.jpg', 'Jaffa Group Portfolo/Iron Caynon/16-6J2A1511-Edit-3-1024x683.jpg', 'Jaffa Group Portfolo/Iron Caynon/17-6J2A1317-Edit-868x1024.jpg', 'Jaffa Group Portfolo/Iron Caynon/19-6J2A1527-1024x683.jpg', 'Jaffa Group Portfolo/Iron Caynon/20-6J2A1530-Edit-1024x683.jpg', 'Jaffa Group Portfolo/Iron Caynon/21-6J2A1664-Edit-1024x680.jpg', 'Jaffa Group Portfolo/Iron Caynon/22-6J2A1675-1024x683.jpg', 'Jaffa Group Portfolo/Iron Caynon/23-6J2A1852-Edit-1024x682.jpg', 'Jaffa Group Portfolo/Iron Caynon/24-rothwell-breakfast-table-2-1024x683.jpg', 'Jaffa Group Portfolo/Iron Caynon/25-Rothwell-16-of-35-1024x697.jpg', 'Jaffa Group Portfolo/Iron Caynon/26-6J2A1877-Edit-1024x683.jpg', 'Jaffa Group Portfolo/Iron Caynon/27-6J2A1564-HDR-1024x683.jpg', 'Jaffa Group Portfolo/Iron Caynon/27-Rothwell-9-of-35-1024x683.jpg', 'Jaffa Group Portfolo/Iron Caynon/28-Rothwell-26-of-35-1024x683.jpg', 'Jaffa Group Portfolo/Iron Caynon/29-Rothwell-28-of-35-1024x683.jpg', 'Jaffa Group Portfolo/Iron Caynon/30-rothwell-wine-cooler-1024x683.jpg', 'Jaffa Group Portfolo/Iron Caynon/6J2A3077-Edit-1024x683.jpg'] },
  { name: 'Lucky John', folder: 'Lucky John', cover: 'Jaffa Group Portfolo/Lucky John/2381luckyJohnDrive00.jpg', images: ['Jaffa Group Portfolo/Lucky John/2381luckyJohnDrive00.jpg', 'Jaffa Group Portfolo/Lucky John/2381luckyJohnDrive01.jpg', 'Jaffa Group Portfolo/Lucky John/2381luckyJohnDrive02.jpg', 'Jaffa Group Portfolo/Lucky John/2381luckyJohnDrive03.jpg', 'Jaffa Group Portfolo/Lucky John/2381luckyJohnDrive04.jpg', 'Jaffa Group Portfolo/Lucky John/2381luckyJohnDrive05.jpg', 'Jaffa Group Portfolo/Lucky John/2381luckyJohnDrive06.jpg', 'Jaffa Group Portfolo/Lucky John/2381luckyJohnDrive07.jpg', 'Jaffa Group Portfolo/Lucky John/2381luckyJohnDrive08.jpg', 'Jaffa Group Portfolo/Lucky John/2381luckyJohnDrive10.jpg', 'Jaffa Group Portfolo/Lucky John/2381luckyJohnDrive11.jpg', 'Jaffa Group Portfolo/Lucky John/2381luckyJohnDrive12.jpg', 'Jaffa Group Portfolo/Lucky John/2381luckyJohnDrive13.jpg', 'Jaffa Group Portfolo/Lucky John/pool-01.jpg', 'Jaffa Group Portfolo/Lucky John/pool-02.jpg', 'Jaffa Group Portfolo/Lucky John/pool-03.jpg', 'Jaffa Group Portfolo/Lucky John/pool-04.jpg', 'Jaffa Group Portfolo/Lucky John/pool-05.jpg'] },
  { name: 'Michigan Lakefront', folder: 'Michigan Lakefront', cover: 'Jaffa Group Portfolo/Michigan Lakefront/MARS7009-1024x682.jpg', images: ['Jaffa Group Portfolo/Michigan Lakefront/MARS7009-1024x682.jpg', 'Jaffa Group Portfolo/Michigan Lakefront/MARS70091-1024x682.jpg', 'Jaffa Group Portfolo/Michigan Lakefront/MARS70271-1024x683.jpg', 'Jaffa Group Portfolo/Michigan Lakefront/MARS7037-1024x683.jpg', 'Jaffa Group Portfolo/Michigan Lakefront/MARS70401-1024x683.jpg', 'Jaffa Group Portfolo/Michigan Lakefront/MARS7070-1024x683.jpg', 'Jaffa Group Portfolo/Michigan Lakefront/MARS7123-1024x683.jpg', 'Jaffa Group Portfolo/Michigan Lakefront/MARS7138-1024x683.jpg', 'Jaffa Group Portfolo/Michigan Lakefront/MARS7147-1024x683.jpg'] },
  { name: 'Mountain Top Spec Home', folder: 'Mountain Top Spec Home', cover: 'Jaffa Group Portfolo/Mountain Top Spec Home/ENTRY-2-1.jpg', images: ['Jaffa Group Portfolo/Mountain Top Spec Home/ENTRY-2-1.jpg', 'Jaffa Group Portfolo/Mountain Top Spec Home/ENTRY-5 (1).jpg', 'Jaffa Group Portfolo/Mountain Top Spec Home/ENTRY-5.jpg', 'Jaffa Group Portfolo/Mountain Top Spec Home/featured-mountain-top-spec.jpg', 'Jaffa Group Portfolo/Mountain Top Spec Home/POOL-AREA-2.jpg', 'Jaffa Group Portfolo/Mountain Top Spec Home/REAR-ELEVATION-1.jpg', 'Jaffa Group Portfolo/Mountain Top Spec Home/REAR-ELEVATION-2.jpg', 'Jaffa Group Portfolo/Mountain Top Spec Home/REAR-POOL-DECK-PERSPECTIVE.jpg', 'Jaffa Group Portfolo/Mountain Top Spec Home/REAR-RIGHT-PERSPECTIVE.jpg'] },
  { name: 'NR Flordia', folder: 'NR Flordia', cover: 'Jaffa Group Portfolo/NR Flordia/rm-nwFlorida01.jpg', images: ['Jaffa Group Portfolo/NR Flordia/rm-nwFlorida01.jpg', 'Jaffa Group Portfolo/NR Flordia/rm-nwFlorida02.jpg', 'Jaffa Group Portfolo/NR Flordia/rm-nwFlorida03.jpg', 'Jaffa Group Portfolo/NR Flordia/rm-nwFlorida04.jpg', 'Jaffa Group Portfolo/NR Flordia/rm-nwFlorida05.jpg', 'Jaffa Group Portfolo/NR Flordia/rm-nwFlorida06.jpg', 'Jaffa Group Portfolo/NR Flordia/rm-nwFlorida07.jpg', 'Jaffa Group Portfolo/NR Flordia/rm-nwFlorida08.jpg', 'Jaffa Group Portfolo/NR Flordia/rm-nwFlorida09.jpg', 'Jaffa Group Portfolo/NR Flordia/rm-nwFlorida10.jpg', 'Jaffa Group Portfolo/NR Flordia/rm-nwFlorida11.jpg', 'Jaffa Group Portfolo/NR Flordia/rm-nwFlorida12.jpg', 'Jaffa Group Portfolo/NR Flordia/rm-nwFlorida13.jpg', 'Jaffa Group Portfolo/NR Flordia/rm-nwFlorida14.jpg', 'Jaffa Group Portfolo/NR Flordia/rm-nwFlorida15.jpg', 'Jaffa Group Portfolo/NR Flordia/rm-nwFlorida16.jpg', 'Jaffa Group Portfolo/NR Flordia/rm-nwFlorida17.jpg'] },
  { name: 'oakwood', folder: 'oakwood', cover: 'Jaffa Group Portfolo/oakwood/rm-oakwood01.jpg', images: ['Jaffa Group Portfolo/oakwood/rm-oakwood01.jpg', 'Jaffa Group Portfolo/oakwood/rm-oakwood02.jpg', 'Jaffa Group Portfolo/oakwood/rm-oakwood03.jpg', 'Jaffa Group Portfolo/oakwood/rm-oakwood04.jpg'] },
  { name: 'Old Town', folder: 'Old Town', cover: 'Jaffa Group Portfolo/Old Town/20180823_SKI-LOUNGE-REVISED-RENDERINGS-1.jpg', images: ['Jaffa Group Portfolo/Old Town/20180823_SKI-LOUNGE-REVISED-RENDERINGS-1.jpg', 'Jaffa Group Portfolo/Old Town/20180823_SKI-LOUNGE-REVISED-RENDERINGS-11.jpg', 'Jaffa Group Portfolo/Old Town/20180823_SKI-LOUNGE-REVISED-RENDERINGS-3.jpg', 'Jaffa Group Portfolo/Old Town/20180823_SKI-LOUNGE-REVISED-RENDERINGS-5.jpg', 'Jaffa Group Portfolo/Old Town/20180823_SKI-LOUNGE-REVISED-RENDERINGS-7.jpg', 'Jaffa Group Portfolo/Old Town/20180823_SKI-LOUNGE-REVISED-RENDERINGS-9.jpg', 'Jaffa Group Portfolo/Old Town/featured-old-town.jpg'] },
  { name: 'Park City Iron Mountain', folder: 'Park City Iron Mountain', cover: 'Jaffa Group Portfolo/Park City Iron Mountain/featured-park-city-iron-mountain.jpg', images: ['Jaffa Group Portfolo/Park City Iron Mountain/featured-park-city-iron-mountain.jpg', 'Jaffa Group Portfolo/Park City Iron Mountain/p01.jpg', 'Jaffa Group Portfolo/Park City Iron Mountain/p02.jpg', 'Jaffa Group Portfolo/Park City Iron Mountain/p03.jpg', 'Jaffa Group Portfolo/Park City Iron Mountain/p04.jpg', 'Jaffa Group Portfolo/Park City Iron Mountain/p05.jpg'] },
  { name: 'Park Meadows _ Modern Barn', folder: 'Park Meadows _ Modern Barn', cover: 'Jaffa Group Portfolo/Park Meadows _ Modern Barn/K-11-1024x709.jpg', images: ['Jaffa Group Portfolo/Park Meadows _ Modern Barn/K-11-1024x709.jpg', 'Jaffa Group Portfolo/Park Meadows _ Modern Barn/K-12-1024x683.jpg', 'Jaffa Group Portfolo/Park Meadows _ Modern Barn/K-13-1024x657.jpg', 'Jaffa Group Portfolo/Park Meadows _ Modern Barn/K-15-1024x683.jpg', 'Jaffa Group Portfolo/Park Meadows _ Modern Barn/K-18-1024x683.jpg', 'Jaffa Group Portfolo/Park Meadows _ Modern Barn/K-2-1024x505.jpg', 'Jaffa Group Portfolo/Park Meadows _ Modern Barn/K-20-1024x683.jpg', 'Jaffa Group Portfolo/Park Meadows _ Modern Barn/K-23-1024x683.jpg', 'Jaffa Group Portfolo/Park Meadows _ Modern Barn/K-24-1024x683.jpg', 'Jaffa Group Portfolo/Park Meadows _ Modern Barn/K-25-1024x683.jpg', 'Jaffa Group Portfolo/Park Meadows _ Modern Barn/K-26-copy-1024x786.jpg', 'Jaffa Group Portfolo/Park Meadows _ Modern Barn/K-27-copy-1024x786.jpg', 'Jaffa Group Portfolo/Park Meadows _ Modern Barn/K-3-1024x674.jpg', 'Jaffa Group Portfolo/Park Meadows _ Modern Barn/K-30-1024x677.jpg', 'Jaffa Group Portfolo/Park Meadows _ Modern Barn/K-31-1024x652.jpg', 'Jaffa Group Portfolo/Park Meadows _ Modern Barn/K-4-1024x594.jpg', 'Jaffa Group Portfolo/Park Meadows _ Modern Barn/K-9-1024x715.jpg'] },
  { name: 'Park Medow II', folder: 'Park Medow II', cover: 'Jaffa Group Portfolo/Park Medow II/1-opt-lakeveiwrearleft-1024x637.jpg', images: ['Jaffa Group Portfolo/Park Medow II/1-opt-lakeveiwrearleft-1024x637.jpg', 'Jaffa Group Portfolo/Park Medow II/2-opt-lakeveiwbackcenter-1024x591.jpg', 'Jaffa Group Portfolo/Park Medow II/3-opt-lakeveiwrighrear-1024x537.jpg', 'Jaffa Group Portfolo/Park Medow II/4-opt-lakeveiwrightside-1024x695.jpg', 'Jaffa Group Portfolo/Park Medow II/5-opt-lakeveiwfront-1024x601.jpg', 'Jaffa Group Portfolo/Park Medow II/6-opt-p-9-1024x550.jpg', 'Jaffa Group Portfolo/Park Medow II/7-opt-p-8-1024x577.jpg', 'Jaffa Group Portfolo/Park Medow II/8-opt-p-11-724x1024.jpg', 'Jaffa Group Portfolo/Park Medow II/9-opt-p-14-908x1024.jpg'] },
  { name: 'Preserve', folder: 'Preserve', cover: 'Jaffa Group Portfolo/Preserve/LS-1-1024x618.jpg', images: ['Jaffa Group Portfolo/Preserve/LS-1-1024x618.jpg', 'Jaffa Group Portfolo/Preserve/LS-11-1024x515.jpg', 'Jaffa Group Portfolo/Preserve/LS-14-1024x674.jpg', 'Jaffa Group Portfolo/Preserve/LS-16-1024x688.jpg', 'Jaffa Group Portfolo/Preserve/LS-20-1024x683.jpg', 'Jaffa Group Portfolo/Preserve/LS-21-1024x691.jpg', 'Jaffa Group Portfolo/Preserve/LS-23-1024x668.jpg', 'Jaffa Group Portfolo/Preserve/LS-25-1024x688.jpg', 'Jaffa Group Portfolo/Preserve/LS-26-1024x680.jpg', 'Jaffa Group Portfolo/Preserve/LS-27-1024x683.jpg', 'Jaffa Group Portfolo/Preserve/LS-28-copy-1024x786.jpg', 'Jaffa Group Portfolo/Preserve/LS-4-1024x661.jpg', 'Jaffa Group Portfolo/Preserve/LS-6-1024x801.jpg'] },
  { name: 'Promontory -', folder: 'Promontory -', cover: 'Jaffa Group Portfolo/Promontory -/1-Promontory-Road-CMelissa-Kelsey.jpg', images: ['Jaffa Group Portfolo/Promontory -/1-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/10-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/11-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/12-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/13-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/14-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/15-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/16-Promontory-Road-CMelissa-Kelsey (1).jpg', 'Jaffa Group Portfolo/Promontory -/16-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/17-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/18-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/19-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/2-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/20-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/21-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/22-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/23-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/24-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/25-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/26-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/27-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/28-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/29-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/3-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/30-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/31-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/32-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/33-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/34-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/35-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/36-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/37-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/38-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/39-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/4-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/40-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/41-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/42-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/43-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/44-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/45-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/46-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/47-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/48-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/49-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/5-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/50-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/51-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/52-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/53-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/54-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/55-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/56-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/57-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/58-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/6-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/7-Promontory-Road-CMelissa-Kelsey.jpg', 'Jaffa Group Portfolo/Promontory -/8-Promontory-Road-CMelissa-Kelsey.jpg'] },
  { name: 'Promontory I', folder: 'Promontory I', cover: 'Jaffa Group Portfolo/Promontory I/G-1-1024x570.jpg', images: ['Jaffa Group Portfolo/Promontory I/G-1-1024x570.jpg', 'Jaffa Group Portfolo/Promontory I/G-12-684x1024.jpg', 'Jaffa Group Portfolo/Promontory I/G-13-1024x683.jpg', 'Jaffa Group Portfolo/Promontory I/G-23-683x1024.jpg', 'Jaffa Group Portfolo/Promontory I/G-24-660x1024.jpg', 'Jaffa Group Portfolo/Promontory I/G-6.jpg', 'Jaffa Group Portfolo/Promontory I/G-8-1024x683.jpg'] },
  { name: 'Promontory VI', folder: 'Promontory VI', cover: 'Jaffa Group Portfolo/Promontory VI/1-Promontory-Road-CMelissa-Kelsey-1024x645.jpg', images: ['Jaffa Group Portfolo/Promontory VI/1-Promontory-Road-CMelissa-Kelsey-1024x645.jpg', 'Jaffa Group Portfolo/Promontory VI/10-Promontory-Road-CMelissa-Kelsey-683x1024.jpg', 'Jaffa Group Portfolo/Promontory VI/11-Promontory-Road-CMelissa-Kelsey-713x1024.jpg', 'Jaffa Group Portfolo/Promontory VI/12-Promontory-Road-CMelissa-Kelsey-1024x676.jpg', 'Jaffa Group Portfolo/Promontory VI/13-Promontory-Road-CMelissa-Kelsey-1024x646.jpg', 'Jaffa Group Portfolo/Promontory VI/14-Promontory-Road-CMelissa-Kelsey-1024x683.jpg', 'Jaffa Group Portfolo/Promontory VI/15-Promontory-Road-CMelissa-Kelsey-1024x704.jpg', 'Jaffa Group Portfolo/Promontory VI/16-Promontory-Road-CMelissa-Kelsey-684x1024.jpg', 'Jaffa Group Portfolo/Promontory VI/17-Promontory-Road-CMelissa-Kelsey-1024x709.jpg', 'Jaffa Group Portfolo/Promontory VI/18-Promontory-Road-CMelissa-Kelsey-683x1024.jpg', 'Jaffa Group Portfolo/Promontory VI/19-Promontory-Road-CMelissa-Kelsey-683x1024.jpg', 'Jaffa Group Portfolo/Promontory VI/2-Promontory-Road-CMelissa-Kelsey-1024x683.jpg', 'Jaffa Group Portfolo/Promontory VI/20-Promontory-Road-CMelissa-Kelsey-713x1024.jpg', 'Jaffa Group Portfolo/Promontory VI/21-Promontory-Road-CMelissa-Kelsey-697x1024.jpg', 'Jaffa Group Portfolo/Promontory VI/22-Promontory-Road-CMelissa-Kelsey-1024x684.jpg', 'Jaffa Group Portfolo/Promontory VI/23-Promontory-Road-CMelissa-Kelsey-1024x683.jpg', 'Jaffa Group Portfolo/Promontory VI/24-Promontory-Road-CMelissa-Kelsey-1024x683.jpg', 'Jaffa Group Portfolo/Promontory VI/25-Promontory-Road-CMelissa-Kelsey-1024x683.jpg', 'Jaffa Group Portfolo/Promontory VI/26-Promontory-Road-CMelissa-Kelsey-1024x683.jpg', 'Jaffa Group Portfolo/Promontory VI/27-Promontory-Road-CMelissa-Kelsey-1024x686.jpg', 'Jaffa Group Portfolo/Promontory VI/28-Promontory-Road-CMelissa-Kelsey-1024x689.jpg', 'Jaffa Group Portfolo/Promontory VI/29-Promontory-Road-CMelissa-Kelsey-765x1024.jpg', 'Jaffa Group Portfolo/Promontory VI/3-Promontory-Road-CMelissa-Kelsey-1024x683.jpg', 'Jaffa Group Portfolo/Promontory VI/30-Promontory-Road-CMelissa-Kelsey-683x1024.jpg', 'Jaffa Group Portfolo/Promontory VI/31-Promontory-Road-CMelissa-Kelsey-1024x682.jpg', 'Jaffa Group Portfolo/Promontory VI/32-Promontory-Road-CMelissa-Kelsey-1024x683.jpg', 'Jaffa Group Portfolo/Promontory VI/33-Promontory-Road-CMelissa-Kelsey-683x1024.jpg', 'Jaffa Group Portfolo/Promontory VI/34-Promontory-Road-CMelissa-Kelsey-1024x683.jpg', 'Jaffa Group Portfolo/Promontory VI/35-Promontory-Road-CMelissa-Kelsey-1024x683.jpg', 'Jaffa Group Portfolo/Promontory VI/36-Promontory-Road-CMelissa-Kelsey-1024x695.jpg', 'Jaffa Group Portfolo/Promontory VI/37-Promontory-Road-CMelissa-Kelsey-1024x700.jpg', 'Jaffa Group Portfolo/Promontory VI/38-Promontory-Road-CMelissa-Kelsey-1024x681.jpg', 'Jaffa Group Portfolo/Promontory VI/39-Promontory-Road-CMelissa-Kelsey-1024x727.jpg', 'Jaffa Group Portfolo/Promontory VI/4-Promontory-Road-CMelissa-Kelsey-1024x645.jpg', 'Jaffa Group Portfolo/Promontory VI/40-Promontory-Road-CMelissa-Kelsey-1024x683.jpg', 'Jaffa Group Portfolo/Promontory VI/41-Promontory-Road-CMelissa-Kelsey-728x1024.jpg', 'Jaffa Group Portfolo/Promontory VI/42-Promontory-Road-CMelissa-Kelsey-705x1024.jpg', 'Jaffa Group Portfolo/Promontory VI/43-Promontory-Road-CMelissa-Kelsey-1024x690.jpg', 'Jaffa Group Portfolo/Promontory VI/44-Promontory-Road-CMelissa-Kelsey-1024x694.jpg', 'Jaffa Group Portfolo/Promontory VI/45-Promontory-Road-CMelissa-Kelsey-1024x683.jpg', 'Jaffa Group Portfolo/Promontory VI/46-Promontory-Road-CMelissa-Kelsey-1024x683.jpg', 'Jaffa Group Portfolo/Promontory VI/47-Promontory-Road-CMelissa-Kelsey-1024x682.jpg', 'Jaffa Group Portfolo/Promontory VI/48-Promontory-Road-CMelissa-Kelsey-1024x683.jpg', 'Jaffa Group Portfolo/Promontory VI/49-Promontory-Road-CMelissa-Kelsey-682x1024.jpg', 'Jaffa Group Portfolo/Promontory VI/5-Promontory-Road-CMelissa-Kelsey-1024x683.jpg', 'Jaffa Group Portfolo/Promontory VI/50-Promontory-Road-CMelissa-Kelsey-1024x683.jpg', 'Jaffa Group Portfolo/Promontory VI/51-Promontory-Road-CMelissa-Kelsey-1024x683.jpg', 'Jaffa Group Portfolo/Promontory VI/52-Promontory-Road-CMelissa-Kelsey-1024x698.jpg', 'Jaffa Group Portfolo/Promontory VI/53-Promontory-Road-CMelissa-Kelsey-683x1024.jpg', 'Jaffa Group Portfolo/Promontory VI/54-Promontory-Road-CMelissa-Kelsey-683x1024.jpg', 'Jaffa Group Portfolo/Promontory VI/55-Promontory-Road-CMelissa-Kelsey-683x1024.jpg', 'Jaffa Group Portfolo/Promontory VI/56-Promontory-Road-CMelissa-Kelsey-1024x683.jpg', 'Jaffa Group Portfolo/Promontory VI/57-Promontory-Road-CMelissa-Kelsey-1024x683.jpg', 'Jaffa Group Portfolo/Promontory VI/58-Promontory-Road-CMelissa-Kelsey-1024x683.jpg', 'Jaffa Group Portfolo/Promontory VI/6-Promontory-Road-CMelissa-Kelsey-744x1024.jpg', 'Jaffa Group Portfolo/Promontory VI/7-Promontory-Road-CMelissa-Kelsey-1024x682.jpg', 'Jaffa Group Portfolo/Promontory VI/8-Promontory-Road-CMelissa-Kelsey-685x1024.jpg'] },
  { name: 'Prospector', folder: 'Prospector', cover: 'Jaffa Group Portfolo/Prospector/Jaffa-Ski-Home-CMelissa-Kelsey-1.jpg', images: ['Jaffa Group Portfolo/Prospector/Jaffa-Ski-Home-CMelissa-Kelsey-1.jpg', 'Jaffa Group Portfolo/Prospector/Jaffa-Ski-Home-CMelissa-Kelsey-10.jpg', 'Jaffa Group Portfolo/Prospector/Jaffa-Ski-Home-CMelissa-Kelsey-11.jpg', 'Jaffa Group Portfolo/Prospector/Jaffa-Ski-Home-CMelissa-Kelsey-12.jpg', 'Jaffa Group Portfolo/Prospector/Jaffa-Ski-Home-CMelissa-Kelsey-13.jpg', 'Jaffa Group Portfolo/Prospector/Jaffa-Ski-Home-CMelissa-Kelsey-14.jpg', 'Jaffa Group Portfolo/Prospector/Jaffa-Ski-Home-CMelissa-Kelsey-15.jpg', 'Jaffa Group Portfolo/Prospector/Jaffa-Ski-Home-CMelissa-Kelsey-2.jpg', 'Jaffa Group Portfolo/Prospector/Jaffa-Ski-Home-CMelissa-Kelsey-3.jpg', 'Jaffa Group Portfolo/Prospector/Jaffa-Ski-Home-CMelissa-Kelsey-4.jpg', 'Jaffa Group Portfolo/Prospector/Jaffa-Ski-Home-CMelissa-Kelsey-5.jpg', 'Jaffa Group Portfolo/Prospector/Jaffa-Ski-Home-CMelissa-Kelsey-6.jpg', 'Jaffa Group Portfolo/Prospector/Jaffa-Ski-Home-CMelissa-Kelsey-7.jpg', 'Jaffa Group Portfolo/Prospector/Jaffa-Ski-Home-CMelissa-Kelsey-8.jpg', 'Jaffa Group Portfolo/Prospector/Jaffa-Ski-Home-CMelissa-Kelsey-9.jpg', 'Jaffa Group Portfolo/Prospector/prospector-before-1.jpg', 'Jaffa Group Portfolo/Prospector/prospector-before-2.jpg'] },
  { name: 'Quarry Mountain', folder: 'Quarry Mountain', cover: 'Jaffa Group Portfolo/Quarry Mountain/n-11-1024x525.jpg', images: ['Jaffa Group Portfolo/Quarry Mountain/n-11-1024x525.jpg', 'Jaffa Group Portfolo/Quarry Mountain/n-30-1024x683.jpg', 'Jaffa Group Portfolo/Quarry Mountain/n-34-1024x534.jpg', 'Jaffa Group Portfolo/Quarry Mountain/n-37-729x1024.jpg', 'Jaffa Group Portfolo/Quarry Mountain/n-41-1024x484.jpg', 'Jaffa Group Portfolo/Quarry Mountain/n-44-1024x683.jpg', 'Jaffa Group Portfolo/Quarry Mountain/n-48-645x1024.jpg', 'Jaffa Group Portfolo/Quarry Mountain/n-5-1024x683.jpg', 'Jaffa Group Portfolo/Quarry Mountain/n-50-683x1024.jpg', 'Jaffa Group Portfolo/Quarry Mountain/n-51-1024x728.jpg', 'Jaffa Group Portfolo/Quarry Mountain/n-53-1024x680.jpg', 'Jaffa Group Portfolo/Quarry Mountain/n-55-683x1024.jpg', 'Jaffa Group Portfolo/Quarry Mountain/n-58-1024x619.jpg', 'Jaffa Group Portfolo/Quarry Mountain/n-62a-1024x683.jpg', 'Jaffa Group Portfolo/Quarry Mountain/n-63-1024x649.jpg', 'Jaffa Group Portfolo/Quarry Mountain/n-64-714x1024.jpg', 'Jaffa Group Portfolo/Quarry Mountain/n-74-683x1024.jpg', 'Jaffa Group Portfolo/Quarry Mountain/n-75-1024x680.jpg', 'Jaffa Group Portfolo/Quarry Mountain/n-76-1024x706.jpg', 'Jaffa Group Portfolo/Quarry Mountain/NA-1-1024x576.jpg', 'Jaffa Group Portfolo/Quarry Mountain/NA-2-1024x576.jpg', 'Jaffa Group Portfolo/Quarry Mountain/NA-3-1024x576.jpg'] },
  { name: 'Salt Lake Bungalow', folder: 'Salt Lake Bungalow', cover: 'Jaffa Group Portfolo/Salt Lake Bungalow/Jaffa-Ski-Home-CMelissa-Kelsey-16.jpg', images: ['Jaffa Group Portfolo/Salt Lake Bungalow/Jaffa-Ski-Home-CMelissa-Kelsey-16.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/Jaffa-Ski-Home-CMelissa-Kelsey-17.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/Jaffa-Ski-Home-CMelissa-Kelsey-18.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/Jaffa-Ski-Home-CMelissa-Kelsey-19.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/Jaffa-Ski-Home-CMelissa-Kelsey-20.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/Jaffa-Ski-Home-CMelissa-Kelsey-21.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/Jaffa-Ski-Home-CMelissa-Kelsey-22.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/Jaffa-Ski-Home-CMelissa-Kelsey-23.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/Jaffa-Ski-Home-CMelissa-Kelsey-24.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/Jaffa-Ski-Home-CMelissa-Kelsey-25.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/Jaffa-Ski-Home-CMelissa-Kelsey-26.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/Jaffa-Ski-Home-CMelissa-Kelsey-27.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-1-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-10-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-11-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-12-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-13-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-14-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-15-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-16-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-17-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-18-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-19-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-2-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-20-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-21-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-22-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-23-scaled (1).jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-23-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-24-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-25-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-26-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-27-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-28-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-29-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-3-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-30-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-31-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-32-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-33-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-34-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-36-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-38-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-39-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-4-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-40-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-41-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-42-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/js-43-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-44-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-45-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-5-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-6-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-7-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-8-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/JS-9-scaled.jpg', 'Jaffa Group Portfolo/Salt Lake Bungalow/singer-before-1.jpg'] },
  { name: 'The Colony', folder: 'The Colony', cover: 'Jaffa Group Portfolo/The Colony/TheColony00.jpg', images: ['Jaffa Group Portfolo/The Colony/TheColony00.jpg', 'Jaffa Group Portfolo/The Colony/TheColony01.jpg', 'Jaffa Group Portfolo/The Colony/TheColony02.jpg', 'Jaffa Group Portfolo/The Colony/TheColony03.jpg', 'Jaffa Group Portfolo/The Colony/TheColony04.jpg', 'Jaffa Group Portfolo/The Colony/TheColony05.jpg', 'Jaffa Group Portfolo/The Colony/TheColony06.jpg', 'Jaffa Group Portfolo/The Colony/TheColony07.jpg'] },
  { name: 'White Pine', folder: 'White Pine', cover: 'Jaffa Group Portfolo/White Pine/ACP-9WPC-EDIT-11-1024x683.jpg', images: ['Jaffa Group Portfolo/White Pine/ACP-9WPC-EDIT-11-1024x683.jpg', 'Jaffa Group Portfolo/White Pine/ACP-9WPC-EDIT-20-1024x683.jpg', 'Jaffa Group Portfolo/White Pine/ACP-9WPC-EDIT-22-1024x683.jpg', 'Jaffa Group Portfolo/White Pine/ACP-9WPC-EDIT-25-1024x683.jpg', 'Jaffa Group Portfolo/White Pine/ACP-9WPC-EDIT-26-1024x683.jpg', 'Jaffa Group Portfolo/White Pine/ACP-9WPC-EDIT-29-1024x683.jpg', 'Jaffa Group Portfolo/White Pine/ACP-9WPC-EDIT-4-1024x683.jpg', 'Jaffa Group Portfolo/White Pine/ACP-9WPC-EDIT-41-1024x683.jpg', 'Jaffa Group Portfolo/White Pine/ACP-9WPC-EDIT18-1024x683.jpg', 'Jaffa Group Portfolo/White Pine/ACP-9WPC-EDIT46-Edit-1024x683.jpg', 'Jaffa Group Portfolo/White Pine/Rxxxx-1-of-14-1024x682.jpg'] },
  { name: 'White Pine Canyon I', folder: 'White Pine Canyon I', cover: 'Jaffa Group Portfolo/White Pine Canyon I/172whitePineCanyon00.jpg', images: ['Jaffa Group Portfolo/White Pine Canyon I/172whitePineCanyon00.jpg', 'Jaffa Group Portfolo/White Pine Canyon I/172whitePineCanyon01.jpg', 'Jaffa Group Portfolo/White Pine Canyon I/172whitePineCanyon02.jpg', 'Jaffa Group Portfolo/White Pine Canyon I/172whitePineCanyon03.jpg', 'Jaffa Group Portfolo/White Pine Canyon I/172whitePineCanyon04.jpg', 'Jaffa Group Portfolo/White Pine Canyon I/172whitePineCanyon05.jpg', 'Jaffa Group Portfolo/White Pine Canyon I/172whitePineCanyon06.jpg', 'Jaffa Group Portfolo/White Pine Canyon I/172whitePineCanyon07.jpg', 'Jaffa Group Portfolo/White Pine Canyon I/172whitePineCanyon08.jpg', 'Jaffa Group Portfolo/White Pine Canyon I/172whitePineCanyon09.jpg', 'Jaffa Group Portfolo/White Pine Canyon I/172whitePineCanyon10.jpg'] },
  { name: 'White Pine Canyon II', folder: 'White Pine Canyon II', cover: 'Jaffa Group Portfolo/White Pine Canyon II/162whitePine00.jpg', images: ['Jaffa Group Portfolo/White Pine Canyon II/162whitePine00.jpg', 'Jaffa Group Portfolo/White Pine Canyon II/162whitePine01.jpg', 'Jaffa Group Portfolo/White Pine Canyon II/162whitePine02.jpg', 'Jaffa Group Portfolo/White Pine Canyon II/162whitePine03.jpg', 'Jaffa Group Portfolo/White Pine Canyon II/162whitePine04.jpg', 'Jaffa Group Portfolo/White Pine Canyon II/162whitePine05.jpg', 'Jaffa Group Portfolo/White Pine Canyon II/162whitePine06.jpg', 'Jaffa Group Portfolo/White Pine Canyon II/162whitePine07.jpg', 'Jaffa Group Portfolo/White Pine Canyon II/162whitePine08.jpg', 'Jaffa Group Portfolo/White Pine Canyon II/162whitePine09.jpg', 'Jaffa Group Portfolo/White Pine Canyon II/162whitePine10.jpg'] },
  { name: 'White Pine Canyon III', folder: 'White Pine Canyon III', cover: 'Jaffa Group Portfolo/White Pine Canyon III/177whitePineCanyon00.jpg', images: ['Jaffa Group Portfolo/White Pine Canyon III/177whitePineCanyon00.jpg', 'Jaffa Group Portfolo/White Pine Canyon III/177whitePineCanyon01.jpg', 'Jaffa Group Portfolo/White Pine Canyon III/177whitePineCanyon02.jpg', 'Jaffa Group Portfolo/White Pine Canyon III/177whitePineCanyon03.jpg', 'Jaffa Group Portfolo/White Pine Canyon III/177whitePineCanyon04.jpg', 'Jaffa Group Portfolo/White Pine Canyon III/177whitePineCanyon05.jpg', 'Jaffa Group Portfolo/White Pine Canyon III/177whitePineCanyon06.jpg', 'Jaffa Group Portfolo/White Pine Canyon III/177whitePineCanyon07.jpg'] },
  { name: 'White Pine Canyon V', folder: 'White Pine Canyon V', cover: 'Jaffa Group Portfolo/White Pine Canyon V/AERIAL-TOWARDS-FRONT-ENRY.jpg', images: ['Jaffa Group Portfolo/White Pine Canyon V/AERIAL-TOWARDS-FRONT-ENRY.jpg', 'Jaffa Group Portfolo/White Pine Canyon V/AUTOCOURT-TOWARDS-FRONT-ENTRY.jpg', 'Jaffa Group Portfolo/White Pine Canyon V/ENTRY.jpg', 'Jaffa Group Portfolo/White Pine Canyon V/ENTRY2.jpg', 'Jaffa Group Portfolo/White Pine Canyon V/featured-white-pine-canyon-v.jpg', 'Jaffa Group Portfolo/White Pine Canyon V/REAR-ELEVATION.jpg', 'Jaffa Group Portfolo/White Pine Canyon V/REAR-MASTER-SUITE.jpg', 'Jaffa Group Portfolo/White Pine Canyon V/REAR-SKI-LOUNGE-2.jpg', 'Jaffa Group Portfolo/White Pine Canyon V/REAR-SKI-LOUNGE.jpg'] },
  { name: 'White Pine Canyon VII', folder: 'White Pine Canyon VII', cover: 'Jaffa Group Portfolo/White Pine Canyon VII/featured-white-pine-canyon-vii.jpg', images: ['Jaffa Group Portfolo/White Pine Canyon VII/featured-white-pine-canyon-vii.jpg', 'Jaffa Group Portfolo/White Pine Canyon VII/p01-1.jpg', 'Jaffa Group Portfolo/White Pine Canyon VII/p02-1.jpg', 'Jaffa Group Portfolo/White Pine Canyon VII/p03-1.jpg'] },
  { name: 'White pine VI', folder: 'White pine VI', cover: 'Jaffa Group Portfolo/White pine VI/JL-105b-1024x651.jpg', images: ['Jaffa Group Portfolo/White pine VI/JL-105b-1024x651.jpg', 'Jaffa Group Portfolo/White pine VI/JL-108-1024x680.jpg', 'Jaffa Group Portfolo/White pine VI/JL-114-1024x692.jpg', 'Jaffa Group Portfolo/White pine VI/JL-12-713x1024.jpg', 'Jaffa Group Portfolo/White pine VI/JL-128-1024x683.jpg', 'Jaffa Group Portfolo/White pine VI/JL-13-681x1024.jpg', 'Jaffa Group Portfolo/White pine VI/JL-15-1024x613.jpg', 'Jaffa Group Portfolo/White pine VI/JL-21b-1024x596.jpg', 'Jaffa Group Portfolo/White pine VI/JL-22-1024x629.jpg', 'Jaffa Group Portfolo/White pine VI/JL-23-1024x623.jpg', 'Jaffa Group Portfolo/White pine VI/JL-24-724x1024.jpg', 'Jaffa Group Portfolo/White pine VI/JL-25-683x1024.jpg', 'Jaffa Group Portfolo/White pine VI/JL-32-1024x683.jpg', 'Jaffa Group Portfolo/White pine VI/JL-34-1024x692.jpg', 'Jaffa Group Portfolo/White pine VI/JL-44-683x1024.jpg', 'Jaffa Group Portfolo/White pine VI/JL-5-1024x523.jpg', 'Jaffa Group Portfolo/White pine VI/JL-50-1024x683.jpg', 'Jaffa Group Portfolo/White pine VI/JL-52-1024x672.jpg', 'Jaffa Group Portfolo/White pine VI/JL-53b-679x1024.jpg', 'Jaffa Group Portfolo/White pine VI/JL-54-1024x683.jpg', 'Jaffa Group Portfolo/White pine VI/JL-57-1024x675.jpg', 'Jaffa Group Portfolo/White pine VI/JL-58b-1024x670.jpg', 'Jaffa Group Portfolo/White pine VI/JL-63-1024x691.jpg', 'Jaffa Group Portfolo/White pine VI/JL-65-1024x663.jpg', 'Jaffa Group Portfolo/White pine VI/JL-66-815x1024.jpg', 'Jaffa Group Portfolo/White pine VI/JL-73-1024x683.jpg', 'Jaffa Group Portfolo/White pine VI/JL-85-1024x865.jpg', 'Jaffa Group Portfolo/White pine VI/JL-92-1024x654.jpg', 'Jaffa Group Portfolo/White pine VI/JL-95-689x1024.jpg', 'Jaffa Group Portfolo/White pine VI/JL-96-658x1024.jpg', 'Jaffa Group Portfolo/White pine VI/L-2-1024x582.jpg', 'Jaffa Group Portfolo/White pine VI/L-3-1024x628.jpg', 'Jaffa Group Portfolo/White pine VI/L-8-1024x647.jpg'] }
];

/* ============================================================
   STATE
============================================================ */
let activeFilter = 'all';
let modalProject = null;
let currentArchiveProject = null;
let modalPage = 0;
let imagesPerPage = 6;
let lightboxImages = [];
let lightboxIndex = 0;

/* ============================================================
   CUSTOM CURSOR — (Desktop Only)
============================================================ */
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');

const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
const isSmallScreen = window.innerWidth <= 1024;

if (!isTouchDevice && !isSmallScreen) {
  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
  });

  (function animateFollower() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top  = followerY + 'px';
    requestAnimationFrame(animateFollower);
  })();

  /* Magnetic Buttons Effect */
  const magneticEls = document.querySelectorAll('.btn, .nav__logo, .back-to-top');
  magneticEls.forEach(el => {
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });

  /* Apply hover class to interactive elements */
  document.querySelectorAll('a, button, .gallery__marquee-item, .project-card, .modal__gallery-item, .back-to-top').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
} else {
  // Completely hide cursor elements if logic is disabled
  if (cursor) cursor.style.display = 'none';
  if (cursorFollower) cursorFollower.style.display = 'none';
}

/* ============================================================
   STICKY NAVIGATION
============================================================ */
/* ============================================================
   SCROLL UTILITIES (Progress & Back to Top)
============================================================ */
const scrollProgress = document.getElementById('scrollProgress');
const backToTop = document.getElementById('backToTop');
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const docH = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrolled / docH) * 100;

  // Update progress bar
  if (scrollProgress) scrollProgress.style.width = progress + '%';

  // Back to top visibility
  if (backToTop) {
    if (scrolled > 500) backToTop.classList.add('visible');
    else backToTop.classList.remove('visible');
  }

  // Nav sticky
  if (scrolled > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}, { passive: true });

if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================================
   MOBILE NAV
============================================================ */
const hamburger = document.getElementById('navHamburger');
const mobileNav  = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
  document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
});

mobileNav.querySelectorAll('.nav__mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ============================================================
   HERO PARALLAX
============================================================ */
const heroParallax = document.getElementById('heroParallax');

function updateParallax() {
  const scrolled = window.scrollY;
  const heroH = document.getElementById('hero').offsetHeight;
  if (scrolled < heroH) {
    const pct = scrolled / heroH;
    heroParallax.style.transform = `translateY(${pct * 15}%)`;
  }
}

window.addEventListener('scroll', updateParallax, { passive: true });

/* ============================================================
   INTERIOR ZOOM ON SCROLL
============================================================ */
const interiorZoomWrap = document.getElementById('interiorZoomWrap');
const interiorImg = document.getElementById('interiorImg');

function updateInteriorZoom() {
  if (!interiorZoomWrap) return;
  const rect = interiorZoomWrap.getBoundingClientRect();
  const wh = window.innerHeight;
  // Progress 0 (section top at bottom of viewport) → 1 (section bottom at top)
  const progress = Math.max(0, Math.min(1, (wh - rect.top) / (wh + rect.height)));
  const scale = 1 + progress * 0.12;
  interiorImg.style.transform = `scale(${scale})`;
}

window.addEventListener('scroll', updateInteriorZoom, { passive: true });

/* ============================================================
   SCROLL REVEAL — IntersectionObserver
============================================================ */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-fade, .process__step');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Slight stagger per sibling index
        const siblings = entry.target.parentElement.querySelectorAll(
          '.reveal-up, .reveal-left, .reveal-right, .reveal-fade, .process__step'
        );
        let idx = 0;
        siblings.forEach((s, si) => { if (s === entry.target) idx = si; });
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, idx * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(el => observer.observe(el));
}

/* ============================================================
   COUNTER ANIMATION
============================================================ */
function animateCounter(el) {
  const target = parseInt(el.dataset.count);
  const duration = 1800;
  const start = performance.now();

  function step(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }
  requestAnimationFrame(step);
}

function initCounters() {
  const counters = document.querySelectorAll('.stats__number');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

/* ============================================================
   BUILD GALLERY GRID
============================================================ */
function buildGallery() {
  const container = document.getElementById('galleryBento');
  if (!container) return;

  // Take first 9 high-quality images for the bento
  const bentoImages = GALLERY_IMAGES.slice(0, 9);

  bentoImages.forEach((imgData, idx) => {
    const item = document.createElement('div');
    item.className = 'gallery__item reveal-up';
    
    item.innerHTML = `
      <img src="${imgData.src}" alt="${imgData.label}" loading="lazy">
      <div class="gallery__data-tag">
        <span class="gallery__tag-loc">PARK CITY</span>
        <span class="gallery__tag-year">2024</span>
      </div>
      <div class="gallery__overlay">
        <span class="gallery__project-name">${imgData.label}</span>
      </div>
    `;

    // Open lightbox on click
    item.addEventListener('click', () => {
      openLightbox(GALLERY_IMAGES.map(g => g.src), GALLERY_IMAGES.indexOf(imgData));
    });

    // Cursor hover
    item.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    item.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));

    container.appendChild(item);
  });
}


/* ============================================================
   BUILD PROJECT ARCHIVE (SPLIT-STICKY INDEX)
============================================================ */
function buildProjectArchive() {
  const grid = document.getElementById('archiveGrid');
  const stickyImg = document.getElementById('archiveStickyImg');
  const stickyName = document.getElementById('archiveStickyName');
  if (!grid || !stickyImg) return;

  // Set initial state
  if (PROJECT_ARCHIVE.length > 0) {
    stickyImg.src = encodeURI(PROJECT_ARCHIVE[0].cover);
    stickyName.textContent = PROJECT_ARCHIVE[0].name;
    currentArchiveProject = PROJECTS.find(p => p.id === PROJECT_ARCHIVE[0].folder.toLowerCase().replace(/\s+/g, '-')) || {
      name: PROJECT_ARCHIVE[0].name,
      location: 'Park City, Utah',
      images: PROJECT_ARCHIVE[0].images && PROJECT_ARCHIVE[0].images.length > 0 ? PROJECT_ARCHIVE[0].images : [PROJECT_ARCHIVE[0].cover]
    };
  }

  // Handle sticky image click
  stickyImg.style.cursor = 'none'; // Will use custom cursor
  stickyImg.parentElement.addEventListener('click', () => {
    if (currentArchiveProject) openProjectModal(currentArchiveProject);
  });

  const updateStickyImage = (item, el) => {
    if (currentArchiveProject && currentArchiveProject.name === item.name) return;

    if (el) {
      document.querySelectorAll('.archive__item').forEach(i => i.classList.remove('active'));
      el.classList.add('active');
    }

    currentArchiveProject = PROJECTS.find(p => p.id === item.folder.toLowerCase().replace(/\s+/g, '-')) || {
      name: item.name,
      location: 'Park City, Utah',
      images: item.images && item.images.length > 0 ? item.images : [item.cover]
    };

    stickyImg.style.opacity = '0';
    stickyImg.style.transform = 'scale(1.05)';
    
    setTimeout(() => {
      stickyImg.src = encodeURI(item.cover);
      stickyName.textContent = item.name;
      stickyImg.style.opacity = '1';
      stickyImg.style.transform = 'scale(1)';
    }, 150);
  };

  const observerOptions = {
    root: null,
    rootMargin: '-40% 0px -40% 0px',
    threshold: 0
  };

  const archiveObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const itemIndex = entry.target.dataset.index;
        if (itemIndex !== undefined) {
          updateStickyImage(PROJECT_ARCHIVE[itemIndex], entry.target);
        }
      }
    });
  }, observerOptions);

  PROJECT_ARCHIVE.forEach((item, idx) => {
    const el = document.createElement('div');
    el.className = 'archive__item';
    el.dataset.index = idx;
    
    const num = (idx + 1).toString().padStart(2, '0');
    el.innerHTML = `
      <div class="archive__item-content">
        <span class="archive__num">${num}</span>
        <img src="${encodeURI(item.cover)}" class="archive__thumb" alt="${item.name}">
        <span class="archive__name">${item.name}</span>
      </div>
    `;

    el.addEventListener('mouseenter', () => {
      updateStickyImage(item, el);
      document.body.classList.add('cursor-hover');
    });

    el.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hover');
    });

    el.addEventListener('click', (e) => {
      e.preventDefault();
      openProjectModal(currentArchiveProject);
    });

    grid.appendChild(el);
    archiveObserver.observe(el);
  });
}


/* ============================================================
   PROJECT MODAL
============================================================ */
const modal = document.getElementById('projectModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalProjectName = document.getElementById('modalProjectName');
const modalProjectLocation = document.getElementById('modalProjectLocation');
const modalGallery = document.getElementById('modalGallery');
const modalPrev = document.getElementById('modalPrev');
const modalNext = document.getElementById('modalNext');
const modalCounter = document.getElementById('modalCounter');

function openProjectModal(project) {
  modalProject = project;
  modalPage = 0;
  modalProjectName.textContent = project.name;
  modalProjectLocation.textContent = project.location;
  renderModalPage();
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function renderModalPage() {
  if (!modalProject) return;
  const images = modalProject.images;
  const totalPages = Math.ceil(images.length / imagesPerPage);
  const start = modalPage * imagesPerPage;
  const pageImages = images.slice(start, start + imagesPerPage);

  modalGallery.innerHTML = '';
  pageImages.forEach((src, i) => {
    const item = document.createElement('div');
    item.className = 'modal__gallery-item';

    const img = document.createElement('img');
    img.src = src;
    img.alt = `${modalProject.name} — Photo ${start + i + 1}`;
    img.loading = 'lazy';

    item.appendChild(img);
    modalGallery.appendChild(item);

    // Click for lightbox
    item.addEventListener('click', () => {
      openLightbox(modalProject.images, start + i);
    });

    item.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    item.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));

    // Stagger animate in
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    setTimeout(() => {
      item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, i * 60);
  });

  modalCounter.textContent = `${modalPage + 1} / ${totalPages}`;
  modalPrev.style.opacity = modalPage === 0 ? '0.3' : '1';
  modalNext.style.opacity = modalPage >= totalPages - 1 ? '0.3' : '1';
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => { modalProject = null; }, 400);
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

modalPrev.addEventListener('click', () => {
  if (modalPage > 0) { modalPage--; renderModalPage(); }
});
modalNext.addEventListener('click', () => {
  if (!modalProject) return;
  const totalPages = Math.ceil(modalProject.images.length / imagesPerPage);
  if (modalPage < totalPages - 1) { modalPage++; renderModalPage(); }
});

/* ============================================================
   GALLERY LIGHTBOX
============================================================ */
const lightbox = document.getElementById('lightbox');
const lightboxOverlay = document.getElementById('lightboxOverlay');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

function openLightbox(images, idx) {
  lightboxImages = images;
  lightboxIndex = idx;
  setLightboxImage();
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function setLightboxImage() {
  lightboxImg.style.opacity = '0';
  lightboxImg.style.transform = 'scale(0.97)';
  setTimeout(() => {
    lightboxImg.src = lightboxImages[lightboxIndex];
    lightboxImg.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
    lightboxImg.style.opacity = '1';
    lightboxImg.style.transform = 'scale(1)';
  }, 100);
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = modal.classList.contains('open') ? 'hidden' : '';
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxOverlay.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', () => {
  lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
  setLightboxImage();
});
lightboxNext.addEventListener('click', () => {
  lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
  setLightboxImage();
});

/* ============================================================
   KEYBOARD NAVIGATION
============================================================ */
document.addEventListener('keydown', e => {
  if (lightbox.classList.contains('open')) {
    if (e.key === 'ArrowLeft') { lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length; setLightboxImage(); }
    if (e.key === 'ArrowRight') { lightboxIndex = (lightboxIndex + 1) % lightboxImages.length; setLightboxImage(); }
    if (e.key === 'Escape') closeLightbox();
    return;
  }
  if (modal.classList.contains('open')) {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft' && modalPage > 0) { modalPage--; renderModalPage(); }
    if (e.key === 'ArrowRight') {
      const totalPages = Math.ceil((modalProject?.images.length || 0) / imagesPerPage);
      if (modalPage < totalPages - 1) { modalPage++; renderModalPage(); }
    }
  }
});

/* ============================================================
   TOUCH SWIPE for LIGHTBOX & MODAL
============================================================ */
let touchStartX = 0;

function addSwipe(el, onLeft, onRight) {
  el.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
  el.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { diff > 0 ? onLeft() : onRight(); }
  }, { passive: true });
}

addSwipe(lightbox, () => {
  lightboxIndex = (lightboxIndex + 1) % lightboxImages.length; setLightboxImage();
}, () => {
  lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length; setLightboxImage();
});

/* ============================================================
   CONTACT FORM
============================================================ */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = document.getElementById('formSubmit');
    btn.textContent = 'Message Sent ✓';
    btn.style.background = '#2a9d2a';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.style.background = '';
      btn.disabled = false;
      contactForm.reset();
    }, 4000);
  });
}

/* ============================================================
   SMOOTH SCROLL for NAV LINKS
============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  });
});

/* ============================================================
   GOLD LINE DIVIDER for process steps on resize
============================================================ */
function handleResize() {
  imagesPerPage = window.innerWidth < 640 ? 3 : 6;
}
window.addEventListener('resize', handleResize);

/* ============================================================
   INIT
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  buildGallery();
  buildProjectArchive();
  initScrollReveal();
  initCounters();
  handleResize();
  updateParallax();
  updateInteriorZoom();

  // Add hover cursor to dynamically created elements
  function refreshCursorHover() {
    document.querySelectorAll('.project-card, .gallery__item, .modal__gallery-item').forEach(el => {
      if (!el.dataset.cursorBound) {
        el.dataset.cursorBound = '1';
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
      }
    });
  }

  // Initial refresh
  refreshCursorHover();

  // Refresh on modal open (after brief delay for DOM injection)
  const origOpen = openProjectModal;
});
