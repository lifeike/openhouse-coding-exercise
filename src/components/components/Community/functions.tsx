export const is_img_url = (imgurlarr: ImgArray) => {
  return new Promise(function (resolve, reject) {

    let flag = false
    if (!imgurlarr.imgUrl) resolve({
      ...imgurlarr,
      imgUrl: ''
    })

    if (imgurlarr.imgUrl.indexOf('?') != -1) {
      imgurlarr.imgUrl = imgurlarr.imgUrl.split('?')[0]
    }

    var ImgObj = new Image();
    ImgObj.src = imgurlarr.imgUrl;
    ImgObj.onload = function (res) {
      flag = true
      if (this.complete == true) {
        resolve({ ...imgurlarr });
      }
    }

    ImgObj.onerror = function (err) {
      flag = true
      reject({
        ...imgurlarr,
        imgUrl: ''
      })
    }

    let timer = setTimeout(() => {
      if (!flag) {
        reject({
          ...imgurlarr,
          imgUrl: ''
        })
        flag = true
      }
      timer = null
      clearTimeout(timer)
    }, 2000);
  })
};

export const isErrorImgHandler = (imgarr: coverimgArray) => {
  return new Promise((resolve, reject) => {
    let promiseImg: any = []
    imgarr.forEach((item: ImgArray) => {
      promiseImg.push(is_img_url(item))
    })

    Promise.allSettled(promiseImg).then((res: any) => {
      res = res.map((item: any) => {
        if (item.status == "fulfilled") {
          return item.value
        } else {
          return item.reason
        }
      })
      resolve(res)
    }, err => {
      reject(err)
    }
    )
  })

}

export const sortCommunities = (property: string) => {
  //sort communites by property
  return function (a: any, b: any) {
    const val1 = a[property].toUpperCase()
    const val2 = b[property].toUpperCase()
    return val1 < val2 ? -1 : val1 > val2 ? 1 : 0
  }
}

//average price of communites : { communityId:averagePrice}
export const getPricesList = (homes:HomeList) => {
  let result = homes.reduce((obj:any, item:any) => {
    let find = obj.find((i:any) => i.communityId === item.communityId)
    find
      ? find.count++ &&
        (find.total += parseFloat(item.price[Object.keys(item.price)[0]]))
      : obj.push({
          ...item,
          count: 1,
          total: parseFloat(item.price[Object.keys(item.price)[0]]),
        })
    return obj
  }, [])

  let averagePriceList:any = {}
  result.forEach((item:any) => {
    averagePriceList[item.communityId] = item.total / item.count
  })

  return averagePriceList
}

