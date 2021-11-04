declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';

declare interface ImgArray{
    group:string
    id:string
    imgUrl:string
    name:string
    _id:{
        $oid:string
    }
}
declare type coverimgArray = ImgArray[]