declare interface Homes {
    area:{
        $numberInt:string
    }
    communityId:string
    id:string
    price:{
        $numberInt:string
    }
    type:string
    _id:{
        $oid:string
    }
}

type HomeList = Homes[]

declare interface priceListobject{
    [key:string]:string
}
